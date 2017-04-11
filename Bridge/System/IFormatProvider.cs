using Bridge;

namespace System
{
    [External]
    [Convention(Target = ConventionTarget.Member, Member = ConventionMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IFormatProvider : IBridgeClass
    {
        object GetFormat(Type formatType);
    }
}