using System;

namespace Bridge
{
    /// <summary>
    /// Specifies full path name of the entity (namespace+entity), when emitting JavaScript-equivalent
    /// code. This overrides the inferred namespace.class.method name, for example.
    /// </summary>
    /// <remarks>
    /// Use "Object" (with quotes) to hide its type in JavaScript-level (useful when you create
    /// a hidden class to fill several public classes' methods).
    /// </remarks>
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Enum | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Method | AttributeTargets.Interface | AttributeTargets.Field | AttributeTargets.Delegate | AttributeTargets.Property | AttributeTargets.Parameter)]
    public sealed class NameAttribute : Attribute
    {
        public NameAttribute(string value)
        {
        }
    }
}