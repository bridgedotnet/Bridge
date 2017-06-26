namespace Bridge.Html5
{
    /// <summary>
    /// The DOMImplementation interface represent an object providing methods which are not dependent on any particular document. Such an object is returned by the Document.implementation property.
    /// </summary>
    [External]
    [Name("DOMImplementation")]
    public partial class DOMImplementation
    {
        extern internal DOMImplementation();

        /// <summary>
        /// The DOMImplementation.createDocument() method creates and returns an XMLDocument.
        /// </summary>
        /// <param name="namespaceURI">Is a DOMString containing the namespace URI of the document to be created, or null if the document doesn't belong to one.</param>
        /// <param name="qualifiedName">Is a DOMString containing the qualified name, that is an optional prefix and colon plus the local root element name, of the document to be created.</param>
        /// <returns></returns>
        public virtual extern DocumentInstance CreateDocument(string namespaceURI, string qualifiedName);

        /// <summary>
        /// The DOMImplementation.createDocument() method creates and returns an XMLDocument.
        /// </summary>
        /// <param name="namespaceURI">Is a DOMString containing the namespace URI of the document to be created, or null if the document doesn't belong to one.</param>
        /// <param name="qualifiedName">Is a DOMString containing the qualified name, that is an optional prefix and colon plus the local root element name, of the document to be created.</param>
        /// <param name="documentType">Is the DocumentType of the document to be created. It defaults to null.</param>
        /// <returns></returns>
        public virtual extern DocumentInstance CreateDocument(string namespaceURI, string qualifiedName, DocumentType documentType);

        /// <summary>
        /// The DOMImplementation.createDocumentType() method returns a DocumentType object which can either be used with DOMImplementation.createDocument upon document creation or can be put into the document via methods like Node.insertBefore() or Node.replaceChild().
        /// </summary>
        /// <param name="qualifiedName">Is a DOMString containing the qualified name, like svg:svg.</param>
        /// <param name="publicId">Is a DOMString containing the PUBLIC identifier.</param>
        /// <param name="systemId">Is a DOMString containing the SYSTEM identifiers.</param>
        /// <returns></returns>
        public virtual extern DocumentType CreateDocumentType(string qualifiedName, string publicId, string systemId);

        /// <summary>
        /// The DOMImplementation.createHTMLDocument() method creates a new HTML Document.
        /// </summary>
        /// <returns></returns>
        public virtual extern DocumentInstance CreateHTMLDocument();

        /// <summary>
        /// The DOMImplementation.createHTMLDocument() method creates a new HTML Document.
        /// </summary>
        /// <param name="title">Is a DOMString containing the title to give the new HTML document.</param>
        /// <returns></returns>
        public virtual extern DocumentInstance CreateHTMLDocument(string title);

        /// <summary>
        /// The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
        /// The different implementation fairly diverged in what kind of features was reported. The latest version of the spec settled to force this method to always return true, except for SVG features, where the functionnality was accurate and in use.
        /// </summary>
        /// <param name="feature">Is a DOMString representing the feature name.</param>
        /// <param name="version">Is a DOMString representing the version of the specification defining the feature.</param>
        /// <returns></returns>
        public virtual extern bool HasFeature(string feature, string version);
    }
}