namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLDataListElement interface provides special properties (beyond the HTMLElement object interface it also has available to it by inheritance) to manipulate &lt;datalist&gt; elements and their content.
    /// </summary>
    [External]
    [Name("HTMLDataListElement")]
    public class HTMLDataListElement : HTMLElement<HTMLDataListElement>
    {
        [Template("document.createElement('datalist')")]
        public HTMLDataListElement()
        {
        }

        /// <summary>
        /// A collection of the contained option elements.
        /// </summary>
        public readonly OptionsCollection Options;
    }
}
