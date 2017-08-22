namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLHeadElement interface contains the descriptive information, or metadata, for a document. This object inherits all of the properties and methods described in the HTMLElement interface.
    /// </summary>
    [External]
    [Name("HTMLHeadElement")]
    public sealed class HTMLHeadElement : HTMLElement<HTMLHeadElement>
    {
        [Template("document.createElement(\"head\")")]
        public extern HTMLHeadElement();
    }
}