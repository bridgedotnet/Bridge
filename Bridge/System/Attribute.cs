using System.Reflection;

namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Attribute")]
    [AttributeUsageAttribute(AttributeTargets.All, Inherited = true, AllowMultiple = false)]
    public class Attribute : Bridge.IBridgeClass
    {
        protected extern Attribute();

        /// <summary>
        /// Retrieves an array of the custom attributes applied to an assembly. A parameter specifies the assembly.
        /// </summary>
        /// <param name="element">An object derived from the Assembly class that describes a reusable collection of modules.</param>
        /// <returns>An Attribute array that contains the custom attributes applied to element, or an empty array if no such custom attributes exist.</returns>
        [Bridge.Template("System.Attribute.getCustomAttributes$1({element}, false)")]
        public static extern Attribute[] GetCustomAttributes(Assembly element);

        /// <summary>
        /// Retrieves an array of the custom attributes applied to an assembly. Parameters specify the assembly, and an ignored search option.
        /// </summary>
        /// <param name="element">An object derived from the Assembly class that describes a reusable collection of modules.</param>
        /// <param name="inherit">This parameter is ignored, and does not affect the operation of this method.</param>
        /// <returns>An Attribute array that contains the custom attributes applied to element, or an empty array if no such custom attributes exist.</returns>
        [Bridge.Template("System.Attribute.getCustomAttributes$1({element}, false, {inherit})")]
        public static extern Attribute[] GetCustomAttributes(Assembly element, bool inherit);

        /// <summary>
        /// Retrieves an array of the custom attributes applied to an assembly. Parameters specify the assembly, and the type of the custom attribute to search for.
        /// </summary>
        /// <param name="element">An object derived from the Assembly class that describes a reusable collection of modules.</param>
        /// <param name="attributeType">The type, or a base type, of the custom attribute to search for.</param>
        /// <returns>An Attribute array that contains the custom attributes of type attributeType applied to element, or an empty array if no such custom attributes exist.</returns>
        [Bridge.Template("System.Attribute.getCustomAttributes$1({element}, {attributeType})")]
        public static extern Attribute[] GetCustomAttributes(Assembly element, Type attributeType);

        /// <summary>
        /// Retrieves an array of the custom attributes applied to an assembly. Parameters specify the assembly, the type of the custom attribute to search for, and an ignored search option.
        /// </summary>
        /// <param name="element">An object derived from the Assembly class that describes a reusable collection of modules.</param>
        /// <param name="attributeType">The type, or a base type, of the custom attribute to search for.</param>
        /// <param name="inherit">This parameter is ignored, and does not affect the operation of this method.</param>
        /// <returns>An Attribute array that contains the custom attributes of type attributeType applied to element, or an empty array if no such custom attributes exist.</returns>
        [Bridge.Template("System.Attribute.getCustomAttributes$1({element}, {attributeType}, {inherit})")]
        public static extern Attribute[] GetCustomAttributes(Assembly element, Type attributeType, bool inherit);

        /// <summary>
        /// Retrieves an array of the custom attributes applied to a member of a type. A parameter specifies the member.
        /// </summary>
        /// <param name="element">An object derived from the MemberInfo class that describes a constructor, event, field, method, or property member of a class.</param>
        /// <returns>An Attribute array that contains the custom attributes applied to element, or an empty array if no such custom attributes exist.</returns>
        [Bridge.Template("System.Attribute.getCustomAttributes({element}, false)")]
        public static extern Attribute[] GetCustomAttributes(MemberInfo element);

        /// <summary>
        /// Retrieves an array of the custom attributes applied to a member of a type. Parameters specify the member, the type of the custom attribute to search for, and whether to search ancestors of the member.
        /// </summary>
        /// <param name="element">An object derived from the MemberInfo class that describes a constructor, event, field, method, or property member of a class.</param>
        /// <param name="inherit">If true, specifies to also search the ancestors of element for custom attributes.</param>
        /// <returns>An Attribute array that contains the custom attributes applied to element, or an empty array if no such custom attributes exist.</returns>
        [Bridge.Template("System.Attribute.getCustomAttributes({element}, false, {inherit})")]
        public static extern Attribute[] GetCustomAttributes(MemberInfo element, bool inherit);

        /// <summary>
        /// Retrieves an array of the custom attributes applied to a member of a type. Parameters specify the member, and the type of the custom attribute to search for.
        /// </summary>
        /// <param name="element">An object derived from the MemberInfo class that describes a constructor, event, field, method, or property member of a class.</param>
        /// <param name="type">The type, or a base type, of the custom attribute to search for.</param>
        /// <returns>An Attribute array that contains the custom attributes of type type applied to element, or an empty array if no such custom attributes exist.</returns>
        [Bridge.Template("System.Attribute.getCustomAttributes({element}, {type})")]
        public static extern Attribute[] GetCustomAttributes(MemberInfo element, Type type);

        /// <summary>
        /// Retrieves an array of the custom attributes applied to a member of a type. Parameters specify the member, the type of the custom attribute to search for, and whether to search ancestors of the member.
        /// </summary>
        /// <param name="element">An object derived from the MemberInfo class that describes a constructor, event, field, method, or property member of a class.</param>
        /// <param name="type">The type, or a base type, of the custom attribute to search for.</param>
        /// <param name="inherit">If true, specifies to also search the ancestors of element for custom attributes.</param>
        /// <returns>An Attribute array that contains the custom attributes of type type applied to element, or an empty array if no such custom attributes exist.</returns>
        [Bridge.Template("System.Attribute.getCustomAttributes({element}, {type}, {inherit})")]
        public static extern Attribute[] GetCustomAttributes(MemberInfo element, Type type, bool inherit);

        /// <summary>
        /// Retrieves an array of the custom attributes applied to a method parameter. A parameter specifies the method parameter.
        /// </summary>
        /// <param name="element">An object derived from the ParameterInfo class that describes a parameter of a member of a class.</param>
        /// <returns>An Attribute array that contains the custom attributes applied to element, or an empty array if no such custom attributes exist.</returns>
        [Bridge.Template("System.Attribute.getCustomAttributes({element}, false)")]
        public static extern Attribute[] GetCustomAttributes(ParameterInfo element);

        /// <summary>
        /// Retrieves an array of the custom attributes applied to a method parameter. Parameters specify the method parameter, and whether to search ancestors of the method parameter.
        /// </summary>
        /// <param name="element">An object derived from the ParameterInfo class that describes a parameter of a member of a class.</param>
        /// <param name="inherit">If true, specifies to also search the ancestors of element for custom attributes.</param>
        /// <returns>An Attribute array that contains the custom attributes applied to element, or an empty array if no such custom attributes exist.</returns>
        [Bridge.Template("System.Attribute.getCustomAttributes({element}, false, {inherit})")]
        public static extern Attribute[] GetCustomAttributes(ParameterInfo element, bool inherit);

        /// <summary>
        /// Retrieves an array of the custom attributes applied to a method parameter. Parameters specify the method parameter, and the type of the custom attribute to search for.
        /// </summary>
        /// <param name="element">An object derived from the ParameterInfo class that describes a parameter of a member of a class.</param>
        /// <param name="attributeType">The type, or a base type, of the custom attribute to search for.</param>
        /// <returns>An Attribute array that contains the custom attributes of type attributeType applied to element, or an empty array if no such custom attributes exist.</returns>
        [Bridge.Template("System.Attribute.getCustomAttributes({element}, {attributeType})")]
        public static extern Attribute[] GetCustomAttributes(ParameterInfo element, Type attributeType);

        /// <summary>
        /// Retrieves an array of the custom attributes applied to a method parameter. Parameters specify the method parameter, the type of the custom attribute to search for, and whether to search ancestors of the method parameter.
        /// </summary>
        /// <param name="element">An object derived from the ParameterInfo class that describes a parameter of a member of a class.</param>
        /// <param name="attributeType">The type, or a base type, of the custom attribute to search for.</param>
        /// <param name="inherit">If true, specifies to also search the ancestors of element for custom attributes.</param>
        /// <returns>An Attribute array that contains the custom attributes of type attributeType applied to element, or an empty array if no such custom attributes exist.</returns>
        [Bridge.Template("System.Attribute.getCustomAttributes({element}, {attributeType}, {inherit})")]
        public static extern Attribute[] GetCustomAttributes(ParameterInfo element, Type attributeType, bool inherit);
    }
}