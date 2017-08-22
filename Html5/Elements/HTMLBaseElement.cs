namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLBaseElement interface contains the base URI for a document. This object inherits all of the properties and methods as described in the HTMLElement interface.
    /// </summary>
    [External]
    [Name("HTMLBaseElement")]
    public sealed class HTMLBaseElement : HTMLElement<HTMLBaseElement>
    {
        [Template("document.createElement(\"base\")")]
        public extern HTMLBaseElement();

        /// <summary>
        /// Is a DOMString that reflects the href HTML attribute, containing a base URL for relative URLs in the document.
        /// </summary>
        public string Href;

        /// <summary>
        /// Is a DOMString that reflects the target HTML attribute, containing a default target browsing context or frame for elements that do not have a target reference specified.
        /// </summary>
        public string Target;
    }
}