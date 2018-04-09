namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Exception used for validation using <see cref="ValidationAttribute" />.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Serializable]
    [Bridge.External]
    [Bridge.NonScriptable]
    public class ValidationException : Exception
    {
        /// <summary>
        /// Constructor that accepts a structured <see cref="ValidationResult" /> describing the problem.
        /// </summary>
        /// <param name="validationResult">The value describing the validation error</param>
        /// <param name="validatingAttribute">The attribute that triggered this exception</param>
        /// <param name="value">The value that caused the validating attribute to trigger the exception</param>
        public extern ValidationException(ValidationResult validationResult, ValidationAttribute validatingAttribute,
            object value);

        /// <summary>
        /// Constructor that accepts an error message, the failing attribute, and the invalid value.
        /// </summary>
        /// <param name="errorMessage">The localized error message</param>
        /// <param name="validatingAttribute">The attribute that triggered this exception</param>
        /// <param name="value">The value that caused the validating attribute to trigger the exception</param>
        public extern ValidationException(string errorMessage, ValidationAttribute validatingAttribute, object value);

        /// <summary>
        /// Default constructor.
        /// </summary>
        public extern ValidationException();

        /// <summary>
        /// Constructor that accepts only a localized message
        /// </summary>
        /// <param name="message">The localized message</param>
        public extern ValidationException(string message);

        /// <summary>
        /// Constructor that accepts a localized message and an inner exception
        /// </summary>
        /// <param name="message">The localized error message</param>
        /// <param name="innerException">inner exception</param>
        public extern ValidationException(string message, Exception innerException);

        /// <summary>
        /// Gets the <see>ValidationAttribute</see> instance that triggered this exception.
        /// </summary>
        public extern ValidationAttribute ValidationAttribute { get; }

        /// <summary>
        /// Gets the <see cref="ValidationResult" /> instance that describes the validation error.
        /// </summary>
        public extern ValidationResult ValidationResult { get; }

        /// <summary>
        /// Gets the value that caused the validating attribute to trigger the exception
        /// </summary>
        public extern object Value { get; }
    }
}
