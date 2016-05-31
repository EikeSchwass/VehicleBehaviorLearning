using System;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Windows.Controls;
using System.Xml.Serialization;
using OpenTK;
using VehicleBehaviorLearning.Engine.Helper;
using VehicleBehaviorLearning.Engine.Vehicles.Behavior;
using VehicleBehaviorLearning.Properties;
using Path = System.IO.Path;

namespace VehicleBehaviorLearning.Engine
{
    [Serializable]
    public class SimulationSettings : INotifyPropertyChanged
    {
        public static SimulationSettings Instance { get; private set; }
        static SimulationSettings()
        {
            Reload();
        }

        private float racetrackWidth = 28;
        private double sensorSpacingFactor = 0;
        private double sensorSpacing = 10f;
        private double maxUpdateTime = 0.016666;
        private bool useCurrentVehicleSpeedAsInput = false;
        private Racetrack selectedRacetrack;
        private int windowWidth = 800;
        private int windowHeight = 600;
        private double maxSimulationTime = 120;
        private double deltaAngleSmoothness = 0.1;
        private int countAngleSmoothness = 1;

        public CarChassisSettings CarChassisSettings { get; set; } = CarChassisSettings.Default;
        public VehicleSettings VehicleSettings { get; set; } = new VehicleSettings();
        public MachineLearningSettings MachineLearningSettings { get; set; } = new MachineLearningSettings();

        [XmlAttribute]
        public float RacetrackWidth
        {
            get { return racetrackWidth; }
            set
            {
                if (value.Equals(racetrackWidth)) return;
                racetrackWidth = value;
                OnPropertyChanged();
            }
        }
        [XmlAttribute]
        public bool UseCurrentVehicleSpeedAsInput
        {
            get { return useCurrentVehicleSpeedAsInput; }
            set
            {
                if (value == useCurrentVehicleSpeedAsInput) return;
                useCurrentVehicleSpeedAsInput = value;
                OnPropertyChanged();
                MachineLearningSettings.OnPropertyChanged(nameof(MachineLearningSettings.NumberOfInputNeurons));
            }
        }
        public double SensorSpacing
        {
            get { return sensorSpacing; }
            set
            {
                if (value.Equals(sensorSpacing)) return;
                sensorSpacing = value;
                OnPropertyChanged();
            }
        }
        [XmlAttribute]
        public double SensorSpacingFactor
        {
            get { return sensorSpacingFactor; }
            set
            {
                if (value.Equals(sensorSpacingFactor)) return;
                sensorSpacingFactor = value;
                OnPropertyChanged();

            }
        }
        [XmlAttribute]
        public double MaxUpdateTime
        {
            get { return maxUpdateTime; }
            set
            {
                if (value.Equals(maxUpdateTime)) return;
                maxUpdateTime = value;
                OnPropertyChanged();
            }
        }
        [XmlIgnore]
        public Racetrack SelectedRacetrack
        {
            get { return selectedRacetrack; }
            set
            {
                if (Equals(value, selectedRacetrack)) return;
                selectedRacetrack = value;
                OnPropertyChanged();
            }
        }

        [XmlIgnore]
        public ObservableCollection<VehicleBehaviorFactory> VehicleBehaviors { get; } = new ObservableCollection<VehicleBehaviorFactory>();

        public int WindowWidth
        {
            get { return windowWidth; }
            set
            {
                if (value.Equals(windowWidth))
                    return;
                windowWidth = value;
                OnPropertyChanged();
            }
        }
        public int WindowHeight
        {
            get { return windowHeight; }
            set
            {
                if (value.Equals(windowHeight))
                    return;
                windowHeight = value;
                OnPropertyChanged();
            }
        }

        public double MaxSimulationTime
        {
            get { return maxSimulationTime; }
            set
            {
                if (value.Equals(maxSimulationTime)) return;
                maxSimulationTime = value;
                OnPropertyChanged();
            }
        }

        [XmlAttribute]
        public double DeltaAngleSmoothness
        {
            get { return deltaAngleSmoothness; }
            set { deltaAngleSmoothness = value; }
        }

        [XmlAttribute]
        public int CountAngleSmoothness
        {
            get { return countAngleSmoothness; }
            set { countAngleSmoothness = value; }
        }


        private SimulationSettings()
        {

        }

        public static void Reload()
        {
            var executionFolder = HelperMethods.GetExecutionFolder();
            var pathToSettingsFile = Path.Combine(executionFolder.FullName, "settings.xml");
#if DEBUG
#else 
            if (!File.Exists(pathToSettingsFile))
            {
#endif
            new SimulationSettings().Save();
#if DEBUG
#else
        }
#endif
            XmlSerializer xmlSerializer = new XmlSerializer(typeof(SimulationSettings), GetXMLOverrides());
            using (FileStream fileStream = new FileStream(pathToSettingsFile, FileMode.Open))
            {
                Instance = (SimulationSettings)xmlSerializer.Deserialize(fileStream);
            }
        }

        private static XmlAttributeOverrides GetXMLOverrides()
        {
            var overrides = new XmlAttributeOverrides();
            overrides.Add(typeof(Vector2), "X", new XmlAttributes { XmlAttribute = new XmlAttributeAttribute("x") });
            overrides.Add(typeof(Vector2), "Y", new XmlAttributes { XmlAttribute = new XmlAttributeAttribute("y") });
            return overrides;
        }

        public void Save()
        {
            var executionFolder = HelperMethods.GetExecutionFolder();
            var pathToSettingsFile = Path.Combine(executionFolder.FullName, "settings.xml");
            XmlSerializer xmlSerializer = new XmlSerializer(typeof(SimulationSettings), GetXMLOverrides());
            XmlSerializerNamespaces ns = new XmlSerializerNamespaces();
            ns.Add("", "");
            using (FileStream fileStream = new FileStream(pathToSettingsFile, File.Exists(pathToSettingsFile) ? FileMode.Create : FileMode.CreateNew))
            {
                xmlSerializer.Serialize(fileStream, this, ns);
            }
        }

        public event PropertyChangedEventHandler PropertyChanged;

        [NotifyPropertyChangedInvocator]
        protected void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}