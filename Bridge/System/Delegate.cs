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

        public virtual object Apply(object thisArg)
        {
            return null;
        }

        public virtual object Apply()
        {
            return null;
        }

        public virtual object Apply(object thisArg, Array args)
        {
            return null;
        }

        public virtual object Call(object thisArg, params object[] args)
        {
            return null;
        }

        public virtual object Call(object thisArg)
        {
            return null;
        }

        public virtual object Call()
        {
            return null;
        }

        [Template("Bridge.fn.combine({0}, {1});")]
        public static Delegate Combine(Delegate a, Delegate b)
        {
            return null;
        }

        [Template("Bridge.fn.remove({0}, {1});")]
        public static Delegate Remove(Delegate source, Delegate value)
        {
            return null;
        }
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
