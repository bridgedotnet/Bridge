using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Reflectable]
    public interface IReadOnlyDictionary<TKey, TValue> : IReadOnlyCollection<KeyValuePair<TKey, TValue>>,
        IEnumerable<KeyValuePair<TKey, TValue>>, IEnumerable
    {
        [AccessorsIndexer]
        TValue this[TKey key]
        {
            [Name("getItem")]
            get;
        }

        IEnumerable<TKey> Keys
        {
            get;
        }

        IEnumerable<TValue> Values
        {
            get;
        }

        bool ContainsKey(TKey key);

        bool TryGetValue(TKey key, out TValue value);
    }
}