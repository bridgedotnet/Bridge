// @source Array.js

(function () {
    var array = {
        toIndex: function (arr, indices) {
            if (indices.length !== (arr.$s ? arr.$s.length : 1)) {
                throw new Bridge.ArgumentException("Invalid number of indices");
            }

            if (indices[0] < 0 || indices[0] >= (arr.$s ? arr.$s[0] : arr.length)) {
                throw new Bridge.ArgumentException("Index 0 out of range");
            }

            var idx = indices[0],
                i;

            if (arr.$s) {
                for (i = 1; i < arr.$s.length; i++) {
                    if (indices[i] < 0 || indices[i] >= arr.$s[i]) {
                        throw new Bridge.ArgumentException("Index " + i + " out of range");
                    }

                    idx = idx * arr.$s[i] + indices[i];
                }
            }

            return idx;
        },

        $get: function (indices) {
            var r = this[Bridge.Array.toIndex(this, indices)];

            return typeof r !== "undefined" ? r : this.$v;
        },

        get: function (arr) {
            var r = arr[Bridge.Array.toIndex(arr, Array.prototype.slice.call(arguments, 1))];

            return typeof r !== "undefined" ? r : arr.$v;
        },

        $set: function (indices, value) {
            this[Bridge.Array.toIndex(this, Array.prototype.slice.call(indices, 0))] = value;
        },

        set: function (arr, value) {
            var indices = Array.prototype.slice.call(arguments, 2);
            arr[Bridge.Array.toIndex(arr, indices)] = value;
        },

        getLength: function (arr, dimension) {
            if (dimension >= (arr.$s ? arr.$s.length : 1)) {
                throw new Bridge.ArgumentException("Invalid dimension");
            }

            return arr.$s ? arr.$s[dimension] : arr.length;
        },

        getRank: function (arr) {
            return arr.$s ? arr.$s.length : 1;
        },

        getLower: function (arr, d) {
            return 0;
        },

        create: function (defvalue, initValues, sizes) {
            var arr = [],
                length = arguments.length > 2 ? 1 : 0,
                i, s, v,
                idx,
                indices,
                flatIdx;

            arr.$v = defvalue;
            arr.$s = [];
            arr.get = Bridge.Array.$get;
            arr.set = Bridge.Array.$set;

            for (i = 2; i < arguments.length; i++) {
                length *= arguments[i];
                arr.$s[i - 2] = arguments[i];
            }

            arr.length = length;

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

            return arr;
        },

        init: function (size, value) {
            var arr = new Array(size),
                isFn = Bridge.isFunction(value);

            for (var i = 0; i < size; i++) {
                arr[i] = isFn ? value() : value;
            }

            return arr;
        },

        toEnumerable: function (array) {
            return new Bridge.ArrayEnumerable(array);
        },

        toEnumerator: function (array) {
            return new Bridge.ArrayEnumerator(array);
        },

        is: function (obj, type) {
            if (obj instanceof Bridge.ArrayEnumerator) {
                if ((obj.constructor === type) || (obj instanceof type) ||
                    type === Bridge.ArrayEnumerator ||
                    type.$$name && Bridge.String.startsWith(type.$$name, "Bridge.IEnumerator")) {
                    return true;
                }
                return false;
            }


            if (!Bridge.isArray(obj)) {
                return false;
            }

            if ((obj.constructor === type) || (obj instanceof type)) {
                return true;
            }

            if (type === Bridge.IEnumerable ||
                type === Bridge.ICollection ||
                type === Bridge.ICloneable ||
                type.$$name && Bridge.String.startsWith(type.$$name, "Bridge.IEnumerable$1") ||
                type.$$name && Bridge.String.startsWith(type.$$name, "Bridge.ICollection$1") ||
                type.$$name && Bridge.String.startsWith(type.$$name, "Bridge.IList$1")) {
                return true;
            }

            return false;
        },

        clone: function (arr) {
            if (arr.length === 1) {
                return [arr[0]];
            } else {
                return arr.slice(0);
            }
        },

        getCount: function (obj) {
            if (Bridge.isArray(obj)) {
                return obj.length;
            } else if (Bridge.isFunction(obj.getCount)) {
                return obj.getCount();
            }

            return 0;
        },

        add: function (obj, item) {
            if (Bridge.isArray(obj)) {
                obj.push(item);
            } else if (Bridge.isFunction(obj.add)) {
                obj.add(item);
            }
        },

        clear: function (obj) {
            if (Bridge.isArray(obj)) {
                obj.length = 0;
            } else if (Bridge.isFunction(obj.clear)) {
                obj.clear();
            }
        },

        fill: function (dst, val, index, count) {
            if (index < 0 || count < 0 || (index + count) > dst.length) {
                throw new Bridge.ArgumentException();
            }

            var isFn = Bridge.isFunction(val);

            while (--count >= 0) {
                dst[index + count] = isFn ? val() : val;
            }
        },

        copy: function (src, spos, dst, dpos, len) {
            if (spos < 0 || dpos < 0 || len < 0) {
                throw new Bridge.ArgumentOutOfRangeException();
            }

            if (len > (src.length - spos) || len > (dst.length - dpos)) {
                throw new Bridge.ArgumentException();
            }

            if (spos < dpos && src === dst) {
                while (--len >= 0) {
                    dst[dpos + len] = src[spos + len];
                }
            } else {
                for (var i = 0; i < len; i++) {
                    dst[dpos + i] = src[spos + i];
                }
            }
        },

        indexOf: function (arr, item) {
            if (Bridge.isArray(arr)) {
                var i,
                    ln,
                    el;

                for (i = 0, ln = arr.length; i < ln; i++) {
                    el = arr[i];

                    if (el === item || Bridge.EqualityComparer$1.$default.equals(el, item)) {
                        return i;
                    }
                }
            } else if (Bridge.isFunction(arr.indexOf)) {
                return arr.indexOf(item);
            }

            return -1;
        },

        contains: function (obj, item) {
            if (Bridge.isArray(obj)) {
                return Bridge.Array.indexOf(obj, item) > -1;
            } else if (Bridge.isFunction(obj.contains)) {
                return obj.contains(item);
            }

            return false;
        },

        remove: function (obj, item) {
            if (Bridge.isArray(obj)) {
                var index = Bridge.Array.indexOf(obj, item);

                if (index > -1) {
                    obj.splice(index, 1);

                    return true;
                }
            } else if (Bridge.isFunction(obj.remove)) {
                return obj.remove(item);
            }

            return false;
        },

        insert: function (obj, index, item) {
            if (Bridge.isArray(obj)) {
                obj.splice(index, 0, item);
            } else if (Bridge.isFunction(obj.insert)) {
                 obj.insert(index, item);
            }
        },

        removeAt: function (obj, index) {
            if (Bridge.isArray(obj)) {
                obj.splice(index, 1);
            } else if (Bridge.isFunction(obj.removeAt)) {
                obj.removeAt(index);
            }
        },

        getItem: function (obj, idx) {
            if (Bridge.isArray(obj)) {
                return obj[idx];
            } else if (Bridge.isFunction(obj.get)) {
                return obj.get(idx);
            } else if (Bridge.isFunction(obj.getItem)) {
                return obj.getItem(idx);
            } else if (Bridge.isFunction(obj.get_Item)) {
                return obj.get_Item(idx);
            }
        },

        setItem: function (obj, idx, value) {
            if (Bridge.isArray(obj)) {
                obj[idx] = value;
            } else if (Bridge.isFunction(obj.set)) {
                obj.set(idx, value);
            } else if (Bridge.isFunction(obj.setItem)) {
                obj.setItem(idx, value);
            } else if (Bridge.isFunction(obj.set_Item)) {
                obj.set_Item(idx, value);
            }
        },

        resize: function (arr, newSize, val) {
            if (newSize < 0) {
                throw new Bridge.ArgumentOutOfRangeException("newSize", null, null, newSize);
            }

            var oldSize = 0,
                isFn = Bridge.isFunction(val);

            if (!arr) {
                arr = new Array(newSize);
            } else {
                oldSize = arr.length;
                arr.length = newSize;
            }

            for (var i = oldSize; i < newSize; i++) {
                arr[i] = isFn ? val() : val;
            }
        },

        reverse: function (arr, index, length) {
            if (!array) {
                throw new Bridge.ArgumentNullException("arr");
            }

            if (!index && index !== 0) {
                index = 0;
                length = arr.length;
            }

            if (index < 0 || length < 0) {
                throw new Bridge.ArgumentOutOfRangeException((index < 0 ? "index" : "length"), "Non-negative number required.");
            }

            if ((array.length - index) < length) {
                throw new Bridge.ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
            }

            if (Bridge.Array.getRank(arr) !== 1) {
                throw new Bridge.Exception("Only single dimension arrays are supported here.");
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

        binarySearch: function (array, index, length,value, comparer) {
            if (!array) {
                throw new Bridge.ArgumentNullException("array");
            }
            
            var lb = 0;
            if (index < lb || length < 0) {
                throw new Bridge.ArgumentOutOfRangeException(index < lb ? "index" : "length", "Non-negative number required.");
            }

            if (array.length - (index - lb) < length) {
                throw new Bridge.ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
            }

            if (Bridge.Array.getRank(array) !== 1) {
                throw new Bridge.RankException("Only single dimensional arrays are supported for the requested action.");
            }

            if (!comparer) {
                comparer = Bridge.Comparer$1.$default;
            }
 
            var lo = index,
                hi = index + length - 1,
                i,
                c;

            while (lo <= hi) {
                i = lo + ((hi - lo) >> 1);
 
                try {
                    c = comparer.compare(array[i], value);
                }
                catch (e) {
                    throw new Bridge.InvalidOperationException("Failed to compare two elements in the array.", e);
                }

                if (c === 0) {
                    return i;
                }

                if (c < 0) {
                    lo = i + 1;
                }
                else {
                    hi = i - 1;
                }
            }

            return ~lo;
        },

        sort: function (array, index, length, comparer) {
            if (!array) {
                throw new Bridge.ArgumentNullException("array");
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
                comparer = Bridge.Comparer$1.$default;
            }

            if (index === 0 && length === array.length) {
                array.sort(Bridge.fn.bind(comparer, comparer.compare));
            } else {
                var newarray = array.slice(index, index + length);
                newarray.sort(Bridge.fn.bind(comparer, comparer.compare));

                for (var i = index; i < (index + length); i++) {
                    array[i] = newarray[i-index];
                }
            }
        }
    };

    Bridge.Array = array;
})();
