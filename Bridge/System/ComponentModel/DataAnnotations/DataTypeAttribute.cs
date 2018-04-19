namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Allows for clarification of the <see cref="DataType" /> represented by a given
    /// property (such as <see cref="System.ComponentModel.DataAnnotations.DataType.PhoneNumber" />
    /// or <see cref="System.ComponentModel.DataAnnotations.DataType.Url" />)
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(
        AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Method | AttributeTargets.Parameter,
        AllowMultiple = false)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public class DataTypeAttribute : ValidationAttribute
    {
        /// <summary>
        /// Constructor that accepts a data type enumeration
        /// </summary>
        /// <param name="dataType">The <see cref="DataType" /> enum value indicating the type to apply.</param>
        public extern DataTypeAttribute(DataType dataType);

        /// <summary>
        /// Constructor that accepts the string name of a custom data type
        /// </summary>
        /// <param name="customDataType">The string name of the custom data type.</param>
        public extern DataTypeAttribute(string customDataType);

        /// <summary>
        /// Gets the DataType. If it equals DataType.Custom, <see cref="CustomDataType" /> should also be retrieved.
        /// </summary>
        public extern DataType DataType { get; }

        /// <summary>
        /// Gets the string representing a custom data type. Returns a non-null value only if <see cref="DataType" /> is
        /// DataType.Custom.
        /// </summary>
        public extern string CustomDataType { get; }

        /// <summary>
        /// Gets the default display format that gets used along with this DataType.
        /// </summary>
        public extern DisplayFormatAttribute DisplayFormat { get; protected set; }

        /// <summary>
        /// Return the name of the data type, either using the <see cref="DataType" /> enum or <see cref="CustomDataType" />
        /// string
        /// </summary>
        /// <returns>The name of the data type enum</returns>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is ill-formed.</exception>
        public virtual extern string GetDataTypeName();

        /// <summary>
        /// Override of <see cref="ValidationAttribute.IsValid(object)" />
        /// </summary>
        /// <remarks>This override always returns <c>true</c>.  Subclasses should override this to provide the correct result.</remarks>
        /// <param name="value">The value to validate</param>
        /// <returns>Unconditionally returns <c>true</c></returns>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is ill-formed.</exception>
        public override extern bool IsValid(object value);
    }
}
