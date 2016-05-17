using System;
using System.Linq;
using OpenTK;
using OpenTK.Graphics.OpenGL;
using VehicleBehaviorLearning.Engine;
using VehicleBehaviorLearning.Engine.Helper;
using VehicleBehaviorLearning.Engine.Vehicles;

namespace VehicleBehaviorLearning.Windows
{
    public class Camera
    {
        public Vector2 TopLeftViewCorner { get; }
        public Vector2 BottomRightViewCorner { get; }
        public Vector2 Position { get; set; }
        public Vector2 Scale { get; set; }
        public float Rotation { get; set; }
        public float Zoom { get; set; } = 1;

        public Vehicle TrackObject { get; set; }

        public SimulationWindow SimulationWindow { get; }

        public Camera(SimulationWindow simulationWindow, float viewWidth = 64)
        {
            SimulationWindow = simulationWindow;
            var widthHeightRatio = 1.0f * simulationWindow.Width / simulationWindow.Height;
            float viewHeight = viewWidth / widthHeightRatio;
            TopLeftViewCorner = new Vector2(-viewWidth / 2, -viewHeight / 2);
            BottomRightViewCorner = new Vector2(viewWidth / 2, viewHeight / 2);

            var minX = SimulationSettings.Instance.SelectedRacetrack.Coordinates.Min(v => v.X);
            var minY = SimulationSettings.Instance.SelectedRacetrack.Coordinates.Min(v => v.Y);
            var maxX = SimulationSettings.Instance.SelectedRacetrack.Coordinates.Max(v => v.X);
            var maxY = SimulationSettings.Instance.SelectedRacetrack.Coordinates.Max(v => v.Y);
            Position = new Vector2((minX + maxX) / 2, (minY + maxY) / 2);

            float scaleX = Math.Min(100000 + TopLeftViewCorner.X / (minX + 10 + Position.X), BottomRightViewCorner.X / (maxX - 10 - Position.X));
            float scaleY = Math.Min(100000 + TopLeftViewCorner.Y / (minY + 10 + Position.Y), BottomRightViewCorner.Y / (maxY - 10 - Position.Y));
            Scale = new Vector2(scaleX, scaleY);
        }

        public void Update(double deltaTime)
        {
            if (TrackObject == null)
                return;
            Position = TrackObject.Body.Position.ToOpenTkVector();
            Scale = Vector2.One * Zoom;
        }

        public void UpdateView()
        {
            GL.LoadIdentity();
            GL.Ortho(TopLeftViewCorner.X, BottomRightViewCorner.X, BottomRightViewCorner.Y, TopLeftViewCorner.Y, 0, 1);
            GL.Scale(Scale.X, Scale.Y, 1);
            GL.Rotate((float)(Rotation / Math.PI * 180), Vector3.UnitZ);
            GL.Translate(new Vector3(-Position));
        }
    }
}