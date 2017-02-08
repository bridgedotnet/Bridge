using System;

namespace Bridge
{
    /// <summary>
    /// The [FieldProperty] attribute will be deprecated in Bridge 16.0 and removed in 17.0, see Issue #2234
    /// Complies a C# Property into a simple JavaScript field with no setter or getter, and also includes indexer access.
    /// </summary>
    [External]
    [AttributeUsage(AttributeTargets.Property)]
    [NonScriptable]
    public sealed class FieldPropertyAttribute : Attribute
    {
    }
}