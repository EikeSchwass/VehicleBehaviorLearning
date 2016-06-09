using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using VehicleBehaviorLearning.Engine.Helper;
using VehicleBehaviorLearning.Windows.Controls;

namespace VehicleBehaviorLearning.Engine.Vehicles.Behavior
{
    public class NeuronalVehicleBehavior : ITreeNode
    {
        public string Text => ToString();
        public ITreeNode ParentNode => Parent;
        public NeuronalVehicleBehavior Parent { get; }
        public double[][] Neurons { get; }
        public double[] Weights { get; }

        public NeuronalVehicleBehavior(int numberOfInputNeurons, int[] numberOfNeuronsInHiddenLayers, double[] weights) : this(numberOfInputNeurons, numberOfNeuronsInHiddenLayers, index => weights[index])
        { }

        public NeuronalVehicleBehavior(int numberOfInputNeurons, int[] numberOfNeuronsInHiddenLayers, Func<int, double> weightGenerator)
        {
            Neurons = new double[numberOfNeuronsInHiddenLayers.Length + 2][];
            Neurons[0] = new double[numberOfInputNeurons + 1 + (SimulationSettings.Instance.UseCurrentVehicleSpeedAsInput ? 1 : 0)];
            Neurons[Neurons.Length - 1] = new double[2];
            for (int i = 0; i < numberOfNeuronsInHiddenLayers.Length; i++)
            {
                Neurons[i + 1] = new double[numberOfNeuronsInHiddenLayers[i] + 1];
            }
            Neurons.SetAllValuesTo(1.0);

            Weights = new double[GetWeightCount()];
            for (int i = 0; i < Weights.Length; i++)
            {
                Weights[i] = weightGenerator(i);
            }
        }

        private NeuronalVehicleBehavior(NeuronalVehicleBehavior parent)
        {
            Parent = parent;
            Weights = new double[Parent.Weights.Length];
            for (int i = 0; i < Weights.Length; i++)
            {
                Weights[i] = Parent.Weights[i];
            }
            Neurons = new double[Parent.Neurons.Length][];
            for (int i = 0; i < Parent.Neurons.Length; i++)
            {
                Neurons[i] = new double[Parent.Neurons[i].Length];
            }
        }

        public int GetWeightCount()
        {
            if (Weights != null)
                return Weights.Length;

            int weightIndex = 0;
            for (int i = 1; i < Neurons.Length; i++)
            {
                for (int j = (i == Neurons.Length - 1 ? 0 : 1); j < Neurons[i].Length; j++)
                {
                    for (int k = 0; k < Neurons[i - 1].Length; k++)
                    {
                        weightIndex++;
                    }
                }
            }
            return weightIndex;
        }

        public double GetWeight(int fromLayer, int indexFrom, int indexTo)
        {
            int weightIndex = 0;
            for (int i = 1; i < Neurons.Length; i++)
            {
                for (int j = (i == Neurons.Length - 1 ? 0 : 1); j < Neurons[i].Length; j++)
                {
                    for (int k = 0; k < Neurons[i - 1].Length; k++)
                    {
                        if (i - 1 == fromLayer && k == indexFrom && j == indexTo)
                            return Weights[weightIndex];
                        weightIndex++;
                    }
                }
            }
            throw new ArgumentException("Invalid argument configuration");
        }

        public double GetWeightReverse(int toLayer, int indexFrom, int indexTo)
        {
            int weightIndex = 0;
            for (int i = 1; i < Neurons.Length; i++)
            {
                for (int j = (i == Neurons.Length - 1 ? 0 : 1); j < Neurons[i].Length; j++)
                {
                    for (int k = 0; k < Neurons[i - 1].Length; k++)
                    {
                        if (i == toLayer && k == indexFrom && j == indexTo)
                            return Weights[weightIndex];
                        weightIndex++;
                    }
                }
            }
            throw new ArgumentException("Invalid argument configuration");
        }

        public VehicleBehaviorActions GetVehicleBehaviorActions(VehicleBehaviorInput vehicleBehaviorInput)
        {

            int weightIndex = 0;
            if (SimulationSettings.Instance.UseCurrentVehicleSpeedAsInput)
                Neurons[0][1] = vehicleBehaviorInput.SpeedFraction;
            for (int i = 0; i < vehicleBehaviorInput.SensorValues.Count; i++)
            {
                Neurons[0][1 + i + (SimulationSettings.Instance.UseCurrentVehicleSpeedAsInput ? 1 : 0)] = vehicleBehaviorInput.SensorValues[i].Value;
            }
            for (int i = 1; i < Neurons.Length; i++)
            {
                for (int j = (i == Neurons.Length - 1 ? 0 : 1); j < Neurons[i].Length; j++)
                {
                    double sum = 0;
                    for (int k = 0; k < Neurons[i - 1].Length; k++)
                    {
                        sum += Neurons[i - 1][k] * Weights[weightIndex++];
                    }
                    Neurons[i][j] = SimulationSettings.Instance.MachineLearningSettings.ActivationFunction(sum, i, j);
                }
            }
            return new VehicleBehaviorActions(Neurons.Last()[0], Neurons.Last()[1]);
        }

        public NeuronalVehicleBehavior Mutate(double mutationChancePerWeight, double deviation)
        {
            var newNVB = new NeuronalVehicleBehavior(this);
            do
            {
                newNVB.Weights[ThreadSafeRandom.Next(newNVB.Weights.Length)] += ThreadSafeRandom.NextNormalDistributed(0, deviation);
            } while (ThreadSafeRandom.NextBool(mutationChancePerWeight));
            return newNVB;
        }

        public NeuronalVehicleBehavior Clone()
        {
            return new NeuronalVehicleBehavior(this);
        }

        protected bool Equals(NeuronalVehicleBehavior other)
        {
            if (Weights.Length != other.Weights.Length)
                return false;
            bool weightEqual = true;
            for (int i = 0; i < Weights.Length; i++)
            {
                // ReSharper disable once CompareOfFloatsByEqualityOperator
                if (Weights[i] != other.Weights[i])
                {
                    weightEqual = false;
                    break;
                }
            }
            var r1 = Equals(Parent, other.Parent);
            var result = r1 && weightEqual;
            return result;
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            var other = obj as NeuronalVehicleBehavior;
            return other != null && Equals(other);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((Parent?.GetHashCode() ?? 0) * 397) ^ (Weights?.GetHashCode() ?? 0);
            }
        }
    }
}