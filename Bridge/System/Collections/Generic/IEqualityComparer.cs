using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Namespace("Bridge")]
    public interface IEqualityComparer<in T> : IBridgeClass
    {
        [Template("{this}.equals({x}, {y})")]
        bool Equals(T x, T y);

        [Template("{this}.getHashCode({obj}, true)")]
        int GetHashCode(T obj);
    }

    [External]
    [Namespace("Bridge")]
    public abstract class EqualityComparer<T> : IEqualityComparer<T>, IBridgeClass
    {
        public static EqualityComparer<T> Default
        {
            [Template("new Bridge.EqualityComparer$1({T})()")]
            get
            {
                return null;
            }
        }

        [Template("{this}.equals({x}, {y})")]
        public virtual bool Equals(T x, T y)
        {
            return false;
        }

        [Template("{this}.getHashCode({obj}, true)")]
        public virtual int GetHashCode(T obj)
        {
            return 0;
        }
    }
}
