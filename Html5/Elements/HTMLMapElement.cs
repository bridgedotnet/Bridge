namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLMapElement interface provides special properties and methods (beyond those of the regular object HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of map elements.
    /// </summary>
    [External]
    [Name("HTMLMapElement")]
    public sealed class HTMLMapElement : HTMLElement<HTMLMapElement>
    {
        [Template("document.createElement(\"map\")")]
        public extern HTMLMapElement();

        /// <summary>
        /// Is a DOMString representing the &lt;map&gt; element for referencing it other context. If the id attribute is set, this must have the same value; and it cannot be null or empty.
        /// </summary>
        public string Name;

        /// <summary>
        /// Is a live HTMLCollection representing the &lt;area&gt; elements associated to this &lt;map&gt;.
        /// </summary>
        public readonly HTMLCollection<HTMLAreaElement> Areas;

        /// <summary>
        /// Is a live HTMLCollection representing the &lt;img&gt; and &lt;object&gt; elements associated to this &lt;map&gt;.
        /// </summary>
        public readonly HTMLCollection Images;
    }
}