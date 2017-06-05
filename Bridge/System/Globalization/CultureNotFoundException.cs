using Bridge;

namespace System.Globalization
{
    [External]
    [Reflectable]
    public class CultureNotFoundException : ArgumentException, IBridgeClass
    {
        public extern CultureNotFoundException();

        [Template("new System.Globalization.CultureNotFoundException(null, null, {message})")]
        public extern CultureNotFoundException(string message);

        [Template("new System.Globalization.CultureNotFoundException(null, null, {message}, {innerException})")]
        public extern CultureNotFoundException(string message, Exception innerException);

        [Template("new System.Globalization.CultureNotFoundException({paramName}, null, {message})")]
        public extern CultureNotFoundException(string paramName, string message);

        [Template("new System.Globalization.CultureNotFoundException(null, {invalidCultureName}, {message}, {innerException})")]
        public extern CultureNotFoundException(string message, string invalidCultureName, Exception innerException);

        [Template("new System.Globalization.CultureNotFoundException({paramName}, {invalidCultureName}, {message})")]
        public extern CultureNotFoundException(string paramName, string invalidCultureName, string message);

        [Template("new System.Globalization.CultureNotFoundException(null, null, {message}, {innerException}, {invalidCultureId})")]
        public extern CultureNotFoundException(string message, int invalidCultureId, Exception innerException);

        [Template("new System.Globalization.CultureNotFoundException({paramName}, null, {message}, null, {invalidCultureId})")]
        public extern CultureNotFoundException(string paramName, int invalidCultureId, string message);

        public extern string InvalidCultureName
        {
            [Template("getInvalidCultureName()")]
            get;
        }

        public extern int? InvalidCultureId
        {
            [Template("getInvalidCultureId()")]
            get;
        }
    }
}