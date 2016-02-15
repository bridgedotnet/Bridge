using Bridge;

namespace System
{
    [Namespace("Bridge")]
    [External]
    public interface ICloneable : IBridgeClass
    {
        [Template("Bridge.clone({this})")]
        object Clone();
    }
}