namespace System.Collections.Generic
{
    [Bridge.External]
    [Bridge.Reflectable]
    [Bridge.Convention(Target = Bridge.ConventionTarget.Member, Member = Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    public interface IEqualityComparer<in T> : Bridge.IBridgeClass
    {
        [Bridge.Name("equals2")]
        bool Equals(T x, T y);

        [Bridge.Name("getHashCode2")]
        int GetHashCode(T obj);
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    public abstract class EqualityComparer<T> : IEqualityComparer<T>, Bridge.IBridgeClass
    {
        public static EqualityComparer<T> Default
        {
            [Bridge.Template("System.Collections.Generic.EqualityComparer$1({T}).def")]
            get
            {
                return null;
            }
        }

        public virtual extern bool Equals(T x, T y);

        public virtual extern int GetHashCode(T obj);
    }
}