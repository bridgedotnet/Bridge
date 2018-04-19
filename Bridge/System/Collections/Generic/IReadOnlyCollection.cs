using Bridge;

namespace System.Collections.Generic
{
    [Bridge.External]
    [Bridge.Reflectable]
    [Bridge.Convention(Target = Bridge.ConventionTarget.Member, Member = Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    public interface IReadOnlyCollection<out T> : IEnumerable<T>
    {
        int Count
        {
            [Bridge.Template("System.Array.getCount({this}, {T})")]
            get;
        }
    }
}