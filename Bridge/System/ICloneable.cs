using Bridge;
namespace System
{
    [Namespace("Bridge")]
    [Ignore]
    public interface ICloneable : IBridgeClass
    {
        [Template("Bridge.clone({this})")]
        object Clone();
    }
}
