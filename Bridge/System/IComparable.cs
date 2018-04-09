namespace System
{
    [Bridge.External]
    [Bridge.Convention(Target = Bridge.ConventionTarget.Member, Member = Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.Reflectable]
    public interface IComparable : Bridge.IBridgeClass
    {
        [Bridge.Template("Bridge.compare({this}, {obj})")]
        int CompareTo(Object obj);
    }

    [Bridge.External]
    [Bridge.Convention(Target = Bridge.ConventionTarget.Member, Member = Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.Reflectable]
    public interface IComparable<in T> : Bridge.IBridgeClass
    {
        [Bridge.Template("Bridge.compare({this}, {other}, false, {T})")]
        int CompareTo(T other);
    }
}