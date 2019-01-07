namespace System.Collections.Generic
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    //[Bridge.External]
    [Bridge.Reflectable]
    public class Dictionary<TKey, TValue> : IDictionary<TKey, TValue>, IDictionary,
        IReadOnlyDictionary<TKey, TValue>, IReadOnlyCollection<KeyValuePair<TKey, TValue>>, Bridge.IBridgeClass
    {
        [Serializable]
        public struct Enumerator : IEnumerator<KeyValuePair<TKey, TValue>>, IDisposable, IEnumerator, IDictionaryEnumerator
        {
            Dictionary<TKey, TValue> dictionary;
            int index;
            KeyValuePair<TKey, TValue> current;
            int getEnumeratorRetType;
            internal const int DictEntry = 1;
            internal const int KeyValuePair = 2;

            public KeyValuePair<TKey, TValue> Current
            {
                get
                {
                    return this.current;
                }
            }

            object IEnumerator.Current
            {
                get
                {
                    if(this.index == 0 || this.index == this.dictionary.Count + 1)
                        throw new InvalidOperationException("ExceptionResource.InvalidOperation_EnumOpCantHappen");
                    if(this.getEnumeratorRetType == 1)
                        return (object)new DictionaryEntry((object)this.current.Key, (object)this.current.Value);
                    return (object)new KeyValuePair<TKey, TValue>(this.current.Key, this.current.Value);
                }
            }

            DictionaryEntry IDictionaryEnumerator.Entry
            {
                get
                {
                    if(this.index == 0 || this.index == this.dictionary.Count + 1)
                        throw new InvalidOperationException("ExceptionResource.InvalidOperation_EnumOpCantHappen");
                    return new DictionaryEntry((object)this.current.Key, (object)this.current.Value);
                }
            }

            object IDictionaryEnumerator.Key
            {
                get
                {
                    if(this.index == 0 || this.index == this.dictionary.Count + 1)
                        throw new InvalidOperationException("ExceptionResource.InvalidOperation_EnumOpCantHappen");
                    return (object)this.current.Key;
                }
            }

            object IDictionaryEnumerator.Value
            {
                get
                {
                    if(this.index == 0 || this.index == this.dictionary.Count + 1)
                        throw new InvalidOperationException("ExceptionResource.InvalidOperation_EnumOpCantHappen");
                    return (object)this.current.Value;
                }
            }

            internal Enumerator(Dictionary<TKey, TValue> dictionary, int getEnumeratorRetType)
            {
                this.dictionary = dictionary;
                this.index = 0;
                this.getEnumeratorRetType = getEnumeratorRetType;
                this.current = new KeyValuePair<TKey, TValue>();
            }

            public bool MoveNext()
            {
                for(; (uint)this.index < (uint)this.dictionary.Count; this.index = this.index + 1)
                {
                    if(((dynamic)this.dictionary).entries[this.index].hashCode >= 0)
                    {
                        this.current = new KeyValuePair<TKey, TValue>(((dynamic)this.dictionary).entries[this.index].key, ((dynamic)this.dictionary).entries[this.index].value);
                        this.index = this.index + 1;
                        return true;
                    }
                }
                this.index = this.dictionary.Count + 1;
                this.current = new KeyValuePair<TKey, TValue>();
                return false;
            }

            public void Dispose()
            {
            }

            void IEnumerator.Reset()
            {
                this.index = 0;
                this.current = new KeyValuePair<TKey, TValue>();
            }
        }

        [Bridge.Reflectable]
        public sealed class KeyCollection : ICollection<TKey>, IEnumerable<TKey>, IEnumerable, ICollection, IReadOnlyCollection<TKey>, Bridge.IBridgeClass
        {
            [Serializable]
            public struct Enumerator : IEnumerator<TKey>, IDisposable, IEnumerator
            {
                Dictionary<TKey, TValue> dictionary;
                int index;
                TKey currentKey;

                public TKey Current
                {
                    get
                    {
                        return this.currentKey;
                    }
                }

                object IEnumerator.Current
                {
                    get
                    {
                        if(this.index == 0 || this.index == this.dictionary.Count + 1)
                            throw new InvalidOperationException("ExceptionResource.InvalidOperation_EnumOpCantHappen");
                        return (object)this.currentKey;
                    }
                }

                internal Enumerator(Dictionary<TKey, TValue> dictionary)
                {
                    this.dictionary = dictionary;
                    this.index = 0;
                    this.currentKey = default(TKey);
                }

                public void Dispose()
                {
                }

                public bool MoveNext()
                {
                    for(; (uint)this.index < (uint)this.dictionary.Count; this.index = this.index + 1)
                    {
                        if(((dynamic)this.dictionary).entries[this.index].hashCode >= 0)
                        {
                            this.currentKey = ((dynamic)this.dictionary).entries[this.index].key;
                            this.index = this.index + 1;
                            return true;
                        }
                    }
                    this.index = this.dictionary.Count + 1;
                    this.currentKey = default(TKey);
                    return false;
                }

                void IEnumerator.Reset()
                {
                    this.index = 0;
                    this.currentKey = default(TKey);
                }
            }

            Dictionary<TKey, TValue> dictionary;

            public int Count
            {
                get
                {
                    return dictionary.Count;
                }
            }

            public KeyCollection(Dictionary<TKey, TValue> dictionary)
            {
                this.dictionary = dictionary;
            }

            public bool IsReadOnly
            {
                get
                {
                    return true;
                }
            }

            public bool IsSynchronized
            {
                get
                {
                    return true;
                }
            }

            public object SyncRoot
            {
                get
                {
                    return null;
                }
            }

            public void Add(TKey key)
            {
                throw new NotSupportedException();
            }

            public void CopyTo(TKey[] array, int index)
            {
                if(array == null)
                {
                    throw new ArgumentNullException(nameof(array));
                }

                if(index < 0 || index > array.Length)
                {
                    throw new ArgumentOutOfRangeException(nameof(index));
                }

                if(array.Length - index < this.dictionary.Count)
                {
                    throw new ArgumentOutOfRangeException(nameof(index));
                }

                int i = 0;

                foreach(KeyValuePair<TKey, TValue> pair in dictionary)
                {
                    array[i] = pair.Key;
                    i++;
                }
            }

            public void Clear()
            {
                throw new NotSupportedException();
            }

            public bool Contains(TKey key)
            {
                return dictionary.ContainsKey(key);
            }

            public bool Remove(TKey key)
            {
                throw new NotSupportedException();
            }

            public Enumerator GetEnumerator()
            {
                return new Enumerator(dictionary);
            }

            public void CopyTo(Array array, int index)
            {
                if(array == null)
                {
                    throw new ArgumentNullException(nameof(array));
                }

                if(array.Rank != 1)
                {
                    throw new ArgumentException("Multi-dimensional arrays not supported.");
                }

                if(array.GetLowerBound(0) != 0)
                {
                    throw new ArgumentException("Non-zero lower bound arrays not supported.");
                }

                if(index < 0 || index > array.Length)
                {
                    throw new ArgumentOutOfRangeException(nameof(index));
                }

                if(array.Length - index < this.dictionary.Count)
                {
                    throw new ArgumentOutOfRangeException(nameof(index));
                }

                TKey[] array1 = array as TKey[];

                if(array1 != null)
                {
                    this.CopyTo(array1, index);
                }
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return (IEnumerator)GetEnumerator();
            }

            IEnumerator<TKey> IEnumerable<TKey>.GetEnumerator()
            {
                return GetEnumerator();
            }
        }

        [Bridge.Reflectable]
        public sealed class ValueCollection : ICollection<TValue>, IEnumerable<TValue>, IEnumerable, ICollection, IReadOnlyCollection<TValue>, Bridge.IBridgeClass
        {
            [Serializable]
            public struct Enumerator : IEnumerator<TValue>, IDisposable, IEnumerator
            {
                Dictionary<TKey, TValue> dictionary;
                int index;
                TValue currentValue;

                public TValue Current
                {
                    get
                    {
                        return this.currentValue;
                    }
                }

                object IEnumerator.Current
                {
                    get
                    {
                        if(this.index == 0 || this.index == this.dictionary.Count + 1)
                            throw new InvalidOperationException("ExceptionResource.InvalidOperation_EnumOpCantHappen");
                        return (object)this.currentValue;
                    }
                }

                internal Enumerator(Dictionary<TKey, TValue> dictionary)
                {
                    this.dictionary = dictionary;
                    this.index = 0;
                    this.currentValue = default(TValue);
                }

                public void Dispose()
                {
                }

                public bool MoveNext()
                {
                    for(; (uint)this.index < (uint)this.dictionary.Count; this.index = this.index + 1)
                    {
                        if(((dynamic)this.dictionary).entries[this.index].hashCode >= 0)
                        {
                            this.currentValue = ((dynamic)this.dictionary).entries[this.index].value;
                            this.index = this.index + 1;
                            return true;
                        }
                    }
                    this.index = this.dictionary.Count + 1;
                    this.currentValue = default(TValue);
                    return false;
                }

                void IEnumerator.Reset()
                {
                    this.index = 0;
                    this.currentValue = default(TValue);
                }
            }

            Dictionary<TKey, TValue> dictionary;

            public int Count
            {
                get
                {
                    return dictionary.Count;
                }
            }

            public ValueCollection(Dictionary<TKey, TValue> dictionary)
            {
                this.dictionary = dictionary;
            }

            public bool IsReadOnly
            {
                get
                {
                    return true;
                }
            }

            public bool IsSynchronized
            {
                get
                {
                    return false;
                }
            }

            public object SyncRoot
            {
                get
                {
                    return this;
                }
            }

            public void Add(TValue key)
            {
                throw new NotSupportedException();
            }

            public void CopyTo(TValue[] array, int index)
            {
                if(array == null)
                {
                    throw new ArgumentNullException(nameof(array));
                }

                if(index < 0 || index > array.Length)
                {
                    throw new ArgumentOutOfRangeException(nameof(index));
                }

                if(array.Length - index < this.dictionary.Count)
                {
                    throw new ArgumentOutOfRangeException(nameof(index));
                }

                int i = 0;

                foreach(KeyValuePair<TKey, TValue> pair in dictionary)
                {
                    array[i] = pair.Value;
                    i++;
                }
            }

            public void Clear()
            {
                throw new NotSupportedException();
            }

            public bool Contains(TValue key)
            {
                return dictionary.ContainsValue(key);
            }

            public bool Remove(TValue key)
            {
                throw new NotSupportedException();
            }

            public Enumerator GetEnumerator()
            {
                return new Enumerator(dictionary);
            }

            IEnumerator<TValue> IEnumerable<TValue>.GetEnumerator()
            {
                return GetEnumerator();
            }

            public void CopyTo(Array array, int index)
            {
                if(array == null)
                {
                    throw new ArgumentNullException(nameof(array));
                }

                if(array.Rank != 1)
                {
                    throw new ArgumentException("Multi-dimensional arrays not supported.");
                }

                if(array.GetLowerBound(0) != 0)
                {
                    throw new ArgumentException("Non-zero lower bound arrays not supported.");
                }

                if(index < 0 || index > array.Length)
                {
                    throw new ArgumentOutOfRangeException(nameof(index));
                }

                if(array.Length - index < this.dictionary.Count)
                {
                    throw new ArgumentOutOfRangeException(nameof(index));
                }

                TValue[] array1 = array as TValue[];

                if(array1 != null)
                {
                    this.CopyTo(array1, index);
                }
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return (IEnumerator)GetEnumerator();
            }
        }

        public bool IsSynchronized
        {
            get
            {
                return true;
            }
        }

        public object SyncRoot
        {
            get
            {
                return null;
            }
        }

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

        public extern KeyCollection Keys
        {
            [Bridge.Template("getKeys()")]
            get;
        }

        ICollection<TKey> IDictionary<TKey, TValue>.Keys
        {
            [Bridge.Template("getKeys()")]
            get;
        }

        IEnumerable<TKey> IReadOnlyDictionary<TKey, TValue>.Keys
        {
            [Bridge.Template("getKeys()")]
            get;
        }

        public extern ValueCollection Values
        {
            [Bridge.Template("getValues()")]
            get;
        }

        ICollection<TValue> IDictionary<TKey, TValue>.Values
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

        public Enumerator GetEnumerator()
        {
            return new Enumerator(this, 0);
        }

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

        extern void IDictionary.Remove(object key);

        IEnumerator<KeyValuePair<TKey, TValue>> IEnumerable<KeyValuePair<TKey, TValue>>.GetEnumerator()
        {
            return GetEnumerator();
        }

        extern ICollection IDictionary.Keys
        {
            get;
        }
    }
}