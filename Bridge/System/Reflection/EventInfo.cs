using Bridge;

namespace System.Reflection
{
    [External]
    public class EventInfo : MemberInfo
    {
        [Name("ad")]
        [FieldProperty]
        public extern MethodInfo AddMethod
        {
            get;
            private set;
        }

        [Name("r")]
        [FieldProperty]
        public extern MethodInfo RemoveMethod
        {
            get;
            private set;
        }

        [Template("Bridge.Reflection.midel({this}.ad, {target})({handler})")]
        public extern void AddEventHandler(object target, Delegate handler);

        [Template("Bridge.Reflection.midel({this}.r, {target})({handler})")]
        public extern void RemoveEventHandler(object target, Delegate handler);

        internal extern EventInfo();
    }
}