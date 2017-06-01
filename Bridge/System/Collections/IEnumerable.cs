using Bridge;

namespace System.Collections
{
    [External]
    [Convention(Target = ConventionTarget.Member, Member = ConventionMember.Method, Notation = Notation.LowerCamelCase)]
    [Reflectable]
    public interface IEnumerable : IBridgeClass
    {
        [Template("Bridge.getEnumerator({this})")]
        IEnumerator GetEnumerator();
    }
}