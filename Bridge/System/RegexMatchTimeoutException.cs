namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    public class RegexMatchTimeoutException : TimeoutException
    {
        public extern string Pattern
        {
            [Bridge.Template("getPattern()")]
            get;
        }

        public extern string Input
        {
            [Bridge.Template("getInput()")]
            get;
        }

        public extern TimeSpan MatchTimeout
        {
            [Bridge.Template("getMatchTimeout()")]
            get;
        }

        public extern RegexMatchTimeoutException();

        public extern RegexMatchTimeoutException(string message);

        public extern RegexMatchTimeoutException(string message, Exception innerException);

        public extern RegexMatchTimeoutException(string regexInput, string regexPattern, TimeSpan matchTimeout);
    }
}