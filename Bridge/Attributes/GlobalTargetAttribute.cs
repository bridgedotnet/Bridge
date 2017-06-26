using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Property, AllowMultiple = true)]
    [NonScriptable]
    public class GlobalTargetAttribute : Attribute
    {
        public extern GlobalTargetAttribute(string name);
    }
}