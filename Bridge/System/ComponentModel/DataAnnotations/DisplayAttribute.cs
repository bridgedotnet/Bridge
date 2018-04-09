namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// DisplayAttribute is a general-purpose attribute to specify user-visible globalizable strings for types and members.
    /// The string properties of this class can be used either as literals or as resource identifiers into a specified
    /// <see cref="ResourceType" />
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(
        AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter | AttributeTargets.Method,
        AllowMultiple = false)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class DisplayAttribute : Attribute
    {
        /// <summary>
        /// Gets or sets the ShortName attribute property, which may be a resource key string.
        /// <para>
        ///     Consumers must use the <see cref="GetShortName" /> method to retrieve the UI display string.
        /// </para>
        /// </summary>
        public extern string ShortName { get; set; }

        /// <summary>
        /// Gets or sets the Name attribute property, which may be a resource key string.
        /// <para>
        ///     Consumers must use the <see cref="GetName" /> method to retrieve the UI display string.
        /// </para>
        /// </summary>
        public extern string Name { get; set; }

        /// <summary>
        /// Gets or sets the Description attribute property, which may be a resource key string.
        /// <para>
        ///     Consumers must use the <see cref="GetDescription" /> method to retrieve the UI display string.
        /// </para>
        /// </summary>
        public extern string Description { get; set; }

        /// <summary>
        /// Gets or sets the Prompt attribute property, which may be a resource key string.
        /// <para>
        ///     Consumers must use the <see cref="GetPrompt" /> method to retrieve the UI display string.
        /// </para>
        /// </summary>
        public extern string Prompt { get; set; }

        /// <summary>
        /// Gets or sets the GroupName attribute property, which may be a resource key string.
        /// <para>
        ///     Consumers must use the <see cref="GetGroupName" /> method to retrieve the UI display string.
        /// </para>
        /// </summary>
        public extern string GroupName { get; set; }

        /// <summary>
        /// Gets or sets the <see cref="System.Type" /> that contains the resources for <see cref="ShortName" />,
        /// <see cref="Name" />, <see cref="Description" />, <see cref="Prompt" />, and <see cref="GroupName" />.
        /// Using <see cref="ResourceType" /> along with these Key properties, allows the <see cref="GetShortName" />,
        /// <see cref="GetName" />, <see cref="GetDescription" />, <see cref="GetPrompt" />, and <see cref="GetGroupName" />
        /// methods to return localized values.
        /// </summary>
        public extern Type ResourceType { get; set; }

        /// <summary>
        /// Gets or sets whether UI should be generated automatically to display this field. If this property is not
        /// set then the presentation layer will automatically determine whether UI should be generated. Setting this
        /// property allows an override of the default behavior of the presentation layer.
        /// <para>
        ///     Consumers must use the <see cref="GetAutoGenerateField" /> method to retrieve the value, as this property
        ///     getter will throw
        ///     an exception if the value has not been set.
        /// </para>
        /// </summary>
        /// <exception cref="System.InvalidOperationException">
        /// If the getter of this property is invoked when the value has not been explicitly set using the setter.
        /// </exception>
        public extern bool AutoGenerateField { get; set; }

        /// <summary>
        /// Gets or sets whether UI should be generated automatically to display filtering for this field. If this property is
        /// not
        /// set then the presentation layer will automatically determine whether filtering UI should be generated. Setting this
        /// property allows an override of the default behavior of the presentation layer.
        /// <para>
        ///     Consumers must use the <see cref="GetAutoGenerateFilter" /> method to retrieve the value, as this property
        ///     getter will throw
        ///     an exception if the value has not been set.
        /// </para>
        /// </summary>
        /// <exception cref="System.InvalidOperationException">
        /// If the getter of this property is invoked when the value has not been explicitly set using the setter.
        /// </exception>
        public extern bool AutoGenerateFilter { get; set; }

        /// <summary>
        /// Gets or sets the order in which this field should be displayed.  If this property is not set then
        /// the presentation layer will automatically determine the order.  Setting this property explicitly
        /// allows an override of the default behavior of the presentation layer.
        /// <para>
        ///     Consumers must use the <see cref="GetOrder" /> method to retrieve the value, as this property getter will throw
        ///     an exception if the value has not been set.
        /// </para>
        /// </summary>
        /// <exception cref="System.InvalidOperationException">
        /// If the getter of this property is invoked when the value has not been explicitly set using the setter.
        /// </exception>
        public extern int Order { get; set; }

        /// <summary>
        /// Gets the UI display string for ShortName.
        /// <para>
        ///     This can be either a literal, non-localized string provided to <see cref="ShortName" /> or the
        ///     localized string found when <see cref="ResourceType" /> has been specified and <see cref="ShortName" />
        ///     represents a resource key within that resource type.
        /// </para>
        /// </summary>
        /// <exception cref="System.InvalidOperationException">
        /// After setting both the <see cref="ResourceType" /> property and the <see cref="ShortName" /> property,
        /// but a public static property with a name matching the <see cref="ShortName" /> value couldn't be found
        /// on the <see cref="ResourceType" />.
        /// </exception>
        public extern string GetShortName();

        /// <summary>
        /// Gets the UI display string for Name.
        /// <para>
        ///     This can be either a literal, non-localized string provided to <see cref="Name" /> or the
        ///     localized string found when <see cref="ResourceType" /> has been specified and <see cref="Name" />
        ///     represents a resource key within that resource type.
        /// </para>
        /// </summary>
        /// <exception cref="System.InvalidOperationException">
        /// After setting both the <see cref="ResourceType" /> property and the <see cref="Name" /> property,
        /// but a public static property with a name matching the <see cref="Name" /> value couldn't be found
        /// on the <see cref="ResourceType" />.
        /// </exception>
        public extern string GetName();

        /// <summary>
        /// Gets the UI display string for Description.
        /// <para>
        ///     This can be either a literal, non-localized string provided to <see cref="Description" /> or the
        ///     localized string found when <see cref="ResourceType" /> has been specified and <see cref="Description" />
        ///     represents a resource key within that resource type.
        /// </para>
        /// </summary>
        /// <exception cref="System.InvalidOperationException">
        /// After setting both the <see cref="ResourceType" /> property and the <see cref="Description" /> property,
        /// but a public static property with a name matching the <see cref="Description" /> value couldn't be found
        /// on the <see cref="ResourceType" />.
        /// </exception>
        public extern string GetDescription();

        /// <summary>
        /// Gets the UI display string for Prompt.
        /// <para>
        ///     This can be either a literal, non-localized string provided to <see cref="Prompt" /> or the
        ///     localized string found when <see cref="ResourceType" /> has been specified and <see cref="Prompt" />
        ///     represents a resource key within that resource type.
        /// </para>
        /// </summary>
        /// <exception cref="System.InvalidOperationException">
        /// After setting both the <see cref="ResourceType" /> property and the <see cref="Prompt" /> property,
        /// but a public static property with a name matching the <see cref="Prompt" /> value couldn't be found
        /// on the <see cref="ResourceType" />.
        /// </exception>
        public extern string GetPrompt();

        /// <summary>
        /// Gets the UI display string for GroupName.
        /// <para>
        ///     This can be either a literal, non-localized string provided to <see cref="GroupName" /> or the
        ///     localized string found when <see cref="ResourceType" /> has been specified and <see cref="GroupName" />
        ///     represents a resource key within that resource type.
        /// </para>
        /// </summary>
        /// <exception cref="System.InvalidOperationException">
        /// After setting both the <see cref="ResourceType" /> property and the <see cref="GroupName" /> property,
        /// but a public static property with a name matching the <see cref="GroupName" /> value couldn't be found
        /// on the <see cref="ResourceType" />.
        /// </exception>
        public extern string GetGroupName();

        /// <summary>
        /// Gets the value of <see cref="AutoGenerateField" /> if it has been set, or <c>null</c>.
        /// </summary>
        public extern bool? GetAutoGenerateField();

        /// <summary>
        /// Gets the value of <see cref="AutoGenerateFilter" /> if it has been set, or <c>null</c>.
        /// </summary>
        public extern bool? GetAutoGenerateFilter();

        /// <summary>
        /// Gets the value of <see cref="Order" /> if it has been set, or <c>null</c>.
        /// </summary>
        public extern int? GetOrder();
    }
}
