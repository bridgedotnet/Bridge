using Bridge;

namespace System.ComponentModel.DataAnnotations
{
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter,
        AllowMultiple = false)]
    [External]
    [NonScriptable]
    public sealed class CreditCardAttribute : DataTypeAttribute
    {
        public extern CreditCardAttribute();
    }
}
