namespace System
{
    /// <summary>
    /// Represents the method that defines a set of criteria and determines whether the specified object meets those criteria.
    /// </summary>
    /// <returns>
    /// true if <paramref name="obj"/> meets the criteria defined within the method represented by this delegate; otherwise, false.
    /// </returns>
    /// <param name="obj">The object to compare against the criteria defined within the method represented by this delegate.</param><typeparam name="T">The type of the object to compare.This type parameter is contravariant. That is, you can use either the type you specified or any type that is less derived. For more information about covariance and contravariance, see Covariance and Contravariance in Generics.</typeparam><filterpriority>2</filterpriority>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.Name("Function")]
    [Bridge.External]
    public delegate bool Predicate<in T>(T obj);
}