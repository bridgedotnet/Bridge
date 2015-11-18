namespace Bridge.Html5
{
    /// <summary>
    /// Indicates the behavior of the button.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum ButtonType
    {
        /// <summary>
        /// The button submits the form. This is the default value if the attribute is not specified, HTML5 or if it is dynamically changed to an empty or invalid value.
        /// </summary>
        Submit,

        /// <summary>
        /// The button resets the form.
        /// </summary>
        Reset,

        /// <summary>
        /// The button does nothing.
        /// </summary>
        Button,

        /// <summary>
        /// The button displays a menu.
        /// </summary>
        Menu
    }
}
