using Bridge;

namespace System.Threading
{
    [External]
    [Namespace("Bridge")]
    public struct CancellationTokenRegistration : IEquatable<CancellationTokenRegistration>, IDisposable
    {
        public extern bool Equals(CancellationTokenRegistration other);

        public extern void Dispose();

        [Template("Bridge.equals({left}, {right})")]
        public static extern bool operator ==(CancellationTokenRegistration left, CancellationTokenRegistration right);

        [Template("!Bridge.equals({left}, {right})")]
        public static extern bool operator !=(CancellationTokenRegistration left, CancellationTokenRegistration right);
    }
}