namespace Bridge.Html5
{
    /// <summary>
    /// The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum TextTransform
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// Is a keyword forcing the first letter of each word to be converted to uppercase.
        /// </summary>
        Capitalize,

        /// <summary>
        /// Is a keyword forcing all characters to be converted to uppercase.
        /// </summary>
        UpperCase,

        /// <summary>
        /// Is a keyword forcing all characters to be converted to lowercase.
        /// </summary>
        LowerCase,

        /// <summary>
        /// Is a keyword preventing the case of all characters to be changed.
        /// </summary>
        None,

        /// <summary>
        /// Is a keyword forcing the writing of a character, mainly ideograms and latin scripts inside a square, allowing them to be aligned in the usual East Asian scripts (like Chinese or Japanese).
        /// </summary>
        [Name("full-width")]
        FullWidth
    }
}
