using Bridge;
using System.ComponentModel;

namespace System.Reflection
{
    [External]
    [Name("Object")]
    public class MethodBase : MemberInfo
    {
        public extern Type[] ParameterTypes
        {
            [Template("({this}.p || [])")]
            get;
        }

        public extern bool IsConstructor
        {
            [Template("({this}.t === 1)")]
            get;
        }

        [NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern MethodBase GetMethodFromHandle(RuntimeMethodHandle h);

        [NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern MethodBase GetMethodFromHandle(RuntimeMethodHandle h, RuntimeTypeHandle x);

        [Template("({this}.pi || [])")]
        public extern ParameterInfo[] GetParameters();

        internal extern MethodBase();
    }
}