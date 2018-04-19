namespace System.Threading
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    public class CancellationTokenSource : IDisposable
    {
        public extern CancellationTokenSource();

        public extern CancellationTokenSource(int millisecondsDelay);

        [Bridge.Template("new System.Threading.CancellationTokenSource({delay}.ticks / 10000)")]
        public extern CancellationTokenSource(TimeSpan delay);

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern bool IsCancellationRequested
        {
            get;
            private set;
        }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern CancellationToken Token
        {
            get;
            private set;
        }

        public extern void Cancel();

        public extern void Cancel(bool throwOnFirstException);

        public extern void CancelAfter(int millisecondsDelay);

        [Bridge.Template("{this}.cancelAfter({delay}.ticks / 10000)")]
        public extern void CancelAfter(TimeSpan delay);

        public extern void Dispose();

        [Bridge.Name("createLinked")]
        public static extern CancellationTokenSource CreateLinkedTokenSource(CancellationToken token1, CancellationToken token2);

        [Bridge.Template("System.Threading.CancellationTokenSource.createLinked({*tokens})")]
        public static extern CancellationTokenSource CreateLinkedTokenSource(params CancellationToken[] tokens);
    }
}