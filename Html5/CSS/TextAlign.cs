namespace Bridge.Html5
{
    /// <summary>
    /// The text-align CSS property describes how inline content like text is aligned in its parent block element. text-align does not control the alignment of block elements itself, only their inline content.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum TextAlign
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// The same as left if direction is left-to-right and right if direction is right-to-left.
        /// </summary>
        Start,

        /// <summary>
        /// The same as right if direction is left-to-right and left if direction is right-to-left.
        /// </summary>
        End,

        /// <summary>
        /// The inline contents are aligned to the left edge of the line box.
        /// </summary>
        Left,

        /// <summary>
        /// The inline contents are aligned to the right edge of the line box.
        /// </summary>
        Right,

        /// <summary>
        /// The inline contents are centered within the line box.
        /// </summary>
        Center,

        /// <summary>
        /// The text is justified. Text should line up their left and right edges to the left and right content edges of the paragraph.
        /// </summary>
        Justify,

        /// <summary>
        /// Similar to inherit with the difference that the value start and end are calculated according the parent's direction and are replaced by the adequate left or right value.
        /// </summary>
        [Name("match-parent")]
        MatchParent,

        [Name("start end")]
        StartEnd
    }
}
