using System;

namespace Bridge
{
    /// <summary>
    /// Makes it so the code with this attribute is not built into the assembly files.
    /// Useful for stubbed out code to match JavaScript.
    /// </summary>
    [External]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Delegate | AttributeTargets.Interface | AttributeTargets.Method | AttributeTargets.Property, AllowMultiple = true)]
    public sealed class ExternalAttribute : Attribute
    {
    }

    [External]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Delegate | AttributeTargets.Interface | AttributeTargets.Method | AttributeTargets.Property, AllowMultiple = true)]
    [Obsolete("Use ExternalAttribute instead IgnoreAttribute")]
    public sealed class IgnoreAttribute : Attribute
    {
    }

    /// <summary>
    /// Applies to interface if it's implementation is done outside Bridge type system (class implementation doesn't provide aliases for interface members implementations)
    /// </summary>
    [External]
    [AttributeUsage(AttributeTargets.Interface)]
    public sealed class ExternalInterfaceAttribute : Attribute
    {
    }
}