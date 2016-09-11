using Bridge;

namespace System
{
    [External]
    public interface IFormattable : IBridgeClass
    {
        [Name("format")]
        [Template("Bridge.format({this}, {format}, {formatProvider})")]
        string ToString(string format, IFormatProvider formatProvider);
    }
}