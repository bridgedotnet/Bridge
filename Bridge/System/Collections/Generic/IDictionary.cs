using Bridge;

namespace System.Collections.Generic
{
    [External]
    public interface IDictionary<TKey, TValue> : ICollection<KeyValuePair<TKey, TValue>>, IBridgeClass
    {
        [AccessorsIndexer]
        TValue this[TKey key]
        {
            [Name("getItem")]
            get;
            [Name("setItem")]
            set;
        }

        ICollection<TKey> Keys
        {
            get;
        }

        ICollection<TValue> Values
        {
            get;
        }

        bool ContainsKey(TKey key);

        void Add(TKey key, TValue value);

        bool Remove(TKey key);

        bool TryGetValue(TKey key, out TValue value);
    }
}