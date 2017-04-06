using Bridge;

namespace System
{
    [External]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IFormattable : IBridgeClass
    {
        [Name("format")]
        [Template("Bridge.format({this}, {format}, {formatProvider})")]
        string ToString(string format, IFormatProvider formatProvider);
    }
}