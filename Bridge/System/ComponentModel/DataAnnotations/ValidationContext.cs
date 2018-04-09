using System.Collections.Generic;

namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Describes the context in which a validation is being performed.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class ValidationContext: IServiceProvider
    {
        /// <summary>
        /// Construct a <see cref="ValidationContext" /> for a given object instance being validated.
        /// </summary>
        /// <param name="instance">The object instance being validated.  It cannot be <c>null</c>.</param>
        /// <exception cref="ArgumentNullException">When <paramref name="instance" /> is <c>null</c></exception>
        public extern ValidationContext(object instance);

        /// <summary>
        /// Construct a <see cref="ValidationContext" /> for a given object instance and an optional
        /// property bag of <paramref name="items" />.
        /// </summary>
        /// <param name="instance">The object instance being validated.  It cannot be null.</param>
        /// <param name="items">
        /// Optional set of key/value pairs to make available to consumers via <see cref="Items" />.
        /// If null, an empty dictionary will be created.  If not null, the set of key/value pairs will be copied into a
        /// new dictionary, preventing consumers from modifying the original dictionary.
        /// </param>
        /// <exception cref="ArgumentNullException">When <paramref name="instance" /> is <c>null</c></exception>
        public extern ValidationContext(object instance, IDictionary<object, object> items);

        /// <summary>
        /// Construct a <see cref="ValidationContext" /> for a given object instance, an optional
        /// <paramref name="serviceProvider" />, and an optional
        /// property bag of <paramref name="items" />.
        /// </summary>
        /// <param name="instance">The object instance being validated.  It cannot be null.</param>
        /// <param name="serviceProvider">
        /// Optional <see cref="IServiceProvider" /> to use when <see cref="GetService" /> is called.
        /// If it is null, <see cref="GetService" /> will always return null.
        /// </param>
        /// <param name="items">
        /// Optional set of key/value pairs to make available to consumers via <see cref="Items" />.
        /// If null, an empty dictionary will be created.  If not null, the set of key/value pairs will be copied into a
        /// new dictionary, preventing consumers from modifying the original dictionary.
        /// </param>
        /// <exception cref="ArgumentNullException">When <paramref name="instance" /> is <c>null</c></exception>
        public extern ValidationContext(object instance, IServiceProvider serviceProvider,
            IDictionary<object, object> items);

        /// <summary>
        /// Gets the object instance being validated.  While it will not be null, the state of the instance is indeterminate
        /// as it might only be partially initialized during validation.
        /// <para>Consume this instance with caution!</para>
        /// </summary>
        public extern object ObjectInstance { get; }

        /// <summary>
        /// Gets the type of the object being validated.  It will not be null.
        /// </summary>
        public extern Type ObjectType { get; }

        /// <summary>
        /// Gets or sets the user-visible name of the type or property being validated.
        /// </summary>
        public extern string DisplayName { get; set; }

        /// <summary>
        /// Gets or sets the name of the type or property being validated.
        /// </summary>
        public extern string MemberName { get; set; }

        /// <summary>
        /// Gets the dictionary of key/value pairs associated with this context.
        /// </summary>
        public extern IDictionary<object, object> Items { get; }

        /// <summary>
        /// Looks up the display name using the DisplayAttribute attached to the respective type or property.
        /// </summary>
        private extern string GetDisplayName();

        /// <summary>
        /// Initializes the <see cref="ValidationContext" /> with a service provider that can return
        /// service instances by <see cref="Type" /> when <see cref="GetService" /> is called.
        /// </summary>
        /// <param name="serviceProvider">
        /// A <see cref="Func{T, TResult}" /> that can return service instances given the
        /// desired <see cref="Type" /> when <see cref="GetService" /> is called.
        /// If it is <c>null</c>, <see cref="GetService" /> will always return <c>null</c>.
        /// </param>
        public extern void InitializeServiceProvider(Func<Type, object> serviceProvider);

        /// <summary>
        /// See <see cref="IServiceProvider.GetService(Type)" />.
        /// </summary>
        /// <param name="serviceType">The type of the service needed.</param>
        public extern object GetService(Type serviceType);
    }
}
