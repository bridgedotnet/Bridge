namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLLabelElement interface gives access to properties specific to &lt;label&gt; elements. It inherits from HTMLElement.
    /// </summary>
    [External]
    [Name("HTMLLabelElement")]
    public class LabelElement : Element<LabelElement>
    {
        [Template("document.createElement('label')")]
        public LabelElement()
        {
        }

        /// <summary>
        /// The labeled control.
        /// </summary>
        public readonly Element Control;

        /// <summary>
        /// The form owner of this label.
        /// </summary>
        public readonly FormElement Form;

        /// <summary>
        /// The ID of the labeled control. Reflects the for attribute.
        /// </summary>
        public string HtmlFor;
    }
}
