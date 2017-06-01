using Bridge;

namespace System
{
    [External]
    [Reflectable]
    public class OutOfMemoryException : SystemException, IBridgeClass
    {
        public extern OutOfMemoryException();

        public extern OutOfMemoryException(string message);

        [Template("new System.OutOfMemoryException({message}, {innerException})")]
        public extern OutOfMemoryException(string message, Exception innerException);
    }
}