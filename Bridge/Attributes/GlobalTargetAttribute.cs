using System;

namespace Bridge
{
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Property, AllowMultiple = true)]
    public class GlobalTargetAttribute : Attribute
    {
        public GlobalTargetAttribute(string name)
        {
        }
    }
}