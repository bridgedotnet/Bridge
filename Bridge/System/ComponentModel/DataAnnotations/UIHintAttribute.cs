using System.Collections.Generic;

namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Attribute to provide a hint to the presentation layer about what control it should use
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, AllowMultiple = true)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public class UIHintAttribute : Attribute
    {
        /// <summary>
        /// Constructor that accepts the name of the control, without specifying which presentation layer to use
        /// </summary>
        /// <param name="uiHint">The name of the UI control.</param>
        public extern UIHintAttribute(string uiHint);

        /// <summary>
        /// Constructor that accepts both the name of the control as well as the presentation layer
        /// </summary>
        /// <param name="uiHint">The name of the control to use</param>
        /// <param name="presentationLayer">The name of the presentation layer that supports this control</param>
        public extern UIHintAttribute(string uiHint, string presentationLayer);

        /// <summary>
        /// Full constructor that accepts the name of the control, presentation layer, and optional parameters
        /// to use when constructing the control
        /// </summary>
        /// <param name="uiHint">The name of the control</param>
        /// <param name="presentationLayer">The presentation layer</param>
        /// <param name="controlParameters">The list of parameters for the control</param>
        public extern UIHintAttribute(string uiHint, string presentationLayer, params object[] controlParameters);

        /// <summary>
        /// Gets the name of the control that is most appropriate for this associated property or field
        /// </summary>
        public extern string UIHint { get; }

        /// <summary>
        /// Gets the name of the presentation layer that supports the control type in <see cref="UIHint" />
        /// </summary>
        public extern string PresentationLayer { get; }

        /// <summary>
        /// Gets the name-value pairs used as parameters to the control's constructor
        /// </summary>
        /// <exception cref="InvalidOperationException"> is thrown if the current attribute is ill-formed.</exception>
        public extern IDictionary<string, object> ControlParameters { get; }
    }
}
