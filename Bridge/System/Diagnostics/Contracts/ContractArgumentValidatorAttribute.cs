namespace System.Diagnostics.Contracts
{
    /// <summary>
    /// Enables factoring legacy if-then-throw into separate methods for reuse and full control over
    /// thrown exception and arguments
    /// </summary>
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = false)]
    [Conditional("CONTRACTS_FULL")]
    [Bridge.External]
    public sealed class ContractArgumentValidatorAttribute : Attribute
    {
    }
}