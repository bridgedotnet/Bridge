using Bridge;

namespace System
{
    [External]
    [Reflectable]
    public class FormatException : Exception, IBridgeClass
    {
        public extern FormatException();

        public extern FormatException(string message);

        public extern FormatException(string message, Exception innerException);
    }
}