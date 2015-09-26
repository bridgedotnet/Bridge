using Bridge;

namespace System
{
    [Ignore]
    [Namespace("Bridge")]
    public class ArithmeticException : Exception, IBridgeClass
    {
        public ArithmeticException()
        {
        }

        public ArithmeticException(string message)
        {
        }

        public ArithmeticException(string message, Exception innerException)
        {
        }
    }
}
