namespace Bridge.Html5
{
    /// <summary>
    /// The CSS justify-content property defines how a browser distributes available space between and around elements when aligning flex items in the main-axis of the current line.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum JustifyContent
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// The flex items are packed starting from the main-start. Margins of the first flex item is flushed with the main-start edge of the line and each following flex item is flushed with the preceding.
        /// </summary>
        [Name("flex-start")]
        FlexStart,

        /// <summary>
        /// The flex items are packed starting from the main-end. The margin edge of the last flex item is flushed with the main-end edge of the line and each preceding flex item is flushed with the following.
        /// </summary>
        [Name("flex-end")]
        FlexEnd,

        /// <summary>
        /// The flex items are packed toward the center of the line. The flex items are flushed with each other and aligned in the center of the line. Space between the main-start edge of the line and first item and between main-end and the last item of the line is the same.
        /// </summary>
        Center,

        /// <summary>
        /// Flex items are evenly distributed along the line. The spacing is done such as the space between two adjacent items is the same. Main-start edge and main-end edge are flushed with respectively first and last flex item edges.
        /// </summary>
        [Name("space-between")]
        SpaceBetween,

        /// <summary>
        /// Flex items are evenly distributed so that the space between two adjacent items is the same. The empty space before the first and after the last items equals half of the space between two adjacent items.
        /// </summary>
        [Name("space-around")]
        SpaceAround
    }
}
