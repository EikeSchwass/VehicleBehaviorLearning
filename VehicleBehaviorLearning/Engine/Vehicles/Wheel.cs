using System;
using FarseerPhysics.Dynamics;
using FarseerPhysics.Dynamics.Joints;
using FarseerPhysics.Factories;
using OpenTK;
using VehicleBehaviorLearning.Engine.Helper;

namespace VehicleBehaviorLearning.Engine.Vehicles
{
    public class Wheel
    {
        public Vehicle Vehicle { get; }
        public Vector2 RelativeWheelPosition { get; }
        public Body Body { get; }
        public RevoluteJoint Joint { get; }
        public Vector2 RightNormal => Body.GetWorldVector(new Vector2(1, 0).ToXnaVector()).ToOpenTkVector();

        public Wheel(Vehicle vehicle, Vector2 relativeWheelPosition)
        {
            Vehicle = vehicle;
            RelativeWheelPosition = relativeWheelPosition;
            Body = BodyFactory.CreateRectangle(Vehicle.World, SimulationSettings.Instance.VehicleSettings.WheelWidth, SimulationSettings.Instance.VehicleSettings.WheelDiameter, SimulationSettings.Instance.VehicleSettings.WheelDensity, Vehicle.Body.Position + RelativeWheelPosition.ToXnaVector(), UserData.Wheel);
            Body.CollidesWith = Category.None;
            Body.CollisionCategories = Category.Cat1;
            Body.BodyType = BodyType.Dynamic;
            Body.Rotation = Vehicle.Body.Rotation;
            Body.Friction = 0;
            Joint = JointFactory.CreateRevoluteJoint(vehicle.World, Vehicle.Body, Body, relativeWheelPosition.ToXnaVector(), Microsoft.Xna.Framework.Vector2.Zero);
            Joint.LimitEnabled = true;
            Joint.LowerLimit = 0;
            Joint.UpperLimit = 0;
            Joint.CollideConnected = false;
        }
    }
}