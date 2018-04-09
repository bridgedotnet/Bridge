namespace System.Linq.Expressions
{
    [Bridge.External]
    [Bridge.Enum(Bridge.Emit.Value)]
    public enum DynamicExpressionType
    {
        MemberAccess,
        Invocation,
        Index
    }
}