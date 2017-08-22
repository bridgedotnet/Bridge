namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLSourceElement interface provides special properties (beyond the regular HTMLElement object interface it also has available to it by inheritance) for manipulating &lt;source&gt; elements.
    /// </summary>
    [External]
    [Name("HTMLSourceElement")]
    public sealed class HTMLSourceElement : HTMLElement<HTMLSourceElement>
    {
        [Template("document.createElement(\"source\")")]
        public extern HTMLSourceElement();

        /// <summary>
        /// Reflects the media HTML attribute, containing the intended type of the media resource.
        /// </summary>
        public string Media;

        /// <summary>
        /// Reflects the src HTML attribute, containing the URL for the media resource.
        /// </summary>
        public string Src;

        /// <summary>
        /// Reflects the type HTML attribute, containing the type of the media resource.
        /// </summary>
        public string Type;
    }
}