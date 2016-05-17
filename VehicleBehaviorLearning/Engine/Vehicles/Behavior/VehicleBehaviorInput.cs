using System.Collections.ObjectModel;
using System.Linq;

namespace VehicleBehaviorLearning.Engine.Vehicles.Behavior
{
    public struct VehicleBehaviorInput
    {
        public float SpeedFraction { get; }
        public ReadOnlyCollection<SensorValue> SensorValues { get; }

        public VehicleBehaviorInput(float speedFraction, params SensorValue[] sensorValues)
        {
            SpeedFraction = speedFraction;
            SensorValues = sensorValues.ToList()
                                       .AsReadOnly();
        }
    }
}