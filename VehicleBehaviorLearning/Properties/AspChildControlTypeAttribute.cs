using System;

namespace VehicleBehaviorLearning.Properties
{
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
    public sealed class AspChildControlTypeAttribute : Attribute
    {
        public AspChildControlTypeAttribute(string tagName, Type controlType)
        {
            TagName = tagName;
            ControlType = controlType;
        }

        public string TagName { get; private set; }
        public Type ControlType { get; private set; }
    }
}