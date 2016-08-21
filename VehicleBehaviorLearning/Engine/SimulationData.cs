using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using LiveCharts;
using VehicleBehaviorLearning.Engine.Helper;
using VehicleBehaviorLearning.Engine.Vehicles.Behavior;

namespace VehicleBehaviorLearning.Engine
{
    public class SimulationData
    {
        public ChartValues<SimulationResult> BestResults { get; } = new ChartValues<SimulationResult>();
        public ChartValues<SimulationResult> MeanResults { get; } = new ChartValues<SimulationResult>();
        public ChartValues<SimulationResult> WorstResults { get; } = new ChartValues<SimulationResult>();
        public ChartValues<SimulationResult[]> AllResults { get; } = new ChartValues<SimulationResult[]>();
        public NeuronalVehicleBehavior[] CurrentVehicleBehaviors => AllResults.Last().Select(sr => sr.VehicleBehavior).ToArray();

        public int Generations => Math.Min(BestResults.Count, Math.Min(MeanResults.Count, WorstResults.Count));

        public int GenerationsAfterLastImprovement
        {
            get
            {
                double lastBest = BestResults.Last().Rating;
                for (int i = BestResults.Count - 2; i >= 0; i--)
                {
                    if (BestResults[i].Rating < lastBest)
                        return BestResults.Count - 1 - i;
                }
                return BestResults.Count - 1;
            }
        }

        public event Action<SimulationData, List<SimulationResult>> SimulationResultAdded;

        public SimulationData()
        {
            BestResults = new ChartValues<SimulationResult>();
        }

        public void AddSimulationResults(SimulationResult[] simulationResults)
        {
            AllResults.Add(simulationResults);
            var ordered = simulationResults.OrderBy(s => s.Rating).ToList();
            BestResults.Add(ordered.Last());
            WorstResults.Add(ordered.First());
            MeanResults.Add(ordered.Mean());
            SimulationResultAdded?.Invoke(this, ordered);
        }
    }
}