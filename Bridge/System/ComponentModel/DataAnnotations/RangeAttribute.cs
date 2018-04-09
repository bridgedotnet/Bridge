namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Used for specifying a range constraint
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter,
        AllowMultiple = false)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public class RangeAttribute : ValidationAttribute
    {
        /// <summary>
        /// Constructor that takes integer minimum and maximum values
        /// </summary>
        /// <param name="minimum">The minimum value, inclusive</param>
        /// <param name="maximum">The maximum value, inclusive</param>
        public extern RangeAttribute(int minimum, int maximum);

        /// <summary>
        /// Constructor that takes double minimum and maximum values
        /// </summary>
        /// <param name="minimum">The minimum value, inclusive</param>
        /// <param name="maximum">The maximum value, inclusive</param>
        public extern RangeAttribute(double minimum, double maximum);

        /// <summary>
        /// Allows for specifying range for arbitrary types. The minimum and maximum strings
        /// will be converted to the target type.
        /// </summary>
        /// <param name="type">The type of the range parameters. Must implement IComparable.</param>
        /// <param name="minimum">The minimum allowable value.</param>
        /// <param name="maximum">The maximum allowable value.</param>
        public extern RangeAttribute(Type type, string minimum, string maximum);

        /// <summary>
        /// Gets the minimum value for the range
        /// </summary>
        public extern object Minimum { get; }

        /// <summary>
        /// Gets the maximum value for the range
        /// </summary>
        public extern object Maximum { get; }

        /// <summary>
        /// Gets the type of the <see cref="Minimum" /> and <see cref="Maximum" /> values (e.g. Int32, Double, or some custom
        /// type)
        /// </summary>
        public extern Type OperandType { get; }

        /// <summary>
        /// Returns true if the value falls between min and max, inclusive.
        /// </summary>
        /// <param name="value">The value to test for validity.</param>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is ill-formed.</exception>
        public override extern bool IsValid(object value);

        /// <summary>
        /// Override of <see cref="ValidationAttribute.FormatErrorMessage" />
        /// </summary>
        /// <param name="name">The user-visible name to include in the formatted message.</param>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is ill-formed.</exception>
        public override extern string FormatErrorMessage(string name);
    }
}
