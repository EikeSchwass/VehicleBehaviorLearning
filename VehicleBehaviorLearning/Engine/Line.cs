using OpenTK;

namespace VehicleBehaviorLearning.Engine
{
    public struct Line
    {
        public Vector2 V1 { get; }
        public Vector2 V2 { get; }

        public Line(Vector2 v1, Vector2 v2)
        {
            V1 = v1;
            V2 = v2;
        }

    }
}