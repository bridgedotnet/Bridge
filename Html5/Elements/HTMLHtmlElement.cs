namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLHtmlElement interface serves as the root node for a given HTML document.  This object inherits the properties and methods described in the HTMLElement interface.
    /// You can retrieve the HTMLHtmlElement object for a given document by reading the value of the document.documentElement property.
    /// </summary>
    [External]
    [Name("HTMLHtmlElement")]
    public sealed class HTMLHtmlElement : HTMLElement<HTMLHtmlElement>
    {
        [Template("document.createElement(\"html\")")]
        public extern HTMLHtmlElement();
    }
}