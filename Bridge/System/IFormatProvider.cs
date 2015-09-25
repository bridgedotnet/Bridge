using Bridge;
namespace System
{
    [Namespace("Bridge")]
    [Ignore]
    public interface IFormatProvider : IBridgeClass
    {
        object GetFormat(Type formatType);
    }
}
