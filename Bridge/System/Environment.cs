using Bridge;

namespace System
{
    [External]
    [Name("Object")]
    public static class Environment
    {
        public static string NewLine
        {
            [Template("'\\n'")]
            get
            {
                return null;
            }
        }

        public static int CurrentManagedThreadId
        {
            [Template("0")]
            get
            {
                return 0;
            }
        }
    }
}