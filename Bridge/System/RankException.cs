using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class RankException : Exception, IBridgeClass
    {
        public RankException()
        {
        }

        public RankException(string message)
        {
        }

        public RankException(string message, Exception innerException)
        {
        }
    }
}