using System.Collections.Generic;

namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Used to mark an Entity member as an association
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Property, AllowMultiple = false,
        Inherited = true)]
    [Obsolete("This attribute is no longer in use and will be ignored if applied.")]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class AssociationAttribute : Attribute
    {
        /// <summary>
        /// Full form of constructor
        /// </summary>
        /// <param name="name">The name of the association. For bi-directional associations,
        /// the name must be the same on both sides of the association</param>
        /// <param name="thisKey">Comma separated list of the property names of the key values
        /// on this side of the association</param>
        /// <param name="otherKey">Comma separated list of the property names of the key values
        /// on the other side of the association</param>
        public extern AssociationAttribute(string name, string thisKey, string otherKey);

        /// <summary>
        /// Gets the name of the association. For bi-directional associations, the name must
        /// be the same on both sides of the association
        /// </summary>
        public extern string Name { get; }

        /// <summary>
        /// Gets a comma separated list of the property names of the key values
        /// on this side of the association
        /// </summary>
        public extern string ThisKey { get; }

        /// <summary>
        /// Gets a comma separated list of the property names of the key values
        /// on the other side of the association
        /// </summary>
        public extern string OtherKey { get; }

        /// <summary>
        /// Gets or sets a value indicating whether this association member represents
        /// the foreign key side of an association
        /// </summary>
        public extern bool IsForeignKey { get; set; }

        /// <summary>
        /// Gets the collection of individual key members specified in the ThisKey string.
        /// </summary>
        public extern IEnumerable<string> ThisKeyMembers { get; }

        /// <summary>
        /// Gets the collection of individual key members specified in the OtherKey string.
        /// </summary>
        public extern IEnumerable<string> OtherKeyMembers { get; }
    }
}
