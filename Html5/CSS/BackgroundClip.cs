namespace Bridge.Html5
{
    /// <summary>
    /// The background-clip CSS property specifies whether an element's background, either the color or image, extends underneath its border.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum BackgroundClip
    {
        /// <summary>
        ///
        /// </summary>
        None,

        /// <summary>
        /// The background extends to the outside edge of the border (but underneath the border in z-ordering).
        /// </summary>
        [Name("border-box")]
        BorderBox,

        /// <summary>
        /// No background is drawn below the border (background extends to the outside edge of the padding).
        /// </summary>
        [Name("padding-box")]
        PaddingBox,

        /// <summary>
        /// The background is painted within (clipped to) the content box.
        /// </summary>
        [Name("content-box")]
        ContentBox,

        /// <summary>
        ///
        /// </summary>
        Inherit
    }
}
