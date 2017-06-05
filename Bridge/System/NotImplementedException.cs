using Bridge;

namespace System
{
    [External]
    [Reflectable]
    public class NotImplementedException : Exception, IBridgeClass
    {
        public extern NotImplementedException();

        public extern NotImplementedException(string message);

        public extern NotImplementedException(string message, Exception innerException);
    }
}