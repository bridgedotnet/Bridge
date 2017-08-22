namespace Bridge.Html5
{
    /// <summary>
    /// HTML script elements expose the HTMLScriptElement interface, which provides special properties and methods (beyond the regular HTMLElement object interface they also have available to them by inheritance) for manipulating the layout and presentation of &lt;script&gt; elements.
    /// </summary>
    [External]
    [Name("HTMLScriptElement")]
    public sealed class HTMLScriptElement : HTMLElement<HTMLScriptElement>
    {
        [Template("document.createElement(\"script\")")]
        public extern HTMLScriptElement();

        /// <summary>
        /// The async and defer attributes are boolean attributes that indicate how the script should be executed. The defer and async attributes must not be specified if the src attribute is not present.
        /// There are three possible modes that can be selected using these attributes. If the async attribute is present, then the script will be executed asynchronously, as soon as it is available. If the async attribute is not present but the defer attribute is present, then the script is executed when the page has finished parsing. If neither attribute is present, then the script is fetched and executed immediately, before the user agent continues parsing the page.
        /// Note: The exact processing details for these attributes are, for mostly historical reasons, somewhat non-trivial, involving a number of aspects of HTML. The implementation requirements are therefore by necessity scattered throughout the specification. These algorithms describe the core of this processing, but these algorithms reference and are referenced by the parsing rules for &lt;script&gt; start and end tags in HTML, in foreign content, and in XML, the rules for the document.write() method, the handling of scripting, etc.
        /// The defer attribute may be specified even if the async attribute is specified, to cause legacy Web browsers that only support defer (and not async) to fall back to the defer behavior instead of the synchronous blocking behavior that is the default.
        /// </summary>
        public bool Async;

        /// <summary>
        /// Represents the character encoding of the external script resource. It reflects the charset attribute.
        /// </summary>
        public string Charset;

        /// <summary>
        /// Is a DOMString that corresponds to the CORS setting for this script element. See CORS settings attributes for details. It controls, for scripts that are obtained from other origins, whether error information will be exposed.
        /// </summary>
        public string CrossOrigin;

        /// <summary>
        /// The async and defer attributes are boolean attributes that indicate how the script should be executed. The defer and async attributes must not be specified if the src attribute is not present.
        /// There are three possible modes that can be selected using these attributes. If the async attribute is present, then the script will be executed asynchronously, as soon as it is available. If the async attribute is not present but the defer attribute is present, then the script is executed when the page has finished parsing. If neither attribute is present, then the script is fetched and executed immediately, before the user agent continues parsing the page.
        /// Note: The exact processing details for these attributes are, for mostly historical reasons, somewhat non-trivial, involving a number of aspects of HTML. The implementation requirements are therefore by necessity scattered throughout the specification. These algorithms describe the core of this processing, but these algorithms reference and are referenced by the parsing rules for &lt;script&gt; start and end tags in HTML, in foreign content, and in XML, the rules for the document.write() method, the handling of scripting, etc.
        /// The defer attribute may be specified even if the async attribute is specified, to cause legacy Web browsers that only support defer (and not async) to fall back to the defer behavior instead of the synchronous blocking behavior that is the default.
        /// </summary>
        public bool Defer;

        /// <summary>
        /// The IDL attribute text must return a concatenation of the contents of all the Text nodes that are children of the &lt;script&gt; element (ignoring any other nodes such as comments or elements), in tree order. On setting, it must act the same way as the textContent IDL attribute.
        /// Note: When inserted using the document.write() method, &lt;script&gt; elements execute (typically synchronously), but when inserted using innerHTML and outerHTML attributes, they do not execute at all.
        /// </summary>
        public string Text;

        /// <summary>
        /// Represents the MIME type of the script. It reflects the type attribute.
        /// </summary>
        public string Type;

        /// <summary>
        /// Represents gives the address of the external script resource to use. It reflects the src attribute.
        /// </summary>
        public string Src;
    }
}