namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLParamElement interface provides special properties (beyond those of the regular HTMLElement object interface it inherits) for manipulating &lt;param&gt; elements, representing a pair of a key and a value that acts as a parameter for an &lt;object&gt; element.
    /// </summary>
    [External]
    [Name("HTMLParamElement")]
    public class ParamElement : Element<OptionElement>
    {
        [Template("document.createElement('param')")]
        public ParamElement()
        {
        }

        /// <summary>
        /// Is a DOMString representing the name of the parameter. It reflects the name attribute.
        /// </summary>
        public string Name;
    }
}
