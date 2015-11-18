using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public interface IFormattable : IBridgeClass
    {
        [Template("Bridge.format({this}, {format}, {formatProvider})")]
        string Format(string format, IFormatProvider formatProvider);
    }
}
