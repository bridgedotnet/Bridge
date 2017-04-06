using Bridge;

namespace System
{
    [External]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
    public interface ICloneable : IBridgeClass
    {
        [Template("Bridge.clone({this})")]
        object Clone();
    }
}