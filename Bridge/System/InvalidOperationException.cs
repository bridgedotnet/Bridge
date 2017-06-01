using Bridge;

namespace System
{
    [External]
    [Reflectable]
    public class InvalidOperationException : Exception, IBridgeClass
    {
        public extern InvalidOperationException();

        public extern InvalidOperationException(string message);

        public extern InvalidOperationException(string message, Exception innerException);
    }
}