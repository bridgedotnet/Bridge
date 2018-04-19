namespace System.Collections.Generic
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    public class Dictionary<TKey, TValue> : IDictionary<TKey, TValue>, IDictionary,
        IReadOnlyDictionary<TKey, TValue>, IReadOnlyCollection<KeyValuePair<TKey, TValue>>, Bridge.IBridgeClass
    {
        public extern Dictionary();

        [Bridge.Template("new (System.Collections.Generic.Dictionary$2({TKey}, {TValue}))()")]
        public extern Dictionary(int capacity);

        [Bridge.Template("new (System.Collections.Generic.Dictionary$2({TKey}, {TValue}))(null, {comparer})")]
        public extern Dictionary(int capacity, IEqualityComparer<TKey> comparer);

        public extern Dictionary(object obj);

        public extern Dictionary(object obj, IEqualityComparer<TKey> comparer);

        [Bridge.Template("new (System.Collections.Generic.Dictionary$2({TKey}, {TValue}))(null, {comparer})")]
        public extern Dictionary(IEqualityComparer<TKey> comparer);

        public extern Dictionary(IDictionary<TKey, TValue> dictionary);

        public extern Dictionary(IDictionary<TKey, TValue> dictionary, IEqualityComparer<TKey> comparer);

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern IEqualityComparer<TKey> Comparer
        {
            get;
        }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern int Count
        {
            get;
        }

        public extern ICollection<TKey> Keys
        {
            [Bridge.Template("getKeys()")]
            get;
        }

        IEnumerable<TKey> IReadOnlyDictionary<TKey, TValue>.Keys
        {
            [Bridge.Template("getKeys()")]
            get;
        }

        public extern ICollection<TValue> Values
        {
            [Bridge.Template("getValues()")]
            get;
        }

        IEnumerable<TValue> IReadOnlyDictionary<TKey, TValue>.Values
        {
            [Bridge.Template("getValues()")]
            get;
        }

        [Bridge.AccessorsIndexer]
        public extern TValue this[TKey key]
        {
            [Bridge.Name("get")]
            get;
            [Bridge.Name("set")]
            set;
        }

        public extern void Set(TKey key, TValue value);

        private extern static bool IsCompatibleKey(object key);

        public extern void Add(TKey key, TValue value);

        public extern TValue Get(TKey key);

        private extern TValue Items(TKey key);

        public extern void Clear();

        // Stub just to fulfill IDictionary interface.
        extern bool IDictionary.Contains(object key);

        // Stub just to fulfill IDictionary interface.
        [Bridge.Convention(Bridge.Notation.None)]
        extern IDictionaryEnumerator IDictionary.GetEnumerator();

        bool ICollection.IsSynchronized { get { return false; } }

        object ICollection.SyncRoot { get { return this; } }

        public extern bool ContainsKey(TKey key);

        public extern bool ContainsValue(TValue value);

        [Bridge.Convention(Bridge.Notation.None)]
        public extern IEnumerator<KeyValuePair<TKey, TValue>> GetEnumerator();

        [Bridge.Convention(Bridge.Notation.None)]
        extern IEnumerator IEnumerable.GetEnumerator();

        public extern bool Remove(TKey key);

        public extern bool TryGetValue(TKey key, out TValue value);

        bool IsFixedSize
        {
            [Bridge.Template("false")]
            get;
        }

        bool ICollection<KeyValuePair<TKey, TValue>>.IsReadOnly
        {
            get { return false; }
        }

        bool IsReadOnly
        {
            [Bridge.Template("getIsReadOnly()")]
            get;
        }

        bool IDictionary.IsReadOnly
        {
            get { return false; }
        }

        bool IDictionary.IsFixedSize
        {
            get { return false; }
        }

        extern void ICollection<KeyValuePair<TKey, TValue>>.Add(KeyValuePair<TKey, TValue> item);

        extern void ICollection<KeyValuePair<TKey, TValue>>.CopyTo(KeyValuePair<TKey, TValue>[] array, int arrayIndex);

        extern bool ICollection<KeyValuePair<TKey, TValue>>.Contains(KeyValuePair<TKey, TValue> item);

        extern bool ICollection<KeyValuePair<TKey, TValue>>.Remove(KeyValuePair<TKey, TValue> item);

        extern void ICollection.CopyTo(Array array, int arrayIndex);

        [Bridge.AccessorsIndexer]
        extern object IDictionary.this[object key]
        {
            [Bridge.Name("get")]
            get;
            [Bridge.Name("set")]
            set;
        }

        extern ICollection IDictionary.Values
        {
            get;
        }

        extern void IDictionary.Add(object key, object value);

        extern bool IDictionary.Remove(object key);

        extern ICollection IDictionary.Keys
        {
            get;
        }
    }
}