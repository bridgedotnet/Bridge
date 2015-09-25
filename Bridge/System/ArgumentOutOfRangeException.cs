using Bridge;

namespace System
{
    [Ignore]
    [Namespace("Bridge")]
    public class ArgumentOutOfRangeException : ArgumentException, IBridgeClass
    {
        public ArgumentOutOfRangeException()
        {
        }

        public ArgumentOutOfRangeException(string paramName)
        {
        }

        [Template("new Bridge.ArgumentOutOfRangeException(null, {message}, {innerException})")]
        public ArgumentOutOfRangeException(string message, Exception innerException)
        {
        }

        public ArgumentOutOfRangeException(string paramName, string message)
        {
        }

        [Template("new Bridge.ArgumentOutOfRangeException({paramName}, {message}, null, {actualValue})")]
        public ArgumentOutOfRangeException(string paramName, object actualValue, string message)
        {
        }

        public object ActualValue
        {
            get
            {
                return null;
            }
        }
    }
}
