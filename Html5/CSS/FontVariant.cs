namespace Bridge.Html5
{
    /// <summary>
    /// The font-variant CSS property selects a normal, or small-caps face from a font family. Setting font-variant is also possible by using the font shorthand.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum FontVariant
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
        /// Specifies a font that is labeled as a small-caps font. If a small-caps font is not available, Mozilla (Firefox) and other browsers will simulate a small-caps font, i.e. by taking a normal font and replacing the lowercase letters by scaled uppercase characters.
        /// </summary>
        [Name("small-caps")]
        SmallCaps
    }
}
