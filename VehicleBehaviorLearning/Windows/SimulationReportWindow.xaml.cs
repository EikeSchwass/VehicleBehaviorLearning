using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Windows;
using LiveCharts;
using OpenTK;
using VehicleBehaviorLearning.Engine;
using VehicleBehaviorLearning.Engine.Helper;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Media;
using System.Windows.Threading;
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

        private void SimulationReportWindow_OnSizeChanged(object sender, SizeChangedEventArgs e)
        {
            RatingLineCharts.Update();
        }

        private void SimulationReportWindow_OnLoaded(object sender, RoutedEventArgs e)
        {
            {
                var seriesConfiguration = new SeriesConfiguration<SimulationResult>();
                seriesConfiguration.X(s => s.VehicleBehavior.GetGeneration()).Y(s => s.Rating);
                SeriesCollection = new SeriesCollection(seriesConfiguration);
                for (int i = 0; i < SimulationSettings.Instance.VehicleBehaviors.Count; i++)
                {
                    SeriesCollection.Add(new LineSeries { Title = $"#{i + 1}", Values = new ChartValues<SimulationResult>(), Fill = Brushes.Transparent });
                }
                RatingLineCharts.Series = SeriesCollection;
            }
            {
                var seriesConfiguration = new SeriesConfiguration<double>();
                seriesConfiguration.Y(s => Math.Round(s, 2));
                var seriesCollection = new SeriesCollection(seriesConfiguration)
                                   {
                                       new LineSeries {Title = "Deviation", Values = new ChartValues<double>(), Fill = Brushes.Transparent}
                                   };


                DeviationLineCharts.Series = seriesCollection;
            }
            {
                var seriesConfiguration = new SeriesConfiguration<double>();
                seriesConfiguration.Y(s => Math.Round(s, 2));
                var seriesCollection = new SeriesCollection(seriesConfiguration)
                                   {
                                       new LineSeries {Title = "Mutation", Values = new ChartValues<double>(), Fill = Brushes.Transparent}
                                   };


                MutationLineCharts.Series = seriesCollection;
            }
            SimulationManager.SimulationData.SimulationResultAdded += (simulationData, results) =>
                                                                      {
                                                                          Dispatcher.BeginInvoke(DispatcherPriority.Render, new Action(() =>
                                                                                                                             {
                                                                                                                                 for (int i = 0; i < results.Count; i++)
                                                                                                                                 {
                                                                                                                                     if (SeriesCollection[i].Values.Count < 10)
                                                                                                                                         SeriesCollection[i].Values.Add(results[i]);
                                                                                                                                     else
                                                                                                                                         SeriesCollection[i].Values = new ChartValues<SimulationResult>().AddRange(SeriesCollection[i].Values.Rotate<SimulationResult>(-1));
                                                                                                                                     SeriesCollection[i].Values[SeriesCollection[i].Values.Count - 1] = results[i];
                                                                                                                                 }
                                                                                                                                 DeviationLineCharts.Series[0].Values.Add(SimulationManager.CalculateDeviation());
                                                                                                                                 MutationLineCharts.Series[0].Values.Add(SimulationManager.CalculateMutationChance());
                                                                                                                             }));
                                                                      };
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
                RatingLineCharts.UnsafeUpdate();
                await Task.Delay(10);
            }
            IsStopped = true;
            RunButton.IsEnabled = true;
            SingleStepButton.IsEnabled = true;
            StopButton.IsEnabled = false;
        }

        private async void SingleStepButton_OnClick(object sender, RoutedEventArgs e)
        {
            SimulationWindow simulationWindow = null;
            Thread th = new Thread(() =>
                                   {
                                       simulationWindow = new SimulationWindow(new Simulation(SimulationManager.SimulationData.BestResults.Last().VehicleBehavior));
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
    }
}
