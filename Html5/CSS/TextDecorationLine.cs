namespace Bridge.Html5
{
    /// <summary>
    /// The text-decoration-line CSS property sets what kind of line decorations are added to an element.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum TextDecorationLine
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// Produces no text decoration.
        /// </summary>
        none,

        /// <summary>
        /// Each line of text is underlined.
        /// </summary>
        Underline,

        /// <summary>
        /// Each line of text has a line above it.
        /// </summary>
        Overline,

        /// <summary>
        /// Each line of text has a line through the middle.
        /// </summary>
        [Name("line-through")]
        LineThrough,

        /// <summary>
        /// The text blinks (alternates between visible and invisible). Conforming user agents may simply not blink the text. This value is deprecated in favor of Animations.
        /// </summary>
        Blink
    }
}
