using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Xna.Framework;
using VehicleBehaviorLearning.Engine.Helper;
using VehicleBehaviorLearning.Engine.Vehicles.Behavior;

namespace VehicleBehaviorLearning.Engine
{
    public class SimulationManager
    {
        public SimulationData SimulationData { get; } = new SimulationData();
        public Simulation[] Simulations { get; } = new Simulation[SimulationSettings.Instance.VehicleBehaviors.Count];

        public event Action<SimulationManager, SimulationResult[]> GenerationCompleted;

        private SimulationManager()
        {
            for (int i = 0; i < Simulations.Length; i++)
            {
                Simulations[i] = new Simulation(SimulationSettings.Instance.VehicleBehaviors[i].CreateVehicleBehavior());
            }
        }

        public static Task<SimulationManager> CreateAsync()
        {
            return Task.Run(() => new SimulationManager());
        }

        public void CompleteGeneration()
        {
            List<SimulationResult> simulationResults = new List<SimulationResult>();
            var tasks = Simulations.Select(simulation => new Task(() =>
                                                                         {
                                                                             var simulationResult = simulation.GetSimulationResult();
                                                                             lock (simulationResults)
                                                                             {
                                                                                 simulationResults.Add(simulationResult);
                                                                             }
                                                                         })).ToArray();
            foreach (var task in tasks)
            {
                task.Start();
            }
            Task.WaitAll(tasks);
            SimulationData.AddSimulationResults(simulationResults.ToArray());

            NextGeneration();
            GenerationCompleted?.Invoke(this, simulationResults.ToArray());
        }

        private void NextGeneration()
        {
            List<NeuronalVehicleBehavior> vehicleBehaviors = new List<NeuronalVehicleBehavior>();
            var ordered = Simulations.OrderByDescending(s => s.SimulationResult.Rating).ToList();
            vehicleBehaviors.AddRange(ordered.Take(1).Select(s => s.VehicleBehavior.Clone()));
            while (vehicleBehaviors.Count < Simulations.Length)
            {
                double exponent = 4;
                double chanceIndex = ThreadSafeRandom.NextDouble(0, Simulations.Sum(s => Math.Pow(s.SimulationResult.Rating, exponent)));
                double sum = 0;

                foreach (Simulation simulation in Simulations)
                {
                    sum += Math.Pow(simulation.SimulationResult.Rating, exponent);
                    if (chanceIndex <= sum)
                    {
                        vehicleBehaviors.Add(simulation.VehicleBehavior.Mutate(CalculateMutationChance(simulation.SimulationResult), CalculateDeviation(simulation.SimulationResult)));
                        break;
                    }
                }
            }

            for (int i = 0; i < Simulations.Length; i++)
            {
                var simulation = Simulations[i];
                simulation.VehicleBehavior = vehicleBehaviors[i];
            }
        }

        public async Task CompleteGenerationAsync()
        {
            await Task.Run(() => CompleteGeneration());
        }

        public double CalculateDeviation(SimulationResult simulationResult)
        {
            return Math.Max(0.1, 2 - simulationResult.Rating);
            int generation = SimulationData.Generations;
            generation = Math.Max(1, generation);
            double y = (SimulationSettings.Instance.MachineLearningSettings.MutationDeviationStart - SimulationSettings.Instance.MachineLearningSettings.MutationDeviationBase) / generation;
            y += SimulationSettings.Instance.MachineLearningSettings.MutationDeviationBase;
            y += ((Math.Sin(MathHelper.ToRadians((SimulationData.Generations - 1) / 13f * 360)) / 2 + 0.5) * SimulationSettings.Instance.MachineLearningSettings.MutationDeviationStart / 4) * HelperMethods.Sigmoid(SimulationData.GenerationsAfterLastImprovement * 0.1 - 3);
            int mutationSpikeInterval = SimulationSettings.Instance.MachineLearningSettings.MutationDeviationSpikeInterval;
            if (mutationSpikeInterval > 0 && generation % mutationSpikeInterval == 0)
                y += SimulationSettings.Instance.MachineLearningSettings.MutationDeviationSpikeHeight;
            return y;
        }

        public double CalculateMutationChance(SimulationResult simulationResult)
        {
            return Math.Max(0.01, 0.01 / Math.Pow(simulationResult.Rating, 0.2));
            int generation = SimulationData.Generations;
            generation = Math.Max(1, generation);
            double y = (SimulationSettings.Instance.MachineLearningSettings.MutationChanceStart - SimulationSettings.Instance.MachineLearningSettings.MutationChanceBase) / generation;
            y += SimulationSettings.Instance.MachineLearningSettings.MutationChanceBase;
            y += ((Math.Sin(MathHelper.ToRadians((SimulationData.Generations) / 17f * 360)) / 2 + 0.5) * SimulationSettings.Instance.MachineLearningSettings.MutationChanceStart / 4) * HelperMethods.Sigmoid(SimulationData.GenerationsAfterLastImprovement * 0.25 - 3);
            int mutationSpikeInterval = SimulationSettings.Instance.MachineLearningSettings.MutationChanceSpikeInterval;
            if (mutationSpikeInterval > 0 && generation % mutationSpikeInterval == 0)
                y += SimulationSettings.Instance.MachineLearningSettings.MutationChanceSpikeHeight;
            return y;
        }
    }
}