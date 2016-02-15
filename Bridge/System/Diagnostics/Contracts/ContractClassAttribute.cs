using Bridge;

namespace System.Diagnostics.Contracts
{
    /// <summary>
    /// Types marked with this attribute specify that a separate type contains the contracts for this type.
    /// </summary>
    [Conditional("CONTRACTS_FULL")]
    [Conditional("DEBUG")]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Interface | AttributeTargets.Delegate, AllowMultiple = false, Inherited = false)]
    [External]
    public sealed class ContractClassAttribute : Attribute
    {
        public extern ContractClassAttribute(Type typeContainingContracts);

        public extern Type TypeContainingContracts
        {
            get;
            private set;
        }
    }
}