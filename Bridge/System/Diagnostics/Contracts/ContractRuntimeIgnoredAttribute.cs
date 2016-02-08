using System.Runtime.CompilerServices;
using Bridge;

namespace System.Diagnostics.Contracts
{
    /// <summary>
    /// Methods (and properties) marked with this attribute can be used within calls to Contract methods, but have no runtime behavior associated with them.
    /// </summary>
    [Conditional("CONTRACTS_FULL")]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Property, AllowMultiple = false, Inherited = true)]
    [External]
    public sealed class ContractRuntimeIgnoredAttribute : Attribute
    {
    }
}
