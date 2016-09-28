    Bridge.define('System.Collections.Generic.List$1', function (T) {
        return {
            inherits: [System.Collections.Generic.ICollection$1(T), System.Collections.ICollection, System.Collections.Generic.IList$1(T)],

            config: {
                alias: [
                "getItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$getItem",
                "setItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$setItem",
                "getCount", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$getCount",
                "getIsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$getIsReadOnly",
                "add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$add",
                "clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$clear",
                "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$contains",
                "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$copyTo",
                "getEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator",
                "indexOf", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$indexOf",
                "insert", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$insert",
                "remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$remove",
                "removeAt", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$removeAt"
                ]
            },

            ctor: function (obj) {
                this.$initialize();
                if (Object.prototype.toString.call(obj) === '[object Array]') {
                    this.items = System.Array.clone(obj);
                } else if (Bridge.is(obj, System.Collections.IEnumerable)) {
                    this.items = Bridge.toArray(obj);
                } else {
                    this.items = [];
                }
            },

            checkIndex: function (index) {
                if (index < 0 || index > (this.items.length - 1)) {
                    throw new System.ArgumentOutOfRangeException('Index out of range');
                }
            },

            getCount: function () {
                return this.items.length;
            },

            getIsReadOnly: function () {
                return !!this.readOnly;
            },

            get: function (index) {
                this.checkIndex(index);

                return this.items[index];
            },

            getItem: function (index) {
                return this.get(index);
            },

            set: function (index, value) {
                this.checkReadOnly();
                this.checkIndex(index);
                this.items[index] = value;
            },

            setItem: function (index, value) {
                this.set(index, value);
            },

            add: function (value) {
                this.checkReadOnly();
                this.items.push(value);
            },

            addRange: function (items) {
                this.checkReadOnly();

                var array = Bridge.toArray(items),
                    i,
                    len;

                for (i = 0, len = array.length; i < len; ++i) {
                    this.items.push(array[i]);
                }
            },

            clear: function () {
                this.checkReadOnly();
                this.items = [];
            },

            indexOf: function (item, startIndex) {
                var i, el;

                if (!Bridge.isDefined(startIndex)) {
                    startIndex = 0;
                }

                if (startIndex !== 0) {
                    this.checkIndex(startIndex);
                }

                for (i = startIndex; i < this.items.length; i++) {
                    el = this.items[i];

                    if (System.Collections.Generic.EqualityComparer$1.$default.equals2(el, item)) {
                        return i;
                    }
                }

                return -1;
            },

            insertRange: function (index, items) {
                this.checkReadOnly();

                if (index !== this.items.length) {
                    this.checkIndex(index);
                }

                var array = Bridge.toArray(items);

                for (var i = 0; i < array.length; i++) {
                    this.insert(index++, array[i]);
                }
            },

            contains: function (item) {
                return this.indexOf(item) > -1;
            },

            copyTo: function (array, arrayIndex) {
                System.Array.copy(this.items, 0, array, arrayIndex, this.items.length);
            },

            getEnumerator: function () {
                return new Bridge.ArrayEnumerator(this.items, T);
            },

            getRange: function (index, count) {
                if (!Bridge.isDefined(index)) {
                    index = 0;
                }

                if (!Bridge.isDefined(count)) {
                    count = this.items.length;
                }

                if (index !== 0) {
                    this.checkIndex(index);
                }

                this.checkIndex(index + count - 1);

                var result = [],
                    i,
                    maxIndex = index + count;

                for (i = index; i < maxIndex; i++) {
                    result.push(this.items[i]);
                }

                return new (System.Collections.Generic.List$1(T))(result);
            },

            insert: function (index, item) {
                this.checkReadOnly();

                if (index !== this.items.length) {
                    this.checkIndex(index);
                }

                if (Bridge.isArray(item)) {
                    for (var i = 0; i < item.length; i++) {
                        this.insert(index++, item[i]);
                    }
                } else {
                    this.items.splice(index, 0, item);
                }
            },

            join: function (delimeter) {
                return this.items.join(delimeter);
            },

            lastIndexOf: function (item, fromIndex) {
                if (!Bridge.isDefined(fromIndex)) {
                    fromIndex = this.items.length - 1;
                }

                if (fromIndex !== 0) {
                    this.checkIndex(fromIndex);
                }

                for (var i = fromIndex; i >= 0; i--) {
                    if (item === this.items[i]) {
                        return i;
                    }
                }

                return -1;
            },

            remove: function (item) {
                this.checkReadOnly();

                var index = this.indexOf(item);

                if (index < 0) {
                    return false;
                }

                this.checkIndex(index);
                this.items.splice(index, 1);
                return true;
            },

            removeAt: function (index) {
                this.checkReadOnly();
                this.checkIndex(index);
                this.items.splice(index, 1);
            },

            removeRange: function (index, count) {
                this.checkReadOnly();
                this.checkIndex(index);
                this.items.splice(index, count);
            },

            reverse: function () {
                this.checkReadOnly();
                this.items.reverse();
            },

            slice: function (start, end) {
                this.checkReadOnly();

                var gName = this.$$name.substr(this.$$name.lastIndexOf('$') + 1);

                return new (System.Collections.Generic.List$1(Bridge.unroll(gName)))(this.items.slice(start, end));
            },

            sort: function (comparison) {
                this.checkReadOnly();
                this.items.sort(comparison || System.Collections.Generic.Comparer$1.$default.compare);
            },

            splice: function (start, count, items) {
                this.checkReadOnly();
                this.items.splice(start, count, items);
            },

            unshift: function () {
                this.checkReadOnly();
                this.items.unshift();
            },

            toArray: function () {
                return Bridge.toArray(this);
            },

            checkReadOnly: function () {
                if (this.readOnly) {
                    throw new System.NotSupportedException();
                }
            },

            binarySearch: function (index, length, value, comparer) {
                if (arguments.length === 1) {
                    value = index;
                    index = null;
                }

                if (arguments.length === 2) {
                    value = index;
                    comparer = length;
                    index = null;
                    length = null;
                }

                if (!Bridge.isNumber(index)) {
                    index = 0;
                }

                if (!Bridge.isNumber(length)) {
                    length = this.items.length;
                }

                if (!comparer) {
                    comparer = System.Collections.Generic.Comparer$1.$default;
                }

                return System.Array.binarySearch(this.items, index, length, value, comparer);
            },

            convertAll: function (TOutput, converter) {
                if (!Bridge.hasValue(converter)) {
                    throw new System.ArgumentNullException("converter is null.");
                }

                var list = new (System.Collections.Generic.List$1(TOutput))(this.items.length);
                for (var i = 0; i < this.items.length; i++) {
                    list.items[i] = converter(this.items[i]);
                }

                return list;
            }
        };
    });

    Bridge.define('System.Collections.ObjectModel.ReadOnlyCollection$1', function (T) {
        return {
            inherits: [System.Collections.Generic.List$1(T)],
            ctor: function (list) {
                this.$initialize();
                if (list == null) {
                    throw new System.ArgumentNullException("list");
                }

                System.Collections.Generic.List$1(T).ctor.call(this, list);
                this.readOnly = true;
            }
        };
    });
