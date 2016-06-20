using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Security.RightsManagement;
using FarseerPhysics.Dynamics;
using FarseerPhysics.Factories;
using OpenTK;
using VehicleBehaviorLearning.Engine.Helper;
using VehicleBehaviorLearning.Engine.Vehicles.Behavior;

namespace VehicleBehaviorLearning.Engine.Vehicles
{
    public class Vehicle
    {
        private VehicleBehaviorActions LastVehicleBehaviorActions { get; set; } = new VehicleBehaviorActions(0.1, 0);
        public Vector2 StartPosition { get; }
        public float StartAngle { get; }
        public World World { get; }
        public NeuronalVehicleBehavior Behavior { get; set; }
        public IVehiclePhysic VehiclePhysic { get; set; }
        public SensorCollection SensorCollection { get; }
        public Body Body { get; }
        public CarChassisSettings Chassis { get; }
        public Vector2 ForwardNormal
        {
            get
            {
                var forwardVector = Body.GetWorldVector(new Vector2(0, 1).ToXnaVector()).ToOpenTkVector().Normalized();
                return forwardVector;
            }
        }

        public Wheel LeftFrontWheel { get; }
        public Wheel RightFrontWheel { get; }
        public Wheel LeftRearWheel { get; }
        public Wheel RightRearWheel { get; }

        public Vehicle(World world, Vector2 position, float angle, NeuronalVehicleBehavior behavior, IVehiclePhysic vehiclePhysic, CarChassisSettings carChassis)
        {
            World = world;
            Behavior = behavior;
            Chassis = carChassis;
            VehiclePhysic = vehiclePhysic;
            SensorCollection = new SensorCollection(this);
            Body = BodyFactory.CreatePolygon(World, Chassis.GetVertices(), carChassis.Density, position.ToXnaVector(), UserData.Vehicle);
            Body.CollidesWith = Category.Cat2;
            Body.CollisionCategories = Category.Cat1;
            Body.BodyType = BodyType.Dynamic;
            Body.Rotation = angle;
            Body.Friction = 0;
            StartPosition = position;
            StartAngle = angle;
            LeftFrontWheel = new Wheel(this, Chassis.FrontLeftWheel);
            RightFrontWheel = new Wheel(this, Chassis.FrontRightWheel);
            LeftRearWheel = new Wheel(this, Chassis.RearLeftWheel);
            RightRearWheel = new Wheel(this, Chassis.RearRightWheel);
        }

        public Vehicle(World world, Vector2 position, float angle, NeuronalVehicleBehavior behavior) : this(world, position, angle, behavior, new DefaultVehiclePhysic(), CarChassisSettings.Default)
        {

        }

        public Vector2 GetForwardVelocity()
        {
            var currentForwardNormal = ForwardNormal.ToXnaVector();
            currentForwardNormal *= Vector2.Dot(currentForwardNormal.ToOpenTkVector(), Body.LinearVelocity.ToOpenTkVector());
            return currentForwardNormal.ToOpenTkVector();
        }

        public IEnumerable<Wheel> GetAllWheels()
        {
            yield return LeftFrontWheel;
            yield return RightFrontWheel;
            yield return LeftRearWheel;
            yield return RightRearWheel;
        }

        public void Update(double time)
        {
            double vehicleBehaviorActionsSmoothness = SimulationSettings.Instance.VehicleSettings.VehicleBehaviorActionsSmoothness;

            var vehicleBehaviorActions = Behavior.GetVehicleBehaviorActions(SensorCollection.CalculateVehicleBehaviorInput());

            double smoothedSpeedFactor = vehicleBehaviorActions.SpeedFactor * (1 - vehicleBehaviorActionsSmoothness) + LastVehicleBehaviorActions.SpeedFactor * vehicleBehaviorActionsSmoothness;
            double smoothedSteeringFactor = vehicleBehaviorActions.SteeringFactor * (1 - vehicleBehaviorActionsSmoothness) + LastVehicleBehaviorActions.SteeringFactor * vehicleBehaviorActionsSmoothness;

            vehicleBehaviorActions = new VehicleBehaviorActions(smoothedSpeedFactor, smoothedSteeringFactor);

            VehiclePhysic.UpdateFriction(this, time);
            VehiclePhysic.UpdateForwardForces(this, vehicleBehaviorActions, time);
            VehiclePhysic.UpdateSteering(this, vehicleBehaviorActions, time);
            //VehiclePhysic.UpdateDrag(this, time);
        }
    }
}
