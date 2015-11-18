namespace Bridge.Html5
{
    /// <summary>
    /// The text-decoration-style CSS property defines the style of the lines specified by text-decoration-line. The style applies to all lines, there is no way to define different style for each of the line defined by text-decoration-line.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum TextDecorationStyle
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// Draws a single line
        /// </summary>
        Solid,

        /// <summary>
        /// Draws a double line
        /// </summary>
        Double,

        /// <summary>
        /// Draws a dotted line
        /// </summary>
        Dotted,

        /// <summary>
        /// Draws a dashed line
        /// </summary>
        Dashed,

        /// <summary>
        /// Draws a wavy line
        /// </summary>
        Wavy
    }
}
