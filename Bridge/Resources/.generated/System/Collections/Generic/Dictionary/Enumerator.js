    Bridge.define("System.Collections.Generic.Dictionary$2.Enumerator", function (TKey, TValue) { return {
        inherits: [System.Collections.Generic.IEnumerator$1(System.Collections.Generic.KeyValuePair$2(TKey,TValue)),System.IDisposable,System.Collections.IEnumerator,System.Collections.IDictionaryEnumerator],
        $kind: "nested struct",
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
                    if (this.index === 0 || this.index === ((this.dictionary.count + 1) | 0)) {
                        throw new System.InvalidOperationException.$ctor1("ExceptionResource.InvalidOperation_EnumOpCantHappen");
                    }
                    if (this.getEnumeratorRetType === 1) {
                        return new System.Collections.DictionaryEntry.$ctor1(this.current.key, this.current.value).$clone();
                    }
                    return new (System.Collections.Generic.KeyValuePair$2(TKey,TValue)).$ctor1(this.current.key, this.current.value);
                }
            },
            System$Collections$IDictionaryEnumerator$Entry: {
                get: function () {
                    if (this.index === 0 || this.index === ((this.dictionary.count + 1) | 0)) {
                        throw new System.InvalidOperationException.$ctor1("ExceptionResource.InvalidOperation_EnumOpCantHappen");
                    }
                    return new System.Collections.DictionaryEntry.$ctor1(this.current.key, this.current.value);
                }
            },
            System$Collections$IDictionaryEnumerator$Key: {
                get: function () {
                    if (this.index === 0 || this.index === ((this.dictionary.count + 1) | 0)) {
                        throw new System.InvalidOperationException.$ctor1("ExceptionResource.InvalidOperation_EnumOpCantHappen");
                    }
                    return this.current.key;
                }
            },
            System$Collections$IDictionaryEnumerator$Value: {
                get: function () {
                    if (this.index === 0 || this.index === ((this.dictionary.count + 1) | 0)) {
                        throw new System.InvalidOperationException.$ctor1("ExceptionResource.InvalidOperation_EnumOpCantHappen");
                    }
                    return this.current.value;
                }
            }
        },
        alias: [
            "Current", ["System$Collections$Generic$IEnumerator$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1"],
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "Dispose", "System$IDisposable$Dispose"
        ],
        ctors: {
            init: function () {
                this.current = new (System.Collections.Generic.KeyValuePair$2(TKey,TValue))();
            },
            $ctor1: function (dictionary, getEnumeratorRetType) {
                this.$initialize();
                this.dictionary = dictionary;
                this.index = 0;
                this.getEnumeratorRetType = getEnumeratorRetType;
                this.current = new (System.Collections.Generic.KeyValuePair$2(TKey,TValue)).ctor();
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            moveNext: function () {
                for (; (this.index >>> 0) < ((this.dictionary.count) >>> 0); this.index = (this.index + 1) | 0) {
                    if (this.dictionary.entries[this.index].hashCode >= 0) {
                        this.current = new (System.Collections.Generic.KeyValuePair$2(TKey,TValue)).$ctor1(this.dictionary.entries[this.index].key, this.dictionary.entries[this.index].value);
                        this.index = (this.index + 1) | 0;
                        return true;
                    }
                }
                this.index = (this.dictionary.count + 1) | 0;
                this.current = new (System.Collections.Generic.KeyValuePair$2(TKey,TValue)).ctor();
                return false;
            },
            Dispose: function () { },
            System$Collections$IEnumerator$reset: function () {
                this.index = 0;
                this.current = new (System.Collections.Generic.KeyValuePair$2(TKey,TValue)).ctor();
            },
            getHashCode: function () {
                var h = Bridge.addHash([3788985113, this.dictionary, this.index, this.current, this.getEnumeratorRetType]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue))) {
                    return false;
                }
                return Bridge.equals(this.dictionary, o.dictionary) && Bridge.equals(this.index, o.index) && Bridge.equals(this.current, o.current) && Bridge.equals(this.getEnumeratorRetType, o.getEnumeratorRetType);
            },
            $clone: function (to) {
                var s = to || new (System.Collections.Generic.Dictionary$2.Enumerator(TKey,TValue))();
                s.dictionary = this.dictionary;
                s.index = this.index;
                s.current = this.current;
                s.getEnumeratorRetType = this.getEnumeratorRetType;
                return s;
            }
        }
    }; });
