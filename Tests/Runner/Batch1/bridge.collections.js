(function (globals) {
    "use strict";

    Bridge.define('Bridge.Collections.BitArray', {
        inherits: [Bridge.ICollection,Bridge.ICloneable],
        statics: {
            BitsPerInt32: 32,
            BytesPerInt32: 4,
            BitsPerByte: 8,
            _ShrinkThreshold: 256,
            /**
             * Used for conversion between different representations of bit array.
             Returns (n+(div-1))/div, rearranged to avoid arithmetic overflow.
             For example, in the bit to int case, the straightforward calc would
             be (n+31)/32, but that would cause overflow. So instead it's
             rearranged to ((n-1)/32) + 1, with special casing for 0.
             Usage:
             GetArrayLength(77, BitsPerInt32): returns how many ints must be
             allocated to store 77 bits.
             *
             * @static
             * @private
             * @this Bridge.Collections.BitArray
             * @memberof Bridge.Collections.BitArray
             * @param   {number}    n      
             * @param   {number}    div    use a conversion constant, e.g. BytesPerInt32 to get
             how many ints are required to store n bytes
             * @return  {number}
             */
            getArrayLength: function (n, div) {
                return n > 0 ? ((Bridge.Int.div((n - 1), div)) + 1) : 0;
            }
        },
        m_array: null,
        m_length: 0,
        _version: 0,
        constructor$3: function (length) {
            Bridge.Collections.BitArray.prototype.constructor$4.call(this, length, false);
    
        },
        constructor$4: function (length, defaultValue) {
            if (length < 0) {
                throw new Bridge.ArgumentOutOfRangeException("length", "Index is less than zero.");
            }
    
            this.m_array = Bridge.Array.init(Bridge.get(Bridge.Collections.BitArray).getArrayLength(length, Bridge.get(Bridge.Collections.BitArray).BitsPerInt32), 0);
            this.m_length = length;
    
            var fillValue = defaultValue ? (Bridge.cast(4294967295, Bridge.Int)) : 0;
            for (var i = 0; i < this.m_array.length; i++) {
                this.m_array[i] = fillValue;
            }
    
            this._version = 0;
        },
        constructor$1: function (bytes) {
            if (!Bridge.hasValue(bytes)) {
                throw new Bridge.ArgumentNullException("bytes");
            }
            // this value is chosen to prevent overflow when computing m_length.
            // m_length is of type int32 and is exposed as a property, so
            // type of m_length can't be changed to accommodate.
            if (bytes.length > 268435455) {
                throw new Bridge.ArgumentException(Bridge.String.format("The input array length must not exceed Int32.MaxValue / {0}. Otherwise BitArray.Length would exceed Int32.MaxValue.", Bridge.get(Bridge.Collections.BitArray).BitsPerByte), "bytes");
            }
    
            this.m_array = Bridge.Array.init(Bridge.get(Bridge.Collections.BitArray).getArrayLength(bytes.length, Bridge.get(Bridge.Collections.BitArray).BytesPerInt32), 0);
            this.m_length = bytes.length * Bridge.get(Bridge.Collections.BitArray).BitsPerByte;
    
            var i = 0;
            var j = 0;
            while (bytes.length - j >= 4) {
                this.m_array[i++] = (bytes[j] & 255) | ((bytes[j + 1] & 255) << 8) | ((bytes[j + 2] & 255) << 16) | ((bytes[j + 3] & 255) << 24);
                j += 4;
            }
    
            var r = bytes.length - j;
            if (r === 3) {
                this.m_array[i] = ((bytes[j + 2] & 255) << 16);
                r = 2;
            }
    
            if (r === 2) {
                this.m_array[i] |= ((bytes[j + 1] & 255) << 8);
                r = 1;
            }
    
            if (r === 1) {
                this.m_array[i] |= (bytes[j] & 255);
            }
    
            this._version = 0;
        },
        constructor: function (values) {
            if (!Bridge.hasValue(values)) {
                throw new Bridge.ArgumentNullException("values");
            }
    
            this.m_array = Bridge.Array.init(Bridge.get(Bridge.Collections.BitArray).getArrayLength(values.length, Bridge.get(Bridge.Collections.BitArray).BitsPerInt32), 0);
            this.m_length = values.length;
    
            for (var i = 0; i < values.length; i++) {
                if (values[i]) {
                    this.m_array[Bridge.Int.div(i, 32)] |= (1 << (i % 32));
                }
            }
    
            this._version = 0;
        },
        constructor$5: function (values) {
            if (!Bridge.hasValue(values)) {
                throw new Bridge.ArgumentNullException("values");
            }
            // this value is chosen to prevent overflow when computing m_length
            if (values.length > 67108863) {
                throw new Bridge.ArgumentException(Bridge.String.format("The input array length must not exceed Int32.MaxValue / {0}. Otherwise BitArray.Length would exceed Int32.MaxValue.", Bridge.get(Bridge.Collections.BitArray).BitsPerInt32), "values");
            }
    
            this.m_array = Bridge.Array.init(values.length, 0);
            this.m_length = values.length * Bridge.get(Bridge.Collections.BitArray).BitsPerInt32;
    
            Bridge.Array.copy(values, 0, this.m_array, 0, values.length);
    
            this._version = 0;
        },
        constructor$2: function (bits) {
            if (!Bridge.hasValue(bits)) {
                throw new Bridge.ArgumentNullException("bits");
            }
    
            var arrayLength = Bridge.get(Bridge.Collections.BitArray).getArrayLength(bits.m_length, Bridge.get(Bridge.Collections.BitArray).BitsPerInt32);
            this.m_array = Bridge.Array.init(arrayLength, 0);
            this.m_length = bits.m_length;
    
            Bridge.Array.copy(bits.m_array, 0, this.m_array, 0, arrayLength);
    
            this._version = bits._version;
        },
        getItem: function (index) {
            return this.get(index);
        },
        setItem: function (index, value) {
            this.set(index, value);
        },
        getLength: function () {
            return this.m_length;
        },
        setLength: function (value) {
            if (value < 0) {
                throw new Bridge.ArgumentOutOfRangeException("value", "Non-negative number required.");
            }
    
            var newints = Bridge.get(Bridge.Collections.BitArray).getArrayLength(value, Bridge.get(Bridge.Collections.BitArray).BitsPerInt32);
            if (newints > this.m_array.length || newints + Bridge.get(Bridge.Collections.BitArray)._ShrinkThreshold < this.m_array.length) {
                // grow or shrink (if wasting more than _ShrinkThreshold ints)
                var newarray = Bridge.Array.init(newints, 0);
                Bridge.Array.copy(this.m_array, 0, newarray, 0, newints > this.m_array.length ? this.m_array.length : newints);
                this.m_array = newarray;
            }
    
            if (value > this.m_length) {
                // clear high bit values in the last int
                var last = Bridge.get(Bridge.Collections.BitArray).getArrayLength(this.m_length, Bridge.get(Bridge.Collections.BitArray).BitsPerInt32) - 1;
                var bits = this.m_length % 32;
                if (bits > 0) {
                    this.m_array[last] &= (1 << bits) - 1;
                }
    
                // clear remaining int values
                Bridge.Array.fill(this.m_array, Bridge.Int.getDefaultValue || Bridge.getDefaultValue(Bridge.Int), last + 1, newints - last - 1);
            }
    
            this.m_length = value;
            this._version++;
        },
        getCount: function () {
            return this.m_length;
        },
        getIsReadOnly: function () {
            return false;
        },
        getIsSynchronized: function () {
            return false;
        },
        get: function (index) {
            if (index < 0 || index >= this.getLength()) {
                throw new Bridge.ArgumentOutOfRangeException("index", "Index was out of range. Must be non-negative and less than the size of the collection.");
            }
    
            return (this.m_array[Bridge.Int.div(index, 32)] & (1 << (index % 32))) !== 0;
        },
        set: function (index, value) {
            if (index < 0 || index >= this.getLength()) {
                throw new Bridge.ArgumentOutOfRangeException("index", "Index was out of range. Must be non-negative and less than the size of the collection.");
            }
    
            if (value) {
                this.m_array[Bridge.Int.div(index, 32)] |= (1 << (index % 32));
            }
            else  {
                this.m_array[Bridge.Int.div(index, 32)] &= ~(1 << (index % 32));
            }
    
            this._version++;
        },
        setAll: function (value) {
            var fillValue = value ? (Bridge.cast(4294967295, Bridge.Int)) : 0;
            var ints = Bridge.get(Bridge.Collections.BitArray).getArrayLength(this.m_length, Bridge.get(Bridge.Collections.BitArray).BitsPerInt32);
            for (var i = 0; i < ints; i++) {
                this.m_array[i] = fillValue;
            }
    
            this._version++;
        },
        and: function (value) {
            if (!Bridge.hasValue(value)) {
                throw new Bridge.ArgumentNullException("value");
            }
            if (this.getLength() !== value.getLength()) {
                throw new Bridge.ArgumentException("Array lengths must be the same.");
            }
    
            var ints = Bridge.get(Bridge.Collections.BitArray).getArrayLength(this.m_length, Bridge.get(Bridge.Collections.BitArray).BitsPerInt32);
            for (var i = 0; i < ints; i++) {
                this.m_array[i] &= value.m_array[i];
            }
    
            this._version++;
            return this;
        },
        or: function (value) {
            if (!Bridge.hasValue(value)) {
                throw new Bridge.ArgumentNullException("value");
            }
            if (this.getLength() !== value.getLength()) {
                throw new Bridge.ArgumentException("Array lengths must be the same.");
            }
    
            var ints = Bridge.get(Bridge.Collections.BitArray).getArrayLength(this.m_length, Bridge.get(Bridge.Collections.BitArray).BitsPerInt32);
            for (var i = 0; i < ints; i++) {
                this.m_array[i] |= value.m_array[i];
            }
    
            this._version++;
            return this;
        },
        xor: function (value) {
            if (!Bridge.hasValue(value)) {
                throw new Bridge.ArgumentNullException("value");
            }
            if (this.getLength() !== value.getLength()) {
                throw new Bridge.ArgumentException("Array lengths must be the same.");
            }
    
            var ints = Bridge.get(Bridge.Collections.BitArray).getArrayLength(this.m_length, Bridge.get(Bridge.Collections.BitArray).BitsPerInt32);
            for (var i = 0; i < ints; i++) {
                this.m_array[i] ^= value.m_array[i];
            }
    
            this._version++;
            return this;
        },
        not: function () {
            var ints = Bridge.get(Bridge.Collections.BitArray).getArrayLength(this.m_length, Bridge.get(Bridge.Collections.BitArray).BitsPerInt32);
            for (var i = 0; i < ints; i++) {
                this.m_array[i] = ~this.m_array[i];
            }
    
            this._version++;
            return this;
        },
        clone: function () {
            var bitArray = new Bridge.Collections.BitArray("constructor$5", this.m_array);
            bitArray._version = this._version;
            bitArray.m_length = this.m_length;
            return bitArray;
        },
        getEnumerator: function () {
            return new Bridge.Collections.BitArray.BitArrayEnumeratorSimple(this);
        }
    });
    
    Bridge.define('Bridge.Collections.BitArray.BitArrayEnumeratorSimple', {
        inherits: [Bridge.IEnumerator],
        bitarray: null,
        index: 0,
        version: 0,
        currentElement: false,
        constructor: function (bitarray) {
            this.bitarray = bitarray;
            this.index = -1;
            this.version = bitarray._version;
        },
        getCurrent: function () {
            if (this.index === -1) {
                throw new Bridge.InvalidOperationException("Enumeration has not started. Call MoveNext.");
            }
            if (this.index >= this.bitarray.getCount()) {
                throw new Bridge.InvalidOperationException("Enumeration already finished.");
            }
            return this.currentElement;
        },
        moveNext: function () {
            if (this.version !== this.bitarray._version) {
                throw new Bridge.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
            if (this.index < (this.bitarray.getCount() - 1)) {
                this.index++;
                this.currentElement = this.bitarray.get(this.index);
                return true;
            }
            else  {
                this.index = this.bitarray.getCount();
            }
    
            return false;
        },
        reset: function () {
            if (this.version !== this.bitarray._version) {
                throw new Bridge.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
            this.index = -1;
        }
    });
    
    Bridge.define('Bridge.Collections.BitHelper', {
        statics: {
            MarkedBitFlag: 1,
            IntSize: 32,
            toIntArrayLength: function (n) {
                return n > 0 ? (Bridge.Int.div((n - 1), Bridge.get(Bridge.Collections.BitHelper).IntSize) + 1) : 0;
            }
        },
        _length: 0,
        _array: null,
        constructor: function (bitArray, length) {
            this._array = bitArray;
            this._length = length;
        },
        markBit: function (bitPosition) {
            var bitArrayIndex = Bridge.Int.div(bitPosition, Bridge.get(Bridge.Collections.BitHelper).IntSize);
            if (bitArrayIndex < this._length && bitArrayIndex >= 0) {
                var flag = (Bridge.get(Bridge.Collections.BitHelper).MarkedBitFlag << (bitPosition % Bridge.get(Bridge.Collections.BitHelper).IntSize));
                this._array[bitArrayIndex] |= flag;
            }
        },
        isMarked: function (bitPosition) {
            var bitArrayIndex = Bridge.Int.div(bitPosition, Bridge.get(Bridge.Collections.BitHelper).IntSize);
            if (bitArrayIndex < this._length && bitArrayIndex >= 0) {
                var flag = (Bridge.get(Bridge.Collections.BitHelper).MarkedBitFlag << (bitPosition % Bridge.get(Bridge.Collections.BitHelper).IntSize));
                return ((this._array[bitArrayIndex] & flag) !== 0);
            }
            return false;
        }
    });
    
    /** @namespace System.Collections.Generic */
    
    /**
     * Internal helper functions for working with enumerables.
     *
     * @static
     * @abstract
     * @class Bridge.Collections.EnumerableHelpers
     */
    Bridge.define('Bridge.Collections.EnumerableHelpers', {
        statics: {
            /**
             * Converts an enumerable to an array using the same logic as does List{T}.
             *
             * @static
             * @this Bridge.Collections.EnumerableHelpers
             * @memberof Bridge.Collections.EnumerableHelpers
             * @param   {Function}                T         
             * @param   {Bridge.IEnumerable$1}    source    The enumerable to convert.
             * @return  {Array.<T>}                         The resulting array.
             */
            toArray: function (T, source) {
                var count = { };
                var results = Bridge.get(Bridge.Collections.EnumerableHelpers).toArray$1(T, source, count);
                Bridge.Array.resize(results, count.v, T.getDefaultValue || Bridge.getDefaultValue(T));
                return results;
            },
            /**
             * Converts an enumerable to an array using the same logic as does List{T}.
             *
             * @static
             * @this Bridge.Collections.EnumerableHelpers
             * @memberof Bridge.Collections.EnumerableHelpers
             * @param   {Function}                T         
             * @param   {Bridge.IEnumerable$1}    source    The enumerable to convert.
             * @param   {System.Int32&}           length    The number of items stored in the resulting array, 0-indexed.
             * @return  {Array.<T>}                         The resulting array.  The length of the array may be greater than <b />,
             which is the actual number of elements in the array.
             */
            toArray$1: function (T, source, length) {
                var en = Bridge.getEnumerator(source, "$1");
                try {
                    if (en.moveNext()) {
                        var DefaultCapacity = 4;
                        var arr = Bridge.Array.init(DefaultCapacity, null);
                        arr[0] = en.getCurrent$1();
                        var count = 1;
    
                        while (en.moveNext()) {
                            if (count === arr.length) {
                                // MaxArrayLength is defined in Array.MaxArrayLength and in gchelpers in CoreCLR.
                                // It represents the maximum number of elements that can be in an array where
                                // the size of the element is greater than one byte; a separate, slightly larger constant,
                                // is used when the size of the element is one.
                                var MaxArrayLength = 2146435071;
    
                                // This is the same growth logic as in List<T>:
                                // If the array is currently empty, we make it a default size.  Otherwise, we attempt to
                                // double the size of the array.  Doubling will overflow once the size of the array reaches
                                // 2^30, since doubling to 2^31 is 1 larger than Int32.MaxValue.  In that case, we instead
                                // constrain the length to be MaxArrayLength (this overflow check works because of of the
                                // cast to uint).  Because a slightly larger constant is used when T is one byte in size, we
                                // could then end up in a situation where arr.Length is MaxArrayLength or slightly larger, such
                                // that we constrain newLength to be MaxArrayLength but the needed number of elements is actually
                                // larger than that.  For that case, we then ensure that the newLength is large enough to hold
                                // the desired capacity.  This does mean that in the very rare case where we've grown to such a
                                // large size, each new element added after MaxArrayLength will end up doing a resize.
                                var newLength = count << 1;
                                if (Bridge.cast(newLength, Bridge.Int) > MaxArrayLength) {
                                    newLength = MaxArrayLength <= count ? count + 1 : MaxArrayLength;
                                }
    
                                Bridge.Array.resize(arr, newLength, T.getDefaultValue || Bridge.getDefaultValue(T));
                            }
    
                            arr[count++] = en.getCurrent$1();
                        }
    
                        length.v = count;
                        return arr;
                    }
                }
                finally {
                    if (Bridge.hasValue(en)) {
                        en.dispose();
                    }
                }
    
                length.v = 0;
                return Bridge.Array.init(0, null);
            }
        }
    });
    
    Bridge.define('Bridge.Collections.HashHelpers', {
        statics: {
            HashPrime: 101,
            MaxPrimeArrayLength: 2146435069,
            config: {
                init: function () {
                    this.primes = [3, 7, 11, 17, 23, 29, 37, 47, 59, 71, 89, 107, 131, 163, 197, 239, 293, 353, 431, 521, 631, 761, 919, 1103, 1327, 1597, 1931, 2333, 2801, 3371, 4049, 4861, 5839, 7013, 8419, 10103, 12143, 14591, 17519, 21023, 25229, 30293, 36353, 43627, 52361, 62851, 75431, 90523, 108631, 130363, 156437, 187751, 225307, 270371, 324449, 389357, 467237, 560689, 672827, 807403, 968897, 1162687, 1395263, 1674319, 2009191, 2411033, 2893249, 3471899, 4166287, 4999559, 5999471, 7199369];
                }
            },
            isPrime: function (candidate) {
                if ((candidate & 1) !== 0) {
                    var limit = Bridge.Int.trunc(Math.sqrt(candidate));
                    for (var divisor = 3; divisor <= limit; divisor += 2) {
                        if ((candidate % divisor) === 0) {
                            return false;
                        }
                    }
                    return true;
                }
                return (candidate === 2);
            },
            getPrime: function (min) {
                if (min < 0) {
                    throw new Bridge.ArgumentException("Hashtable's capacity overflowed and went negative. Check load factor, capacity and the current size of the table.");
                }
                for (var i = 0; i < Bridge.get(Bridge.Collections.HashHelpers).primes.length; i++) {
                    var prime = Bridge.get(Bridge.Collections.HashHelpers).primes[i];
                    if (prime >= min) {
                        return prime;
                    }
                }
                for (var i1 = (min | 1); i1 < 2147483647; i1 += 2) {
                    if (Bridge.get(Bridge.Collections.HashHelpers).isPrime(i1) && ((i1 - 1) % Bridge.get(Bridge.Collections.HashHelpers).HashPrime !== 0)) {
                        return i1;
                    }
                }
                return min;
            },
            getMinPrime: function () {
                return Bridge.get(Bridge.Collections.HashHelpers).primes[0];
            },
            expandPrime: function (oldSize) {
                var newSize = 2 * oldSize;
                if (Bridge.cast(newSize, Bridge.Int) > Bridge.get(Bridge.Collections.HashHelpers).MaxPrimeArrayLength && Bridge.get(Bridge.Collections.HashHelpers).MaxPrimeArrayLength > oldSize) {
                    return Bridge.get(Bridge.Collections.HashHelpers).MaxPrimeArrayLength;
                }
                return Bridge.get(Bridge.Collections.HashHelpers).getPrime(newSize);
            }
        }
    });
    
    Bridge.define('Bridge.Collections.HashSet$1', function (T) { return {
        inherits: [Bridge.ICollection$1(T),Bridge.ISet$1(T)],
        statics: {
            Lower31BitMask: 2147483647,
            ShrinkThreshold: 3,
            hashSetEquals: function (set1, set2, comparer) {
                var $t, $t1, $t2;
                if (!Bridge.hasValue(set1)) {
                    return (!Bridge.hasValue(set2));
                }
                else  {
                    if (!Bridge.hasValue(set2)) {
                        return false;
                    }
                }
                if (Bridge.get(Bridge.Collections.HashSet$1(T)).areEqualityComparersEqual(set1, set2)) {
                    if (set1.getCount() !== set2.getCount()) {
                        return false;
                    }
                    $t = Bridge.getEnumerator(set2);
                    while ($t.moveNext()) {
                        var item = $t.getCurrent();
                        if (!set1.contains(item)) {
                            return false;
                        }
                    }
                    return true;
                }
                else  {
                    $t1 = Bridge.getEnumerator(set2);
                    while ($t1.moveNext()) {
                        var set2Item = $t1.getCurrent();
                        var found = false;
                        $t2 = Bridge.getEnumerator(set1);
                        while ($t2.moveNext()) {
                            var set1Item = $t2.getCurrent();
                            if (comparer.equals(set2Item, set1Item)) {
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            return false;
                        }
                    }
                    return true;
                }
            },
            areEqualityComparersEqual: function (set1, set2) {
                return Bridge.equals(set1.getComparer(), set2.getComparer());
            }
        },
        _buckets: null,
        _slots: null,
        _count: 0,
        _lastIndex: 0,
        _freeList: 0,
        _comparer: null,
        _version: 0,
        constructor: function () {
            Bridge.Collections.HashSet$1(T).prototype.constructor$3.call(this, new Bridge.EqualityComparer$1(T)());
    
        },
        constructor$3: function (comparer) {
            if (!Bridge.hasValue(comparer)) {
                comparer = new Bridge.EqualityComparer$1(T)();
            }
            this._comparer = comparer;
            this._lastIndex = 0;
            this._count = 0;
            this._freeList = -1;
            this._version = 0;
        },
        constructor$1: function (collection) {
            Bridge.Collections.HashSet$1(T).prototype.constructor$2.call(this, collection, new Bridge.EqualityComparer$1(T)());
    
        },
        constructor$2: function (collection, comparer) {
            Bridge.Collections.HashSet$1(T).prototype.constructor$3.call(this, comparer);
    
            if (!Bridge.hasValue(collection)) {
                throw new Bridge.ArgumentNullException("collection");
            }
            var suggestedCapacity = 0;
            var coll = Bridge.as(collection, Bridge.ICollection$1(T));
            if (Bridge.hasValue(coll)) {
                suggestedCapacity = Bridge.Array.getCount(coll);
            }
            this.initialize(suggestedCapacity);
            this.unionWith(collection);
            if ((this._count === 0 && this._slots.length > Bridge.get(Bridge.Collections.HashHelpers).getMinPrime()) || (this._count > 0 && Bridge.Int.div(this._slots.length, this._count) > Bridge.get(Bridge.Collections.HashSet$1(T)).shrinkThreshold)) {
                this.trimExcess();
            }
        },
        getCount: function () {
            return this._count;
        },
        getComparer: function () {
            return this._comparer;
        },
        add: function (item) {
            this.addIfNotPresent(item);
        },
        add$1: function (item) {
            return this.addIfNotPresent(item);
        },
        clear: function () {
            if (this._lastIndex > 0) {
                for (var i = 0; i < this._lastIndex; i++) {
                    this._slots[i] = new Bridge.Collections.HashSet$1.Slot(T)();
                }
    
                for (var i1 = 0; i1 < this._buckets.length; i1++) {
                    this._buckets[i1] = 0;
                }
    
                this._lastIndex = 0;
                this._count = 0;
                this._freeList = -1;
            }
            this._version++;
        },
        arrayClear: function (array, index, length) {
        },
        contains: function (item) {
            if (Bridge.hasValue(this._buckets)) {
                var hashCode = this.internalGetHashCode(item);
                for (var i = this._buckets[hashCode % this._buckets.length] - 1; i >= 0; i = this._slots[i].next) {
                    if (this._slots[i].hashCode === hashCode && this._comparer.equals(this._slots[i].value, item)) {
                        return true;
                    }
                }
            }
            return false;
        },
        copyTo$1: function (array, arrayIndex) {
            this.copyTo$2(array, arrayIndex, this._count);
        },
        copyTo: function (array) {
            this.copyTo$2(array, 0, this._count);
        },
        copyTo$2: function (array, arrayIndex, count) {
            if (!Bridge.hasValue(array)) {
                throw new Bridge.ArgumentNullException("array");
            }
            if (arrayIndex < 0) {
                throw new Bridge.ArgumentOutOfRangeException("arrayIndex");
            }
            if (count < 0) {
                throw new Bridge.ArgumentOutOfRangeException("count");
            }
            if (arrayIndex > array.length || count > array.length - arrayIndex) {
                throw new Bridge.ArgumentException("Destination array is not long enough to copy all the items in the collection. Check array index and length.");
            }
            var numCopied = 0;
            for (var i = 0; i < this._lastIndex && numCopied < count; i++) {
                if (this._slots[i].hashCode >= 0) {
                    array[arrayIndex + numCopied] = this._slots[i].value;
                    numCopied++;
                }
            }
        },
        remove: function (item) {
            if (Bridge.hasValue(this._buckets)) {
                var hashCode = this.internalGetHashCode(item);
                var bucket = hashCode % this._buckets.length;
                var last = -1;
                for (var i = this._buckets[bucket] - 1; i >= 0; last = i, i = this._slots[i].next) {
                    if (this._slots[i].hashCode === hashCode && this._comparer.equals(this._slots[i].value, item)) {
                        if (last < 0) {
                            this._buckets[bucket] = this._slots[i].next + 1;
                        }
                        else  {
                            this._slots[last].next = this._slots[i].next;
                        }
                        this._slots[i].hashCode = -1;
                        this._slots[i].value = Bridge.getDefaultValue(T);
                        this._slots[i].next = this._freeList;
                        this._count--;
                        this._version++;
                        if (this._count === 0) {
                            this._lastIndex = 0;
                            this._freeList = -1;
                        }
                        else  {
                            this._freeList = i;
                        }
                        return true;
                    }
                }
            }
            return false;
        },
        getEnumerator$2: function () {
            return new Bridge.Collections.HashSet$1.Enumerator(T)("constructor$1", this);
        },
        getEnumerator$1: function () {
            return new Bridge.Collections.HashSet$1.Enumerator(T)("constructor$1", this);
        },
        getEnumerator: function () {
            return new Bridge.Collections.HashSet$1.Enumerator(T)("constructor$1", this);
        },
        unionWith: function (other) {
            var $t;
            if (!Bridge.hasValue(other)) {
                throw new Bridge.ArgumentNullException("other");
            }
            $t = Bridge.getEnumerator(other);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                this.addIfNotPresent(item);
            }
        },
        intersectWith: function (other) {
            if (!Bridge.hasValue(other)) {
                throw new Bridge.ArgumentNullException("other");
            }
            if (this._count === 0) {
                return;
            }
            var otherAsCollection = Bridge.as(other, Bridge.ICollection$1(T));
            if (Bridge.hasValue(otherAsCollection)) {
                if (Bridge.Array.getCount(otherAsCollection) === 0) {
                    this.clear();
                    return;
                }
                var otherAsSet = Bridge.as(other, Bridge.Collections.HashSet$1(T));
                if (Bridge.hasValue(otherAsSet) && Bridge.get(Bridge.Collections.HashSet$1(T)).areEqualityComparersEqual(this, otherAsSet)) {
                    this.intersectWithHashSetWithSameEC(otherAsSet);
                    return;
                }
            }
            this.intersectWithEnumerable(other);
        },
        exceptWith: function (other) {
            var $t;
            if (!Bridge.hasValue(other)) {
                throw new Bridge.ArgumentNullException("other");
            }
            if (this._count === 0) {
                return;
            }
            if (other === this) {
                this.clear();
                return;
            }
            $t = Bridge.getEnumerator(other);
            while ($t.moveNext()) {
                var element = $t.getCurrent();
                this.remove(element);
            }
        },
        symmetricExceptWith: function (other) {
            if (!Bridge.hasValue(other)) {
                throw new Bridge.ArgumentNullException("other");
            }
            if (this._count === 0) {
                this.unionWith(other);
                return;
            }
            if (other === this) {
                this.clear();
                return;
            }
            var otherAsSet = Bridge.as(other, Bridge.Collections.HashSet$1(T));
            if (Bridge.hasValue(otherAsSet) && Bridge.get(Bridge.Collections.HashSet$1(T)).areEqualityComparersEqual(this, otherAsSet)) {
                this.symmetricExceptWithUniqueHashSet(otherAsSet);
            }
            else  {
                this.symmetricExceptWithEnumerable(other);
            }
        },
        isSubsetOf: function (other) {
            if (!Bridge.hasValue(other)) {
                throw new Bridge.ArgumentNullException("other");
            }
            if (this._count === 0) {
                return true;
            }
            var otherAsSet = Bridge.as(other, Bridge.Collections.HashSet$1(T));
            if (Bridge.hasValue(otherAsSet) && Bridge.get(Bridge.Collections.HashSet$1(T)).areEqualityComparersEqual(this, otherAsSet)) {
                if (this._count > otherAsSet.getCount()) {
                    return false;
                }
                return this.isSubsetOfHashSetWithSameEC(otherAsSet);
            }
            else  {
                var result = this.checkUniqueAndUnfoundElements(other, false);
                return (result.uniqueCount === this._count && result.unfoundCount >= 0);
            }
        },
        isProperSubsetOf: function (other) {
            if (!Bridge.hasValue(other)) {
                throw new Bridge.ArgumentNullException("other");
            }
            var otherAsCollection = Bridge.as(other, Bridge.ICollection$1(T));
            if (Bridge.hasValue(otherAsCollection)) {
                if (this._count === 0) {
                    return Bridge.Array.getCount(otherAsCollection) > 0;
                }
                var otherAsSet = Bridge.as(other, Bridge.Collections.HashSet$1(T));
                if (Bridge.hasValue(otherAsSet) && Bridge.get(Bridge.Collections.HashSet$1(T)).areEqualityComparersEqual(this, otherAsSet)) {
                    if (this._count >= otherAsSet.getCount()) {
                        return false;
                    }
                    return this.isSubsetOfHashSetWithSameEC(otherAsSet);
                }
            }
            var result = this.checkUniqueAndUnfoundElements(other, false);
            return (result.uniqueCount === this._count && result.unfoundCount > 0);
        },
        isSupersetOf: function (other) {
            if (!Bridge.hasValue(other)) {
                throw new Bridge.ArgumentNullException("other");
            }
            var otherAsCollection = Bridge.as(other, Bridge.ICollection$1(T));
            if (Bridge.hasValue(otherAsCollection)) {
                if (Bridge.Array.getCount(otherAsCollection) === 0) {
                    return true;
                }
                var otherAsSet = Bridge.as(other, Bridge.Collections.HashSet$1(T));
                if (Bridge.hasValue(otherAsSet) && Bridge.get(Bridge.Collections.HashSet$1(T)).areEqualityComparersEqual(this, otherAsSet)) {
                    if (otherAsSet.getCount() > this._count) {
                        return false;
                    }
                }
            }
            return this.containsAllElements(other);
        },
        isProperSupersetOf: function (other) {
            if (!Bridge.hasValue(other)) {
                throw new Bridge.ArgumentNullException("other");
            }
            if (this._count === 0) {
                return false;
            }
            var otherAsCollection = Bridge.as(other, Bridge.ICollection$1(T));
            if (Bridge.hasValue(otherAsCollection)) {
                if (Bridge.Array.getCount(otherAsCollection) === 0) {
                    return true;
                }
                var otherAsSet = Bridge.as(other, Bridge.Collections.HashSet$1(T));
                if (Bridge.hasValue(otherAsSet) && Bridge.get(Bridge.Collections.HashSet$1(T)).areEqualityComparersEqual(this, otherAsSet)) {
                    if (otherAsSet.getCount() >= this._count) {
                        return false;
                    }
                    return this.containsAllElements(otherAsSet);
                }
            }
            var result = this.checkUniqueAndUnfoundElements(other, true);
            return (result.uniqueCount < this._count && result.unfoundCount === 0);
        },
        overlaps: function (other) {
            var $t;
            if (!Bridge.hasValue(other)) {
                throw new Bridge.ArgumentNullException("other");
            }
            if (this._count === 0) {
                return false;
            }
            $t = Bridge.getEnumerator(other);
            while ($t.moveNext()) {
                var element = $t.getCurrent();
                if (this.contains(element)) {
                    return true;
                }
            }
            return false;
        },
        setEquals: function (other) {
            if (!Bridge.hasValue(other)) {
                throw new Bridge.ArgumentNullException("other");
            }
            var otherAsSet = Bridge.as(other, Bridge.Collections.HashSet$1(T));
            if (Bridge.hasValue(otherAsSet) && Bridge.get(Bridge.Collections.HashSet$1(T)).areEqualityComparersEqual(this, otherAsSet)) {
                if (this._count !== otherAsSet.getCount()) {
                    return false;
                }
                return this.containsAllElements(otherAsSet);
            }
            else  {
                var otherAsCollection = Bridge.as(other, Bridge.ICollection$1(T));
                if (Bridge.hasValue(otherAsCollection)) {
                    if (this._count === 0 && Bridge.Array.getCount(otherAsCollection) > 0) {
                        return false;
                    }
                }
                var result = this.checkUniqueAndUnfoundElements(other, true);
                return (result.uniqueCount === this._count && result.unfoundCount === 0);
            }
        },
        removeWhere: function (match) {
            if (!Bridge.hasValue(match)) {
                throw new Bridge.ArgumentNullException("match");
            }
            var numRemoved = 0;
            for (var i = 0; i < this._lastIndex; i++) {
                if (this._slots[i].hashCode >= 0) {
                    var value = this._slots[i].value;
                    if (match(value)) {
                        if (this.remove(value)) {
                            numRemoved++;
                        }
                    }
                }
            }
            return numRemoved;
        },
        trimExcess: function () {
            if (this._count === 0) {
                this._buckets = null;
                this._slots = null;
                this._version++;
            }
            else  {
                var newSize = Bridge.get(Bridge.Collections.HashHelpers).getPrime(this._count);
                var newSlots = Bridge.Array.init(newSize, function (){
                    return new Bridge.Collections.HashSet$1.Slot(T)();
                });
                var newBuckets = Bridge.Array.init(newSize, 0);
                var newIndex = 0;
                for (var i = 0; i < this._lastIndex; i++) {
                    if (this._slots[i].hashCode >= 0) {
                        newSlots[newIndex] = this._slots[i];
                        var bucket = newSlots[newIndex].hashCode % newSize;
                        newSlots[newIndex].next = newBuckets[bucket] - 1;
                        newBuckets[bucket] = newIndex + 1;
                        newIndex++;
                    }
                }
                this._lastIndex = newIndex;
                this._slots = newSlots;
                this._buckets = newBuckets;
                this._freeList = -1;
            }
        },
        initialize: function (capacity) {
            var size = Bridge.get(Bridge.Collections.HashHelpers).getPrime(capacity);
            this._buckets = Bridge.Array.init(size, 0);
            this._slots = Bridge.Array.init(size, function (){
                return new Bridge.Collections.HashSet$1.Slot(T)();
            });
        },
        increaseCapacity: function () {
            var newSize = Bridge.get(Bridge.Collections.HashHelpers).expandPrime(this._count);
            if (newSize <= this._count) {
                throw new Bridge.ArgumentException("HashSet capacity is too big.");
            }
            this.setCapacity(newSize, false);
        },
        setCapacity: function (newSize, forceNewHashCodes) {
            var newSlots = Bridge.Array.init(newSize, function (){
                return new Bridge.Collections.HashSet$1.Slot(T)();
            });
            if (Bridge.hasValue(this._slots)) {
                for (var i = 0; i < this._lastIndex; i++) {
                    newSlots[i] = this._slots[i];
                }
            }
            if (forceNewHashCodes) {
                for (var i1 = 0; i1 < this._lastIndex; i1++) {
                    if (newSlots[i1].hashCode !== -1) {
                        newSlots[i1].hashCode = this.internalGetHashCode(newSlots[i1].value);
                    }
                }
            }
            var newBuckets = Bridge.Array.init(newSize, 0);
            for (var i2 = 0; i2 < this._lastIndex; i2++) {
                var bucket = newSlots[i2].hashCode % newSize;
                newSlots[i2].next = newBuckets[bucket] - 1;
                newBuckets[bucket] = i2 + 1;
            }
            this._slots = newSlots;
            this._buckets = newBuckets;
        },
        addIfNotPresent: function (value) {
            if (!Bridge.hasValue(this._buckets)) {
                this.initialize(0);
            }
            var hashCode = this.internalGetHashCode(value);
            var bucket = hashCode % this._buckets.length;
            for (var i = this._buckets[bucket] - 1; i >= 0; i = this._slots[i].next) {
                if (this._slots[i].hashCode === hashCode && this._comparer.equals(this._slots[i].value, value)) {
                    return false;
                }
            }
            var index;
            if (this._freeList >= 0) {
                index = this._freeList;
                this._freeList = this._slots[index].next;
            }
            else  {
                if (this._lastIndex === this._slots.length) {
                    this.increaseCapacity();
                    bucket = hashCode % this._buckets.length;
                }
                index = this._lastIndex;
                this._lastIndex++;
            }
            this._slots[index].hashCode = hashCode;
            this._slots[index].value = value;
            this._slots[index].next = this._buckets[bucket] - 1;
            this._buckets[bucket] = index + 1;
            this._count++;
            this._version++;
            return true;
        },
        containsAllElements: function (other) {
            var $t;
            $t = Bridge.getEnumerator(other);
            while ($t.moveNext()) {
                var element = $t.getCurrent();
                if (!this.contains(element)) {
                    return false;
                }
            }
            return true;
        },
        isSubsetOfHashSetWithSameEC: function (other) {
            var $t;
            $t = Bridge.getEnumerator(this);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                if (!other.contains(item)) {
                    return false;
                }
            }
            return true;
        },
        intersectWithHashSetWithSameEC: function (other) {
            for (var i = 0; i < this._lastIndex; i++) {
                if (this._slots[i].hashCode >= 0) {
                    var item = this._slots[i].value;
                    if (!other.contains(item)) {
                        this.remove(item);
                    }
                }
            }
        },
        intersectWithEnumerable: function (other) {
            var $t;
            var originalLastIndex = this._lastIndex;
            var intArrayLength = Bridge.get(Bridge.Collections.BitHelper).toIntArrayLength(originalLastIndex);
            var bitHelper;
            var bitArray = Bridge.Array.init(intArrayLength, 0);
            bitHelper = new Bridge.Collections.BitHelper(bitArray, intArrayLength);
            $t = Bridge.getEnumerator(other);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                var index = this.internalIndexOf(item);
                if (index >= 0) {
                    bitHelper.markBit(index);
                }
            }
            for (var i = 0; i < originalLastIndex; i++) {
                if (this._slots[i].hashCode >= 0 && !bitHelper.isMarked(i)) {
                    this.remove(this._slots[i].value);
                }
            }
        },
        internalIndexOf: function (item) {
            var hashCode = this.internalGetHashCode(item);
            for (var i = this._buckets[hashCode % this._buckets.length] - 1; i >= 0; i = this._slots[i].next) {
                if ((this._slots[i].hashCode) === hashCode && this._comparer.equals(this._slots[i].value, item)) {
                    return i;
                }
            }
            return -1;
        },
        symmetricExceptWithUniqueHashSet: function (other) {
            var $t;
            $t = Bridge.getEnumerator(other);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                if (!this.remove(item)) {
                    this.addIfNotPresent(item);
                }
            }
        },
        symmetricExceptWithEnumerable: function (other) {
            var $t;
            var originalLastIndex = this._lastIndex;
            var intArrayLength = Bridge.get(Bridge.Collections.BitHelper).toIntArrayLength(originalLastIndex);
            var itemsToRemove;
            var itemsAddedFromOther;
            var itemsToRemoveArray = Bridge.Array.init(intArrayLength, 0);
            itemsToRemove = new Bridge.Collections.BitHelper(itemsToRemoveArray, intArrayLength);
            var itemsAddedFromOtherArray = Bridge.Array.init(intArrayLength, 0);
            itemsAddedFromOther = new Bridge.Collections.BitHelper(itemsAddedFromOtherArray, intArrayLength);
            $t = Bridge.getEnumerator(other);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                var location = { v : 0 };
                var added = this.addOrGetLocation(item, location);
                if (added) {
                    itemsAddedFromOther.markBit(location.v);
                }
                else  {
                    if (location.v < originalLastIndex && !itemsAddedFromOther.isMarked(location.v)) {
                        itemsToRemove.markBit(location.v);
                    }
                }
            }
            for (var i = 0; i < originalLastIndex; i++) {
                if (itemsToRemove.isMarked(i)) {
                    this.remove(this._slots[i].value);
                }
            }
        },
        addOrGetLocation: function (value, location) {
            var hashCode = this.internalGetHashCode(value);
            var bucket = hashCode % this._buckets.length;
            for (var i = this._buckets[bucket] - 1; i >= 0; i = this._slots[i].next) {
                if (this._slots[i].hashCode === hashCode && this._comparer.equals(this._slots[i].value, value)) {
                    location.v = i;
                    return false;
                }
            }
            var index;
            if (this._freeList >= 0) {
                index = this._freeList;
                this._freeList = this._slots[index].next;
            }
            else  {
                if (this._lastIndex === this._slots.length) {
                    this.increaseCapacity();
                    bucket = hashCode % this._buckets.length;
                }
                index = this._lastIndex;
                this._lastIndex++;
            }
            this._slots[index].hashCode = hashCode;
            this._slots[index].value = value;
            this._slots[index].next = this._buckets[bucket] - 1;
            this._buckets[bucket] = index + 1;
            this._count++;
            this._version++;
            location.v = index;
            return true;
        },
        checkUniqueAndUnfoundElements: function (other, returnIfUnfound) {
            var $t, $t1;
            var result = new Bridge.Collections.HashSet$1.ElementCount(T)();
            if (this._count === 0) {
                var numElementsInOther = 0;
                $t = Bridge.getEnumerator(other);
                while ($t.moveNext()) {
                    var item = $t.getCurrent();
                    numElementsInOther++;
                    break;
                }
                result.uniqueCount = 0;
                result.unfoundCount = numElementsInOther;
                return result.$clone();
            }
            var originalLastIndex = this._lastIndex;
            var intArrayLength = Bridge.get(Bridge.Collections.BitHelper).toIntArrayLength(originalLastIndex);
            var bitHelper;
            var bitArray = Bridge.Array.init(intArrayLength, 0);
            bitHelper = new Bridge.Collections.BitHelper(bitArray, intArrayLength);
            var unfoundCount = 0;
            var uniqueFoundCount = 0;
            $t1 = Bridge.getEnumerator(other);
            while ($t1.moveNext()) {
                var item1 = $t1.getCurrent();
                var index = this.internalIndexOf(item1);
                if (index >= 0) {
                    if (!bitHelper.isMarked(index)) {
                        bitHelper.markBit(index);
                        uniqueFoundCount++;
                    }
                }
                else  {
                    unfoundCount++;
                    if (returnIfUnfound) {
                        break;
                    }
                }
            }
            result.uniqueCount = uniqueFoundCount;
            result.unfoundCount = unfoundCount;
            return result.$clone();
        },
        toArray: function () {
            var newArray = Bridge.Array.init(this.getCount(), null);
            this.copyTo(newArray);
            return newArray;
        },
        internalGetHashCode: function (item) {
            if (!Bridge.hasValue(item)) {
                return 0;
            }
            return this._comparer.getHashCode(item, true) & Bridge.get(Bridge.Collections.HashSet$1(T)).lower31BitMask;
        }
    }; });
    
    Bridge.define('Bridge.Collections.HashSet$1.ElementCount', function (T) { return {
        statics: {
            getDefaultValue: function () { return new Bridge.Collections.HashSet$1.ElementCount(); }
        },
        uniqueCount: 0,
        unfoundCount: 0,
        constructor: function () {
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + (this.uniqueCount == null ? 0 : Bridge.getHashCode(this.uniqueCount));
            hash = hash * 23 + (this.unfoundCount == null ? 0 : Bridge.getHashCode(this.unfoundCount));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o,Bridge.Collections.HashSet$1.ElementCount)) {
                return false;
            }
            return Bridge.equals(this.uniqueCount, o.uniqueCount) && Bridge.equals(this.unfoundCount, o.unfoundCount);
        },
        $clone: function (to) {
            var s = to || new Bridge.Collections.HashSet$1.ElementCount();
            s.uniqueCount = this.uniqueCount;
            s.unfoundCount = this.unfoundCount;
            return s;
        }
    }; });
    
    Bridge.define('Bridge.Collections.HashSet$1.Enumerator', function (T) { return {
        inherits: [Bridge.IEnumerator$1(T)],
        statics: {
            getDefaultValue: function () { return new Bridge.Collections.HashSet$1.Enumerator(); }
        },
        _set: null,
        _index: 0,
        _version: 0,
        _current: null,
        constructor$1: function (set) {
            this._set = set;
            this._index = 0;
            this._version = set._version;
            this._current = Bridge.getDefaultValue(T);
        },
        constructor: function () {
        },
        getCurrent$1: function () {
            return this._current;
        },
        getCurrent: function () {
            if (this._index === 0 || this._index === this._set._lastIndex + 1) {
                throw new Bridge.InvalidOperationException("Enumeration has either not started or has already finished.");
            }
            return this.getCurrent$1();
        },
        dispose: function () {
        },
        moveNext: function () {
            if (this._version !== this._set._version) {
                throw new Bridge.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
            while (this._index < this._set._lastIndex) {
                if (this._set._slots[this._index].hashCode >= 0) {
                    this._current = this._set._slots[this._index].value;
                    this._index++;
                    return true;
                }
                this._index++;
            }
            this._index = this._set._lastIndex + 1;
            this._current = Bridge.getDefaultValue(T);
            return false;
        },
        reset: function () {
            if (this._version !== this._set._version) {
                throw new Bridge.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
            this._index = 0;
            this._current = Bridge.getDefaultValue(T);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + (this._set == null ? 0 : Bridge.getHashCode(this._set));
            hash = hash * 23 + (this._index == null ? 0 : Bridge.getHashCode(this._index));
            hash = hash * 23 + (this._version == null ? 0 : Bridge.getHashCode(this._version));
            hash = hash * 23 + (this._current == null ? 0 : Bridge.getHashCode(this._current));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o,Bridge.Collections.HashSet$1.Enumerator)) {
                return false;
            }
            return Bridge.equals(this._set, o._set) && Bridge.equals(this._index, o._index) && Bridge.equals(this._version, o._version) && Bridge.equals(this._current, o._current);
        },
        $clone: function (to) {
            var s = to || new Bridge.Collections.HashSet$1.Enumerator();
            s._set = this._set;
            s._index = this._index;
            s._version = this._version;
            s._current = this._current;
            return s;
        }
    }; });
    
    Bridge.define('Bridge.Collections.HashSet$1.Slot', function (T) { return {
        statics: {
            getDefaultValue: function () { return new Bridge.Collections.HashSet$1.Slot(); }
        },
        hashCode: 0,
        value: null,
        next: 0,
        constructor: function () {
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + (this.hashCode == null ? 0 : Bridge.getHashCode(this.hashCode));
            hash = hash * 23 + (this.value == null ? 0 : Bridge.getHashCode(this.value));
            hash = hash * 23 + (this.next == null ? 0 : Bridge.getHashCode(this.next));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o,Bridge.Collections.HashSet$1.Slot)) {
                return false;
            }
            return Bridge.equals(this.hashCode, o.hashCode) && Bridge.equals(this.value, o.value) && Bridge.equals(this.next, o.next);
        },
        $clone: function (to) {
            var s = to || new Bridge.Collections.HashSet$1.Slot();
            s.hashCode = this.hashCode;
            s.value = this.value;
            s.next = this.next;
            return s;
        }
    }; });
    
    Bridge.define('Bridge.Collections.Queue$1', function (T) { return {
        inherits: [Bridge.IEnumerable$1(T),Bridge.ICollection],
        statics: {
            MinimumGrow: 4,
            GrowFactor: 200,
            DefaultCapacity: 4
        },
        _array: null,
        _head: 0,
        _tail: 0,
        _size: 0,
        _version: 0,
        constructor: function () {
            this._array = Bridge.Array.init(0, null);
        },
        constructor$2: function (capacity) {
            if (capacity < 0) {
                throw new Bridge.ArgumentOutOfRangeException("capacity", "Non-negative number required.");
            }
            this._array = Bridge.Array.init(capacity, null);
        },
        constructor$1: function (collection) {
            if (!Bridge.hasValue(collection)) {
                throw new Bridge.ArgumentNullException("collection");
            }
    
            this._array = Bridge.Array.init(Bridge.get(Bridge.Collections.Queue$1(T)).defaultCapacity, null);
    
            var en = Bridge.getEnumerator(collection, "$1");
            try {
                while (en.moveNext()) {
                    this.enqueue(en.getCurrent$1());
                }
            }
            finally {
                if (Bridge.hasValue(en)) {
                    en.dispose();
                }
            }
        },
        getCount: function () {
            return this._size;
        },
        clear: function () {
            if (this._head < this._tail) {
                Bridge.Array.fill(this._array, T.getDefaultValue || Bridge.getDefaultValue(T), this._head, this._size);
            }
            else  {
                Bridge.Array.fill(this._array, T.getDefaultValue || Bridge.getDefaultValue(T), this._head, this._array.length - this._head);
                Bridge.Array.fill(this._array, T.getDefaultValue || Bridge.getDefaultValue(T), 0, this._tail);
            }
    
            this._head = 0;
            this._tail = 0;
            this._size = 0;
            this._version++;
        },
        copyTo: function (array, arrayIndex) {
            if (!Bridge.hasValue(array)) {
                throw new Bridge.ArgumentNullException("array");
            }
    
            if (arrayIndex < 0 || arrayIndex > array.length) {
                throw new Bridge.ArgumentOutOfRangeException("arrayIndex", "Index was out of range. Must be non-negative and less than the size of the collection.");
            }
    
            var arrayLen = array.length;
            if (arrayLen - arrayIndex < this._size) {
                throw new Bridge.ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
            }
    
            var numToCopy = (arrayLen - arrayIndex < this._size) ? (arrayLen - arrayIndex) : this._size;
            if (numToCopy === 0) {
                return;
            }
    
            var firstPart = (this._array.length - this._head < numToCopy) ? this._array.length - this._head : numToCopy;
            Bridge.Array.copy(this._array, this._head, array, arrayIndex, firstPart);
            numToCopy -= firstPart;
            if (numToCopy > 0) {
                Bridge.Array.copy(this._array, 0, array, arrayIndex + this._array.length - this._head, numToCopy);
            }
        },
        enqueue: function (item) {
            if (this._size === this._array.length) {
                var newcapacity = Bridge.Int.div(this._array.length * Bridge.get(Bridge.Collections.Queue$1(T)).growFactor, 100);
                if (newcapacity < this._array.length + Bridge.get(Bridge.Collections.Queue$1(T)).minimumGrow) {
                    newcapacity = this._array.length + Bridge.get(Bridge.Collections.Queue$1(T)).minimumGrow;
                }
                this.setCapacity(newcapacity);
            }
    
            this._array[this._tail] = item;
            this._tail = this.moveNext(this._tail);
            this._size++;
            this._version++;
        },
        getEnumerator$2: function () {
            return new Bridge.Collections.Queue$1.Enumerator(T)("constructor$1", this);
        },
        getEnumerator$1: function () {
            return new Bridge.Collections.Queue$1.Enumerator(T)("constructor$1", this);
        },
        getEnumerator: function () {
            return new Bridge.Collections.Queue$1.Enumerator(T)("constructor$1", this);
        },
        dequeue: function () {
            if (this._size === 0) {
                throw new Bridge.InvalidOperationException("Queue empty.");
            }
    
            var removed = this._array[this._head];
            this._array[this._head] = Bridge.getDefaultValue(T);
            this._head = this.moveNext(this._head);
            this._size--;
            this._version++;
            return removed;
        },
        peek: function () {
            if (this._size === 0) {
                throw new Bridge.InvalidOperationException("Queue empty.");
            }
    
            return this._array[this._head];
        },
        contains: function (item) {
            var index = this._head;
            var count = this._size;
    
            var c = new Bridge.EqualityComparer$1(T)();
            while (count-- > 0) {
                if (!Bridge.hasValue(item)) {
                    if (!Bridge.hasValue(this._array[index])) {
                        return true;
                    }
                }
                else  {
                    if (Bridge.hasValue(this._array[index]) && c.equals(this._array[index], item)) {
                        return true;
                    }
                }
                index = this.moveNext(index);
            }
    
            return false;
        },
        getElement: function (i) {
            return this._array[(this._head + i) % this._array.length];
        },
        toArray: function () {
            var arr = Bridge.Array.init(this._size, null);
            if (this._size === 0) {
                return arr;
            } // consider replacing with Array.Empty<T>() to be consistent with non-generic Queue
    
            if (this._head < this._tail) {
                Bridge.Array.copy(this._array, this._head, arr, 0, this._size);
            }
            else  {
                Bridge.Array.copy(this._array, this._head, arr, 0, this._array.length - this._head);
                Bridge.Array.copy(this._array, 0, arr, this._array.length - this._head, this._tail);
            }
    
            return arr;
        },
        setCapacity: function (capacity) {
            var newarray = Bridge.Array.init(capacity, null);
            if (this._size > 0) {
                if (this._head < this._tail) {
                    Bridge.Array.copy(this._array, this._head, newarray, 0, this._size);
                }
                else  {
                    Bridge.Array.copy(this._array, this._head, newarray, 0, this._array.length - this._head);
                    Bridge.Array.copy(this._array, 0, newarray, this._array.length - this._head, this._tail);
                }
            }
    
            this._array = newarray;
            this._head = 0;
            this._tail = (this._size === capacity) ? 0 : this._size;
            this._version++;
        },
        moveNext: function (index) {
            // It is tempting to use the remainder operator here but it is actually much slower
            // than a simple comparison and a rarely taken branch.
            var tmp = index + 1;
            return (tmp === this._array.length) ? 0 : tmp;
        },
        trimExcess: function () {
            var threshold = Bridge.Int.trunc((this._array.length * 0.9));
            if (this._size < threshold) {
                this.setCapacity(this._size);
            }
        }
    }; });
    
    Bridge.define('Bridge.Collections.Queue$1.Enumerator', function (T) { return {
        inherits: [Bridge.IEnumerator$1(T),Bridge.IEnumerator],
        statics: {
            getDefaultValue: function () { return new Bridge.Collections.Queue$1.Enumerator(); }
        },
        _q: null,
        _index: 0,
        _version: 0,
        _currentElement: null,
        constructor$1: function (q) {
            this._q = q;
            this._version = this._q._version;
            this._index = -1;
            this._currentElement = Bridge.getDefaultValue(T);
        },
        constructor: function () {
        },
        getCurrent$1: function () {
            if (this._index < 0) {
                if (this._index === -1) {
                    throw new Bridge.InvalidOperationException("Enumeration has not started. Call MoveNext.");
                }
                else  {
                    throw new Bridge.InvalidOperationException("Enumeration already finished.");
                }
            }
            return this._currentElement;
        },
        getCurrent: function () {
            return this.getCurrent$1();
        },
        dispose: function () {
            this._index = -2;
            this._currentElement = Bridge.getDefaultValue(T);
        },
        moveNext: function () {
            if (this._version !== this._q._version) {
                throw new Bridge.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
    
            if (this._index === -2) {
                return false;
            }
    
            this._index++;
    
            if (this._index === this._q._size) {
                this._index = -2;
                this._currentElement = Bridge.getDefaultValue(T);
                return false;
            }
    
            this._currentElement = this._q.getElement(this._index);
            return true;
        },
        reset: function () {
            if (this._version !== this._q._version) {
                throw new Bridge.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
            this._index = -1;
            this._currentElement = Bridge.getDefaultValue(T);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + (this._q == null ? 0 : Bridge.getHashCode(this._q));
            hash = hash * 23 + (this._index == null ? 0 : Bridge.getHashCode(this._index));
            hash = hash * 23 + (this._version == null ? 0 : Bridge.getHashCode(this._version));
            hash = hash * 23 + (this._currentElement == null ? 0 : Bridge.getHashCode(this._currentElement));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o,Bridge.Collections.Queue$1.Enumerator)) {
                return false;
            }
            return Bridge.equals(this._q, o._q) && Bridge.equals(this._index, o._index) && Bridge.equals(this._version, o._version) && Bridge.equals(this._currentElement, o._currentElement);
        },
        $clone: function (to) {
            var s = to || new Bridge.Collections.Queue$1.Enumerator();
            s._q = this._q;
            s._index = this._index;
            s._version = this._version;
            s._currentElement = this._currentElement;
            return s;
        }
    }; });
    
    Bridge.define('Bridge.Collections.Stack$1', function (T) { return {
        inherits: [Bridge.IEnumerable$1(T),Bridge.ICollection],
        statics: {
            DefaultCapacity: 4
        },
        _array: null,
        _size: 0,
        _version: 0,
        constructor: function () {
            this._array = Bridge.Array.init(0, null);
        },
        constructor$2: function (capacity) {
            if (capacity < 0) {
                throw new Bridge.ArgumentOutOfRangeException("capacity", "Non-negative number required.");
            }
            this._array = Bridge.Array.init(capacity, null);
        },
        constructor$1: function (collection) {
            if (!Bridge.hasValue(collection)) {
                throw new Bridge.ArgumentNullException("collection");
            }
            var length = { };
            this._array = Bridge.get(Bridge.Collections.EnumerableHelpers).toArray$1(T, collection, length);
            this._size = length.v;
        },
        getCount: function () {
            return this._size;
        },
        clear: function () {
            Bridge.Array.fill(this._array, T.getDefaultValue || Bridge.getDefaultValue(T), 0, this._size); // Don't need to doc this but we clear the elements so that the gc can reclaim the references.
            this._size = 0;
            this._version++;
        },
        contains: function (item) {
            var count = this._size;
    
            var c = new Bridge.EqualityComparer$1(T)();
            while (count-- > 0) {
                if (!Bridge.hasValue(item)) {
                    if (!Bridge.hasValue(this._array[count])) {
                        return true;
                    }
                }
                else  {
                    if (Bridge.hasValue(this._array[count]) && c.equals(this._array[count], item)) {
                        return true;
                    }
                }
            }
            return false;
        },
        copyTo: function (array, arrayIndex) {
            if (!Bridge.hasValue(array)) {
                throw new Bridge.ArgumentNullException("array");
            }
    
            if (arrayIndex < 0 || arrayIndex > array.length) {
                throw new Bridge.ArgumentOutOfRangeException("arrayIndex", "Non-negative number required.");
            }
    
            if (array.length - arrayIndex < this._size) {
                throw new Bridge.ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
            }
    
            if (array !== this._array) {
                var srcIndex = 0;
                var dstIndex = arrayIndex + this._size;
                for (var i = 0; i < this._size; i++) {
                    array[--dstIndex] = this._array[srcIndex++];
                }
            }
            else  {
                // Legacy fallback in case we ever end up copying within the same array.
                Bridge.Array.copy(this._array, 0, array, arrayIndex, this._size);
                Bridge.Array.reverse(array, arrayIndex, this._size);
            }
        },
        copyTo$1: function (array, arrayIndex) {
            if (!Bridge.hasValue(array)) {
                throw new Bridge.ArgumentNullException("array");
            }
    
            if (Bridge.Array.getRank(array) !== 1) {
                throw new Bridge.ArgumentException("Only single dimensional arrays are supported for the requested action.");
            }
    
            if (Bridge.Array.getLower(array, 0) !== 0) {
                throw new Bridge.ArgumentException("The lower bound of target array must be zero.");
            }
    
            if (arrayIndex < 0 || arrayIndex > array.length) {
                throw new Bridge.ArgumentOutOfRangeException("arrayIndex", "Non-negative number required.");
            }
    
            if (array.length - arrayIndex < this._size) {
                throw new Bridge.ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
            }
    
            try {
                Bridge.Array.copy(this._array, 0, array, arrayIndex, this._size);
                Bridge.Array.reverse(array, arrayIndex, this._size);
            }
            catch ($e1) {
                $e1 = Bridge.Exception.create($e1);
                throw new Bridge.ArgumentException("Target array type is not compatible with the type of items in the collection.");
            }
        },
        getEnumerator$2: function () {
            return new Bridge.Collections.Stack$1.Enumerator(T)("constructor$1", this);
        },
        getEnumerator$1: function () {
            return new Bridge.Collections.Stack$1.Enumerator(T)("constructor$1", this);
        },
        getEnumerator: function () {
            return new Bridge.Collections.Stack$1.Enumerator(T)("constructor$1", this);
        },
        trimExcess: function () {
            var threshold = Bridge.Int.trunc(((Bridge.cast(this._array.length, Number)) * 0.9));
            if (this._size < threshold) {
                Bridge.Array.resize(this._array, this._size, T.getDefaultValue || Bridge.getDefaultValue(T));
                this._version++;
            }
        },
        peek: function () {
            if (this._size === 0) {
                throw new Bridge.InvalidOperationException("Stack empty.");
            }
            return this._array[this._size - 1];
        },
        pop: function () {
            if (this._size === 0) {
                throw new Bridge.InvalidOperationException("Stack empty.");
            }
            this._version++;
            var item = this._array[--this._size];
            this._array[this._size] = Bridge.getDefaultValue(T); // Free memory quicker.
            return item;
        },
        push: function (item) {
            if (this._size === this._array.length) {
                Bridge.Array.resize(this._array, (this._array.length === 0) ? Bridge.get(Bridge.Collections.Stack$1(T)).defaultCapacity : 2 * this._array.length, T.getDefaultValue || Bridge.getDefaultValue(T));
            }
            this._array[this._size++] = item;
            this._version++;
        },
        toArray: function () {
            var objArray = Bridge.Array.init(this._size, null);
            var i = 0;
            while (i < this._size) {
                objArray[i] = this._array[this._size - i - 1];
                i++;
            }
            return objArray;
        }
    }; });
    
    Bridge.define('Bridge.Collections.Stack$1.Enumerator', function (T) { return {
        inherits: [Bridge.IEnumerator$1(T),Bridge.IEnumerator],
        statics: {
            getDefaultValue: function () { return new Bridge.Collections.Stack$1.Enumerator(); }
        },
        _stack: null,
        _index: 0,
        _version: 0,
        _currentElement: null,
        constructor$1: function (stack) {
            this._stack = stack;
            this._version = this._stack._version;
            this._index = -2;
            this._currentElement = Bridge.getDefaultValue(T);
        },
        constructor: function () {
        },
        getCurrent$1: function () {
            if (this._index === -2) {
                throw new Bridge.InvalidOperationException("Enumeration has not started. Call MoveNext.");
            }
            if (this._index === -1) {
                throw new Bridge.InvalidOperationException("Enumeration already finished.");
            }
            return this._currentElement;
        },
        getCurrent: function () {
            if (this._index === -2) {
                throw new Bridge.InvalidOperationException("Enumeration has not started. Call MoveNext.");
            }
            if (this._index === -1) {
                throw new Bridge.InvalidOperationException("Enumeration already finished.");
            }
            return this._currentElement;
        },
        dispose: function () {
            this._index = -1;
        },
        moveNext: function () {
            var retval;
            if (this._version !== this._stack._version) {
                throw new Bridge.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
            if (this._index === -2) { // First call to enumerator.
                this._index = this._stack._size - 1;
                retval = (this._index >= 0);
                if (retval) {
                    this._currentElement = this._stack._array[this._index];
                }
                return retval;
            }
            if (this._index === -1) { // End of enumeration.
                return false;
            }
    
            retval = (--this._index >= 0);
            if (retval) {
                this._currentElement = this._stack._array[this._index];
            }
            else  {
                this._currentElement = Bridge.getDefaultValue(T);
            }
            return retval;
        },
        reset: function () {
            if (this._version !== this._stack._version) {
                throw new Bridge.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
            this._index = -2;
            this._currentElement = Bridge.getDefaultValue(T);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + (this._stack == null ? 0 : Bridge.getHashCode(this._stack));
            hash = hash * 23 + (this._index == null ? 0 : Bridge.getHashCode(this._index));
            hash = hash * 23 + (this._version == null ? 0 : Bridge.getHashCode(this._version));
            hash = hash * 23 + (this._currentElement == null ? 0 : Bridge.getHashCode(this._currentElement));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o,Bridge.Collections.Stack$1.Enumerator)) {
                return false;
            }
            return Bridge.equals(this._stack, o._stack) && Bridge.equals(this._index, o._index) && Bridge.equals(this._version, o._version) && Bridge.equals(this._currentElement, o._currentElement);
        },
        $clone: function (to) {
            var s = to || new Bridge.Collections.Stack$1.Enumerator();
            s._stack = this._stack;
            s._index = this._index;
            s._version = this._version;
            s._currentElement = this._currentElement;
            return s;
        }
    }; });
    
    Bridge.init();
})(this);
