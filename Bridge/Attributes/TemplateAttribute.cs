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
        extern internal TemplateAttribute();

        public extern TemplateAttribute(string format);

        public extern TemplateAttribute(string format, string nonExpandedFormat);

        public extern string Fn
        {
            get; set;
        }
    }
}