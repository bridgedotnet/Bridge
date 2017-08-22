namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLButtonElement interface provides properties and methods (beyond the button object interface it also has available to them by inheritance) for manipulating the layout and presentation of button elements.
    /// </summary>
    [External]
    [Name("HTMLButtonElement")]
    public sealed class HTMLButtonElement : HTMLElement<HTMLButtonElement>
    {
        [Template("document.createElement(\"button\")")]
        public extern HTMLButtonElement();

        /// <summary>
        /// The control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.
        /// </summary>
        [Name("autofocus")]
        public bool AutoFocus;

        /// <summary>
        /// The control is disabled, meaning that it does not accept any clicks.
        /// </summary>
        public bool Disabled;

        /// <summary>
        /// The form that this button is associated with. If the button is a descendant of a form element, then this attribute is the ID of that form element.
        /// If the button is not a descendant of a form element, then the attribute can be the ID of any form element in the same document it is related to, or the null value if none matches.
        /// </summary>
        public readonly HTMLFormElement Form;

        /// <summary>
        /// The URI of a resource that processes information submitted by the button. If specified, this attribute overrides the action attribute of the &lt;form&gt; element that owns this element.
        /// </summary>
        public string FormAction;

        /// <summary>
        /// The type of content that is used to submit the form to the server. If specified, this attribute overrides the enctype attribute of the &lt;form&gt; element that owns this element.
        /// </summary>
        public string FormEncType;

        /// <summary>
        /// The HTTP method that the browser uses to submit the form. If specified, this attribute overrides the method attribute of the &lt;form&gt; element that owns this element.
        /// </summary>
        public string FormMethod;

        /// <summary>
        /// Indicates that the form is not to be validated when it is submitted. If specified, this attribute overrides the enctype attribute of the &lt;form&gt; element that owns this element.
        /// </summary>
        public bool FormNoValidate;

        /// <summary>
        /// A name or keyword indicating where to display the response that is received after submitting the form. If specified, this attribute overrides the target attribute of the &lt;form&gt; element that owns this element.
        /// </summary>
        public string FormTarget;

        /// <summary>
        /// A list of &lt;label&gt; elements that are labels for this button.
        /// </summary>
        public readonly NodeList Labels;

        /// <summary>
        /// The name of the object when submitted with a form. HTML5 If specified, it must not be the empty string.
        /// </summary>
        public string Name;

        /// <summary>
        /// Indicates the behavior of the button.
        /// </summary>
        public ButtonType Type;

        /// <summary>
        /// A localized message that describes the validation constraints that the control does not satisfy (if any). This attribute is the empty string if the control is not a candidate for constraint validation (willValidate is false), or it satisfies its constraints.
        /// </summary>
        public readonly string ValidationMessage;

        /// <summary>
        /// The validity states that this button is in.
        /// </summary>
        public readonly ValidityState Validity;

        /// <summary>
        /// The current form control value of the button.
        /// </summary>
        public string Value;

        /// <summary>
        /// Indicates whether the button is a candidate for constraint validation. It is false if any conditions bar it from constraint validation.
        /// </summary>
        public readonly bool WillValidate;
    }
}