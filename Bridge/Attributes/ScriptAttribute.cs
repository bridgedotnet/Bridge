using System;

namespace Bridge
{
    /// <summary>
    /// ScriptAttribute specifies the method implementation that will be output to javascript
    /// instead of its actual C# implementation. C# implementation is completely discarded if
    /// this attribute is used.
    /// </summary>
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Constructor)]
    [CLSCompliant(false)]
    public sealed class ScriptAttribute : Attribute
    {
        public ScriptAttribute(params string[] lines)
        {
        }
    }
}