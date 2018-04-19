using System.Reflection;

namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreCast]
    [Bridge.Name("Function")]
    public class Delegate
    {
        public extern int Length
        {
            [Bridge.Template("{this}.length")]
            get;
        }

        protected extern Delegate(object target, string method);

        protected extern Delegate(Type target, string method);

        protected extern Delegate();

        public virtual extern object Apply(object thisArg);

        public virtual extern object Apply();

        public virtual extern object Apply(object thisArg, Array args);

        public virtual extern object Call(object thisArg, params object[] args);

        public virtual extern object Call(object thisArg);

        public virtual extern object Call();

        [Bridge.Template("Bridge.fn.combine({0}, {1})")]
        public static extern Delegate Combine(Delegate a, Delegate b);

        [Bridge.Template("Bridge.fn.remove({0}, {1})")]
        public static extern Delegate Remove(Delegate source, Delegate value);

        [Bridge.Template("Bridge.staticEquals({a}, {b})")]
        public static extern bool operator ==(Delegate a, Delegate b);

        [Bridge.Template("!Bridge.staticEquals({a}, {b})")]
        public static extern bool operator !=(Delegate a, Delegate b);

        [Bridge.Template("Bridge.Reflection.createDelegate({method}, {firstArgument})")]
        public static extern Delegate CreateDelegate(Type type, object firstArgument, MethodInfo method);
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreCast]
    [Bridge.Name("Function")]
    public class MulticastDelegate : Delegate
    {
        protected extern MulticastDelegate();

        protected extern MulticastDelegate(object target, string method);

        protected extern MulticastDelegate(Type target, string method);

        [Bridge.Template("Bridge.staticEquals({a}, {b})")]
        public static extern bool operator ==(MulticastDelegate a, MulticastDelegate b);

        [Bridge.Template("!Bridge.staticEquals({a}, {b})")]
        public static extern bool operator !=(MulticastDelegate a, MulticastDelegate b);

        [Bridge.Template("Bridge.fn.getInvocationList({this})")]
        public extern Delegate[] GetInvocationList();
    }
}