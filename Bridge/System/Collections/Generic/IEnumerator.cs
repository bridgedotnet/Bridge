using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Namespace("Bridge")]
    public interface IEnumerator<out T> : IBridgeClass, IDisposable, IEnumerator
    {
        new T Current
        {
            get;
        }
    }
}