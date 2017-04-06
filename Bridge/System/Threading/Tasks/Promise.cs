using Bridge;

namespace System.Threading.Tasks
{
    /// <summary>
    /// CommonJS Promise/A interface
    /// http://wiki.commonjs.org/wiki/Promises/A
    /// </summary>
    [External]
    [Name("Bridge.IPromise")]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
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
    [External]
    public static class PromiseExtensions
    {
        /// <summary>
        ///
        /// </summary>
        /// <param name="promise"></param>
        /// <returns></returns>
        [Template("System.Threading.Tasks.Task.fromPromise({promise})")]
        public static extern TaskAwaiter<object[]> GetAwaiter(this IPromise promise);
    }
}