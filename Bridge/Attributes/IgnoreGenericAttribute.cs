using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Delegate | AttributeTargets.Interface | AttributeTargets.Method, AllowMultiple = true)]
    [NonScriptable]
    public sealed class IgnoreGenericAttribute : Attribute
    {
        public bool AllowInTypeScript
        {
            get;
            set;
        }
    }
}