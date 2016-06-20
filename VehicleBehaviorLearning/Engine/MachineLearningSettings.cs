using System;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Xml.Serialization;
using VehicleBehaviorLearning.Engine.Helper;
using VehicleBehaviorLearning.Properties;

namespace VehicleBehaviorLearning.Engine
{
    [Serializable]
    public class MachineLearningSettings : INotifyPropertyChanged
    {
        private int[] numberOfNeuronsInHiddenLayers = { 6 };
        private double mutationChanceStart = 0.25;
        private double mutationChanceBase = 0.05;
        private double mutationDeviationStart = 10;
        private double mutationDeviationBase = 1;
        private int mutationDeviationSpikeInterval = 0;
        private int mutationChanceSpikeInterval = 0;
        private double mutationDeviationSpikeHeight = 0.1;
        private double mutationChanceSpikeHeight = 0.05;
        private ActivationFunctions activationFunctionInHiddenLayers = ActivationFunctions.Sigmoid;

        public int[] NumberOfNeuronsInHiddenLayers
        {
            get { return numberOfNeuronsInHiddenLayers; }
            set
            {
                if (Equals(value, numberOfNeuronsInHiddenLayers)) return;
                numberOfNeuronsInHiddenLayers = value;
                OnPropertyChanged();
            }
        }

        public double MutationChanceStart
        {
            get { return mutationChanceStart; }
            set
            {
                if (value.Equals(mutationChanceStart)) return;
                mutationChanceStart = value;
                OnPropertyChanged();
            }
        }
        public double MutationDeviationStart
        {
            get { return mutationDeviationStart; }
            set
            {
                if (value.Equals(mutationDeviationStart)) return;
                mutationDeviationStart = value;
                OnPropertyChanged();
            }
        }

        [XmlIgnore]
        public int NumberOfInputNeurons => SimulationSettings.Instance.CarChassisSettings.SensorAngles.Length + (SimulationSettings.Instance.UseCurrentVehicleSpeedAsInput ? 1 : 0);

        [XmlIgnore]
        public string NumberOfNeuronsInHiddenLayersStringRepresentation
        {
            get
            {
                return string.Join(", ", NumberOfNeuronsInHiddenLayers);
            }
            set
            {
                NumberOfNeuronsInHiddenLayers = (from layer in value.Replace(" ", "").Split(',')
                                                 select Convert.ToInt32(layer)).ToArray();
                OnPropertyChanged();
            }
        }

        public ActivationFunctions ActivationFunctionInHiddenLayers
        {
            get { return activationFunctionInHiddenLayers; }
            set
            {
                if (value == activationFunctionInHiddenLayers) return;
                activationFunctionInHiddenLayers = value;
                OnPropertyChanged();
            }
        }

        public double MutationChanceBase
        {
            get { return mutationChanceBase; }
            set
            {
                if (value.Equals(mutationChanceBase)) return;
                mutationChanceBase = value;
                OnPropertyChanged();
            }
        }

        public double MutationDeviationBase
        {
            get { return mutationDeviationBase; }
            set
            {
                if (value.Equals(MutationDeviationBase)) return;
                mutationDeviationBase = value;
                OnPropertyChanged();
            }
        }

        public int MutationDeviationSpikeInterval
        {
            get { return mutationDeviationSpikeInterval; }
            set
            {
                if (value.Equals(mutationDeviationSpikeInterval)) return;
                mutationDeviationSpikeInterval = value;
                OnPropertyChanged();
            }
        }

        public int MutationChanceSpikeInterval
        {
            get { return mutationChanceSpikeInterval; }
            set
            {
                if (value.Equals(mutationChanceSpikeInterval)) return;
                mutationChanceSpikeInterval = value;
                OnPropertyChanged();
            }
        }

        public double MutationDeviationSpikeHeight
        {
            get { return mutationDeviationSpikeHeight; }
            set
            {
                if (value.Equals(mutationDeviationSpikeHeight)) return;
                mutationDeviationSpikeHeight = value;
                OnPropertyChanged();
            }
        }

        public double MutationChanceSpikeHeight
        {
            get { return mutationChanceSpikeHeight; }
            set
            {
                if (value.Equals(mutationChanceSpikeHeight)) return;
                mutationChanceSpikeHeight = value;
                OnPropertyChanged();
            }
        }


        public event PropertyChangedEventHandler PropertyChanged;

        [NotifyPropertyChangedInvocator]
        public void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        public double ActivationFunction(double x, int layer, int index)
        {
            if (layer == NumberOfNeuronsInHiddenLayers.Length + 1)
                return index == 0 ? HelperMethods.Sigmoid(x) : HelperMethods.TanH(x);

            return ActivationFunctionInHiddenLayers.GetFunction()(x);

        }
    }
}