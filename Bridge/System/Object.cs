namespace System
{
    [Bridge.External]
    [Bridge.IgnoreCast]
    [Bridge.Constructor("{ }")]
    public class Object
    {
        public virtual extern object this[string name]
        {
            [Bridge.External]
            get;
            [Bridge.External]
            set;
        }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        [Bridge.Template("Bridge.toString({this})")]
        public virtual extern string ToString();

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public virtual extern string ToLocaleString();

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public virtual extern object ValueOf();

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        [Bridge.Template("Object.prototype.hasOwnProperty.call({this}, {v})")]
        public virtual extern bool HasOwnProperty(object v);

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public virtual extern bool IsPrototypeOf(object v);

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public virtual extern bool PropertyIsEnumerable(object v);

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        [Bridge.Template("<self>{this:type}")]
        public extern Type GetType();

        // Returns a new object instance that is a memberwise copy of this
        // object.  This is always a shallow copy of the instance. The method is protected
        // so that other object may only call this method on themselves.  It is entended to
        // support the ICloneable interface.
        //
        // TODO: NotSupported
        //[System.Security.SecuritySafeCritical]  // auto-generated
        //[ResourceExposure(ResourceScope.None)]
        //[MethodImplAttribute(MethodImplOptions.InternalCall)]
        [Bridge.Template("Bridge.clone({this})")]
        protected extern Object MemberwiseClone();

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        [Bridge.Template("Bridge.referenceEquals({a}, {b})")]
        public static extern bool ReferenceEquals(object a, object b);

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        [Bridge.Template("Bridge.equals({this}, {o})")]
        public virtual extern bool Equals(object o);

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        [Bridge.Template("Bridge.equals({a}, {b})")]
        public static extern bool Equals(object a, object b);

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        [Bridge.Template("Bridge.getHashCode({this})")]
        public virtual extern int GetHashCode();

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        [Bridge.Template("Object.getOwnPropertyNames({obj})")]
        [Bridge.Unbox(true)]
        public static extern string[] GetOwnPropertyNames(object obj);

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        [Bridge.Template("{T}.prototype")]
        public static extern dynamic GetPrototype<T>();

        public readonly Type Constructor;

#pragma warning disable 169
        private readonly Type ctor;
#pragma warning restore 169

        [Bridge.Template("{this}")]
        public virtual extern dynamic ToDynamic();
    }

    [Bridge.External]
    public static class ObjectExtensions
    {
        [Bridge.Template("{0}")]
        [Bridge.Unbox(true)]
        public static extern T As<T>(this object obj);

        [Bridge.Template("Bridge.cast({obj}, {T})")]
        public static extern T Cast<T>(this object obj);

        [Bridge.Template("Bridge.as({obj}, {T})")]
        public static extern T TryCast<T>(this object obj) where T : class;

        [Bridge.Template("Bridge.is({obj}, {T})")]
        public static extern bool Is<T>(this object obj);
    }
}
