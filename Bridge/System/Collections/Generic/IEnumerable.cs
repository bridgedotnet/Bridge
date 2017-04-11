using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Convention(Target = ConventionTarget.Member, Member = ConventionMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IEnumerable<out T> : IEnumerable, IBridgeClass
    {
        [Template("Bridge.getEnumerator({this}, {T})")]
        new IEnumerator<T> GetEnumerator();
    }
}