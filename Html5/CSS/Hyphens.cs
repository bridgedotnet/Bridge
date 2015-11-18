namespace Bridge.Html5
{
    /// <summary>
    /// The hyphens CSS property tells the browser how to go about splitting words to improve the layout of text when line-wrapping.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum Hyphens
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// Words are not broken at line breaks, even if characters inside the words suggest line break points. Lines will only wrap at whitespace.
        /// </summary>
        None,

        /// <summary>
        /// Words are broken for line-wrapping only where characters inside the word suggest line break opportunities. See Suggesting line break opportunities for details.
        /// </summary>
        Manual,

        /// <summary>
        /// The browser is free to automatically break words at appropriate hyphenation points, following whatever rules it chooses to use. Suggested line break opportunities, as covered in Suggesting line break opportunities, should be preferred over automatically selecting break points whenever possible.
        /// </summary>
        Auto
    }
}
