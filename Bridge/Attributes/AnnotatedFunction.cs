using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Assembly | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Method)]
    [NonScriptable]
    public sealed class AnnotatedFunctionAttribute : Attribute
    {
        public extern AnnotatedFunctionAttribute();
        public extern AnnotatedFunctionAttribute(string name);
    }
}