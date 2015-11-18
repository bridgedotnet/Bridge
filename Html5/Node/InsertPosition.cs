namespace Bridge.Html5
{
    /// <summary>
    /// The position relative to the element
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum InsertPosition
    {
        /// <summary>
        /// Before the element itself.
        /// </summary>
        BeforeBegin,

        /// <summary>
        /// Just inside the element, before its first child.
        /// </summary>
        AfterBegin,

        /// <summary>
        /// Just inside the element, after its last child.
        /// </summary>
        BeforeEnd,

        /// <summary>
        /// After the element itself.
        /// </summary>
        AfterEnd
    }
}
