using Bridge;

namespace System
{
    [Ignore]
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
