namespace Bridge.Html5
{
    /// <summary>
    /// The CSS flex-wrap property specifies whether the children are forced into a single line or if the items can be flowed on multiple lines.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum FlexWrap
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// The flex items are laid out in a single line which may cause the flex container to overflow. The cross-start is either equivalent to start or before depending flex-direction value.
        /// </summary>
        NoWrap,

        /// <summary>
        /// The flex items break into multiple lines. The cross-start is either equivalent to start or before depending flex-direction value and the cross-end is the opposite of the specified cross-start.
        /// </summary>
        Wrap,

        /// <summary>
        /// Behaves the same as wrap but cross-start and cross-end are permuted.
        /// </summary>
        [Name("wrap-reverse")]
        WrapReverse
    }
}
