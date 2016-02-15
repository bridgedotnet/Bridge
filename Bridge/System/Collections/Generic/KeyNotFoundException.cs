using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Namespace("Bridge")]
    public class KeyNotFoundException : Exception, IBridgeClass
    {
        public KeyNotFoundException()
        {
        }

        public KeyNotFoundException(string message)
        {
        }

        public KeyNotFoundException(string message, Exception innerException)
        {
        }
    }
}