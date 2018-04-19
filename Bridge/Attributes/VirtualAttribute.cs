using System;

namespace Bridge
{
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Assembly | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Interface | AttributeTargets.Delegate, AllowMultiple = false)]
    public sealed class VirtualAttribute : Attribute
    {
        public extern VirtualAttribute();
        public extern VirtualAttribute(VirtualTarget target);
    }

    [NonScriptable]
    public enum VirtualTarget
    {
        All = 0,
        Class = 1,
        Interface = 2
    }
}