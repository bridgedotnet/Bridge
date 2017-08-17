namespace Bridge.Html5
{
    /// <summary>
    /// The &lt;keygen&gt; elements expose the HTMLKeygenElement interface, which provides special properties and methods (beyond the regular element object interface they also have available to them by inheritance) for manipulating the layout and presentation of keygen elements.
    /// </summary>
    [External]
    [Name("HTMLKeygenElement")]
    public sealed class HTMLKeygenElement : HTMLElement<HTMLKeygenElement>
    {
        [Template("document.createElement(\"keygen\")")]
        public extern HTMLKeygenElement();

        /// <summary>
        /// Reflects the autofocus HTML attribute, which specifies that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute. It cannot be applied if the type attribute is set to hidden (that is, you cannot automatically set focus to a hidden control).
        /// </summary>
        [Name("autofocus")]
        public bool AutoFocus;

        /// <summary>
        /// Reflects the autofocus HTML attribute, indicating that the form control should have input focus when the page loads.
        /// </summary>
        [Name("autosave")]
        public bool AutoSave;

        /// <summary>
        /// Reflects the challenge HTML attribute, containing a challenge string that is packaged with the submitted key.
        /// </summary>
        public string Challenge;

        /// <summary>
        /// Reflects the disabled HTML attribute, indicating that the control is not available for interaction.
        /// </summary>
        public bool Disabled;

        /// <summary>
        /// Indicates the control's form owner, reflecting the form HTML attribute if it is defined.
        /// </summary>
        public readonly HTMLFormElement Form;

        /// <summary>
        /// Reflects the keytype HTML attribute, containing the type of key used.
        /// </summary>
        public string KeyType;

        /// <summary>
        /// A list of &lt;label&gt; elements that are labels for this element.
        /// </summary>
        public readonly NodeList Labels;

        /// <summary>
        /// Must be the value keygen.
        /// </summary>
        public readonly string Type;

        /// <summary>
        /// A localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (willValidate is false), or it satisfies its constraints.
        /// </summary>
        public readonly string ValidationMessage;

        /// <summary>
        /// The validity state that this element is in.
        /// </summary>
        public readonly ValidityState Validity;

        /// <summary>
        /// Indicates whether the element is a candidate for constraint validation. It is false if any conditions bar it from constraint validation.
        /// </summary>
        public readonly bool WillValidate;

        /// <summary>
        /// Removes focus from input; keystrokes will subsequently go nowhere.
        /// </summary>
        public new extern void Blur();

        /// <summary>
        /// Always returns true because keygen objects are never candidates for constraint validation.
        /// </summary>
        /// <returns></returns>
        public extern bool CheckValidity();

        /// <summary>
        /// Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.
        /// </summary>
        /// <param name="error"></param>
        public extern void SetCustomValidity(string error);
    }
}