namespace Bridge.Html5
{
    /// <summary>
    /// The HTML &lt;meter&gt; elements expose the HTMLMeterElement interface, which provides special properties and methods (beyond the HTMLElement object interface they also have available to them by inheritance) for manipulating the layout and presentation of &lt;meter&gt; elements.
    /// </summary>
    [External]
    [Name("HTMLMeterElement")]
    public sealed class HTMLMeterElement : HTMLElement<HTMLMeterElement>
    {
        [Template("document.createElement(\"meter\")")]
        public extern HTMLMeterElement();

        /// <summary>
        /// It returns the value of the high boundary, reflecting the high &lt;meter&gt; attribute.
        /// </summary>
        public double High;

        /// <summary>
        /// It returns the value of the low boundary, reflecting the low &lt;meter&gt; attribute.
        /// </summary>
        public double Low;

        /// <summary>
        /// It return the maximum value, reflecting the max &lt;meter&gt; attribute.
        /// </summary>
        public double Max;

        /// <summary>
        /// It returns the minimum value, reflecting the min &lt;meter&gt; attribute.
        /// </summary>
        public double Min;

        /// <summary>
        /// It retruns the optimum value, reflecting the min &lt;meter&gt; attribute.
        /// </summary>
        public double Optimum;

        /// <summary>
        /// A list of &lt;label&gt; elements that are labels for this element.
        /// </summary>
        public NodeList Labels;
    }
}