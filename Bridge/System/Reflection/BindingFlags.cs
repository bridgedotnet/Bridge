using Bridge;

namespace System.Reflection
{
    /// <summary>
    /// Specifies flags that control binding and the way in which the search for members and types is conducted by reflection.
    /// </summary>
    [External]
    [Flags]
    [Enum(Emit.Value)]
    public enum BindingFlags
    {
        // a place holder for no flag specifed
        Default = 0x00,

        // These flags indicate what to search for when binding
        IgnoreCase = 0x01,          // Ignore the case of Names while searching
        DeclaredOnly = 0x02,        // Only look at the members declared on the Type
        Instance = 0x04,            // Include Instance members in search
        Static = 0x08,              // Include Static members in search
        Public = 0x10,              // Include Public members in search
        NonPublic = 0x20,           // Include Non-Public members in search
        FlattenHierarchy = 0x40     // Rollup the statics into the class.
    }
}