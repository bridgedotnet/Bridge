using Bridge;

namespace System.Collections.Generic
{
    [Namespace("Bridge")]
    public interface IComparer<in T>
    {
        int Compare(T x, T y);
    }
}
