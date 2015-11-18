namespace Bridge.Html5
{
    /// <summary>
    /// The ime-mode CSS property controls the state of the input method editor for text fields.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum ImeMode
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// No change is made to the current input method editor state. This is the default.
        /// </summary>
        Auto,

        /// <summary>
        /// The IME state should be normal; this value can be used in a user style sheet to override the page setting. This value is not supported by Internet Explorer.
        /// </summary>
        Normal,

        /// <summary>
        /// The input method editor is initially active; text entry is performed using it unless the user specifically dismisses it. Not supported on Linux.
        /// </summary>
        Active,

        /// <summary>
        /// The input method editor is initially inactive, but the user may activate it if they wish. Not supported on Linux.
        /// </summary>
        Inactive,

        /// <summary>
        /// The input method editor is disabled and may not be activated by the user.
        /// </summary>
        Disabled
    }
}
