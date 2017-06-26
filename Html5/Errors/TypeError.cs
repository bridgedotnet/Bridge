using Bridge;

namespace System
{
    /// <summary>
    /// The TypeError object represents an error when a value is not of the expected type.
    /// </summary>
    [External]
    [Name("TypeError")]
    [Constructor("TypeError")]
    public class TypeException : Exception
    {
        public extern TypeException();

        public extern TypeException(string message);
    }
}