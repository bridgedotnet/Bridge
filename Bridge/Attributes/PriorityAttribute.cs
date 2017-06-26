using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Delegate | AttributeTargets.Interface, AllowMultiple = true)]
    [NonScriptable]
    public class PriorityAttribute : Attribute
    {
        public extern PriorityAttribute(int priority);
    }
}