using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLTableHeaderCellElement interface provides special properties and methods (beyond the regular HTMLTableCellElement and HTMLElement interfaces it also has available to it by inheritance) for manipulating the layout and presentation of table header cells in an HTML document.
    /// </summary>
    [External]
    [Name("HTMLTableHeaderCellElement")]
    public sealed class HTMLTableHeaderCellElement : HTMLTableCellElement<HTMLTableHeaderCellElement>
    {
        [Template("document.createElement(\"th\")")]
        public extern HTMLTableHeaderCellElement();

        /// <summary>
        /// Is a DOMString containing a name used to refer to this cell in other context. It reflects the abbr attribute.
        /// </summary>
        public string Abbr;

        /// <summary>
        /// Is a DOMString representing an enumerated value indicating which cells the header cell applies to.
        /// It reflects the scope attribute and has one of the following values: "row", "col", "colgroup", or "rowgroup". If the attribute is in the auto state, or if an invalid value is set for the attribute, scope will be returns the empty string, "".
        /// </summary>
        public TableHeaderCellScope Scope;
    }

    /// <summary>
    /// The scope attribute specifies whether a header cell is a header for a column, row, or group of columns or rows.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum TableHeaderCellScope
    {
        /// <summary>
        /// Specifies that the cell is a header for a column
        /// </summary>
        Col,

        /// <summary>
        /// Specifies that the cell is a header for a row
        /// </summary>
        Row,

        /// <summary>
        /// Specifies that the cell is a header for a group of columns
        /// </summary>
        ColGroup,

        /// <summary>
        /// Specifies that the cell is a header for a group of rows
        /// </summary>
        RowGroup
    }
}