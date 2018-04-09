namespace System.Reflection
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    public class MemberInfo
    {
        [Bridge.Name("t")]
        public extern MemberTypes MemberType
        {
            get;
        }

        [Bridge.Name("n")]
        public extern string Name
        {
            get;
        }

        [Bridge.Name("td")]
        public extern Type DeclaringType
        {
            get;
        }

        public extern bool IsStatic
        {
            [Bridge.Template("({this}.is || false)")]
            get;
        }

        public extern bool IsOverride
        {
            [Bridge.Template("({this}.ov || false)")]
            get;
        }

        public extern bool IsVirtual
        {
            [Bridge.Template("({this}.v || false)")]
            get;
        }

        public extern bool IsAbstract
        {
            [Bridge.Template("({this}.ab || false)")]
            get;
        }

        public extern bool IsSealed
        {
            [Bridge.Template("({this}.sl || false)")]
            get;
        }

        public extern bool IsSpecialName
        {
            [Bridge.Template("({this}.sy || false)")]
            get;
        }

        public extern bool IsFamily
        {
            [Bridge.Template("({this}.a === 3)")]
            get;
        }

        public extern bool IsFamilyOrAssembly
        {
            [Bridge.Template("({this}.a === 5)")]
            get;
        }

        public extern bool IsFamilyAndAssembly
        {
            [Bridge.Template("({this}.a === 6)")]
            get;
        }

        public extern bool IsPrivate
        {
            [Bridge.Template("({this}.a === 1)")]
            get;
        }

        public extern bool IsPublic
        {
            [Bridge.Template("({this}.a === 2)")]
            get;
        }

        public extern bool IsAssembly
        {
            [Bridge.Template("({this}.a === 4)")]
            get;
        }

        /// <summary>
        /// Returns an array of all custom attributes applied to this member.
        /// </summary>
        /// <param name="inherit">Ignored for members. Base members will never be considered.</param>
        /// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined. </returns>
        [Bridge.Template("System.Attribute.getCustomAttributes({this}, false, {inherit})")]
        public extern object[] GetCustomAttributes(bool inherit);

        /// <summary>
        /// Returns an array of custom attributes applied to this member and identified by <see cref="T:System.Type"/>.
        /// </summary>
        /// <param name="attributeType">The type of attribute to search for. Only attributes that are assignable to this type are returned. </param>
        /// <param name="inherit">Ignored for members. Base members will never be considered.</param>
        /// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined.</returns>
        [Bridge.Template("System.Attribute.getCustomAttributes({this}, {attributeType}, {inherit})")]
        public extern object[] GetCustomAttributes(Type attributeType, bool inherit);

        /// <summary>
        /// Returns an array of all custom attributes applied to this member.
        /// </summary>
        /// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined. </returns>
        [Bridge.Template("System.Attribute.getCustomAttributes({this}, false)")]
        public extern object[] GetCustomAttributes();

        /// <summary>
        /// Returns an array of custom attributes applied to this member and identified by <see cref="T:System.Type"/>.
        /// </summary>
        /// <param name="attributeType">The type of attribute to search for. Only attributes that are assignable to this type are returned. </param>
        /// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined.</returns>
        [Bridge.Template("System.Attribute.getCustomAttributes({this}, {attributeType})")]
        public extern object[] GetCustomAttributes(Type attributeType);

        public bool IsDefined(Type attributeType, bool inherit)
        {
            throw new NotImplementedException();
        }

        internal extern MemberInfo();
    }
}