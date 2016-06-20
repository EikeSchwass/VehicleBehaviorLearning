using System;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using VehicleBehaviorLearning.Annotations;
using VehicleBehaviorLearning.Engine.Vehicles.Behavior;

namespace VehicleBehaviorLearning.Engine
{
    public class SimulationResult : INotifyPropertyChanged
    {
        private double distance;
        private double survivedSteps;
        private NeuronalVehicleBehavior vehicleBehavior;
        private Racetrack racetrack;

        public double Distance
        {
            get { return distance; }
            set
            {
                if (value.Equals(distance)) return;
                distance = value;
                OnPropertyChanged();
                OnPropertyChanged(nameof(Rating));
                OnPropertyChanged(nameof(AverageSpeed));
            }
        }

        public double AverageSpeed => SurvivedTime > 0 ? Distance / SurvivedTime * 3.6 : 0;
        public double Rating
        {
            get
            {
                double rating = Distance / Racetrack.Length ;
                return rating;
                if (Distance >= 1)
                    rating += 100000 - SurvivedTime;
                return rating;
            }
        }
        public double SurvivedTime
        {
            get { return survivedSteps; }
            set
            {
                if (value.Equals(survivedSteps)) return;
                survivedSteps = value;
                OnPropertyChanged();
            }
        }
        public NeuronalVehicleBehavior VehicleBehavior
        {
            get { return vehicleBehavior; }
            set
            {
                if (Equals(value, vehicleBehavior)) return;
                vehicleBehavior = value;
                OnPropertyChanged();
            }
        }

        public Racetrack Racetrack { get; }

        public SimulationResult(NeuronalVehicleBehavior vehicleBehavior, Racetrack racetrack)
        {
            VehicleBehavior = vehicleBehavior;
            Racetrack = racetrack;
        }

        public event PropertyChangedEventHandler PropertyChanged;

        [NotifyPropertyChangedInvocator]
        protected void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}