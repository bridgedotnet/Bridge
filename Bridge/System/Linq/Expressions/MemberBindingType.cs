using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Enum(Emit.Value)]
    public enum MemberBindingType
    {
        Assignment,
        MemberBinding,
        ListBinding,
    }
}