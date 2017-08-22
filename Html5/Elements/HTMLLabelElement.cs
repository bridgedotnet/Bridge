namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLLabelElement interface gives access to properties specific to &lt;label&gt; elements. It inherits from HTMLElement.
    /// </summary>
    [External]
    [Name("HTMLLabelElement")]
    public sealed class HTMLLabelElement : HTMLElement<HTMLLabelElement>
    {
        [Template("document.createElement(\"label\")")]
        public extern HTMLLabelElement();

        /// <summary>
        /// The labeled control.
        /// </summary>
        public readonly HTMLElement Control;

        /// <summary>
        /// The form owner of this label.
        /// </summary>
        public readonly HTMLFormElement Form;

        /// <summary>
        /// The ID of the labeled control. Reflects the for attribute.
        /// </summary>
        public string HtmlFor;
    }
}