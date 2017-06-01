using Bridge;

namespace System
{
    [External]
    [Reflectable]
    public class ArithmeticException : Exception, IBridgeClass
    {
        public extern ArithmeticException();

        public extern ArithmeticException(string message);

        public extern ArithmeticException(string message, Exception innerException);
    }
}