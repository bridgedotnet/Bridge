
using Bridge;
using System.Runtime.InteropServices;
using System.Threading;

//
[FileName("io.js")]
public interface IAsyncResult
{
    object AsyncState { get; }
    
    //WaitHandle AsyncWaitHandle { get; }
    
    bool CompletedSynchronously { get; }
    
    bool IsCompleted { get; }
}