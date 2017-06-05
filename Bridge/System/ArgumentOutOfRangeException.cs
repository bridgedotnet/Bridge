using Bridge;

namespace System
{
    [External]
    [Reflectable]
    public class ArgumentOutOfRangeException : ArgumentException, IBridgeClass
    {
        public extern ArgumentOutOfRangeException();

        public extern ArgumentOutOfRangeException(string paramName);

        [Template("new System.ArgumentOutOfRangeException(null, {message}, {innerException})")]
        public extern ArgumentOutOfRangeException(string message, Exception innerException);

        public extern ArgumentOutOfRangeException(string paramName, string message);

        [Template("new System.ArgumentOutOfRangeException({paramName}, {message}, null, {actualValue})")]
        public extern ArgumentOutOfRangeException(string paramName, object actualValue, string message);

        public extern object ActualValue
        {
            get;
        }
    }
}