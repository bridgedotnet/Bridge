    Bridge.define("System.Collections.Generic.Dictionary$2.KeyCollection.Enumerator", function (TKey, TValue) { return {
        inherits: [System.Collections.Generic.IEnumerator$1(TKey),System.IDisposable,System.Collections.IEnumerator],
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new (System.Collections.Generic.Dictionary$2.KeyCollection.Enumerator(TKey,TValue))(); }
            }
        },
        fields: {
            dictionary: null,
            index: 0,
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
                    if (this.index === 0 || this.index === ((this.dictionary.count + 1) | 0)) {
                        throw new System.InvalidOperationException.$ctor1("ExceptionResource.InvalidOperation_EnumOpCantHappen");
                    }
                    return this.currentKey;
                }
            }
        },
        alias: [
            "Current", ["System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(TKey) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1"],
            "Dispose", "System$IDisposable$Dispose",
            "moveNext", "System$Collections$IEnumerator$moveNext"
        ],
        ctors: {
            $ctor1: function (dictionary) {
                this.$initialize();
                this.dictionary = dictionary;
                this.index = 0;
                this.currentKey = Bridge.getDefaultValue(TKey);
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            Dispose: function () { },
            moveNext: function () {
                for (; (this.index >>> 0) < ((this.dictionary.count) >>> 0); this.index = (this.index + 1) | 0) {
                    if (this.dictionary.entries[this.index].hashCode >= 0) {
                        this.currentKey = this.dictionary.entries[this.index].key;
                        this.index = (this.index + 1) | 0;
                        return true;
                    }
                }
                this.index = (this.dictionary.count + 1) | 0;
                this.currentKey = Bridge.getDefaultValue(TKey);
                return false;
            },
            System$Collections$IEnumerator$reset: function () {
                this.index = 0;
                this.currentKey = Bridge.getDefaultValue(TKey);
            },
            getHashCode: function () {
                var h = Bridge.addHash([3788985113, this.dictionary, this.index, this.currentKey]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Collections.Generic.Dictionary$2.KeyCollection.Enumerator(TKey,TValue))) {
                    return false;
                }
                return Bridge.equals(this.dictionary, o.dictionary) && Bridge.equals(this.index, o.index) && Bridge.equals(this.currentKey, o.currentKey);
            },
            $clone: function (to) {
                var s = to || new (System.Collections.Generic.Dictionary$2.KeyCollection.Enumerator(TKey,TValue))();
                s.dictionary = this.dictionary;
                s.index = this.index;
                s.currentKey = this.currentKey;
                return s;
            }
        }
    }; });
