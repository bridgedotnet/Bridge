using Bridge;

namespace System
{
    [Ignore]
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
