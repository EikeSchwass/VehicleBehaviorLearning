using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Windows;
using LiveCharts;
using OpenTK;
using VehicleBehaviorLearning.Engine;
using VehicleBehaviorLearning.Engine.Helper;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Threading;
using LiveCharts.Configurations;
using LiveCharts.Wpf;
using LiveCharts.Wpf.Series;
using VehicleBehaviorLearning.Engine.Vehicles.Behavior;

namespace VehicleBehaviorLearning.Windows
{
    /// <summary>
    /// Interaktionslogik für SimulationReportWindow.xaml
    /// </summary>
    public partial class SimulationReportWindow : Window
    {
        public SeriesCollection SeriesCollection { get; private set; }
        public SimulationManager SimulationManager { get; }

        private bool IsStopped { get; set; }

        public SimulationReportWindow(SimulationManager simulationManager)
        {
            SimulationManager = simulationManager;
            InitializeComponent();

        }

        public void Hover(ITreeNode treeNode, bool hover)
        {
            ChartPoint chartPoint = null;
            foreach (var series in RatingLineCharts.Series)
            {
                chartPoint = (series.Values.Points.
                Where(v => ((SimulationResult)v.Instance).VehicleBehavior.Equals((NeuronalVehicleBehavior)treeNode))).FirstOrDefault();
                if (chartPoint != null)
                    break;
            }
            
            if (hover)
                chartPoint?.View.OnHover(chartPoint);
            else
                chartPoint?.View.OnHoverLeave(chartPoint);
            Debug.WriteLine(chartPoint);
        }

        private void SimulationReportWindow_OnSizeChanged(object sender, SizeChangedEventArgs e)
        {
            RatingLineCharts.UpdateLayout();
        }

        private void SimulationReportWindow_OnLoaded(object sender, RoutedEventArgs e)
        {
            {
                var seriesConfiguration = Mappers.Xy<SimulationResult>();
                seriesConfiguration = seriesConfiguration.X(s => s.VehicleBehavior.GetGeneration()).Y(s => s.Rating);
                SeriesCollection = new SeriesCollection(seriesConfiguration);
                for (int i = 0; i < SimulationSettings.Instance.VehicleBehaviors.Count; i++)
                {
                    SeriesCollection.Add(new LineSeries { Title = $"#{i + 1}", Values = new ChartValues<SimulationResult>(), Fill = Brushes.Transparent });
                }
                RatingLineCharts.Series = SeriesCollection;
            }
            {
                var seriesConfiguration = Mappers.Xy<double>();
                seriesConfiguration = seriesConfiguration.X((x, i) => i).Y(s => Math.Round(s, 2));
                var seriesCollection = new SeriesCollection(seriesConfiguration)
                                   {
                                       new LineSeries {Title = "Deviation", Values = new ChartValues<double>(), Fill = Brushes.Transparent}
                                   };


                DeviationLineCharts.Series = seriesCollection;
            }
            {
                var seriesConfiguration = Mappers.Xy<double>();
                seriesConfiguration = seriesConfiguration.X((x, i) => i).Y(s => Math.Round(s, 2));
                var seriesCollection = new SeriesCollection(seriesConfiguration)
                                   {
                                       new LineSeries {Title = "Mutation", Values = new ChartValues<double>(), Fill = Brushes.Transparent}
                                   };


                MutationLineCharts.Series = seriesCollection;
            }
            SimulationManager.SimulationData.SimulationResultAdded += (simulationData, results) =>
                                                                      {
                                                                          Dispatcher.BeginInvoke(DispatcherPriority.Render, new Action(() => UpdateVisualization(simulationData, results)));
                                                                      };
        }

        private void UpdateVisualization(SimulationData simulationData, List<SimulationResult> results)
        {
            for (int i = 0; i < results.Count; i++)
            {
                if (SeriesCollection[i].Values.Count < 10)
                    SeriesCollection[i].Values.Add(results[i]);
                else
                {
                    var chartValues = new ChartValues<SimulationResult>();
                    chartValues.AddRange(SeriesCollection[i].Values.Rotate<SimulationResult>(-1));
                    SeriesCollection[i].Values = chartValues;
                }
                SeriesCollection[i].Values[SeriesCollection[i].Values.Count - 1] = results[i];
            }
            DeviationLineCharts.Series[0].Values.Add(SimulationManager.CalculateDeviation());
            MutationLineCharts.Series[0].Values.Add(SimulationManager.CalculateMutationChance());

            TreeViewControl.TreeNodes = simulationData.AllResults.Select(s => s.Select(k => k.VehicleBehavior).ToArray()).SelectMany(k => k);
        }

        private void StopButton_OnClick(object sender, RoutedEventArgs e)
        {
            IsStopped = true;
        }

        private async void RunButton_OnClick(object sender, RoutedEventArgs e)
        {
            RunButton.IsEnabled = false;
            SingleStepButton.IsEnabled = false;
            StopButton.IsEnabled = true;
            IsStopped = false;
            for (int i = 0; i < 10000 && !IsStopped; i++)
            {
                await SimulationManager.CompleteGenerationAsync();
                await Task.Delay(10);
            }
            IsStopped = true;
            RunButton.IsEnabled = true;
            SingleStepButton.IsEnabled = true;
            StopButton.IsEnabled = false;
        }

        private async void SingleStepButton_OnClick(object sender, RoutedEventArgs e)
        {
            await ShowSimulationWindow(SimulationManager.SimulationData.BestResults.Last().VehicleBehavior);
        }

        private async Task ShowSimulationWindow(NeuronalVehicleBehavior vehicleBehavior)
        {
            SimulationWindow simulationWindow = null;
            Thread th = new Thread(() =>
                                   {
                                       simulationWindow = new SimulationWindow(new Simulation(vehicleBehavior));
                                       simulationWindow.Run();
                                   });
            th.SetApartmentState(ApartmentState.STA);
            IsEnabled = false;
            th.Start();
            while (simulationWindow == null) await Task.Delay(50);
            SimulationManager.GenerationCompleted += (o, g) =>
                                                     {
                                                         simulationWindow.Close();
                                                         SimulationManager.Simulations.First().Reset();
                                                     };

            IsEnabled = true;
        }

        private async void TreeViewControl_OnTreeNodeClicked(object sender, ITreeNode node)
        {
            var neuronalVehicleBehavior = (NeuronalVehicleBehavior)node;
            await DisplaySingleBehavior(neuronalVehicleBehavior);
        }

        private async Task DisplaySingleBehavior(NeuronalVehicleBehavior neuronalVehicleBehavior)
        {
            var simulationResult = SimulationManager.SimulationData.AllResults.SelectMany(s => s.Select(k => k)).FirstOrDefault(s => s.VehicleBehavior.Equals(neuronalVehicleBehavior));
            SimulationResultDisplay.DataContext = simulationResult;
            //await ShowSimulationWindow(neuronalVehicleBehavior);
        }


        private void RatingLineCharts_OnDataClick(object arg1, ChartPoint arg2)
        {
            var simulationResult = (SimulationResult)arg2.Instance;
            SimulationResultDisplay.DataContext = simulationResult;
        }

        private void RatingLineCharts_OnDataMouseEnter(object arg1, ChartPoint arg2)
        {
            TreeViewControl.MarkEllipse(TreeViewControl.Ellipses.First(k => ((SimulationResult)arg2.Instance).VehicleBehavior.Equals(k.Tag)));
        }

        private void RatingLineCharts_OnDataMouseLeave(object arg1, ChartPoint arg2)
        {
            TreeViewControl.UnMarkEllipse(TreeViewControl.Ellipses.First(k => ((SimulationResult)arg2.Instance).VehicleBehavior.Equals(k.Tag)));
        }

        private void TreeViewControl_OnTreeNodeMouseEnter(object arg1, ITreeNode arg2)
        {
            Hover(arg2, true);
        }

        private void TreeViewControl_OnTreeNodeMouseLeave(object arg1, ITreeNode arg2)
        {
            Hover(arg2, false);
        }
    }
}
