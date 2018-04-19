namespace System.Collections.Generic
{
    [Bridge.External]
    [Bridge.Reflectable]
    public interface IReadOnlyDictionary<TKey, TValue> : IReadOnlyCollection<KeyValuePair<TKey, TValue>>,
        IEnumerable<KeyValuePair<TKey, TValue>>, IEnumerable
    {
        [Bridge.AccessorsIndexer]
        TValue this[TKey key]
        {
            [Bridge.Name("getItem")]
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