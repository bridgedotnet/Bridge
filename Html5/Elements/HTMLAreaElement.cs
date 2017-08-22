namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLAreaElement interface provides special properties and methods (beyond those of the regular object HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of area elements.
    /// </summary>
    [External]
    [Name("HTMLAreaElement")]
    public sealed class HTMLAreaElement : HTMLElement<HTMLAreaElement>
    {
        [Template("document.createElement(\"area\")")]
        public extern HTMLAreaElement();

        /// <summary>
        /// Is a DOMString that reflects the alt HTML attribute, containing alternative text for the element.
        /// </summary>
        public string Alt;

        /// <summary>
        /// Is a DOMString that reflects the coords HTML attribute, containing coordinates to define the hot-spot region.
        /// </summary>
        public string Coords;

        /// <summary>
        /// Is a DOMString indicating that the linked resource is intended to be downloaded rather than displayed in the browser. The value represent the proposed name of the file. If the name is not a valid filename of the underlying OS, browser will adapt it.
        /// </summary>
        public string Download;

        /// <summary>
        /// Is a DOMString containing the fragment identifier (including the leading hash mark (#)), if any, in the referenced URL.
        /// </summary>
        public string Hash;

        /// <summary>
        /// Is a DOMString containing the hostname and port (if it's not the default port) in the referenced URL.
        /// </summary>
        public string Host;

        /// <summary>
        /// Is a DOMString containing the hostname in the referenced URL.
        /// </summary>
        public string Hostname;

        /// <summary>
        /// Is a DOMString containing that reflects the href HTML attribute, containing a valid URL of a linked resource.
        /// </summary>
        public string Href;

        /// <summary>
        /// Is a DOMString containing that reflects the hreflang HTML attribute, indicating the language of the linked resource.
        /// </summary>
        public string Hreflang;

        /// <summary>
        /// Is a DOMString containing that reflects the media HTML attribute, indicating target media of the linked resource.
        /// </summary>
        public string Media;

        /// <summary>
        /// Is a Boolean flag indicating if the area is inactive (true) or active (false).
        /// </summary>
        public bool NoHref;

        /// <summary>
        /// Is a DOMString containing the password specified before the domain name.
        /// </summary>
        public string Password;

        /// <summary>
        /// Returns a DOMString containing the origin of the URL, that is its scheme, its domain and its port.
        /// </summary>
        public string Origin;

        /// <summary>
        /// Is a DOMString containing the path name component, if any, of the referenced URL.
        /// </summary>
        public string Pathname;

        /// <summary>
        /// Is a DOMString containing the port component, if any, of the referenced URL.
        /// </summary>
        public string Port;

        /// <summary>
        /// Is a DOMString containing the protocol component (including trailing colon ':'), of the referenced URL.
        /// </summary>
        public string Protocol;

        /// <summary>
        /// Is a DOMString that reflects the rel HTML attribute, specifying the relationship of the target object to the link object.
        /// </summary>
        public string Rel;

        /// <summary>
        /// Returns a DOMTokenList that reflects the rel HTML attribute, as a list of tokens.
        /// </summary>
        public readonly DOMTokenList RelList;

        /// <summary>
        /// Is a DOMString representing tThe search element, including leading question mark ('?'), if any, of the referenced URL.
        /// </summary>
        public string Search;

        /// <summary>
        /// The URLUtils.searchParams property is a URLSearchParams containing the query/search parameters of the URL.
        /// </summary>
        public URLSearchParams SearchParams;

        /// <summary>
        /// Is a DOMString representing the shape of the active area.
        /// </summary>
        public string Shape;

        /// <summary>
        /// Is a DOMString that reflects the target HTML attribute, indicating where to display the linked resource.
        /// </summary>
        public string Target;

        /// <summary>
        /// Is a DOMString that reflects the type HTML attribute, indicating the MIME type of the linked resource.
        /// </summary>
        public string Type;

        /// <summary>
        /// Is a DOMString containing the username specified before the domain name.
        /// </summary>
        public string Username;
    }
}