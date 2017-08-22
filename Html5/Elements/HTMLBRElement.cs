namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLBRElement interface represents a HTML line break element.
    /// </summary>
    [External]
    [Name("HTMLBRElement")]
    public sealed class HTMLBRElement : HTMLElement<HTMLBRElement>
    {
        [Template("document.createElement(\"br\")")]
        public extern HTMLBRElement();

        /// <summary>
        /// Indicates flow of text around floating objects.
        /// </summary>
        public string Clear;
    }
}