namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLOptionElement interface represents &lt;option&gt; elements and inherits all classes and methods of the HTMLElement interface.
    /// </summary>
    [External]
    [Name("HTMLOptionElement")]
    public sealed class HTMLOptionElement : HTMLElement<HTMLOptionElement>
    {
        [Template("document.createElement(\"option\")")]
        public extern HTMLOptionElement();

        /// <summary>
        /// Contains the initial value of the selected HTML attribute, indicating whether the option is selected by default or not.
        /// </summary>
        public bool DefaultSelected;

        /// <summary>
        /// Reflects the value of the disabled HTML attribute, which indicates that the option is unavailable to be selected. An option can also be disabled if it is a child of an &lt;optgroup&gt; element that is disabled.
        /// </summary>
        public bool Disable;

        /// <summary>
        /// If the option is a descendent of a &lt;select&gt; element, then this property has the same value as the form property of the corresponding HTMLSelectElement object; otherwise, it is null.
        /// </summary>
        public readonly HTMLFormElement Form;

        /// <summary>
        /// The position of the option within the list of options it belongs to, in tree-order. If the option is not part of a list of options, like when it is part of the &lt;datalist&gt; element, the value is 0.
        /// </summary>
        public readonly int Index;

        /// <summary>
        /// Reflects the value of the label HTML attribute, which provides a label for the option. If this attribute isn't specifically set, reading it returns the element's text content.
        /// </summary>
        public string Label;

        /// <summary>
        /// Indicates whether the option is currently selected.
        /// </summary>
        public bool Selected;

        /// <summary>
        /// Contains the text content of the element.
        /// </summary>
        public string Text;

        /// <summary>
        /// Reflects the value of the value HTML attribute, if it exists; otherwise reflects value of the Node.textContent property.
        /// </summary>
        public string Value;
    }
}