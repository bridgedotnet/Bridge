using Bridge;

namespace System
{
    /// <summary>
    /// The RangeError object indicates an error when a value is not in the set or range of allowed values.
    /// </summary>
    [External]
    [Name("RangeError")]
    [Constructor("RangeError")]
    public class RangeException : Exception
    {
        public extern RangeException();

        public extern RangeException(string message);
    }
}