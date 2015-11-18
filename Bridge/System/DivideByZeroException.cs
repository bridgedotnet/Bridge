using Bridge;

namespace System
{
    [External]
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
