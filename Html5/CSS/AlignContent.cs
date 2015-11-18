namespace Bridge.Html5
{
    /// <summary>
    /// The CSS align-content property aligns a flex container's lines within the flex container when there is extra space on the cross-axis. This property has no effect on single line flexible boxes.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum AlignContent
    {
        /// <summary>
        ///
        /// </summary>
        None,

        /// <summary>
        /// Lines are packed starting from the cross-start. Cross-start edge of the first line and cross-start edge of the flex container are flushed together. Each following line is flush with the preceding.
        /// </summary>
        [Name("flex-start")]
        FlexStart,

        /// <summary>
        /// Lines are packed starting from the cross-end. Cross-end of the last line and cross-end of the flex container are flushed together. Each preceding line is flushed with the following line.
        /// </summary>
        [Name("flex-end")]
        FlexEnd,

        /// <summary>
        /// Lines are packed toward the center of the flex container. The lines are flushed with each other and aligned in the center of the flex container. Space between the cross-start edge of the flex container and first line and between cross-end of the flex container and the last line is the same.
        /// </summary>
        Center,

        /// <summary>
        /// Lines are evenly distributed in the flex container. The spacing is done such as the space between two adjacent items is the same. Cross-start edge and cross-end edge of the flex container are flushed with respectively first and last line edges.
        /// </summary>
        [Name("space-between")]
        SpaceBetween,

        /// <summary>
        /// Lines are evenly distributed so that the space between two adjacent lines is the same. The empty space before the first and after the last lines equals half of the space between two adjacent lines.
        /// </summary>
        [Name("space-around")]
        SpaceAround,

        /// <summary>
        /// Lines stretch to use the remaining space. The free-space is split equally between all the lines.
        /// </summary>
        Stretch,

        /// <summary>
        ///
        /// </summary>
        Inherit
    }
}
