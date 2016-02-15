using Bridge;

namespace System.Diagnostics.Contracts
{
    /// <summary>
    /// Types marked with this attribute specify that they are a contract for the type that is the argument of the constructor.
    /// </summary>
    [Conditional("CONTRACTS_FULL")]
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false, Inherited = false)]
    [External]
    public sealed class ContractClassForAttribute : Attribute
    {
        public extern ContractClassForAttribute(Type typeContractsAreFor);

        public extern Type TypeContractsAreFor
        {
            get;
            private set;
        }
    }
}