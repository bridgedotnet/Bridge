namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLTableCellElement interface provides special properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of table cells, either header or data cells, in an HTML document.
    /// The HTML elements implementing this interface: &lt;th&gt; and &lt;td&gt;.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type of all TableCellElement's events</typeparam>
    [External]
    [Namespace(false)]
    [IgnoreGeneric]
    public abstract class HTMLTableCellElement<TCurrentTarget> : HTMLElement<TCurrentTarget> where TCurrentTarget : HTMLElement<TCurrentTarget>
    {
        /// <summary>
        /// Is an unsigned long that represents the number of columns this cell must span. It reflects the colspan attribute.
        /// </summary>
        public uint ColSpan;

        /// <summary>
        /// Is an unsigned long that represents the number of rows this cell must span. It reflects the rowspan attribute.
        /// </summary>
        public uint RowSpan;

        /// <summary>
        /// Is a DOMSettableTokenList describing a list of id of &lt;th&gt; elements that represents headers associated with the cell. It reflects the headers attribute.
        /// </summary>
        public readonly DOMSettableTokenList Headers;

        /// <summary>
        /// Is a long representing the cell position in the cells collection of the &lt;tr&gt; it belongs to. If the cell doesn't belong to a &lt;tr&gt;, it returns -1.
        /// </summary>
        public int CellIndex;
    }

    /// <summary>
    /// The non-generic TableCellElement class. Events' CurrentTarget has the TableCellElement type.
    /// </summary>
    [External]
    [Name("HTMLTableCellElement")]
    public abstract class TableCellElement : HTMLElement<TableCellElement>
    {
    }
}