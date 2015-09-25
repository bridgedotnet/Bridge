using Bridge;

namespace System
{
    [Ignore]
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
