using Bridge;

namespace System
{
    [Ignore]
    [Namespace("Bridge")]
    public class OverflowException : ArithmeticException, IBridgeClass
    {
        public OverflowException()
        {
        }

        public OverflowException(string message)
        {
        }

        public OverflowException(string message, Exception innerException)
        {
        }
    }
}
