namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLLinkElement interface represents reference information for external resources and the relationship of those resources to a document and vice-versa. This object inherits all of the properties and methods of the HTMLElement interface.
    /// </summary>
    [External]
    [Name("HTMLLinkElement")]
    public sealed class HTMLLinkElement : HTMLElement<HTMLLinkElement>
    {
        [Template("document.createElement(\"link\")")]
        public extern HTMLLinkElement();

        /// <summary>
        /// Gets or sets whether the link is disabled; currently only used with style sheet links.
        /// </summary>
        public bool Disabled;

        /// <summary>
        /// Gets or sets the URI for the target resource.
        /// </summary>
        public string Href;

        /// <summary>
        /// Gets or sets the language code for the linked resource.
        /// </summary>
        [Name("hreflang")]
        public string HrefLang;

        /// <summary>
        /// Gets or sets a list of one or more media formats to which the resource applies.
        /// </summary>
        public string Media;

        /// <summary>
        /// Gets or sets the forward relationship of the linked resource from the document to the resource.
        /// </summary>
        public string Rel;

        /// <summary>
        /// Is a DOMTokenList that reflects the rel HTML attribute, as a list of tokens.
        /// </summary>
        public readonly DOMTokenList RelList;

        /// <summary>
        /// Is a DOMSettableTokenList that reflects the sizes HTML attribute, as a list of tokens.
        /// </summary>
        public readonly DOMSettableTokenList Sizes;

        /// <summary>
        /// Returns the StyleSheet object associated with the given element, or null if there is none.
        /// </summary>
        public readonly StyleSheet Sheet;

        /// <summary>
        /// Gets or sets the MIME type of the linked resource.
        /// </summary>
        public string Type;
    }
}