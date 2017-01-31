using System;

namespace Bridge
{
    /// <summary>
    /// Complies a C# Property into a simple JavaScript field with no setter or getter, and also includes indexer access.
    /// </summary>
    [External]
    [AttributeUsage(AttributeTargets.Property)]
    [NonScriptable]
    public sealed class FieldAttribute : Attribute
    {
    }
}