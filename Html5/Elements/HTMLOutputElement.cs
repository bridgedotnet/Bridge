namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLOutputElement interface provides properties and methods (beyond those inherited from HTMLElement) for manipulating the layout and presentation of &lt;output&gt; elements.
    /// </summary>
    [External]
    [Name("HTMLOutputElement")]
    public sealed class HTMLOutputElement : HTMLElement<HTMLOutputElement>
    {
        [Template("document.createElement(\"output\")")]
        public extern HTMLOutputElement();

        /// <summary>
        /// The default value of the element, initially the empty string.
        /// </summary>
        public string DefaultValue;

        /// <summary>
        /// Indicates the control's form owner, reflecting the form HTML attribute if it is defined.
        /// </summary>
        public readonly HTMLFormElement Form;

        /// <summary>
        /// Reflects the for HTML attribute, containing a list of IDs of other elements in the same document that contribute to (or otherwise affect) the calculated value.
        /// </summary>
        public readonly DOMSettableTokenList HtmlFor;

        /// <summary>
        /// Reflects the name HTML attribute, containing the name for the control that is submitted with form data.
        /// </summary>
        public string Name;

        /// <summary>
        /// Must be the string output.
        /// </summary>
        public string Type;

        /// <summary>
        /// A localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (willValidate is false), or it satisfies its constraints.
        /// </summary>
        public readonly string ValidationMessage;

        /// <summary>
        /// The validity states that this element is in.
        /// </summary>
        public readonly ValidityState Validity;

        /// <summary>
        /// The behavior of this property is subject to an open specification bug (https://www.w3.org/Bugs/Public/show_bug.cgi?id=10912), as some browser maker are not happy with what is specified. It is unclear which will be the final the outcome of this.
        /// The standard behavior is to always return false because output objects are never candidates for constraint validation.
        /// The proposed new behavior, implemented in Firefox since Gecko 2.0 is to use this property to indicate whether the element is a candidate for constraint validation. It is false if any conditions bar it from constraint validation (See bug 604673 (https://bugzilla.mozilla.org/show_bug.cgi?id=604673)).
        /// </summary>
        public readonly bool WillValidate;

        /// <summary>
        /// The behavior of this property is subject to an open specification bug (https://www.w3.org/Bugs/Public/show_bug.cgi?id=10912), as some browser maker are not happy with what is specified. It is unclear which will be the final the outcome of this.
        /// The standard behavior is to always return true because output objects are never candidates for constraint validation.
        /// The proposed new behavior, implemented in Firefox since Gecko 2.0 is to return false if the element is a candidate for constraint validation, and it does not satisfy its constraints. In this case, it also fires an "invalid" event at the element. It returns true if the element is not a candidate for constraint validation, or if it satisfies its constraints (See bug 604673 (https://bugzilla.mozilla.org/show_bug.cgi?id=604673)).
        /// </summary>
        /// <returns></returns>
        public extern bool CheckValidity();

        /// <summary>
        /// Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.
        /// </summary>
        /// <param name="error">The custom validity message</param>
        public extern void SetCustomValidity(string error);
    }
}