using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class NotSupportedException : Exception, IBridgeClass
    {
        public NotSupportedException()
        {
        }

        public NotSupportedException(string message)
        {
        }

        public NotSupportedException(string message, Exception innerException)
        {
        }
    }
}