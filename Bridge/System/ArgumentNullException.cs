using Bridge;

namespace System
{
    [Ignore]
    [Namespace("Bridge")]
    public class ArgumentNullException : ArgumentException, IBridgeClass
    {
        public ArgumentNullException()
        {
        }

        public ArgumentNullException(string paramName)
        {
        }

        public ArgumentNullException(string paramName, string message)
        {
        }

        [Template("new Bridge.ArgumentNullException(null, {message}, {innerException})")]
        public ArgumentNullException(string message, Exception innerException)
        {
        }
    }
}
