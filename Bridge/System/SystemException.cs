using Bridge;

namespace System
{
    [External]
    [Reflectable]
    public class SystemException : Exception, IBridgeClass
    {
        public extern SystemException();

        public extern SystemException(string message);

        [Template("new System.SystemException({message}, {innerException})")]
        public extern SystemException(string message, Exception innerException);
    }
}