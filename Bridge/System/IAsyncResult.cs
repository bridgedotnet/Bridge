using System.Runtime.InteropServices;
using System.Threading;

namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    public interface IAsyncResult
    {
        object AsyncState { get; }
        bool CompletedSynchronously { get; }
        bool IsCompleted { get; }
    }
}
