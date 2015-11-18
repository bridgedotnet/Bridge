namespace Bridge.Html5
{
    /// <summary>
    /// The list-style-position CSS property specifies the position of the marker box in the principal block box. It is often more convenient to use the shortcut list-style.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum ListStylePosition
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// The marker box is outside the principal block box.
        /// </summary>
        Outside,

        /// <summary>
        /// The marker box is the first inline box in the principal block box, after which the element's content flows.
        /// </summary>
        Inside
    }
}
