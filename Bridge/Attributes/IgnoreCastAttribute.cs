using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Delegate | AttributeTargets.Interface, AllowMultiple = true)]
    [NonScriptable]
    public sealed class IgnoreCastAttribute : Attribute
    {
    }

    [External]
    [AttributeUsage(AttributeTargets.Enum | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Interface)]
    [NonScriptable]
    public sealed class CastAttribute : Attribute
    {
        public extern CastAttribute(string value);
    }
}