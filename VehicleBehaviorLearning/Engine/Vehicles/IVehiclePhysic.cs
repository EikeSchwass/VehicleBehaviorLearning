using VehicleBehaviorLearning.Engine.Vehicles.Behavior;

namespace VehicleBehaviorLearning.Engine.Vehicles
{
    public interface IVehiclePhysic
    {
        void UpdateForwardForces(Vehicle vehicle, VehicleBehaviorActions vehicleBehaviorActions, double time);
        void UpdateSteering(Vehicle vehicle, VehicleBehaviorActions vehicleBehaviorActions, double time);
        void UpdateFriction(Vehicle vehicle, double time);
        void UpdateDrag(Vehicle vehicle, double time);
    }
}