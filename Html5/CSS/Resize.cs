namespace Bridge.Html5
{
    /// <summary>
    /// The resize CSS property lets you control the resizability of an element.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum Resize
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// The element offers no user-controllable method for resizing the element.
        /// </summary>
        None,

        /// <summary>
        /// The element displays a mechanism for allowing the user to resize the element, which may be resized both horizontally and vertically.
        /// </summary>
        Both,

        /// <summary>
        /// The element displays a mechanism for allowing the user to resize the element, which may only be resized horizontally.
        /// </summary>
        Horizontal,

        /// <summary>
        /// The element displays a mechanism for allowing the user to resize the element, which may only be resized vertically.
        /// </summary>
        Vertical
    }
}
