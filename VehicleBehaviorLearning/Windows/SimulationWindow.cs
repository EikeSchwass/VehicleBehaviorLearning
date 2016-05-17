using System;
using System.Drawing;
using System.Linq;
using FarseerPhysics.Collision.Shapes;
using OpenTK;
using OpenTK.Graphics;
using OpenTK.Graphics.OpenGL;
using OpenTK.Input;
using VehicleBehaviorLearning.Engine;
using VehicleBehaviorLearning.Engine.Vehicles;

namespace VehicleBehaviorLearning.Windows
{
    public class SimulationWindow : GameWindow
    {
        public bool Passive { get; } = false;
        public Camera Camera { get; }
        private Simulation[] Simulations { get; }

        public SimulationWindow(Simulation simulation, params Simulation[] simulations) : base(SimulationSettings.Instance.WindowWidth, SimulationSettings.Instance.WindowHeight, GraphicsMode.Default, "Simulation Window")
        {
            Camera = new Camera(this);
            Simulations = new Simulation[simulations.Length + 1];
            Simulations[0] = simulation;
            for (int i = 1; i < Simulations.Length; i++)
            {
                Simulations[i] = simulations[i - 1];
            }
        }

        public SimulationWindow(SimulationManager simulationManager) : this(simulationManager.Simulations.First(), simulationManager.Simulations.Skip(1).ToArray())
        {
            Passive = true;
        }

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);
            GL.ClearColor(Color.Gray);
        }

        protected override void OnMouseWheel(MouseWheelEventArgs e)
        {
            base.OnMouseWheel(e);
            Camera.Zoom += e.DeltaPrecise / 20.0f * Camera.Zoom;
        }

        protected override void OnUpdateFrame(FrameEventArgs e)
        {
            base.OnUpdateFrame(e);
            if (!Passive)
            {
                foreach (var simulation in Simulations.Where(s => !s.Completed))
                {
                    simulation.SingleStep(e.Time);
                }
            }
            if (!Passive && Simulations.All(s => s.Completed))
            {
                Close();
                foreach (var simulation in Simulations)
                {
                    simulation.Reset();
                }
            }
            Camera.TrackObject = Simulations.OrderByDescending(s => s.SimulationResult.Rating).First().Vehicle;
            Camera.Update(e.Time);
        }

        protected override void OnRenderFrame(FrameEventArgs e)
        {
            base.OnRenderFrame(e);
            GL.Clear(ClearBufferMask.ColorBufferBit);
            GL.LoadIdentity();
            Camera.UpdateView();

            GL.Color3(Color.Red);

            GL.Begin(PrimitiveType.Lines);
            {
                for (int i = 0; i < SimulationSettings.Instance.SelectedRacetrack.InnerVertices.Count; i++)
                {
                    var current = SimulationSettings.Instance.SelectedRacetrack.InnerVertices[i];
                    var next = SimulationSettings.Instance.SelectedRacetrack.InnerVertices[(i + 1) % SimulationSettings.Instance.SelectedRacetrack.InnerVertices.Count];
                    GL.Vertex2(current);
                    GL.Vertex2(next);

                }
            }
            GL.End();
            GL.Begin(PrimitiveType.Lines);
            {
                for (int i = 0; i < SimulationSettings.Instance.SelectedRacetrack.OuterVertices.Count; i++)
                {
                    var current = SimulationSettings.Instance.SelectedRacetrack.OuterVertices[i];
                    var next = SimulationSettings.Instance.SelectedRacetrack.OuterVertices[(i + 1) % SimulationSettings.Instance.SelectedRacetrack.OuterVertices.Count];
                    GL.Vertex2(current);
                    GL.Vertex2(next);

                }
            }
            GL.Color3(Color.LawnGreen);
            GL.Begin(PrimitiveType.Lines);
            {
                for (int i = 0; i < Simulations.First().Sensors.Count; i++)
                {
                    var current = Simulations.First().Sensors.ElementAt(i);
                    GL.Vertex2(current.V1);
                    GL.Vertex2(current.V2);

                }
            }
            GL.End();
            foreach (var simulation in Simulations)
            {
                RenderVehicle(simulation.Vehicle, Color.Black, Color.Red);
            }

            SwapBuffers();
        }

        public void RenderVehicle(Vehicle vehicle, Color vehicleColor, Color wheelColor)
        {
            GL.Color3(vehicleColor);
            var shape = (PolygonShape)vehicle.Body.FixtureList[0].Shape;
            GL.PushMatrix();
            GL.Translate(vehicle.Body.Position.X, vehicle.Body.Position.Y, 0);
            GL.Rotate((float)(vehicle.Body.Rotation / (Math.PI * 2) * 360), Vector3.UnitZ);
            GL.Translate(-vehicle.Body.Position.X, -vehicle.Body.Position.Y, 0);
            GL.Begin(PrimitiveType.Polygon);
            {
                for (int i = 0; i < shape.Vertices.Count; i++)
                {
                    double x1 = vehicle.Body.Position.X;
                    double y1 = vehicle.Body.Position.Y;

                    x1 += shape.Vertices[i].X;
                    y1 += shape.Vertices[i].Y;

                    GL.Vertex2((float)x1, (float)y1);
                }
            }
            GL.End();
            GL.PopMatrix();
            RenderWheel(vehicle.LeftFrontWheel, Color.Orange);
            RenderWheel(vehicle.RightFrontWheel, Color.Orange);
            RenderWheel(vehicle.LeftRearWheel, wheelColor);
            RenderWheel(vehicle.RightRearWheel, wheelColor);

            GL.Color3(Color.Yellow);
            var sensorEndPoints = vehicle.SensorCollection.GetEndPoints().ToArray();
            var sensorInputs = vehicle.SensorCollection.LastSensorValues ?? new SensorValue[sensorEndPoints.Length];
            for (int i = 0; i < sensorEndPoints.Length; i++)
            {
                Vector2 endpoint = sensorEndPoints[i];
                GL.Begin(PrimitiveType.Lines);
                {
                    GL.Vertex2(vehicle.SensorCollection.SensorStart);
                    GL.Vertex2(vehicle.SensorCollection.SensorStart + (endpoint - vehicle.SensorCollection.SensorStart) * sensorInputs[i].Value);
                }
                GL.End();
            }
        }

        private void RenderWheel(Wheel wheel, Color wheelColor)
        {
            GL.Color3(wheelColor);
            var shape = (PolygonShape)wheel.Body.FixtureList[0].Shape;
            GL.PushMatrix();
            GL.Translate(wheel.Body.Position.X, wheel.Body.Position.Y, 0);
            GL.Rotate((float)(wheel.Body.Rotation / (Math.PI * 2) * 360 + 90), Vector3.UnitZ);
            GL.Translate(-wheel.Body.Position.X, -wheel.Body.Position.Y, 0);
            GL.Begin(PrimitiveType.Polygon);
            {
                for (int i = 0; i < shape.Vertices.Count; i++)
                {
                    double x1 = wheel.Body.Position.X;
                    double y1 = wheel.Body.Position.Y;

                    x1 += shape.Vertices[i].X;
                    y1 += shape.Vertices[i].Y;

                    GL.Vertex2((float)x1, (float)y1);
                }
            }
            GL.End();
            GL.PopMatrix();
        }
    }
}
