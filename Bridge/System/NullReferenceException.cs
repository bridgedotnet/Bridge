using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class NullReferenceException : Exception, IBridgeClass
    {
        public NullReferenceException()
        {
        }

        public NullReferenceException(string message)
        {
        }

        public NullReferenceException(string message, Exception innerException)
        {
        }
    }
}
