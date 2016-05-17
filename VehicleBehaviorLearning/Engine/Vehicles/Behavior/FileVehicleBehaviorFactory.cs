using System;
using System.IO;
using System.Xml.Serialization;

namespace VehicleBehaviorLearning.Engine.Vehicles.Behavior
{
    public class FileVehicleBehaviorFactory : VehicleBehaviorFactory
    {
        public string FilePath { get; set; }

        public FileVehicleBehaviorFactory(string filePath)
        {
            if (!File.Exists(filePath))
                throw new ArgumentException("File not found");

            FilePath = filePath;
        }

        public override NeuronalVehicleBehavior CreateVehicleBehavior()
        {
            return Load(FilePath);
        }

        public static NeuronalVehicleBehavior Load(string filePath)
        {
            using (FileStream fs = new FileStream(filePath, FileMode.Open))
            {
                XmlSerializer xmlSerializer = new XmlSerializer(typeof(double[]));
                double[] weights = (double[])xmlSerializer.Deserialize(fs);
                return new NeuronalVehicleBehavior(SimulationSettings.Instance.MachineLearningSettings.NumberOfInputNeurons, SimulationSettings.Instance.MachineLearningSettings.NumberOfNeuronsInHiddenLayers, weights);
            }
        }

        public static void Save(NeuronalVehicleBehavior vehicleBehavior, string filePath)
        {
            using (FileStream fs = new FileStream(filePath, FileMode.Create))
            {
                XmlSerializer xmlSerializer = new XmlSerializer(typeof(double[]));
                xmlSerializer.Serialize(fs, vehicleBehavior.Weights);
            }
        }

        public override string ToString()
        {
            return $"Vehicle behavior from file {new FileInfo(FilePath).Name}";
        }
    }
}