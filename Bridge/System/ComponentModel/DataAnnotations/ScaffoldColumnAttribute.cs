namespace System.ComponentModel.DataAnnotations
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, AllowMultiple = false)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public class ScaffoldColumnAttribute : Attribute
    {
        public extern ScaffoldColumnAttribute(bool scaffold);

        public extern bool Scaffold { get; }
    }
}
