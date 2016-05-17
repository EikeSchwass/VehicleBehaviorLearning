using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Windows;
using ClipperLib;
using FarseerPhysics.Common;
using OpenTK;
using VehicleBehaviorLearning.Engine.Helper;

namespace VehicleBehaviorLearning.Engine
{
    public class Racetrack
    {
        public string Name { get; }
        public double Length { get; }
        public ReadOnlyCollection<Vector2> Coordinates { get; }
        public ReadOnlyCollection<Vector2> InnerVertices { get; }
        public ReadOnlyCollection<Vector2> OuterVertices { get; }
        public float MinX { get; }
        public float MaxX { get; }
        public float MinY { get; }
        public float MaxY { get; }

        public Racetrack(string name, Vector2[] coordinates)
        {
            Name = name;
            MinX = coordinates.Min(v => v.X);
            MinY = coordinates.Min(v => v.Y);
            MaxX = coordinates.Max(v => v.X);
            MaxY = coordinates.Max(v => v.Y);

            Coordinates = coordinates.Select(v => new Vector2(v.X - MinX, v.Y - MinY)).ToList().AsReadOnly();
            bool success = false;
            do
            {
                try
                {
                    InnerVertices = CalculatePolygonOffset(-SimulationSettings.Instance.RacetrackWidth / 2);
                    OuterVertices = CalculatePolygonOffset(SimulationSettings.Instance.RacetrackWidth / 2);
                    success = true;
                }
                catch (InvalidOperationException)
                {
                    Coordinates = CalculatePolygonOffset(1).Reverse().ToList().AsReadOnly();
                }
            } while (!success);
            Length = coordinates.GetTotalLength();
        }

        private ReadOnlyCollection<Vector2> CalculatePolygonOffset(double delta)
        {
            var vertices = Coordinates;
            ClipperOffset clipperOffset = new ClipperOffset();
            clipperOffset.AddPath(vertices.Select(v => new IntPoint(v.X, v.Y)).ToList(), JoinType.jtSquare, EndType.etClosedPolygon);
            List<List<IntPoint>> solution = new List<List<IntPoint>>();
            clipperOffset.Execute(ref solution, delta);
            if (solution.Count != 1)
                throw new InvalidOperationException("The Offset-Polygon could not be created. More than one solution");


            var coord0 = Coordinates[0];
            double minLength = double.MaxValue;
            int offset = 0;

            for (int i = 0; i < solution[0].Count; i++)
            {
                var v2 = new Vector2(solution.First()[i].X, solution.First()[i].Y);
                var length = (coord0 - v2).Length;
                if (length < minLength)
                {
                    offset = i;
                    minLength = length;
                }
            }
            return solution.First().Rotate(-offset)
                           .Select(intPoint => new Vector2(intPoint.X, intPoint.Y))
                           .ToList()
                           .AsReadOnly();
        }
    }
}