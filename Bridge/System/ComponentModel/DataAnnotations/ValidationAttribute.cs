using Bridge;

namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Base class for all validation attributes.
    /// <para>Override <see cref="IsValid(object, ValidationContext)" /> to implement validation logic.</para>
    /// </summary>
    [External]
    [NonScriptable]
    public abstract class ValidationAttribute : Attribute
    {
        /// <summary>
        /// Default constructor for any validation attribute.
        /// </summary>
        protected extern ValidationAttribute();

        /// <summary>
        /// Constructor that accepts a fixed validation error message.
        /// </summary>
        /// <param name="errorMessage">A non-localized error message to use in <see cref="ErrorMessageString" />.</param>
        protected extern ValidationAttribute(string errorMessage);

        /// <summary>
        /// Allows for providing a resource accessor function that will be used by the <see cref="ErrorMessageString" />
        /// property to retrieve the error message.  An example would be to have something like
        /// CustomAttribute() : base( () =&gt; MyResources.MyErrorMessage ) { }.
        /// </summary>
        /// <param name="errorMessageAccessor">The <see cref="Func{T}" /> that will return an error message.</param>
        protected extern ValidationAttribute(Func<string> errorMessageAccessor);

        /// <summary>
        /// Gets the localized error message string, coming either from <see cref="ErrorMessage" />, or from evaluating the
        /// <see cref="ErrorMessageResourceType" /> and <see cref="ErrorMessageResourceName" /> pair.
        /// </summary>
        protected extern string ErrorMessageString { get; }

        /// <summary>
        /// A flag indicating that the attribute requires a non-null
        /// <see cref="ValidationContext" /> to perform validation.
        /// Base class returns false. Override in child classes as appropriate.
        /// </summary>
        public virtual extern bool RequiresValidationContext { get; }

        /// <summary>
        /// Gets or sets the explicit error message string.
        /// </summary>
        public extern string ErrorMessage { get; set; }

        /// <summary>
        /// Gets or sets the resource name (property name) to use as the key for lookups on the resource type.
        /// </summary>
        public extern string ErrorMessageResourceName { get; set; }

        /// <summary>
        /// Gets or sets the resource type to use for error message lookups.
        /// </summary>
        public extern Type ErrorMessageResourceType { get; set; }

        /// <summary>
        /// Formats the error message to present to the user.
        /// </summary>
        /// <param name="name">The user-visible name to include in the formatted message.</param>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is malformed.</exception>
        public virtual extern string FormatErrorMessage(string name);

        /// <summary>
        /// Gets the value indicating whether or not the specified <paramref name="value" /> is valid
        /// with respect to the current validation attribute.
        /// <para>
        ///     Derived classes should not override this method as it is only available for backwards compatibility.
        ///     Instead, implement <see cref="IsValid(object, ValidationContext)" />.
        /// </para>
        /// </summary>
        /// <param name="value">The value to validate</param>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is malformed.</exception>
        /// <exception cref="NotImplementedException">
        /// is thrown when neither overload of IsValid has been implemented by a derived class.
        /// </exception>
        public virtual extern bool IsValid(object value);

        /// <summary>
        /// Protected virtual method to override and implement validation logic.
        /// <para>
        ///     Derived classes should override this method instead of <see cref="IsValid(object)" />, which is deprecated.
        /// </para>
        /// </summary>
        /// <param name="value">The value to validate.</param>
        /// <param name="validationContext">
        /// A <see cref="ValidationContext" /> instance that provides
        /// context about the validation operation, such as the object and member being validated.
        /// </param>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is malformed.</exception>
        /// <exception cref="NotImplementedException">
        /// is thrown when <see cref="IsValid(object, ValidationContext)" />
        /// has not been implemented by a derived class.
        /// </exception>
        protected virtual extern ValidationResult IsValid(object value, ValidationContext validationContext);

        /// <summary>
        /// Tests whether the given <paramref name="value" /> is valid with respect to the current
        /// validation attribute without throwing a <see cref="ValidationException" />
        /// </summary>
        /// <param name="value">The value to validate</param>
        /// <param name="validationContext">
        /// A <see cref="ValidationContext" /> instance that provides
        /// context about the validation operation, such as the object and member being validated.
        /// </param>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is malformed.</exception>
        /// <exception cref="ArgumentNullException">When <paramref name="validationContext" /> is null.</exception>
        /// <exception cref="NotImplementedException">
        /// is thrown when <see cref="IsValid(object, ValidationContext)" />
        /// has not been implemented by a derived class.
        /// </exception>
        public extern ValidationResult GetValidationResult(object value, ValidationContext validationContext);

        /// <summary>
        /// Validates the specified <paramref name="value" /> and throws <see cref="ValidationException" /> if it is not.
        /// <para>
        ///     The overloaded <see cref="Validate(object, ValidationContext)" /> is the recommended entry point as it
        ///     can provide additional context to the <see cref="ValidationAttribute" /> being validated.
        /// </para>
        /// </summary>
        /// <param name="value">The value to validate</param>
        /// <param name="name">The string to be included in the validation error message if <paramref name="value" /> is not valid</param>
        /// <exception cref="ValidationException">
        /// is thrown if <see cref="IsValid(object)" /> returns <c>false</c>.
        /// </exception>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is malformed.</exception>
        public extern void Validate(object value, string name);

        /// <summary>
        /// Validates the specified <paramref name="value" /> and throws <see cref="ValidationException" /> if it is not.
        /// </summary>
        /// <param name="value">The value to validate</param>
        /// <param name="validationContext">Additional context that may be used for validation.  It cannot be null.</param>
        /// <exception cref="ValidationException">
        /// is thrown if <see cref="IsValid(object, ValidationContext)" />
        /// doesn't return <see cref="ValidationResult.Success" />.
        /// </exception>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is malformed.</exception>
        /// <exception cref="NotImplementedException">
        /// is thrown when <see cref="IsValid(object, ValidationContext)" />
        /// has not been implemented by a derived class.
        /// </exception>
        public extern void Validate(object value, ValidationContext validationContext);
    }
}
