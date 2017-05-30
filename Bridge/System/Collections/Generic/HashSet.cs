// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace System.Collections.Generic
{
    public class HashSet<T> : ICollection<T>, ISet<T>
    {
        private const int Lower31BitMask = 0x7FFFFFFF;
        private const int ShrinkThreshold = 3;
        private int[] _buckets;
        private Slot[] _slots;
        private int _count;
        private int _lastIndex;
        private int _freeList;
        private IEqualityComparer<T> _comparer;
        private int _version;

        #region Constructors

        public HashSet()
            : this(EqualityComparer<T>.Default)
        {
        }

        public HashSet(IEqualityComparer<T> comparer)
        {
            if (comparer == null)
            {
                comparer = EqualityComparer<T>.Default;
            }
            _comparer = comparer;
            _lastIndex = 0;
            _count = 0;
            _freeList = -1;
            _version = 0;
        }

        public HashSet(IEnumerable<T> collection)
            : this(collection, EqualityComparer<T>.Default)
        {
        }

        public HashSet(IEnumerable<T> collection, IEqualityComparer<T> comparer)
            : this(comparer)
        {
            if (collection == null)
            {
                throw new ArgumentNullException("collection");
            }
            int suggestedCapacity = 0;
            ICollection<T> coll = collection as ICollection<T>;
            if (coll != null)
            {
                suggestedCapacity = coll.Count;
            }
            Initialize(suggestedCapacity);
            this.UnionWith(collection);
            if ((_count == 0 && _slots.Length > HashHelpers.GetMinPrime()) ||
            (_count > 0 && _slots.Length / _count > ShrinkThreshold))
            {
                TrimExcess();
            }
        }

        #endregion Constructors

        #region ICollection<T> methods

        void ICollection<T>.Add(T item)
        {
            AddIfNotPresent(item);
        }

        public void Clear()
        {
            if (_lastIndex > 0)
            {
                for (int i = 0; i < _lastIndex; i++)
                {
                    _slots[i] = new Slot();
                }

                for (int i = 0; i < _buckets.Length; i++)
                {
                    _buckets[i] = 0;
                }

                _lastIndex = 0;
                _count = 0;
                _freeList = -1;
            }
            _version++;
        }

        public void ArrayClear(Array array, int index, int length)
        {
        }

        public bool Contains(T item)
        {
            if (_buckets != null)
            {
                int hashCode = InternalGetHashCode(item);
                for (int i = _buckets[hashCode % _buckets.Length] - 1; i >= 0; i = _slots[i].next)
                {
                    if (_slots[i].hashCode == hashCode && _comparer.Equals(_slots[i].value, item))
                    {
                        return true;
                    }
                }
            }
            return false;
        }

        public void CopyTo(T[] array, int arrayIndex)
        {
            CopyTo(array, arrayIndex, _count);
        }

        public bool Remove(T item)
        {
            if (_buckets != null)
            {
                int hashCode = InternalGetHashCode(item);
                int bucket = hashCode % _buckets.Length;
                int last = -1;
                for (int i = _buckets[bucket] - 1; i >= 0; last = i, i = _slots[i].next)
                {
                    if (_slots[i].hashCode == hashCode && _comparer.Equals(_slots[i].value, item))
                    {
                        if (last < 0)
                        {
                            _buckets[bucket] = _slots[i].next + 1;
                        }
                        else
                        {
                            _slots[last].next = _slots[i].next;
                        }
                        _slots[i].hashCode = -1;
                        _slots[i].value = default(T);
                        _slots[i].next = _freeList;
                        _count--;
                        _version++;
                        if (_count == 0)
                        {
                            _lastIndex = 0;
                            _freeList = -1;
                        }
                        else
                        {
                            _freeList = i;
                        }
                        return true;
                    }
                }
            }
            return false;
        }

        public int Count
        {
            get
            {
                return _count;
            }
        }

        public bool IsReadOnly
        {
            get { return false; }
        }

        #endregion ICollection<T> methods

        #region IEnumerable methods

        public Enumerator GetEnumerator()
        {
            return new Enumerator(this);
        }

        IEnumerator<T> IEnumerable<T>.GetEnumerator()
        {
            return new Enumerator(this);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return new Enumerator(this);
        }

        #endregion IEnumerable methods

        #region HashSet methods

        public bool Add(T item)
        {
            return AddIfNotPresent(item);
        }

        public void UnionWith(IEnumerable<T> other)
        {
            if (other == null)
            {
                throw new ArgumentNullException("other");
            }
            foreach (T item in other)
            {
                AddIfNotPresent(item);
            }
        }

        public void IntersectWith(IEnumerable<T> other)
        {
            if (other == null)
            {
                throw new ArgumentNullException("other");
            }
            if (_count == 0)
            {
                return;
            }
            ICollection<T> otherAsCollection = other as ICollection<T>;
            if (otherAsCollection != null)
            {
                if (otherAsCollection.Count == 0)
                {
                    Clear();
                    return;
                }
                HashSet<T> otherAsSet = other as HashSet<T>;
                if (otherAsSet != null && AreEqualityComparersEqual(this, otherAsSet))
                {
                    IntersectWithHashSetWithSameEC(otherAsSet);
                    return;
                }
            }
            IntersectWithEnumerable(other);
        }

        public void ExceptWith(IEnumerable<T> other)
        {
            if (other == null)
            {
                throw new ArgumentNullException("other");
            }
            if (_count == 0)
            {
                return;
            }
            if (other == this)
            {
                Clear();
                return;
            }
            foreach (T element in other)
            {
                Remove(element);
            }
        }

        public void SymmetricExceptWith(IEnumerable<T> other)
        {
            if (other == null)
            {
                throw new ArgumentNullException("other");
            }
            if (_count == 0)
            {
                UnionWith(other);
                return;
            }
            if (other == this)
            {
                Clear();
                return;
            }
            HashSet<T> otherAsSet = other as HashSet<T>;
            if (otherAsSet != null && AreEqualityComparersEqual(this, otherAsSet))
            {
                SymmetricExceptWithUniqueHashSet(otherAsSet);
            }
            else
            {
                SymmetricExceptWithEnumerable(other);
            }
        }

        public bool IsSubsetOf(IEnumerable<T> other)
        {
            if (other == null)
            {
                throw new ArgumentNullException("other");
            }
            if (_count == 0)
            {
                return true;
            }
            HashSet<T> otherAsSet = other as HashSet<T>;
            if (otherAsSet != null && AreEqualityComparersEqual(this, otherAsSet))
            {
                if (_count > otherAsSet.Count)
                {
                    return false;
                }
                return IsSubsetOfHashSetWithSameEC(otherAsSet);
            }
            else
            {
                ElementCount result = CheckUniqueAndUnfoundElements(other, false);
                return (result.uniqueCount == _count && result.unfoundCount >= 0);
            }
        }

        public bool IsProperSubsetOf(IEnumerable<T> other)
        {
            if (other == null)
            {
                throw new ArgumentNullException("other");
            }
            ICollection<T> otherAsCollection = other as ICollection<T>;
            if (otherAsCollection != null)
            {
                if (_count == 0)
                {
                    return otherAsCollection.Count > 0;
                }
                HashSet<T> otherAsSet = other as HashSet<T>;
                if (otherAsSet != null && AreEqualityComparersEqual(this, otherAsSet))
                {
                    if (_count >= otherAsSet.Count)
                    {
                        return false;
                    }
                    return IsSubsetOfHashSetWithSameEC(otherAsSet);
                }
            }
            ElementCount result = CheckUniqueAndUnfoundElements(other, false);
            return (result.uniqueCount == _count && result.unfoundCount > 0);
        }

        public bool IsSupersetOf(IEnumerable<T> other)
        {
            if (other == null)
            {
                throw new ArgumentNullException("other");
            }
            ICollection<T> otherAsCollection = other as ICollection<T>;
            if (otherAsCollection != null)
            {
                if (otherAsCollection.Count == 0)
                {
                    return true;
                }
                HashSet<T> otherAsSet = other as HashSet<T>;
                if (otherAsSet != null && AreEqualityComparersEqual(this, otherAsSet))
                {
                    if (otherAsSet.Count > _count)
                    {
                        return false;
                    }
                }
            }
            return ContainsAllElements(other);
        }

        public bool IsProperSupersetOf(IEnumerable<T> other)
        {
            if (other == null)
            {
                throw new ArgumentNullException("other");
            }
            if (_count == 0)
            {
                return false;
            }
            ICollection<T> otherAsCollection = other as ICollection<T>;
            if (otherAsCollection != null)
            {
                if (otherAsCollection.Count == 0)
                {
                    return true;
                }
                HashSet<T> otherAsSet = other as HashSet<T>;
                if (otherAsSet != null && AreEqualityComparersEqual(this, otherAsSet))
                {
                    if (otherAsSet.Count >= _count)
                    {
                        return false;
                    }
                    return ContainsAllElements(otherAsSet);
                }
            }
            ElementCount result = CheckUniqueAndUnfoundElements(other, true);
            return (result.uniqueCount < _count && result.unfoundCount == 0);
        }

        public bool Overlaps(IEnumerable<T> other)
        {
            if (other == null)
            {
                throw new ArgumentNullException("other");
            }
            if (_count == 0)
            {
                return false;
            }
            foreach (T element in other)
            {
                if (Contains(element))
                {
                    return true;
                }
            }
            return false;
        }

        public bool SetEquals(IEnumerable<T> other)
        {
            if (other == null)
            {
                throw new ArgumentNullException("other");
            }
            HashSet<T> otherAsSet = other as HashSet<T>;
            if (otherAsSet != null && AreEqualityComparersEqual(this, otherAsSet))
            {
                if (_count != otherAsSet.Count)
                {
                    return false;
                }
                return ContainsAllElements(otherAsSet);
            }
            else
            {
                ICollection<T> otherAsCollection = other as ICollection<T>;
                if (otherAsCollection != null)
                {
                    if (_count == 0 && otherAsCollection.Count > 0)
                    {
                        return false;
                    }
                }
                ElementCount result = CheckUniqueAndUnfoundElements(other, true);
                return (result.uniqueCount == _count && result.unfoundCount == 0);
            }
        }

        public void CopyTo(T[] array)
        {
            CopyTo(array, 0, _count);
        }

        public void CopyTo(T[] array, int arrayIndex, int count)
        {
            if (array == null)
            {
                throw new ArgumentNullException("array");
            }
            if (arrayIndex < 0)
            {
                throw new ArgumentOutOfRangeException("arrayIndex");
            }
            if (count < 0)
            {
                throw new ArgumentOutOfRangeException("count");
            }
            if (arrayIndex > array.Length || count > array.Length - arrayIndex)
            {
                throw new ArgumentException("Destination array is not long enough to copy all the items in the collection. Check array index and length.");
            }
            int numCopied = 0;
            for (int i = 0; i < _lastIndex && numCopied < count; i++)
            {
                if (_slots[i].hashCode >= 0)
                {
                    array[arrayIndex + numCopied] = _slots[i].value;
                    numCopied++;
                }
            }
        }

        public int RemoveWhere(Func<T, bool> match)
        {
            if (match == null)
            {
                throw new ArgumentNullException("match");
            }
            int numRemoved = 0;
            for (int i = 0; i < _lastIndex; i++)
            {
                if (_slots[i].hashCode >= 0)
                {
                    T value = _slots[i].value;
                    if (match(value))
                    {
                        if (Remove(value))
                        {
                            numRemoved++;
                        }
                    }
                }
            }
            return numRemoved;
        }

        public IEqualityComparer<T> Comparer
        {
            get
            {
                return _comparer;
            }
        }

        public void TrimExcess()
        {
            if (_count == 0)
            {
                _buckets = null;
                _slots = null;
                _version++;
            }
            else
            {
                int newSize = HashHelpers.GetPrime(_count);
                Slot[] newSlots = new Slot[newSize];
                int[] newBuckets = new int[newSize];
                int newIndex = 0;
                for (int i = 0; i < _lastIndex; i++)
                {
                    if (_slots[i].hashCode >= 0)
                    {
                        newSlots[newIndex] = _slots[i];
                        int bucket = newSlots[newIndex].hashCode % newSize;
                        newSlots[newIndex].next = newBuckets[bucket] - 1;
                        newBuckets[bucket] = newIndex + 1;
                        newIndex++;
                    }
                }
                _lastIndex = newIndex;
                _slots = newSlots;
                _buckets = newBuckets;
                _freeList = -1;
            }
        }

        #endregion HashSet methods

        #region Helper methods

        private void Initialize(int capacity)
        {
            int size = HashHelpers.GetPrime(capacity);
            _buckets = new int[size];
            _slots = new Slot[size];
        }

        private void IncreaseCapacity()
        {
            int newSize = HashHelpers.ExpandPrime(_count);
            if (newSize <= _count)
            {
                throw new ArgumentException("HashSet capacity is too big.");
            }
            SetCapacity(newSize, false);
        }

        private void SetCapacity(int newSize, bool forceNewHashCodes)
        {
            Slot[] newSlots = new Slot[newSize];
            if (_slots != null)
            {
                for (int i = 0; i < _lastIndex; i++)
                {
                    newSlots[i] = _slots[i];
                }
            }
            if (forceNewHashCodes)
            {
                for (int i = 0; i < _lastIndex; i++)
                {
                    if (newSlots[i].hashCode != -1)
                    {
                        newSlots[i].hashCode = InternalGetHashCode(newSlots[i].value);
                    }
                }
            }
            int[] newBuckets = new int[newSize];
            for (int i = 0; i < _lastIndex; i++)
            {
                int bucket = newSlots[i].hashCode % newSize;
                newSlots[i].next = newBuckets[bucket] - 1;
                newBuckets[bucket] = i + 1;
            }
            _slots = newSlots;
            _buckets = newBuckets;
        }

        private bool AddIfNotPresent(T value)
        {
            if (_buckets == null)
            {
                Initialize(0);
            }
            int hashCode = InternalGetHashCode(value);
            int bucket = hashCode % _buckets.Length;
#if FEATURE_RANDOMIZED_STRING_HASHING
int collisionCount = 0;
#endif
            for (int i = _buckets[bucket] - 1; i >= 0; i = _slots[i].next)
            {
                if (_slots[i].hashCode == hashCode && _comparer.Equals(_slots[i].value, value))
                {
                    return false;
                }
#if FEATURE_RANDOMIZED_STRING_HASHING
collisionCount++;
#endif
            }
            int index;
            if (_freeList >= 0)
            {
                index = _freeList;
                _freeList = _slots[index].next;
            }
            else
            {
                if (_lastIndex == _slots.Length)
                {
                    IncreaseCapacity();
                    bucket = hashCode % _buckets.Length;
                }
                index = _lastIndex;
                _lastIndex++;
            }
            _slots[index].hashCode = hashCode;
            _slots[index].value = value;
            _slots[index].next = _buckets[bucket] - 1;
            _buckets[bucket] = index + 1;
            _count++;
            _version++;
#if FEATURE_RANDOMIZED_STRING_HASHING
if (collisionCount > HashHelpers.HashCollisionThreshold && HashHelpers.IsWellKnownEqualityComparer(_comparer))
{
_comparer = (IEqualityComparer<T>)HashHelpers.GetRandomizedEqualityComparer(_comparer);
SetCapacity(_buckets.Length, true);
}
#endif
            return true;
        }

        private bool ContainsAllElements(IEnumerable<T> other)
        {
            foreach (T element in other)
            {
                if (!Contains(element))
                {
                    return false;
                }
            }
            return true;
        }

        private bool IsSubsetOfHashSetWithSameEC(HashSet<T> other)
        {
            foreach (T item in this)
            {
                if (!other.Contains(item))
                {
                    return false;
                }
            }
            return true;
        }

        private void IntersectWithHashSetWithSameEC(HashSet<T> other)
        {
            for (int i = 0; i < _lastIndex; i++)
            {
                if (_slots[i].hashCode >= 0)
                {
                    T item = _slots[i].value;
                    if (!other.Contains(item))
                    {
                        Remove(item);
                    }
                }
            }
        }

        private void IntersectWithEnumerable(IEnumerable<T> other)
        {
            int originalLastIndex = _lastIndex;
            int intArrayLength = BitHelper.ToIntArrayLength(originalLastIndex);
            BitHelper bitHelper;
            int[] bitArray = new int[intArrayLength];
            bitHelper = new BitHelper(bitArray, intArrayLength);
            foreach (T item in other)
            {
                int index = InternalIndexOf(item);
                if (index >= 0)
                {
                    bitHelper.MarkBit(index);
                }
            }
            for (int i = 0; i < originalLastIndex; i++)
            {
                if (_slots[i].hashCode >= 0 && !bitHelper.IsMarked(i))
                {
                    Remove(_slots[i].value);
                }
            }
        }

        private int InternalIndexOf(T item)
        {
            int hashCode = InternalGetHashCode(item);
            for (int i = _buckets[hashCode % _buckets.Length] - 1; i >= 0; i = _slots[i].next)
            {
                if ((_slots[i].hashCode) == hashCode && _comparer.Equals(_slots[i].value, item))
                {
                    return i;
                }
            }
            return -1;
        }

        private void SymmetricExceptWithUniqueHashSet(HashSet<T> other)
        {
            foreach (T item in other)
            {
                if (!Remove(item))
                {
                    AddIfNotPresent(item);
                }
            }
        }

        private void SymmetricExceptWithEnumerable(IEnumerable<T> other)
        {
            int originalLastIndex = _lastIndex;
            int intArrayLength = BitHelper.ToIntArrayLength(originalLastIndex);
            BitHelper itemsToRemove;
            BitHelper itemsAddedFromOther;
            int[] itemsToRemoveArray = new int[intArrayLength];
            itemsToRemove = new BitHelper(itemsToRemoveArray, intArrayLength);
            int[] itemsAddedFromOtherArray = new int[intArrayLength];
            itemsAddedFromOther = new BitHelper(itemsAddedFromOtherArray, intArrayLength);
            foreach (T item in other)
            {
                int location = 0;
                bool added = AddOrGetLocation(item, out location);
                if (added)
                {
                    itemsAddedFromOther.MarkBit(location);
                }
                else
                {
                    if (location < originalLastIndex && !itemsAddedFromOther.IsMarked(location))
                    {
                        itemsToRemove.MarkBit(location);
                    }
                }
            }
            for (int i = 0; i < originalLastIndex; i++)
            {
                if (itemsToRemove.IsMarked(i))
                {
                    Remove(_slots[i].value);
                }
            }
        }

        private bool AddOrGetLocation(T value, out int location)
        {
            int hashCode = InternalGetHashCode(value);
            int bucket = hashCode % _buckets.Length;
            for (int i = _buckets[bucket] - 1; i >= 0; i = _slots[i].next)
            {
                if (_slots[i].hashCode == hashCode && _comparer.Equals(_slots[i].value, value))
                {
                    location = i;
                    return false;
                }
            }
            int index;
            if (_freeList >= 0)
            {
                index = _freeList;
                _freeList = _slots[index].next;
            }
            else
            {
                if (_lastIndex == _slots.Length)
                {
                    IncreaseCapacity();
                    bucket = hashCode % _buckets.Length;
                }
                index = _lastIndex;
                _lastIndex++;
            }
            _slots[index].hashCode = hashCode;
            _slots[index].value = value;
            _slots[index].next = _buckets[bucket] - 1;
            _buckets[bucket] = index + 1;
            _count++;
            _version++;
            location = index;
            return true;
        }

        private ElementCount CheckUniqueAndUnfoundElements(IEnumerable<T> other, bool returnIfUnfound)
        {
            ElementCount result;
            if (_count == 0)
            {
                int numElementsInOther = 0;
                foreach (T item in other)
                {
                    numElementsInOther++;
                    break;
                }
                result.uniqueCount = 0;
                result.unfoundCount = numElementsInOther;
                return result;
            }
            int originalLastIndex = _lastIndex;
            int intArrayLength = BitHelper.ToIntArrayLength(originalLastIndex);
            BitHelper bitHelper;
            int[] bitArray = new int[intArrayLength];
            bitHelper = new BitHelper(bitArray, intArrayLength);
            int unfoundCount = 0;
            int uniqueFoundCount = 0;
            foreach (T item in other)
            {
                int index = InternalIndexOf(item);
                if (index >= 0)
                {
                    if (!bitHelper.IsMarked(index))
                    {
                        bitHelper.MarkBit(index);
                        uniqueFoundCount++;
                    }
                }
                else
                {
                    unfoundCount++;
                    if (returnIfUnfound)
                    {
                        break;
                    }
                }
            }
            result.uniqueCount = uniqueFoundCount;
            result.unfoundCount = unfoundCount;
            return result;
        }

        internal T[] ToArray()
        {
            T[] newArray = new T[Count];
            CopyTo(newArray);
            return newArray;
        }

        internal static bool HashSetEquals(HashSet<T> set1, HashSet<T> set2, IEqualityComparer<T> comparer)
        {
            if (set1 == null)
            {
                return (set2 == null);
            }
            else if (set2 == null)
            {
                return false;
            }
            if (AreEqualityComparersEqual(set1, set2))
            {
                if (set1.Count != set2.Count)
                {
                    return false;
                }
                foreach (T item in set2)
                {
                    if (!set1.Contains(item))
                    {
                        return false;
                    }
                }
                return true;
            }
            else
            {
                foreach (T set2Item in set2)
                {
                    bool found = false;
                    foreach (T set1Item in set1)
                    {
                        if (comparer.Equals(set2Item, set1Item))
                        {
                            found = true;
                            break;
                        }
                    }
                    if (!found)
                    {
                        return false;
                    }
                }
                return true;
            }
        }

        private static bool AreEqualityComparersEqual(HashSet<T> set1, HashSet<T> set2)
        {
            return set1.Comparer.Equals(set2.Comparer);
        }

        private int InternalGetHashCode(T item)
        {
            if (item == null)
            {
                return 0;
            }
            return _comparer.GetHashCode(item) & Lower31BitMask;
        }

        #endregion Helper methods

        internal struct ElementCount
        {
            internal int uniqueCount;
            internal int unfoundCount;
        }

        internal struct Slot
        {
            internal int hashCode;
            internal T value;
            internal int next;
        }

        public struct Enumerator : IEnumerator<T>
        {
            private HashSet<T> _set;
            private int _index;
            private int _version;
            private T _current;

            internal Enumerator(HashSet<T> set)
            {
                _set = set;
                _index = 0;
                _version = set._version;
                _current = default(T);
            }

            public void Dispose()
            {
            }

            public bool MoveNext()
            {
                if (_version != _set._version)
                {
                    throw new InvalidOperationException("Collection was modified; enumeration operation may not execute.");
                }
                while (_index < _set._lastIndex)
                {
                    if (_set._slots[_index].hashCode >= 0)
                    {
                        _current = _set._slots[_index].value;
                        _index++;
                        return true;
                    }
                    _index++;
                }
                _index = _set._lastIndex + 1;
                _current = default(T);
                return false;
            }

            public T Current
            {
                get
                {
                    return _current;
                }
            }

            Object System.Collections.IEnumerator.Current
            {
                get
                {
                    if (_index == 0 || _index == _set._lastIndex + 1)
                    {
                        throw new InvalidOperationException("Enumeration has either not started or has already finished.");
                    }
                    return Current;
                }
            }

            void System.Collections.IEnumerator.Reset()
            {
                if (_version != _set._version)
                {
                    throw new InvalidOperationException("Collection was modified; enumeration operation may not execute.");
                }
                _index = 0;
                _current = default(T);
            }
        }
    }
}
