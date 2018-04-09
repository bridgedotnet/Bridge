namespace System
{
    [Bridge.Name("Function")]
    [Bridge.IgnoreCast]
    [Bridge.External]
    public delegate void AsyncCallback(IAsyncResult ar);
}