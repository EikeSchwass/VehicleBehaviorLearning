using System;
using System.Windows.Interop;
using OpenTK;
using VehicleBehaviorLearning.Engine.Helper;
using VehicleBehaviorLearning.Engine.Vehicles.Behavior;

namespace VehicleBehaviorLearning.Engine.Vehicles
{
    public class DefaultVehiclePhysic : IVehiclePhysic
    {
        public void UpdateForwardForces(Vehicle vehicle, VehicleBehaviorActions vehicleBehaviorActions, double time)
        {
            var currentSpeed = Vector2.Dot(vehicle.GetForwardVelocity(), vehicle.ForwardNormal);
            float force = 0;
            float desiredSpeedFactor = SimulationSettings.Instance.VehicleSettings.MinSpeedFactor + vehicleBehaviorActions.SpeedFactor * (1 - SimulationSettings.Instance.VehicleSettings.MinSpeedFactor);

            if (desiredSpeedFactor * SimulationSettings.Instance.VehicleSettings.MaxSpeed > currentSpeed)
                force = SimulationSettings.Instance.VehicleSettings.MaxDriveForce;
            else if (desiredSpeedFactor * SimulationSettings.Instance.VehicleSettings.MaxSpeed < currentSpeed)
                force = -SimulationSettings.Instance.VehicleSettings.MaxDriveForce;

            switch (SimulationSettings.Instance.VehicleSettings.WheelDriveMode)
            {
                case WheelDriveMode.FrontWheelDrive:
                    vehicle.LeftFrontWheel.Body.ApplyForce(force / 1 * vehicle.ForwardNormal.ToXnaVector(), vehicle.LeftFrontWheel.Body.WorldCenter);
                    vehicle.RightFrontWheel.Body.ApplyForce(force / 1 * vehicle.ForwardNormal.ToXnaVector(), vehicle.RightFrontWheel.Body.WorldCenter);
                    break;
                case WheelDriveMode.RearWheelDrive:
                    vehicle.LeftRearWheel.Body.ApplyForce(force / 1 * vehicle.ForwardNormal.ToXnaVector(), vehicle.LeftRearWheel.Body.WorldCenter);
                    vehicle.RightRearWheel.Body.ApplyForce(force / 1 * vehicle.ForwardNormal.ToXnaVector(), vehicle.RightRearWheel.Body.WorldCenter);
                    break;
                case WheelDriveMode.AllWheelDrive:
                    vehicle.LeftRearWheel.Body.ApplyForce(force / 2 * vehicle.ForwardNormal.ToXnaVector(), vehicle.LeftRearWheel.Body.WorldCenter);
                    vehicle.RightRearWheel.Body.ApplyForce(force / 2 * vehicle.ForwardNormal.ToXnaVector(), vehicle.RightRearWheel.Body.WorldCenter);
                    vehicle.LeftFrontWheel.Body.ApplyForce(force / 2 * vehicle.ForwardNormal.ToXnaVector(), vehicle.LeftFrontWheel.Body.WorldCenter);
                    vehicle.RightFrontWheel.Body.ApplyForce(force / 2 * vehicle.ForwardNormal.ToXnaVector(), vehicle.RightFrontWheel.Body.WorldCenter);
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }

        public void UpdateSteering(Vehicle vehicle, VehicleBehaviorActions vehicleBehaviorActions, double time)
        {
            float turnPerTimeStep = (float)(SimulationSettings.Instance.VehicleSettings.TurnSpeedPerSecond / 180.0 * Math.PI * time);
            float angleNow = vehicle.LeftFrontWheel.Joint.JointAngle;

            float steeringBlocker =  (float)(1f / (1 + Math.Pow(vehicle.GetForwardVelocity().Length, SimulationSettings.Instance.VehicleSettings.SpeedSteeringPenaltyExponent) / SimulationSettings.Instance.VehicleSettings.SpeedSteeringPenaltyCompensation));

            float desiredAngle = vehicleBehaviorActions.SteeringFactor * SimulationSettings.Instance.VehicleSettings.MaxSteeringAngle * steeringBlocker;
            float angleToTurn = (float)(desiredAngle / 180.0 * Math.PI - angleNow);
            angleToTurn = MathHelper.Clamp(angleToTurn, -turnPerTimeStep, turnPerTimeStep);
            float newAngle = angleNow + angleToTurn;
            vehicle.LeftFrontWheel.Joint.SetLimits(newAngle, newAngle);
            vehicle.RightFrontWheel.Joint.SetLimits(newAngle, newAngle);
        }

        public void UpdateFriction(Vehicle vehicle, double time)
        {

            foreach (var wheel in vehicle.GetAllWheels())
            {
                var lateralvelocity = Vector2.Dot(wheel.RightNormal, wheel.Body.LinearVelocity.ToOpenTkVector()) * wheel.RightNormal;
                var impulse = wheel.Body.Mass * -lateralvelocity;
                //if (impulse.Length > SimulationSettings.Instance.VehicleSettings.WheelMaxLateralImpulse)
                //    impulse *= SimulationSettings.Instance.VehicleSettings.WheelMaxLateralImpulse / impulse.Length;
                wheel.Body.ApplyLinearImpulse(impulse.ToXnaVector(), wheel.Body.WorldCenter);
                wheel.Body.ApplyAngularImpulse(SimulationSettings.Instance.VehicleSettings.WheelStraightenFactor * wheel.Body.Inertia * -wheel.Body.AngularVelocity);
            }
            var forwardVelocity = vehicle.GetForwardVelocity();
            if (forwardVelocity.ToXnaVector().LengthSquared() > 0)
            {
                var dragForceMagnitude = -2 * forwardVelocity.GetNormalized();
                vehicle.Body.ApplyForce(dragForceMagnitude.ToXnaVector() * vehicle.ForwardNormal.ToXnaVector(), vehicle.Body.WorldCenter);
            }
        }

        public void UpdateDrag(Vehicle vehicle, double time)
        {
            var currentForwardNormal = vehicle.GetForwardVelocity().ToXnaVector();
            if (currentForwardNormal.LengthSquared() > 0)
            {
                var currentForwardSpeed = currentForwardNormal.ToOpenTkVector()
                                                              .GetNormalized();
                var dragForceMagnitude = -2 * currentForwardSpeed;
                vehicle.Body.ApplyForce(dragForceMagnitude.ToXnaVector() * currentForwardNormal);
            }
        }
    }
}