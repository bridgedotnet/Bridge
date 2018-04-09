namespace System.Diagnostics.Contracts
{
    /// <summary>
    /// Methods and classes marked with this attribute can be used within calls to Contract methods. Such methods not make any visible state changes.
    /// </summary>
    [Conditional("CONTRACTS_FULL")]
    [AttributeUsage(AttributeTargets.Constructor | AttributeTargets.Method | AttributeTargets.Property | AttributeTargets.Event | AttributeTargets.Delegate | AttributeTargets.Class | AttributeTargets.Parameter, AllowMultiple = false, Inherited = true)]
    [Bridge.External]
    public sealed class PureAttribute : Attribute
    {
    }
}