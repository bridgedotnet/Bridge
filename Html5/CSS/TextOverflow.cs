namespace Bridge.Html5
{
    /// <summary>
    /// The text-overflow CSS property determines how overflowed content that is not displayed is signaled to the users. It can be clipped, or display an ellipsis ('…', U+2026 HORIZONTAL ELLIPSIS) or a Web author-defined string.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum TextOverflow
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// This keyword value indicates to truncate the text at the limit of the content area, therefore the truncation can happen in the middle of a character. To truncate at the transition between two characters, the empty string value ('') must be used. The value clip is the default for this property.
        /// </summary>
        Clip,

        /// <summary>
        /// This keyword value indicates to display an ellipsis ('…', U+2026 HORIZONTAL ELLIPSIS) to represent clipped text. The ellipsis is displayed inside the content area, decreasing the amount of text displayed. If there is not enough space to display the ellipsis, it is clipped.
        /// </summary>
        Ellipsis
    }
}
