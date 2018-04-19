namespace System.Text.RegularExpressions
{
    /// <summary>
    /// Provides enumerated values to use to set regular expression options.
    /// </summary>
    [Bridge.External]
    [Bridge.Enum(Bridge.Emit.Value)]
    [Flags]
    public enum RegexOptions
    {
        /// <summary>
        /// Specifies that no options are set. For more information about the default behavior of the regular expression engine, see the "Default Options" section in the Regular Expression Options topic.
        /// </summary>
        None = 0x0000,

        /// <summary>
        /// Specifies case-insensitive matching. For more information, see the "Case-Insensitive Matching " section in the Regular Expression Options topic.
        /// </summary>
        IgnoreCase = 0x0001,

        /// <summary>
        /// Multiline mode. Changes the meaning of ^ and $ so they match at the beginning and end, respectively, of any line, and not just the beginning and end of the entire string. For more information, see the "Multiline Mode" section in the Regular Expression Options topic.
        /// </summary>
        Multiline = 0x0002,

        /// <summary>
        /// Specifies that the only valid captures are explicitly named or numbered groups of the form (?&lt;name&gt;…). This allows unnamed parentheses to act as noncapturing groups without the syntactic clumsiness of the expression (?:…). For more information, see the "Explicit Captures Only" section in the Regular Expression Options topic.
        /// </summary>
        ExplicitCapture = 0x0004,

        //#if !SILVERLIGHT || FEATURE_LEGACYNETCF
        //        /// <summary>
        //        /// Specifies that the regular expression is compiled to an assembly. This yields faster execution but increases startup time. This value should not be assigned to the Options property when calling the CompileToAssembly method. For more information, see the "Compiled Regular Expressions" section in the Regular Expression Options topic.
        //        /// </summary>
        //        Compiled = 0x0008,
        //#endif

        /// <summary>
        /// Specifies single-line mode. Changes the meaning of the dot (.) so it matches every character (instead of every character except \n). For more information, see the "Single-line Mode" section in the Regular Expression Options topic.
        /// </summary>
        Singleline = 0x0010,

        /// <summary>
        /// Eliminates unescaped white space from the pattern and enables comments marked with #. However, this value does not affect or eliminate white space in , numeric , or tokens that mark the beginning of individual . For more information, see the "Ignore White Space" section of the Regular Expression Options topic.
        /// </summary>
        IgnorePatternWhitespace = 0x0020,

        //        /// <summary>
        //        /// Specifies that the search will be from right to left instead of from left to right. For more information, see the "Right-to-Left Mode" section in the Regular Expression Options topic.
        //        /// </summary>
        //        RightToLeft = 0x0040,

        //        /// <summary>
        //        /// Enables ECMAScript-compliant behavior for the expression. This value can be used only in conjunction with the IgnoreCase, Multiline, and Compiled values. The use of this value with any other values results in an exception.
        //        /// For more information on the RegexOptions.ECMAScript option, see the "ECMAScript Matching Behavior" section in the Regular Expression Options topic.
        //        /// </summary>
        //        ECMAScript = 0x0100,

        //        /// <summary>
        //        /// Specifies that cultural differences in language is ignored. For more information, see the "Comparison Using the Invariant Culture" section in the Regular Expression Options topic.
        //        /// </summary>
        //        CultureInvariant = 0x0200,
    }
}