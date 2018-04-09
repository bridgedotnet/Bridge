namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Regular expression validation attribute
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter,
        AllowMultiple = false)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public class RegularExpressionAttribute : ValidationAttribute
    {
        /// <summary>
        /// Constructor that accepts the regular expression pattern
        /// </summary>
        /// <param name="pattern">The regular expression to use.  It cannot be null.</param>
        public extern RegularExpressionAttribute(string pattern);

        /// <summary>
        /// Gets or sets the timeout to use when matching the regular expression pattern (in milliseconds)
        /// (-1 means never timeout).
        /// </summary>
        public extern int MatchTimeoutInMilliseconds { get; set; }

        /// <summary>
        /// Gets the regular expression pattern to use
        /// </summary>
        public extern string Pattern { get; }

        /// <summary>
        /// Override of <see cref="ValidationAttribute.IsValid(object)" />
        /// </summary>
        /// <param name="value">The value to test for validity.</param>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is ill-formed.</exception>
        /// <exception cref="ArgumentException"> is thrown if the <see cref="Pattern" /> is not a valid regular expression.</exception>
        public override extern bool IsValid(object value);

        /// <summary>
        /// Override of <see cref="ValidationAttribute.FormatErrorMessage" />
        /// </summary>
        /// <param name="name">The user-visible name to include in the formatted message.</param>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is ill-formed.</exception>
        /// <exception cref="ArgumentException"> is thrown if the <see cref="Pattern" /> is not a valid regular expression.</exception>
        public override extern string FormatErrorMessage(string name);
    }
}
