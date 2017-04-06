using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IComparer<in T>
    {
        int Compare(T x, T y);
    }
}