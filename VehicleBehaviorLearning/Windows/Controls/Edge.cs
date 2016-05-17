using System.Windows;
using System.Windows.Shapes;
using VehicleBehaviorLearning.Engine.Vehicles.Behavior;

namespace VehicleBehaviorLearning.Windows.Controls
{
    public class Edge
    {
        public ITreeNode From { get; }
        public ITreeNode To { get; }
        public Line Line { get; }
        public FrameworkElement FromFrameworkElement { get; }
        public FrameworkElement ToFrameworkElement { get; }

        public Edge(ITreeNode from, ITreeNode to, Line line, FrameworkElement fromFrameworkElement, FrameworkElement toFrameworkElement)
        {
            From = @from;
            To = to;
            Line = line;
            FromFrameworkElement = fromFrameworkElement;
            ToFrameworkElement = toFrameworkElement;
        }
    }
}