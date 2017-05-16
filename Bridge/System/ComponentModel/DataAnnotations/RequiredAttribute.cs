using Bridge;

namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Validation attribute to indicate that a property field or parameter is required.
    /// </summary>
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter,
        AllowMultiple = false)]
    [External]
    [NonScriptable]
    public class RequiredAttribute : ValidationAttribute
    {
        /// <summary>
        /// Default constructor.
        /// </summary>
        /// <remarks>
        /// This constructor selects a reasonable default error message for
        /// <see cref="ValidationAttribute.FormatErrorMessage" />
        /// </remarks>
        public extern RequiredAttribute();

        /// <summary>
        /// Gets or sets a flag indicating whether the attribute should allow empty strings.
        /// </summary>
        public extern bool AllowEmptyStrings { get; set; }

        /// <summary>
        /// Override of <see cref="ValidationAttribute.IsValid(object)" />
        /// </summary>
        /// <param name="value">The value to test</param>
        public override extern bool IsValid(object value);
    }
}
