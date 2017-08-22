using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLTableSectionElement interface provides special properties and methods (beyond the HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of sections, that is headers, footers and bodies, in an HTML table.
    /// The HTML elements implementing this interface: &lt;tfoot&gt;, &lt;thead&gt;, and &lt;tbody&gt;.
    /// </summary>
    [External]
    [Name("HTMLTableSectionElement")]
    public sealed class HTMLTableSectionElement : HTMLElement<HTMLTableSectionElement>
    {
        [Template("document.createElement(\"tbody\")")]
        public extern HTMLTableSectionElement();

        [Template("document.createElement({0})")]
        public extern HTMLTableSectionElement(TableSectionType type);

        /// <summary>
        /// Returns a live HTMLCollection containing the rows in the section. The HTMLCollection is live and is automatically updated when rows are added or removed.
        /// </summary>
        public readonly HTMLCollection<HTMLTableRowElement> Rows;

        /// <summary>
        /// Removes the cell at the given position in the section. If the given position is greater (or equal as it starts at zero) than the amount of rows in the section, or is smaller than 0, it raises a DOMException with the IndexSizeError value.
        /// </summary>
        /// <param name="index">The position of the row to delete</param>
        public extern void DeleteRow(int index);

        /// <summary>
        /// Inserts a new row just before the given position in the section.
        /// If the given position is -1, it appends the row to the end of section.
        /// If the given position is greater (or equal as it starts at zero) than the amount of rows in the section, or is smaller than -1, it raises a DOMException with the IndexSizeError value.
        /// </summary>
        /// <param name="index">The possition of a new row to insert</param>
        /// <returns>Returns a TableRowElement object that represents a new row added to a table element.</returns>
        public extern HTMLTableRowElement InsertRow(int index = -1); // update docs
    }

    /// <summary>
    /// Specifies the type of a table section. It can be a footer &lt;tfoot&gt;, a header &lt;thead&gt; or a body &lt;tbody&gt; section.
    /// </summary>
    [External]
    [Enum(Emit.StringName)]
    [Name("String")]
    public enum TableSectionType
    {
        /// <summary>
        /// &lt;tbody&gt;&lt;/tbody&gt;
        /// </summary>
        [Name("tbody")]
        Body,

        /// <summary>
        /// &lt;tfoot&gt;&lt;/tfoot&gt;
        /// </summary>
        [Name("tfoot")]
        Footer,

        /// <summary>
        /// &lt;thead&gt;&lt;/thead&gt;
        /// </summary>
        [Name("thead")]
        Header
    }
}