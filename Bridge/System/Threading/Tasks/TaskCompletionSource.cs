using Bridge;
using System.Collections.Generic;

namespace System.Threading.Tasks
{
    [External]
    [IgnoreGeneric]
    [Namespace("Bridge")]
    [Name("Bridge.TaskCompletionSource")]
    public class TaskCompletionSource<TResult>
    {
        public extern TaskCompletionSource();

        [FieldProperty]
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