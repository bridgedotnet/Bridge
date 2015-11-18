namespace Bridge.Html5
{
    /// <summary>
    /// The border-collapse CSS property selects a table's border model. This has a big influence on the look and style of the table cells.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum BorderCollapse
    {
        /// <summary>
        ///
        /// </summary>
        None,

        /// <summary>
        /// Is a keyword requesting the use of the separated-border table rendering model. It is the default value.
        /// </summary>
        Separate,

        /// <summary>
        /// Is a keyword requesting the use of the collapsed-border table rendering model.
        /// </summary>
        Collapse,

        /// <summary>
        ///
        /// </summary>
        Inherit
    }
}
