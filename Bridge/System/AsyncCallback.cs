using Bridge;

namespace System
{
    [Name("Function")]
    [IgnoreCast]
    [External]
    public delegate void AsyncCallback(IAsyncResult ar);
}