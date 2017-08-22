namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLLIElement interface expose specific properties and methods (beyond those defined by regular HTMLElement interface it also has available to it by inheritance) for manipulating list elements.
    /// </summary>
    [External]
    [Name("HTMLLIElement")]
    public sealed class HTMLLIElement : HTMLElement<HTMLLIElement>
    {
        [Template("document.createElement(\"li\")")]
        public extern HTMLLIElement();

        /// <summary>
        /// The type of the bullets, "disc", "square" or "circle". As the standard way of defining the list type is via the CSS list-style-type property, use the CSSOM methods to set it via a script.
        /// </summary>
        public string Type;

        /// <summary>
        /// Indicates the ordinal position of the list element inside a given &lt;ol&gt;. It reflects the value attribute of the HTML &lt;li&gt; element, and can be smaller than 0. If the &lt;li&gt; element is not a child of an &lt;ol&gt; element, the property has no meaning.
        /// </summary>
        public int Value;
    }
}