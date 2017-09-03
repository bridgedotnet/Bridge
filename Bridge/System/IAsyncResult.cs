using Bridge;
using System.Runtime.InteropServices;
using System.Threading;

namespace System
{
    [External]
    [Reflectable]
    public interface IAsyncResult
    {
        object AsyncState { get; }
        bool CompletedSynchronously { get; }
        bool IsCompleted { get; }
    }
}
