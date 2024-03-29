using System;

namespace VehicleBehaviorLearning.Properties
{
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
    public sealed class AspRequiredAttributeAttribute : Attribute
    {
        public AspRequiredAttributeAttribute([NotNull] string attribute)
        {
            Attribute = attribute;
        }

        public string Attribute { get; private set; }
    }
}