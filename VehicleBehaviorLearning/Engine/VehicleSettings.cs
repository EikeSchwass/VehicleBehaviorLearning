using System.ComponentModel;
using System.Runtime.CompilerServices;
using VehicleBehaviorLearning.Properties;

namespace VehicleBehaviorLearning.Engine
{
    public class VehicleSettings : INotifyPropertyChanged
    {
        private float wheelWidth = 1;
        private float wheelDiameter = 0.5f;
        private float wheelDensity = 1f;
        private float wheelMaxLateralImpulse = 2.5f;
        private float wheelStraightenFactor = 0.01f;
        private float minSpeedFactor = 0.1f;
        private float maxSpeed = 300;
        private float maxDriveForce = 150;
        private float turnSpeedPerSecond = 300;
        private float speedSteeringPenaltyExponent = 2.45f;
        private float speedSteeringPenaltyCompensation = 21000;
        private double viewDistance = 250;
        private WheelDriveMode wheelDriveMode = WheelDriveMode.RearWheelDrive;
        private float maxSteeringAngle = 12;
        
        public float WheelWidth
        {
            get { return wheelWidth; }
            set
            {
                if (value.Equals(wheelWidth)) return;
                wheelWidth = value;
                OnPropertyChanged();
            }
        }

        public float WheelDiameter
        {
            get { return wheelDiameter; }
            set
            {
                if (value.Equals(wheelDiameter)) return;
                wheelDiameter = value;
                OnPropertyChanged();
            }
        }

        public float WheelDensity
        {
            get { return wheelDensity; }
            set
            {
                if (value.Equals(wheelDensity)) return;
                wheelDensity = value;
                OnPropertyChanged();
            }
        }

        public float WheelMaxLateralImpulse
        {
            get { return wheelMaxLateralImpulse; }
            set
            {
                if (value.Equals(wheelMaxLateralImpulse)) return;
                wheelMaxLateralImpulse = value;
                OnPropertyChanged();
            }
        }

        public float WheelStraightenFactor
        {
            get { return wheelStraightenFactor; }
            set
            {
                if (value.Equals(wheelStraightenFactor)) return;
                wheelStraightenFactor = value;
                OnPropertyChanged();
            }
        }

        public float MinSpeedFactor
        {
            get { return minSpeedFactor; }
            set
            {
                if (value.Equals(minSpeedFactor)) return;
                minSpeedFactor = value;
                OnPropertyChanged();
            }
        }

        public float MaxSpeed
        {
            get { return maxSpeed; }
            set
            {
                if (value.Equals(maxSpeed)) return;
                maxSpeed = value;
                OnPropertyChanged();
            }
        }

        public float MaxDriveForce
        {
            get { return maxDriveForce; }
            set
            {
                if (value.Equals(maxDriveForce)) return;
                maxDriveForce = value;
                OnPropertyChanged();
            }
        }

        public float TurnSpeedPerSecond
        {
            get { return turnSpeedPerSecond; }
            set
            {
                if (value.Equals(turnSpeedPerSecond)) return;
                turnSpeedPerSecond = value;
                OnPropertyChanged();
            }
        }

        public float SpeedSteeringPenaltyExponent
        {
            get { return speedSteeringPenaltyExponent; }
            set
            {
                if (value.Equals(speedSteeringPenaltyExponent)) return;
                speedSteeringPenaltyExponent = value;
                OnPropertyChanged();
            }
        }

        public float SpeedSteeringPenaltyCompensation
        {
            get { return speedSteeringPenaltyCompensation; }
            set
            {
                if (value.Equals(speedSteeringPenaltyCompensation)) return;
                speedSteeringPenaltyCompensation = value;
                OnPropertyChanged();
            }
        }

        public double ViewDistance
        {
            get { return viewDistance; }
            set
            {
                if (value.Equals(viewDistance)) return;
                viewDistance = value;
                OnPropertyChanged();
            }
        }

        public WheelDriveMode WheelDriveMode
        {
            get { return wheelDriveMode; }
            set
            {
                if (value == wheelDriveMode) return;
                wheelDriveMode = value;
                OnPropertyChanged();
            }
        }
        
        public float MaxSteeringAngle
        {
            get { return maxSteeringAngle; }
            set
            {
                if (value.Equals(maxSteeringAngle)) return;
                maxSteeringAngle = value;
                OnPropertyChanged();
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