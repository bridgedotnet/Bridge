using System;

namespace Bridge
{
    /// <summary>
    /// This attribute can be applied to a method with a "params" parameter to make the param array be expanded in script (eg. given 'void F(int a, params int[] b)', the invocation 'F(1, 2, 3)' will be translated to 'F(1, [2, 3])' without this attribute, but 'F(1, 2, 3)' with this attribute.
    /// Methods with this attribute can only be invoked in the expanded form.
    /// </summary>
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Constructor | AttributeTargets.Delegate, Inherited = true, AllowMultiple = false)]
    public sealed class ExpandParamsAttribute : Attribute
    {
    }
}