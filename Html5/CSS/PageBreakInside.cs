namespace Bridge.Html5
{
    /// <summary>
    /// The page-break-inside CSS property adjusts page breaks inside the current element.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum PageBreakInside
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
        /// Avoid page breaks after the element.
        /// </summary>
        Avoid
    }
}
