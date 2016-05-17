using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Windows;
using System.Xml;
using OpenTK;
using VehicleBehaviorLearning.Engine.Helper;
using VehicleBehaviorLearning.Windows;
using Path = System.IO.Path;

namespace VehicleBehaviorLearning.Engine
{
    public static class RacetrackLoader
    {
        public static IEnumerable<Racetrack> LoadAllRaceTtracks()
        {
            if ((bool)(DesignerProperties.IsInDesignModeProperty.GetMetadata(typeof(DependencyObject))
                                          .DefaultValue))
            {
                return Enumerable.Empty<Racetrack>();
            }
            var folderInfo = HelperMethods.GetExecutionFolder();
            var folder = new DirectoryInfo(Path.Combine(folderInfo.FullName, "Racetracks"));
            return folder.EnumerateFiles("*.xml").Select(racetrackFile => LoadRacetrack(racetrackFile.FullName));
        }

        public static Racetrack LoadRacetrack(string path)
        {
            using (XmlReader reader = XmlReader.Create(path))
            {
                reader.ReadToFollowing("track");

                var coordinates = new List<Vector2>();
                string name = reader.GetAttribute("name");
                while (reader.Read())
                {
                    if (!reader.IsStartElement())
                        continue;
                    double lat = Convert.ToDouble(reader.GetAttribute("lat")
                                                      ?.Replace(".", ","));
                    double lon = Convert.ToDouble(reader.GetAttribute("lon")
                                                      ?.Replace(".", ","));

                    var coords = GPSToUTM(lat, lon);
                    coordinates.Add(coords);
                }
                return new Racetrack(name, coordinates.ToArray());
            }
        }


        private static Vector2 GPSToUTM(double lat, double lon)
        {
            var m = lat * (Math.PI / 180) * (1 - (1 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * (1.0 / 4 + (1 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * (3.0 / 64 + 5 * (1 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) / 256)));
            m = m - Math.Sin(2 * lat * (Math.PI / 180)) * ((1 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * (3.0 / 8 + (1 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * (3.0 / 32 + 45 * (1 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) / 1024)));
            m = m + Math.Sin(4 * lat * (Math.PI / 180)) * ((1 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * (1 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * (15.0 / 256 + (1 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * 45 / 1024));
            m = m - Math.Sin(6 * lat * (Math.PI / 180)) * ((1 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * (1 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * (1 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * (35.0 / 3072));
            m = m * 6378137.0;
            var x = 0.9996 * (6378137.0 / Math.Sqrt(1 - Math.Pow(Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sin(lat * (Math.PI / 180)), 2))) * (lon - (3 + 6 * (1 + Math.Floor((lon + 180) / 6) - 1) - 180)) * (Math.PI / 180) * Math.Cos(lat * (Math.PI / 180)) * (1 + (lon - (3 + 6 * (1 + Math.Floor((lon + 180) / 6) - 1) - 180)) * (Math.PI / 180) * Math.Cos(lat * (Math.PI / 180)) * (lon - (3 + 6 * (1 + Math.Floor((lon + 180) / 6) - 1) - 180)) * (Math.PI / 180) * Math.Cos(lat * (Math.PI / 180)) * ((1 - Math.Pow(Math.Tan(lat * (Math.PI / 180)), 2) + Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) / (1 - Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0))) * Math.Pow(Math.Cos(lat * (Math.PI / 180)), 2)) / 6 + (lon - (3 + 6 * (1 + Math.Floor((lon + 180) / 6) - 1) - 180)) * (Math.PI / 180) * Math.Cos(lat * (Math.PI / 180)) * (lon - (3 + 6 * (1 + Math.Floor((lon + 180) / 6) - 1) - 180)) * (Math.PI / 180) * Math.Cos(lat * (Math.PI / 180)) * (5 - 18 * Math.Pow(Math.Tan(lat * (Math.PI / 180)), 2) + Math.Pow(Math.Tan(lat * (Math.PI / 180)), 2) * Math.Pow(Math.Tan(lat * (Math.PI / 180)), 2) + 72 * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) / (1 - Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0))) * Math.Pow(Math.Cos(lat * (Math.PI / 180)), 2) - 58 * (Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) / (1 - Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0))))) / 120));
            x = x + 500000;
            var y = 0.9996 *
                    (m - 0 +
                     6378137.0 / Math.Sqrt(1 - Math.Pow(Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sin(lat * (Math.PI / 180)), 2)) * Math.Tan(lat * (Math.PI / 180)) *
                     ((lon - (3 + 6 * (1 + Math.Floor((lon + 180) / 6) - 1) - 180)) * (Math.PI / 180) * Math.Cos(lat * (Math.PI / 180)) * (lon - (3 + 6 * (1 + Math.Floor((lon + 180) / 6) - 1) - 180)) * (Math.PI / 180) * Math.Cos(lat * (Math.PI / 180)) * (1.0 / 2 + (lon - (3 + 6 * (1 + Math.Floor((lon + 180) / 6) - 1) - 180)) * (Math.PI / 180) * Math.Cos(lat * (Math.PI / 180)) * (lon - (3 + 6 * (1 + Math.Floor((lon + 180) / 6) - 1) - 180)) * (Math.PI / 180) * Math.Cos(lat * (Math.PI / 180)) * ((5 - Math.Pow(Math.Tan(lat * (Math.PI / 180)), 2) + 9 * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) / (1 - Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0))) * Math.Pow(Math.Cos(lat * (Math.PI / 180)), 2) + 4 * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) / (1 - Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0))) * Math.Pow(Math.Cos(lat * (Math.PI / 180)), 2) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) / (1 - Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0))) * Math.Pow(Math.Cos(lat * (Math.PI / 180)), 2)) / 24 + (lon - (3 + 6 * (1 + Math.Floor((lon + 180) / 6) - 1) - 180)) * (Math.PI / 180) * Math.Cos(lat * (Math.PI / 180)) * (lon - (3 + 6 * (1 + Math.Floor((lon + 180) / 6) - 1) - 180)) * (Math.PI / 180) * Math.Cos(lat * (Math.PI / 180)) * (61 - 58 * Math.Pow(Math.Tan(lat * (Math.PI / 180)), 2) + Math.Pow(Math.Tan(lat * (Math.PI / 180)), 2) * Math.Pow(Math.Tan(lat * (Math.PI / 180)), 2) + 600 * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) / (1 - Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0))) * Math.Pow(Math.Cos(lat * (Math.PI / 180)), 2) - 330 * (Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) / (1 - Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0)) * Math.Sqrt(1.0 - (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0) * (6378137.0 * (1 - 1 / 298.2572236) / 6378137.0))))) / 720))));
            if (y < 0)
            {
                y = 10000000 + y;
            }
            double east = x;
            double north = y;

            return new Vector2((float)east, (float)north);

        }
    }
}
