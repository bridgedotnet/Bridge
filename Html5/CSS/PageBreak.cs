namespace Bridge.Html5
{
    /// <summary>
    /// The page-break-after CSS property adjusts page breaks after/before the current element.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum PageBreak
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// Initial value. Automatic page breaks (neither forced nor forbidden).
        /// </summary>
        Auto,

        /// <summary>
        /// Always force page breaks after the element.
        /// </summary>
        Always,

        /// <summary>
        /// Avoid page breaks after the element.
        /// </summary>
        Avoid,

        /// <summary>
        /// Force page breaks after the element so that the next page is formatted as a left page.
        /// </summary>
        Left,

        /// <summary>
        /// Force page breaks after the element so that the next page is formatted as a right page.
        /// </summary>
        Right
    }
}
