using Bridge;

namespace System
{
    [External]
    [Name("System.Object")]
    public static class Environment
    {
        public static extern string NewLine
        {
            [Template("'\\n'")]
            get;
        }

        public static extern int CurrentManagedThreadId
        {
            [Template("0")]
            get;
        }
    }
}