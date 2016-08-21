using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using LiveCharts;
using Microsoft.Win32;
using VehicleBehaviorLearning.Engine;
using VehicleBehaviorLearning.Engine.Helper;
using VehicleBehaviorLearning.Engine.Vehicles.Behavior;
using VehicleBehaviorLearning.Properties;

namespace VehicleBehaviorLearning.Windows
{
    /// <summary>
    /// Interaktionslogik für MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            for (int i = 0; i < 40; i++)
            {
                SimulationSettings.Instance.VehicleBehaviors.Add(new RandomVehicleBehaviorFactory());
            }
        }

        private void OnLoaded(object sender, RoutedEventArgs e)
        {
            RacetrackSelectionDataGrid.SelectedIndex = 0;
        }

        private void SaveButton_OnClick(object sender, RoutedEventArgs e)
        {
            SimulationSettings.Instance.Save();
            SimulationSettings.Reload();
        }

        private void AddRandomVehicleBehaviorButton_OnClick(object sender, RoutedEventArgs e)
        {
            SimulationSettings.Instance.VehicleBehaviors.Add(new RandomVehicleBehaviorFactory());
        }

        private void AddVehicleBehaviorFromFileButton_OnClick(object sender, RoutedEventArgs e)
        {
            var ofd = new OpenFileDialog { CheckFileExists = true, Filter = "Vehicle Behavior (*.vbxml)|*.vbxml" };
            if (ofd.ShowDialog() == true)
                SimulationSettings.Instance.VehicleBehaviors.Add(new FileVehicleBehaviorFactory(ofd.FileName));
        }

        private void DeleteVehicleBehaviorButton_OnClick(object sender, RoutedEventArgs e)
        {
            while (VehicleListView.SelectedItems.Count > 0)
                SimulationSettings.Instance.VehicleBehaviors.Remove((VehicleBehaviorFactory)VehicleListView.SelectedItems[0]);
        }


        private async void StartButton_OnClick(object sender, RoutedEventArgs e)
        {
            Button source = (Button)sender;
            IsEnabled = false;
            source.Content = "Loading...";

            SimulationManager simulationManager = await SimulationManager.CreateAsync();

            Hide();
            new SimulationReportWindow(simulationManager).ShowDialog();
            Show();
            IsEnabled = true;
            source.Content = "Start";
        }
    }
}
