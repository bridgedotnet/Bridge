namespace Bridge.Html5
{
    /// <summary>
    /// An object implementing the CSSRule DOM interface represents a single CSS at-rule. References to a CSSRule-implementing object may be obtained by looking at a CSS style sheet's cssRules list.
    /// </summary>
    [External]
    [Name("CSSRule")]
    public class CSSRule
    {
        protected extern internal CSSRule();

        public const ushort STYLE_RULE = 1;
        public const ushort CHARSET_RULE = 2;
        public const ushort IMPORT_RULE = 3;
        public const ushort MEDIA_RULE = 4;
        public const ushort FONT_FACE_RULE = 5;
        public const ushort PAGE_RULE = 6;
        public const ushort KEYFRAMES_RULE = 7;
        public const ushort KEYFRAME_RULE = 8;
        public const ushort NAMESPACE_RULE = 10;
        public const ushort COUNTER_STYLE_RULE = 11;
        public const ushort SUPPORTS_RULE = 12;
        public const ushort DOCUMENT_RULE = 13;
        public const ushort FONT_FEATURE_VALUES_RULE = 14;
        public const ushort VIEWPORT_RULE = 15;
        public const ushort REGION_STYLE_RULE = 16;

        /// <summary>
        /// Represents the textual representation of the rule, e.g. "h1,h2 { font-size: 16pt }"
        /// </summary>
        public string CssText;

        /// <summary>
        /// Returns the containing rule, otherwise null. E.g. if this rule is a style rule inside an @media block, the parent rule would be that CSSMediaRule.
        /// </summary>
        public readonly CSSRule ParentRule;

        /// <summary>
        /// Returns the CSSStyleSheet object for the style sheet that contains this rule
        /// </summary>
        public CSSStyleSheet ParentStyleSheet;

        /// <summary>
        /// One of the Type constants indicating the type of CSS rule.
        /// </summary>
        public readonly CSSRuleType Type;
    }
}