using Bridge;

namespace System.Reflection
{
    [External]
    public class MethodInfo : MethodBase
    {
        [Field]
        [Name("rt")]
        public extern Type ReturnType
        {
            get;
            private set;
        }

        /// <summary>
        /// Returns an array of all custom attributes applied to this member.
        /// </summary>
        /// <param name="inherit">Ignored for members. Base members will never be considered.</param>
        /// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined. </returns>
        [Template("({this}.rta || [])")]
        public extern object[] GetReturnTypeCustomAttributes(bool inherit);

        /// <summary>
        /// Returns an array of custom attributes applied to this member and identified by <see cref="T:System.Type"/>.
        /// </summary>
        /// <param name="attributeType">The type of attribute to search for. Only attributes that are assignable to this type are returned. </param>
        /// <param name="inherit">Ignored for members. Base members will never be considered.</param>
        /// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined.</returns>
        [Template("({this}.rta || []).filter(function(a) { return Bridge.is(a, {attributeType}); })")]
        public extern object[] GetReturnTypeCustomAttributes(Type attributeType, bool inherit);

        /// <summary>
        /// Returns an array of all custom attributes applied to this member.
        /// </summary>
        /// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined. </returns>
        [Template("({this}.rta || [])")]
        public extern object[] GetReturnTypeCustomAttributes();

        /// <summary>
        /// Returns an array of custom attributes applied to this member and identified by <see cref="T:System.Type"/>.
        /// </summary>
        /// <param name="attributeType">The type of attribute to search for. Only attributes that are assignable to this type are returned. </param>
        /// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined.</returns>
        [Template("({this}.rta || []).filter(function(a) { return Bridge.is(a, {attributeType}); })")]
        public extern object[] GetReturnTypeCustomAttributes(Type attributeType);

        [Template("Bridge.Reflection.midel({this})")]
        public extern Delegate CreateDelegate(Type delegateType);

        [Template("Bridge.Reflection.midel({this}, {target})")]
        public extern Delegate CreateDelegate(Type delegateType, object target);

        [Template("Bridge.Reflection.midel({this})")]
        public extern Delegate CreateDelegate();

        [Template("Bridge.Reflection.midel({this}, {target})")]
        public extern Delegate CreateDelegate(object target);

        [Template("Bridge.Reflection.midel({this}, null, {typeArguments})")]
        public extern Delegate CreateDelegate(Type[] typeArguments);

        [Template("Bridge.Reflection.midel({this}, {target}, {typeArguments})")]
        public extern Delegate CreateDelegate(object target, Type[] typeArguments);

        public extern int TypeParameterCount
        {
            [Template("({this}.tpc || 0)")]
            get;
            [Template("X")]
            private set;
        }

        public extern bool IsGenericMethodDefinition
        {
            [Template("(!!{this}.tpc)")]
            get;
            [Template("X")]
            private set;
        }

        [Template("Bridge.Reflection.midel({this}, {obj})({*arguments})", "Bridge.Reflection.midel({this}, {obj}).apply(null, {arguments:array})")]
        public extern object Invoke(object obj, params object[] arguments);

        [Template("Bridge.Reflection.midel({this}, {obj}, {typeArguments})({*arguments})", "Bridge.Reflection.midel({this}, {obj}, {typeArguments}).apply(null, {arguments:array})")]
        public extern object Invoke(object obj, Type[] typeArguments, params object[] arguments);

        /// <summary>
        /// Script name of the method. Null if the method has a special implementation.
        /// </summary>
        [Name("sn")]
        [Field]
        public extern string ScriptName
        {
            get;
            private set;
        }

        /// <summary>
        /// For methods with a special implementation (eg. [Template]), contains a delegate that represents the method. Null for normal methods.
        /// </summary>
        [Name("def")]
        [Field]
        public extern Delegate SpecialImplementation
        {
            get;
            private set;
        }

        /// <summary>
        /// Whether the [ExpandParams] attribute was specified on the method.
        /// </summary>
        public extern bool IsExpandParams
        {
            [Template("{this}.exp || false")]
            get;

            [Template("{this}.exp = {value}")]
            private set;
        }

        /// <summary>
        /// Returns an array of Type objects that represent the type arguments of a generic method or the type parameters of a generic method definition.
        /// </summary>
        /// <returns>An array of Type objects that represent the type arguments of a generic method or the type parameters of a generic method definition. Returns an empty array if the current method is not a generic method.</returns>
        [Template("Bridge.Reflection.getMethodGenericArguments({this})")]
        public extern Type[] GetGenericArguments();

        internal extern MethodInfo();
    }
}