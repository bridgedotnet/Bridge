using Bridge;

namespace System.ComponentModel.DataAnnotations
{
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, AllowMultiple = false)]
    [External]
    [NonScriptable]
    public class ScaffoldColumnAttribute : Attribute
    {
        public extern ScaffoldColumnAttribute(bool scaffold);

        public extern bool Scaffold { get; }
    }
}
