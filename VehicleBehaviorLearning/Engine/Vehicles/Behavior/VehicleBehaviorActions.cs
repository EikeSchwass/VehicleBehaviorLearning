namespace VehicleBehaviorLearning.Engine.Vehicles.Behavior
{
    public struct VehicleBehaviorActions
    {
        public float SpeedFactor { get; }
        public float SteeringFactor { get; }

        public VehicleBehaviorActions(double speedFactor, double steeringFactor)
        {
            SpeedFactor = (float) speedFactor;
            SteeringFactor = (float) steeringFactor;
        }
    }
}