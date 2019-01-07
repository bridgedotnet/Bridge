    Bridge.define("System.Collections.Generic.Dictionary$2.ValueCollection", function (TKey, TValue) { return {
        inherits: [System.Collections.Generic.ICollection$1(TValue),System.Collections.Generic.IEnumerable$1(TValue),System.Collections.IEnumerable,System.Collections.ICollection,System.Collections.Generic.IReadOnlyCollection$1(TValue),System.Object],
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
                    return false;
                }
            },
            SyncRoot: {
                get: function () {
                    return this;
                }
            }
        },
        alias: [
            "Count", ["System$Collections$Generic$IReadOnlyCollection$1$" + Bridge.getTypeAlias(TValue) + "$Count", "System$Collections$Generic$IReadOnlyCollection$1$Count"],
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TValue) + "$Count",
            "IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TValue) + "$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "SyncRoot", "System$Collections$ICollection$SyncRoot",
            "add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TValue) + "$add",
            "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TValue) + "$copyTo",
            "clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TValue) + "$clear",
            "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TValue) + "$contains",
            "remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TValue) + "$remove",
            "System$Collections$Generic$IEnumerable$1$GetEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(TValue) + "$GetEnumerator",
            "copyTo$1", "System$Collections$ICollection$copyTo"
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
                        array[System.Array.index(i, array)] = pair.value;
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

                var array1 = Bridge.as(array, System.Array.type(TValue));

                if (array1 != null) {
                    this.copyTo(array1, index);
                }
            },
            clear: function () {
                throw new System.NotSupportedException.ctor();
            },
            contains: function (key) {
                return this.dictionary.ContainsValue(key);
            },
            remove: function (key) {
                throw new System.NotSupportedException.ctor();
            },
            GetEnumerator: function () {
                return new (System.Collections.Generic.Dictionary$2.ValueCollection.Enumerator(TKey,TValue)).$ctor1(this.dictionary);
            },
            System$Collections$Generic$IEnumerable$1$GetEnumerator: function () {
                return this.GetEnumerator().$clone();
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                return Bridge.cast(this.GetEnumerator().$clone(), System.Collections.IEnumerator);
            }
        }
    }; });
