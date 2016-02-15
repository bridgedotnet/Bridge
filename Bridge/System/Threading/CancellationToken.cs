using Bridge;

namespace System.Threading
{
    [External]
    [Namespace("Bridge")]
    [Name("Bridge.CancellationToken")]
    public struct CancellationToken
    {
        public extern CancellationToken(bool canceled);

        [FieldProperty]
        public static CancellationToken None
        {
            get
            {
                return default(CancellationToken);
            }
        }

        public bool CanBeCanceled
        {
            get
            {
                return false;
            }
        }

        public bool IsCancellationRequested
        {
            get
            {
                return false;
            }
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