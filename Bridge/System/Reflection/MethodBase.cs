using System.ComponentModel;

namespace System.Reflection
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    public class MethodBase : MemberInfo
    {
        public extern Type[] ParameterTypes
        {
            [Bridge.Template("({this}.p || [])")]
            get;
        }

        public extern bool IsConstructor
        {
            [Bridge.Template("({this}.t === 1)")]
            get;
        }

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern MethodBase GetMethodFromHandle(RuntimeMethodHandle h);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern MethodBase GetMethodFromHandle(RuntimeMethodHandle h, RuntimeTypeHandle x);

        [Bridge.Template("({this}.pi || [])")]
        public extern ParameterInfo[] GetParameters();

        internal extern MethodBase();
    }
}