    Bridge.define("System.Collections.Generic.Dictionary$2.ValueCollection.Enumerator", function (TKey, TValue) { return {
        inherits: [System.Collections.Generic.IEnumerator$1(TValue),System.IDisposable,System.Collections.IEnumerator],
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new (System.Collections.Generic.Dictionary$2.ValueCollection.Enumerator(TKey,TValue))(); }
            }
        },
        fields: {
            dictionary: null,
            index: 0,
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
                    if (this.index === 0 || this.index === ((this.dictionary.count + 1) | 0)) {
                        throw new System.InvalidOperationException.$ctor1("ExceptionResource.InvalidOperation_EnumOpCantHappen");
                    }
                    return this.currentValue;
                }
            }
        },
        alias: [
            "Current", ["System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(TValue) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1"],
            "Dispose", "System$IDisposable$Dispose",
            "moveNext", "System$Collections$IEnumerator$moveNext"
        ],
        ctors: {
            $ctor1: function (dictionary) {
                this.$initialize();
                this.dictionary = dictionary;
                this.index = 0;
                this.currentValue = Bridge.getDefaultValue(TValue);
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
                        this.currentValue = this.dictionary.entries[this.index].value;
                        this.index = (this.index + 1) | 0;
                        return true;
                    }
                }
                this.index = (this.dictionary.count + 1) | 0;
                this.currentValue = Bridge.getDefaultValue(TValue);
                return false;
            },
            System$Collections$IEnumerator$reset: function () {
                this.index = 0;
                this.currentValue = Bridge.getDefaultValue(TValue);
            },
            getHashCode: function () {
                var h = Bridge.addHash([3788985113, this.dictionary, this.index, this.currentValue]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Collections.Generic.Dictionary$2.ValueCollection.Enumerator(TKey,TValue))) {
                    return false;
                }
                return Bridge.equals(this.dictionary, o.dictionary) && Bridge.equals(this.index, o.index) && Bridge.equals(this.currentValue, o.currentValue);
            },
            $clone: function (to) {
                var s = to || new (System.Collections.Generic.Dictionary$2.ValueCollection.Enumerator(TKey,TValue))();
                s.dictionary = this.dictionary;
                s.index = this.index;
                s.currentValue = this.currentValue;
                return s;
            }
        }
    }; });
