namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLTableCaptionElement interface special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating table caption elements.
    /// </summary>
    [External]
    [Name("HTMLTableCaptionElement")]
    public sealed class HTMLTableCaptionElement : HTMLElement<HTMLTableCaptionElement>
    {
        [Template("document.createElement(\"caption\")")]
        public extern HTMLTableCaptionElement();
    }
}