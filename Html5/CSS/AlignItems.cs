namespace Bridge.Html5
{
    /// <summary>
    /// The CSS align-items property aligns flex items of the current flex line the same way as justify-content but in the perpendicular direction.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum AlignItems
    {
        /// <summary>
        ///
        /// </summary>
        None,

        /// <summary>
        /// The cross-start margin edge of the flex item is flushed with the cross-start edge of the line.
        /// </summary>
        [Name("flex-start")]
        FlexStart,

        /// <summary>
        /// The cross-end margin edge of the flex item is flushed with the cross-end edge of the line.
        /// </summary>
        [Name("flex-end")]
        FlexEnd,

        /// <summary>
        /// The flex item's margin box is centered within the line on the cross-axis. If the cross-size of the item is larger than the flex container, it will overflow equally in both directions.
        /// </summary>
        Center,

        /// <summary>
        /// All flex items are aligned such that their baselines align. The item with the largest distance between its cross-start margin edge and its baseline is flushed with the cross-start edge of the line.
        /// </summary>
        Baseline,

        /// <summary>
        /// Flex items are stretched such as the cross-size of the item's margin box is the same as the line while respecting width and height constraints.
        /// </summary>
        Stretch,

        /// <summary>
        ///
        /// </summary>
        Inherit
    }
}
