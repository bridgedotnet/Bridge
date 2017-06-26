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
    [External]
    [AttributeUsage(AttributeTargets.Enum | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Method | AttributeTargets.Interface | AttributeTargets.Field | AttributeTargets.Delegate | AttributeTargets.Property | AttributeTargets.Parameter)]
    [NonScriptable]
    public sealed class NameAttribute : Attribute
    {
        public extern NameAttribute(string value);

        [Obsolete("Please replace [Name(true)] with [Convention(Notation.LowerCamelCase)] (by default [Name(false)] is used which is an equivalent of [Convention]). See Issue #2477 for details.", true)]
        public extern NameAttribute(bool changeCase);
    }
}