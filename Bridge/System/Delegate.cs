using Bridge;

namespace System
{
    [External]
    [IgnoreCast]
    [Name("Function")]
    public class Delegate
    {
        public readonly int Length = 0;

        protected Delegate()
        {
        }

        public virtual extern object Apply(object thisArg);

        public virtual extern object Apply();

        public virtual extern object Apply(object thisArg, Array args);

        public virtual extern object Call(object thisArg, params object[] args);

        public virtual extern object Call(object thisArg);

        public virtual extern object Call();

        [Template("Bridge.fn.combine({0}, {1});")]
        public static extern Delegate Combine(Delegate a, Delegate b);

        [Template("Bridge.fn.remove({0}, {1});")]
        public static extern Delegate Remove(Delegate source, Delegate value);
    }

    [External]
    [IgnoreCast]
    [Name("Function")]
    public class MulticastDelegate : Delegate
    {
        protected MulticastDelegate()
        {
        }
    }
}