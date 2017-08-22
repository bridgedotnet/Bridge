namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLOptGroupElement interface provides special properties and methods (beyond the regular HTMLElement object interface they also have available to them by inheritance) for manipulating the layout and presentation of &lt;optgroup&gt; elements.
    /// </summary>
    [External]
    [Name("HTMLOptGroupElement")]
    public sealed class HTMLOptGroupElement : HTMLElement<HTMLOptGroupElement>
    {
        [Template("document.createElement(\"optgroup\")")]
        public extern HTMLOptGroupElement();

        /// <summary>
        /// If true, the whole list of children &lt;option&gt; is disabled.
        /// </summary>
        public bool Disabled;

        /// <summary>
        /// Set or get the label for the group.
        /// </summary>
        public string Label;
    }
}