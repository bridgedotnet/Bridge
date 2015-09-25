using Bridge;

namespace System
{
    /// <summary>
    /// Specifies the culture, case, and sort rules to be used by certain overloads of the String.Compare and String.Equals methods.
    /// </summary>
    [Ignore]
    [Enum(Emit.Value)]
    public enum StringComparison
    {
        CurrentCulture = 0,

        CurrentCultureIgnoreCase = 1,

        InvariantCulture = 2,

        InvariantCultureIgnoreCase = 3,

        Ordinal = 4,

        OrdinalIgnoreCase = 5
    }
}
