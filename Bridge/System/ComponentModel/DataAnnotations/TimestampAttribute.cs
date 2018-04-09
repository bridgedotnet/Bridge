namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// This attribute is used to mark a Timestamp member of a Type.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, AllowMultiple = false, Inherited = true)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class TimestampAttribute : Attribute { }
}
