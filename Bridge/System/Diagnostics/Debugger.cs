using Bridge;

namespace System.Diagnostics
{
    [External]
    [Name("Object")]
    public static class Debugger
    {
        [Template("debugger")]
        public static void Break()
        {
        }
    }
}