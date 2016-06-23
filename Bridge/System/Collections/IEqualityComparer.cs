using Bridge;

namespace System.Collections
{
    [External]
    public interface IEqualityComparer : IBridgeClass
    {
        bool Equals(object x, object y);
        int GetHashCode(object obj);
    }
}