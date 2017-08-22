namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLMetaElement interface contains descriptive metadata about a document. Itt inherits all of the properties and methods described in the HTMLElement interface.
    /// </summary>
    [External]
    [Name("HTMLMetaElement")]
    public sealed class HTMLMetaElement : HTMLElement<HTMLMetaElement>
    {
        [Template("document.createElement(\"meta\")")]
        public extern HTMLMetaElement();

        /// <summary>
        /// Gets or sets the value of meta-data property.
        /// </summary>
        public string Content;

        /// <summary>
        /// Gets or sets the name of an HTTP response header to define for a document.
        /// </summary>
        public string HttpEquiv;

        /// <summary>
        /// Gets or sets the name of a meta-data property to define for a document.
        /// </summary>
        public string Name;
    }
}