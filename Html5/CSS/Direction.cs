namespace Bridge.Html5
{
    /// <summary>
    /// Set the direction CSS property to match the direction of the text: rtl for Hebrew or Arabic text and ltr for other scripts. This is typically done as part of the document (e.g., using the dir attribute in HTML) rather than through direct use of CSS.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum Direction
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// The initial value of direction (that is, if not otherwise specified). Text and other elements go from left to right.
        /// </summary>
        Ltr,

        /// <summary>
        /// Text and other elements go from right to left
        /// </summary>
        Rtl
    }
}
