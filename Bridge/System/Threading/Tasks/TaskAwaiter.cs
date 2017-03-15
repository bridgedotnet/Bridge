using Bridge;
using System.Runtime.CompilerServices;

namespace System.Threading.Tasks
{
    [External]
    //[Name("System.Threading.Tasks.Task")]
    public class TaskAwaiter : INotifyCompletion
    {
        internal extern TaskAwaiter();

        public extern bool IsCompleted
        {
            [Template("isCompleted()")]
            get;
        }

        [Name("continueWith")]
        public extern void OnCompleted(Action continuation);

        [Name("getAwaitedResult")]
        public extern void GetResult();
    }

    [External]
    [Name("System.Threading.Tasks.Task")]
    public class TaskAwaiter<TResult> : INotifyCompletion
    {
        internal extern TaskAwaiter();

        public extern bool IsCompleted
        {
            [Template("isCompleted()")]
            get;
        }

        [Name("continueWith")]
        public extern void OnCompleted(Action continuation);

        [Name("getAwaitedResult")]
        public extern TResult GetResult();
    }
}