namespace Bridge.Html5
{
    /// <summary>
    /// The type of control to display.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum InputType
    {
        /// <summary>
        ///  A push button with no default behavior.
        /// </summary>
        Button,

        /// <summary>
        ///  A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox).
        /// </summary>
        Checkbox,

        /// <summary>
        ///  HTML5 A control for specifying a color. A color picker's UI has no required features other than accepting simple colors as text (more info).
        /// </summary>
        Color,

        /// <summary>
        ///  HTML5 A control for entering a date (year, month, and day, with no time).
        /// </summary>
        Date,

        /// <summary>
        ///  HTML5 A control for entering a date and time (hour, minute, second, and fraction of a second) based on UTC time zone.
        /// </summary>
        DateTime,

        /// <summary>
        ///  HTML5 A control for entering a date and time, with no time zone.
        /// </summary>
        [Name("datetime-local")]
        DateTimeLocal,

        /// <summary>
        ///  HTML5 A field for editing an e-mail address. The input value is validated to contain either the empty string or a single valid e-mail address before submitting. The :valid and :invalid CSS pseudo-classes are applied as appropriate.
        /// </summary>
        Email,

        /// <summary>
        ///  A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.
        /// </summary>
        File,

        /// <summary>
        ///  A control that is not displayed, but whose value is submitted to the server.
        /// </summary>
        Hidden,

        /// <summary>
        ///  A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels.
        /// </summary>
        Image,

        /// <summary>
        ///  HTML5 A control for entering a month and year, with no time zone.
        /// </summary>
        Month,

        /// <summary>
        ///  HTML5 A control for entering a floating point number.
        /// </summary>
        Number,

        /// <summary>
        ///  A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered.
        /// </summary>
        Password,

        /// <summary>
        ///  A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at one time.
        /// </summary>
        Radio,

        /// <summary>
        ///  HTML5 A control for entering a number whose exact value is not important.
        /// </summary>
        Range,

        /// <summary>
        ///  A button that resets the contents of the form to default values.
        /// </summary>
        Reset,

        /// <summary>
        ///  HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value.
        /// </summary>
        Search,

        /// <summary>
        ///  A button that submits the form.
        /// </summary>
        Submit,

        /// <summary>
        ///  HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate.
        /// </summary>
        Tel,

        /// <summary>
        ///  A single-line text field; line-breaks are automatically removed from the input value.
        /// </summary>
        Text,

        /// <summary>
        ///  HTML5 A control for entering a time value with no time zone.
        /// </summary>
        Time,

        /// <summary>
        ///  HTML5 A field for editing a URL. The input value is validated to contain either the empty string or a valid absolute URL before submitting. Line-breaks and leading or trailing whitespace are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate.
        /// </summary>
        Url,

        /// <summary>
        ///  HTML5 A control for entering a date consisting of a week-year number and a week number with no time zone.
        /// </summary>
        Week
    }
}
