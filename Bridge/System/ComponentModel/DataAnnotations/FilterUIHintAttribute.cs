using System.Collections.Generic;

namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// An attribute used to specify the filtering behavior for a column.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, AllowMultiple = false)]
    [Obsolete("This attribute is no longer in use and will be ignored if applied.")]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class FilterUIHintAttribute : Attribute
    {
        /// <summary>
        /// Gets the name of the control that is most appropriate for this associated
        /// property or field
        /// </summary>
        public extern string FilterUIHint { get; }

        /// <summary>
        /// Gets the name of the presentation layer that supports the control type
        /// in <see cref="FilterUIHint"/>
        /// </summary>
        public extern string PresentationLayer { get; }

        /// <summary>
        /// Gets the name-value pairs used as parameters to the control's constructor
        /// </summary>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute
        /// is ill-formed.</exception>
        public extern IDictionary<string, object> ControlParameters { get; }

        /// <summary>
        /// Constructor that accepts the name of the control, without specifying
        /// which presentation layer to use
        /// </summary>
        /// <param name="filterUIHint">The name of the UI control.</param>
        public extern FilterUIHintAttribute(string filterUIHint);

        /// <summary>
        /// Constructor that accepts both the name of the control as well as the
        /// presentation layer
        /// </summary>
        /// <param name="filterUIHint">The name of the control to use</param>
        /// <param name="presentationLayer">The name of the presentation layer that
        /// supports this control</param>
        public extern FilterUIHintAttribute(string filterUIHint, string presentationLayer);

        /// <summary>
        /// Full constructor that accepts the name of the control, presentation layer,
        /// and optional parameters to use when constructing the control
        /// </summary>
        /// <param name="filterUIHint">The name of the control</param>
        /// <param name="presentationLayer">The presentation layer</param>
        /// <param name="controlParameters">The list of parameters for the control</param>
        public extern FilterUIHintAttribute(string filterUIHint, string presentationLayer,
            params object[] controlParameters);
    }
}
