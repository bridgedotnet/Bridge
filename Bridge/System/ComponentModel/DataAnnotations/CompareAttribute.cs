using Bridge;

namespace System.ComponentModel.DataAnnotations
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    [External]
    [NonScriptable]
    public class CompareAttribute : ValidationAttribute
    {
        public extern CompareAttribute(string otherProperty);

        public extern string OtherProperty { get; private set; }

        public extern string OtherPropertyDisplayName { get; internal set; }
    }
}
