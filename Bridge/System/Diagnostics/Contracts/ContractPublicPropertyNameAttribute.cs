namespace System.Diagnostics.Contracts
{
    /// <summary>
    /// Allows a field f to be used in the method contracts for a method m when f has less visibility than m.
    /// For instance, if the method is public, but the field is private.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Conditional("CONTRACTS_FULL")]
    [AttributeUsage(AttributeTargets.Field)]
    [Bridge.External]
    public sealed class ContractPublicPropertyNameAttribute : Attribute
    {
        public extern ContractPublicPropertyNameAttribute(String name);

        public extern String Name
        {
            get;
            private set;
        }
    }
}