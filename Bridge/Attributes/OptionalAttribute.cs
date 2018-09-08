using System;

namespace Bridge
{
    /// <summary>
    /// Attribute modifies the generated .d.ts to include the TypeScript ? optional modifier.
    /// </summary>
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field)]
    public sealed class OptionalAttribute : Attribute
    {
    }
}