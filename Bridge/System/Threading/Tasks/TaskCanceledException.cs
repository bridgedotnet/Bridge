using Bridge;

namespace System.Threading.Tasks
{
    [External]
    [Namespace("Bridge")]
    public class TaskCanceledException : OperationCanceledException
    {
        public extern TaskCanceledException();

        public extern TaskCanceledException(string message);

        [Template("new Bridge.TaskCanceledException(null, {task})")]
        public extern TaskCanceledException(Task task);

        [Template("new Bridge.TaskCanceledException({message}, null, {innerException})")]
        public extern TaskCanceledException(string message, Exception innerException);

        [FieldProperty]
        public extern Task Task
        {
            get;
            private set;
        }
    }
}