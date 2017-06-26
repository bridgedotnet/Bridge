namespace Bridge.Html5
{
    /// <summary>
    /// An object implementing the StyleSheet interface represents a single style sheet. CSS style sheets will further implement the more specialized CSSStyleSheet interface.
    /// </summary>
    [External]
    [Name("StyleSheet")]
    public class StyleSheet
    {
        protected extern internal StyleSheet();

        /// <summary>
        /// Is a Boolean representing whether the current stylesheet has been applied or not.
        /// </summary>
        public bool Disabled;

        /// <summary>
        /// Returns a DOMString representing the location of the stylesheet.
        /// </summary>
        public readonly string Href;

        // <summary>
        // Returns a MediaList representing the intended destination medium for style information.
        // </summary>
        public readonly MediaList Media;

        // <summary>
        // Returns a Node associating this style sheet with the current document.
        // </summary>
        public readonly Node OwnerNode;

        /// <summary>
        /// Returns a StyleSheet including this one, if any; returns null if there aren't any.
        /// </summary>
        public readonly StyleSheet ParentStyleSheet;

        /// <summary>
        /// Returns a DOMString representing the advisory title of the current style sheet.
        /// </summary>
        public readonly string Title;

        /// <summary>
        /// Returns a DOMString representing the style sheet language for this style sheet.
        /// </summary>
        public readonly string Type;
    }
}