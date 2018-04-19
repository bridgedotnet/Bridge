namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Specifies the minimum length of collection/string data allowed in a property.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter,
        AllowMultiple = false)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public class MinLengthAttribute : ValidationAttribute
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MinLengthAttribute" /> class.
        /// </summary>
        /// <param name="length">
        /// The minimum allowable length of collection/string data.
        /// Value must be greater than or equal to zero.
        /// </param>
        public extern MinLengthAttribute(int length);

        /// <summary>
        /// Gets the minimum allowable length of the collection/string data.
        /// </summary>
        public extern int Length { get; }

        /// <summary>
        /// Determines whether a specified object is valid. (Overrides <see cref="ValidationAttribute.IsValid(object)" />)
        /// </summary>
        /// <param name="value">The object to validate.</param>
        /// <exception cref="InvalidOperationException">Length is less than zero.</exception>
        public override extern bool IsValid(object value);

        /// <summary>
        /// Applies formatting to a specified error message. (Overrides <see cref="ValidationAttribute.FormatErrorMessage" />)
        /// </summary>
        /// <param name="name">The name to include in the formatted string.</param>
        /// <returns>A localized string to describe the minimum acceptable length.</returns>
        public override extern string FormatErrorMessage(string name);
    }
}
