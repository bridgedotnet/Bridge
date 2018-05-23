namespace System.Reflection
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Unbox(true)]
    public abstract class PropertyInfo : MemberInfo
    {
        [Bridge.Name("rt")]
        public extern Type PropertyType
        {
            get;
        }

        public extern Type[] IndexParameterTypes
        {
            [Bridge.Template("({this}.p || [])")]
            get;
        }

        [Bridge.Template("({this}.ipi || [])")]
        public extern ParameterInfo[] GetIndexParameters();

        public extern bool CanRead
        {
            [Bridge.Template("(!!{this}.g)")]
            get;
        }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern bool IsIndexer
        {
            [Bridge.Template("({this}.i || false)")]
            get;
        }

        public extern bool CanWrite
        {
            [Bridge.Template("(!!{this}.s)")]
            get;
        }

        [Bridge.Name("g")]
        public extern MethodInfo GetMethod
        {
            get;
        }

        [Bridge.Name("s")]
        public extern MethodInfo SetMethod
        {
            get;
        }

        [Bridge.Template("Bridge.Reflection.midel({this}.g, {obj})()")]
        public extern object GetValue(object obj);

        [Bridge.Template("Bridge.Reflection.midel({this}.g, {obj}).apply(null, {index})")]
        public extern object GetValue(object obj, object[] index);

        [Bridge.Template("Bridge.Reflection.midel({this}.s, {obj:nobox})({value:nobox})")]
        public extern void SetValue(object obj, object value);

        [Bridge.Template("Bridge.Reflection.midel({this}.s, {obj:nobox}).apply(null, ({index:nobox} || []).concat({value:nobox}))")]
        public extern void SetValue(object obj, object value, object[] index);

        /// <summary>
        /// For properties implemented as fields, contains the name of the field. Null for properties implemented as get and set methods.
        /// </summary>
        [Bridge.Name("fn")]
        public extern string ScriptFieldName
        {
            get;
        }

        internal extern PropertyInfo();
    }
}