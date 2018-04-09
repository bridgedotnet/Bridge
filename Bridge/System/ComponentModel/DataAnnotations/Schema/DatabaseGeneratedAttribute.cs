namespace System.ComponentModel.DataAnnotations.Schema
{
    /// <summary>
    /// Specifies how the database generates values for a property.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, AllowMultiple = false)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public class DatabaseGeneratedAttribute : Attribute
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DatabaseGeneratedAttribute" /> class.
        /// </summary>
        /// <param name="databaseGeneratedOption">The pattern used to generate values for the property in the database.</param>
        public extern DatabaseGeneratedAttribute(DatabaseGeneratedOption databaseGeneratedOption);

        /// <summary>
        /// The pattern used to generate values for the property in the database.
        /// </summary>
        public extern DatabaseGeneratedOption DatabaseGeneratedOption { get; }
    }
}
