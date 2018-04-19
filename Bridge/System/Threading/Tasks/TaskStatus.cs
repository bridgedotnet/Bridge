namespace System.Threading.Tasks
{
    [Bridge.External]
    [Bridge.Enum(Bridge.Emit.Name)]
    public enum TaskStatus
    {
        /// <summary>
        /// The task has been initialized but has not yet been scheduled.
        /// </summary>
        Created,

        /// <summary>
        /// The task is waiting to be activated and scheduled internally by the .NET Framework infrastructure.
        /// </summary>
        WaitingForActivation,

        /// <summary>
        /// The task has been scheduled for execution but has not yet begun executing.
        /// </summary>
        WaitingToRun,

        /// <summary>
        /// The task is running but has not yet completed.
        /// </summary>
        Running,

        // /// <summary>
        // /// The task is currently blocked in a wait state.
        // /// </summary>
        // Blocked,
        /// <summary>
        /// The task has finished executing and is implicitly waiting for
        /// attached child tasks to complete.
        /// </summary>
        WaitingForChildrenToComplete,

        /// <summary>
        /// The task completed execution successfully.
        /// </summary>
        RanToCompletion,

        /// <summary>
        /// The task acknowledged cancellation by throwing an OperationCanceledException with its own CancellationToken
        /// while the token was in signaled state, or the task's CancellationToken was already signaled before the
        /// task started executing.
        /// </summary>
        Canceled,

        /// <summary>
        /// The task completed due to an unhandled exception.
        /// </summary>
        Faulted
    }
}