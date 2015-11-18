namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLTableCaptionElement interface special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating table caption elements.
    /// </summary>
    [External]
    [Name("HTMLTableCaptionElement")]
    public class TableCaptionElement : Element<TableCaptionElement>
    {
        [Template("document.createElement('caption')")]
        public TableCaptionElement()
        {
        }
    }
}
