using Bridge;

namespace System
{
    [Ignore]
    [Namespace("Bridge")]
    public class DivideByZeroException : ArithmeticException, IBridgeClass
    {
        public DivideByZeroException()
        {
        }

        public DivideByZeroException(string message)
        {
        }

        public DivideByZeroException(string message, Exception innerException)
        {
        }
    }
}
