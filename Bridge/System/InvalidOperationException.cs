using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class InvalidOperationException : Exception, IBridgeClass
    {
        public InvalidOperationException()
        {
        }

        public InvalidOperationException(string message)
        {
        }

        public InvalidOperationException(string message, Exception innerException)
        {
        }
    }
}