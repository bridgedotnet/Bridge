using System;

namespace Bridge
{
    /// <summary>
    /// ScriptAttribute specifies the method implementation that will be output to javascript
    /// instead of its actual C# implementation. C# implementation is completely discarded if
    /// this attribute is used.
    /// </summary>
    [External]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Constructor)]
    [NonScriptable]
    public sealed class ScriptAttribute : Attribute
    {
        public extern ScriptAttribute(params string[] lines);
    }
}