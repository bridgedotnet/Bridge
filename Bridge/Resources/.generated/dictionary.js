    Bridge.define("System.Collections.DictionaryEntry", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new System.Collections.DictionaryEntry(); }
            }
        },
        fields: {
            _key: null,
            _value: null
        },
        props: {
            Key: {
                get: function () {
                    return this._key;
                },
                set: function (value) {
                    this._key = value;
                }
            },
            Value: {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                }
            }
        },
        ctors: {
            $ctor1: function (key, value) {
                this.$initialize();
                this._key = key;
                this._value = value;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([5445305491, this._key, this._value]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Collections.DictionaryEntry)) {
                    return false;
                }
                return Bridge.equals(this._key, o._key) && Bridge.equals(this._value, o._value);
            },
            $clone: function (to) {
                var s = to || new System.Collections.DictionaryEntry();
                s._key = this._key;
                s._value = this._value;
                return s;
            }
        }
    });

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
                isCompatibleKey: function (key) {
                    if (key == null) {
                        throw new System.ArgumentNullException();
                    }
                    return (Bridge.is(key, TKey));
                }
            }
        },
        fields: {
            buckets: null,
            entries: null,
            count: 0,
            version: 0,
            freeList: 0,
            freeCount: 0,
            comparer: null,
            keys: null,
            values: null
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
            "Count", "System$Collections$Generic$IReadOnlyCollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$Count",
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
            "System$Collections$Generic$ICollection$1$add", "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$add",
            "System$Collections$Generic$ICollection$1$contains", "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$contains",
            "System$Collections$Generic$ICollection$1$remove", "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$remove",
            "clear", "System$Collections$IDictionary$clear",
            "clear", "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$clear",
            "containsKey", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$containsKey",
            "containsKey", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$containsKey",
            "System$Collections$Generic$IEnumerable$1$getEnumerator", "System$Collections$Generic$IEnumerable$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getEnumerator",
            "remove", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$remove",
            "tryGetValue", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$tryGetValue",
            "tryGetValue", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$tryGetValue",
            "System$Collections$Generic$ICollection$1$IsReadOnly", "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$IsReadOnly",
            "System$Collections$Generic$ICollection$1$copyTo", "System$Collections$Generic$ICollection$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$copyTo"
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
                if (capacity < 0) {
                    throw new System.ArgumentOutOfRangeException();
                }
                if (capacity > 0) {
                    this.initialize(capacity);
                }
                this.comparer = comparer || System.Collections.Generic.EqualityComparer$1(TKey).def;

            },
            $ctor1: function (dictionary) {
                System.Collections.Generic.Dictionary$2(TKey,TValue).$ctor2.call(this, dictionary, null);
            },
            $ctor2: function (dictionary, comparer) {
                System.Collections.Generic.Dictionary$2(TKey,TValue).$ctor5.call(this, dictionary != null ? System.Array.getCount(dictionary, System.Collections.Generic.KeyValuePair$2(TKey,TValue)) : 0, comparer);
                var $t;

                if (dictionary == null) {
                    throw new System.ArgumentNullException();
                }

                $t = Bridge.getEnumerator(dictionary, System.Collections.Generic.KeyValuePair$2(TKey,TValue));
                try {
                    while ($t.moveNext()) {
                        var pair = $t.Current;
                        this.add(pair.key, pair.value);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }}
    },
    methods: {
        getItem: function (key) {
            var i = this.findEntry(key);
            if (i >= 0) {
                return this.entries[System.Array.index(i, this.entries)].value;
            }
            throw new System.Collections.Generic.KeyNotFoundException();
        },
        setItem: function (key, value) {
            this.insert(key, value, false);
        },
        System$Collections$IDictionary$getItem: function (key) {
            if (System.Collections.Generic.Dictionary$2(TKey,TValue).isCompatibleKey(key)) {
                var i = this.findEntry(Bridge.cast(Bridge.unbox(key), TKey));
                if (i >= 0) {
                    return this.entries[System.Array.index(i, this.entries)].value;
                }
            }
            return null;
        },
        System$Collections$IDictionary$setItem: function (key, value) {
            if (key == null) {
                throw new System.ArgumentNullException();
            }
            if (value == null) {
                throw new System.ArgumentNullException();
            }

            try {
                var tempKey = Bridge.cast(Bridge.unbox(key), TKey);
                try {
                    this.setItem(tempKey, Bridge.cast(Bridge.unbox(value), TValue));
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.InvalidCastException)) {
                        throw new System.Exception();
                    } else {
                        throw $e1;
                    }
                }
            }
            catch ($e2) {
                $e2 = System.Exception.create($e2);
                if (Bridge.is($e2, System.InvalidCastException)) {
                    throw new System.Exception();
                } else {
                    throw $e2;
                }
            }
        },
        add: function (key, value) {
            this.insert(key, value, true);
        },
        System$Collections$Generic$ICollection$1$add: function (keyValuePair) {
            this.add(keyValuePair.key, keyValuePair.value);
        },
        System$Collections$IDictionary$add: function (key, value) {
            if (key == null) {
                throw new System.ArgumentNullException();
            }
            if (value == null) {
                throw new System.ArgumentNullException();
            }

            try {
                var tempKey = Bridge.cast(Bridge.unbox(key), TKey);

                try {
                    this.add(tempKey, Bridge.cast(Bridge.unbox(value), TValue));
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.InvalidCastException)) {
                        throw new System.ArgumentException();
                    } else {
                        throw $e1;
                    }
                }
            }
            catch ($e2) {
                $e2 = System.Exception.create($e2);
                if (Bridge.is($e2, System.InvalidCastException)) {
                    throw new System.ArgumentException();
                } else {
                    throw $e2;
                }
            }
        },
        System$Collections$Generic$ICollection$1$contains: function (keyValuePair) {
            var i = this.findEntry(keyValuePair.key);
            if (i >= 0 && System.Collections.Generic.EqualityComparer$1(TValue).def.equals2(this.entries[System.Array.index(i, this.entries)].value, keyValuePair.value)) {
                return true;
            }
            return false;
        },
        System$Collections$IDictionary$contains: function (key) {
            if (System.Collections.Generic.Dictionary$2(TKey,TValue).isCompatibleKey(key)) {
                return this.containsKey(Bridge.cast(Bridge.unbox(key), TKey));
            }

            return false;
        },
        System$Collections$Generic$ICollection$1$remove: function (keyValuePair) {
            var i = this.findEntry(keyValuePair.key);
            if (i >= 0 && System.Collections.Generic.EqualityComparer$1(TValue).def.equals2(this.entries[System.Array.index(i, this.entries)].value, keyValuePair.value)) {
                this.remove(keyValuePair.key);
                return true;
            }
            return false;
        },
        remove: function (key) {
            if (key == null) {
                throw new System.ArgumentNullException();
            }

            if (this.buckets != null) {
                var hashCode = this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(TKey) + "$getHashCode2", "System$Collections$Generic$IEqualityComparer$1$getHashCode2")](key) & 2147483647;
                var bucket = hashCode % this.buckets.length;
                var last = -1;
                for (var i = this.buckets[System.Array.index(bucket, this.buckets)]; i >= 0; last = i, i = this.entries[System.Array.index(i, this.entries)].next) {
                    if (this.entries[System.Array.index(i, this.entries)].hashCode === hashCode && this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(TKey) + "$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2")](this.entries[System.Array.index(i, this.entries)].key, key)) {
                        if (last < 0) {
                            this.buckets[System.Array.index(bucket, this.buckets)] = this.entries[System.Array.index(i, this.entries)].next;
                        } else {
                            this.entries[System.Array.index(last, this.entries)].next = this.entries[System.Array.index(i, this.entries)].next;
                        }
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
            }
            return false;
        },
        System$Collections$IDictionary$remove: function (key) {
            if (System.Collections.Generic.Dictionary$2(TKey,TValue).isCompatibleKey(key)) {
                this.remove(Bridge.cast(Bridge.unbox(key), TKey));
            }
        },
        clear: function () {
            if (this.count > 0) {
                for (var i = 0; i < this.buckets.length; i = (i + 1) | 0) {
                    this.buckets[System.Array.index(i, this.buckets)] = -1;
                }
                System.Array.fill(this.entries, System.Collections.Generic.Dictionary$2.Entry(TKey,TValue).getDefaultValue, 0, this.count);
                this.freeList = -1;
                this.count = 0;
                this.freeCount = 0;
                this.version = (this.version + 1) | 0;
            }
        },
        containsKey: function (key) {
            return this.findEntry(key) >= 0;
        },
        containsValue: function (value) {
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
        copyTo: function (array, index) {
            if (array == null) {
                throw new System.ArgumentNullException();
            }

            if (index < 0 || index > array.length) {
                throw new System.ArgumentOutOfRangeException();
            }

            if (((array.length - index) | 0) < this.Count) {
                throw new System.ArgumentException();
            }

            var count = this.count;
            var entries = this.entries;
            for (var i = 0; i < count; i = (i + 1) | 0) {
                if (entries[System.Array.index(i, entries)].hashCode >= 0) {
                    array[System.Array.index(Bridge.identity(index, (index = (index + 1) | 0)), array)] = new (System.Collections.Generic.KeyValuePair$2(TKey,TValue))(entries[System.Array.index(i, entries)].key, entries[System.Array.index(i, entries)].value);
                }
            }
        },
        System$Collections$Generic$ICollection$1$copyTo: function (array, index) {
            this.copyTo(array, index);
        },
        System$Collections$ICollection$copyTo: function (array, index) {
            if (array == null) {
                throw new System.ArgumentNullException();
            }

            if (System.Array.getRank(array) !== 1) {
                throw new System.ArgumentException();
            }

            if (System.Array.getLower(array, 0) !== 0) {
                throw new System.ArgumentException();
            }

            if (index < 0 || index > array.length) {
                throw new System.ArgumentOutOfRangeException();
            }

            if (((array.length - index) | 0) < this.Count) {
                throw new System.ArgumentException();
            }

            var pairs = Bridge.as(array, System.Array.type(System.Collections.Generic.KeyValuePair$2(TKey,TValue)));
            if (pairs != null) {
                this.copyTo(pairs, index);
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
                    throw new System.ArgumentException();
                }

                var count = this.count;
                var entries1 = this.entries;
                for (var i1 = 0; i1 < count; i1 = (i1 + 1) | 0) {
                    if (entries1[System.Array.index(i1, entries1)].hashCode >= 0) {
                        objects[System.Array.index(Bridge.identity(index, (index = (index + 1) | 0)), objects)] = new (System.Collections.Generic.KeyValuePair$2(TKey,TValue))(entries1[System.Array.index(i1, entries1)].key, entries1[System.Array.index(i1, entries1)].value);
                    }
                }
            }
        },
        getEnumerator: function () {
            return new (System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue)).$ctor1(this, System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue).KeyValuePair);
        },
        System$Collections$Generic$IEnumerable$1$getEnumerator: function () {
            return new (System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue)).$ctor1(this, System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue).KeyValuePair).$clone();
        },
        System$Collections$IEnumerable$getEnumerator: function () {
            return new (System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue)).$ctor1(this, System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue).KeyValuePair).$clone();
        },
        System$Collections$IDictionary$getEnumerator: function () {
            return new (System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue)).$ctor1(this, System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue).DictEntry).$clone();
        },
        findEntry: function (key) {
            if (key == null) {
                throw new System.ArgumentNullException();
            }

            if (this.buckets != null) {
                var hashCode = this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(TKey) + "$getHashCode2", "System$Collections$Generic$IEqualityComparer$1$getHashCode2")](key) & 2147483647;
                for (var i = this.buckets[System.Array.index(hashCode % this.buckets.length, this.buckets)]; i >= 0; i = this.entries[System.Array.index(i, this.entries)].next) {
                    if (this.entries[System.Array.index(i, this.entries)].hashCode === hashCode && this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(TKey) + "$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2")](this.entries[System.Array.index(i, this.entries)].key, key)) {
                        return i;
                    }
                }
            }
            return -1;
        },
        initialize: function (capacity) {
            var size = System.Collections.HashHelpers.getPrime(capacity);
            this.buckets = System.Array.init(size, 0, System.Int32);
            for (var i = 0; i < this.buckets.length; i = (i + 1) | 0) {
                this.buckets[System.Array.index(i, this.buckets)] = -1;
            }
            this.entries = System.Array.init(size, function (){
                return new (System.Collections.Generic.Dictionary$2.Entry(TKey,TValue))();
            }, System.Collections.Generic.Dictionary$2.Entry(TKey,TValue));
            this.freeList = -1;
        },
        insert: function (key, value, add) {

            if (key == null) {
                throw new System.ArgumentNullException();
            }

            if (this.buckets == null) {
                this.initialize(0);
            }
            var hashCode = this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(TKey) + "$getHashCode2", "System$Collections$Generic$IEqualityComparer$1$getHashCode2")](key) & 2147483647;
            var targetBucket = hashCode % this.buckets.length;


            for (var i = this.buckets[System.Array.index(targetBucket, this.buckets)]; i >= 0; i = this.entries[System.Array.index(i, this.entries)].next) {
                if (this.entries[System.Array.index(i, this.entries)].hashCode === hashCode && this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(TKey) + "$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2")](this.entries[System.Array.index(i, this.entries)].key, key)) {
                    if (add) {
                        throw new System.ArgumentException();
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
                    this.resize();
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
        resize: function () {
            this.resize$1(System.Collections.HashHelpers.expandPrime(this.count), false);
        },
        resize$1: function (newSize, forceNewHashCodes) {
            System.Diagnostics.Contracts.Contract.assert(4, function () { return newSize >= this.entries.length; });
            var newBuckets = System.Array.init(newSize, 0, System.Int32);
            for (var i = 0; i < newBuckets.length; i = (i + 1) | 0) {
                newBuckets[System.Array.index(i, newBuckets)] = -1;
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
                    var bucket = newEntries[System.Array.index(i2, newEntries)].hashCode % newSize;
                    newEntries[System.Array.index(i2, newEntries)].next = newBuckets[System.Array.index(bucket, newBuckets)];
                    newBuckets[System.Array.index(bucket, newBuckets)] = i2;
                }
            }
            this.buckets = newBuckets;
            this.entries = newEntries;
        },
        tryGetValue: function (key, value) {
            var i = this.findEntry(key);
            if (i >= 0) {
                value.v = this.entries[System.Array.index(i, this.entries)].value;
                return true;
            }
            value.v = Bridge.getDefaultValue(TValue);
            return false;
        },
        getValueOrDefault: function (key) {
            var i = this.findEntry(key);
            if (i >= 0) {
                return this.entries[System.Array.index(i, this.entries)].value;
            }
            return Bridge.getDefaultValue(TValue);
        }
    }
    }; });

    Bridge.define("System.Collections.Generic.Dictionary$2.Entry", function (TKey, TValue) { return {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new (System.Collections.Generic.Dictionary$2.Entry(TKey,TValue))(); }
            }
        },
        fields: {
            hashCode: 0,
            next: 0,
            key: Bridge.getDefaultValue(TKey),
            value: Bridge.getDefaultValue(TValue)
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([1920233150, this.hashCode, this.next, this.key, this.value]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Collections.Generic.Dictionary$2.Entry(TKey,TValue))) {
                    return false;
                }
                return Bridge.equals(this.hashCode, o.hashCode) && Bridge.equals(this.next, o.next) && Bridge.equals(this.key, o.key) && Bridge.equals(this.value, o.value);
            },
            $clone: function (to) {
                var s = to || new (System.Collections.Generic.Dictionary$2.Entry(TKey,TValue))();
                s.hashCode = this.hashCode;
                s.next = this.next;
                s.key = this.key;
                s.value = this.value;
                return s;
            }
        }
    }; });

    Bridge.define("System.Collections.IDictionaryEnumerator", {
        inherits: [System.Collections.IEnumerator],
        $kind: "interface"
    });

    Bridge.define("System.Collections.Generic.Dictionary$2.KeyCollection", function (TKey, TValue) { return {
        inherits: [System.Collections.Generic.ICollection$1(TKey),System.Collections.ICollection,System.Collections.Generic.IReadOnlyCollection$1(TKey)],
        fields: {
            dictionary: null
        },
        props: {
            Count: {
                get: function () {
                    return this.dictionary.Count;
                }
            },
            System$Collections$Generic$ICollection$1$IsReadOnly: {
                get: function () {
                    return true;
                }
            }
        },
        alias: [
            "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$copyTo",
            "Count", "System$Collections$Generic$IReadOnlyCollection$1$" + Bridge.getTypeAlias(TKey) + "$Count",
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$Count",
            "System$Collections$Generic$ICollection$1$IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$IsReadOnly",
            "System$Collections$Generic$ICollection$1$add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$add",
            "System$Collections$Generic$ICollection$1$clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$clear",
            "System$Collections$Generic$ICollection$1$contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$contains",
            "System$Collections$Generic$ICollection$1$remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$remove",
            "System$Collections$Generic$IEnumerable$1$getEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(TKey) + "$getEnumerator"
        ],
        ctors: {
            ctor: function (dictionary) {
                this.$initialize();
                if (dictionary == null) {
                    throw new System.ArgumentNullException();
                }
                this.dictionary = dictionary;
            }
        },
        methods: {
            getEnumerator: function () {
                return new (System.Collections.Generic.Dictionary$2.KeyCollection.Enumerator(TKey,TValue)).$ctor1(this.dictionary);
            },
            System$Collections$Generic$IEnumerable$1$getEnumerator: function () {
                return new (System.Collections.Generic.Dictionary$2.KeyCollection.Enumerator(TKey,TValue)).$ctor1(this.dictionary).$clone();
            },
            System$Collections$IEnumerable$getEnumerator: function () {
                return new (System.Collections.Generic.Dictionary$2.KeyCollection.Enumerator(TKey,TValue)).$ctor1(this.dictionary).$clone();
            },
            copyTo: function (array, index) {
                if (array == null) {
                    throw new System.ArgumentNullException();
                }

                if (index < 0 || index > array.length) {
                    throw new System.ArgumentOutOfRangeException();
                }

                if (((array.length - index) | 0) < this.dictionary.Count) {
                    throw new System.ArgumentException();
                }

                var count = this.dictionary.count;
                var entries = this.dictionary.entries;
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    if (entries[System.Array.index(i, entries)].hashCode >= 0) {
                        array[System.Array.index(Bridge.identity(index, (index = (index + 1) | 0)), array)] = entries[System.Array.index(i, entries)].key;
                    }
                }
            },
            System$Collections$ICollection$copyTo: function (array, index) {
                if (array == null) {
                    throw new System.ArgumentNullException();
                }

                if (System.Array.getRank(array) !== 1) {
                    throw new System.ArgumentException();
                }

                if (System.Array.getLower(array, 0) !== 0) {
                    throw new System.ArgumentException();
                }

                if (index < 0 || index > array.length) {
                    throw new System.ArgumentOutOfRangeException();
                }

                if (((array.length - index) | 0) < this.dictionary.Count) {
                    throw new System.ArgumentException();
                }

                var keys = Bridge.as(array, System.Array.type(TKey));
                if (keys != null) {
                    this.copyTo(keys, index);
                } else {
                    var objects = Bridge.as(array, System.Array.type(System.Object));
                    if (objects == null) {
                        throw new System.ArgumentException();
                    }

                    var count = this.dictionary.count;
                    var entries = this.dictionary.entries;
                    for (var i = 0; i < count; i = (i + 1) | 0) {
                        if (entries[System.Array.index(i, entries)].hashCode >= 0) {
                            objects[System.Array.index(Bridge.identity(index, (index = (index + 1) | 0)), objects)] = entries[System.Array.index(i, entries)].key;
                        }
                    }
                }
            },
            System$Collections$Generic$ICollection$1$add: function (item) {
                throw new System.NotSupportedException();
            },
            System$Collections$Generic$ICollection$1$clear: function () {
                throw new System.NotSupportedException();
            },
            System$Collections$Generic$ICollection$1$contains: function (item) {
                return this.dictionary.containsKey(item);
            },
            System$Collections$Generic$ICollection$1$remove: function (item) {
                throw new System.NotSupportedException();
            }
        }
    }; });

    Bridge.define("System.Collections.Generic.Dictionary$2.KeyCollection.Enumerator", function (TKey, TValue) { return {
        inherits: [System.Collections.Generic.IEnumerator$1(TKey),System.Collections.IEnumerator],
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new (System.Collections.Generic.Dictionary$2.KeyCollection.Enumerator(TKey,TValue))(); }
            }
        },
        fields: {
            dictionary: null,
            index: 0,
            version: 0,
            currentKey: Bridge.getDefaultValue(TKey)
        },
        props: {
            Current: {
                get: function () {
                    return this.currentKey;
                }
            },
            System$Collections$IEnumerator$Current: {
                get: function () {
                    if (this.index === 0 || (this.index === ((this.dictionary.count + 1) | 0))) {
                        throw new System.InvalidOperationException();
                    }

                    return this.currentKey;
                }
            }
        },
        alias: [
            "dispose", "System$IDisposable$dispose",
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "Current", ["System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(TKey) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1"]
        ],
        ctors: {
            $ctor1: function (dictionary) {
                this.$initialize();
                this.dictionary = dictionary;
                this.version = dictionary.version;
                this.index = 0;
                this.currentKey = Bridge.getDefaultValue(TKey);
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            dispose: function () { },
            moveNext: function () {
                var $t, $t1;
                if (this.version !== this.dictionary.version) {
                    throw new System.InvalidOperationException();
                }

                while ((this.index >>> 0) < ((this.dictionary.count) >>> 0)) {
                    if (($t = this.dictionary.entries)[System.Array.index(this.index, $t)].hashCode >= 0) {
                        this.currentKey = ($t1 = this.dictionary.entries)[System.Array.index(this.index, $t1)].key;
                        this.index = (this.index + 1) | 0;
                        return true;
                    }
                    this.index = (this.index + 1) | 0;
                }

                this.index = (this.dictionary.count + 1) | 0;
                this.currentKey = Bridge.getDefaultValue(TKey);
                return false;
            },
            System$Collections$IEnumerator$reset: function () {
                if (this.version !== this.dictionary.version) {
                    throw new System.InvalidOperationException();
                }

                this.index = 0;
                this.currentKey = Bridge.getDefaultValue(TKey);
            },
            getHashCode: function () {
                var h = Bridge.addHash([3788985113, this.dictionary, this.index, this.version, this.currentKey]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Collections.Generic.Dictionary$2.KeyCollection.Enumerator(TKey,TValue))) {
                    return false;
                }
                return Bridge.equals(this.dictionary, o.dictionary) && Bridge.equals(this.index, o.index) && Bridge.equals(this.version, o.version) && Bridge.equals(this.currentKey, o.currentKey);
            },
            $clone: function (to) {
                var s = to || new (System.Collections.Generic.Dictionary$2.KeyCollection.Enumerator(TKey,TValue))();
                s.dictionary = this.dictionary;
                s.index = this.index;
                s.version = this.version;
                s.currentKey = this.currentKey;
                return s;
            }
        }
    }; });

    Bridge.define("System.Collections.Generic.Dictionary$2.ValueCollection", function (TKey, TValue) { return {
        inherits: [System.Collections.Generic.ICollection$1(TValue),System.Collections.ICollection,System.Collections.Generic.IReadOnlyCollection$1(TValue)],
        fields: {
            dictionary: null
        },
        props: {
            Count: {
                get: function () {
                    return this.dictionary.Count;
                }
            },
            System$Collections$Generic$ICollection$1$IsReadOnly: {
                get: function () {
                    return true;
                }
            }
        },
        alias: [
            "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TValue) + "$copyTo",
            "Count", "System$Collections$Generic$IReadOnlyCollection$1$" + Bridge.getTypeAlias(TValue) + "$Count",
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TValue) + "$Count",
            "System$Collections$Generic$ICollection$1$IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TValue) + "$IsReadOnly",
            "System$Collections$Generic$ICollection$1$add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TValue) + "$add",
            "System$Collections$Generic$ICollection$1$remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TValue) + "$remove",
            "System$Collections$Generic$ICollection$1$clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TValue) + "$clear",
            "System$Collections$Generic$ICollection$1$contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TValue) + "$contains",
            "System$Collections$Generic$IEnumerable$1$getEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(TValue) + "$getEnumerator"
        ],
        ctors: {
            ctor: function (dictionary) {
                this.$initialize();
                if (dictionary == null) {
                    throw new System.ArgumentNullException();
                }
                this.dictionary = dictionary;
            }
        },
        methods: {
            getEnumerator: function () {
                return new (System.Collections.Generic.Dictionary$2.ValueCollection.Enumerator(TKey,TValue)).$ctor1(this.dictionary);
            },
            System$Collections$Generic$IEnumerable$1$getEnumerator: function () {
                return new (System.Collections.Generic.Dictionary$2.ValueCollection.Enumerator(TKey,TValue)).$ctor1(this.dictionary).$clone();
            },
            System$Collections$IEnumerable$getEnumerator: function () {
                return new (System.Collections.Generic.Dictionary$2.ValueCollection.Enumerator(TKey,TValue)).$ctor1(this.dictionary).$clone();
            },
            copyTo: function (array, index) {
                if (array == null) {
                    throw new System.ArgumentNullException();
                }

                if (index < 0 || index > array.length) {
                    throw new System.ArgumentOutOfRangeException();
                }

                if (((array.length - index) | 0) < this.dictionary.Count) {
                    throw new System.ArgumentException();
                }

                var count = this.dictionary.count;
                var entries = this.dictionary.entries;
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    if (entries[System.Array.index(i, entries)].hashCode >= 0) {
                        array[System.Array.index(Bridge.identity(index, (index = (index + 1) | 0)), array)] = entries[System.Array.index(i, entries)].value;
                    }
                }
            },
            System$Collections$ICollection$copyTo: function (array, index) {
                if (array == null) {
                    throw new System.ArgumentNullException();
                }

                if (System.Array.getRank(array) !== 1) {
                    throw new System.ArgumentException();
                }

                if (System.Array.getLower(array, 0) !== 0) {
                    throw new System.ArgumentException();
                }

                if (index < 0 || index > array.length) {
                    throw new System.ArgumentOutOfRangeException();
                }

                if (((array.length - index) | 0) < this.dictionary.Count) {
                    throw new System.ArgumentException();
                }

                var values = Bridge.as(array, System.Array.type(TValue));
                if (values != null) {
                    this.copyTo(values, index);
                } else {
                    var objects = Bridge.as(array, System.Array.type(System.Object));
                    if (objects == null) {
                        throw new System.ArgumentException();
                    }

                    var count = this.dictionary.count;
                    var entries = this.dictionary.entries;
                    for (var i = 0; i < count; i = (i + 1) | 0) {
                        if (entries[System.Array.index(i, entries)].hashCode >= 0) {
                            objects[System.Array.index(Bridge.identity(index, (index = (index + 1) | 0)), objects)] = entries[System.Array.index(i, entries)].value;
                        }
                    }
                }
            },
            System$Collections$Generic$ICollection$1$add: function (item) {
                throw new System.NotSupportedException();
            },
            System$Collections$Generic$ICollection$1$remove: function (item) {
                throw new System.NotSupportedException();
            },
            System$Collections$Generic$ICollection$1$clear: function () {
                throw new System.NotSupportedException();
            },
            System$Collections$Generic$ICollection$1$contains: function (item) {
                return this.dictionary.containsValue(item);
            }
        }
    }; });

    Bridge.define("System.Collections.Generic.Dictionary$2.ValueCollection.Enumerator", function (TKey, TValue) { return {
        inherits: [System.Collections.Generic.IEnumerator$1(TValue),System.Collections.IEnumerator],
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new (System.Collections.Generic.Dictionary$2.ValueCollection.Enumerator(TKey,TValue))(); }
            }
        },
        fields: {
            dictionary: null,
            index: 0,
            version: 0,
            currentValue: Bridge.getDefaultValue(TValue)
        },
        props: {
            Current: {
                get: function () {
                    return this.currentValue;
                }
            },
            System$Collections$IEnumerator$Current: {
                get: function () {
                    if (this.index === 0 || (this.index === ((this.dictionary.count + 1) | 0))) {
                        throw new System.InvalidOperationException();
                    }

                    return this.currentValue;
                }
            }
        },
        alias: [
            "dispose", "System$IDisposable$dispose",
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "Current", ["System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(TValue) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1"]
        ],
        ctors: {
            $ctor1: function (dictionary) {
                this.$initialize();
                this.dictionary = dictionary;
                this.version = dictionary.version;
                this.index = 0;
                this.currentValue = Bridge.getDefaultValue(TValue);
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            dispose: function () { },
            moveNext: function () {
                var $t, $t1;
                if (this.version !== this.dictionary.version) {
                    throw new System.InvalidOperationException();
                }

                while ((this.index >>> 0) < ((this.dictionary.count) >>> 0)) {
                    if (($t = this.dictionary.entries)[System.Array.index(this.index, $t)].hashCode >= 0) {
                        this.currentValue = ($t1 = this.dictionary.entries)[System.Array.index(this.index, $t1)].value;
                        this.index = (this.index + 1) | 0;
                        return true;
                    }
                    this.index = (this.index + 1) | 0;
                }
                this.index = (this.dictionary.count + 1) | 0;
                this.currentValue = Bridge.getDefaultValue(TValue);
                return false;
            },
            System$Collections$IEnumerator$reset: function () {
                if (this.version !== this.dictionary.version) {
                    throw new System.InvalidOperationException();
                }
                this.index = 0;
                this.currentValue = Bridge.getDefaultValue(TValue);
            },
            getHashCode: function () {
                var h = Bridge.addHash([3788985113, this.dictionary, this.index, this.version, this.currentValue]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Collections.Generic.Dictionary$2.ValueCollection.Enumerator(TKey,TValue))) {
                    return false;
                }
                return Bridge.equals(this.dictionary, o.dictionary) && Bridge.equals(this.index, o.index) && Bridge.equals(this.version, o.version) && Bridge.equals(this.currentValue, o.currentValue);
            },
            $clone: function (to) {
                var s = to || new (System.Collections.Generic.Dictionary$2.ValueCollection.Enumerator(TKey,TValue))();
                s.dictionary = this.dictionary;
                s.index = this.index;
                s.version = this.version;
                s.currentValue = this.currentValue;
                return s;
            }
        }
    }; });

    Bridge.define("System.Collections.Generic.Dictionary$2.Enumerator", function (TKey, TValue) { return {
        inherits: [System.Collections.Generic.IEnumerator$1(System.Collections.Generic.KeyValuePair$2(TKey,TValue)),System.Collections.IDictionaryEnumerator],
        $kind: "struct",
        statics: {
            fields: {
                DictEntry: 0,
                KeyValuePair: 0
            },
            ctors: {
                init: function () {
                    this.DictEntry = 1;
                    this.KeyValuePair = 2;
                }
            },
            methods: {
                getDefaultValue: function () { return new (System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue))(); }
            }
        },
        fields: {
            dictionary: null,
            version: 0,
            index: 0,
            current: null,
            getEnumeratorRetType: 0
        },
        props: {
            Current: {
                get: function () {
                    return this.current;
                }
            },
            System$Collections$IEnumerator$Current: {
                get: function () {
                    if (this.index === 0 || (this.index === ((this.dictionary.count + 1) | 0))) {
                        throw new System.InvalidOperationException();
                    }

                    if (this.getEnumeratorRetType === System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue).DictEntry) {
                        return new System.Collections.DictionaryEntry.$ctor1(this.current.key, this.current.value).$clone();
                    } else {
                        return new (System.Collections.Generic.KeyValuePair$2(TKey,TValue))(this.current.key, this.current.value);
                    }
                }
            },
            System$Collections$IDictionaryEnumerator$Entry: {
                get: function () {
                    if (this.index === 0 || (this.index === ((this.dictionary.count + 1) | 0))) {
                        throw new System.InvalidOperationException();
                    }

                    return new System.Collections.DictionaryEntry.$ctor1(this.current.key, this.current.value);
                }
            },
            System$Collections$IDictionaryEnumerator$Key: {
                get: function () {
                    if (this.index === 0 || (this.index === ((this.dictionary.count + 1) | 0))) {
                        throw new System.InvalidOperationException();
                    }

                    return this.current.key;
                }
            },
            System$Collections$IDictionaryEnumerator$Value: {
                get: function () {
                    if (this.index === 0 || (this.index === ((this.dictionary.count + 1) | 0))) {
                        throw new System.InvalidOperationException();
                    }

                    return this.current.value;
                }
            }
        },
        alias: [
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "Current", ["System$Collections$Generic$IEnumerator$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1"],
            "dispose", "System$IDisposable$dispose"
        ],
        ctors: {
            init: function () {
                this.current = new (System.Collections.Generic.KeyValuePair$2(TKey,TValue))();
            },
            $ctor1: function (dictionary, getEnumeratorRetType) {
                this.$initialize();
                this.dictionary = dictionary;
                this.version = dictionary.version;
                this.index = 0;
                this.getEnumeratorRetType = getEnumeratorRetType;
                this.current = new (System.Collections.Generic.KeyValuePair$2(TKey,TValue))();
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            moveNext: function () {
                var $t, $t1, $t2;
                if (this.version !== this.dictionary.version) {
                    throw new System.InvalidOperationException();
                }

                // Use unsigned comparison since we set index to dictionary.count+1 when the enumeration ends.
                // dictionary.count+1 could be negative if dictionary.count is Int32.MaxValue
                while ((this.index >>> 0) < ((this.dictionary.count) >>> 0)) {
                    if (($t = this.dictionary.entries)[System.Array.index(this.index, $t)].hashCode >= 0) {
                        this.current = new (System.Collections.Generic.KeyValuePair$2(TKey,TValue))(($t1 = this.dictionary.entries)[System.Array.index(this.index, $t1)].key, ($t2 = this.dictionary.entries)[System.Array.index(this.index, $t2)].value);
                        this.index = (this.index + 1) | 0;
                        return true;
                    }
                    this.index = (this.index + 1) | 0;
                }

                this.index = (this.dictionary.count + 1) | 0;
                this.current = new (System.Collections.Generic.KeyValuePair$2(TKey,TValue))();
                return false;
            },
            dispose: function () { },
            System$Collections$IEnumerator$reset: function () {
                if (this.version !== this.dictionary.version) {
                    throw new System.InvalidOperationException();
                }

                this.index = 0;
                this.current = new (System.Collections.Generic.KeyValuePair$2(TKey,TValue))();
            },
            getHashCode: function () {
                var h = Bridge.addHash([3788985113, this.dictionary, this.version, this.index, this.current, this.getEnumeratorRetType]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue))) {
                    return false;
                }
                return Bridge.equals(this.dictionary, o.dictionary) && Bridge.equals(this.version, o.version) && Bridge.equals(this.index, o.index) && Bridge.equals(this.current, o.current) && Bridge.equals(this.getEnumeratorRetType, o.getEnumeratorRetType);
            },
            $clone: function (to) {
                var s = to || new (System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue))();
                s.dictionary = this.dictionary;
                s.version = this.version;
                s.index = this.index;
                s.current = this.current;
                s.getEnumeratorRetType = this.getEnumeratorRetType;
                return s;
            }
        }
    }; });
