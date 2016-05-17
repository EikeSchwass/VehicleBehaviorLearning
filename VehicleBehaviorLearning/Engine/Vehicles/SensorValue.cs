namespace VehicleBehaviorLearning.Engine.Vehicles
{
    public struct SensorValue
    {
        public float Angle { get; }
        public float Value { get; }

        public SensorValue(float angle, float value)
        {
            Angle = angle;
            Value = value;
        }
    }
}