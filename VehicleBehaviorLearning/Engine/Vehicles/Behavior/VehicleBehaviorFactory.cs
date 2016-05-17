namespace VehicleBehaviorLearning.Engine.Vehicles.Behavior
{
    public abstract class VehicleBehaviorFactory
    {
        public abstract NeuronalVehicleBehavior CreateVehicleBehavior();
        public override abstract string ToString();
    }
}
