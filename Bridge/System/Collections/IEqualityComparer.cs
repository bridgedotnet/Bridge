using Bridge;

namespace System.Collections
{
    [External]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IEqualityComparer : IBridgeClass
    {
        bool Equals(object x, object y);

        int GetHashCode(object obj);
    }
}