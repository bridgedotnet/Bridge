using Bridge;

namespace System
{
    [External]
    [Name("Object")]
    [IgnoreCast]
    [Constructor("{ }")]
    public class Object
    {
        public virtual extern object this[string name]
        {
            [External]
            get;
            [External]
            set;
        }

        public virtual extern string ToString();

        public virtual extern string ToLocaleString();

        public virtual extern object ValueOf();

        public virtual extern bool HasOwnProperty(object v);

        public virtual extern bool IsPrototypeOf(object v);

        public virtual extern bool PropertyIsEnumerable(object v);

        [Template("<self>{this:type}")]
        public extern Type GetType();

        [Template("Bridge.referenceEquals({a}, {b})")]
        public static extern bool ReferenceEquals(object a, object b);

        [Template("Bridge.equals({this}, {o})")]
        public virtual extern bool Equals(object o);

        [Template("Bridge.equals({a}, {b})")]
        public static extern bool Equals(object a, object b);

        [Template("Bridge.getHashCode({this})")]
        public virtual extern int GetHashCode();

        public static extern string[] Keys(object obj);

        public static extern string[] GetOwnPropertyNames(object obj);

        [Template("{T}.prototype")]
        public static extern dynamic GetPrototype<T>();

        public readonly Type Constructor;

#pragma warning disable 169
        private readonly Type ctor;
#pragma warning restore 169

        [Template("{this}")]
        public virtual extern dynamic ToDynamic();

        [Obsolete]
        [Template("Bridge.getTypeName(Bridge.getType({this}))")]
        public virtual extern string GetClassName();
    }

    [External]
    public static class ObjectExtensions
    {
        [Template("{0}")]
        public static extern T As<T>(this object obj);

        [Template("Bridge.cast({obj}, {T})")]
        public static extern T Cast<T>(this object obj);

        [Template("Bridge.as({obj}, {T})")]
        public static extern T TryCast<T>(this object obj) where T : class;

        [Template("Bridge.is({obj}, {T})")]
        public static extern bool Is<T>(this object obj);
    }
}