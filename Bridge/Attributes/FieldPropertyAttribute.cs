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
    [Obsolete("Deprecated in Bridge 16.0. See Issue #2234 for more information.", true)]
    public sealed class FieldPropertyAttribute : Attribute
    {
    }
}