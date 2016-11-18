using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class)]
    [NonScriptable]
    public class UnboxAttribute : Attribute
    {
        public extern UnboxAttribute(bool allow);
    }
}