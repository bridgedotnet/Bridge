using Bridge;

namespace System
{
    [Ignore]
    [Namespace("Bridge")]
    public interface IFormattable : IBridgeClass
    {
        [Template("Bridge.format({this}, {format}, {formatProvider})")]
        string Format(string format, IFormatProvider formatProvider);
    }
}
