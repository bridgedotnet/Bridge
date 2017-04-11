using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Convention(Target = ConventionTarget.Member, Member = ConventionMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IComparer<in T>
    {
        int Compare(T x, T y);
    }
}