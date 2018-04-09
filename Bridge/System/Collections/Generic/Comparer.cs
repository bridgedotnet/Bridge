namespace System.Collections.Generic
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    public abstract class Comparer<T> : IComparer<T>
    {
        public static extern Comparer<T> Default
        {
            [Bridge.Template("new (System.Collections.Generic.Comparer$1({T}))(System.Collections.Generic.Comparer$1.$default.fn)")]
            get;
        }

        public abstract int Compare(T x, T y);

        [Bridge.Template("new (System.Collections.Generic.Comparer$1({T}))({comparison})")]
        public static extern Comparer<T> Create(Comparison<T> comparison);
    }
}