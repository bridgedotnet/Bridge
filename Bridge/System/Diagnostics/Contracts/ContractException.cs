namespace System.Diagnostics.Contracts
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    public sealed class ContractException : Exception
    {
        public extern ContractFailureKind Kind
        {
            get;
        }

        public extern string Failure
        {
            get;
        }

        public extern string UserMessage
        {
            get;
        }

        public extern string Condition
        {
            get;
        }

        public extern ContractException(ContractFailureKind kind, string failure, string userMessage, string condition, Exception innerException);
    }
}