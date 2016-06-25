using Bridge;

namespace System.Collections.Generic
{
    [External]
    [ExternalInterface]
    public interface IEnumerator<out T> : IBridgeClass, IDisposable, IEnumerator
    {
        new T Current
        {
            get;
        }
    }
}