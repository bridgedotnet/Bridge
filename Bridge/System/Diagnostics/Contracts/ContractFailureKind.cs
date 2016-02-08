using System.Runtime.CompilerServices;
using Bridge;

namespace System.Diagnostics.Contracts
{
    [Namespace("Bridge")]
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
