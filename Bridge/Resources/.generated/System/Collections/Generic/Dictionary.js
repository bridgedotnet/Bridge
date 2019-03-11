    Bridge.define("System.Collections.Generic.Dictionary$2", function (TKey, TValue) { return {
        inherits: [System.Collections.Generic.IDictionary$2(TKey,TValue),System.Collections.IDictionary,System.Collections.Generic.IReadOnlyDictionary$2(TKey,TValue)],
        statics: {
            fields: {
                VersionName: null,
                HashSizeName: null,
                KeyValuePairsName: null,
                ComparerName: null
            },
            ctors: {
                init: function () {
                    this.VersionName = "Version";
                    this.HashSizeName = "HashSize";
                    this.KeyValuePairsName = "KeyValuePairs";
                    this.ComparerName = "Comparer";
                }
            },
            methods: {
                IsCompatibleKey: function (key) {
                    if (key == null) {
                        System.ThrowHelper.ThrowArgumentNullException(System.ExceptionArgument.key);
                    }
                    return (Bridge.is(key, TKey));
                }
            }
        },
        fields: {
            buckets: null,
            simpleBuckets: null,
            entries: null,
            count: 0,
            version: 0,
            freeList: 0,
            freeCount: 0,
            comparer: null,
            keys: null,
            values: null,
            isSimpleKey: false
        },
        props: {
            Comparer: {
                get: function () {
                    return this.comparer;
                }
            },
            Count: {
                get: function () {
                    return ((this.count - this.freeCount) | 0);
                }
            },
            Keys: {
                get: function () {
                    if (this.keys == null) {
                        this.keys = new (System.Collections.Generic.Dictionary$2.KeyCollection(TKey,TValue))(this);
                    }
                    return this.keys;
                }
            },
            System$Collections$Generic$IDictionary$2$Keys: {
                get: function () {
                    if (this.keys == null) {
                        this.keys = new (System.Collections.Generic.Dictionary$2.KeyCollection(TKey,TValue))(this);
                    }
                    return this.keys;
                }
            },
            System$Collections$Generic$IReadOnlyDictionary$2$Keys: {
                get: function () {
                    if (this.keys == null) {
                        this.keys = new (System.Collections.Generic.Dictionary$2.KeyCollection(TKey,TValue))(this);
                    }
                    return this.keys;
                }
            },
            Values: {
                get: function () {
                    if (this.values == null) {
                        this.values = new (System.Collections.Generic.Dictionary$2.ValueCollection(TKey,TValue))(this);
                    }
                    return this.values;
                }
            },
            System$Collections$Generic$IDictionary$2$Values: {
                get: function () {
                    if (this.values == null) {
                        this.values = new (System.Collections.Generic.Dictionary$2.ValueCollection(TKey,TValue))(this);
                    }
                    return this.values;
                }
            },
            System$Collections$Generic$IReadOnlyDictionary$2$Values: {
                get: function () {
                    if (this.values == null) {
                        this.values = new (System.Collections.Generic.Dictionary$2.ValueCollection(TKey,TValue))(this);
                    }
                    return this.values;
                }
            },
            System$Collections$Generic$ICollection$1$IsReadOnly: {
                get: function () {
                    return false;
                }
            },
            System$Collections$ICollection$IsSynchronized: {
                get: function () {
                    return false;
                }
            },
            System$Collections$ICollection$SyncRoot: {
                get: function () {
                    return null;
                }
            },
            System$Collections$IDictionary$IsFixedSize: {
                get: function () {
                    return false;
                }
            },
            System$Collections$IDictionary$IsReadOnly: {
                get: function () {
                    return false;
                }
            },
            System$Collections$IDictionary$Keys: {
                get: function () {
                    return Bridge.cast(this.Keys, System.Collections.ICollection);
                }
            },
            System$Collections$IDictionary$Values: {
                get: function () {
                    return Bridge.cast(this.Values, System.Collections.ICollection);
                }
            }
        },
        alias: [
            "Count", ["System$Collections$Generic$IReadOnlyCollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$Count", "System$Collections$Generic$IReadOnlyCollection$1$Count"],
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$Count",
            "System$Collections$Generic$IDictionary$2$Keys", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$Keys",
            "System$Collections$Generic$IReadOnlyDictionary$2$Keys", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$Keys",
            "System$Collections$Generic$IDictionary$2$Values", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$Values",
            "System$Collections$Generic$IReadOnlyDictionary$2$Values", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$Values",
            "getItem", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getItem",
            "setItem", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$setItem",
            "getItem", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getItem",
            "setItem", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$setItem",
            "add", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$add",
            "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$add", "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$add",
            "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$contains", "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$contains",
            "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$remove", "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$remove",
            "clear", "System$Collections$IDictionary$clear",
            "clear", "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$clear",
            "containsKey", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$containsKey",
            "containsKey", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$containsKey",
            "System$Collections$Generic$IEnumerable$1$System$Collections$Generic$KeyValuePair$2$GetEnumerator", "System$Collections$Generic$IEnumerable$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$GetEnumerator",
            "remove", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$remove",
            "tryGetValue", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$tryGetValue",
            "tryGetValue", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$tryGetValue",
            "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$IsReadOnly", "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$IsReadOnly",
            "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$copyTo", "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$copyTo"
        ],
        ctors: {
            ctor: function () {
                System.Collections.Generic.Dictionary$2(TKey,TValue).$ctor5.call(this, 0, null);
            },
            $ctor4: function (capacity) {
                System.Collections.Generic.Dictionary$2(TKey,TValue).$ctor5.call(this, capacity, null);
            },
            $ctor3: function (comparer) {
                System.Collections.Generic.Dictionary$2(TKey,TValue).$ctor5.call(this, 0, comparer);
            },
            $ctor5: function (capacity, comparer) {
                this.$initialize();
                this.isSimpleKey = ((Bridge.referenceEquals(TKey, System.String)) || (TKey.$number === true && !Bridge.referenceEquals(TKey, System.Int64) && !Bridge.referenceEquals(TKey, System.UInt64)) || (Bridge.referenceEquals(TKey, System.Char))) && (Bridge.referenceEquals(this.comparer, System.Collections.Generic.EqualityComparer$1(TKey).def));

                if (capacity < 0) {
                    System.ThrowHelper.ThrowArgumentOutOfRangeException$1(System.ExceptionArgument.capacity);
                }
                if (capacity > 0) {
                    this.Initialize(capacity);
                }
                this.comparer = comparer || System.Collections.Generic.EqualityComparer$1(TKey).def;
            },
            $ctor1: function (dictionary) {
                System.Collections.Generic.Dictionary$2(TKey,TValue).$ctor2.call(this, dictionary, null);
            },
            $ctor2: function (dictionary, comparer) {
                var $t;
                System.Collections.Generic.Dictionary$2(TKey,TValue).$ctor5.call(this, dictionary != null ? System.Array.getCount(dictionary, System.Collections.Generic.KeyValuePair$2(TKey,TValue)) : 0, comparer);

                if (dictionary == null) {
                    System.ThrowHelper.ThrowArgumentNullException(System.ExceptionArgument.dictionary);
                }

                $t = Bridge.getEnumerator(dictionary, System.Collections.Generic.KeyValuePair$2(TKey,TValue));
                try {
                    while ($t.moveNext()) {
                        var pair = $t.Current;
                        this.add(pair.key, pair.value);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            }
        },
        methods: {
            getItem: function (key) {
                var i = this.FindEntry(key);
                if (i >= 0) {
                    return this.entries[System.Array.index(i, this.entries)].value;
                }
                throw new System.Collections.Generic.KeyNotFoundException.ctor();
            },
            setItem: function (key, value) {
                this.Insert(key, value, false);
            },
            System$Collections$IDictionary$getItem: function (key) {
                if (System.Collections.Generic.Dictionary$2(TKey,TValue).IsCompatibleKey(key)) {
                    var i = this.FindEntry(Bridge.cast(Bridge.unbox(key, TKey), TKey));
                    if (i >= 0) {
                        return this.entries[System.Array.index(i, this.entries)].value;
                    }
                }
                return null;
            },
            System$Collections$IDictionary$setItem: function (key, value) {
                if (key == null) {
                    System.ThrowHelper.ThrowArgumentNullException(System.ExceptionArgument.key);
                }
                System.ThrowHelper.IfNullAndNullsAreIllegalThenThrow(TValue, value, System.ExceptionArgument.value);

                try {
                    var tempKey = Bridge.cast(Bridge.unbox(key, TKey), TKey);
                    try {
                        this.setItem(tempKey, Bridge.cast(Bridge.unbox(value, TValue), TValue));
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        if (Bridge.is($e1, System.InvalidCastException)) {
                            System.ThrowHelper.ThrowWrongValueTypeArgumentException(System.Object, value, TValue);
                        } else {
                            throw $e1;
                        }
                    }
                } catch ($e2) {
                    $e2 = System.Exception.create($e2);
                    if (Bridge.is($e2, System.InvalidCastException)) {
                        System.ThrowHelper.ThrowWrongKeyTypeArgumentException(System.Object, key, TKey);
                    } else {
                        throw $e2;
                    }
                }
            },
            add: function (key, value) {
                this.Insert(key, value, true);
            },
            System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$add: function (keyValuePair) {
                this.add(keyValuePair.key, keyValuePair.value);
            },
            System$Collections$IDictionary$add: function (key, value) {
                if (key == null) {
                    System.ThrowHelper.ThrowArgumentNullException(System.ExceptionArgument.key);
                }
                System.ThrowHelper.IfNullAndNullsAreIllegalThenThrow(TValue, value, System.ExceptionArgument.value);

                try {
                    var tempKey = Bridge.cast(Bridge.unbox(key, TKey), TKey);

                    try {
                        this.add(tempKey, Bridge.cast(Bridge.unbox(value, TValue), TValue));
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        if (Bridge.is($e1, System.InvalidCastException)) {
                            System.ThrowHelper.ThrowWrongValueTypeArgumentException(System.Object, value, TValue);
                        } else {
                            throw $e1;
                        }
                    }
                } catch ($e2) {
                    $e2 = System.Exception.create($e2);
                    if (Bridge.is($e2, System.InvalidCastException)) {
                        System.ThrowHelper.ThrowWrongKeyTypeArgumentException(System.Object, key, TKey);
                    } else {
                        throw $e2;
                    }
                }
            },
            System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$contains: function (keyValuePair) {
                var i = this.FindEntry(keyValuePair.key);
                if (i >= 0 && System.Collections.Generic.EqualityComparer$1(TValue).def.equals2(this.entries[System.Array.index(i, this.entries)].value, keyValuePair.value)) {
                    return true;
                }
                return false;
            },
            System$Collections$IDictionary$contains: function (key) {
                if (System.Collections.Generic.Dictionary$2(TKey,TValue).IsCompatibleKey(key)) {
                    return this.containsKey(Bridge.cast(Bridge.unbox(key, TKey), TKey));
                }

                return false;
            },
            System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$remove: function (keyValuePair) {
                var i = this.FindEntry(keyValuePair.key);
                if (i >= 0 && System.Collections.Generic.EqualityComparer$1(TValue).def.equals2(this.entries[System.Array.index(i, this.entries)].value, keyValuePair.value)) {
                    this.remove(keyValuePair.key);
                    return true;
                }
                return false;
            },
            remove: function (key) {
                if (key == null) {
                    System.ThrowHelper.ThrowArgumentNullException(System.ExceptionArgument.key);
                }

                if (this.isSimpleKey) {
                    if (this.simpleBuckets != null) {
                        if (this.simpleBuckets.hasOwnProperty(key)) {
                            var i = this.simpleBuckets[key];
                            delete this.simpleBuckets[key];
                            this.entries[System.Array.index(i, this.entries)].hashCode = -1;
                            this.entries[System.Array.index(i, this.entries)].next = this.freeList;
                            this.entries[System.Array.index(i, this.entries)].key = Bridge.getDefaultValue(TKey);
                            this.entries[System.Array.index(i, this.entries)].value = Bridge.getDefaultValue(TValue);
                            this.freeList = i;
                            this.freeCount = (this.freeCount + 1) | 0;
                            this.version = (this.version + 1) | 0;
                            return true;
                        }
                    }
                } else if (this.buckets != null) {
                    var hashCode = this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(TKey) + "$getHashCode2", "System$Collections$Generic$IEqualityComparer$1$getHashCode2")](key) & 2147483647;
                    var bucket = hashCode % this.buckets.length;
                    var last = -1;
                    for (var i1 = this.buckets[System.Array.index(bucket, this.buckets)]; i1 >= 0; last = i1, i1 = this.entries[System.Array.index(i1, this.entries)].next) {
                        if (this.entries[System.Array.index(i1, this.entries)].hashCode === hashCode && this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(TKey) + "$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2")](this.entries[System.Array.index(i1, this.entries)].key, key)) {
                            if (last < 0) {
                                this.buckets[System.Array.index(bucket, this.buckets)] = this.entries[System.Array.index(i1, this.entries)].next;
                            } else {
                                this.entries[System.Array.index(last, this.entries)].next = this.entries[System.Array.index(i1, this.entries)].next;
                            }
                            this.entries[System.Array.index(i1, this.entries)].hashCode = -1;
                            this.entries[System.Array.index(i1, this.entries)].next = this.freeList;
                            this.entries[System.Array.index(i1, this.entries)].key = Bridge.getDefaultValue(TKey);
                            this.entries[System.Array.index(i1, this.entries)].value = Bridge.getDefaultValue(TValue);
                            this.freeList = i1;
                            this.freeCount = (this.freeCount + 1) | 0;
                            this.version = (this.version + 1) | 0;
                            return true;
                        }
                    }
                }
                return false;
            },
            System$Collections$IDictionary$remove: function (key) {
                if (System.Collections.Generic.Dictionary$2(TKey,TValue).IsCompatibleKey(key)) {
                    this.remove(Bridge.cast(Bridge.unbox(key, TKey), TKey));
                }
            },
            clear: function () {
                if (this.count > 0) {
                    for (var i = 0; i < this.buckets.length; i = (i + 1) | 0) {
                        this.buckets[System.Array.index(i, this.buckets)] = -1;
                    }
                    if (this.isSimpleKey) {
                        this.simpleBuckets = { };
                    }
                    System.Array.fill(this.entries, System.Collections.Generic.Dictionary$2.Entry(TKey,TValue).getDefaultValue, 0, this.count);
                    this.freeList = -1;
                    this.count = 0;
                    this.freeCount = 0;
                    this.version = (this.version + 1) | 0;
                }
            },
            containsKey: function (key) {
                return this.FindEntry(key) >= 0;
            },
            ContainsValue: function (value) {
                if (value == null) {
                    for (var i = 0; i < this.count; i = (i + 1) | 0) {
                        if (this.entries[System.Array.index(i, this.entries)].hashCode >= 0 && this.entries[System.Array.index(i, this.entries)].value == null) {
                            return true;
                        }
                    }
                } else {
                    var c = System.Collections.Generic.EqualityComparer$1(TValue).def;
                    for (var i1 = 0; i1 < this.count; i1 = (i1 + 1) | 0) {
                        if (this.entries[System.Array.index(i1, this.entries)].hashCode >= 0 && c.equals2(this.entries[System.Array.index(i1, this.entries)].value, value)) {
                            return true;
                        }
                    }
                }
                return false;
            },
            CopyTo: function (array, index) {
                if (array == null) {
                    System.ThrowHelper.ThrowArgumentNullException(System.ExceptionArgument.array);
                }

                if (index < 0 || index > array.length) {
                    System.ThrowHelper.ThrowArgumentOutOfRangeException$2(System.ExceptionArgument.index, System.ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);
                }

                if (((array.length - index) | 0) < this.Count) {
                    System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Arg_ArrayPlusOffTooSmall);
                }

                var count = this.count;
                var entries = this.entries;
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    if (entries[System.Array.index(i, entries)].hashCode >= 0) {
                        array[System.Array.index(Bridge.identity(index, (index = (index + 1) | 0)), array)] = new (System.Collections.Generic.KeyValuePair$2(TKey,TValue)).$ctor1(entries[System.Array.index(i, entries)].key, entries[System.Array.index(i, entries)].value);
                    }
                }
            },
            System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$copyTo: function (array, index) {
                this.CopyTo(array, index);
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

                if (index < 0 || index > array.length) {
                    System.ThrowHelper.ThrowArgumentOutOfRangeException$2(System.ExceptionArgument.index, System.ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);
                }

                if (((array.length - index) | 0) < this.Count) {
                    System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Arg_ArrayPlusOffTooSmall);
                }

                var pairs = Bridge.as(array, System.Array.type(System.Collections.Generic.KeyValuePair$2(TKey,TValue)));
                if (pairs != null) {
                    this.CopyTo(pairs, index);
                } else if (Bridge.is(array, System.Array.type(System.Collections.DictionaryEntry))) {
                    var dictEntryArray = Bridge.as(array, System.Array.type(System.Collections.DictionaryEntry));
                    var entries = this.entries;
                    for (var i = 0; i < this.count; i = (i + 1) | 0) {
                        if (entries[System.Array.index(i, entries)].hashCode >= 0) {
                            dictEntryArray[System.Array.index(Bridge.identity(index, (index = (index + 1) | 0)), dictEntryArray)] = new System.Collections.DictionaryEntry.$ctor1(entries[System.Array.index(i, entries)].key, entries[System.Array.index(i, entries)].value);
                        }
                    }
                } else {
                    var objects = Bridge.as(array, System.Array.type(System.Object));
                    if (objects == null) {
                        System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Argument_InvalidArrayType);
                    }

                    try {
                        var count = this.count;
                        var entries1 = this.entries;
                        for (var i1 = 0; i1 < count; i1 = (i1 + 1) | 0) {
                            if (entries1[System.Array.index(i1, entries1)].hashCode >= 0) {
                                objects[System.Array.index(Bridge.identity(index, (index = (index + 1) | 0)), objects)] = new (System.Collections.Generic.KeyValuePair$2(TKey,TValue)).$ctor1(entries1[System.Array.index(i1, entries1)].key, entries1[System.Array.index(i1, entries1)].value);
                            }
                        }
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        if (Bridge.is($e1, System.ArrayTypeMismatchException)) {
                            System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Argument_InvalidArrayType);
                        } else {
                            throw $e1;
                        }
                    }
                }
            },
            GetEnumerator: function () {
                return new (System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue)).$ctor1(this, System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue).KeyValuePair);
            },
            System$Collections$Generic$IEnumerable$1$System$Collections$Generic$KeyValuePair$2$GetEnumerator: function () {
                return new (System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue)).$ctor1(this, System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue).KeyValuePair).$clone();
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                return new (System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue)).$ctor1(this, System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue).KeyValuePair).$clone();
            },
            System$Collections$IDictionary$GetEnumerator: function () {
                return new (System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue)).$ctor1(this, System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue).DictEntry).$clone();
            },
            FindEntry: function (key) {
                if (key == null) {
                    System.ThrowHelper.ThrowArgumentNullException(System.ExceptionArgument.key);
                }

                if (this.isSimpleKey) {
                    if (this.simpleBuckets != null && this.simpleBuckets.hasOwnProperty(key)) {
                        return this.simpleBuckets[key];
                    }
                } else if (this.buckets != null) {
                    var hashCode = this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(TKey) + "$getHashCode2", "System$Collections$Generic$IEqualityComparer$1$getHashCode2")](key) & 2147483647;
                    for (var i = this.buckets[System.Array.index(hashCode % this.buckets.length, this.buckets)]; i >= 0; i = this.entries[System.Array.index(i, this.entries)].next) {
                        if (this.entries[System.Array.index(i, this.entries)].hashCode === hashCode && this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(TKey) + "$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2")](this.entries[System.Array.index(i, this.entries)].key, key)) {
                            return i;
                        }
                    }
                }
                return -1;
            },
            Initialize: function (capacity) {
                var size = System.Collections.HashHelpers.GetPrime(capacity);
                this.buckets = System.Array.init(size, 0, System.Int32);
                for (var i = 0; i < this.buckets.length; i = (i + 1) | 0) {
                    this.buckets[System.Array.index(i, this.buckets)] = -1;
                }
                this.entries = System.Array.init(size, function (){
                    return new (System.Collections.Generic.Dictionary$2.Entry(TKey,TValue))();
                }, System.Collections.Generic.Dictionary$2.Entry(TKey,TValue));
                this.freeList = -1;

                if (this.isSimpleKey) {
                    this.simpleBuckets = { };
                }
            },
            Insert: function (key, value, add) {

                if (key == null) {
                    System.ThrowHelper.ThrowArgumentNullException(System.ExceptionArgument.key);
                }

                if (this.buckets == null) {
                    this.Initialize(0);
                }

                if (this.isSimpleKey) {
                    if (this.simpleBuckets.hasOwnProperty(key)) {
                        if (add) {
                            System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Argument_AddingDuplicate);
                        }

                        this.entries[System.Array.index(this.simpleBuckets[key], this.entries)].value = value;
                        this.version = (this.version + 1) | 0;
                        return;
                    }

                    var simpleIndex;
                    if (this.freeCount > 0) {
                        simpleIndex = this.freeList;
                        this.freeList = this.entries[System.Array.index(simpleIndex, this.entries)].next;
                        this.freeCount = (this.freeCount - 1) | 0;
                    } else {
                        if (this.count === this.entries.length) {
                            this.Resize();
                        }
                        simpleIndex = this.count;
                        this.count = (this.count + 1) | 0;
                    }

                    this.entries[System.Array.index(simpleIndex, this.entries)].hashCode = 1;
                    this.entries[System.Array.index(simpleIndex, this.entries)].next = -1;
                    this.entries[System.Array.index(simpleIndex, this.entries)].key = key;
                    this.entries[System.Array.index(simpleIndex, this.entries)].value = value;

                    this.simpleBuckets[key] = simpleIndex;
                    this.version = (this.version + 1) | 0;

                    return;
                }

                var hashCode = this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(TKey) + "$getHashCode2", "System$Collections$Generic$IEqualityComparer$1$getHashCode2")](key) & 2147483647;
                var targetBucket = hashCode % this.buckets.length;

                for (var i = this.buckets[System.Array.index(targetBucket, this.buckets)]; i >= 0; i = this.entries[System.Array.index(i, this.entries)].next) {
                    if (this.entries[System.Array.index(i, this.entries)].hashCode === hashCode && this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(TKey) + "$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2")](this.entries[System.Array.index(i, this.entries)].key, key)) {
                        if (add) {
                            System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Argument_AddingDuplicate);
                        }
                        this.entries[System.Array.index(i, this.entries)].value = value;
                        this.version = (this.version + 1) | 0;
                        return;
                    }
                }
                var index;
                if (this.freeCount > 0) {
                    index = this.freeList;
                    this.freeList = this.entries[System.Array.index(index, this.entries)].next;
                    this.freeCount = (this.freeCount - 1) | 0;
                } else {
                    if (this.count === this.entries.length) {
                        this.Resize();
                        targetBucket = hashCode % this.buckets.length;
                    }
                    index = this.count;
                    this.count = (this.count + 1) | 0;
                }

                this.entries[System.Array.index(index, this.entries)].hashCode = hashCode;
                this.entries[System.Array.index(index, this.entries)].next = this.buckets[System.Array.index(targetBucket, this.buckets)];
                this.entries[System.Array.index(index, this.entries)].key = key;
                this.entries[System.Array.index(index, this.entries)].value = value;
                this.buckets[System.Array.index(targetBucket, this.buckets)] = index;
                this.version = (this.version + 1) | 0;
            },
            Resize: function () {
                this.Resize$1(System.Collections.HashHelpers.ExpandPrime(this.count), false);
            },
            Resize$1: function (newSize, forceNewHashCodes) {
                var newBuckets = System.Array.init(newSize, 0, System.Int32);
                for (var i = 0; i < newBuckets.length; i = (i + 1) | 0) {
                    newBuckets[System.Array.index(i, newBuckets)] = -1;
                }
                if (this.isSimpleKey) {
                    this.simpleBuckets = { };
                }
                var newEntries = System.Array.init(newSize, function (){
                    return new (System.Collections.Generic.Dictionary$2.Entry(TKey,TValue))();
                }, System.Collections.Generic.Dictionary$2.Entry(TKey,TValue));
                System.Array.copy(this.entries, 0, newEntries, 0, this.count);
                if (forceNewHashCodes) {
                    for (var i1 = 0; i1 < this.count; i1 = (i1 + 1) | 0) {
                        if (newEntries[System.Array.index(i1, newEntries)].hashCode !== -1) {
                            newEntries[System.Array.index(i1, newEntries)].hashCode = (this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(TKey) + "$getHashCode2", "System$Collections$Generic$IEqualityComparer$1$getHashCode2")](newEntries[System.Array.index(i1, newEntries)].key) & 2147483647);
                        }
                    }
                }
                for (var i2 = 0; i2 < this.count; i2 = (i2 + 1) | 0) {
                    if (newEntries[System.Array.index(i2, newEntries)].hashCode >= 0) {
                        if (this.isSimpleKey) {
                            newEntries[System.Array.index(i2, newEntries)].next = -1;
                            this.simpleBuckets[newEntries[System.Array.index(i2, newEntries)].key] = i2;
                        } else {
                            var bucket = newEntries[System.Array.index(i2, newEntries)].hashCode % newSize;
                            newEntries[System.Array.index(i2, newEntries)].next = newBuckets[System.Array.index(bucket, newBuckets)];
                            newBuckets[System.Array.index(bucket, newBuckets)] = i2;
                        }
                    }
                }
                this.buckets = newBuckets;
                this.entries = newEntries;
            },
            tryGetValue: function (key, value) {
                var i = this.FindEntry(key);
                if (i >= 0) {
                    value.v = this.entries[System.Array.index(i, this.entries)].value;
                    return true;
                }
                value.v = Bridge.getDefaultValue(TValue);
                return false;
            },
            GetValueOrDefault: function (key) {
                var i = this.FindEntry(key);
                if (i >= 0) {
                    return this.entries[System.Array.index(i, this.entries)].value;
                }
                return Bridge.getDefaultValue(TValue);
            }
        }
    }; });
