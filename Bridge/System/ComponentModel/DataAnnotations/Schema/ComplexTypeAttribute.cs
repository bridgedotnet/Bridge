namespace System.ComponentModel.DataAnnotations.Schema
{
    /// <summary>
    /// Denotes that the class is a complex type.
    /// Complex types are non-scalar properties of entity types that enable scalar properties to be organized within
    /// entities.
    /// Complex types do not have keys and cannot be managed by the Entity Framework apart from the parent object.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public class ComplexTypeAttribute : Attribute { }
}
