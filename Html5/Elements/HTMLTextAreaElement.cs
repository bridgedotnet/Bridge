using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLTextAreaElement interface, which provides special properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of &lt;textarea&gt; elements.
    /// </summary>
    [External]
    [Name("HTMLTextAreaElement")]
    public sealed class HTMLTextAreaElement : HTMLElement<HTMLTextAreaElement>
    {
        [Template("document.createElement(\"textarea\")")]
        public extern HTMLTextAreaElement();

        /// <summary>
        /// Reflects the autofocus HTML attribute, which specifies that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute. It cannot be applied if the type attribute is set to hidden (that is, you cannot automatically set focus to a hidden control).
        /// </summary>
        [Name("autofocus")]
        public bool AutoFocus;

        /// <summary>
        /// Reflects the cols HTML attribute, indicating the visible width of the text area.
        /// </summary>
        public int Cols;

        /// <summary>
        /// The default value as originally specified in HTML that created this object.
        /// </summary>
        public string DefaultValue;

        /// <summary>
        /// Reflects the disabled HTML attribute, indicating that the control is not available for interaction. The input values will not be submitted with the form. See also readonly
        /// </summary>
        public bool Disabled;

        /// <summary>
        /// The containing form element, if this element is in a form. If this element is not contained in a form element:
        /// HTML5 this can be the id attribute of any &lt;form&gt; element in the same document. Even if the attribute is set on &lt;input&gt;, this property will be null, if it isn't the id of a &lt;form&gt; element.
        /// HTML 4 this must be null.
        /// </summary>
        public readonly HTMLFormElement Form;

        /// <summary>
        /// Reflects the maxlength HTML attribute, containing the maximum length of text (in Unicode code points) that the value can be changed to. The constraint is evaluated only when the value is changed
        /// </summary>
        public int MaxLength;

        /// <summary>
        /// Reflects the name HTML attribute, containing a name that identifies the element when submitting the form.
        /// </summary>
        public string Name;

        /// <summary>
        /// Reflects the placeholder HTML attribute, containing a hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored.
        /// </summary>
        public string Placeholder;

        /// <summary>
        /// Reflects the readonly HTML attribute, indicating that the user cannot modify the value of the control.
        /// HTML5This is ignored if the value of the type attribute is hidden, range, color, checkbox, radio, file, or a button type.
        /// </summary>
        public bool ReadOnly;

        /// <summary>
        /// Reflects the required HTML attribute, indicating that the user must fill in a value before submitting a form.
        /// </summary>
        public bool Required;

        /// <summary>
        /// Reflects the rows HTML attribute, indicating the number of visible text lines for the control.
        /// </summary>
        public int Rows;

        /// <summary>
        /// The direction in which selection occurred. This is "forward" if selection was performed in the start-to-end direction of the current locale, or "backward" for the opposite direction. This can also be "none" if the direction is unknown."
        /// </summary>
        public string SelectionDirection;

        /// <summary>
        /// The index of the end of selected text.
        /// </summary>
        public int SelectionEnd;

        /// <summary>
        /// The index of the beginning of selected text. When nothing is selected, this is also the caret position inside of the input element.
        /// </summary>
        public int SelectionStart;

        /// <summary>
        /// The string textarea.
        /// </summary>
        public readonly string Type;

        /// <summary>
        /// A localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (willvalidate is false), or it satisfies its constraints.
        /// </summary>
        public readonly string ValidationMessage;

        /// <summary>
        /// The validity state that this element is in.
        /// </summary>
        public readonly ValidityState Validity;

        /// <summary>
        /// The raw value contained in the control.
        /// </summary>
        public string Value;

        /// <summary>
        /// Indicates whether the element is a candidate for constraint validation. It is false if any conditions bar it from constraint validation.
        /// </summary>
        public readonly bool WillValidate;

        /// <summary>
        /// Reflects the wrap HTML attribute, indicating how the control wraps text. If this attribute is not specified, soft is its default value.
        /// </summary>
        public Wrap Wrap;

        #region Methods

        /// <summary>
        /// Returns false if the button is a candidate for constraint validation, and it does not satisfy its constraints. In this case, it also fires an invalid event at the control. It returns true if the control is not a candidate for constraint validation, or if it satisfies its constraints.
        /// </summary>
        /// <returns></returns>
        public extern bool CheckValidity();

        /// <summary>
        /// Selects the contents of the control.
        /// </summary>
        public extern void Select();

        /// <summary>
        /// Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.
        /// </summary>
        /// <param name="error"></param>
        public extern void SetCustomValidity(string error);

        /// <summary>
        /// Selects a range of text in the element (but does not focus it). The optional selectionDirection parameter may be "forward" or "backward" to establish the direction in which selection was set, or "none" if the direction is unknown or not relevant. The default is "none". Specifying a selectionDirection parameter sets the value of the selectionDirection property.
        /// </summary>
        /// <param name="start"></param>
        /// <param name="end"></param>
        public extern void SetSelectionRange(int start, int end);

        /// <summary>
        /// Selects a range of text in the element (but does not focus it). The optional selectionDirection parameter may be "forward" or "backward" to establish the direction in which selection was set, or "none" if the direction is unknown or not relevant. The default is "none". Specifying a selectionDirection parameter sets the value of the selectionDirection property.
        /// </summary>
        /// <param name="start"></param>
        /// <param name="end"></param>
        /// <param name="direction"></param>
        public extern void SetSelectionRange(int start, int end, string direction);

        /// <summary>
        /// Replaces a range of text with the new text. Supported input types: text, search, url, tel, password.
        /// </summary>
        /// <param name="replacement"></param>
        public extern void SetRangeText(string replacement);

        /// <summary>
        /// Replaces a range of text with the new text. Supported input types: text, search, url, tel, password.
        /// </summary>
        /// <param name="replacement"></param>
        /// <param name="start"></param>
        /// <param name="end"></param>
        public extern void SetRangeText(string replacement, int start, int end);

        /// <summary>
        /// Replaces a range of text with the new text. Supported input types: text, search, url, tel, password.
        /// </summary>
        /// <param name="replacement"></param>
        /// <param name="start"></param>
        /// <param name="end"></param>
        /// <param name="selectMode"></param>
        public extern void SetRangeText(string replacement, int start, int end, string selectMode);

        #endregion Methods
    }

    /// <summary>
    /// Indicates how the control wraps text.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum Wrap
    {
        /// <summary>
        /// The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the cols attribute must be specified.
        /// </summary>
        Hard,

        /// <summary>
        /// The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks.
        /// </summary>
        Soft
    }
}