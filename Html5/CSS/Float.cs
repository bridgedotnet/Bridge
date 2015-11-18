namespace Bridge.Html5
{
    /// <summary>
    /// The float CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it. A floating element is one where the computed value of float is not none.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum Float
    {
        /// <summary>
        /// Is a keyword indicating that the element must not float.
        /// </summary>
        None,

        /// <summary>
        /// Is a keyword indicating that the element must float on the left side of its containing block.
        /// </summary>
        Left,

        /// <summary>
        /// Is a keyword indicating that the element must float on the right side of its containing block.
        /// </summary>
        Right
    }
}
