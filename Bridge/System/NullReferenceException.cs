using Bridge;

namespace System
{
    [Ignore]
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
