using Bridge;

namespace System {
    [Ignore]
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
