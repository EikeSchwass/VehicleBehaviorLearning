using VehicleBehaviorLearning.Engine.Helper;

namespace VehicleBehaviorLearning.Engine.Vehicles.Behavior
{
    public class RandomVehicleBehaviorFactory : VehicleBehaviorFactory
    {
        public override NeuronalVehicleBehavior CreateVehicleBehavior()
        {
            return new NeuronalVehicleBehavior(SimulationSettings.Instance.MachineLearningSettings.NumberOfInputNeurons, SimulationSettings.Instance.MachineLearningSettings.NumberOfNeuronsInHiddenLayers, index => ThreadSafeRandom.NextDouble(-10, 10));
        }

        public override string ToString()
        {
            return "Random vehicle behavior";
        }
    }
}