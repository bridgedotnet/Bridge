using System;
using System.Reflection;

namespace System
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Delegate, Inherited = false)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class SerializableAttribute : Attribute
    {
    }
}
