using Bridge;

namespace System.Diagnostics
{
    [Namespace("Bridge")]
    [External]
    public static class Debug
    {
        [Conditional("DEBUG")]
        public static extern void Assert(bool condition);

        [Conditional("DEBUG")]
        public static extern void Assert(bool condition, string message);

        [Conditional("DEBUG")]
        public static extern void Fail(string message);

        [Conditional("DEBUG")]
        [Name("writeln")]
        public static extern void WriteLine(string message);

        [Conditional("DEBUG")]
        [Template("debugger")]
        public static extern void Break();
    }
}