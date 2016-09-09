using Bridge;

namespace System.Collections.Generic
{
    [External]
    public interface IEqualityComparer<in T> : IBridgeClass
    {
        [Name("equals2")]
        bool Equals(T x, T y);

        [Name("getHashCode2")]
        int GetHashCode(T obj);
    }

    [External]
    public abstract class EqualityComparer<T> : IEqualityComparer<T>, IBridgeClass
    {
        public static EqualityComparer<T> Default
        {
            [Template("System.Collections.Generic.EqualityComparer$1({T}).def")]
            get
            {
                return null;
            }
        }

        public virtual extern bool Equals(T x, T y);

        public virtual extern int GetHashCode(T obj);
    }
}