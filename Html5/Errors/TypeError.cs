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
        public TypeException()
        {
        }

        public TypeException(string message)
        {
        }
    }
}
