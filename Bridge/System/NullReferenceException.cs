using Bridge;

namespace System
{
    [External]
    [Reflectable]
    public class NullReferenceException : Exception, IBridgeClass
    {
        public extern NullReferenceException();

        public extern NullReferenceException(string message);

        public extern NullReferenceException(string message, Exception innerException);
    }
}