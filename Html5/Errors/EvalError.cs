using Bridge;

namespace System
{
    /// <summary>
    /// The EvalError object indicates an error regarding the global eval() function.
    /// </summary>
    [External]
    [Name("EvalError")]
    [Constructor("EvalError")]
    public class EvalException : Exception
    {
        public extern EvalException();

        public extern EvalException(string message);
    }
}