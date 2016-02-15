using Bridge;

namespace System
{
    /// <summary>
    /// An object with some or all of the following properties:
    /// </summary>
    [External]
    [Name("LocaleOptions")]
    [ObjectLiteral]
    public sealed class LocaleOptions
    {
        public LocaleOptions()
        {
        }

        /// <summary>
        /// The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see the Intl page.
        /// </summary>
        public LocaleMatcher LocaleMatcher;

        /// <summary>
        /// Whether the comparison is for sorting or for searching for matching strings. Possible values are "sort" and "search"; the default is "sort".
        /// </summary>
        public Usage Usage;

        /// <summary>
        /// Which differences in the strings should lead to non-zero result values.
        /// </summary>
        public Sensitivity Sensitivity;

        /// <summary>
        /// Whether punctuation should be ignored. Possible values are true and false; the default is false.
        /// </summary>
        public bool IgnorePunctuation;

        /// <summary>
        /// Whether numeric collation should be used, such that "1" &lt; "2" &lt; "10". Possible values are true and false; the default is false. This option can be set through an options property or through a Unicode extension key; if both are provided, the options property takes precedence. Implementations are not required to support this property.
        /// </summary>
        public bool Numeric;

        /// <summary>
        /// Whether upper case or lower case should sort first. Possible values are "upper", "lower", or "false" (use the locale's default); the default is "false". This option can be set through an options property or through a Unicode extension key; if both are provided, the options property takes precedence. Implementations are not required to support this property.
        /// </summary>
        public CaseFirst CaseFirst;
    }

    /// <summary>
    /// Whether upper case or lower case should sort first. Possible values are "upper", "lower", or "false" (use the locale's default); the default is "false". This option can be set through an options property or through a Unicode extension key; if both are provided, the options property takes precedence. Implementations are not required to support this property.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    public enum CaseFirst
    {
        Upper,
        Lower,
        False
    }

    /// <summary>
    /// Which differences in the strings should lead to non-zero result values.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    public enum Sensitivity
    {
        /// <summary>
        /// Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.
        /// </summary>
        Base,

        /// <summary>
        /// Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.
        /// </summary>
        Accent,

        /// <summary>
        /// Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.
        /// </summary>
        Case,

        /// <summary>
        /// Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.
        /// </summary>
        Variant
    }

    /// <summary>
    /// Whether the comparison is for sorting or for searching for matching strings. Possible values are "sort" and "search"; the default is "sort".
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    public enum Usage
    {
        Sort,
        Search
    }

    /// <summary>
    /// The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see the Intl page.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    public enum LocaleMatcher
    {
        /// <summary>
        ///
        /// </summary>
        Lookup,

        /// <summary>
        ///
        /// </summary>
        [Name("best fit")]
        BestFit
    }
}