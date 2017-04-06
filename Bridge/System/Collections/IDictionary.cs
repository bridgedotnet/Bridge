using System.Collections.Generic;
using Bridge;

namespace System.Collections
{
    [External]
    [Unbox(true)]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
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