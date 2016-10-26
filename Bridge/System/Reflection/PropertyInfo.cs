using Bridge;

namespace System.Reflection
{
    [External]
    public class PropertyInfo : MemberInfo
    {
        [Name("rt")]
        [FieldProperty]
        public extern Type PropertyType
        {
            get;
        }

        public extern Type[] IndexParameterTypes
        {
            [Template("({this}.p || [])")]
            get;
        }

        [Template("({this}.ipi || [])")]
        public extern ParameterInfo[] GetIndexParameters();

        public extern bool CanRead
        {
            [Template("(!!{this}.g)")]
            get;
        }

        [FieldProperty]
        public extern bool IsIndexer
        {
            [Template("({this}.i || false)")]
            get;
        }

        public extern bool CanWrite
        {
            [Template("(!!{this}.s)")]
            get;
        }

        [Name("g")]
        [FieldProperty]
        public extern MethodInfo GetMethod
        {
            get;
        }

        [Name("s")]
        [FieldProperty]
        public extern MethodInfo SetMethod
        {
            get;
        }

        [Template("Bridge.Reflection.midel({this}.g, {obj})()")]
        public extern object GetValue(object obj);

        [Template("Bridge.Reflection.midel({this}.g, {obj}).apply(null, {index})")]
        public extern object GetValue(object obj, object[] index);

        [Template("Bridge.Reflection.midel({this}.s, {obj})({value})")]
        public extern void SetValue(object obj, object value);

        [Template("Bridge.Reflection.midel({this}.s, {obj}).apply(null, {index}.concat({value}))")]
        public extern void SetValue(object obj, object value, object[] index);

        /// <summary>
        /// For properties implemented as fields, contains the name of the field. Null for properties implemented as get and set methods.
        /// </summary>
        [Name("fn")]
        [FieldProperty]
        public extern string ScriptFieldName
        {
            get;
        }

        internal extern PropertyInfo();
    }
}