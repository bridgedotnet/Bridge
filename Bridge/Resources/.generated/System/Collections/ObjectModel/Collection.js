    Bridge.define("System.Collections.ObjectModel.Collection$1", function (T) { return {
        inherits: [System.Collections.Generic.IList$1(T),System.Collections.IList,System.Collections.Generic.IReadOnlyList$1(T)],
        statics: {
            methods: {
                IsCompatibleObject: function (value) {
                    return ((Bridge.is(value, T)) || (value == null && Bridge.getDefaultValue(T) == null));
                }
            }
        },
        fields: {
            items: null,
            _syncRoot: null
        },
        props: {
            Count: {
                get: function () {
                    return System.Array.getCount(this.items, T);
                }
            },
            Items: {
                get: function () {
                    return this.items;
                }
            },
            System$Collections$Generic$ICollection$1$IsReadOnly: {
                get: function () {
                    return System.Array.getIsReadOnly(this.items, T);
                }
            },
            System$Collections$ICollection$IsSynchronized: {
                get: function () {
                    return false;
                }
            },
            System$Collections$ICollection$SyncRoot: {
                get: function () {
                    if (this._syncRoot == null) {
                        var c = Bridge.as(this.items, System.Collections.ICollection);
                        if (c != null) {
                            this._syncRoot = c.System$Collections$ICollection$SyncRoot;
                        } else {
                            throw System.NotImplemented.ByDesign;
                        }
                    }
                    return this._syncRoot;
                }
            },
            System$Collections$IList$IsReadOnly: {
                get: function () {
                    return System.Array.getIsReadOnly(this.items, T);
                }
            },
            System$Collections$IList$IsFixedSize: {
                get: function () {
                    var list = Bridge.as(this.items, System.Collections.IList);
                    if (list != null) {
                        return System.Array.isFixedSize(list);
                    }
                    return System.Array.getIsReadOnly(this.items, T);
                }
            }
        },
        alias: [
            "Count", ["System$Collections$Generic$IReadOnlyCollection$1$" + Bridge.getTypeAlias(T) + "$Count", "System$Collections$Generic$IReadOnlyCollection$1$Count"],
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$Count",
            "getItem", ["System$Collections$Generic$IReadOnlyList$1$" + Bridge.getTypeAlias(T) + "$getItem", "System$Collections$Generic$IReadOnlyList$1$getItem"],
            "setItem", ["System$Collections$Generic$IReadOnlyList$1$" + Bridge.getTypeAlias(T) + "$setItem", "System$Collections$Generic$IReadOnlyList$1$setItem"],
            "getItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$getItem",
            "setItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$setItem",
            "add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$add",
            "clear", "System$Collections$IList$clear",
            "clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$clear",
            "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$copyTo",
            "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$contains",
            "GetEnumerator", ["System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$GetEnumerator", "System$Collections$Generic$IEnumerable$1$GetEnumerator"],
            "indexOf", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$indexOf",
            "insert", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$insert",
            "remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$remove",
            "removeAt", "System$Collections$IList$removeAt",
            "removeAt", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$removeAt",
            "System$Collections$Generic$ICollection$1$IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$IsReadOnly"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                this.items = new (System.Collections.Generic.List$1(T)).ctor();
            },
            $ctor1: function (list) {
                this.$initialize();
                if (list == null) {
                    System.ThrowHelper.ThrowArgumentNullException(System.ExceptionArgument.list);
                }
                this.items = list;
            }
        },
        methods: {
            getItem: function (index) {
                return System.Array.getItem(this.items, index, T);
            },
            setItem: function (index, value) {
                if (System.Array.getIsReadOnly(this.items, T)) {
                    System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_ReadOnlyCollection);
                }

                if (index < 0 || index >= System.Array.getCount(this.items, T)) {
                    System.ThrowHelper.ThrowArgumentOutOfRange_IndexException();
                }

                this.SetItem(index, value);
            },
            System$Collections$IList$getItem: function (index) {
                return System.Array.getItem(this.items, index, T);
            },
            System$Collections$IList$setItem: function (index, value) {
                System.ThrowHelper.IfNullAndNullsAreIllegalThenThrow(T, value, System.ExceptionArgument.value);

                try {
                    this.setItem(index, Bridge.cast(Bridge.unbox(value, T), T));
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.InvalidCastException)) {
                        System.ThrowHelper.ThrowWrongValueTypeArgumentException(System.Object, value, T);
                    } else {
                        throw $e1;
                    }
                }
            },
            add: function (item) {
                if (System.Array.getIsReadOnly(this.items, T)) {
                    System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_ReadOnlyCollection);
                }

                var index = System.Array.getCount(this.items, T);
                this.InsertItem(index, item);
            },
            System$Collections$IList$add: function (value) {
                if (System.Array.getIsReadOnly(this.items, T)) {
                    System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_ReadOnlyCollection);
                }
                System.ThrowHelper.IfNullAndNullsAreIllegalThenThrow(T, value, System.ExceptionArgument.value);

                try {
                    this.add(Bridge.cast(Bridge.unbox(value, T), T));
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.InvalidCastException)) {
                        System.ThrowHelper.ThrowWrongValueTypeArgumentException(System.Object, value, T);
                    } else {
                        throw $e1;
                    }
                }

                return ((this.Count - 1) | 0);
            },
            clear: function () {
                if (System.Array.getIsReadOnly(this.items, T)) {
                    System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_ReadOnlyCollection);
                }

                this.ClearItems();
            },
            copyTo: function (array, index) {
                System.Array.copyTo(this.items, array, index, T);
            },
            System$Collections$ICollection$copyTo: function (array, index) {
                if (array == null) {
                    System.ThrowHelper.ThrowArgumentNullException(System.ExceptionArgument.array);
                }

                if (System.Array.getRank(array) !== 1) {
                    System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Arg_RankMultiDimNotSupported);
                }

                if (System.Array.getLower(array, 0) !== 0) {
                    System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Arg_NonZeroLowerBound);
                }

                if (index < 0) {
                    System.ThrowHelper.ThrowIndexArgumentOutOfRange_NeedNonNegNumException();
                }

                if (((array.length - index) | 0) < this.Count) {
                    System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Arg_ArrayPlusOffTooSmall);
                }

                var tArray = Bridge.as(array, System.Array.type(T));
                if (tArray != null) {
                    System.Array.copyTo(this.items, tArray, index, T);
                } else {
                    var targetType = (Bridge.getType(array).$elementType || null);
                    var sourceType = T;
                    if (!(Bridge.Reflection.isAssignableFrom(targetType, sourceType) || Bridge.Reflection.isAssignableFrom(sourceType, targetType))) {
                        System.ThrowHelper.ThrowArgumentException_Argument_InvalidArrayType();
                    }

                    var objects = Bridge.as(array, System.Array.type(System.Object));
                    if (objects == null) {
                        System.ThrowHelper.ThrowArgumentException_Argument_InvalidArrayType();
                    }

                    var count = System.Array.getCount(this.items, T);
                    try {
                        for (var i = 0; i < count; i = (i + 1) | 0) {
                            objects[System.Array.index(Bridge.identity(index, (index = (index + 1) | 0)), objects)] = System.Array.getItem(this.items, i, T);
                        }
                    }
                    catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        if (Bridge.is($e1, System.ArrayTypeMismatchException)) {
                            System.ThrowHelper.ThrowArgumentException_Argument_InvalidArrayType();
                        } else {
                            throw $e1;
                        }
                    }
                }
            },
            contains: function (item) {
                return System.Array.contains(this.items, item, T);
            },
            System$Collections$IList$contains: function (value) {
                if (System.Collections.ObjectModel.Collection$1(T).IsCompatibleObject(value)) {
                    return this.contains(Bridge.cast(Bridge.unbox(value, T), T));
                }
                return false;
            },
            GetEnumerator: function () {
                return Bridge.getEnumerator(this.items, T);
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                return Bridge.getEnumerator(Bridge.cast(this.items, System.Collections.IEnumerable));
            },
            indexOf: function (item) {
                return System.Array.indexOf(this.items, item, 0, null, T);
            },
            System$Collections$IList$indexOf: function (value) {
                if (System.Collections.ObjectModel.Collection$1(T).IsCompatibleObject(value)) {
                    return this.indexOf(Bridge.cast(Bridge.unbox(value, T), T));
                }
                return -1;
            },
            insert: function (index, item) {
                if (System.Array.getIsReadOnly(this.items, T)) {
                    System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_ReadOnlyCollection);
                }

                if (index < 0 || index > System.Array.getCount(this.items, T)) {
                    System.ThrowHelper.ThrowArgumentOutOfRangeException$2(System.ExceptionArgument.index, System.ExceptionResource.ArgumentOutOfRange_ListInsert);
                }

                this.InsertItem(index, item);
            },
            System$Collections$IList$insert: function (index, value) {
                if (System.Array.getIsReadOnly(this.items, T)) {
                    System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_ReadOnlyCollection);
                }
                System.ThrowHelper.IfNullAndNullsAreIllegalThenThrow(T, value, System.ExceptionArgument.value);

                try {
                    this.insert(index, Bridge.cast(Bridge.unbox(value, T), T));
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.InvalidCastException)) {
                        System.ThrowHelper.ThrowWrongValueTypeArgumentException(System.Object, value, T);
                    } else {
                        throw $e1;
                    }
                }
            },
            remove: function (item) {
                if (System.Array.getIsReadOnly(this.items, T)) {
                    System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_ReadOnlyCollection);
                }

                var index = System.Array.indexOf(this.items, item, 0, null, T);
                if (index < 0) {
                    return false;
                }
                this.RemoveItem(index);
                return true;
            },
            System$Collections$IList$remove: function (value) {
                if (System.Array.getIsReadOnly(this.items, T)) {
                    System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_ReadOnlyCollection);
                }

                if (System.Collections.ObjectModel.Collection$1(T).IsCompatibleObject(value)) {
                    this.remove(Bridge.cast(Bridge.unbox(value, T), T));
                }
            },
            removeAt: function (index) {
                if (System.Array.getIsReadOnly(this.items, T)) {
                    System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_ReadOnlyCollection);
                }

                if (index < 0 || index >= System.Array.getCount(this.items, T)) {
                    System.ThrowHelper.ThrowArgumentOutOfRange_IndexException();
                }

                this.RemoveItem(index);
            },
            ClearItems: function () {
                System.Array.clear(this.items, T);
            },
            InsertItem: function (index, item) {
                System.Array.insert(this.items, index, item, T);
            },
            RemoveItem: function (index) {
                System.Array.removeAt(this.items, index, T);
            },
            SetItem: function (index, item) {
                System.Array.setItem(this.items, index, item, T);
            }
        }
    }; });
