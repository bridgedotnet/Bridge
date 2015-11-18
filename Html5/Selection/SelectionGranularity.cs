namespace Bridge.Html5
{
    /// <summary>
    /// The distance to adjust the current selection or cursor position.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum SelectionGranularity
    {
        /// <summary>
        ///
        /// </summary>
        Character,

        /// <summary>
        ///
        /// </summary>
        Word,

        /// <summary>
        ///
        /// </summary>
        Sentence,

        /// <summary>
        ///
        /// </summary>
        Line,

        /// <summary>
        ///
        /// </summary>
        Paragraph,

        /// <summary>
        ///
        /// </summary>
        LineBoundary,

        /// <summary>
        ///
        /// </summary>
        SentenceBoundary,

        /// <summary>
        ///
        /// </summary>
        ParagraphBoundary,

        /// <summary>
        ///
        /// </summary>
        DocumentBoundary
    }
}
