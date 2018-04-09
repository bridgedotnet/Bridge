using System;

namespace Bridge
{
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Struct, AllowMultiple = false)]
    public sealed class ImmutableAttribute : Attribute
    {
    }
}