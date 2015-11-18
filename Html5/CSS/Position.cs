namespace Bridge.Html5
{
    /// <summary>
    /// The position CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum Position
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// This keyword let the element use the normal behavior, that is it is laid out in its current position in the flow.  The top, right, bottom, and left properties do not apply.
        /// </summary>
        Static,

        /// <summary>
        /// This keyword lays out all elements as though the element were not positioned, and then adjust the element's position, without changing layout (and thus leaving a gap for the element where it would have been had it not been positioned). The effect of position:relative on table-*-group, table-row, table-column, table-cell, and table-caption elements is undefined.
        /// </summary>
        Relative,

        /// <summary>
        /// Do not leave space for the element. Instead, position it at a specified position relative to its closest positioned ancestor or to the containing block. Absolutely positioned boxes can have margins, they do not collapse with any other margins.
        /// </summary>
        Absolute,

        /// <summary>
        /// Do not leave space for the element. Instead, position it at a specified position relative to the screen's viewport and doesn't move when scrolled. When printing, position it at that fixed position on every page.
        /// </summary>
        Fixed,

        /// <summary>
        /// The box position is calculated according to the normal flow (this is called the position in normal flow). Then the box is offset relative to its flow root and containing block and in all cases, including table elements, does not affect the position of any following boxes. When a box B is stickily positioned, the position of the following box is calculated as though B were not offset. The effect of ‘position: sticky’ on table elements is the same as for ‘position: relative’.
        /// </summary>
        Sticky
    }
}
