using Bridge;

namespace System
{
    [External]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IFormatProvider : IBridgeClass
    {
        object GetFormat(Type formatType);
    }
}