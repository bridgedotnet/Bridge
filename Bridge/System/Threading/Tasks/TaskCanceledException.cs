using Bridge;

namespace System.Threading.Tasks
{
    [External]
    public class TaskCanceledException : OperationCanceledException
    {
        public extern TaskCanceledException();

        public extern TaskCanceledException(string message);

        [Template("new System.Threading.Tasks.TaskCanceledException(null, {task})")]
        public extern TaskCanceledException(Task task);

        [Template("new System.Threading.Tasks.TaskCanceledException({message}, null, {innerException})")]
        public extern TaskCanceledException(string message, Exception innerException);

        [Field]
        public extern Task Task
        {
            get;
            private set;
        }
    }
}