using System.Collections.Generic;

namespace System.Threading.Tasks
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    [Bridge.Name("System.Threading.Tasks.TaskCompletionSource")]
    [Bridge.Reflectable]
    public class TaskCompletionSource<TResult>
    {
        public extern TaskCompletionSource();

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Task<TResult> Task
        {
            get;
        }

        public extern void SetCanceled();

        public extern void SetException(IEnumerable<Exception> exceptions);

        public extern void SetException(Exception exception);

        public extern void SetResult(TResult result);

        public extern bool TrySetCanceled();

        public extern bool TrySetException(IEnumerable<Exception> exceptions);

        public extern bool TrySetException(Exception exception);

        public extern bool TrySetResult(TResult result);
    }
}