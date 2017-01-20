using Bridge;

namespace System.Threading
{
    [External]
    //[Name("Bridge.CancellationToken")]
    public struct CancellationToken
    {
        public extern CancellationToken(bool canceled);

        [Field]
        public static extern CancellationToken None
        {
            get;
        }

        public extern bool CanBeCanceled
        {
            get;
        }

        public extern bool IsCancellationRequested
        {
            get;
        }

        public extern void ThrowIfCancellationRequested();

        public extern CancellationTokenRegistration Register(Action callback);

        [Template("{this}.register({callback})")]
        public extern CancellationTokenRegistration Register(Action callback, bool useSynchronizationContext);

        public extern CancellationTokenRegistration Register(Action<object> callback, object state);

        [Template("{this}.register({callback}, {state})")]
        public extern CancellationTokenRegistration Register(Action<object> callback, object state, bool useSynchronizationContext);
    }
}