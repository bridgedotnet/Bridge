namespace Bridge.Html5
{
    /// <summary>
    /// Automatically places grid elements into the grid layout if an explicit location is not designated. Designates the direction of the the flow and whether rows or columns must be added to accommodate the element.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum GridAutoFlow
    {
        Inherit,

        /// <summary>
        /// Causes auto-placed grid items to be placed according to the grid-auto-position property, rather than using the auto-placement algorithm.
        /// </summary>
        None,

        /// <summary>
        /// Fills each row in turn, adding new rows as necessary.
        /// </summary>
        Rows,

        /// <summary>
        /// Fills each column in turn, adding new columns as necessary.
        /// </summary>
        Columns,

        /// <summary>
        /// Uses a "dense" packing algorithm approach to fill in holes in the grid as smaller items appear.
        /// </summary>
        Dense,

        /// <summary>
        /// Permanently skips cells that are not filled with the current item. The default auto-pacement algorithm packing approach.
        /// </summary>
        Sparse
    }
}
