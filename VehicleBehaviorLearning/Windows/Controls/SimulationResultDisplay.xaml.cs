using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Microsoft.Win32;
using VehicleBehaviorLearning.Engine;
using VehicleBehaviorLearning.Engine.Vehicles.Behavior;
using Line = System.Windows.Shapes.Line;

namespace VehicleBehaviorLearning.Windows.Controls
{
    /// <summary>
    /// Interaktionslogik für SimulationResultDisplay.xaml
    /// </summary>
    public partial class SimulationResultDisplay : UserControl
    {
        public event Action<SimulationResult> VisualizeRequested;

        public SimulationResultDisplay()
        {
            InitializeComponent();
        }

        private void SaveButton_OnClick(object sender, RoutedEventArgs e)
        {
            var simulationResult = (SimulationResult)DataContext;
            SaveFileDialog sfd = new SaveFileDialog
            {
                Filter = "Vehicle Behavior Files (*.vbxml)|*.vbxml"
            };
            if (sfd.ShowDialog(this.Parent as Window) == true)
                FileVehicleBehaviorFactory.Save(simulationResult.VehicleBehavior, sfd.FileName);
        }

        private void VisualizeButton_OnClick(object sender, RoutedEventArgs e)
        {
            VisualizeRequested?.Invoke((SimulationResult) DataContext);
        }

        private void SimulationResultDisplay_OnDataContextChanged(object sender, DependencyPropertyChangedEventArgs e)
        {
            var simulationResult = (SimulationResult)e.NewValue;
            DisplayTreeView(simulationResult);
        }

        private void DisplayTreeView(SimulationResult simulationResult)
        {
            NeuronalNetDisplayControl.NeuronalNet = simulationResult.VehicleBehavior;
        }
    }
}
