using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This is an extraction of Dotnet sources for Sorted List, which
    /// was failing with Bridge. As this was the test case to reproduce the
    /// issue, it was left here as the unit test. It was not provided the
    /// exact address where the code was extracted from.
    /// </summary>
    [TestFixture(TestNameFormat = "#3599 - {0}")]
    public class Bridge3599
    {

#pragma warning disable CS0169 // The field is never used 

        public class SortedList<TK, TV> :
            IDictionary<TK, TV>
        {
            private TK[] keys; // Do not rename (binary serialization)
            private TV[] values; // Do not rename (binary serialization)
            private int _size; // Do not rename (binary serialization)
            private int version; // Do not rename (binary serialization)
            private IComparer<TK> comparer; // Do not rename (binary serialization)
            private KeyList keyList; // Do not rename (binary serialization)
            private ValueList valueList; // Do not rename (binary serialization)

            [NonSerialized]
            private object _syncRoot;

            private const int DefaultCapacity = 4;

            // Constructs a new sorted list. The sorted list is initially empty and has
            // a capacity of zero. Upon adding the first element to the sorted list the
            // capacity is increased to DefaultCapacity, and then increased in multiples of two as
            // required. The elements of the sorted list are ordered according to the
            // IComparable interface, which must be implemented by the keys of
            // all entries added to the sorted list.
            public SortedList()
            {
                keys = new TK[] { };
                values = new TV[] { };
                _size = 0;
                comparer = Comparer<TK>.Default;
            }

            // Constructs a new sorted list. The sorted list is initially empty and has
            // a capacity of zero. Upon adding the first element to the sorted list the
            // capacity is increased to 16, and then increased in multiples of two as
            // required. The elements of the sorted list are ordered according to the
            // IComparable interface, which must be implemented by the keys of
            // all entries added to the sorted list.
            //
            public SortedList(int capacity)
            {
                if (capacity < 0)
                    throw new ArgumentOutOfRangeException(nameof(capacity), capacity, "SR.ArgumentOutOfRange_NeedNonNegNum");
                keys = new TK[capacity];
                values = new TV[capacity];
                comparer = Comparer<TK>.Default;
            }

            // Constructs a new sorted list with a given IComparer
            // implementation. The sorted list is initially empty and has a capacity of
            // zero. Upon adding the first element to the sorted list the capacity is
            // increased to 16, and then increased in multiples of two as required. The
            // elements of the sorted list are ordered according to the given
            // IComparer implementation. If comparer is null, the
            // elements are compared to each other using the IComparable
            // interface, which in that case must be implemented by the keys of all
            // entries added to the sorted list.
            // 
            public SortedList(IComparer<TK> comparer)
                : this()
            {
                if (comparer != null)
                {
                    this.comparer = comparer;
                }
            }

            // Constructs a new sorted dictionary with a given IComparer
            // implementation and a given initial capacity. The sorted list is
            // initially empty, but will have room for the given number of elements
            // before any reallocations are required. The elements of the sorted list
            // are ordered according to the given IComparer implementation. If
            // comparer is null, the elements are compared to each other using
            // the IComparable interface, which in that case must be implemented
            // by the keys of all entries added to the sorted list.
            // 
            public SortedList(int capacity, IComparer<TK> comparer)
                : this(comparer)
            {
                Capacity = capacity;
            }

            // Constructs a new sorted list containing a copy of the entries in the
            // given dictionary. The elements of the sorted list are ordered according
            // to the IComparable interface, which must be implemented by the
            // keys of all entries in the given dictionary as well as keys
            // subsequently added to the sorted list.
            // 
            public SortedList(IDictionary<TK, TV> dictionary)
                : this(dictionary, null)
            {
            }

            // Constructs a new sorted list containing a copy of the entries in the
            // given dictionary. The elements of the sorted list are ordered according
            // to the given IComparer implementation. If comparer is
            // null, the elements are compared to each other using the
            // IComparable interface, which in that case must be implemented
            // by the keys of all entries in the given dictionary as well as keys
            // subsequently added to the sorted list.
            // 
            public SortedList(IDictionary<TK, TV> dictionary, IComparer<TK> comparer)
                : this((dictionary != null ? dictionary.Count : 0), comparer)
            {
                if (dictionary == null)
                    throw new ArgumentNullException(nameof(dictionary));

                int count = dictionary.Count;
                if (count != 0)
                {
                    TK[] keys = this.keys;
                    dictionary.Keys.CopyTo(keys, 0);
                    dictionary.Values.CopyTo(values, 0);
                    Debug.Assert(count == this.keys.Length);
                    if (count > 1)
                    {
                        comparer = Comparer; // obtain default if this is null.

                        keys = dictionary.OrderBy(x => x.Key, comparer).Select(x => x.Key).ToArray();

                        for (int i = 1; i != keys.Length; ++i)
                        {
                            if (comparer.Compare(keys[i - 1], keys[i]) == 0)
                            {
                                throw new ArgumentException("SR.Format(SR.Argument_AddingDuplicate, keys[i])");
                            }
                        }
                    }
                }

                _size = count;
            }

            // Adds an entry with the given key and value to this sorted list. An
            // ArgumentException is thrown if the key is already present in the sorted list.
            // 
            public void Add(TK key, TV value)
            {
                if (key == null) throw new ArgumentNullException(nameof(key));
                int i = Array.BinarySearch<TK>(keys, 0, _size, key, comparer);
                if (i >= 0)
                    throw new ArgumentException("SR.Format(SR.Argument_AddingDuplicate, key), nameof(key)");
                Insert(~i, key, value);
            }

            void ICollection<KeyValuePair<TK, TV>>.Add(KeyValuePair<TK, TV> keyValuePair)
            {
                Add(keyValuePair.Key, keyValuePair.Value);
            }

            bool ICollection<KeyValuePair<TK, TV>>.Contains(KeyValuePair<TK, TV> keyValuePair)
            {
                int index = IndexOfKey(keyValuePair.Key);
                if (index >= 0 && EqualityComparer<TV>.Default.Equals(values[index], keyValuePair.Value))
                {
                    return true;
                }
                return false;
            }

            bool ICollection<KeyValuePair<TK, TV>>.Remove(KeyValuePair<TK, TV> keyValuePair)
            {
                int index = IndexOfKey(keyValuePair.Key);
                if (index >= 0 && EqualityComparer<TV>.Default.Equals(values[index], keyValuePair.Value))
                {
                    RemoveAt(index);
                    return true;
                }
                return false;
            }

            // Returns the capacity of this sorted list. The capacity of a sorted list
            // represents the allocated length of the internal arrays used to store the
            // keys and values of the list, and thus also indicates the maximum number
            // of entries the list can contain before a reallocation of the internal
            // arrays is required.
            // 
            public int Capacity
            {
                get
                {
                    return keys.Length;
                }
                set
                {
                    if (value != keys.Length)
                    {
                        if (value < _size)
                        {
                            throw new ArgumentOutOfRangeException(nameof(value), value, "SR.ArgumentOutOfRange_SmallCapacity");
                        }

                        if (value > 0)
                        {
                            TK[] newKeys = new TK[value];
                            TV[] newValues = new TV[value];
                            if (_size > 0)
                            {
                                Array.Copy(keys, 0, newKeys, 0, _size);
                                Array.Copy(values, 0, newValues, 0, _size);
                            }
                            keys = newKeys;
                            values = newValues;
                        }
                        else
                        {
                            keys = new TK[] { };
                            values = new TV[] { };
                        }
                    }
                }
            }

            public IComparer<TK> Comparer
            {
                get
                {
                    return comparer;
                }
            }

            // Returns the number of entries in this sorted list.
            public int Count
            {
                get
                {
                    return _size;
                }
            }

            // Returns a collection representing the keys of this sorted list. This
            // method returns the same object as GetKeyList, but typed as an
            // ICollection instead of an IList.
            public IList<TK> Keys
            {
                get
                {
                    return GetKeyListHelper();
                }
            }

            ICollection<TK> IDictionary<TK, TV>.Keys
            {
                get
                {
                    return GetKeyListHelper();
                }
            }

            // Returns a collection representing the values of this sorted list. This
            // method returns the same object as GetValueList, but typed as an
            // ICollection instead of an IList.
            // 
            public IList<TV> Values
            {
                get
                {
                    return GetValueListHelper();
                }
            }

            ICollection<TV> IDictionary<TK, TV>.Values
            {
                get
                {
                    return GetValueListHelper();
                }
            }

            private KeyList GetKeyListHelper()
            {
                if (keyList == null)
                    keyList = new KeyList(this);
                return keyList;
            }

            private ValueList GetValueListHelper()
            {
                if (valueList == null)
                    valueList = new ValueList(this);
                return valueList;
            }

            bool ICollection<KeyValuePair<TK, TV>>.IsReadOnly
            {
                get { return false; }
            }

            // Removes all entries from this sorted list.
            public void Clear()
            {
                // clear does not change the capacity
                version++;

                // TODO:
                // Don't need to doc this but we clear the elements so that the gc can reclaim the references.
                //if (RuntimeHelpers.IsReferenceOrContainsReferences<TKey>())
                //{
                //    Array.Clear(keys, 0, _size);
                //}
                //if (RuntimeHelpers.IsReferenceOrContainsReferences<TValue>())
                //{
                //    Array.Clear(values, 0, _size);
                //}
                _size = 0;
            }

            // Checks if this sorted list contains an entry with the given key.
            public bool ContainsKey(TK key)
            {
                return IndexOfKey(key) >= 0;
            }

            // Checks if this sorted list contains an entry with the given value. The
            // values of the entries of the sorted list are compared to the given value
            // using the Object.Equals method. This method performs a linear
            // search and is substantially slower than the Contains
            // method.
            public bool ContainsValue(TV value)
            {
                return IndexOfValue(value) >= 0;
            }

            // Copies the values in this SortedList to an array.
            void ICollection<KeyValuePair<TK, TV>>.CopyTo(KeyValuePair<TK, TV>[] array, int arrayIndex)
            {
                if (array == null)
                {
                    throw new ArgumentNullException(nameof(array));
                }

                if (arrayIndex < 0 || arrayIndex > array.Length)
                {
                    throw new ArgumentOutOfRangeException(nameof(arrayIndex), arrayIndex, "SR.ArgumentOutOfRange_Index");
                }

                if (array.Length - arrayIndex < Count)
                {
                    throw new ArgumentException("SR.Arg_ArrayPlusOffTooSmall");
                }

                for (int i = 0; i < Count; i++)
                {
                    KeyValuePair<TK, TV> entry = new KeyValuePair<TK, TV>(keys[i], values[i]);
                    array[arrayIndex + i] = entry;
                }
            }

            private const int MaxArrayLength = 0X7FEFFFFF;

            // Ensures that the capacity of this sorted list is at least the given
            // minimum value. If the current capacity of the list is less than
            // min, the capacity is increased to twice the current capacity or
            // to min, whichever is larger.
            private void EnsureCapacity(int min)
            {
                int newCapacity = keys.Length == 0 ? DefaultCapacity : keys.Length * 2;
                // Allow the list to grow to maximum possible capacity (~2G elements) before encountering overflow.
                // Note that this check works even when _items.Length overflowed thanks to the (uint) cast
                if ((uint)newCapacity > MaxArrayLength) newCapacity = MaxArrayLength;
                if (newCapacity < min) newCapacity = min;
                Capacity = newCapacity;
            }

            // Returns the value of the entry at the given index.
            private TV GetByIndex(int index)
            {
                if (index < 0 || index >= _size)
                    throw new ArgumentOutOfRangeException(nameof(index), index, "SR.ArgumentOutOfRange_Index");
                return values[index];
            }

            public IEnumerator<KeyValuePair<TK, TV>> GetEnumerator()
            {
                return new Enumerator(this, Enumerator.KeyValuePair);
            }

            IEnumerator<KeyValuePair<TK, TV>> IEnumerable<KeyValuePair<TK, TV>>.GetEnumerator()
            {
                return new Enumerator(this, Enumerator.KeyValuePair);
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return new Enumerator(this, Enumerator.KeyValuePair);
            }

            // Returns the key of the entry at the given index.
            private TK GetKey(int index)
            {
                if (index < 0 || index >= _size)
                    throw new ArgumentOutOfRangeException(nameof(index), index, "SR.ArgumentOutOfRange_Index");
                return keys[index];
            }

            // Returns the value associated with the given key. If an entry with the
            // given key is not found, the returned value is null.
            public TV this[TK key]
            {
                get
                {
                    int i = IndexOfKey(key);
                    if (i >= 0)
                        return values[i];

                    throw new KeyNotFoundException("SR.Format(SR.Arg_KeyNotFoundWithKey, key.ToString())");
                }
                set
                {
                    if (((object)key) == null) throw new ArgumentNullException(nameof(key));
                    int i = Array.BinarySearch<TK>(keys, 0, _size, key, comparer);
                    if (i >= 0)
                    {
                        values[i] = value;
                        version++;
                        return;
                    }
                    Insert(~i, key, value);
                }
            }

            // Returns the index of the entry with a given key in this sorted list. The
            // key is located through a binary search, and thus the average execution
            // time of this method is proportional to Log2(size), where
            // size is the size of this sorted list. The returned value is -1 if
            // the given key does not occur in this sorted list. Null is an invalid 
            // key value.
            public int IndexOfKey(TK key)
            {
                if (key == null)
                    throw new ArgumentNullException(nameof(key));
                int ret = Array.BinarySearch<TK>(keys, 0, _size, key, comparer);
                return ret >= 0 ? ret : -1;
            }

            // Returns the index of the first occurrence of an entry with a given value
            // in this sorted list. The entry is located through a linear search, and
            // thus the average execution time of this method is proportional to the
            // size of this sorted list. The elements of the list are compared to the
            // given value using the Object.Equals method.
            public int IndexOfValue(TV value)
            {
                return Array.IndexOf(values, value, 0, _size);
            }

            // Inserts an entry with a given key and value at a given index.
            private void Insert(int index, TK key, TV value)
            {
                if (_size == keys.Length) EnsureCapacity(_size + 1);
                if (index < _size)
                {
                    Array.Copy(keys, index, keys, index + 1, _size - index);
                    Array.Copy(values, index, values, index + 1, _size - index);
                }
                keys[index] = key;
                values[index] = value;
                _size++;
                version++;
            }

            public bool TryGetValue(TK key, out TV value)
            {
                int i = IndexOfKey(key);
                if (i >= 0)
                {
                    value = values[i];
                    return true;
                }

                value = default(TV);
                return false;
            }

            // Removes the entry at the given index. The size of the sorted list is
            // decreased by one.
            public void RemoveAt(int index)
            {
                if (index < 0 || index >= _size)
                    throw new ArgumentOutOfRangeException(nameof(index), index, "SR.ArgumentOutOfRange_Index");
                _size--;
                if (index < _size)
                {
                    Array.Copy(keys, index + 1, keys, index, _size - index);
                    Array.Copy(values, index + 1, values, index, _size - index);
                }
                // TODO :
                //if (RuntimeHelpers.IsReferenceOrContainsReferences<TKey>())
                //{
                //    keys[_size] = default(TKey);
                //}
                //if (RuntimeHelpers.IsReferenceOrContainsReferences<TValue>())
                //{
                //    values[_size] = default(TValue);
                //}
                version++;
            }

            // Removes an entry from this sorted list. If an entry with the specified
            // key exists in the sorted list, it is removed. An ArgumentException is
            // thrown if the key is null.
            public bool Remove(TK key)
            {
                int i = IndexOfKey(key);
                if (i >= 0)
                    RemoveAt(i);
                return i >= 0;
            }

            // Sets the capacity of this sorted list to the size of the sorted list.
            // This method can be used to minimize a sorted list's memory overhead once
            // it is known that no new elements will be added to the sorted list. To
            // completely clear a sorted list and release all memory referenced by the
            // sorted list, execute the following statements:
            // 
            // SortedList.Clear();
            // SortedList.TrimExcess();
            public void TrimExcess()
            {
                int threshold = (int)(((double)keys.Length) * 0.9);
                if (_size < threshold)
                {
                    Capacity = _size;
                }
            }

            private static bool IsCompatibleKey(object key)
            {
                if (key == null)
                {
                    throw new ArgumentNullException(nameof(key));
                }

                return (key is TK);
            }

            private struct Enumerator : IEnumerator<KeyValuePair<TK, TV>>, IDictionaryEnumerator
            {
                private SortedList<TK, TV> _sortedList;
                private TK _key;
                private TV _value;
                private int _index;
                private int _version;
                private int _getEnumeratorRetType;  // What should Enumerator.Current return?

                internal const int KeyValuePair = 1;
                internal const int DictEntry = 2;

                internal Enumerator(SortedList<TK, TV> sortedList, int getEnumeratorRetType)
                {
                    _sortedList = sortedList;
                    _index = 0;
                    _version = _sortedList.version;
                    _getEnumeratorRetType = getEnumeratorRetType;
                    _key = default(TK);
                    _value = default(TV);
                }

                public void Dispose()
                {
                    _index = 0;
                    _key = default(TK);
                    _value = default(TV);
                }

                object IDictionaryEnumerator.Key
                {
                    get
                    {
                        if (_index == 0 || (_index == _sortedList.Count + 1))
                        {
                            throw new InvalidOperationException("SR.InvalidOperation_EnumOpCantHappen");
                        }

                        return _key;
                    }
                }

                public bool MoveNext()
                {
                    if (_version != _sortedList.version) throw new InvalidOperationException("SR.InvalidOperation_EnumFailedVersion");

                    if ((uint)_index < (uint)_sortedList.Count)
                    {
                        _key = _sortedList.keys[_index];
                        _value = _sortedList.values[_index];
                        _index++;
                        return true;
                    }

                    _index = _sortedList.Count + 1;
                    _key = default(TK);
                    _value = default(TV);
                    return false;
                }

                DictionaryEntry IDictionaryEnumerator.Entry
                {
                    get
                    {
                        if (_index == 0 || (_index == _sortedList.Count + 1))
                        {
                            throw new InvalidOperationException("SR.InvalidOperation_EnumOpCantHappen");
                        }

                        return new DictionaryEntry(_key, _value);
                    }
                }

                public KeyValuePair<TK, TV> Current
                {
                    get
                    {
                        return new KeyValuePair<TK, TV>(_key, _value);
                    }
                }

                object IEnumerator.Current
                {
                    get
                    {
                        if (_index == 0 || (_index == _sortedList.Count + 1))
                        {
                            throw new InvalidOperationException("SR.InvalidOperation_EnumOpCantHappen");
                        }

                        if (_getEnumeratorRetType == DictEntry)
                        {
                            return new DictionaryEntry(_key, _value);
                        }
                        else
                        {
                            return new KeyValuePair<TK, TV>(_key, _value);
                        }
                    }
                }

                object IDictionaryEnumerator.Value
                {
                    get
                    {
                        if (_index == 0 || (_index == _sortedList.Count + 1))
                        {
                            throw new InvalidOperationException("SR.InvalidOperation_EnumOpCantHappen");
                        }

                        return _value;
                    }
                }

                void IEnumerator.Reset()
                {
                    if (_version != _sortedList.version)
                    {
                        throw new InvalidOperationException("SR.InvalidOperation_EnumFailedVersion");
                    }

                    _index = 0;
                    _key = default(TK);
                    _value = default(TV);
                }
            }

            private sealed class SortedListKeyEnumerator : IEnumerator<TK>, IEnumerator
            {
                private SortedList<TK, TV> _sortedList;
                private int _index;
                private int _version;
                private TK _currentKey;

                internal SortedListKeyEnumerator(SortedList<TK, TV> sortedList)
                {
                    _sortedList = sortedList;
                    _version = sortedList.version;
                }

                public void Dispose()
                {
                    _index = 0;
                    _currentKey = default(TK);
                }

                public bool MoveNext()
                {
                    if (_version != _sortedList.version)
                    {
                        throw new InvalidOperationException("SR.InvalidOperation_EnumFailedVersion");
                    }

                    if ((uint)_index < (uint)_sortedList.Count)
                    {
                        _currentKey = _sortedList.keys[_index];
                        _index++;
                        return true;
                    }

                    _index = _sortedList.Count + 1;
                    _currentKey = default(TK);
                    return false;
                }

                public TK Current
                {
                    get
                    {
                        return _currentKey;
                    }
                }

                object IEnumerator.Current
                {
                    get
                    {
                        if (_index == 0 || (_index == _sortedList.Count + 1))
                        {
                            throw new InvalidOperationException("SR.InvalidOperation_EnumOpCantHappen");
                        }

                        return _currentKey;
                    }
                }

                void IEnumerator.Reset()
                {
                    if (_version != _sortedList.version)
                    {
                        throw new InvalidOperationException("SR.InvalidOperation_EnumFailedVersion");
                    }
                    _index = 0;
                    _currentKey = default(TK);
                }
            }

            private sealed class SortedListValueEnumerator : IEnumerator<TV>, IEnumerator
            {
                private SortedList<TK, TV> _sortedList;
                private int _index;
                private int _version;
                private TV _currentValue;

                internal SortedListValueEnumerator(SortedList<TK, TV> sortedList)
                {
                    _sortedList = sortedList;
                    _version = sortedList.version;
                }

                public void Dispose()
                {
                    _index = 0;
                    _currentValue = default(TV);
                }

                public bool MoveNext()
                {
                    if (_version != _sortedList.version)
                    {
                        throw new InvalidOperationException("SR.InvalidOperation_EnumFailedVersion");
                    }

                    if ((uint)_index < (uint)_sortedList.Count)
                    {
                        _currentValue = _sortedList.values[_index];
                        _index++;
                        return true;
                    }

                    _index = _sortedList.Count + 1;
                    _currentValue = default(TV);
                    return false;
                }

                public TV Current
                {
                    get
                    {
                        return _currentValue;
                    }
                }

                object IEnumerator.Current
                {
                    get
                    {
                        if (_index == 0 || (_index == _sortedList.Count + 1))
                        {
                            throw new InvalidOperationException("SR.InvalidOperation_EnumOpCantHappen");
                        }

                        return _currentValue;
                    }
                }

                void IEnumerator.Reset()
                {
                    if (_version != _sortedList.version)
                    {
                        throw new InvalidOperationException("SR.InvalidOperation_EnumFailedVersion");
                    }
                    _index = 0;
                    _currentValue = default(TV);
                }
            }

            [DebuggerDisplay("Count = {Count}")]
            [Serializable]
            public sealed class KeyList : IList<TK>, ICollection
            {
                private SortedList<TK, TV> _dict; // Do not rename (binary serialization)

                internal KeyList(SortedList<TK, TV> dictionary)
                {
                    _dict = dictionary;
                }

                public int Count
                {
                    get { return _dict._size; }
                }

                public bool IsReadOnly
                {
                    get { return true; }
                }

                bool ICollection.IsSynchronized
                {
                    get { return false; }
                }

                object ICollection.SyncRoot
                {
                    get { return ((ICollection)_dict).SyncRoot; }
                }

                public void Add(TK key)
                {
                    throw new NotSupportedException("SR.NotSupported_SortedListNestedWrite");
                }

                public void Clear()
                {
                    throw new NotSupportedException("SR.NotSupported_SortedListNestedWrite");
                }

                public bool Contains(TK key)
                {
                    return _dict.ContainsKey(key);
                }

                public void CopyTo(TK[] array, int arrayIndex)
                {
                    // defer error checking to Array.Copy
                    Array.Copy(_dict.keys, 0, array, arrayIndex, _dict.Count);
                }

                void ICollection.CopyTo(Array array, int arrayIndex)
                {
                    if (array != null && array.Rank != 1)
                        throw new ArgumentException("SR.Arg_RankMultiDimNotSupported, nameof(array)");

                    try
                    {
                        // defer error checking to Array.Copy
                        Array.Copy(_dict.keys, 0, array, arrayIndex, _dict.Count);
                    }
                    catch (ArrayTypeMismatchException)
                    {
                        throw new ArgumentException("SR.Argument_InvalidArrayType, nameof(array)");
                    }
                }

                public void Insert(int index, TK value)
                {
                    throw new NotSupportedException("SR.NotSupported_SortedListNestedWrite");
                }

                public TK this[int index]
                {
                    get
                    {
                        return _dict.GetKey(index);
                    }
                    set
                    {
                        throw new NotSupportedException("SR.NotSupported_KeyCollectionSet");
                    }
                }

                public IEnumerator<TK> GetEnumerator()
                {
                    return new SortedListKeyEnumerator(_dict);
                }

                IEnumerator IEnumerable.GetEnumerator()
                {
                    return new SortedListKeyEnumerator(_dict);
                }

                public int IndexOf(TK key)
                {
                    if (((object)key) == null)
                        throw new ArgumentNullException(nameof(key));

                    int i = Array.BinarySearch<TK>(_dict.keys, 0,
                                              _dict.Count, key, _dict.comparer);
                    if (i >= 0) return i;
                    return -1;
                }

                public bool Remove(TK key)
                {
                    throw new NotSupportedException("SR.NotSupported_SortedListNestedWrite");
                    // return false;
                }

                public void RemoveAt(int index)
                {
                    throw new NotSupportedException("SR.NotSupported_SortedListNestedWrite");
                }
            }

            [DebuggerDisplay("Count = {Count}")]
            [Serializable]
            public sealed class ValueList : IList<TV>, ICollection
            {
                private SortedList<TK, TV> _dict; // Do not rename (binary serialization)

                internal ValueList(SortedList<TK, TV> dictionary)
                {
                    _dict = dictionary;
                }

                public int Count
                {
                    get { return _dict._size; }
                }

                public bool IsReadOnly
                {
                    get { return true; }
                }

                bool ICollection.IsSynchronized
                {
                    get { return false; }
                }

                object ICollection.SyncRoot
                {
                    get { return ((ICollection)_dict).SyncRoot; }
                }

                public void Add(TV key)
                {
                    throw new NotSupportedException("SR.NotSupported_SortedListNestedWrite");
                }

                public void Clear()
                {
                    throw new NotSupportedException("SR.NotSupported_SortedListNestedWrite");
                }

                public bool Contains(TV value)
                {
                    return _dict.ContainsValue(value);
                }

                public void CopyTo(TV[] array, int arrayIndex)
                {
                    // defer error checking to Array.Copy
                    Array.Copy(_dict.values, 0, array, arrayIndex, _dict.Count);
                }

                void ICollection.CopyTo(Array array, int index)
                {
                    if (array != null && array.Rank != 1)
                        throw new ArgumentException("SR.Arg_RankMultiDimNotSupported, nameof(array)");

                    try
                    {
                        // defer error checking to Array.Copy
                        Array.Copy(_dict.values, 0, array, index, _dict.Count);
                    }
                    catch (ArrayTypeMismatchException)
                    {
                        throw new ArgumentException("SR.Argument_InvalidArrayType, nameof(array)");
                    }
                }

                public void Insert(int index, TV value)
                {
                    throw new NotSupportedException("SR.NotSupported_SortedListNestedWrite");
                }

                public TV this[int index]
                {
                    get
                    {
                        return _dict.GetByIndex(index);
                    }
                    set
                    {
                        throw new NotSupportedException("SR.NotSupported_SortedListNestedWrite");
                    }
                }

                public IEnumerator<TV> GetEnumerator()
                {
                    return new SortedListValueEnumerator(_dict);
                }

                IEnumerator IEnumerable.GetEnumerator()
                {
                    return new SortedListValueEnumerator(_dict);
                }

                public int IndexOf(TV value)
                {
                    return Array.IndexOf(_dict.values, value, 0, _dict.Count);
                }

                public bool Remove(TV value)
                {
                    throw new NotSupportedException("SR.NotSupported_SortedListNestedWrite");
                    // return false;
                }

                public void RemoveAt(int index)
                {
                    throw new NotSupportedException("SR.NotSupported_SortedListNestedWrite");
                }
            }

#pragma warning restore CS0169 // The field is never used 

        }

        /// <summary>
        /// Just ensure whether the static-used class can be referenced.
        /// </summary>
        [Test]
        public static void TestCustomListImplementation()
        {
            Assert.AreEqual(0, new SortedList<int, int>().Count(), "Sorted list implementation works.");
        }
    }
}