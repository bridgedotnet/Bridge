namespace Bridge.Html5
{
    /// <summary>
    /// The vertical-align CSS property specifies the vertical alignment of an inline or table-cell box.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum VerticalAlign
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// Aligns the baseline of the element with the baseline of its parent. The baseline of some replaced elements, like textarea is not specified by the HTML specification, meaning that their behavior with this keyword may change from one browser to the other.
        /// </summary>
        Baseline,

        /// <summary>
        /// Aligns the baseline of the element with the subscript-baseline of its parent.
        /// </summary>
        Sub,

        /// <summary>
        /// Aligns the baseline of the element with the superscript-baseline of its parent.
        /// </summary>
        Super,

        /// <summary>
        /// Aligns the top of the element with the top of the parent element's font.
        /// </summary>
        [Name("text-top")]
        TextTop,

        /// <summary>
        /// Aligns the bottom of the element with the bottom of the parent element's font.
        /// </summary>
        [Name("text-bottom")]
        TextBottom,

        /// <summary>
        /// Aligns the middle of the element with the middle of lowercase letters in the parent.
        /// </summary>
        Middle,

        /// <summary>
        /// Align the top of the element and its descendants with the top of the entire line.
        /// </summary>
        Top,

        /// <summary>
        /// Align the bottom of the element and its descendants with the bottom of the entire line.
        /// </summary>
        Bottom
    }
}
