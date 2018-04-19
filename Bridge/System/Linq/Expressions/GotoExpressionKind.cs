namespace System.Linq.Expressions
{
    [Bridge.External]
    [Bridge.Enum(Bridge.Emit.Value)]
    public enum GotoExpressionKind
    {
        Goto,
        Return,
        Break,
        Continue,
    }
}