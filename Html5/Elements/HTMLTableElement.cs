namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLTableElement interface provides special properties and methods (beyond the regular HTMLElement object interface it also has available to it by inheritance) for manipulating the layout and presentation of tables in an HTML document.
    /// </summary>
    [External]
    [Name("HTMLTableElement")]
    public sealed class HTMLTableElement : HTMLElement<HTMLTableElement>
    {
        [Template("document.createElement(\"table\")")]
        public extern HTMLTableElement();

        /// <summary>
        /// Is an HTMLTableCaptionElement representing the first &lt;caption&gt; that is a child of the element, or null if none is found. When set, if the object doesn't represent a &lt;caption&gt;, a DOMException with the HierarchyRequestError name is thrown. If a correct object is given, it is inserted in the tree as the first child of this element and the first &lt;caption&gt; that is a child of this element is removed from the tree, if any.
        /// </summary>
        public HTMLTableCaptionElement Caption;

        /// <summary>
        /// Is an HTMLTableSectionElement representing the first &lt;thead&gt; that is a child of the element, or null if none is found. When set, if the object doesn't represent a &lt;thead&gt;, a DOMException with the HierarchyRequestError name is thrown. If a correct object is given, it is inserted in the tree immediately before the first element that is neither a &lt;caption&gt;, nor a &lt;colgroup&gt;, or as the last child if there is no such element, and the first &lt;thead&gt; that is a child of this element is removed from the tree, if any.
        /// </summary>
        public HTMLTableSectionElement THead;

        /// <summary>
        /// Is an HTMLTableSectionElement representing the first &lt;tfoot&gt; that is a child of the element, or null if none is found. When set, if the object doesn't represent a &lt;tfoot&gt;, a DOMException with the HierarchyRequestError name is thrown. If a correct object is given, it is inserted in the tree immediately before the first element that is neither a &lt;caption&gt;, a &lt;colgroup&gt;, nor a &lt;thead&gt;, or as the last child if there is no such element, and the first &lt;tfoot&gt; that is a child of this element is removed from the tree, if any.
        /// </summary>
        public HTMLTableSectionElement TFoot;

        /// <summary>
        /// Returns a live HTMLCollection containing all the rows of the element, that is all &lt;tr&gt; that are a child of the element, or a child or one of its &lt;thead&gt;, &lt;tbody&gt; and &lt;tfoot&gt; children. The rows members of a &lt;thead&gt; appear first, in tree order, and those members of a &lt;tbody&gt; last, also in tree order. The HTMLCollection is live and is automatically updated when the HTMLTableElement changes.
        /// </summary>
        public readonly HTMLCollection<HTMLTableRowElement> Rows;

        /// <summary>
        /// Returns a live HTMLCollection containing all the &lt;tbody&gt; of the element. The HTMLCollection is live and is automatically updated when the HTMLTableElement changes.
        /// </summary>
        public readonly HTMLCollection<HTMLTableSectionElement> TBodies;

        /// <summary>
        /// Returns an HTMLElement representing the first &lt;thead&gt; that is a child of the element. If none is found, a new one is created and inserted in the tree immediately before the first element that is neither a &lt;caption&gt;, nor a &lt;colgroup&gt;, or as the last child if there is no such element.
        /// </summary>
        public extern HTMLTableSectionElement CreateTHead();

        /// <summary>
        /// Removes the first &lt;thead&gt; that is a child of the element.
        /// </summary>
        public extern void DeleteTHead();

        /// <summary>
        /// Returns an HTMLElement representing the first &lt;tfoot&gt; that is a child of the element. If none is found, a new one is created and inserted in the tree immediately before the first element that is neither a &lt;caption&gt;, a &lt;colgroup&gt;, nor a &lt;thead&gt;, or as the last child if there is no such element.
        /// </summary>
        public extern HTMLTableSectionElement CreateTFoot();

        /// <summary>
        /// Removes the first &lt;tfoot&gt; that is a child of the element.
        /// </summary>
        public extern void DeleteTFoot();

        /// <summary>
        /// Returns an HTMLElement representing the first &lt;caption&gt; that is a child of the element. If none is found, a new one is created and inserted in the tree as the first child of the &lt;table&gt; element.
        /// </summary>
        public extern HTMLTableCaptionElement CreateCaption();

        /// <summary>
        /// Removes the first &lt;caption&gt; that is a child of the element.
        /// </summary>
        public extern void DeleteCaption();

        /// <summary>
        /// Inserts a new row in the table and returns a reference to the row.
        /// If index is -1 or equal to the number of rows, the row is appended as the last row. If index is greater than the number of rows, an IndexSizeError exception will result.
        /// If index is omitted it defaults to -1.
        /// If a table has multiple tbody elements, by default, the new row is inserted into the last tbody.
        /// </summary>
        /// <param name="index">The row index of the new row. Defaults to -1.</param>
        /// <returns>Returns the TableRowElement representing the new row of the table.</returns>
        public extern HTMLTableRowElement InsertRow(int index = -1);

        /// <summary>
        /// Removes the row corresponding to the index given in parameter. If the index value is -1 the last row is removed; if it smaller than -1 or greater than the amount of rows in the collection, a DOMException with the value IndexSizeError is raised.
        /// </summary>
        public extern void DeleteRow(int index);
    }
}