using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLTableColElement interface provides special properties (beyond the HTMLElement interface it also has available to it inheritance) for manipulating single or grouped table column elements.
    /// The HTML element implementing this interface: &lt;col&gt; and &lt;colgroup&gt;.
    /// </summary>
    [External]
    [Name("HTMLTableColElement")]
    public sealed class HTMLTableColElement : HTMLElement<HTMLTableColElement>
    {
        [Template("document.createElement(\"col\")")]
        public extern HTMLTableColElement();

        [Template("document.createElement({0})")]
        public extern HTMLTableColElement(TableColumnType type);

        /// <summary>
        /// Reflects the span HTML attribute, indicating the number of columns to apply this object's attributes to. Must be a positive integer.
        /// </summary>
        public int Span;
    }

    /// <summary>
    /// Specifies the type of a table column. It can be a single &lt;col&gt; or a group &lt;colgroup&gt; column.
    /// </summary>
    [External]
    [Enum(Emit.StringName)]
    [Name("String")]
    public enum TableColumnType
    {
        /// <summary>
        /// &lt;col&gt;&lt;/col&gt;
        /// </summary>
        [Name("col")]
        Single,

        /// <summary>
        /// &lt;colgroup&gt;&lt;/colgroup&gt;
        /// </summary>
        [Name("colgroup")]
        Group
    }
}