using System;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Threading.Tasks
{
    [Ignore]
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
        public void OnCompleted(Action continuation)
        {
        }

        public void GetResult()
        {
        }
    }

    [Ignore]
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
        public void OnCompleted(Action continuation)
        {
        }

        public TResult GetResult()
        {
            return default(TResult);
        }
    }
}
