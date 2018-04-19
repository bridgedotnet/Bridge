using System.Collections.Generic;

namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Helper class to validate objects, properties and other values using their associated
    /// <see cref="ValidationAttribute" /> custom attributes.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public static class Validator
    {
        /// <summary>
        /// Tests whether the given property value is valid.
        /// </summary>
        /// <param name="value">The value to test.</param>
        /// <param name="validationContext">
        /// Describes the property member to validate and provides services and context for the
        /// validators.
        /// </param>
        /// <param name="validationResults">Optional collection to receive <see cref="ValidationResult" />s for the failures.</param>
        /// <exception cref="ArgumentException">
        /// When the <see cref="ValidationContext.MemberName" /> of <paramref name="validationContext" /> is not a valid
        /// property.
        /// </exception>
        public static extern bool TryValidateProperty(object value, ValidationContext validationContext,
            ICollection<ValidationResult> validationResults);

        /// <summary>
        /// Tests whether the given object instance is valid.
        /// </summary>
        /// <param name="instance">The object instance to test.  It cannot be <c>null</c>.</param>
        /// <param name="validationContext">Describes the object to validate and provides services and context for the validators.</param>
        /// <param name="validationResults">Optional collection to receive <see cref="ValidationResult" />s for the failures.</param>
        /// <exception cref="ArgumentNullException">When <paramref name="instance" /> is null.</exception>
        /// <exception cref="ArgumentException">
        /// When <paramref name="instance" /> doesn't match the
        /// <see cref="ValidationContext.ObjectInstance" />on <paramref name="validationContext" />.
        /// </exception>
        public static extern bool TryValidateObject(object instance, ValidationContext validationContext,
            ICollection<ValidationResult> validationResults);

        /// <summary>
        /// Tests whether the given object instance is valid.
        /// </summary>
        /// <param name="instance">The object instance to test.  It cannot be null.</param>
        /// <param name="validationContext">Describes the object to validate and provides services and context for the validators.</param>
        /// <param name="validationResults">Optional collection to receive <see cref="ValidationResult" />s for the failures.</param>
        /// <param name="validateAllProperties">
        /// If <c>true</c>, also evaluates all properties of the object (this process is not
        /// recursive over properties of the properties).
        /// </param>
        /// <exception cref="ArgumentNullException">When <paramref name="instance" /> is null.</exception>
        /// <exception cref="ArgumentException">
        /// When <paramref name="instance" /> doesn't match the
        /// <see cref="ValidationContext.ObjectInstance" />on <paramref name="validationContext" />.
        /// </exception>
        public static extern bool TryValidateObject(object instance, ValidationContext validationContext,
            ICollection<ValidationResult> validationResults, bool validateAllProperties);

        /// <summary>
        /// Tests whether the given value is valid against a specified list of <see cref="ValidationAttribute" />s.
        /// </summary>
        /// <param name="value">The value to test.  It cannot be null.</param>
        /// <param name="validationContext">
        /// Describes the object being validated and provides services and context for the
        /// validators.
        /// </param>
        /// <param name="validationResults">Optional collection to receive <see cref="ValidationResult" />s for the failures.</param>
        /// <param name="validationAttributes">
        /// The list of <see cref="ValidationAttribute" />s to validate this
        /// <paramref name="value" /> against.
        /// </param>
        public static extern bool TryValidateValue(object value, ValidationContext validationContext,
            ICollection<ValidationResult> validationResults, IEnumerable<ValidationAttribute> validationAttributes);

        /// <summary>
        /// Throws a <see cref="ValidationException" /> if the given property <paramref name="value" /> is not valid.
        /// </summary>
        /// <param name="value">The value to test.</param>
        /// <param name="validationContext">
        /// Describes the object being validated and provides services and context for the
        /// validators.  It cannot be <c>null</c>.
        /// </param>
        /// <exception cref="ArgumentNullException">When <paramref name="validationContext" /> is null.</exception>
        /// <exception cref="ValidationException">When <paramref name="value" /> is invalid for this property.</exception>
        public static extern void ValidateProperty(object value, ValidationContext validationContext);

        /// <summary>
        /// Throws a <see cref="ValidationException" /> if the given <paramref name="instance" /> is not valid.
        /// </summary>
        /// <param name="instance">The object instance to test.  It cannot be null.</param>
        /// <param name="validationContext">
        /// Describes the object being validated and provides services and context for the
        /// validators.  It cannot be <c>null</c>.
        /// </param>
        /// <exception cref="ArgumentNullException">When <paramref name="instance" /> is null.</exception>
        /// <exception cref="ArgumentNullException">When <paramref name="validationContext" /> is null.</exception>
        /// <exception cref="ArgumentException">
        /// When <paramref name="instance" /> doesn't match the
        /// <see cref="ValidationContext.ObjectInstance" /> on <paramref name="validationContext" />.
        /// </exception>
        /// <exception cref="ValidationException">When <paramref name="instance" /> is found to be invalid.</exception>
        public static extern void ValidateObject(object instance, ValidationContext validationContext);

        /// <summary>
        /// Throws a <see cref="ValidationException" /> if the given object instance is not valid.
        /// </summary>
        /// <param name="instance">The object instance to test.  It cannot be null.</param>
        /// <param name="validationContext">
        /// Describes the object being validated and provides services and context for the
        /// validators.  It cannot be <c>null</c>.
        /// </param>
        /// <param name="validateAllProperties">If <c>true</c>, also validates all the <paramref name="instance" />'s properties.</param>
        /// <exception cref="ArgumentNullException">When <paramref name="instance" /> is null.</exception>
        /// <exception cref="ArgumentNullException">When <paramref name="validationContext" /> is null.</exception>
        /// <exception cref="ArgumentException">
        /// When <paramref name="instance" /> doesn't match the
        /// <see cref="ValidationContext.ObjectInstance" /> on <paramref name="validationContext" />.
        /// </exception>
        /// <exception cref="ValidationException">When <paramref name="instance" /> is found to be invalid.</exception>
        public static extern void ValidateObject(object instance, ValidationContext validationContext,
            bool validateAllProperties);

        /// <summary>
        /// Throw a <see cref="ValidationException" /> if the given value is not valid for the
        /// <see cref="ValidationAttribute" />s.
        /// </summary>
        /// <param name="value">The value to test.  It cannot be null.</param>
        /// <param name="validationContext">Describes the object being tested.</param>
        /// <param name="validationAttributes">The list of <see cref="ValidationAttribute" />s to validate against this instance.</param>
        /// <exception cref="ArgumentNullException">When <paramref name="validationContext" /> is null.</exception>
        /// <exception cref="ValidationException">When <paramref name="value" /> is found to be invalid.</exception>
        public static extern void ValidateValue(object value, ValidationContext validationContext,
            IEnumerable<ValidationAttribute> validationAttributes);
    }
}
