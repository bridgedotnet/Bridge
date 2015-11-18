namespace Bridge.Html5
{
    /// <summary>
    /// Allows to specify what happens to an element when it is broken due to a page break or column break, or for inline elements, a line break.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum BoxDecorationBreak
    {
        /// <summary>
        ///
        /// </summary>
        None,

        /// <summary>
        /// This keyword specifies that the box will be "sliced" across it's many fragments (if any). In other words, the box fragments won't maintain the padding, border, box-shadow, border-radius, and border-image properties across each fragment. Also, any background or background-image is drawn once and each fragment shows a small piece of the background.
        /// </summary>
        Slice,

        /// <summary>
        /// The box-decoration-break (with a value of clone) allows you to maintain the padding, border, box-shadow, border-radius, and border-image properties within each fragment. It also allows any background to be drawn independently in each fragment of the element. A no-repeat background-image will be rendered once in each fragment of the element.
        /// </summary>
        Clone
    }
}
