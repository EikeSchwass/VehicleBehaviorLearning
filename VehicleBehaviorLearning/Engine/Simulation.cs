using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using FarseerPhysics.Common;
using FarseerPhysics.Dynamics;
using FarseerPhysics.Dynamics.Joints;
using FarseerPhysics.Factories;
using Microsoft.Xna.Framework;
using VehicleBehaviorLearning.Engine.Helper;
using VehicleBehaviorLearning.Engine.Vehicles;
using VehicleBehaviorLearning.Engine.Vehicles.Behavior;

namespace VehicleBehaviorLearning.Engine
{
    public class Simulation
    {
        public World World { get; } = new World(Vector2.Zero);
        public Racetrack Racetrack { get; }
        public NeuronalVehicleBehavior VehicleBehavior { get; set; }
        public ReadOnlyCollection<Line> Sensors { get; set; }
        public bool Completed { get; private set; }
        public SimulationResult SimulationResult { get; private set; }
        public Vehicle Vehicle { get; private set; }

        public Simulation(NeuronalVehicleBehavior neuronalVehicleBehavior)
        {
            SimulationResult = new SimulationResult(neuronalVehicleBehavior, Racetrack);
            VehicleBehavior = neuronalVehicleBehavior;
            Racetrack = SimulationSettings.Instance.SelectedRacetrack;
            CreateVertices(Racetrack.InnerVertices);
            CreateVertices(Racetrack.OuterVertices);
            CreateSensors();
            CreateVehicle();
        }

        private void CreateVehicle()
        {
            Vehicle = new Vehicle(World, Racetrack.Coordinates[0], (float)(Racetrack.Coordinates[1] - Racetrack.Coordinates[0]).GetAngle(), VehicleBehavior);
        }

        private void CreateVertices(ReadOnlyCollection<OpenTK.Vector2> vertices)
        {
            for (int i = 0; i < vertices.Count; i++)
            {
                var current = vertices[i];
                var next = vertices[(i + 1) % vertices.Count];
                var edge = BodyFactory.CreateEdge(World, current.ToXnaVector(), next.ToXnaVector(), UserData.Wall);
                edge.BodyType = BodyType.Static;
                edge.CollidesWith = Category.Cat1;
                edge.CollisionCategories = Category.Cat2;
                edge.IsSensor = true;
                edge.UserData = UserData.Wall;
                edge.OnCollision += Edge_OnCollision;
            }

        }

        private bool Edge_OnCollision(Fixture fixtureA, Fixture fixtureB, FarseerPhysics.Dynamics.Contacts.Contact contact)
        {
            Completed = true;
            return true;
        }

        private void CreateSensors()
        {
            var sensors = new List<Line>();

            var vertices = new Vertices(Racetrack.InnerVertices.Select(v => v.ToXnaVector()));
            double length = vertices.GetLength();
            double stepSize = SimulationSettings.Instance.SensorSpacing;
            double currentStep = stepSize;

            while (currentStep + stepSize < length)
            {
                var line = GetLineOnVertices(vertices, currentStep);
                CreateProgressSensor(line, sensors.Count);
                sensors.Add(line);
                currentStep += (sensors.Count) * SimulationSettings.Instance.SensorSpacingFactor + stepSize;
            }
            Sensors = sensors.AsReadOnly();
        }

        private void CreateProgressSensor(Line line, int progressIndex)
        {
            var progressSensor = BodyFactory.CreateEdge(World, line.V1.ToXnaVector(), line.V2.ToXnaVector(), UserData.ProgressSensor);
            progressSensor.CollisionCategories = Category.Cat2;
            progressSensor.CollidesWith = Category.Cat1;
            progressSensor.FixtureList[0].IsSensor = true;
            progressSensor.BodyType = BodyType.Static;
            progressSensor.OnCollision += (fixture1, fixture2, contact) =>
                                          {
                                              SetProgress(progressIndex);
                                              return true;
                                          };
        }

        private void SetProgress(int progressIndex)
        {
            SimulationResult.Distance += 1.0 / Sensors.Count * Racetrack.Length;
            /*if (SimulationResult.Distance >= 1)
            {
                Completed = true;
            }*/
        }

        private Line GetLineOnVertices(Vertices vertices, double offset)
        {
            int index = 0;
            double currentOffset = 0;
            while (true)
            {
                var current = vertices[index].ToOpenTkVector();
                var next = vertices[(index + 1) % vertices.Count].ToOpenTkVector();
                double length = (next - current).Length;
                currentOffset += length;
                if (currentOffset < offset)
                    index++;
                else
                {
                    currentOffset -= length;
                    float factor = (float)((offset - currentOffset) / length);
                    var target = current + (next - current) * factor;
                    var normal = (next - current).AntiNormal()
                                                 .Normalized();

                    var line = new Line(target, target + normal * (float)SimulationSettings.Instance.RacetrackWidth);
                    return line;
                }
            }
        }

        public SimulationResult GetSimulationResult()
        {
            SimulationResult = new SimulationResult(VehicleBehavior, Racetrack);
            Vehicle.Behavior = VehicleBehavior;

            while (!Completed)
            {
                SingleStep(SimulationSettings.Instance.MaxUpdateTime);
            }

            Reset();
            return SimulationResult;
        }

        public async Task<SimulationResult> GetSimulationResultAsync()
        {
            return await Task.Run(() => GetSimulationResult());
        }

        public void SingleStep(double deltaTime)
        {
            var updateTime = deltaTime;
            Vehicle.Update(updateTime);
            World.Step((float)updateTime);
            SimulationResult.SurvivedTime += updateTime;
            if (SimulationResult.SurvivedTime > SimulationSettings.Instance.MaxSimulationTime)
                Completed = true;
        }

        public void Reset()
        {
            Completed = false;

            World.Clear();
            World.ProcessChanges();
            CreateVehicle();
            CreateVertices(Racetrack.OuterVertices);
            CreateVertices(Racetrack.InnerVertices);
            CreateSensors();
        }
    }
}