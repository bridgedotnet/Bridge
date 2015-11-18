using Bridge;
using System.Collections.Generic;

namespace System.Threading.Tasks
{
    [External]
    [Name("Bridge.Task")]
    public class Task : IDisposable, IBridgeClass
    {
        public Task(Action action)
        {
        }

        public Task(Action<object> action, object state)
        {
        }

        [Name("error")]
        public readonly Exception Exception;

        public bool IsCanceled
        {
            [Name("isCanceled")]
            get
            {
                return false;
            }
        }

        public bool IsCompleted
        {
            [Name("isCompleted")]
            get
            {
                return false;
            }
        }

        public bool IsFaulted
        {
            [Name("isFaulted")]
            get
            {
                return false;
            }
        }

        public readonly TaskStatus Status;

        public Task ContinueWith(Action<Task> continuationAction)
        {
            return null;
        }

        public Task<TResult> ContinueWith<TResult>(Func<Task, TResult> continuationFunction)
        {
            return null;
        }

        public void Start()
        {
        }

        public TaskAwaiter GetAwaiter()
        {
            return null;
        }

        public void Dispose()
        {
        }

        public void SetCanceled()
        {
        }

        public void SetError(IEnumerable<Exception> exceptions)
        {
        }

        public void SetError(Exception exception)
        {
        }

        public void Complete(object result = null)
        {
        }

        public static Task Delay(int millisecondDelay)
        {
            return null;
        }

        public static Task<TResult> FromResult<TResult>(TResult result)
        {
            return null;
        }

        public static Task Run(Action action)
        {
            return null;
        }

        public static Task<TResult> Run<TResult>(Func<TResult> function)
        {
            return null;
        }

        public static Task WhenAll(params Task[] tasks)
        {
            return null;
        }

        public static Task WhenAll(IEnumerable<Task> tasks)
        {
            return null;
        }

        public static Task<TResult[]> WhenAll<TResult>(params Task<TResult>[] tasks)
        {
            return null;
        }

        public static Task<TResult[]> WhenAll<TResult>(IEnumerable<Task<TResult>> tasks)
        {
            return null;
        }

        public static Task<Task> WhenAny(params Task[] tasks)
        {
            return null;
        }

        public static Task<Task> WhenAny(IEnumerable<Task> tasks)
        {
            return null;
        }

        public static Task<Task<TResult>> WhenAny<TResult>(params Task<TResult>[] tasks)
        {
            return null;
        }

        public static Task<Task<TResult>> WhenAny<TResult>(IEnumerable<Task<TResult>> tasks)
        {
            return null;
        }

        public static Task FromCallback(object target, string method, params object[] otherArguments)
        {
            return null;
        }

        public static Task FromCallbackResult(object target, string method, Delegate resultHandler, params object[] otherArguments)
        {
            return null;
        }

        public static Task<TResult> FromCallback<TResult>(object target, string method, params object[] otherArguments)
        {
            return null;
        }

        public static Task<TResult> FromCallbackResult<TResult>(object target, string method, Delegate resultHandler, params object[] otherArguments)
        {
            return null;
        }

        public static Task<object[]> FromPromise(IPromise promise)
        {
            return null;
        }

        public static Task<TResult> FromPromise<TResult>(IPromise promise, Delegate resultHandler)
        {
            return null;
        }

        public static Task<TResult> FromPromise<TResult>(IPromise promise, Delegate resultHandler, Delegate errorHandler)
        {
            return null;
        }
    }

    [External]
    [IgnoreGeneric]
    [Name("Bridge.Task")]
    public class Task<TResult> : Task
    {
        public Task(Func<TResult> function)
            : base(() =>
            {
            })
        {
        }

        public Task(Func<object, TResult> function, object state)
            : base(() =>
            {
            })
        {
        }

        public TResult Result
        {
            [Name("getResult")]
            get
            {
                return default(TResult);
            }
        }

        public Task ContinueWith(Action<Task<TResult>> continuationAction)
        {
            return null;
        }

        public Task<TNewResult> ContinueWith<TNewResult>(Func<Task<TResult>, TNewResult> continuationFunction)
        {
            return null;
        }

        public new TaskAwaiter<TResult> GetAwaiter()
        {
            return null;
        }

        public void SetResult(TResult result)
        {
        }
    }
}
