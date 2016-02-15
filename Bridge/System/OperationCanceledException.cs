using Bridge;
using System.Threading;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class OperationCanceledException : Exception
    {
        public extern OperationCanceledException();

        [Template("new Bridge.OperationCanceledException(null, {token})")]
        public extern OperationCanceledException(CancellationToken token);

        [Template("new Bridge.OperationCanceledException({message}, Bridge.CancellationToken.none)")]
        public extern OperationCanceledException(string message);

        [Template("new Bridge.OperationCanceledException({message}, Bridge.CancellationToken.none, {innerException})")]
        public extern OperationCanceledException(string message, Exception innerException);

        public extern OperationCanceledException(string message, CancellationToken token);

        [Template("new Bridge.OperationCanceledException({message}, {token}, {innerException})")]
        public extern OperationCanceledException(string message, Exception innerException, CancellationToken token);

        [FieldProperty]
        public extern CancellationToken CancellationToken
        {
            get;
            private set;
        }
    }
}