    Bridge.define("System.Collections.Generic.HashSet$1.Enumerator", function (T) { return {
        inherits: [System.Collections.Generic.IEnumerator$1(T)],
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new (System.Collections.Generic.HashSet$1.Enumerator(T))(); }
            }
        },
        fields: {
            _set: null,
            _index: 0,
            _version: 0,
            _current: Bridge.getDefaultValue(T)
        },
        props: {
            Current: {
                get: function () {
                    return this._current;
                }
            },
            System$Collections$IEnumerator$Current: {
                get: function () {
                    if (this._index === 0 || this._index === ((this._set._lastIndex + 1) | 0)) {
                        throw new System.InvalidOperationException.$ctor1("Enumeration has either not started or has already finished.");
                    }
                    return this.Current;
                }
            }
        },
        alias: [
            "Dispose", "System$IDisposable$Dispose",
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "Current", ["System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1"]
        ],
        ctors: {
            $ctor1: function (set) {
                this.$initialize();
                this._set = set;
                this._index = 0;
                this._version = set._version;
                this._current = Bridge.getDefaultValue(T);
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            Dispose: function () { },
            moveNext: function () {
                var $t, $t1;
                if (this._version !== this._set._version) {
                    throw new System.InvalidOperationException.$ctor1("Collection was modified; enumeration operation may not execute.");
                }
                while (this._index < this._set._lastIndex) {
                    if (($t = this._set._slots)[System.Array.index(this._index, $t)].hashCode >= 0) {
                        this._current = ($t1 = this._set._slots)[System.Array.index(this._index, $t1)].value;
                        this._index = (this._index + 1) | 0;
                        return true;
                    }
                    this._index = (this._index + 1) | 0;
                }
                this._index = (this._set._lastIndex + 1) | 0;
                this._current = Bridge.getDefaultValue(T);
                return false;
            },
            System$Collections$IEnumerator$reset: function () {
                if (this._version !== this._set._version) {
                    throw new System.InvalidOperationException.$ctor1("Collection was modified; enumeration operation may not execute.");
                }
                this._index = 0;
                this._current = Bridge.getDefaultValue(T);
            },
            getHashCode: function () {
                var h = Bridge.addHash([3788985113, this._set, this._index, this._version, this._current]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Collections.Generic.HashSet$1.Enumerator(T))) {
                    return false;
                }
                return Bridge.equals(this._set, o._set) && Bridge.equals(this._index, o._index) && Bridge.equals(this._version, o._version) && Bridge.equals(this._current, o._current);
            },
            $clone: function (to) {
                var s = to || new (System.Collections.Generic.HashSet$1.Enumerator(T))();
                s._set = this._set;
                s._index = this._index;
                s._version = this._version;
                s._current = this._current;
                return s;
            }
        }
    }; });
