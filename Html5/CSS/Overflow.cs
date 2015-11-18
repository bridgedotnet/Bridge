namespace Bridge.Html5
{
    /// <summary>
    /// The overflow CSS property specifies whether to clip content, render scroll bars or display overflow content of a block-level element.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum Overflow
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// Default value. Content is not clipped, it may be rendered outside the content box.
        /// </summary>
        Visible,

        /// <summary>
        /// The content is clipped and no scrollbars are provided.
        /// </summary>
        Hidden,

        /// <summary>
        /// The content is clipped and desktop browsers use scrollbars, whether or not any content is clipped. This avoids any problem with scrollbars appearing and disappearing in a dynamic environment. Printers may print overflowing content.
        /// </summary>
        Scroll,

        /// <summary>
        /// Depends on the user agent. Desktop browsers like Firefox provide scrollbars if content overflows.
        /// </summary>
        Auto
    }
}
