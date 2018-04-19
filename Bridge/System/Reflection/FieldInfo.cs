using System.ComponentModel;

namespace System.Reflection
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Unbox(true)]
    public abstract partial class FieldInfo : MemberInfo
    {
        [Bridge.Name("rt")]
        public extern Type FieldType
        {
            get;
            private set;
        }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern bool IsInitOnly
        {
            [Bridge.Template("({this}.ro || false)")]
            get;
        }

        [Bridge.Template("Bridge.Reflection.fieldAccess({this}, {obj})")]
        public extern object GetValue(object obj);

        [Bridge.Template("Bridge.Reflection.fieldAccess({this}, {obj}, {value})")]
        public extern void SetValue(object obj, object value);

        /// <summary>
        /// Script name of the field
        /// </summary>
        [Bridge.Name("sn")]
        public extern string ScriptName
        {
            get;
            private set;
        }

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern FieldInfo GetFieldFromHandle(RuntimeFieldHandle h);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern FieldInfo GetFieldFromHandle(RuntimeFieldHandle h, RuntimeTypeHandle x);

        internal extern FieldInfo();
    }
}