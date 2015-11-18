namespace Bridge.Html5
{
    /// <summary>
    /// The display CSS property specifies the type of rendering box used for an element. In HTML, default display property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is inline.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum Display
    {
        /// <summary>
        /// Turns off the display of an element (it has no effect on layout); all descendant elements also have their display turned off. The document is rendered as though the element did not exist.
        /// To render an element box's dimensions, yet have its contents be invisible, see the visibility property.
        /// </summary>
        None,

        /// <summary>
        /// The element generates one or more inline element boxes.
        /// </summary>
        Inline,

        /// <summary>
        /// The element generates a block element box.
        /// </summary>
        Block,

        /// <summary>
        /// The element generates a block box for the content and a separate list-item inline box.
        /// </summary>
        [Name("list-item")]
        ListItem,

        /// <summary>
        /// The element generates a block element box that will be flowed with surrounding content as if it were a single inline box (behaving much like a replaced element would)
        /// </summary>
        [Name("inline-block")]
        InlineBlock,

        /// <summary>
        /// The inline-table value does not have a direct mapping in HTML. It behaves like a &lt;table&gt; HTML element, but as an inline box, rather than a block-level box. Inside the table box is a block-level context.
        /// </summary>
        [Name("inline-table")]
        InlineTable,

        /// <summary>
        /// Behaves like the &lt;table&gt; HTML element. It defines a block-level box.
        /// </summary>
        Table,

        /// <summary>
        /// Behaves like the &lt;caption&gt; HTML element.
        /// </summary>
        [Name("table-caption")]
        TableCaption,

        /// <summary>
        /// Behaves like the &lt;td&gt; HTML element
        /// </summary>
        [Name("table-cell")]
        TableCell,

        /// <summary>
        /// These elements behave like the corresponding &lt;col&gt; HTML elements.
        /// </summary>
        [Name("table-column")]
        TableColumn,

        /// <summary>
        /// These elements behave like the corresponding &lt;colgroup&gt; HTML elements.
        /// </summary>
        [Name("table-column-group")]
        TableColumnGroup,

        /// <summary>
        /// These elements behave like the corresponding &lt;tfoot&gt; HTML elements
        /// </summary>
        [Name("table-footer-group")]
        TableFooterGroup,

        /// <summary>
        /// These elements behave like the corresponding &lt;thead&gt; HTML elements
        /// </summary>
        [Name("table-header-group")]
        TableHeaderGroup,

        /// <summary>
        /// Behaves like the &lt;tr&gt; HTML element
        /// </summary>
        [Name("table-row")]
        TableRow,

        /// <summary>
        /// These elements behave like the corresponding &lt;tbody&gt; HTML elements
        /// </summary>
        [Name("table-row-group")]
        TableRowGroup,

        /// <summary>
        /// The element behaves like a block element and lays out its content according to the flexbox model.
        /// </summary>
        Flex,

        /// <summary>
        /// The element behaves like an inline element and lays out its content according to the flexbox model.
        /// </summary>
        [Name("inline-flex")]
        InlineFlex,

        /// <summary>
        /// The element behaves like a block element and lay out its content according to the grid model.
        /// </summary>
        Grid,

        /// <summary>
        /// The element behaves like an inline element and lay out its content according to the grid model.
        /// </summary>
        [Name("inline-grid")]
        InlineGrid
    }
}
