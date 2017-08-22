namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLStyleElement interface represents a &lt;style&gt; element. It inherits properties and methods from its parent, HTMLElement, and from LinkStyle.
    /// This interface doesn't allow to manipulate the CSS it contains (in most case). To manipulate CSS, see Using dynamic styling information for an overview of the objects used to manipulate specified CSS properties using the DOM.
    /// </summary>
    [External]
    [Name("HTMLStyleElement")]
    public sealed class HTMLStyleElement : HTMLElement<HTMLStyleElement>
    {
        [Template("document.createElement(\"style\")")]
        public extern HTMLStyleElement();

        /// <summary>
        /// Is a DOMString representing the intended destination medium for style information.
        /// </summary>
        public string Media;

        /// <summary>
        /// Is a DOMString representing the type of style being applied by this statement.
        /// </summary>
        public string Type;

        /// <summary>
        /// Is a Boolean value, with true if the stylesheet is disabled, and false if not.
        /// </summary>
        public bool Disabled;

        /// <summary>
        /// Returns the StyleSheet object associated with the given element, or null if there is none
        /// </summary>
        public StyleSheet Sheet;
    }
}