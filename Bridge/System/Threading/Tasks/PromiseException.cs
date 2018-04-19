namespace System.Threading.Tasks
{
    /// <summary>
    /// This exception is used as the exception for a task created from a promise when the underlying promise fails.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Namespace("Bridge")]
    public class PromiseException : Exception
    {
        public extern PromiseException(object[] arguments);

        public extern PromiseException(object[] arguments, string message);

        public extern PromiseException(object[] arguments, string message, Exception innerException);

        /// <summary>
        /// Arguments supplied to the promise onError() callback.
        /// </summary>
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern object[] Arguments
        {
            get;
        }
    }
}