using System;

namespace Bridge
{
    /// <summary>
    /// This attribute turns methods on a static class as global methods in the generated
    /// script. Note that the class must be static, and must contain only methods.
    /// </summary>
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Class, Inherited = false, AllowMultiple = true)]
    public sealed class GlobalMethodsAttribute : Attribute
    {
        public extern GlobalMethodsAttribute();
        public extern GlobalMethodsAttribute(bool scoped);
    }
}