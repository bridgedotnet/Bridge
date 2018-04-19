using System.Collections;
using System.Collections.Generic;

namespace System.Linq
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    [Bridge.Convention(Target = Bridge.ConventionTarget.Member, Member = Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    public interface ILookup<TKey, TElement> : IEnumerable<Grouping<TKey, TElement>>
    {
        int Count
        {
            [Bridge.Template("count()")]
            get;
        }

        [Bridge.AccessorsIndexer]
        EnumerableInstance<TElement> this[TKey key]
        {
            [Bridge.Template("get({0})")]
            get;
        }

        [Bridge.Template("contains({key})")]
        bool Contains(TKey key);
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    public class Lookup<TKey, TElement> : ILookup<TKey, TElement>
    {
        internal extern Lookup();

        public extern int Count
        {
            [Bridge.Template("count()")]
            get;
        }

        [Bridge.AccessorsIndexer]
        public extern EnumerableInstance<TElement> this[TKey key]
        {
            [Bridge.Template("get({0})")]
            get;
        }

        public extern bool Contains(TKey key);

        [Bridge.Convention(Bridge.Notation.None)]
        public extern IEnumerator<Grouping<TKey, TElement>> GetEnumerator();

        [Bridge.Convention(Bridge.Notation.None)]
        extern IEnumerator IEnumerable.GetEnumerator();
    }
}