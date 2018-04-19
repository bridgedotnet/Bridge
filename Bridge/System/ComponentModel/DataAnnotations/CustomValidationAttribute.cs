namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Validation attribute that executes a user-supplied method at runtime, using one of these signatures:
    /// <para>
    ///     public static <see cref="ValidationResult" /> Method(object value) { ... }
    /// </para>
    /// <para>
    ///     public static <see cref="ValidationResult" /> Method(object value, <see cref="ValidationContext" /> context) {
    ///     ... }
    /// </para>
    /// <para>
    ///     The value can be strongly typed as type conversion will be attempted.
    /// </para>
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(
        AttributeTargets.Class | AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Method |
        AttributeTargets.Parameter, AllowMultiple = true)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class CustomValidationAttribute : ValidationAttribute
    {
        /// <summary>
        /// Instantiates a custom validation attribute that will invoke a method in the
        /// specified type.
        /// </summary>
        /// <param name="validatorType">
        /// The type that will contain the method to invoke. It cannot be null. See <see cref="Method" />.
        /// </param>
        /// <param name="method">The name of the method to invoke in <paramref name="validatorType" />.</param>
        public extern CustomValidationAttribute(Type validatorType, string method);

        /// <summary>
        /// Gets the type that contains the validation method identified by <see cref="Method" />.
        /// </summary>
        public extern Type ValidatorType { get; }

        /// <summary>
        /// Gets the name of the method in <see cref="ValidatorType" /> to invoke to perform validation.
        /// </summary>
        public extern string Method { get; }

        /// <summary>
        /// Override of validation method.  See <see cref="ValidationAttribute.IsValid(object, ValidationContext)" />.
        /// </summary>
        /// <param name="value">The value to validate.</param>
        /// <param name="validationContext">
        /// A <see cref="ValidationContext" /> instance that provides
        /// context about the validation operation, such as the object and member being validated.
        /// </param>
        /// <returns>Whatever the <see cref="Method" /> in <see cref="ValidatorType" /> returns.</returns>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is malformed.</exception>
        protected override extern ValidationResult IsValid(object value, ValidationContext validationContext);

        /// <summary>
        /// Override of <see cref="ValidationAttribute.FormatErrorMessage" />
        /// </summary>
        /// <param name="name">The name to include in the formatted string</param>
        /// <returns>A localized string to describe the problem.</returns>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is malformed.</exception>
        public override extern string FormatErrorMessage(string name);
    }
}
