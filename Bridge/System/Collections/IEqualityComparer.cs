using Bridge;

namespace System.Collections
{
    [External]
    [Convention(Target = ConventionTarget.Member, Member = ConventionMember.Method, Notation = Notation.LowerCamelCase)]
    [Reflectable]
    public interface IEqualityComparer : IBridgeClass
    {
        bool Equals(object x, object y);

        int GetHashCode(object obj);
    }
}