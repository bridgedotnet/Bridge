    Bridge.define("System.Collections.ObjectModel.ReadOnlyCollection$1", function (T) { return {
        inherits: [System.Collections.Generic.IList$1(T),System.Collections.IList,System.Collections.Generic.IReadOnlyList$1(T)],
        statics: {
            methods: {
                isCompatibleObject: function (value) {
                    // Non-null values are fine.  Only accept nulls if T is a class or Nullable<U>.
                    // Note that default(T) is not equal to null for value types except when T is Nullable<U>. 
                    return ((Bridge.is(value, T)) || (value == null && Bridge.getDefaultValue(T) == null));
                }
            }
        },
        fields: {
            list: null
        },
        props: {
            Count: {
                get: function () {
                    return System.Array.getCount(this.list, T);
                }
            },
            Items: {
                get: function () {
                    return this.list;
                }
            },
            System$Collections$Generic$ICollection$1$IsReadOnly: {
                get: function () {
                    return true;
                }
            },
            System$Collections$IList$IsReadOnly: {
                get: function () {
                    return true;
                }
            }
        },
        alias: [
            "Count", "System$Collections$Generic$IReadOnlyCollection$1$" + Bridge.getTypeAlias(T) + "$Count",
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$Count",
            "getItem", "System$Collections$Generic$IReadOnlyList$1$" + Bridge.getTypeAlias(T) + "$getItem",
            "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$contains",
            "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$copyTo",
            "getEnumerator", ["System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator", "System$Collections$Generic$IEnumerable$1$getEnumerator"],
            "indexOf", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$indexOf",
            "System$Collections$Generic$ICollection$1$IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$IsReadOnly",
            "System$Collections$Generic$IList$1$getItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$getItem",
            "System$Collections$Generic$IList$1$setItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$setItem",
            "System$Collections$Generic$ICollection$1$add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$add",
            "System$Collections$Generic$ICollection$1$clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$clear",
            "System$Collections$Generic$IList$1$insert", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$insert",
            "System$Collections$Generic$ICollection$1$remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$remove",
            "System$Collections$Generic$IList$1$removeAt", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$removeAt"
        ],
        ctors: {
            ctor: function (list) {
                this.$initialize();
                if (list == null) {
                    throw new System.ArgumentNullException("list");
                }
                this.list = list;
            }
        },
        methods: {
            getItem: function (index) {
                return System.Array.getItem(this.list, index, T);
            },
            System$Collections$Generic$IList$1$getItem: function (index) {
                return System.Array.getItem(this.list, index, T);
            },
            System$Collections$Generic$IList$1$setItem: function (index, value) {
                throw new System.NotSupportedException();
            },
            System$Collections$IList$getItem: function (index) {
                return System.Array.getItem(this.list, index, T);
            },
            System$Collections$IList$setItem: function (index, value) {
                throw new System.NotSupportedException();
            },
            contains: function (value) {
                return System.Array.contains(this.list, value, T);
            },
            System$Collections$IList$contains: function (value) {
                if (System.Collections.ObjectModel.ReadOnlyCollection$1(T).isCompatibleObject(value)) {
                    return this.contains(Bridge.cast(Bridge.unbox(value), T));
                }
                return false;
            },
            copyTo: function (array, index) {
                System.Array.copyTo(this.list, array, index, T);
            },
            System$Collections$ICollection$copyTo: function (array, index) {
                if (array == null) {
                    throw new System.ArgumentNullException("array");
                }

                if (System.Array.getRank(array) !== 1) {
                    throw new System.ArgumentException("array");
                }

                if (System.Array.getLower(array, 0) !== 0) {
                    throw new System.ArgumentException("array");
                }

                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException("index");
                }

                if (((array.length - index) | 0) < this.Count) {
                    throw new System.ArgumentException();
                }

                var items = Bridge.as(array, System.Array.type(T));
                if (items != null) {
                    System.Array.copyTo(this.list, items, index, T);
                } else {
                    //
                    // Catch the obvious case assignment will fail.
                    // We can found all possible problems by doing the check though.
                    // For example, if the element type of the Array is derived from T,
                    // we can't figure out if we can successfully copy the element beforehand.
                    //
                    var targetType = (Bridge.getType(array).$elementType || null);
                    var sourceType = T;
                    if (!(Bridge.Reflection.isAssignableFrom(targetType, sourceType) || Bridge.Reflection.isAssignableFrom(sourceType, targetType))) {
                        throw new System.ArgumentException();
                    }

                    //
                    // We can't cast array of value type to object[], so we don't support 
                    // widening of primitive types here.
                    //
                    var objects = Bridge.as(array, System.Array.type(System.Object));
                    if (objects == null) {
                        throw new System.ArgumentException();
                    }

                    var count = System.Array.getCount(this.list, T);
                    for (var i = 0; i < count; i = (i + 1) | 0) {
                        objects[System.Array.index(Bridge.identity(index, (index = (index + 1) | 0)), objects)] = System.Array.getItem(this.list, i, T);
                    }
                }
            },
            getEnumerator: function () {
                return Bridge.getEnumerator(this.list, T);
            },
            System$Collections$IEnumerable$getEnumerator: function () {
                return Bridge.getEnumerator(Bridge.cast(this.list, System.Collections.IEnumerable));
            },
            indexOf: function (value) {
                return System.Array.indexOf(this.list, value, 0, null, T);
            },
            System$Collections$IList$indexOf: function (value) {
                if (System.Collections.ObjectModel.ReadOnlyCollection$1(T).isCompatibleObject(value)) {
                    return this.indexOf(Bridge.cast(Bridge.unbox(value), T));
                }
                return -1;
            },
            System$Collections$Generic$ICollection$1$add: function (value) {
                throw new System.NotSupportedException();
            },
            System$Collections$IList$add: function (value) {
                throw new System.NotSupportedException();
            },
            System$Collections$Generic$ICollection$1$clear: function () {
                throw new System.NotSupportedException();
            },
            System$Collections$IList$clear: function () {
                throw new System.NotSupportedException();
            },
            System$Collections$Generic$IList$1$insert: function (index, value) {
                throw new System.NotSupportedException();
            },
            System$Collections$IList$insert: function (index, value) {
                throw new System.NotSupportedException();
            },
            System$Collections$Generic$ICollection$1$remove: function (value) {
                throw new System.NotSupportedException();
            },
            System$Collections$IList$remove: function (value) {
                throw new System.NotSupportedException();
            },
            System$Collections$Generic$IList$1$removeAt: function (index) {
                throw new System.NotSupportedException();
            },
            System$Collections$IList$removeAt: function (index) {
                throw new System.NotSupportedException();
            }
        }
    }; });
