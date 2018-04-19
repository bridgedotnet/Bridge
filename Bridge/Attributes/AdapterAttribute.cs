using System;

namespace Bridge
{
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
    public abstract class AdapterAttribute : Attribute
    {
    }
}