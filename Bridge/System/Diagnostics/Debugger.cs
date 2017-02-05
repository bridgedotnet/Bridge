using Bridge;

namespace System.Diagnostics
{
    [External]
    [Name("System.Object")]
    public static class Debugger
    {
        [Template("debugger")]
        public static extern void Break();
    }
}