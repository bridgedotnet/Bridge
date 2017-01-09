using Bridge;

namespace System.Reflection
{
    [External]
    [Flags]
    [Enum(Emit.Value)]
    public enum TypeAttributes
    {
        NotPublic = 0,
        AutoLayout = 0,
        Class = 0,
        AnsiClass = 0,
        Public = 1,
        NestedPublic = 2,
        NestedPrivate = 3,
        NestedFamily = 4,
        NestedAssembly = 5,
        NestedFamANDAssem = 6,
        VisibilityMask = 7,
        NestedFamORAssem = 7,
        SequentialLayout = 8,
        ExplicitLayout = 16,
        LayoutMask = 24,
        ClassSemanticMask = 32,
        Interface = 32,
        Abstract = 128,
        Sealed = 256,
        SpecialName = 1024,
        RTSpecialName = 2048,
        Import = 4096,
        Serializable = 8192,
        WindowsRuntime = 16384,
        UnicodeClass = 65536,
        AutoClass = 131072,
        StringFormatMask = 196608,
        HasSecurity = 262144,
        BeforeFieldInit = 1048576,
        Forwarder = 2097152
    }
}