namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLLegendElement is an interface allowing to access properties of the &lt;legend&gt; elements. It inherits properties and methods from the HTMLElement interface.
    /// </summary>
    [External]
    [Name("HTMLLegendElement")]
    public sealed class HTMLLegendElement : HTMLElement<HTMLLegendElement>
    {
        [Template("document.createElement(\"legend\")")]
        public extern HTMLLegendElement();

        /// <summary>
        /// The form that this legend belongs to. If the legend has a fieldset element as its parent, then this attribute returns the same value as the form attribute on the parent fieldset element. Otherwise, it returns null.
        /// </summary>
        public readonly HTMLFormElement Form;
    }
}