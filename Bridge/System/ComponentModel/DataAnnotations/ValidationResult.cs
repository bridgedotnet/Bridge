using System.Collections.Generic;

namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Container class for the results of a validation request.
    /// <para>
    ///     Use the static <see cref="ValidationResult.Success" /> to represent successful validation.
    /// </para>
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public class ValidationResult
    {
        /// <summary>
        /// Gets a <see cref="ValidationResult" /> that indicates Success.
        /// </summary>
        public static readonly ValidationResult Success;

        /// <summary>
        /// Constructor that accepts an error message.  This error message would override any error message
        /// provided on the <see cref="ValidationAttribute" />.
        /// </summary>
        /// <param name="errorMessage">
        /// The user-visible error message.  If null, <see cref="ValidationAttribute.GetValidationResult" />
        /// will use <see cref="ValidationAttribute.FormatErrorMessage" /> for its error message.
        /// </param>
        public extern ValidationResult(string errorMessage);

        /// <summary>
        /// Constructor that accepts an error message as well as a list of member names involved in the validation.
        /// This error message would override any error message provided on the <see cref="ValidationAttribute" />.
        /// </summary>
        /// <param name="errorMessage">
        /// The user-visible error message.  If null, <see cref="ValidationAttribute.GetValidationResult" />
        /// will use <see cref="ValidationAttribute.FormatErrorMessage" /> for its error message.
        /// </param>
        /// <param name="memberNames">
        /// The list of member names affected by this result.
        /// This list of member names is meant to be used by presentation layers to indicate which fields are in error.
        /// </param>
        public extern ValidationResult(string errorMessage, IEnumerable<string> memberNames);

        /// <summary>
        /// Constructor that creates a copy of an existing ValidationResult.
        /// </summary>
        /// <param name="validationResult">The validation result.</param>
        /// <exception cref="System.ArgumentNullException">The <paramref name="validationResult" /> is null.</exception>
        protected extern ValidationResult(ValidationResult validationResult);

        /// <summary>
        /// Gets the collection of member names affected by this result.  The collection may be empty but will never be null.
        /// </summary>
        public extern IEnumerable<string> MemberNames { get; }

        /// <summary>
        /// Gets the error message for this result.  It may be null.
        /// </summary>
        public extern string ErrorMessage { get; set; }
    }
}
