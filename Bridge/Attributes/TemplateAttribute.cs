using System;

namespace Bridge
{
    /// <summary>
    /// TemplateAttribute is instruction to replace method calling (in expression) by required code
    /// </summary>
    [External]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Field | AttributeTargets.Constructor)]
    [NonScriptable]
    public sealed class TemplateAttribute : Attribute
    {
        internal TemplateAttribute()
        {
        }

        public TemplateAttribute(string format)
        {
        }

        public TemplateAttribute(string format, string nonExpandedFormat)
        {
        }

        public string Fn
        {
            get; set;
        }
    }
}