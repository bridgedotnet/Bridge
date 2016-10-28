using Bridge;

namespace System.Reflection
{
    [External]
    [Name("Object")]
    public class MemberInfo
    {
        [Name("t")]
        [FieldProperty]
        public extern MemberTypes MemberType
        {
            get;
        }

        [Name("n")]
        [FieldProperty]
        public extern string Name
        {
            get;
        }

        [Name("td")]
        [FieldProperty]
        public extern Type DeclaringType
        {
            get;
        }

        public extern bool IsStatic
        {
            [Template("({this}.is || false)")]
            get;
        }

        public extern bool IsOverride
        {
            [Template("({this}.ov || false)")]
            get;
        }

        public extern bool IsVirtual
        {
            [Template("({this}.v || false)")]
            get;
        }

        public extern bool IsAbstract
        {
            [Template("({this}.ab || false)")]
            get;
        }

        public extern bool IsSealed
        {
            [Template("({this}.sl || false)")]
            get;
        }

        public extern bool IsSpecialName
        {
            [Template("({this}.sy || false)")]
            get;
        }

        public extern bool IsFamily
        {
            [Template("({this}.a === 3)")]
            get;
        }

        public extern bool IsFamilyOrAssembly
        {
            [Template("({this}.a === 5)")]
            get;
        }

        public extern bool IsPrivate
        {
            [Template("({this}.a === 1)")]
            get;
        }

        public extern bool IsPublic
        {
            [Template("({this}.a === 2)")]
            get;
        }

        public extern bool IsAssembly
        {
            [Template("({this}.a === 4)")]
            get;
        }

        /// <summary>
        /// Returns an array of all custom attributes applied to this member.
        /// </summary>
        /// <param name="inherit">Ignored for members. Base members will never be considered.</param>
        /// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined. </returns>
        [Template("({this}.at || [])")]
        public extern object[] GetCustomAttributes(bool inherit);

        /// <summary>
        /// Returns an array of custom attributes applied to this member and identified by <see cref="T:System.Type"/>.
        /// </summary>
        /// <param name="attributeType">The type of attribute to search for. Only attributes that are assignable to this type are returned. </param>
        /// <param name="inherit">Ignored for members. Base members will never be considered.</param>
        /// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined.</returns>
        [Template("({this}.at || []).filter(function(a) { return Bridge.is(a, {attributeType}); })")]
        public extern object[] GetCustomAttributes(Type attributeType, bool inherit);

        /// <summary>
        /// Returns an array of all custom attributes applied to this member.
        /// </summary>
        /// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined. </returns>
        [Template("({this}.at || [])")]
        public extern object[] GetCustomAttributes();

        /// <summary>
        /// Returns an array of custom attributes applied to this member and identified by <see cref="T:System.Type"/>.
        /// </summary>
        /// <param name="attributeType">The type of attribute to search for. Only attributes that are assignable to this type are returned. </param>
        /// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined.</returns>
        [Template("({this}.at || []).filter(function(a) { return Bridge.is(a, {attributeType}); })")]
        public extern object[] GetCustomAttributes(Type attributeType);

        internal extern MemberInfo();
    }
}