namespace System.Diagnostics.Contracts
{
    /// <summary>
    /// Instructs downstream tools whether to assume the correctness of this assembly, type or member without performing any verification or not.
    /// Can use [ContractVerification(false)] to explicitly mark assembly, type or member as one to *not* have verification performed on it.
    /// Most specific element found (member, type, then assembly) takes precedence.
    /// (That is useful if downstream tools allow a user to decide which polarity is the default, unmarked case.)
    /// </summary>
    /// <remarks>
    /// Apply this attribute to a type to apply to all members of the type, including nested types.
    /// Apply this attribute to an assembly to apply to all types and members of the assembly.
    /// Apply this attribute to a property to apply to both the getter and setter.
    /// </remarks>
    [Conditional("CONTRACTS_FULL")]
    [AttributeUsage(AttributeTargets.Assembly | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Method | AttributeTargets.Constructor | AttributeTargets.Property)]
    [Bridge.External]
    public sealed class ContractVerificationAttribute : Attribute
    {
        public extern ContractVerificationAttribute(bool value);

        public extern bool Value
        {
            get;
            private set;
        }
    }
}