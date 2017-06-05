using System.Collections.Generic;
using Bridge;

namespace System.Collections
{
    [External]
    [Unbox(true)]
    [Convention(Target = ConventionTarget.Member, Member = ConventionMember.Method, Notation = Notation.LowerCamelCase)]
    [Reflectable]
    public interface IDictionary : ICollection, IEnumerable, IBridgeClass
    {
        [AccessorsIndexer]
        object this[object key]
        {
            [Name("getItem")]
            get;
            [Name("setItem")]
            set;
        }

        ICollection Keys
        {
            get;
        }

        ICollection Values
        {
            get;
        }

        bool ContainsKey(object key);

        void Add(object key, object value);

        bool Remove(object key);

        bool IsReadOnly
        {
            get;
        }
    }
}