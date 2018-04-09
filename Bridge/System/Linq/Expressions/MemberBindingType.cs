namespace System.Linq.Expressions
{
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Enum(Bridge.Emit.Value)]
    public enum MemberBindingType
    {
        Assignment,
        MemberBinding,
        ListBinding,
    }
}