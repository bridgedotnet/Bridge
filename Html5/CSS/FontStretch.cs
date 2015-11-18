namespace Bridge.Html5
{
    /// <summary>
    /// The font-stretch CSS property selects a normal, condensed, or expanded face from a font.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum FontStretch
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// Specifies a normal font face.
        /// </summary>
        Normal,

        /// <summary>
        /// Specifies a font face more condensed than normal, with ultra-condensed as the most condensed.
        /// </summary>
        [Name("semi-condensed")]
        SemiCondensed,

        /// <summary>
        /// Specifies a font face more condensed than normal, with ultra-condensed as the most condensed.
        /// </summary>
        Condensed,

        /// <summary>
        /// Specifies a font face more condensed than normal, with ultra-condensed as the most condensed.
        /// </summary>
        [Name("extra-condensed")]
        ExtraCondensed,

        /// <summary>
        /// Specifies a font face more condensed than normal, with ultra-condensed as the most condensed.
        /// </summary>
        [Name("ultra-condensed")]
        UltraCondensed,

        /// <summary>
        /// Specifies a font face more expanded than normal, with ultra-expanded as the most expanded.
        /// </summary>
        [Name("semi-expanded")]
        SemiExpanded,

        /// <summary>
        /// Specifies a font face more expanded than normal, with ultra-expanded as the most expanded.
        /// </summary>
        Expanded,

        /// <summary>
        /// Specifies a font face more expanded than normal, with ultra-expanded as the most expanded.
        /// </summary>
        [Name("extra-expanded")]
        ExtraExpanded,

        /// <summary>
        /// Specifies a font face more expanded than normal, with ultra-expanded as the most expanded.
        /// </summary>
        [Name("ultra-expanded")]
        UltraExpanded
    }
}
