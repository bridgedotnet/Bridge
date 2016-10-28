using Bridge;
using System.ComponentModel;

namespace System.Runtime.CompilerServices
{
    [External]
    public static class RuntimeHelpers
    {
        [EditorBrowsable(EditorBrowsableState.Never)]
        public static extern void InitializeArray(Array array, RuntimeFieldHandle handle);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public static extern int OffsetToStringData
        {
            get;
        }

        [Template("Bridge.getHashCode({obj})")]
        public static extern int GetHashCode(object obj);

        [Template("{type}.$staticInit && {type}.$staticInit()")]
        public static extern void RunClassConstructor(Type type);
    }
}