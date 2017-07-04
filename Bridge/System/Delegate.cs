using Bridge;
using System.Reflection;

namespace System
{
    [External]
    [IgnoreCast]
    [Name("Function")]
    public class Delegate
    {
        public extern int Length
        {
            [Template("{this}.length")]
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

        [Template("Bridge.fn.combine({0}, {1})")]
        public static extern Delegate Combine(Delegate a, Delegate b);

        [Template("Bridge.fn.remove({0}, {1})")]
        public static extern Delegate Remove(Delegate source, Delegate value);

        [Template("Bridge.staticEquals({a}, {b})")]
        public static extern bool operator ==(Delegate a, Delegate b);

        [Template("!Bridge.staticEquals({a}, {b})")]
        public static extern bool operator !=(Delegate a, Delegate b);

        [Template("Bridge.Reflection.createDelegate({method}, {firstArgument})")]
        public static extern Delegate CreateDelegate(Type type, object firstArgument, MethodInfo method);
    }

    [External]
    [IgnoreCast]
    [Name("Function")]
    public class MulticastDelegate : Delegate
    {
        protected extern MulticastDelegate();

        protected extern MulticastDelegate(object target, string method);

        protected extern MulticastDelegate(Type target, string method);

        [Template("Bridge.staticEquals({a}, {b})")]
        public static extern bool operator ==(MulticastDelegate a, MulticastDelegate b);

        [Template("!Bridge.staticEquals({a}, {b})")]
        public static extern bool operator !=(MulticastDelegate a, MulticastDelegate b);

        [Template("Bridge.fn.getInvocationList({this})")]
        public extern Delegate[] GetInvocationList();
    }
}