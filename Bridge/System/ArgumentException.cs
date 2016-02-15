using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class ArgumentException : Exception, IBridgeClass
    {
        public ArgumentException()
        {
        }

        public ArgumentException(string message)
        {
        }

        [Template("new Bridge.ArgumentException({message}, null, {innerException})")]
        public ArgumentException(string message, Exception innerException)
        {
        }

        public ArgumentException(string message, string paramName)
        {
        }

        public ArgumentException(string message, string paramName, Exception innerException)
        {
        }

        /// <summary>
        /// Gets the name of the parameter that causes this exception.
        /// </summary>
        public string ParamName
        {
            get
            {
                return null;
            }
        }
    }
}