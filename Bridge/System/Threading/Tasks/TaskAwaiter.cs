using System.Runtime.CompilerServices;

namespace System.Threading.Tasks
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    public class TaskAwaiter : INotifyCompletion
    {
        internal extern TaskAwaiter();

        public extern bool IsCompleted
        {
            [Bridge.Template("isCompleted()")]
            get;
        }

        [Bridge.Name("continueWith")]
        public extern void OnCompleted(Action continuation);

        [Bridge.Name("getAwaitedResult")]
        public extern void GetResult();
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Threading.Tasks.Task")]
    public class TaskAwaiter<TResult> : INotifyCompletion
    {
        internal extern TaskAwaiter();

        public extern bool IsCompleted
        {
            [Bridge.Template("isCompleted()")]
            get;
        }

        [Bridge.Name("continueWith")]
        public extern void OnCompleted(Action continuation);

        [Bridge.Name("getAwaitedResult")]
        public extern TResult GetResult();
    }
}