namespace System.Diagnostics.Contracts
{
    [Bridge.Enum(Bridge.Emit.Name)]
    [Bridge.External]
    public enum ContractFailureKind
    {
        Precondition,
        Postcondition,
        PostconditionOnException,
        Invariant,
        Assert,
        Assume,
    }
}