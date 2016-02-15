using Bridge;
using System.Runtime.CompilerServices;

namespace System.Threading.Tasks
{
    [External]
    [Name("Bridge.Task")]
    public class TaskAwaiter : INotifyCompletion
    {
        internal TaskAwaiter()
        {
        }

        public bool IsCompleted
        {
            [Name("isCompleted")]
            get
            {
                return false;
            }
        }

        [Name("continueWith")]
        public extern void OnCompleted(Action continuation);

        [Name("getAwaitedResult")]
        public extern void GetResult();
    }

    [External]
    [Name("Bridge.Task")]
    public class TaskAwaiter<TResult> : INotifyCompletion
    {
        internal TaskAwaiter()
        {
        }

        public bool IsCompleted
        {
            [Name("isCompleted")]
            get
            {
                return false;
            }
        }

        [Name("continueWith")]
        public extern void OnCompleted(Action continuation);

        [Name("getAwaitedResult")]
        public TResult GetResult()
        {
            return default(TResult);
        }
    }
}