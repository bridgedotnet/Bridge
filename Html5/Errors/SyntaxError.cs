using Bridge;

namespace System
{
    /// <summary>
    /// The SyntaxError object represents an error when trying to interpret syntactically invalid code.
    /// </summary>
    [External]
    [Name("SyntaxError")]
    [Constructor("SyntaxError")]
    public class SyntaxException : Exception
    {
        public extern SyntaxException();

        public extern SyntaxException(string message);
    }
}