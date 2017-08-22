using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLInputElement interface provides special properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of input elements.
    /// </summary>
    [External]
    [Name("HTMLInputElement")]
    public sealed class HTMLInputElement : HTMLElement<HTMLInputElement>
    {
        [Template("document.createElement(\"input\")")]
        public extern HTMLInputElement();

        /// <summary>
        /// If the value of the type attribute is file, this attribute indicates the types of files that the server accepts; otherwise it is ignored. The value must be a comma-separated list of unique content type specifiers:
        /// A file extension starting with the STOP character (U+002E). (E.g.: ".jpg,.png,.doc")
        /// A valid MIME type with no extensions
        /// audio/* representing sound files HTML5
        /// video/* representing video files HTML5
        /// image/* representing image files HTML5
        /// </summary>
        public string Accept;

        /// <summary>
        /// Reflects the alt HTML attribute, containing alternative text to use when type is image.
        /// </summary>
        public string Alt;

        /// <summary>
        /// Reflects the autocomplete HTML attribute, indicating whether the value of the control can be automatically completed by the browser. Ignored if the value of the type attribute is hidden, checkbox, radio, file, or a button type (button, submit, reset, image).
        /// </summary>
        [Name("autocomplete")]
        public Union<string, AutoComplete> AutoComplete;

        /// <summary>
        /// Reflects the autofocus HTML attribute, which specifies that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute. It cannot be applied if the type attribute is set to hidden (that is, you cannot automatically set focus to a hidden control).
        /// </summary>
        [Name("autofocus")]
        public bool AutoFocus;

        /// <summary>
        /// This attribute should be defined as a unique value. If the value of the type attribute is search, previous search term values will persist in the dropdown across page load.
        /// </summary>
        [Name("autosave")]
        public bool AutoSave;

        /// <summary>
        /// The current state of the element when type is checkbox or radio.
        /// </summary>
        public bool Checked;

        /// <summary>
        /// The default state of a radio button or checkbox as originally specified in HTML that created this object.
        /// </summary>
        public bool DefaultChecked;

        /// <summary>
        /// The default value as originally specified in HTML that created this object.
        /// </summary>
        public string DefaultValue;

        /// <summary>
        /// Reflects the disabled HTML attribute, indicating that the control is not available for interaction. The input values will not be submitted with the form. See also readonly
        /// </summary>
        public bool Disabled;

        /// <summary>
        /// A list of selected files.
        /// </summary>
        public readonly FileList Files;

        /// <summary>
        /// The containing form element, if this element is in a form. If this element is not contained in a form element:
        /// HTML5 this can be the id attribute of any &lt;form&gt; element in the same document. Even if the attribute is set on &lt;input&gt;, this property will be null, if it isn't the id of a &lt;form&gt; element.
        /// HTML 4 this must be null.
        /// </summary>
        public readonly HTMLFormElement Form;

        /// <summary>
        /// Reflects the formaction HTML attribute, containing the URI of a program that processes information submitted by the element. If specified, this attribute overrides the action attribute of the &lt;form&gt; element that owns this element.
        /// </summary>
        public string FormAction;

        /// <summary>
        /// Reflects the formenctype HTML attribute, containing the type of content that is used to submit the form to the server. If specified, this attribute overrides the enctype attribute of the &lt;form&gt; element that owns this element.
        /// </summary>
        public string FormEncType;

        /// <summary>
        /// Reflects the formmethod HTML attribute, containing the HTTP method that the browser uses to submit the form. If specified, this attribute overrides the method attribute of the &lt;form&gt; element that owns this element.
        /// </summary>
        public string FormMethod;

        /// <summary>
        /// Reflects the formnovalidate HTML attribute, indicating that the form is not to be validated when it is submitted. If specified, this attribute overrides the novalidate attribute of the &lt;form&gt; element that owns this element.
        /// </summary>
        public bool FormNoValidate;

        /// <summary>
        /// Reflects the formtarget HTML attribute, containing a name or keyword indicating where to display the response that is received after submitting the form. If specified, this attribute overrides the target attribute of the form element that owns this element.
        /// </summary>
        public string FormTarget;

        /// <summary>
        /// Reflects the height HTML attribute, which defines the height of the image displayed for the button, if the value of type is image.
        /// </summary>
        public int Height;

        /// <summary>
        /// Indicates that a checkbox is neither on nor off.
        /// </summary>
        public bool Indeterminate;

        /// <summary>
        /// A list of &lt;label&gt; elements that are labels for this element.
        /// </summary>
        public readonly NodeList Labels;

        /// <summary>
        /// Identifies a list of pre-defined options to suggest to the user. The value must be the id of a &lt;datalist&gt; element in the same document. The browser displays only options that are valid values for this input element. This attribute is ignored when the type attribute's value is hidden, checkbox, radio, file, or a button type.
        /// </summary>
        public HTMLElement List;

        /// <summary>
        /// Reflects the max HTML attribute, containing the maximum (numeric or date-time) value for this item, which must not be less than its minimum (min attribute) value.
        /// </summary>
        public string Max;

        /// <summary>
        /// Reflects the maxlength HTML attribute, containing the maximum length of text (in Unicode code points) that the value can be changed to. The constraint is evaluated only when the value is changed
        /// </summary>
        public int MaxLength;

        /// <summary>
        /// Reflects the min HTML attribute, containing the minimum (numeric or date-time) value for this item, which must not be greater than its maximum (max attribute) value.
        /// </summary>
        public string Min;

        /// <summary>
        /// Reflects the multiple HTML attribute, indicating whether more than one value is possible (e.g., multiple files).
        /// </summary>
        public bool Multiple;

        /// <summary>
        /// Reflects the name HTML attribute, containing a name that identifies the element when submitting the form.
        /// </summary>
        public string Name;

        /// <summary>
        /// Reflects the pattern HTML attribute, containing a regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored.
        /// </summary>
        public string Pattern;

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
        /// Reflects the size HTML attribute, containing size of the control. This value is in pixels unless the value of type is text or password, in which case, it is an integer number of characters. HTML5 Applies only when type is set to text, search, tel, url, email, or password; otherwise it is ignored.
        /// </summary>
        public int Size;

        /// <summary>
        /// Reflects the src HTML attribute, which specifies a URI for the location of an image to display on the graphical submit button, if the value of type is image; otherwise it is ignored.
        /// </summary>
        public string Src;

        /// <summary>
        /// Reflects the step HTML attribute, which works with min and max to limit the increments at which a numeric or date-time value can be set. It can be the string any or a positive floating point number. If this is not set to any, the control accepts only values at multiples of the step value greater than the minimum.
        /// </summary>
        public string Step;

        /// <summary>
        /// The position of the element in the tabbing navigation order for the current document.
        /// </summary>
        public new int TabIndex;

        /// <summary>
        /// Reflects the type HTML attribute, indicating the type of control to display.
        /// </summary>
        public InputType Type;

        /// <summary>
        /// A client-side image map.
        /// </summary>
        public string UseMap;

        /// <summary>
        /// A localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (willvalidate is false), or it satisfies its constraints.
        /// </summary>
        public readonly string ValidationMessage;

        /// <summary>
        /// The validity state that this element is in.
        /// </summary>
        public readonly ValidityState Validity;

        /// <summary>
        /// Current value in the control.
        /// </summary>
        public string Value;

        /// <summary>
        /// The value of the element, interpreted as a date, or null if conversion is not possible.
        /// </summary>
        public Date ValueAsDate;

        /// <summary>
        /// The value of the element, interpreted as one of the following in order:
        /// a time value
        /// a number
        /// null if conversion is not possible
        /// </summary>
        public double ValueAsNumber;

        /// <summary>
        /// Reflects the width HTML attribute, which defines the width of the image displayed for the button, if the value of type is image.
        /// </summary>
        public int Width;

        /// <summary>
        /// Indicates whether the element is a candidate for constraint validation. It is false if any conditions bar it from constraint validation.
        /// </summary>
        public readonly bool WillValidate;

        /// <summary>
        /// Removes focus from input; keystrokes will subsequently go nowhere.
        /// </summary>
        public new extern void Blur();

        /// <summary>
        /// Returns false if the element is a candidate for constraint validation, and it does not satisfy its constraints. In this case, it also fires an invalid event at the element. It returns true if the element is not a candidate for constraint validation, or if it satisfies its constraints.
        /// </summary>
        /// <returns></returns>
        public extern bool CheckValidity();

        /// <summary>
        /// Simulates a click on the element.
        /// </summary>
        public new extern void Click();

        /// <summary>
        /// Focus on input; keystrokes will subsequently go to this element.
        /// </summary>
        public new extern void Focus();

        /// <summary>
        /// Selects the input text in the element, and focuses it so the user can subsequently replace the whole entry.
        /// </summary>
        public extern void Select();

        /// <summary>
        /// Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.
        /// </summary>
        /// <param name="error">The custom validity message</param>
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

        /// <summary>
        /// Decrements the value by (step * n), where n defaults to 1 if not specified. Throws an INVALID_STATE_ERR exception:
        /// if the method is not applicable to for the current type value.
        /// if the element has no step value.
        /// if the value cannot be converted to a number.
        /// if the resulting value is above the max or below the min.
        /// </summary>
        public extern void StepDown();

        /// <summary>
        /// Decrements the value by (step * n), where n defaults to 1 if not specified. Throws an INVALID_STATE_ERR exception:
        /// if the method is not applicable to for the current type value.
        /// if the element has no step value.
        /// if the value cannot be converted to a number.
        /// if the resulting value is above the max or below the min.
        /// </summary>
        public extern void StepDown(int n);

        /// <summary>
        /// Increments the value by (step * n), where n defaults to 1 if not specified. Throws an INVALID_STATE_ERR exception:
        /// if the method is not applicable to for the current type value.
        /// if the element has no step value.
        /// if the value cannot be converted to a number.
        /// if the resulting value is above the max or below the min.
        /// </summary>
        public extern void StepUp();

        /// <summary>
        /// Increments the value by (step * n), where n defaults to 1 if not specified. Throws an INVALID_STATE_ERR exception:
        /// if the method is not applicable to for the current type value.
        /// if the element has no step value.
        /// if the value cannot be converted to a number.
        /// if the resulting value is above the max or below the min.
        /// </summary>
        public extern void StepUp(int n);
    }

    /// <summary>
    ///
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum AutoComplete
    {
        /// <summary>
        /// The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.
        /// </summary>
        Off,

        /// <summary>
        /// The browser can automatically complete the value based on values that the user has entered during previous uses.
        /// </summary>
        On
    }
}