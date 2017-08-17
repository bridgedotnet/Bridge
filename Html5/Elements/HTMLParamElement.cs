namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLParamElement interface provides special properties (beyond those of the regular HTMLElement object interface it inherits) for manipulating &lt;param&gt; elements, representing a pair of a key and a value that acts as a parameter for an &lt;object&gt; element.
    /// </summary>
    [External]
    [Name("HTMLParamElement")]
    public sealed class HTMLParamElement : HTMLElement<HTMLParamElement>
    {
        [Template("document.createElement(\"param\")")]
        public extern HTMLParamElement();

        /// <summary>
        /// Is a DOMString representing the name of the parameter. It reflects the name attribute.
        /// </summary>
        public string Name;
    }
}