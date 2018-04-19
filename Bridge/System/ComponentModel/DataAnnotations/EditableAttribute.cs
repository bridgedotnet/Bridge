namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Indicates whether the consumer of a field or property, such as a client application,
    /// should allow editing of the value.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Property, AllowMultiple = false, Inherited = true)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class EditableAttribute : Attribute
    {
        /// <summary>
        /// Indicate whether or not a field/property is editable.
        /// </summary>
        /// <param name="allowEdit">
        /// Indicates whether the field/property is editable. The value provided will apply to both
        /// <see cref="AllowEdit" /> and <see cref="AllowInitialValue" /> unless the
        /// <see cref="AllowInitialValue" /> property is explicitly specified.
        /// </param>
        public extern EditableAttribute(bool allowEdit);

        /// <summary>
        /// Indicates whether or not the field/property allows editing of the
        /// value.
        /// </summary>
        public extern bool AllowEdit { get; }

        /// <summary>
        /// Indicates whether or not the field/property allows an initial value
        /// to be specified.
        /// </summary>
        public extern bool AllowInitialValue { get; set; }
    }
}
