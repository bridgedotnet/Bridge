namespace Bridge.Html5
{
    /// <summary>
    /// The text-rendering CSS property provides information to the rendering engine about what to optimize for when rendering text.
    /// </summary>
    [External]
    [Enum(Emit.StringName)]
    [Name("String")]
    public enum TextRendering
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// The browser makes educated guesses about when to optimize for speed, legibility, and geometric precision while drawing text. For differences in how this value is interpreted by the browser, see the compatibility table.
        /// </summary>
        Auto,

        /// <summary>
        /// The browser emphasizes rendering speed over legibility and geometric precision when drawing text. It disables kerning and ligatures.
        /// </summary>
        OptimizeSpeed,

        /// <summary>
        /// The browser emphasizes legibility over rendering speed and geometric precision. This enables kerning and optional ligatures.
        /// </summary>
        OptimizeLegibility,

        /// <summary>
        /// The browser emphasizes geometric precision over rendering speed and legibility. Certain aspects of fonts—such as kerning—don't scale linearly, so geometricPrecision can make text using those fonts look good.
        /// </summary>
        GeometricPrecision
    }
}
