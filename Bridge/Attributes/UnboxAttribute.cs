using System;

namespace Bridge
{
    /// <summary>
    /// For classes marked with [External], controls unboxing for method parameters of type object.
    /// By default, Bridge applies unboxing. Add this attributes with allow = false to override this behaviour.
    /// </summary>
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Property | AttributeTargets.Class | AttributeTargets.Interface | AttributeTargets.Field)]
    public class UnboxAttribute : Attribute
    {
        /// <summary>
        /// Controls unboxing for [External] classes or methods.
        /// </summary>
        /// <param name="allow">False skips generating unboxing.</param>
        public extern UnboxAttribute(bool allow);
    }
}