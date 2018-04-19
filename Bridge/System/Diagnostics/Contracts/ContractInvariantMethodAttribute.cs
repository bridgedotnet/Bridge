namespace System.Diagnostics.Contracts
{
    /// <summary>
    /// This attribute is used to mark a method as being the invariant
    /// method for a class. The method can have any name, but it must
    /// return "void" and take no parameters. The body of the method
    /// must consist solely of one or more calls to the method
    /// Contract.Invariant. A suggested name for the method is
    /// "ObjectInvariant".
    /// </summary>
    [Conditional("CONTRACTS_FULL")]
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = false, Inherited = false)]
    [Bridge.External]
    public sealed class ContractInvariantMethodAttribute : Attribute
    {
    }
}