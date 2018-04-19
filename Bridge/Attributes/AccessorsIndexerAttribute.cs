using System;

namespace Bridge
{
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    public sealed class AccessorsIndexerAttribute : Attribute
    {
    }
}