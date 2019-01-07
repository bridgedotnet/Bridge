    Bridge.define("System.Collections.Generic.Dictionary$2.KeyCollection", function (TKey, TValue) { return {
        inherits: [System.Collections.Generic.ICollection$1(TKey),System.Collections.Generic.IEnumerable$1(TKey),System.Collections.IEnumerable,System.Collections.ICollection,System.Collections.Generic.IReadOnlyCollection$1(TKey),System.Object],
        $kind: "nested class",
        fields: {
            dictionary: null
        },
        props: {
            Count: {
                get: function () {
                    return this.dictionary.count;
                }
            },
            IsReadOnly: {
                get: function () {
                    return true;
                }
            },
            IsSynchronized: {
                get: function () {
                    return true;
                }
            },
            SyncRoot: {
                get: function () {
                    return null;
                }
            }
        },
        alias: [
            "Count", ["System$Collections$Generic$IReadOnlyCollection$1$" + Bridge.getTypeAlias(TKey) + "$Count", "System$Collections$Generic$IReadOnlyCollection$1$Count"],
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$Count",
            "IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "SyncRoot", "System$Collections$ICollection$SyncRoot",
            "add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$add",
            "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$copyTo",
            "clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$clear",
            "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$contains",
            "remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$remove",
            "copyTo$1", "System$Collections$ICollection$copyTo",
            "System$Collections$Generic$IEnumerable$1$GetEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(TKey) + "$GetEnumerator"
        ],
        ctors: {
            ctor: function (dictionary) {
                this.$initialize();
                this.dictionary = dictionary;
            }
        },
        methods: {
            add: function (key) {
                throw new System.NotSupportedException.ctor();
            },
            copyTo: function (array, index) {
                var $t;
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }

                if (index < 0 || index > array.length) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                if (((array.length - index) | 0) < this.dictionary.count) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                var i = 0;

                $t = Bridge.getEnumerator(this.dictionary);
                try {
                    while ($t.moveNext()) {
                        var pair = $t.Current;
                        array[System.Array.index(i, array)] = pair.key;
                        i = (i + 1) | 0;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            copyTo$1: function (array, index) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }

                if (System.Array.getRank(array) !== 1) {
                    throw new System.ArgumentException.$ctor1("Multi-dimensional arrays not supported.");
                }

                if (System.Array.getLower(array, 0) !== 0) {
                    throw new System.ArgumentException.$ctor1("Non-zero lower bound arrays not supported.");
                }

                if (index < 0 || index > array.length) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                if (((array.length - index) | 0) < this.dictionary.count) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                var array1 = Bridge.as(array, System.Array.type(TKey));

                if (array1 != null) {
                    this.copyTo(array1, index);
                }
            },
            clear: function () {
                throw new System.NotSupportedException.ctor();
            },
            contains: function (key) {
                return this.dictionary.containsKey(key);
            },
            remove: function (key) {
                throw new System.NotSupportedException.ctor();
            },
            GetEnumerator: function () {
                return new (System.Collections.Generic.Dictionary$2.KeyCollection.Enumerator(TKey,TValue)).$ctor1(this.dictionary);
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                return Bridge.cast(this.GetEnumerator().$clone(), System.Collections.IEnumerator);
            },
            System$Collections$Generic$IEnumerable$1$GetEnumerator: function () {
                return this.GetEnumerator().$clone();
            }
        }
    }; });
