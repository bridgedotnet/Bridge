using Bridge;

namespace System.ComponentModel.DataAnnotations
{
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter,
        AllowMultiple = false)]
    [External]
    [NonScriptable]
    public sealed class FileExtensionsAttribute : DataTypeAttribute
    {
        public extern FileExtensionsAttribute();

        public extern string Extensions { get; set; }
    }
}
