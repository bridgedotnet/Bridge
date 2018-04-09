namespace System.Diagnostics.Contracts
{
    /// <summary>
    /// Types marked with this attribute specify that they are a contract for the type that is the argument of the constructor.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Conditional("CONTRACTS_FULL")]
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false, Inherited = false)]
    [Bridge.External]
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