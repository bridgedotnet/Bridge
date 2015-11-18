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
        public SyntaxException()
        {
        }

        public SyntaxException(string message)
        {
        }
    }
}
