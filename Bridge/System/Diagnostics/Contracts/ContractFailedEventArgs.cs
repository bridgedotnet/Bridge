using System.Runtime.CompilerServices;
using Bridge;

namespace System.Diagnostics.Contracts
{
    [External]
    [Name("Object")]
    public sealed class ContractFailedEventArgs : EventArgs
    {
        public extern ContractFailedEventArgs(ContractFailureKind failureKind, String message, String condition, Exception originalException);

        public extern String Message
        {
            get;
        }

        public extern String Condition
        {
            get;
        }

        public extern ContractFailureKind FailureKind
        {
            get;
        }

        public extern Exception OriginalException
        {
            get;
        }

        // Whether the event handler "handles" this contract failure, or to fail via escalation policy.
        public extern bool Handled
        {
            get;
        }

        public extern void SetHandled();

        public extern bool Unwind
        {
            get;
        }

        public extern void SetUnwind();
    }
}
