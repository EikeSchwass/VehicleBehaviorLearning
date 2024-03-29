using System;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Xml.Serialization;
using FarseerPhysics.Common;
using OpenTK;
using VehicleBehaviorLearning.Annotations;
using VehicleBehaviorLearning.Engine.Helper;

namespace VehicleBehaviorLearning.Engine
{
    [Serializable]
    public class CarChassisSettings : INotifyPropertyChanged
    {
        private float density = 2.7f;

        public static CarChassisSettings Default => new CarChassisSettings(new Vector2(-0.9f, 1.5f),
                                                                           new Vector2(0.9f, 1.5f),
                                                                           new Vector2(-0.9f, -1.8f),
                                                                           new Vector2(0.9f, -1.8f),
                                                                           new Vector2(-0f, 1.675F),
                                                                           //Chassis
                                                                           new Vector2(-0.45f, -1.825F),
                                                                           new Vector2(-0.9f, -1.325F),
                                                                           new Vector2(-0.85f, 0.275F),
                                                                           new Vector2(-0.25f, 2.125F),
                                                                           new Vector2(0.25f, 2.125F),
                                                                           new Vector2(0.85f, 0.275F),
                                                                           new Vector2(0.9f, -1.325F),
                                                                           new Vector2(0.45f, -1.825F)
            );

        public float Density
        {
            get { return density; }
            set
            {
                if (value.Equals(density)) return;
                density = value;
                OnPropertyChanged();
            }
        }
        public Vector2 FrontLeftWheel { get; set; }
        public Vector2 FrontRightWheel { get; set; }
        public Vector2 RearRightWheel { get; set; }
        public Vector2 RearLeftWheel { get; set; }
        public Vector2 SensorConnection { get; set; }
        public Vector2[] Chassis { get; set; }
        public double[] SensorAngles { get; set; } = { -40, -20, -4, 4, 20, 40 };

        public string SensorAnglesString
        {
            get
            {
                return string.Join(", ", SensorAngles);
            }
            set
            {
                SensorAngles = value.Replace(" ", "").Split(',').Select(Convert.ToDouble).ToArray();
                OnPropertyChanged();
            }
        }

        private CarChassisSettings()
        {

        }

        public CarChassisSettings(Vector2 frontLeftWheel, Vector2 frontRightWheel, Vector2 rearRightWheel, Vector2 rearLeftWheel, Vector2 sensorConnection, params Vector2[] chassis)
        {
            FrontLeftWheel = frontLeftWheel;
            FrontRightWheel = frontRightWheel;
            RearRightWheel = rearRightWheel;
            RearLeftWheel = rearLeftWheel;
            SensorConnection = sensorConnection;
            Chassis = chassis;
        }

        public Vertices GetVertices() => new Vertices(Chassis.Select(v => v.ToXnaVector()));

        public event PropertyChangedEventHandler PropertyChanged;

        [NotifyPropertyChangedInvocator]
        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}