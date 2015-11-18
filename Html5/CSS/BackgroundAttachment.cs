namespace Bridge.Html5
{
    /// <summary>
    /// If a background-image is specified, the background-attachment CSS property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum BackgroundAttachment
    {
        /// <summary>
        ///
        /// </summary>
        None,

        /// <summary>
        /// This keyword means that the background is fixed with regard to the element itself and does not scroll with its contents. (It is effectively attached to the element's border.)
        /// </summary>
        Scroll,

        /// <summary>
        /// This keyword means that the background is fixed with regard to the viewport. Even if an element has a scrolling mechanism, a ‘fixed’ background doesn't move with the element.
        /// </summary>
        Fixed,

        /// <summary>
        /// This keyword means that the background is fixed with regard to the element's contents: if the element has a scrolling mechanism, the background scrolls with the element's contents, and the background painting area and background positioning area are relative to the scrollable area of the element rather than to the border framing them.
        /// </summary>
        Local,

        /// <summary>
        ///
        /// </summary>
        Inherit
    }
}
