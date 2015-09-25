using Bridge;

namespace System.Globalization
{
    [Ignore]
    [Namespace("Bridge")]
    public class CultureNotFoundException : ArgumentException, IBridgeClass
    {
        public CultureNotFoundException()
        {
        }

        public CultureNotFoundException(string paramName)
        {
        }

        [Template("new Bridge.ArgumentOutOfRangeException(null, null, {message}, {innerException})")]
        public CultureNotFoundException(string message, Exception innerException)
        {
        }

        [Template("new Bridge.ArgumentOutOfRangeException({paramName}, null, {message}, null)")]
        public CultureNotFoundException(string paramName, string message)
        {
        }

        [Template("new Bridge.ArgumentOutOfRangeException(null, {invalidCultureName}, {message}, {innerException})")]
        public CultureNotFoundException(string message, string invalidCultureName, Exception innerException)
        {
        }

        [Template("new Bridge.ArgumentOutOfRangeException({paramName}, {invalidCultureName}, {message})")]
        public CultureNotFoundException(string paramName, string invalidCultureName, string message)
        {
        }

        public string InvalidCultureName
        {
            get
            {
                return null;
            }
        }
    }
}
