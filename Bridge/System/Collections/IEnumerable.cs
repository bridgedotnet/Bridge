using Bridge;

namespace System.Collections
{
    [External]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IEnumerable : IBridgeClass
    {
        [Template("Bridge.getEnumerator({this})")]
        IEnumerator GetEnumerator();
    }
}