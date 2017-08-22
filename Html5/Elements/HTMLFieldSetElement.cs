namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLFieldSetElement interface special properties and methods (beyond the regular HTMLelement interface it also has available to it by inheritance) for manipulating the layout and presentation of field-set elements.
    /// </summary>
    [External]
    [Name("HTMLFieldSetElement")]
    public sealed class HTMLFieldSetElement : HTMLElement<HTMLFieldSetElement>
    {
        [Template("document.createElement(\"fieldset\")")]
        public extern HTMLFieldSetElement();

        /// <summary>
        /// Reflects the disabled HTML attribute, indicating whether the user can interact with the control.
        /// </summary>
        public bool Disabled;

        /// <summary>
        /// The elements belonging to this field set.
        /// </summary>
        public readonly FormControlsCollection Elements;

        /// <summary>
        /// The containing form element, if this element is in a form.
        /// If the button is not a descendant of a form element, then the attribute can be the ID of any form element in the same document it is related to, or the null value if none matches.
        /// </summary>
        public readonly HTMLFormElement Form;

        /// <summary>
        /// Reflects the name HTML attribute, containing the name of the field set, used for submitting the form.
        /// </summary>
        public string Name;

        /// <summary>
        /// Must be the string fieldset.
        /// </summary>
        public readonly string Type;

        /// <summary>
        /// A localized message that describes the validation constraints that the element does not satisfy (if any). This is the empty string if the element is not a candidate for constraint validation (willValidate is false), or it satisfies its constraints.
        /// </summary>
        public readonly string ValidationMessage;

        /// <summary>
        /// The validity states that this element is in.
        /// </summary>
        public readonly ValidityState Validity;

        /// <summary>
        /// Always false because &lt;fieldset&gt; objects are never candidates for constraint validation.
        /// </summary>
        public bool WillValidate;

        /// <summary>
        /// Always returns true because &lt;fieldset&gt; objects are never candidates for constraint validation.
        /// </summary>
        public extern bool CheckValidity();

        /// <summary>
        /// Sets a custom validity message for the field set. If this message is not the empty string, then the field set is suffering from a custom validity error, and does not validate.
        /// </summary>
        /// <param name="error"></param>
        public extern void SetCustomValidity(string error);
    }
}