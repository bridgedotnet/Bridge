using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Reflectable]
    [Convention(Target = ConventionTarget.Member, Member = ConventionMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IEqualityComparer<in T> : IBridgeClass
    {
        [Name("equals2")]
        bool Equals(T x, T y);

        [Name("getHashCode2")]
        int GetHashCode(T obj);
    }

    [External]
    [Reflectable]
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