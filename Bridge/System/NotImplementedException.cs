using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class NotImplementedException : Exception, IBridgeClass
    {
        public NotImplementedException()
        {
        }

        public NotImplementedException(string message)
        {
        }

        public NotImplementedException(string message, Exception innerException)
        {
        }
    }
}