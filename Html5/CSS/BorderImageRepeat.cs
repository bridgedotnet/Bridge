namespace Bridge.Html5
{
    /// <summary>
    /// The border-image-repeat CSS property defines how the middle part of a border image is handled so that it can match the size of the border. It has a one-value syntax which describes the behavior of all the sides, and a two-value syntax that sets a different value for the horizontal and vertical behavior.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum BorderImageRepeat
    {
        /// <summary>
        /// Keyword indicating that the image must be stretched to fill the gap between the two borders.
        /// </summary>
        Stretch,

        /// <summary>
        /// Keyword indicating that the image must be repeated until it fills the gap between the two borders.
        /// </summary>
        Repeat,

        /// <summary>
        /// Keyword indicating that the image must be repeated until it fills the gap between the two borders. If the image doesn't fit after being repeated an integral number of times, the image is rescaled to fit.
        /// </summary>
        Round,

        /// <summary>
        /// Keyword indicating that all four values are inherited from their parents' calculated element value.
        /// </summary>
        Inherit
    }
}
