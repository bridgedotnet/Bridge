using Bridge;

namespace System.Globalization
{
    [External]
    [Namespace("Bridge")]
    public class CultureNotFoundException : ArgumentException, IBridgeClass
    {
        public extern CultureNotFoundException();

        [Template("new Bridge.CultureNotFoundException(null, null, {message})")]
        public extern CultureNotFoundException(string message);

        [Template("new Bridge.CultureNotFoundException(null, null, {message}, {innerException})")]
        public extern CultureNotFoundException(string message, Exception innerException);

        [Template("new Bridge.CultureNotFoundException({paramName}, null, {message})")]
        public extern CultureNotFoundException(string paramName, string message);

        [Template("new Bridge.CultureNotFoundException(null, {invalidCultureName}, {message}, {innerException})")]
        public extern CultureNotFoundException(string message, string invalidCultureName, Exception innerException);

        [Template("new Bridge.CultureNotFoundException({paramName}, {invalidCultureName}, {message})")]
        public extern CultureNotFoundException(string paramName, string invalidCultureName, string message);

        [Template("new Bridge.CultureNotFoundException(null, null, {message}, {innerException}, {invalidCultureId})")]
        public extern CultureNotFoundException(string message, int invalidCultureId, Exception innerException);

        [Template("new Bridge.CultureNotFoundException({paramName}, null, {message}, null, {invalidCultureId})")]
        public extern CultureNotFoundException(string paramName, int invalidCultureId, string message);

        public extern string InvalidCultureName { get; }

        public extern int? InvalidCultureId { get; }
    }
}