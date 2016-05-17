using System;
using System.Collections.Generic;
using System.Linq;
using FarseerPhysics.Dynamics;
using OpenTK;
using VehicleBehaviorLearning.Engine.Helper;
using VehicleBehaviorLearning.Engine.Vehicles.Behavior;

namespace VehicleBehaviorLearning.Engine.Vehicles
{
    public class SensorCollection
    {
        public Vehicle Vehicle { get; }
        public Vector2 SensorStart => Vehicle.Chassis.SensorConnection.Rotate(Vehicle.Body.Rotation) + Vehicle.Body.Position.ToOpenTkVector();
        public SensorValue[] LastSensorValues { get; private set; }

        public int Count => LastSensorValues?.Length ?? 0;

        public SensorCollection(Vehicle vehicle)
        {
            Vehicle = vehicle;
        }

        public VehicleBehaviorInput CalculateVehicleBehaviorInput()
        {
            LastSensorValues = GetSensorValues().ToArray();
            return new VehicleBehaviorInput(Vehicle.GetForwardVelocity().Length / SimulationSettings.Instance.VehicleSettings.MaxSpeed, LastSensorValues);
        }

        public IEnumerable<SensorValue> GetSensorValues()
        {
            foreach (var angle in SimulationSettings.Instance.CarChassisSettings.SensorAngles)
            {
                var direction = Vehicle.ForwardNormal.Rotate((float)(angle / 180.0 * Math.PI));
                var endPoint = SensorStart + direction * (float)SimulationSettings.Instance.VehicleSettings.ViewDistance;
                float value = 1;
                Vehicle.World.RayCast((hit, v1, v2, fraction) =>
                                      {
                                          UserData userData = (UserData)(hit.UserData ?? hit.Body.UserData);
                                          if (userData != UserData.Wall)
                                              return -1f;
                                          if (value > fraction)
                                              value = fraction;
                                          return -1;
                                      }, SensorStart.ToXnaVector(), endPoint.ToXnaVector());
                yield return new SensorValue((float)angle, value);
            }
        }

        public IEnumerable<Vector2> GetEndPoints()
        {
            foreach (var angle in SimulationSettings.Instance.CarChassisSettings.SensorAngles)
            {
                var direction = Vehicle.ForwardNormal.Rotate((float)(angle / 180.0 * Math.PI));
                var endPoint = SensorStart + direction * (float)SimulationSettings.Instance.VehicleSettings.ViewDistance;
                yield return endPoint;
            }
        }
    }
}