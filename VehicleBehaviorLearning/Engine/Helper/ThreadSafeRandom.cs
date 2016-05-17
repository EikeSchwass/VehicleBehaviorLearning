using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VehicleBehaviorLearning.Engine.Helper
{
    public static class ThreadSafeRandom
    {
        private static readonly Random global = new Random();
        [ThreadStatic]
        private static Random local;

        public static int Next(int max) => Next(0, max);

        public static int Next(int min, int max)
        {
            Random inst = local;
            if (inst == null)
            {
                int seed;
                lock (global) seed = global.Next();
                local = inst = new Random(seed);
            }
            return inst.Next(min, max);
        }

        public static double NextDouble() => NextDouble(0, 1);

        public static double NextDouble(double max) => NextDouble(0, max);

        public static double NextDouble(double min, double max)
        {
            Random inst = local;
            if (inst == null)
            {
                int seed;
                lock (global) seed = global.Next();
                local = inst = new Random(seed);
            }
            double value = min + inst.NextDouble() * (max - min);
            return value;
        }

        public static bool NextBool() => NextBool(0.5);

        public static bool NextBool(double chance)
        {
            return NextDouble() >= chance;
        }

        public static double NextNormalDistributed() => NextNormalDistributed(0, 1);

        public static double NextNormalDistributed(double mean, double deviation)
        {
            double w, x1, x2;

            do
            {
                x1 = 2 * NextDouble() - 1.0;
                x2 = 2 * NextDouble() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1);
            w = Math.Sqrt((-2 * Math.Log(w)) / w);
            double result = x1 * w;
            result = deviation * result + mean;
            return result;
        }
    }
}
