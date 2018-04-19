namespace System.Threading.Tasks
{
    /// <summary>
    /// CommonJS Promise/A interface
    /// http://wiki.commonjs.org/wiki/Promises/A
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("Bridge.IPromise")]
    [Bridge.Convention(Target = Bridge.ConventionTarget.Member, Member = Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    public interface IPromise
    {
        /// <summary>
        /// Adds a fulfilledHandler, errorHandler to be called for completion of a promise.
        /// </summary>
        /// <param name="fulfilledHandler">The fulfilledHandler is called when the promise is fulfilled</param>
        /// <param name="errorHandler">The errorHandler is called when a promise fails.</param>
        /// <param name="progressHandler"></param>
        void Then(Delegate fulfilledHandler, Delegate errorHandler = null, Delegate progressHandler = null);
    }

    /// <summary>
    ///
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    public static class PromiseExtensions
    {
        /// <summary>
        ///
        /// </summary>
        /// <param name="promise"></param>
        /// <returns></returns>
        [Bridge.Template("System.Threading.Tasks.Task.fromPromise({promise})")]
        public static extern TaskAwaiter<object[]> GetAwaiter(this IPromise promise);
    }
}