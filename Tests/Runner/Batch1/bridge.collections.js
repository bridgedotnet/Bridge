(function (globals) {
    "use strict";

    Bridge.define('System.Collections.BitArray', {
        inherits: [System.Collections.ICollection,System.ICloneable],
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
             * @this System.Collections.BitArray
             * @memberof System.Collections.BitArray
             * @param   {number}    n      
             * @param   {number}    div    use a conversion constant, e.g. BytesPerInt32 to get
             how many ints are required to store n bytes
             * @return  {number}
             */
            getArrayLength: function (n, div) {
                return n > 0 ? ((((((Bridge.Int.div((((n - 1) | 0)), div)) | 0)) + 1) | 0)) : 0;
            }
        },
        m_array: null,
        m_length: 0,
        _version: 0,
        constructor$3: function (length) {
            System.Collections.BitArray.prototype.constructor$4.call(this, length, false);
    
        },
        constructor$4: function (length, defaultValue) {
            if (length < 0) {
                throw new System.ArgumentOutOfRangeException("length", "Index is less than zero.");
            }
    
            this.m_array = System.Array.init(System.Collections.BitArray.getArrayLength(length, System.Collections.BitArray.BitsPerInt32), 0);
            this.m_length = length;
    
            var fillValue = defaultValue ? (-1) : 0;
            for (var i = 0; i < this.m_array.length; i = (i + 1) | 0) {
                this.m_array[i] = fillValue;
            }
    
            this._version = 0;
        },
        constructor$1: function (bytes) {
            if (bytes == null) {
                throw new System.ArgumentNullException("bytes");
            }
            // this value is chosen to prevent overflow when computing m_length.
            // m_length is of type int32 and is exposed as a property, so
            // type of m_length can't be changed to accommodate.
            if (bytes.length > 268435455) {
                throw new System.ArgumentException(System.String.format("The input array length must not exceed Int32.MaxValue / {0}. Otherwise BitArray.Length would exceed Int32.MaxValue.", System.Collections.BitArray.BitsPerByte), "bytes");
            }
    
            this.m_array = System.Array.init(System.Collections.BitArray.getArrayLength(bytes.length, System.Collections.BitArray.BytesPerInt32), 0);
            this.m_length = (bytes.length * System.Collections.BitArray.BitsPerByte) | 0;
    
            var i = 0;
            var j = 0;
            while (((bytes.length - j) | 0) >= 4) {
                this.m_array[Bridge.identity(i, (i = (i + 1) | 0))] = (bytes[j] & 255) | ((bytes[((j + 1) | 0)] & 255) << 8) | ((bytes[((j + 2) | 0)] & 255) << 16) | ((bytes[((j + 3) | 0)] & 255) << 24);
                j = (j + 4) | 0;
            }
    
            var r = (bytes.length - j) | 0;
            if (r === 3) {
                this.m_array[i] = ((bytes[((j + 2) | 0)] & 255) << 16);
                r = 2;
            }
    
            if (r === 2) {
                this.m_array[i] = this.m_array[i] | ((bytes[((j + 1) | 0)] & 255) << 8);
                r = 1;
            }
    
            if (r === 1) {
                this.m_array[i] = this.m_array[i] | (bytes[j] & 255);
            }
    
            this._version = 0;
        },
        constructor: function (values) {
            if (values == null) {
                throw new System.ArgumentNullException("values");
            }
    
            this.m_array = System.Array.init(System.Collections.BitArray.getArrayLength(values.length, System.Collections.BitArray.BitsPerInt32), 0);
            this.m_length = values.length;
    
            for (var i = 0; i < values.length; i = (i + 1) | 0) {
                if (values[i]) {
                    this.m_array[((Bridge.Int.div(i, 32)) | 0)] = this.m_array[((Bridge.Int.div(i, 32)) | 0)] | (1 << (i % 32));
                }
            }
    
            this._version = 0;
        },
        constructor$5: function (values) {
            if (values == null) {
                throw new System.ArgumentNullException("values");
            }
            // this value is chosen to prevent overflow when computing m_length
            if (values.length > 67108863) {
                throw new System.ArgumentException(System.String.format("The input array length must not exceed Int32.MaxValue / {0}. Otherwise BitArray.Length would exceed Int32.MaxValue.", System.Collections.BitArray.BitsPerInt32), "values");
            }
    
            this.m_array = System.Array.init(values.length, 0);
            this.m_length = (values.length * System.Collections.BitArray.BitsPerInt32) | 0;
    
            System.Array.copy(values, 0, this.m_array, 0, values.length);
    
            this._version = 0;
        },
        constructor$2: function (bits) {
            if (bits == null) {
                throw new System.ArgumentNullException("bits");
            }
    
            var arrayLength = System.Collections.BitArray.getArrayLength(bits.m_length, System.Collections.BitArray.BitsPerInt32);
            this.m_array = System.Array.init(arrayLength, 0);
            this.m_length = bits.m_length;
    
            System.Array.copy(bits.m_array, 0, this.m_array, 0, arrayLength);
    
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
                throw new System.ArgumentOutOfRangeException("value", "Non-negative number required.");
            }
    
            var newints = System.Collections.BitArray.getArrayLength(value, System.Collections.BitArray.BitsPerInt32);
            if (newints > this.m_array.length || ((newints + System.Collections.BitArray._ShrinkThreshold) | 0) < this.m_array.length) {
                // grow or shrink (if wasting more than _ShrinkThreshold ints)
                var newarray = System.Array.init(newints, 0);
                System.Array.copy(this.m_array, 0, newarray, 0, newints > this.m_array.length ? this.m_array.length : newints);
                this.m_array = newarray;
            }
    
            if (value > this.m_length) {
                // clear high bit values in the last int
                var last = (System.Collections.BitArray.getArrayLength(this.m_length, System.Collections.BitArray.BitsPerInt32) - 1) | 0;
                var bits = this.m_length % 32;
                if (bits > 0) {
                    this.m_array[last] = this.m_array[last] & ((((1 << bits) - 1) | 0));
                }
    
                // clear remaining int values
                System.Array.fill(this.m_array, 0, ((last + 1) | 0), ((((newints - last) | 0) - 1) | 0));
            }
    
            this.m_length = value;
            this._version = (this._version + 1) | 0;
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
                throw new System.ArgumentOutOfRangeException("index", "Index was out of range. Must be non-negative and less than the size of the collection.");
            }
    
            return (this.m_array[((Bridge.Int.div(index, 32)) | 0)] & (1 << (index % 32))) !== 0;
        },
        set: function (index, value) {
            if (index < 0 || index >= this.getLength()) {
                throw new System.ArgumentOutOfRangeException("index", "Index was out of range. Must be non-negative and less than the size of the collection.");
            }
    
            if (value) {
                this.m_array[((Bridge.Int.div(index, 32)) | 0)] = this.m_array[((Bridge.Int.div(index, 32)) | 0)] | (1 << (index % 32));
            }
            else  {
                this.m_array[((Bridge.Int.div(index, 32)) | 0)] = this.m_array[((Bridge.Int.div(index, 32)) | 0)] & (~(1 << (index % 32)));
            }
    
            this._version = (this._version + 1) | 0;
        },
        setAll: function (value) {
            var fillValue = value ? (-1) : 0;
            var ints = System.Collections.BitArray.getArrayLength(this.m_length, System.Collections.BitArray.BitsPerInt32);
            for (var i = 0; i < ints; i = (i + 1) | 0) {
                this.m_array[i] = fillValue;
            }
    
            this._version = (this._version + 1) | 0;
        },
        and: function (value) {
            if (value == null) {
                throw new System.ArgumentNullException("value");
            }
            if (this.getLength() !== value.getLength()) {
                throw new System.ArgumentException("Array lengths must be the same.");
            }
    
            var ints = System.Collections.BitArray.getArrayLength(this.m_length, System.Collections.BitArray.BitsPerInt32);
            for (var i = 0; i < ints; i = (i + 1) | 0) {
                this.m_array[i] = this.m_array[i] & value.m_array[i];
            }
    
            this._version = (this._version + 1) | 0;
            return this;
        },
        or: function (value) {
            if (value == null) {
                throw new System.ArgumentNullException("value");
            }
            if (this.getLength() !== value.getLength()) {
                throw new System.ArgumentException("Array lengths must be the same.");
            }
    
            var ints = System.Collections.BitArray.getArrayLength(this.m_length, System.Collections.BitArray.BitsPerInt32);
            for (var i = 0; i < ints; i = (i + 1) | 0) {
                this.m_array[i] = this.m_array[i] | value.m_array[i];
            }
    
            this._version = (this._version + 1) | 0;
            return this;
        },
        xor: function (value) {
            if (value == null) {
                throw new System.ArgumentNullException("value");
            }
            if (this.getLength() !== value.getLength()) {
                throw new System.ArgumentException("Array lengths must be the same.");
            }
    
            var ints = System.Collections.BitArray.getArrayLength(this.m_length, System.Collections.BitArray.BitsPerInt32);
            for (var i = 0; i < ints; i = (i + 1) | 0) {
                this.m_array[i] = this.m_array[i] ^ value.m_array[i];
            }
    
            this._version = (this._version + 1) | 0;
            return this;
        },
        not: function () {
            var ints = System.Collections.BitArray.getArrayLength(this.m_length, System.Collections.BitArray.BitsPerInt32);
            for (var i = 0; i < ints; i = (i + 1) | 0) {
                this.m_array[i] = ~this.m_array[i];
            }
    
            this._version = (this._version + 1) | 0;
            return this;
        },
        clone: function () {
            var bitArray = new System.Collections.BitArray("constructor$5", this.m_array);
            bitArray._version = this._version;
            bitArray.m_length = this.m_length;
            return bitArray;
        },
        getEnumerator: function () {
            return new System.Collections.BitArray.BitArrayEnumeratorSimple(this);
        }
    });
    
    Bridge.define('System.Collections.BitArray.BitArrayEnumeratorSimple', {
        inherits: [System.Collections.IEnumerator],
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
                throw new System.InvalidOperationException("Enumeration has not started. Call MoveNext.");
            }
            if (this.index >= this.bitarray.getCount()) {
                throw new System.InvalidOperationException("Enumeration already finished.");
            }
            return this.currentElement;
        },
        moveNext: function () {
            if (this.version !== this.bitarray._version) {
                throw new System.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
            if (this.index < (((this.bitarray.getCount() - 1) | 0))) {
                this.index = (this.index + 1) | 0;
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
                throw new System.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
            this.index = -1;
        }
    });
    
    Bridge.define('System.Collections.Generic.BitHelper', {
        statics: {
            MarkedBitFlag: 1,
            IntSize: 32,
            toIntArrayLength: function (n) {
                return n > 0 ? (((((Bridge.Int.div((((n - 1) | 0)), System.Collections.Generic.BitHelper.IntSize)) | 0) + 1) | 0)) : 0;
            }
        },
        _length: 0,
        _array: null,
        constructor: function (bitArray, length) {
            this._array = bitArray;
            this._length = length;
        },
        markBit: function (bitPosition) {
            var bitArrayIndex = (Bridge.Int.div(bitPosition, System.Collections.Generic.BitHelper.IntSize)) | 0;
            if (bitArrayIndex < this._length && bitArrayIndex >= 0) {
                var flag = (System.Collections.Generic.BitHelper.MarkedBitFlag << (bitPosition % System.Collections.Generic.BitHelper.IntSize));
                this._array[bitArrayIndex] = this._array[bitArrayIndex] | flag;
            }
        },
        isMarked: function (bitPosition) {
            var bitArrayIndex = (Bridge.Int.div(bitPosition, System.Collections.Generic.BitHelper.IntSize)) | 0;
            if (bitArrayIndex < this._length && bitArrayIndex >= 0) {
                var flag = (System.Collections.Generic.BitHelper.MarkedBitFlag << (bitPosition % System.Collections.Generic.BitHelper.IntSize));
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
             * @param   {Function}                                    T         
             * @param   {System.Collections.Generic.IEnumerable$1}    source    The enumerable to convert.
             * @return  {Array.<T>}                                             The resulting array.
             */
            toArray: function (T, source) {
                var count = { };
                var results = { v : Bridge.Collections.EnumerableHelpers.toArray$1(T, source, count) };
                System.Array.resize(results, count.v, null);
                return results.v;
            },
            /**
             * Converts an enumerable to an array using the same logic as does List{T}.
             *
             * @static
             * @this Bridge.Collections.EnumerableHelpers
             * @memberof Bridge.Collections.EnumerableHelpers
             * @param   {Function}                                    T         
             * @param   {System.Collections.Generic.IEnumerable$1}    source    The enumerable to convert.
             * @param   {System.Int32&}                               length    The number of items stored in the resulting array, 0-indexed.
             * @return  {Array.<T>}                                             The resulting array.  The length of the array may be greater than <b />,
             which is the actual number of elements in the array.
             */
            toArray$1: function (T, source, length) {
                var en = Bridge.getEnumerator(source, "$1");
                try {
                    if (en.moveNext()) {
                        var DefaultCapacity = 4;
                        var arr = { v : System.Array.init(DefaultCapacity, function (){
                            return Bridge.getDefaultValue(T);
                        }) };
                        arr.v[0] = en.getCurrent$1();
                        var count = 1;
    
                        while (en.moveNext()) {
                            if (count === arr.v.length) {
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
                                if ((newLength >>> 0) > MaxArrayLength) {
                                    newLength = MaxArrayLength <= count ? ((count + 1) | 0) : MaxArrayLength;
                                }
    
                                System.Array.resize(arr, newLength, null);
                            }
    
                            arr.v[Bridge.identity(count, (count = (count + 1) | 0))] = en.getCurrent$1();
                        }
    
                        length.v = count;
                        return arr.v;
                    }
                }
                finally {
                    if (Bridge.hasValue(en)) {
                        en.dispose();
                    }
                }
    
                length.v = 0;
                return System.Array.init(0, function (){
                    return Bridge.getDefaultValue(T);
                });
            }
        }
    });
    
    Bridge.define('System.Collections.Generic.HashSet$1', function (T) { return {
        inherits: [System.Collections.Generic.ICollection$1(T),System.Collections.Generic.ISet$1(T)],
        statics: {
            Lower31BitMask: 2147483647,
            ShrinkThreshold: 3,
            hashSetEquals: function (set1, set2, comparer) {
                var $t, $t1, $t2;
                if (set1 == null) {
                    return (set2 == null);
                }
                else  {
                    if (set2 == null) {
                        return false;
                    }
                }
                if (System.Collections.Generic.HashSet$1(T).areEqualityComparersEqual(set1, set2)) {
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
                            if (comparer.equals2(set2Item, set1Item)) {
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
            System.Collections.Generic.HashSet$1(T).prototype.constructor$3.call(this, new System.Collections.Generic.EqualityComparer$1(T)());
    
        },
        constructor$3: function (comparer) {
            if (comparer == null) {
                comparer = new System.Collections.Generic.EqualityComparer$1(T)();
            }
            this._comparer = comparer;
            this._lastIndex = 0;
            this._count = 0;
            this._freeList = -1;
            this._version = 0;
        },
        constructor$1: function (collection) {
            System.Collections.Generic.HashSet$1(T).prototype.constructor$2.call(this, collection, new System.Collections.Generic.EqualityComparer$1(T)());
    
        },
        constructor$2: function (collection, comparer) {
            System.Collections.Generic.HashSet$1(T).prototype.constructor$3.call(this, comparer);
    
            if (collection == null) {
                throw new System.ArgumentNullException("collection");
            }
            var suggestedCapacity = 0;
            var coll = Bridge.as(collection, System.Collections.Generic.ICollection$1(T));
            if (coll != null) {
                suggestedCapacity = System.Array.getCount(coll);
            }
            this.initialize(suggestedCapacity);
            this.unionWith(collection);
            if ((this._count === 0 && this._slots.length > System.Collections.HashHelpers.getMinPrime()) || (this._count > 0 && ((Bridge.Int.div(this._slots.length, this._count)) | 0) > System.Collections.Generic.HashSet$1(T).ShrinkThreshold)) {
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
                for (var i = 0; i < this._lastIndex; i = (i + 1) | 0) {
                    this._slots[i] = new System.Collections.Generic.HashSet$1.Slot(T)();
                }
    
                for (var i1 = 0; i1 < this._buckets.length; i1 = (i1 + 1) | 0) {
                    this._buckets[i1] = 0;
                }
    
                this._lastIndex = 0;
                this._count = 0;
                this._freeList = -1;
            }
            this._version = (this._version + 1) | 0;
        },
        arrayClear: function (array, index, length) {
        },
        contains: function (item) {
            if (this._buckets != null) {
                var hashCode = this.internalGetHashCode(item);
                for (var i = (this._buckets[hashCode % this._buckets.length] - 1) | 0; i >= 0; i = this._slots[i].next) {
                    if (this._slots[i].hashCode === hashCode && this._comparer.equals2(this._slots[i].value, item)) {
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
            if (array == null) {
                throw new System.ArgumentNullException("array");
            }
            if (arrayIndex < 0) {
                throw new System.ArgumentOutOfRangeException("arrayIndex");
            }
            if (count < 0) {
                throw new System.ArgumentOutOfRangeException("count");
            }
            if (arrayIndex > array.length || count > ((array.length - arrayIndex) | 0)) {
                throw new System.ArgumentException("Destination array is not long enough to copy all the items in the collection. Check array index and length.");
            }
            var numCopied = 0;
            for (var i = 0; i < this._lastIndex && numCopied < count; i = (i + 1) | 0) {
                if (this._slots[i].hashCode >= 0) {
                    array[((arrayIndex + numCopied) | 0)] = this._slots[i].value;
                    numCopied = (numCopied + 1) | 0;
                }
            }
        },
        remove: function (item) {
            if (this._buckets != null) {
                var hashCode = this.internalGetHashCode(item);
                var bucket = hashCode % this._buckets.length;
                var last = -1;
                for (var i = (this._buckets[bucket] - 1) | 0; i >= 0; last = i, i = this._slots[i].next) {
                    if (this._slots[i].hashCode === hashCode && this._comparer.equals2(this._slots[i].value, item)) {
                        if (last < 0) {
                            this._buckets[bucket] = (this._slots[i].next + 1) | 0;
                        }
                        else  {
                            this._slots[last].next = this._slots[i].next;
                        }
                        this._slots[i].hashCode = -1;
                        this._slots[i].value = Bridge.getDefaultValue(T);
                        this._slots[i].next = this._freeList;
                        this._count = (this._count - 1) | 0;
                        this._version = (this._version + 1) | 0;
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
            return new System.Collections.Generic.HashSet$1.Enumerator(T)("constructor$1", this);
        },
        getEnumerator$1: function () {
            return new System.Collections.Generic.HashSet$1.Enumerator(T)("constructor$1", this);
        },
        getEnumerator: function () {
            return new System.Collections.Generic.HashSet$1.Enumerator(T)("constructor$1", this);
        },
        unionWith: function (other) {
            var $t;
            if (other == null) {
                throw new System.ArgumentNullException("other");
            }
            $t = Bridge.getEnumerator(other);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                this.addIfNotPresent(item);
            }
        },
        intersectWith: function (other) {
            if (other == null) {
                throw new System.ArgumentNullException("other");
            }
            if (this._count === 0) {
                return;
            }
            var otherAsCollection = Bridge.as(other, System.Collections.Generic.ICollection$1(T));
            if (otherAsCollection != null) {
                if (System.Array.getCount(otherAsCollection) === 0) {
                    this.clear();
                    return;
                }
                var otherAsSet = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                if (otherAsSet != null && System.Collections.Generic.HashSet$1(T).areEqualityComparersEqual(this, otherAsSet)) {
                    this.intersectWithHashSetWithSameEC(otherAsSet);
                    return;
                }
            }
            this.intersectWithEnumerable(other);
        },
        exceptWith: function (other) {
            var $t;
            if (other == null) {
                throw new System.ArgumentNullException("other");
            }
            if (this._count === 0) {
                return;
            }
            if (Bridge.referenceEquals(other, this)) {
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
            if (other == null) {
                throw new System.ArgumentNullException("other");
            }
            if (this._count === 0) {
                this.unionWith(other);
                return;
            }
            if (Bridge.referenceEquals(other, this)) {
                this.clear();
                return;
            }
            var otherAsSet = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
            if (otherAsSet != null && System.Collections.Generic.HashSet$1(T).areEqualityComparersEqual(this, otherAsSet)) {
                this.symmetricExceptWithUniqueHashSet(otherAsSet);
            }
            else  {
                this.symmetricExceptWithEnumerable(other);
            }
        },
        isSubsetOf: function (other) {
            if (other == null) {
                throw new System.ArgumentNullException("other");
            }
            if (this._count === 0) {
                return true;
            }
            var otherAsSet = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
            if (otherAsSet != null && System.Collections.Generic.HashSet$1(T).areEqualityComparersEqual(this, otherAsSet)) {
                if (this._count > otherAsSet.getCount()) {
                    return false;
                }
                return this.isSubsetOfHashSetWithSameEC(otherAsSet);
            }
            else  {
                var result = this.checkUniqueAndUnfoundElements(other, false).$clone();
                return (result.uniqueCount === this._count && result.unfoundCount >= 0);
            }
        },
        isProperSubsetOf: function (other) {
            if (other == null) {
                throw new System.ArgumentNullException("other");
            }
            var otherAsCollection = Bridge.as(other, System.Collections.Generic.ICollection$1(T));
            if (otherAsCollection != null) {
                if (this._count === 0) {
                    return System.Array.getCount(otherAsCollection) > 0;
                }
                var otherAsSet = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                if (otherAsSet != null && System.Collections.Generic.HashSet$1(T).areEqualityComparersEqual(this, otherAsSet)) {
                    if (this._count >= otherAsSet.getCount()) {
                        return false;
                    }
                    return this.isSubsetOfHashSetWithSameEC(otherAsSet);
                }
            }
            var result = this.checkUniqueAndUnfoundElements(other, false).$clone();
            return (result.uniqueCount === this._count && result.unfoundCount > 0);
        },
        isSupersetOf: function (other) {
            if (other == null) {
                throw new System.ArgumentNullException("other");
            }
            var otherAsCollection = Bridge.as(other, System.Collections.Generic.ICollection$1(T));
            if (otherAsCollection != null) {
                if (System.Array.getCount(otherAsCollection) === 0) {
                    return true;
                }
                var otherAsSet = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                if (otherAsSet != null && System.Collections.Generic.HashSet$1(T).areEqualityComparersEqual(this, otherAsSet)) {
                    if (otherAsSet.getCount() > this._count) {
                        return false;
                    }
                }
            }
            return this.containsAllElements(other);
        },
        isProperSupersetOf: function (other) {
            if (other == null) {
                throw new System.ArgumentNullException("other");
            }
            if (this._count === 0) {
                return false;
            }
            var otherAsCollection = Bridge.as(other, System.Collections.Generic.ICollection$1(T));
            if (otherAsCollection != null) {
                if (System.Array.getCount(otherAsCollection) === 0) {
                    return true;
                }
                var otherAsSet = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                if (otherAsSet != null && System.Collections.Generic.HashSet$1(T).areEqualityComparersEqual(this, otherAsSet)) {
                    if (otherAsSet.getCount() >= this._count) {
                        return false;
                    }
                    return this.containsAllElements(otherAsSet);
                }
            }
            var result = this.checkUniqueAndUnfoundElements(other, true).$clone();
            return (result.uniqueCount < this._count && result.unfoundCount === 0);
        },
        overlaps: function (other) {
            var $t;
            if (other == null) {
                throw new System.ArgumentNullException("other");
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
            if (other == null) {
                throw new System.ArgumentNullException("other");
            }
            var otherAsSet = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
            if (otherAsSet != null && System.Collections.Generic.HashSet$1(T).areEqualityComparersEqual(this, otherAsSet)) {
                if (this._count !== otherAsSet.getCount()) {
                    return false;
                }
                return this.containsAllElements(otherAsSet);
            }
            else  {
                var otherAsCollection = Bridge.as(other, System.Collections.Generic.ICollection$1(T));
                if (otherAsCollection != null) {
                    if (this._count === 0 && System.Array.getCount(otherAsCollection) > 0) {
                        return false;
                    }
                }
                var result = this.checkUniqueAndUnfoundElements(other, true).$clone();
                return (result.uniqueCount === this._count && result.unfoundCount === 0);
            }
        },
        removeWhere: function (match) {
            if (Bridge.staticEquals(match, null)) {
                throw new System.ArgumentNullException("match");
            }
            var numRemoved = 0;
            for (var i = 0; i < this._lastIndex; i = (i + 1) | 0) {
                if (this._slots[i].hashCode >= 0) {
                    var value = this._slots[i].value;
                    if (match(value)) {
                        if (this.remove(value)) {
                            numRemoved = (numRemoved + 1) | 0;
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
                this._version = (this._version + 1) | 0;
            }
            else  {
                var newSize = System.Collections.HashHelpers.getPrime(this._count);
                var newSlots = System.Array.init(newSize, function (){
                    return new System.Collections.Generic.HashSet$1.Slot(T)();
                });
                var newBuckets = System.Array.init(newSize, 0);
                var newIndex = 0;
                for (var i = 0; i < this._lastIndex; i = (i + 1) | 0) {
                    if (this._slots[i].hashCode >= 0) {
                        newSlots[newIndex] = this._slots[i].$clone();
                        var bucket = newSlots[newIndex].hashCode % newSize;
                        newSlots[newIndex].next = (newBuckets[bucket] - 1) | 0;
                        newBuckets[bucket] = (newIndex + 1) | 0;
                        newIndex = (newIndex + 1) | 0;
                    }
                }
                this._lastIndex = newIndex;
                this._slots = newSlots;
                this._buckets = newBuckets;
                this._freeList = -1;
            }
        },
        initialize: function (capacity) {
            var size = System.Collections.HashHelpers.getPrime(capacity);
            this._buckets = System.Array.init(size, 0);
            this._slots = System.Array.init(size, function (){
                return new System.Collections.Generic.HashSet$1.Slot(T)();
            });
        },
        increaseCapacity: function () {
            var newSize = System.Collections.HashHelpers.expandPrime(this._count);
            if (newSize <= this._count) {
                throw new System.ArgumentException("HashSet capacity is too big.");
            }
            this.setCapacity(newSize, false);
        },
        setCapacity: function (newSize, forceNewHashCodes) {
            var newSlots = System.Array.init(newSize, function (){
                return new System.Collections.Generic.HashSet$1.Slot(T)();
            });
            if (this._slots != null) {
                for (var i = 0; i < this._lastIndex; i = (i + 1) | 0) {
                    newSlots[i] = this._slots[i].$clone();
                }
            }
            if (forceNewHashCodes) {
                for (var i1 = 0; i1 < this._lastIndex; i1 = (i1 + 1) | 0) {
                    if (newSlots[i1].hashCode !== -1) {
                        newSlots[i1].hashCode = this.internalGetHashCode(newSlots[i1].value);
                    }
                }
            }
            var newBuckets = System.Array.init(newSize, 0);
            for (var i2 = 0; i2 < this._lastIndex; i2 = (i2 + 1) | 0) {
                var bucket = newSlots[i2].hashCode % newSize;
                newSlots[i2].next = (newBuckets[bucket] - 1) | 0;
                newBuckets[bucket] = (i2 + 1) | 0;
            }
            this._slots = newSlots;
            this._buckets = newBuckets;
        },
        addIfNotPresent: function (value) {
            if (this._buckets == null) {
                this.initialize(0);
            }
            var hashCode = this.internalGetHashCode(value);
            var bucket = hashCode % this._buckets.length;
            for (var i = (this._buckets[bucket] - 1) | 0; i >= 0; i = this._slots[i].next) {
                if (this._slots[i].hashCode === hashCode && this._comparer.equals2(this._slots[i].value, value)) {
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
                this._lastIndex = (this._lastIndex + 1) | 0;
            }
            this._slots[index].hashCode = hashCode;
            this._slots[index].value = value;
            this._slots[index].next = (this._buckets[bucket] - 1) | 0;
            this._buckets[bucket] = (index + 1) | 0;
            this._count = (this._count + 1) | 0;
            this._version = (this._version + 1) | 0;
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
            for (var i = 0; i < this._lastIndex; i = (i + 1) | 0) {
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
            var intArrayLength = System.Collections.Generic.BitHelper.toIntArrayLength(originalLastIndex);
            var bitHelper;
            var bitArray = System.Array.init(intArrayLength, 0);
            bitHelper = new System.Collections.Generic.BitHelper(bitArray, intArrayLength);
            $t = Bridge.getEnumerator(other);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                var index = this.internalIndexOf(item);
                if (index >= 0) {
                    bitHelper.markBit(index);
                }
            }
            for (var i = 0; i < originalLastIndex; i = (i + 1) | 0) {
                if (this._slots[i].hashCode >= 0 && !bitHelper.isMarked(i)) {
                    this.remove(this._slots[i].value);
                }
            }
        },
        internalIndexOf: function (item) {
            var hashCode = this.internalGetHashCode(item);
            for (var i = (this._buckets[hashCode % this._buckets.length] - 1) | 0; i >= 0; i = this._slots[i].next) {
                if ((this._slots[i].hashCode) === hashCode && this._comparer.equals2(this._slots[i].value, item)) {
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
            var intArrayLength = System.Collections.Generic.BitHelper.toIntArrayLength(originalLastIndex);
            var itemsToRemove;
            var itemsAddedFromOther;
            var itemsToRemoveArray = System.Array.init(intArrayLength, 0);
            itemsToRemove = new System.Collections.Generic.BitHelper(itemsToRemoveArray, intArrayLength);
            var itemsAddedFromOtherArray = System.Array.init(intArrayLength, 0);
            itemsAddedFromOther = new System.Collections.Generic.BitHelper(itemsAddedFromOtherArray, intArrayLength);
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
            for (var i = 0; i < originalLastIndex; i = (i + 1) | 0) {
                if (itemsToRemove.isMarked(i)) {
                    this.remove(this._slots[i].value);
                }
            }
        },
        addOrGetLocation: function (value, location) {
            var hashCode = this.internalGetHashCode(value);
            var bucket = hashCode % this._buckets.length;
            for (var i = (this._buckets[bucket] - 1) | 0; i >= 0; i = this._slots[i].next) {
                if (this._slots[i].hashCode === hashCode && this._comparer.equals2(this._slots[i].value, value)) {
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
                this._lastIndex = (this._lastIndex + 1) | 0;
            }
            this._slots[index].hashCode = hashCode;
            this._slots[index].value = value;
            this._slots[index].next = (this._buckets[bucket] - 1) | 0;
            this._buckets[bucket] = (index + 1) | 0;
            this._count = (this._count + 1) | 0;
            this._version = (this._version + 1) | 0;
            location.v = index;
            return true;
        },
        checkUniqueAndUnfoundElements: function (other, returnIfUnfound) {
            var $t, $t1;
            var result = new System.Collections.Generic.HashSet$1.ElementCount(T)();
            if (this._count === 0) {
                var numElementsInOther = 0;
                $t = Bridge.getEnumerator(other);
                while ($t.moveNext()) {
                    var item = $t.getCurrent();
                    numElementsInOther = (numElementsInOther + 1) | 0;
                    break;
                }
                result.uniqueCount = 0;
                result.unfoundCount = numElementsInOther;
                return result.$clone();
            }
            var originalLastIndex = this._lastIndex;
            var intArrayLength = System.Collections.Generic.BitHelper.toIntArrayLength(originalLastIndex);
            var bitHelper;
            var bitArray = System.Array.init(intArrayLength, 0);
            bitHelper = new System.Collections.Generic.BitHelper(bitArray, intArrayLength);
            var unfoundCount = 0;
            var uniqueFoundCount = 0;
            $t1 = Bridge.getEnumerator(other);
            while ($t1.moveNext()) {
                var item1 = $t1.getCurrent();
                var index = this.internalIndexOf(item1);
                if (index >= 0) {
                    if (!bitHelper.isMarked(index)) {
                        bitHelper.markBit(index);
                        uniqueFoundCount = (uniqueFoundCount + 1) | 0;
                    }
                }
                else  {
                    unfoundCount = (unfoundCount + 1) | 0;
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
            var newArray = System.Array.init(this.getCount(), function (){
                return Bridge.getDefaultValue(T);
            });
            this.copyTo(newArray);
            return newArray;
        },
        internalGetHashCode: function (item) {
            if (item == null) {
                return 0;
            }
            return this._comparer.getHashCode2(item) & System.Collections.Generic.HashSet$1(T).Lower31BitMask;
        }
    }; });
    
    Bridge.define('System.Collections.Generic.HashSet$1.ElementCount', function (T) { return {
        statics: {
            getDefaultValue: function () { return new System.Collections.Generic.HashSet$1.ElementCount(T)(); }
        },
        uniqueCount: 0,
        unfoundCount: 0,
        constructor: function () {
        },
        $struct: true,
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 304990520;
            hash = hash * 23 + (this.uniqueCount == null ? 0 : Bridge.getHashCode(this.uniqueCount));
            hash = hash * 23 + (this.unfoundCount == null ? 0 : Bridge.getHashCode(this.unfoundCount));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, System.Collections.Generic.HashSet$1.ElementCount(T))) {
                return false;
            }
            return Bridge.equals(this.uniqueCount, o.uniqueCount) && Bridge.equals(this.unfoundCount, o.unfoundCount);
        },
        $clone: function (to) {
            var s = to || new System.Collections.Generic.HashSet$1.ElementCount(T)();
            s.uniqueCount = this.uniqueCount;
            s.unfoundCount = this.unfoundCount;
            return s;
        }
    }; });
    
    Bridge.define('System.Collections.Generic.HashSet$1.Enumerator', function (T) { return {
        inherits: [System.Collections.Generic.IEnumerator$1(T)],
        statics: {
            getDefaultValue: function () { return new System.Collections.Generic.HashSet$1.Enumerator(T)(); }
        },
        _set: null,
        _index: 0,
        _version: 0,
        _current: Bridge.getDefaultValue(T),
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
            if (this._index === 0 || this._index === ((this._set._lastIndex + 1) | 0)) {
                throw new System.InvalidOperationException("Enumeration has either not started or has already finished.");
            }
            return this.getCurrent$1();
        },
        dispose: function () {
        },
        moveNext: function () {
            if (this._version !== this._set._version) {
                throw new System.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
            while (this._index < this._set._lastIndex) {
                if (this._set._slots[this._index].hashCode >= 0) {
                    this._current = this._set._slots[this._index].value;
                    this._index = (this._index + 1) | 0;
                    return true;
                }
                this._index = (this._index + 1) | 0;
            }
            this._index = (this._set._lastIndex + 1) | 0;
            this._current = Bridge.getDefaultValue(T);
            return false;
        },
        reset: function () {
            if (this._version !== this._set._version) {
                throw new System.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
            this._index = 0;
            this._current = Bridge.getDefaultValue(T);
        },
        $struct: true,
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 2005474994;
            hash = hash * 23 + (this._set == null ? 0 : Bridge.getHashCode(this._set));
            hash = hash * 23 + (this._index == null ? 0 : Bridge.getHashCode(this._index));
            hash = hash * 23 + (this._version == null ? 0 : Bridge.getHashCode(this._version));
            hash = hash * 23 + (this._current == null ? 0 : Bridge.getHashCode(this._current));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, System.Collections.Generic.HashSet$1.Enumerator(T))) {
                return false;
            }
            return Bridge.equals(this._set, o._set) && Bridge.equals(this._index, o._index) && Bridge.equals(this._version, o._version) && Bridge.equals(this._current, o._current);
        },
        $clone: function (to) {
            var s = to || new System.Collections.Generic.HashSet$1.Enumerator(T)();
            s._set = this._set;
            s._index = this._index;
            s._version = this._version;
            s._current = this._current;
            return s;
        }
    }; });
    
    Bridge.define('System.Collections.Generic.HashSet$1.Slot', function (T) { return {
        statics: {
            getDefaultValue: function () { return new System.Collections.Generic.HashSet$1.Slot(T)(); }
        },
        hashCode: 0,
        value: Bridge.getDefaultValue(T),
        next: 0,
        constructor: function () {
        },
        $struct: true,
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1966733860;
            hash = hash * 23 + (this.hashCode == null ? 0 : Bridge.getHashCode(this.hashCode));
            hash = hash * 23 + (this.value == null ? 0 : Bridge.getHashCode(this.value));
            hash = hash * 23 + (this.next == null ? 0 : Bridge.getHashCode(this.next));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, System.Collections.Generic.HashSet$1.Slot(T))) {
                return false;
            }
            return Bridge.equals(this.hashCode, o.hashCode) && Bridge.equals(this.value, o.value) && Bridge.equals(this.next, o.next);
        },
        $clone: function (to) {
            var s = to || new System.Collections.Generic.HashSet$1.Slot(T)();
            s.hashCode = this.hashCode;
            s.value = this.value;
            s.next = this.next;
            return s;
        }
    }; });
    
    Bridge.define('System.Collections.Generic.Queue$1', function (T) { return {
        inherits: [System.Collections.Generic.IEnumerable$1(T),System.Collections.ICollection],
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
            this._array = System.Array.init(0, function (){
                return Bridge.getDefaultValue(T);
            });
        },
        constructor$2: function (capacity) {
            if (capacity < 0) {
                throw new System.ArgumentOutOfRangeException("capacity", "Non-negative number required.");
            }
            this._array = System.Array.init(capacity, function (){
                return Bridge.getDefaultValue(T);
            });
        },
        constructor$1: function (collection) {
            if (collection == null) {
                throw new System.ArgumentNullException("collection");
            }
    
            this._array = System.Array.init(System.Collections.Generic.Queue$1(T).DefaultCapacity, function (){
                return Bridge.getDefaultValue(T);
            });
    
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
                System.Array.fill(this._array, null, this._head, this._size);
            }
            else  {
                System.Array.fill(this._array, null, this._head, ((this._array.length - this._head) | 0));
                System.Array.fill(this._array, null, 0, this._tail);
            }
    
            this._head = 0;
            this._tail = 0;
            this._size = 0;
            this._version = (this._version + 1) | 0;
        },
        copyTo: function (array, arrayIndex) {
            if (array == null) {
                throw new System.ArgumentNullException("array");
            }
    
            if (arrayIndex < 0 || arrayIndex > array.length) {
                throw new System.ArgumentOutOfRangeException("arrayIndex", "Index was out of range. Must be non-negative and less than the size of the collection.");
            }
    
            var arrayLen = array.length;
            if (((arrayLen - arrayIndex) | 0) < this._size) {
                throw new System.ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
            }
    
            var numToCopy = (((arrayLen - arrayIndex) | 0) < this._size) ? (((arrayLen - arrayIndex) | 0)) : this._size;
            if (numToCopy === 0) {
                return;
            }
    
            var firstPart = (((this._array.length - this._head) | 0) < numToCopy) ? ((this._array.length - this._head) | 0) : numToCopy;
            System.Array.copy(this._array, this._head, array, arrayIndex, firstPart);
            numToCopy = (numToCopy - firstPart) | 0;
            if (numToCopy > 0) {
                System.Array.copy(this._array, 0, array, ((((arrayIndex + this._array.length) | 0) - this._head) | 0), numToCopy);
            }
        },
        enqueue: function (item) {
            if (this._size === this._array.length) {
                var newcapacity = (Bridge.Int.div(((this._array.length * System.Collections.Generic.Queue$1(T).GrowFactor) | 0), 100)) | 0;
                if (newcapacity < ((this._array.length + System.Collections.Generic.Queue$1(T).MinimumGrow) | 0)) {
                    newcapacity = (this._array.length + System.Collections.Generic.Queue$1(T).MinimumGrow) | 0;
                }
                this.setCapacity(newcapacity);
            }
    
            this._array[this._tail] = item;
            this._tail = this.moveNext(this._tail);
            this._size = (this._size + 1) | 0;
            this._version = (this._version + 1) | 0;
        },
        getEnumerator$2: function () {
            return new System.Collections.Generic.Queue$1.Enumerator(T)("constructor$1", this);
        },
        getEnumerator$1: function () {
            return new System.Collections.Generic.Queue$1.Enumerator(T)("constructor$1", this);
        },
        getEnumerator: function () {
            return new System.Collections.Generic.Queue$1.Enumerator(T)("constructor$1", this);
        },
        dequeue: function () {
            if (this._size === 0) {
                throw new System.InvalidOperationException("Queue empty.");
            }
    
            var removed = this._array[this._head];
            this._array[this._head] = Bridge.getDefaultValue(T);
            this._head = this.moveNext(this._head);
            this._size = (this._size - 1) | 0;
            this._version = (this._version + 1) | 0;
            return removed;
        },
        peek: function () {
            if (this._size === 0) {
                throw new System.InvalidOperationException("Queue empty.");
            }
    
            return this._array[this._head];
        },
        contains: function (item) {
            var index = this._head;
            var count = this._size;
    
            var c = new System.Collections.Generic.EqualityComparer$1(T)();
            while (Bridge.identity(count, (count = (count - 1) | 0)) > 0) {
                if (item == null) {
                    if (this._array[index] == null) {
                        return true;
                    }
                }
                else  {
                    if (this._array[index] != null && c.equals2(this._array[index], item)) {
                        return true;
                    }
                }
                index = this.moveNext(index);
            }
    
            return false;
        },
        getElement: function (i) {
            return this._array[(((this._head + i) | 0)) % this._array.length];
        },
        toArray: function () {
            var arr = System.Array.init(this._size, function (){
                return Bridge.getDefaultValue(T);
            });
            if (this._size === 0) {
                return arr;
            } // consider replacing with Array.Empty<T>() to be consistent with non-generic Queue
    
            if (this._head < this._tail) {
                System.Array.copy(this._array, this._head, arr, 0, this._size);
            }
            else  {
                System.Array.copy(this._array, this._head, arr, 0, ((this._array.length - this._head) | 0));
                System.Array.copy(this._array, 0, arr, ((this._array.length - this._head) | 0), this._tail);
            }
    
            return arr;
        },
        setCapacity: function (capacity) {
            var newarray = System.Array.init(capacity, function (){
                return Bridge.getDefaultValue(T);
            });
            if (this._size > 0) {
                if (this._head < this._tail) {
                    System.Array.copy(this._array, this._head, newarray, 0, this._size);
                }
                else  {
                    System.Array.copy(this._array, this._head, newarray, 0, ((this._array.length - this._head) | 0));
                    System.Array.copy(this._array, 0, newarray, ((this._array.length - this._head) | 0), this._tail);
                }
            }
    
            this._array = newarray;
            this._head = 0;
            this._tail = (this._size === capacity) ? 0 : this._size;
            this._version = (this._version + 1) | 0;
        },
        moveNext: function (index) {
            // It is tempting to use the remainder operator here but it is actually much slower
            // than a simple comparison and a rarely taken branch.
            var tmp = (index + 1) | 0;
            return (tmp === this._array.length) ? 0 : tmp;
        },
        trimExcess: function () {
            var threshold = Bridge.Int.clip32(this._array.length * 0.9);
            if (this._size < threshold) {
                this.setCapacity(this._size);
            }
        }
    }; });
    
    Bridge.define('System.Collections.Generic.Queue$1.Enumerator', function (T) { return {
        inherits: [System.Collections.Generic.IEnumerator$1(T),System.Collections.IEnumerator],
        statics: {
            getDefaultValue: function () { return new System.Collections.Generic.Queue$1.Enumerator(T)(); }
        },
        _q: null,
        _index: 0,
        _version: 0,
        _currentElement: Bridge.getDefaultValue(T),
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
                    throw new System.InvalidOperationException("Enumeration has not started. Call MoveNext.");
                }
                else  {
                    throw new System.InvalidOperationException("Enumeration already finished.");
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
                throw new System.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
    
            if (this._index === -2) {
                return false;
            }
    
            this._index = (this._index + 1) | 0;
    
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
                throw new System.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
            this._index = -1;
            this._currentElement = Bridge.getDefaultValue(T);
        },
        $struct: true,
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 2005474994;
            hash = hash * 23 + (this._q == null ? 0 : Bridge.getHashCode(this._q));
            hash = hash * 23 + (this._index == null ? 0 : Bridge.getHashCode(this._index));
            hash = hash * 23 + (this._version == null ? 0 : Bridge.getHashCode(this._version));
            hash = hash * 23 + (this._currentElement == null ? 0 : Bridge.getHashCode(this._currentElement));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, System.Collections.Generic.Queue$1.Enumerator(T))) {
                return false;
            }
            return Bridge.equals(this._q, o._q) && Bridge.equals(this._index, o._index) && Bridge.equals(this._version, o._version) && Bridge.equals(this._currentElement, o._currentElement);
        },
        $clone: function (to) {
            var s = to || new System.Collections.Generic.Queue$1.Enumerator(T)();
            s._q = this._q;
            s._index = this._index;
            s._version = this._version;
            s._currentElement = this._currentElement;
            return s;
        }
    }; });
    
    Bridge.define('System.Collections.Generic.Stack$1', function (T) { return {
        inherits: [System.Collections.Generic.IEnumerable$1(T),System.Collections.ICollection],
        statics: {
            DefaultCapacity: 4
        },
        _array: null,
        _size: 0,
        _version: 0,
        constructor: function () {
            this._array = System.Array.init(0, function (){
                return Bridge.getDefaultValue(T);
            });
        },
        constructor$2: function (capacity) {
            if (capacity < 0) {
                throw new System.ArgumentOutOfRangeException("capacity", "Non-negative number required.");
            }
            this._array = System.Array.init(capacity, function (){
                return Bridge.getDefaultValue(T);
            });
        },
        constructor$1: function (collection) {
            if (collection == null) {
                throw new System.ArgumentNullException("collection");
            }
            var length = { };
            this._array = Bridge.Collections.EnumerableHelpers.toArray$1(T, collection, length);
            this._size = length.v;
        },
        getCount: function () {
            return this._size;
        },
        clear: function () {
            System.Array.fill(this._array, null, 0, this._size); // Don't need to doc this but we clear the elements so that the gc can reclaim the references.
            this._size = 0;
            this._version = (this._version + 1) | 0;
        },
        contains: function (item) {
            var count = this._size;
    
            var c = new System.Collections.Generic.EqualityComparer$1(T)();
            while (Bridge.identity(count, (count = (count - 1) | 0)) > 0) {
                if (item == null) {
                    if (this._array[count] == null) {
                        return true;
                    }
                }
                else  {
                    if (this._array[count] != null && c.equals2(this._array[count], item)) {
                        return true;
                    }
                }
            }
            return false;
        },
        copyTo: function (array, arrayIndex) {
            if (array == null) {
                throw new System.ArgumentNullException("array");
            }
    
            if (arrayIndex < 0 || arrayIndex > array.length) {
                throw new System.ArgumentOutOfRangeException("arrayIndex", "Non-negative number required.");
            }
    
            if (((array.length - arrayIndex) | 0) < this._size) {
                throw new System.ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
            }
    
            if (!Bridge.referenceEquals(array, this._array)) {
                var srcIndex = 0;
                var dstIndex = (arrayIndex + this._size) | 0;
                for (var i = 0; i < this._size; i = (i + 1) | 0) {
                    array[((dstIndex = (dstIndex - 1) | 0))] = this._array[Bridge.identity(srcIndex, (srcIndex = (srcIndex + 1) | 0))];
                }
            }
            else  {
                // Legacy fallback in case we ever end up copying within the same array.
                System.Array.copy(this._array, 0, array, arrayIndex, this._size);
                System.Array.reverse(array, arrayIndex, this._size);
            }
        },
        copyTo$1: function (array, arrayIndex) {
            if (array == null) {
                throw new System.ArgumentNullException("array");
            }
    
            if (System.Array.getRank(array) !== 1) {
                throw new System.ArgumentException("Only single dimensional arrays are supported for the requested action.");
            }
    
            if (System.Array.getLower(array, 0) !== 0) {
                throw new System.ArgumentException("The lower bound of target array must be zero.");
            }
    
            if (arrayIndex < 0 || arrayIndex > array.length) {
                throw new System.ArgumentOutOfRangeException("arrayIndex", "Non-negative number required.");
            }
    
            if (((array.length - arrayIndex) | 0) < this._size) {
                throw new System.ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
            }
    
            try {
                System.Array.copy(this._array, 0, array, arrayIndex, this._size);
                System.Array.reverse(array, arrayIndex, this._size);
            }
            catch ($e1) {
                $e1 = System.Exception.create($e1);
                throw new System.ArgumentException("Target array type is not compatible with the type of items in the collection.");
            }
        },
        getEnumerator$2: function () {
            return new System.Collections.Generic.Stack$1.Enumerator(T)("constructor$1", this);
        },
        getEnumerator$1: function () {
            return new System.Collections.Generic.Stack$1.Enumerator(T)("constructor$1", this);
        },
        getEnumerator: function () {
            return new System.Collections.Generic.Stack$1.Enumerator(T)("constructor$1", this);
        },
        trimExcess: function () {
            var threshold = Bridge.Int.clip32(this._array.length * 0.9);
            if (this._size < threshold) {
                var localArray = { v : this._array };
                System.Array.resize(localArray, this._size, null);
                this._array = localArray.v;
                this._version = (this._version + 1) | 0;
            }
        },
        peek: function () {
            if (this._size === 0) {
                throw new System.InvalidOperationException("Stack empty.");
            }
            return this._array[((this._size - 1) | 0)];
        },
        pop: function () {
            if (this._size === 0) {
                throw new System.InvalidOperationException("Stack empty.");
            }
            this._version = (this._version + 1) | 0;
            var item = this._array[((this._size = (this._size - 1) | 0))];
            this._array[this._size] = Bridge.getDefaultValue(T); // Free memory quicker.
            return item;
        },
        push: function (item) {
            if (this._size === this._array.length) {
                var localArray = { v : this._array };
                System.Array.resize(localArray, (this._array.length === 0) ? System.Collections.Generic.Stack$1(T).DefaultCapacity : ((2 * this._array.length) | 0), null);
                this._array = localArray.v;
            }
            this._array[Bridge.identity(this._size, (this._size = (this._size + 1) | 0))] = item;
            this._version = (this._version + 1) | 0;
        },
        toArray: function () {
            var objArray = System.Array.init(this._size, function (){
                return Bridge.getDefaultValue(T);
            });
            var i = 0;
            while (i < this._size) {
                objArray[i] = this._array[((((this._size - i) | 0) - 1) | 0)];
                i = (i + 1) | 0;
            }
            return objArray;
        }
    }; });
    
    Bridge.define('System.Collections.Generic.Stack$1.Enumerator', function (T) { return {
        inherits: [System.Collections.Generic.IEnumerator$1(T),System.Collections.IEnumerator],
        statics: {
            getDefaultValue: function () { return new System.Collections.Generic.Stack$1.Enumerator(T)(); }
        },
        _stack: null,
        _index: 0,
        _version: 0,
        _currentElement: Bridge.getDefaultValue(T),
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
                throw new System.InvalidOperationException("Enumeration has not started. Call MoveNext.");
            }
            if (this._index === -1) {
                throw new System.InvalidOperationException("Enumeration already finished.");
            }
            return this._currentElement;
        },
        getCurrent: function () {
            if (this._index === -2) {
                throw new System.InvalidOperationException("Enumeration has not started. Call MoveNext.");
            }
            if (this._index === -1) {
                throw new System.InvalidOperationException("Enumeration already finished.");
            }
            return this._currentElement;
        },
        dispose: function () {
            this._index = -1;
        },
        moveNext: function () {
            var retval;
            if (this._version !== this._stack._version) {
                throw new System.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
            if (this._index === -2) { // First call to enumerator.
                this._index = (this._stack._size - 1) | 0;
                retval = (this._index >= 0);
                if (retval) {
                    this._currentElement = this._stack._array[this._index];
                }
                return retval;
            }
            if (this._index === -1) { // End of enumeration.
                return false;
            }
    
            retval = (((this._index = (this._index - 1) | 0)) >= 0);
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
                throw new System.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
            }
            this._index = -2;
            this._currentElement = Bridge.getDefaultValue(T);
        },
        $struct: true,
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 2005474994;
            hash = hash * 23 + (this._stack == null ? 0 : Bridge.getHashCode(this._stack));
            hash = hash * 23 + (this._index == null ? 0 : Bridge.getHashCode(this._index));
            hash = hash * 23 + (this._version == null ? 0 : Bridge.getHashCode(this._version));
            hash = hash * 23 + (this._currentElement == null ? 0 : Bridge.getHashCode(this._currentElement));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, System.Collections.Generic.Stack$1.Enumerator(T))) {
                return false;
            }
            return Bridge.equals(this._stack, o._stack) && Bridge.equals(this._index, o._index) && Bridge.equals(this._version, o._version) && Bridge.equals(this._currentElement, o._currentElement);
        },
        $clone: function (to) {
            var s = to || new System.Collections.Generic.Stack$1.Enumerator(T)();
            s._stack = this._stack;
            s._index = this._index;
            s._version = this._version;
            s._currentElement = this._currentElement;
            return s;
        }
    }; });
    
    Bridge.define('System.Collections.HashHelpers', {
        statics: {
            HashPrime: 101,
            primes: null,
            MaxPrimeArrayLength: 2146435069,
            config: {
                init: function () {
                    this.primes = [3, 7, 11, 17, 23, 29, 37, 47, 59, 71, 89, 107, 131, 163, 197, 239, 293, 353, 431, 521, 631, 761, 919, 1103, 1327, 1597, 1931, 2333, 2801, 3371, 4049, 4861, 5839, 7013, 8419, 10103, 12143, 14591, 17519, 21023, 25229, 30293, 36353, 43627, 52361, 62851, 75431, 90523, 108631, 130363, 156437, 187751, 225307, 270371, 324449, 389357, 467237, 560689, 672827, 807403, 968897, 1162687, 1395263, 1674319, 2009191, 2411033, 2893249, 3471899, 4166287, 4999559, 5999471, 7199369];
                }
            },
            isPrime: function (candidate) {
                if ((candidate & 1) !== 0) {
                    var limit = Bridge.Int.clip32(Math.sqrt(candidate));
                    for (var divisor = 3; divisor <= limit; divisor = (divisor + 2) | 0) {
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
                    throw new System.ArgumentException("Hashtable's capacity overflowed and went negative. Check load factor, capacity and the current size of the table.");
                }
                for (var i = 0; i < System.Collections.HashHelpers.primes.length; i = (i + 1) | 0) {
                    var prime = System.Collections.HashHelpers.primes[i];
                    if (prime >= min) {
                        return prime;
                    }
                }
                for (var i1 = (min | 1); i1 < 2147483647; i1 = (i1 + 2) | 0) {
                    if (System.Collections.HashHelpers.isPrime(i1) && ((((i1 - 1) | 0)) % System.Collections.HashHelpers.HashPrime !== 0)) {
                        return i1;
                    }
                }
                return min;
            },
            getMinPrime: function () {
                return System.Collections.HashHelpers.primes[0];
            },
            expandPrime: function (oldSize) {
                var newSize = (2 * oldSize) | 0;
                if ((newSize >>> 0) > System.Collections.HashHelpers.MaxPrimeArrayLength && System.Collections.HashHelpers.MaxPrimeArrayLength > oldSize) {
                    return System.Collections.HashHelpers.MaxPrimeArrayLength;
                }
                return System.Collections.HashHelpers.getPrime(newSize);
            }
        }
    });
    
    Bridge.init();
})(this);
