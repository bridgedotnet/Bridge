    Bridge.define('System.Collections.Generic.List$1', function (T) {
        return {
            inherits: [System.Collections.Generic.IList$1(T), System.Collections.IList,
                System.Collections.Generic.IReadOnlyCollection$1(T), System.Collections.Generic.IReadOnlyList$1(T)],

            config: {
                properties: {
                  Count: {
                      get: function() {
                          return this.getCount();
                      }
                  },

                  IsReadOnly: {
                      get: function () {
                          return this.getIsReadOnly();
                      }
                  },

                  Capacity: {
                      get: function() {
                          return this._capacity;
                      },

                      set: function (value) {
                          if (value < this.items.length) {
                              throw new System.ArgumentOutOfRangeException("Capacity is set to a value that is less than Count.");
                          }

                          this._capacity = value;
                      }
                  }
                },
                alias: [
                "getItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$getItem",
                "getItem", "System$Collections$IList$getItem",
                "setItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$setItem",
                "setItem", "System$Collections$IList$setItem",
                "getCount", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$getCount",
                "getCount", "System$Collections$ICollection$getCount",
                "Count", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$Count",
                "Count", "System$Collections$ICollection$Count",
                "getIsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$getIsReadOnly",
                "getIsReadOnly", "System$Collections$IList$getIsReadOnly",
                "IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$IsReadOnly",
                "IsReadOnly", "System$Collections$IList$IsReadOnly",
                "add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$add",
                "add", "System$Collections$IList$add",
                "clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$clear",
                "clear", "System$Collections$IList$clear",
                "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$contains",
                "contains", "System$Collections$IList$contains",
                "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$copyTo",
                "copyTo", "System$Collections$ICollection$copyTo",
                "getEnumerator", ["System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator", "System$Collections$Generic$IEnumerable$1$getEnumerator"],
                "getEnumerator", "System$Collections$IEnumerable$getEnumerator",
                "indexOf", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$indexOf",
                "indexOf", "System$Collections$IList$indexOf",
                "insert", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$insert",
                "insert", "System$Collections$IList$insert",
                "remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$remove",
                "remove", "System$Collections$IList$remove",
                "removeAt", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$removeAt",
                "removeAt", "System$Collections$IList$removeAt"
                ]
            },

            toJSON: function() {
                return this.items;
            },

            ctor: function (obj) {
                this.$initialize();

                if (!Bridge.isDefined(obj)) {
                    this.items = [];
                } else if (Object.prototype.toString.call(obj) === '[object Array]') {
                    this.items = System.Array.clone(obj);
                } else if (Bridge.is(obj, System.Collections.IEnumerable)) {
                    this.items = Bridge.toArray(obj);
                } else {
                    this.items = [];
                }

                if (Bridge.isNumber(obj)) {
                    this._capacity = obj;
                } else {
                    this._capacity = this.items.length;
                }
                
                this.clear.$clearCallbacks = [];
            },

            checkIndex: function (index, message) {
                if (isNaN(index) || index < 0 || index >= this.items.length) {
                    throw new System.ArgumentOutOfRangeException(message || 'Index out of range');
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

            ensureCapacity: function(min) {
                if (this.items.length < min) {
                    var newCapacity = this.items.length == 0 ? 4 : this.items.length * 2;
                    this.Capacity = newCapacity;
                }
            },

            trimExcess: function () {
                var threshold = Bridge.Int.clip32(this.Capacity * 0.9);
                if (this.items.length < threshold) {
                    this.Capacity = this.items.length;                
                }
            }, 

            add: function (value) {
                this.checkReadOnly();
                this.ensureCapacity(this.items.length + 1);
                this.items.push(value);
            },

            addRange: function (items) {
                this.checkReadOnly();

                var array = Bridge.toArray(items),
                    i,
                    len;

                this.ensureCapacity(this.items.length + array.length);

                for (i = 0, len = array.length; i < len; ++i) {
                    this.items.push(array[i]);
                }
            },

            clear: function () {
                this.checkReadOnly();
                this.items = [];

                for (var i = 0; i < this.clear.$clearCallbacks.length; i++) {
                    this.clear.$clearCallbacks[i](this);
                }
            },

            onClear: function(callback) {
                this.clear.$clearCallbacks.push(callback);
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
                this.ensureCapacity(this.items.length + array.length);
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
                if (isNaN(index) || index < 0) {
                    throw new System.ArgumentOutOfRangeException("index out of range");
                }

                if (isNaN(count) || count < 0) {
                    throw new System.ArgumentOutOfRangeException("count out of range");
                }

                if (this.items.length - index < count) {
                    throw new System.ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index tothe end of the source collection.");
                }

                var items = [];

                for (var i = 0; i < count; i++) {
                    items[i] = this.items[index + i];
                }

                var list = new (System.Collections.Generic.List$1(T))();
                list.items = items;

                return list;
            },

            insert: function (index, item) {
                this.checkReadOnly();

                if (index !== this.items.length) {
                    this.checkIndex(index);
                }

                if (Bridge.isArray(item)) {
                    this.ensureCapacity(this.items.length + item.length);
                    for (var i = 0; i < item.length; i++) {
                        this.insert(index++, item[i]);
                    }
                } else {
                    this.ensureCapacity(this.items.length + 1);
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

                var list = new (System.Collections.Generic.List$1(T))();
                list.items = this.items.slice(start, end);

                return list;
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

                var list = new (System.Collections.Generic.List$1(TOutput))();
                for (var i = 0; i < this.items.length; i++) {
                    list.items[i] = converter(this.items[i]);
                }

                return list;
            },

            forEach: function(action) {
                if (action == null) {
                    throw new System.ArgumentNullException("action");
                }
 
                for (var i = 0; i < this.items.length; i++) {
                    action(this.items[i]);
                }
            }
        };
    });

    System.Collections.Generic.List$1.getElementType = function (type) {
        var interfaceType;
        if (System.String.startsWith(type.$$name, "System.Collections.Generic.IList")) {
            interfaceType = type;
        } else {
            var interfaces = Bridge.Reflection.getInterfaces(type);

            for (var j = 0; j < interfaces.length; j++) {
                if (System.String.startsWith(interfaces[j].$$name, "System.Collections.Generic.IList")) {
                    interfaceType = interfaces[j];
                    break;
                }
            }
        }

        return interfaceType ? Bridge.Reflection.getGenericArguments(interfaceType)[0] : null;
    };

    Bridge.define('System.Collections.ObjectModel.ReadOnlyCollection$1', function (T) {
        return {
            inherits: [System.Collections.Generic.List$1(T), System.Collections.Generic.IReadOnlyList$1(T)],
            ctor: function (list) {
                this.$initialize();
                if (list == null) {
                    throw new System.ArgumentNullException("list");
                }

                System.Collections.Generic.List$1(T).ctor.call(this, []);
                this.readOnly = true;

                if (Object.prototype.toString.call(list) === '[object Array]') {
                    this.items = list;
                } else if (Bridge.is(list, System.Collections.Generic.List$1(T))) {
                    var me = this;
                    this.items = list.items;
                    list.onClear(function(l) {
                        me.items = l.items;
                    });
                } else if (Bridge.is(list, System.Collections.IEnumerable)) {
                    this.items = Bridge.toArray(list);
                }
            }
        };
    });
