using Bridge;

namespace System
{
    /// <summary>
    /// Specifies the culture, case, and sort rules to be used by certain overloads of the String.Compare and String.Equals methods.
    /// </summary>
    /// <remarks>The StringComparison enumeration is used to specify whether a string comparison should use the current culture or the invariant culture, word or ordinal sort rules, and be case-sensitive or case-insensitive.</remarks>
    [External]
    [Enum(Emit.Value)]
    [Name("Number")]
    public enum StringComparison
    {
        /// <summary>
        /// Compare strings using culture-sensitive sort rules and the current culture.
        /// </summary>
        CurrentCulture = 0,

        /// <summary>
        /// Compare strings using culture-sensitive sort rules, the current culture, and ignoring the case of the strings being compared.
        /// </summary>
        CurrentCultureIgnoreCase = 1,

        /// <summary>
        /// Compare strings using culture-sensitive sort rules and the invariant culture.
        /// </summary>
        InvariantCulture = 2,

        /// <summary>
        /// Compare strings using culture-sensitive sort rules, the invariant culture, and ignoring the case of the strings being compared.
        /// </summary>
        InvariantCultureIgnoreCase = 3,

        /// <summary>
        /// Compare strings using ordinal (binary) sort rules.
        /// </summary>
        Ordinal = 4,

        /// <summary>
        /// Compare strings using ordinal (binary) sort rules and ignoring the case of the strings being compared.
        /// </summary>
        OrdinalIgnoreCase = 5
    }
}