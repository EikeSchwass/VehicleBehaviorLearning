using System;

namespace VehicleBehaviorLearning.Properties
{
    [AttributeUsage(AttributeTargets.Assembly, AllowMultiple = true)]
    public sealed class AspMvcAreaPartialViewLocationFormatAttribute : Attribute
    {
        public AspMvcAreaPartialViewLocationFormatAttribute(string format)
        {
            Format = format;
        }

        public string Format { get; private set; }
    }
}