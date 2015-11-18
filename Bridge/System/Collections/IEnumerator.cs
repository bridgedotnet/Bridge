using Bridge;

namespace System.Collections
{
    [External]
    [Namespace("Bridge")]
    public interface IEnumerator : IBridgeClass
    {
        object Current
        {
            get;
        }

        bool MoveNext();

        void Reset();
    }
}
