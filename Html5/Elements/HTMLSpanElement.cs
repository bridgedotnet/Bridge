namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLSpanElement interface represents a &lt;span&gt; element and derives from the HTMLElement interface, but without implementing any additional properties or methods.
    /// </summary>
    [External]
    [Name("HTMLSpanElement")]
    public sealed class HTMLSpanElement : HTMLElement<HTMLSpanElement>
    {
        [Template("document.createElement(\"span\")")]
        public extern HTMLSpanElement();
    }
}