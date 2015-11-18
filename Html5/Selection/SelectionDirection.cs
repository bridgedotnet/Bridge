namespace Bridge.Html5
{
    /// <summary>
    /// The direction in which to adjust the current selection.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum SelectionDirection
    {
        /// <summary>
        ///
        /// </summary>
        Forward,

        /// <summary>
        ///
        /// </summary>
        Backward,

        /// <summary>
        ///
        /// </summary>
        Left,

        /// <summary>
        ///
        /// </summary>
        Right
    }
}
