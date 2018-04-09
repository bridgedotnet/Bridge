using System.ComponentModel;

namespace System.Runtime.CompilerServices
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    public static class RuntimeHelpers
    {
        [EditorBrowsable(EditorBrowsableState.Never)]
        public static extern void InitializeArray(Array array, RuntimeFieldHandle handle);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public static extern int OffsetToStringData
        {
            get;
        }

        [Bridge.Template("Bridge.getHashCode({obj})")]
        public static extern int GetHashCode(object obj);

        [Bridge.Template("{type}.$staticInit && {type}.$staticInit()")]
        public static extern void RunClassConstructor(Type type);
    }
}