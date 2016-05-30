using System.Windows.Media;

namespace VehicleBehaviorLearning.Windows.Controls
{
    public struct LineDefinition
    {
        public double StrokeThickness { get; }
        public Brush StrokeBrush { get; }

        public LineDefinition(double strokeThickness, Brush strokeBrush)
        {
            StrokeThickness = strokeThickness;
            StrokeBrush = strokeBrush;
        }
    }
}