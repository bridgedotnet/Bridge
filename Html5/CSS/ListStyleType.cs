namespace Bridge.Html5
{
    /// <summary>
    /// The list-style-type CSS property specifies appearance of a list item element. As it is the only one who defaults to display:list-item, this is usually a &lt;li&gt; element, but can be any element with this display value.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum ListStyleType
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        Disc,

        Circle,

        Square,

        Decimal,

        [Name("decimal-leading-zero")]
        DecimalLeadingZero,

        [Name("lower-roman")]
        LowerRoman,

        [Name("upper-roman")]
        UpperRoman,

        [Name("lower-greek")]
        LowerGreek,

        [Name("lower-latin")]
        LowerLatin,

        [Name("upper-latin")]
        UpperLatin,

        Armenian,

        Georgian,

        [Name("lower-alpha")]
        LowerAlpha,

        [Name("upper-alpha")]
        UpperAlpha,

        None
    }
}
