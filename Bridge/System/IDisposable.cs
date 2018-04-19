namespace System
{
    [Bridge.External]
    [Bridge.Reflectable]
    public interface IDisposable
    {
        void Dispose();
    }
}