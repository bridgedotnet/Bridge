using Bridge;

namespace System
{
    [Namespace("Bridge")]
    [External]
    public interface IFormatProvider : IBridgeClass
    {
        object GetFormat(Type formatType);
    }
}