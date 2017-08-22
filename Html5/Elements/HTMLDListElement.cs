namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLDListElement interface provides special properties (beyond those of the regular HTMLElement interface it also has available to it by inheritance) for manipulating definition list elements.
    /// </summary>
    [External]
    [Name("HTMLDListElement")]
    public sealed class HTMLDListElement : HTMLElement<HTMLDListElement>
    {
        [Template("document.createElement(\"dl\")")]
        public extern HTMLDListElement();

        /// <summary>
        /// Indicates that spacing between list items should be reduced.
        /// </summary>
        public bool Compact;
    }
}