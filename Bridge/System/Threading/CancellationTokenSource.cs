using Bridge;

namespace System.Threading
{
    [External]
    [Namespace("Bridge")]
    public class CancellationTokenSource : IDisposable
    {
        public extern CancellationTokenSource();

        public extern CancellationTokenSource(int millisecondsDelay);

        [Template("new Bridge.CancellationTokenSource({delay}.ticks / 10000)")]
        public extern CancellationTokenSource(TimeSpan delay);

        [FieldProperty]
        public extern bool IsCancellationRequested
        {
            get;
            private set;
        }

        [FieldProperty]
        public extern CancellationToken Token
        {
            get;
            private set;
        }

        public extern void Cancel();

        public extern void Cancel(bool throwOnFirstException);

        public extern void CancelAfter(int millisecondsDelay);

        [Template("{this}.cancelAfter({delay}.ticks / 10000)")]
        public extern void CancelAfter(TimeSpan delay);

        public extern void Dispose();

        [Name("createLinked")]
        public static extern CancellationTokenSource CreateLinkedTokenSource(CancellationToken token1, CancellationToken token2);

        [Template("Bridge.CancellationTokenSource.createLinked({*tokens})")]
        public static extern CancellationTokenSource CreateLinkedTokenSource(params CancellationToken[] tokens);
    }
}