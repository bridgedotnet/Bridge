namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Specifies the maximum length of collection/string data allowed in a property.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter,
        AllowMultiple = false)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public class MaxLengthAttribute : ValidationAttribute
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MaxLengthAttribute" /> class.
        /// </summary>
        /// <param name="length">
        /// The maximum allowable length of collection/string data.
        /// Value must be greater than zero.
        /// </param>
        public extern MaxLengthAttribute(int length);

        /// <summary>
        /// Initializes a new instance of the <see cref="MaxLengthAttribute" /> class.
        /// The maximum allowable length supported by the database will be used.
        /// </summary>
        public extern MaxLengthAttribute();

        /// <summary>
        /// Gets the maximum allowable length of the collection/string data.
        /// </summary>
        public extern int Length { get; }

        /// <summary>
        /// Determines whether a specified object is valid. (Overrides <see cref="ValidationAttribute.IsValid(object)" />)
        /// </summary>
        /// <param name="value">The object to validate.</param>
        /// <exception cref="InvalidOperationException">Length is zero or less than negative one.</exception>
        public override extern bool IsValid(object value);

        /// <summary>
        /// Applies formatting to a specified error message. (Overrides <see cref="ValidationAttribute.FormatErrorMessage" />)
        /// </summary>
        /// <param name="name">The name to include in the formatted string.</param>
        public override extern string FormatErrorMessage(string name);
    }
}
