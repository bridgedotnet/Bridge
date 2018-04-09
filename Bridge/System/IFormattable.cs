namespace System
{
    [Bridge.External]
    [Bridge.Convention(Target = Bridge.ConventionTarget.Member, Member = Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.Reflectable]
    public interface IFormattable : Bridge.IBridgeClass
    {
        [Bridge.Name("format")]
        [Bridge.Template("Bridge.format({this}, {format}, {formatProvider})")]
        string ToString(string format, IFormatProvider formatProvider);
    }
}