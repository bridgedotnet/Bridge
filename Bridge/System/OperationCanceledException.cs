using Bridge;
using System.Threading;

namespace System
{
    [External]
    public class OperationCanceledException : Exception
    {
        public extern OperationCanceledException();

        [Template("new System.OperationCanceledException(null, {token})")]
        public extern OperationCanceledException(CancellationToken token);

        [Template("new System.OperationCanceledException({message}, System.Threading.CancellationToken.none)")]
        public extern OperationCanceledException(string message);

        [Template("new System.OperationCanceledException({message}, System.Threading.CancellationToken.none, {innerException})")]
        public extern OperationCanceledException(string message, Exception innerException);

        public extern OperationCanceledException(string message, CancellationToken token);

        [Template("new System.OperationCanceledException({message}, {token}, {innerException})")]
        public extern OperationCanceledException(string message, Exception innerException, CancellationToken token);

        [Field]
        public extern CancellationToken CancellationToken
        {
            get;
            private set;
        }
    }
}