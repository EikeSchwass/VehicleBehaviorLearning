using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using FarseerPhysics.Common;
using OpenTK;
using VehicleBehaviorLearning.Engine.Vehicles.Behavior;

namespace VehicleBehaviorLearning.Engine.Helper
{
    public static class HelperMethods
    {
        public static double GetTotalLength(this Vector2[] coordinates)
        {
            double length = 0;
            for (int i = 0; i < coordinates.Length; i++)
            {
                var current = coordinates[i];
                var next = coordinates[(i + 1) % coordinates.Length];
                length += (current - next).Length;
            }
            return length;
        }

        public static DirectoryInfo GetExecutionFolder()
        {
            var folderInfo = new FileInfo(Assembly.GetExecutingAssembly()
                                                  .Location).Directory;
            if (folderInfo == null)
                throw new DirectoryNotFoundException("The execution folder could not be found");
            return folderInfo;
        }

        public static IEnumerable<T> Rotate<T>(this IEnumerable<T> original, int offset)
        {
            var oldArray = original.ToArray();
            var newArray = new T[oldArray.Length];
            for (int i = 0; i < oldArray.Length; i++)
            {
                int newIndex = (i + offset + oldArray.Length) % oldArray.Length;
                newArray[newIndex] = oldArray[i];
            }
            return newArray;
        }

        public static IEnumerable<T> Rotate<T>(this IEnumerable original, int offset)
        {
            var oldArray = original.Cast<T>().ToArray();
            var newArray = new T[oldArray.Length];
            for (int i = 0; i < oldArray.Length; i++)
            {
                int newIndex = (i + offset + oldArray.Length) % oldArray.Length;
                newArray[newIndex] = oldArray[i];
            }
            return newArray;

        }

        public static Microsoft.Xna.Framework.Vector2 ToXnaVector(this Vector2 original)
        {
            return new Microsoft.Xna.Framework.Vector2(original.X, original.Y);
        }

        public static Vector2 ToOpenTkVector(this Microsoft.Xna.Framework.Vector2 original)
        {
            return new Vector2(original.X, original.Y);
        }

        public static Vector2 Rotate(this Vector2 vector, float angleInRadians)
        {
            float angle = angleInRadians;
            float newX = (float)(vector.X * Math.Cos(angle) - vector.Y * Math.Sin(angle));
            float newY = (float)(vector.X * Math.Sin(angle) + vector.Y * Math.Cos(angle));
            return new Vector2(newX, newY);
        }

        public static Vector2 Normal(this Vector2 vector)
        {
            return new Vector2(-vector.Y, vector.X);
        }

        public static Vector2 AntiNormal(this Vector2 vector)
        {
            return (-vector).Normal();
        }

        public static double GetAngle(this Vector2 vector)
        {
            return Math.Atan2(vector.X, -vector.Y);
        }

        public static Vector2 GetNormalized(this Vector2 vector)
        {
            var copy = new Vector2(vector.X, vector.Y);
            copy.Normalize();
            return copy;
        }

        public static void Initialize(this float[] source, float value)
        {
            for (int i = 0; i < source.Length; i++)
            {
                source[i] = value;
            }
        }

        public static double GetLength(this Vertices vertices)
        {
            double length = 0;
            for (int i = 0; i < vertices.Count; i++)
            {
                var current = vertices[i].ToOpenTkVector();
                var next = vertices[(i + 1) % vertices.Count].ToOpenTkVector();
                length += (next - current).Length;
            }
            return length;
        }

        public static void SetAllValuesTo<T>(this T[][] array, T value)
        {
            for (int i = 0; i < array.Length; i++)
            {
                for (int j = 0; j < array[i].Length; j++)
                {
                    array[i][j] = value;
                }
            }
        }

        public static void SetAllValuesTo<T>(this T[,] array, T value)
        {
            for (int i = 0; i < array.GetLength(0); i++)
            {
                for (int j = 0; j < array.GetLength(1); j++)
                {
                    array[i, j] = value;
                }
            }
        }
        public static void SetAllValuesTo<T>(this T[] array, T value)
        {
            for (int i = 0; i < array.GetLength(0); i++)
            {
                array[i] = value;
            }
        }

        public static Func<double, double> GetFunction(this ActivationFunctions activationFunction)
        {
            switch (activationFunction)
            {
                case ActivationFunctions.Sigmoid:
                    return Sigmoid;
                case ActivationFunctions.TanH:
                    return TanH;
                case ActivationFunctions.Linear:
                    return Linear;
                default:
                    throw new ArgumentOutOfRangeException(nameof(activationFunction), activationFunction, null);
            }
        }

        public static int GetGeneration(this ITreeNode treeNode)
        {
            ITreeNode current = treeNode;
            int parents = 0;
            while (current?.ParentNode != null)
            {
                current = current.ParentNode;
                parents++;
            }
            return parents;
        }

        public static double Sigmoid(double x)
        {
            return 1 / (1 + Math.Exp(-x));
        }

        public static double TanH(double x)
        {
            return 2 / (1 + Math.Exp(-2 * x)) - 1;
        }

        public static double Linear(double x)
        {
            return x;
        }

        public static T Mean<T>(this List<T> list)
        {
            return list[list.Count / 2];
        }
    }
}
