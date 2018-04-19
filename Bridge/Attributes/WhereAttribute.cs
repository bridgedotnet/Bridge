using System;

namespace Bridge
{
    /// <summary>
    /// Allows to configure flexible constraints for generic type parameters.
    /// 
    /// Provided multiple instances of [Where] attribute applied to a single generic type parameter,
    /// Bridge will not raise a compilation error if at least one [Where] attribute was met by the type argument.
    /// </summary>
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Interface | AttributeTargets.Delegate | AttributeTargets.Method, AllowMultiple = true)]
    public sealed class WhereAttribute : Attribute
    {
        /// <summary>
        /// If true, Bridge will consider existing implicit conversion operators
        /// in addition to inheritance chains, when checking whether constraints are met.
        /// </summary>
        public bool EnableImplicitConversion { get; set; }

        /// <summary>
        /// If true, Bridge will consider existing explicit conversion operators
        /// in addition to inheritance chains, when checking whether constraints are met.
        /// </summary>
        public bool EnableExplicitConversion { get; set; }

        /// <summary>
        /// Configures a constraint type for the specified type parameter.
        /// </summary>
        /// <param name="typeParameterName">Type parameter name. Prefer "nameof(T)" whenever possible.</param>
        /// <param name="constraintType">A constraint type that the type parameter must be convertible from.</param>
        public extern WhereAttribute(string typeParameterName, Type constraintType);

        /// <summary>
        /// Configures constraint(s) for the specified type parameter.
        /// </summary>
        /// <param name="typeParameterName">Type parameter name. Prefer "nameof(T)" whenever possible.</param>
        /// <param name="constraintTypes">One or more constraint types that the type parameter must be convertible from.</param>
        public extern WhereAttribute(string typeParameterName, params Type[] constraintTypes);

        /// <summary>
        /// Configures constraint(s) for the specified type parameter.
        /// Prefer the overloaded ctor accepting types whenever possible.
        /// </summary>
        /// <param name="typeParameterName">Type parameter name: prefer "nameof(T)" whenever possible.</param>
        /// <param name="constraintTypeNames">One or more constraint type names that the type parameter must be convertible from.</param>
        public extern WhereAttribute(string typeParameterName, params string[] constraintTypeNames);
    }
}