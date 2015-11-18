using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class InvalidCastException : Exception, IBridgeClass
    {
        public InvalidCastException()
        {
        }

        public InvalidCastException(string message)
        {
        }

        public InvalidCastException(string message, Exception innerException)
        {
        }
    }
}
