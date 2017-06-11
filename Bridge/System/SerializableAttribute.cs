using System;
using System.Reflection;
using Bridge;

namespace System
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Delegate, Inherited = false)]
    [External]
    [NonScriptable]
    public sealed class SerializableAttribute : Attribute
    {
    }
}
