    var array = {
        toIndex: function (arr, indices) {
            if (indices.length !== (arr.$s ? arr.$s.length : 1)) {
                throw new System.ArgumentException("Invalid number of indices");
            }

            if (indices[0] < 0 || indices[0] >= (arr.$s ? arr.$s[0] : arr.length)) {
                throw new System.IndexOutOfRangeException("Index 0 out of range");
            }

            var idx = indices[0],
                i;

            if (arr.$s) {
                for (i = 1; i < arr.$s.length; i++) {
                    if (indices[i] < 0 || indices[i] >= arr.$s[i]) {
                        throw new System.IndexOutOfRangeException("Index " + i + " out of range");
                    }

                    idx = idx * arr.$s[i] + indices[i];
                }
            }

            return idx;
        },

        index: function (index, arr) {
            if (index < 0 || index >= arr.length) {
                throw new System.IndexOutOfRangeException();
            }
            return index;
        },

        $get: function (indices) {
            var r = this[System.Array.toIndex(this, indices)];

            return typeof r !== "undefined" ? r : this.$v;
        },

        get: function (arr) {
            if (arguments.length < 2) {
                throw new System.ArgumentNullException("indices");
            }

            var idx = Array.prototype.slice.call(arguments, 1);

            for (var i = 0; i < idx.length; i++) {
                if (!Bridge.hasValue(idx[i])) {
                    throw new System.ArgumentNullException("indices");
                }
            }

            var r = arr[System.Array.toIndex(arr, idx)];

            return typeof r !== "undefined" ? r : arr.$v;
        },

        $set: function (indices, value) {
            this[System.Array.toIndex(this, indices)] = value;
        },

        set: function (arr, value) {
            var indices = Array.prototype.slice.call(arguments, 2);

            arr[System.Array.toIndex(arr, indices)] = value;
        },

        getLength: function (arr, dimension) {
            if (dimension < 0 || dimension >= (arr.$s ? arr.$s.length : 1)) {
                throw new System.IndexOutOfRangeException();
            }

            return arr.$s ? arr.$s[dimension] : arr.length;
        },

        getRank: function (arr) {
            return arr.$s ? arr.$s.length : 1;
        },

        getLower: function (arr, d) {
            System.Array.getLength(arr, d);

            return 0;
        },

        create: function (defvalue, initValues, T, sizes) {
            if (sizes === null) {
                throw new System.ArgumentNullException("length");
            }

            var arr = [],
                length = arguments.length > 3 ? 1 : 0,
                i, s, v, j,
                idx,
                indices,
                flatIdx;

            arr.$v = defvalue;
            arr.$s = [];
            arr.get = System.Array.$get;
            arr.set = System.Array.$set;

            if (sizes && Bridge.isArray(sizes)) {
                for (i = 0; i < sizes.length; i++) {
                    j = sizes[i];
                    if (isNaN(j) || j < 0) {
                        throw new System.ArgumentOutOfRangeException("length");
                    }
                    length *= j;
                    arr.$s[i] = j;
                }
            } else {
                for (i = 3; i < arguments.length; i++) {
                    j = arguments[i];
                    if (isNaN(j) || j < 0) {
                        throw new System.ArgumentOutOfRangeException("length");
                    }
                    length *= j;
                    arr.$s[i - 3] = j;
                }
            }

            arr.length = length;

            for (var k = 0; k < length; k++) {
                arr[k] = defvalue;
            }

            if (initValues) {
                for (i = 0; i < arr.length; i++) {
                    indices = [];
                    flatIdx = i;

                    for (s = arr.$s.length - 1; s >= 0; s--) {
                        idx = flatIdx % arr.$s[s];
                        indices.unshift(idx);
                        flatIdx = Bridge.Int.div(flatIdx - idx, arr.$s[s]);
                    }

                    v = initValues;

                    for (idx = 0; idx < indices.length; idx++) {
                        v = v[indices[idx]];
                    }

                    arr[i] = v;
                }
            }

            System.Array.init(arr, T, arr.$s.length);

            return arr;
        },

        init: function (length, value, T, addFn) {
            if (length == null) {
                throw new System.ArgumentNullException("length");
            }

            if (Bridge.isArray(length)) {
                var elementType = value,
                    rank = T || 1;
                System.Array.type(elementType, rank, length);
                return length;
            }

            if (isNaN(length) || length < 0) {
                throw new System.ArgumentOutOfRangeException("length");
            }

            var arr = new Array(length),
                isFn = addFn !== true && Bridge.isFunction(value);

            for (var i = 0; i < length; i++) {
                arr[i] = isFn ? value() : value;
            }

            return System.Array.init(arr, T, 1);
        },

        toEnumerable: function (array) {
            return new Bridge.ArrayEnumerable(array);
        },

        toEnumerator: function (array, T) {
            return new Bridge.ArrayEnumerator(array, T);
        },

        _typedArrays: {
            Float32Array: System.Single,
            Float64Array: System.Double,
            Int8Array: System.SByte,
            Int16Array: System.Int16,
            Int32Array: System.Int32,
            Uint8Array: System.Byte,
            Uint8ClampedArray: System.Byte,
            Uint16Array: System.UInt16,
            Uint32Array: System.UInt32
        },

        is: function (obj, type) {
            if (obj instanceof Bridge.ArrayEnumerator) {
                if ((obj.constructor === type) || (obj instanceof type) ||
                    type === Bridge.ArrayEnumerator ||
                    type.$$name && System.String.startsWith(type.$$name, "System.Collections.IEnumerator") ||
                    type.$$name && System.String.startsWith(type.$$name, "System.Collections.Generic.IEnumerator")) {
                    return true;
                }

                return false;
            }

            if (!Bridge.isArray(obj)) {
                return false;
            }

            if (type.$elementType && type.$isArray) {
                var et = Bridge.getType(obj).$elementType;
                if (et) {
                    return System.Array.getRank(obj) === type.$rank && Bridge.Reflection.isAssignableFrom(type.$elementType, et);
                }
                type = Array;
            }

            if ((obj.constructor === type) || (obj instanceof type)) {
                return true;
            }

            if (type === System.Collections.IEnumerable ||
                type === System.Collections.ICollection ||
                type === System.ICloneable ||
                type === System.Collections.IList ||
                type.$$name && System.String.startsWith(type.$$name, "System.Collections.Generic.IEnumerable$1") ||
                type.$$name && System.String.startsWith(type.$$name, "System.Collections.Generic.ICollection$1") ||
                type.$$name && System.String.startsWith(type.$$name, "System.Collections.Generic.IList$1") ||
                type.$$name && System.String.startsWith(type.$$name, "System.Collections.Generic.IReadOnlyCollection$1") ||
                type.$$name && System.String.startsWith(type.$$name, "System.Collections.Generic.IReadOnlyList$1")) {
                return true;
            }

            return !!System.Array._typedArrays[String.prototype.slice.call(Object.prototype.toString.call(obj), 8, -1)];
        },

        clone: function (arr) {
            var newArr;
            if (arr.length === 1) {
                newArr = [arr[0]];
            } else {
                newArr = arr.slice(0);
            }
            newArr.$type = arr.$type;
            return newArr;
        },

        getCount: function (obj, T) {
            var name,
                v;
            if (Bridge.isArray(obj)) {
                return obj.length;
            } else if (T && Bridge.isFunction(obj[name = "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$getCount"])) {
                return obj[name]();
            } else if (Bridge.isFunction(obj[name = "System$Collections$ICollection$getCount"])) {
                return obj[name]();
            } else if (T && (v = obj["System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$Count"]) !== undefined) {
                return v;
            } else if ((v = obj["System$Collections$ICollection$Count"]) !== undefined) {
                return v;
            } else if ((v = obj.Count) !== undefined) {
                return v;
            } else if (Bridge.isFunction(obj.getCount)) {
                return obj.getCount();
            }

            return 0;
        },

        getIsReadOnly: function (obj, T) {
            var name,
                v;

            if (Bridge.isArray(obj)) {
                return T ? true : false;
            } else if (T && Bridge.isFunction(obj[name = "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$getIsReadOnly"])) {
                return obj[name]();
            } else if (T && (v = obj["System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$IsReadOnly"]) !== undefined) {
                return v;
            } else if (Bridge.isFunction(obj[name = "System$Collections$IList$getIsReadOnly"])) {
                return obj[name]();
            } else if ((v = obj["System$Collections$IList$IsReadOnly"]) !== undefined) {
                return v;
            } else if ((v = obj.IsReadOnly) !== undefined) {
                return v;
            } else if (Bridge.isFunction(obj.getIsReadOnly)) {
                return obj.getIsReadOnly();
            }

            return false;
        },

        checkReadOnly: function(obj, T, msg) {
            if (System.Array.getIsReadOnly(obj, T)) {
                throw new System.NotSupportedException(msg || "Collection was of a fixed size.");
            }
        },

        add: function (obj, item, T) {
            var name;

            System.Array.checkReadOnly(obj, T);

            if (T) {
                item = System.Array.checkNewElementType(item, T);
            }

            if (T && Bridge.isFunction(obj[name = "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$add"])) {
                obj[name](item);
            } else if (Bridge.isFunction(obj[name = "System$Collections$IList$add"])) {
                obj[name](item);
            } else if (Bridge.isFunction(obj.add)) {
                obj.add(item);
            }
        },

        checkNewElementType: function (v, type) {
            var unboxed = Bridge.unbox(v, true);

            if (Bridge.isNumber(unboxed)) {
                if (type === System.Decimal) {
                    return new System.Decimal(unboxed);
                }

                if (type === System.Int64) {
                    return new System.Int64(unboxed);
                }

                if (type === System.UInt64) {
                    return new System.UInt64(unboxed);
                }
            }

            var is = Bridge.is(v, type);
            if (!is) {
                if (v == null && Bridge.getDefaultValue(type) == null) {
                    return null;
                }

                throw new System.ArgumentException("The value " + unboxed + "is not of type " + Bridge.getTypeName(type) + " and cannot be used in this generic collection.");
            }

            return unboxed;
        },

        clear: function (obj, T) {
            var name;

            System.Array.checkReadOnly(obj, T, "Collection is read-only.");

            if (Bridge.isArray(obj)) {
                System.Array.fill(obj, T ? (T.getDefaultValue || Bridge.getDefaultValue(T)) : null, 0, obj.length);
            } else if (T && Bridge.isFunction(obj[name = "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$clear"])) {
                obj[name]();
            } else if (Bridge.isFunction(obj[name = "System$Collections$IList$clear"])) {
                obj[name]();
            } else if (Bridge.isFunction(obj.clear)) {
                obj.clear();
            }
        },

        fill: function (dst, val, index, count) {
            if (!Bridge.hasValue(dst)) {
                throw new System.ArgumentNullException("dst");
            }

            if (index < 0 || count < 0 || (index + count) > dst.length) {
                throw new System.IndexOutOfRangeException();
            }

            var isFn = Bridge.isFunction(val);

            while (--count >= 0) {
                dst[index + count] = isFn ? val() : val;
            }
        },

        copy: function (src, spos, dest, dpos, len) {
            if (!dest) {
                throw new System.ArgumentNullException("dest", "Value cannot be null");
            }

            if (!src) {
                throw new System.ArgumentNullException("src", "Value cannot be null");
            }

            if (spos < 0 || dpos < 0 || len < 0) {
                throw new System.ArgumentOutOfRangeException("Number was less than the array's lower bound in the first dimension");
            }

            if (len > (src.length - spos) || len > (dest.length - dpos)) {
                throw new System.ArgumentException("Destination array was not long enough. Check destIndex and length, and the array's lower bounds");
            }

            if (spos < dpos && src === dest) {
                while (--len >= 0) {
                    dest[dpos + len] = src[spos + len];
                }
            } else {
                for (var i = 0; i < len; i++) {
                    dest[dpos + i] = src[spos + i];
                }
            }
        },

        copyTo: function (obj, dest, index, T) {
            var name;

            if (Bridge.isArray(obj)) {
                System.Array.copy(obj, 0, dest, index, obj ? obj.length : 0);
            } else if (Bridge.isFunction(obj.copyTo)) {
                obj.copyTo(dest, index);
            } else if (T && Bridge.isFunction(obj[name = "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$copyTo"])) {
                obj[name](dest, index);
            } else if (Bridge.isFunction(obj[name = "System$Collections$ICollection$copyTo"])) {
                obj[name](dest, index);
            } else {
                throw new System.NotImplementedException("copyTo");
            }
        },

        indexOf: function (arr, item, startIndex, count, T) {
            var name;

            if (Bridge.isArray(arr)) {
                var i,
                    el,
                    endIndex;

                startIndex = startIndex || 0;
                count = count || arr.length;
                endIndex = startIndex + count;

                for (i = startIndex; i < endIndex; i++) {
                    el = arr[i];

                    if (el === item || System.Collections.Generic.EqualityComparer$1.$default.equals2(el, item)) {
                        return i;
                    }
                }
            } else if (T && Bridge.isFunction(arr[name = "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$indexOf"])) {
                return arr[name](item);
            } else if (Bridge.isFunction(arr[name = "System$Collections$IList$indexOf"])) {
                return arr[name](item);
            } else if (Bridge.isFunction(arr.indexOf)) {
                return arr.indexOf(item);
            }

            return -1;
        },

        contains: function (obj, item, T) {
            var name;

            if (Bridge.isArray(obj)) {
                return System.Array.indexOf(obj, item) > -1;
            } else if (T && Bridge.isFunction(obj[name = "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$contains"])) {
                return obj[name](item);
            } else if (Bridge.isFunction(obj[name = "System$Collections$IList$contains"])) {
                return obj[name](item);
            } else if (Bridge.isFunction(obj.contains)) {
                return obj.contains(item);
            }

            return false;
        },

        remove: function (obj, item, T) {
            var name;

            System.Array.checkReadOnly(obj, T);

            if (Bridge.isArray(obj)) {
                var index = System.Array.indexOf(obj, item);

                if (index > -1) {
                    obj.splice(index, 1);

                    return true;
                }
            } else if (T && Bridge.isFunction(obj[name = "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$remove"])) {
                return obj[name](item);
            } else if (Bridge.isFunction(obj[name = "System$Collections$IList$remove"])) {
                return obj[name](item);
            } else if (Bridge.isFunction(obj.remove)) {
                return obj.remove(item);
            }

            return false;
        },

        insert: function (obj, index, item, T) {
            var name;

            System.Array.checkReadOnly(obj, T);

            if (T) {
                item = System.Array.checkNewElementType(item, T);
            }

            if (T && Bridge.isFunction(obj[name = "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$insert"])) {
                obj[name](index, item);
            } else if (Bridge.isFunction(obj[name = "System$Collections$IList$insert"])) {
                obj[name](index, item);
            } else if (Bridge.isFunction(obj.insert)) {
                obj.insert(index, item);
            }
        },

        removeAt: function (obj, index, T) {
            var name;

            System.Array.checkReadOnly(obj, T);

            if (Bridge.isArray(obj)) {
                obj.splice(index, 1);
            } else if (T && Bridge.isFunction(obj[name = "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$removeAt"])) {
                obj[name](index);
            } else if (Bridge.isFunction(obj[name = "System$Collections$IList$removeAt"])) {
                obj[name](index);
            } else if (Bridge.isFunction(obj.removeAt)) {
                obj.removeAt(index);
            }
        },

        getItem: function (obj, idx, T) {
            var name,
                v;

            if (Bridge.isArray(obj)) {
                return obj.$type && Bridge.getDefaultValue(obj.$type.$elementType) != null ? Bridge.box(obj[idx], obj.$type.$elementType) : obj[idx];
            } else if (Bridge.isFunction(obj.get)) {
                v = obj.get(idx);
            } else if (Bridge.isFunction(obj.getItem)) {
                v = obj.getItem(idx);
            } else if (T && Bridge.isFunction(obj[name = "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$getItem"])) {
                v = obj[name](idx);
            } else if (Bridge.isFunction(obj[name = "System$Collections$IList$$getItem"])) {
                v = obj[name](idx);
            } else if (Bridge.isFunction(obj.get_Item)) {
                v = obj.get_Item(idx);
            }

            return T && Bridge.getDefaultValue(T) != null ? Bridge.box(v, T) : v;
        },

        setItem: function (obj, idx, value, T) {
            var name;

            if (Bridge.isArray(obj)) {
                if (obj.$type) {
                    value = System.Array.checkElementType(value, obj.$type.$elementType);
                }

                obj[idx] = value;
            } else {
                if (T) {
                    value = System.Array.checkElementType(value, T);
                }

                if (Bridge.isFunction(obj.set)) {
                    obj.set(idx, value);
                } else if (Bridge.isFunction(obj.setItem)) {
                    obj.setItem(idx, value);
                } else if (T && Bridge.isFunction(obj[name = "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$setItem"])) {
                    return obj[name](idx, value);
                } else if (T && Bridge.isFunction(obj[name = "System$Collections$IList$setItem"])) {
                    return obj[name](idx, value);
                } else if (Bridge.isFunction(obj.set_Item)) {
                    obj.set_Item(idx, value);
                }
            }
        },

        checkElementType: function (v, type) {
            var unboxed = Bridge.unbox(v, true);

            if (Bridge.isNumber(unboxed)) {
                if (type === System.Decimal) {
                    return new System.Decimal(unboxed);
                }

                if (type === System.Int64) {
                    return new System.Int64(unboxed);
                }

                if (type === System.UInt64) {
                    return new System.UInt64(unboxed);
                }
            }

            var is = Bridge.is(v, type);
            if (!is) {
                if (v == null) {
                    return Bridge.getDefaultValue(type);
                }

                throw new System.ArgumentException("Cannot widen from source type to target type either because the source type is a not a primitive type or the conversion cannot be accomplished.");
            }

            return unboxed;
        },

        resize: function (arr, newSize, val) {
            if (newSize < 0) {
                throw new System.ArgumentOutOfRangeException("newSize", null, null, newSize);
            }

            var oldSize = 0,
                isFn = Bridge.isFunction(val),
                ref = arr.v;

            if (!ref) {
                ref = new Array(newSize);
            } else {
                oldSize = ref.length;
                ref.length = newSize;
            }

            for (var i = oldSize; i < newSize; i++) {
                ref[i] = isFn ? val() : val;
            }

            arr.v = ref;
        },

        reverse: function (arr, index, length) {
            if (!array) {
                throw new System.ArgumentNullException("arr");
            }

            if (!index && index !== 0) {
                index = 0;
                length = arr.length;
            }

            if (index < 0 || length < 0) {
                throw new System.ArgumentOutOfRangeException((index < 0 ? "index" : "length"), "Non-negative number required.");
            }

            if ((array.length - index) < length) {
                throw new System.ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
            }

            if (System.Array.getRank(arr) !== 1) {
                throw new System.Exception("Only single dimension arrays are supported here.");
            }

            var i = index,
                j = index + length - 1;

            while (i < j) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            }
        },

        binarySearch: function (array, index, length, value, comparer) {
            if (!array) {
                throw new System.ArgumentNullException("array");
            }

            var lb = 0;

            if (index < lb || length < 0) {
                throw new System.ArgumentOutOfRangeException(index < lb ? "index" : "length", "Non-negative number required.");
            }

            if (array.length - (index - lb) < length) {
                throw new System.ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
            }

            if (System.Array.getRank(array) !== 1) {
                throw new System.RankException("Only single dimensional arrays are supported for the requested action.");
            }

            if (!comparer) {
                comparer = System.Collections.Generic.Comparer$1.$default;
            }

            var lo = index,
                hi = index + length - 1,
                i,
                c;

            while (lo <= hi) {
                i = lo + ((hi - lo) >> 1);

                try {
                    c = comparer.compare(array[i], value);
                } catch (e) {
                    throw new System.InvalidOperationException("Failed to compare two elements in the array.", e);
                }

                if (c === 0) {
                    return i;
                }

                if (c < 0) {
                    lo = i + 1;
                } else {
                    hi = i - 1;
                }
            }

            return ~lo;
        },

        sort: function (array, index, length, comparer) {
            if (!array) {
                throw new System.ArgumentNullException("array");
            }

            if (arguments.length === 2 && typeof index === "function") {
                array.sort(index);
                return;
            }

            if (arguments.length === 2 && typeof index === "object") {
                comparer = index;
                index = null;
            }

            if (!Bridge.isNumber(index)) {
                index = 0;
            }

            if (!Bridge.isNumber(length)) {
                length = array.length;
            }

            if (!comparer) {
                comparer = System.Collections.Generic.Comparer$1.$default;
            }

            if (index === 0 && length === array.length) {
                array.sort(Bridge.fn.bind(comparer, comparer.compare));
            } else {
                var newarray = array.slice(index, index + length);

                newarray.sort(Bridge.fn.bind(comparer, comparer.compare));

                for (var i = index; i < (index + length) ; i++) {
                    array[i] = newarray[i - index];
                }
            }
        },

        min: function (arr, minValue) {
            var min = arr[0],
                len = arr.length;

            for (var i = 0; i < len; i++) {
                if ((arr[i] < min || min < minValue) && !(arr[i] < minValue)) {
                    min = arr[i];
                }
            }

            return min;
        },

        max: function (arr, maxValue) {
            var max = arr[0],
                len = arr.length;

            for (var i = 0; i < len; i++) {
                if ((arr[i] > max || max > maxValue) && !(arr[i] > maxValue)) {
                    max = arr[i];
                }
            }

            return max;
        },

        addRange: function (arr, items) {
            if (Bridge.isArray(items)) {
                arr.push.apply(arr, items);
            } else {
                var e = Bridge.getEnumerator(items);

                try {
                    while (e.moveNext()) {
                        arr.push(e.Current);
                    }
                } finally {
                    if (Bridge.is(e, System.IDisposable)) {
                        e.dispose();
                    }
                }
            }
        },

        convertAll: function (array, converter) {
            if (!Bridge.hasValue(array)) {
                throw new System.ArgumentNullException("array");
            }

            if (!Bridge.hasValue(converter)) {
                throw new System.ArgumentNullException("converter");
            }

            var array2 = array.map(converter);

            return array2;
        },

        find: function (T, array, match) {
            if (!Bridge.hasValue(array)) {
                throw new System.ArgumentNullException("array");
            }

            if (!Bridge.hasValue(match)) {
                throw new System.ArgumentNullException("match");
            }

            for (var i = 0; i < array.length; i++) {
                if (match(array[i])) {
                    return array[i];
                }
            }

            return Bridge.getDefaultValue(T);
        },

        findAll: function (array, match) {
            if (!Bridge.hasValue(array)) {
                throw new System.ArgumentNullException("array");
            }

            if (!Bridge.hasValue(match)) {
                throw new System.ArgumentNullException("match");
            }

            var list = [];

            for (var i = 0; i < array.length; i++) {
                if (match(array[i])) {
                    list.push(array[i]);
                }
            }

            return list;
        },

        findIndex: function (array, startIndex, count, match) {
            if (!Bridge.hasValue(array)) {
                throw new System.ArgumentNullException("array");
            }

            if (arguments.length === 2) {
                match = startIndex;
                startIndex = 0;
                count = array.length;
            } else if (arguments.length === 3) {
                match = count;
                count = array.length - startIndex;
            }

            if (startIndex < 0 || startIndex > array.length) {
                throw new System.ArgumentOutOfRangeException("startIndex");
            }

            if (count < 0 || startIndex > array.length - count) {
                throw new System.ArgumentOutOfRangeException("count");
            }

            if (!Bridge.hasValue(match)) {
                throw new System.ArgumentNullException("match");
            }

            var endIndex = startIndex + count;

            for (var i = startIndex; i < endIndex; i++) {
                if (match(array[i])) {
                    return i;
                }
            }

            return -1;
        },

        findLast: function (T, array, match) {
            if (!Bridge.hasValue(array)) {
                throw new System.ArgumentNullException("array");
            }

            if (!Bridge.hasValue(match)) {
                throw new System.ArgumentNullException("match");
            }

            for (var i = array.length - 1; i >= 0; i--) {
                if (match(array[i])) {
                    return array[i];
                }
            }

            return Bridge.getDefaultValue(T);
        },

        findLastIndex: function (array, startIndex, count, match) {
            if (!Bridge.hasValue(array)) {
                throw new System.ArgumentNullException("array");
            }

            if (arguments.length === 2) {
                match = startIndex;
                startIndex = array.length - 1;
                count = array.length;
            } else if (arguments.length === 3) {
                match = count;
                count = startIndex + 1;
            }

            if (!Bridge.hasValue(match)) {
                throw new System.ArgumentNullException("match");
            }

            if (array.length === 0) {
                if (startIndex !== -1) {
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }
            } else {
                if (startIndex < 0 || startIndex >= array.length) {
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }
            }

            if (count < 0 || startIndex - count + 1 < 0) {
                throw new System.ArgumentOutOfRangeException("count");
            }

            var endIndex = startIndex - count;

            for (var i = startIndex; i > endIndex; i--) {
                if (match(array[i])) {
                    return i;
                }
            }

            return -1;
        },

        forEach: function (array, action) {
            if (!Bridge.hasValue(array)) {
                throw new System.ArgumentNullException("array");
            }

            if (!Bridge.hasValue(action)) {
                throw new System.ArgumentNullException("action");
            }

            for (var i = 0; i < array.length; i++) {
                action(array[i], i, array);
            }
        },

        indexOfT: function (array, value, startIndex, count) {
            if (!Bridge.hasValue(array)) {
                throw new System.ArgumentNullException("array");
            }

            if (arguments.length === 2) {
                startIndex = 0;
                count = array.length;
            } else if (arguments.length === 3) {
                count = array.length - startIndex;
            }

            if (startIndex < 0 || (startIndex >= array.length && array.length > 0)) {
                throw new System.ArgumentOutOfRangeException("startIndex", "out of range");
            }

            if (count < 0 || count > array.length - startIndex) {
                throw new System.ArgumentOutOfRangeException("count", "out of range");
            }

            return System.Array.indexOf(array, value, startIndex, count);
        },

        lastIndexOfT: function (array, value, startIndex, count) {
            if (!Bridge.hasValue(array)) {
                throw new System.ArgumentNullException("array");
            }

            if (arguments.length === 2) {
                startIndex = array.length - 1;
                count = array.length;
            } else if (arguments.length === 3) {
                count = (array.length === 0) ? 0 : (startIndex + 1);
            }

            if (startIndex < 0 || (startIndex >= array.length && array.length > 0)) {
                throw new System.ArgumentOutOfRangeException("startIndex", "out of range");
            }

            if (count < 0 || startIndex - count + 1 < 0) {
                throw new System.ArgumentOutOfRangeException("count", "out of range");
            }

            var endIndex = startIndex - count + 1;

            for (var i = startIndex; i >= endIndex; i--) {
                var el = array[i];

                if (el === value || System.Collections.Generic.EqualityComparer$1.$default.equals2(el, value)) {
                    return i;
                }
            }

            return -1;
        },

        trueForAll: function (array, match) {
            if (!Bridge.hasValue(array)) {
                throw new System.ArgumentNullException("array");
            }

            if (!Bridge.hasValue(match)) {
                throw new System.ArgumentNullException("match");
            }

            for (var i = 0; i < array.length; i++) {
                if (!match(array[i])) {
                    return false;
                }
            }

            return true;
        },

        type: function (t, rank, arr) {
            rank = rank || 1;

            var typeCache = System.Array.$cache[rank],
                result,
                name;

            if (!typeCache) {
                typeCache = [];
                System.Array.$cache[rank] = typeCache;
            }

            for (var i = 0; i < typeCache.length; i++) {
                if (typeCache[i].$elementType === t) {
                    result = typeCache[i];
                    break;
                }
            }

            if (!result) {
                name = Bridge.getTypeName(t) + "[" + System.String.fromCharCount(",".charCodeAt(0), rank - 1) + "]";
                var old = Bridge.Class.staticInitAllow;
                result = Bridge.define(name, {
                    $inherits: [Array, System.Collections.ICollection, System.ICloneable, System.Collections.Generic.IList$1(t), System.Collections.Generic.IReadOnlyCollection$1(t)],
                    $noRegister: true,
                    statics: {
                        $elementType: t,
                        $rank: rank,
                        $isArray: true,
                        $is: function(obj) {
                            return System.Array.is(obj, this);
                        },
                        getDefaultValue: function() {
                            return null;
                        },
                        createInstance: function() {
                            var arr;
                            if (this.$rank === 1) {
                                arr = [];
                            } else {
                                var args = [Bridge.getDefaultValue(this.$elementType), null, this.$elementType];
                                for (var j = 0; j < this.$rank; j++) {
                                    args.push(0);
                                }
                                arr = System.Array.create.apply(System.Array, args);
                            }

                            arr.$type = this;
                            return arr;
                        }
                    }
                });

                typeCache.push(result);

                Bridge.Class.staticInitAllow = true;
                if (result.$staticInit) {
                    result.$staticInit();
                }
                Bridge.Class.staticInitAllow = old;
            }

            if (arr) {
                arr.$type = result;
            }

            return arr || result;
        }
    };

    System.Array = array;
    System.Array.$cache = {};
