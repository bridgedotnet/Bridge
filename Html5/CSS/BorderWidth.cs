namespace Bridge.Html5
{
    /// <summary>
    /// The border style CSS property sets the width of the border of a box.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum BorderWidth
    {
        /// <summary>
        /// A thin border
        /// </summary>
        Thin,

        /// <summary>
        /// A medium border
        /// </summary>
        Medium,

        /// <summary>
        /// A thick border
        /// </summary>
        Thick,

        /// <summary>
        ///
        /// </summary>
        Inherit
    }
}
