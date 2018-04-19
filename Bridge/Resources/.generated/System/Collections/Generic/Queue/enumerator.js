    Bridge.define("System.Collections.Generic.Queue$1.Enumerator", function (T) { return {
        inherits: [System.Collections.Generic.IEnumerator$1(T),System.Collections.IEnumerator],
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new (System.Collections.Generic.Queue$1.Enumerator(T))(); }
            }
        },
        fields: {
            _q: null,
            _index: 0,
            _version: 0,
            _currentElement: Bridge.getDefaultValue(T)
        },
        props: {
            Current: {
                get: function () {
                    if (this._index < 0) {
                        if (this._index === -1) {
                            throw new System.InvalidOperationException.$ctor1("Enumeration has not started. Call MoveNext.");
                        } else {
                            throw new System.InvalidOperationException.$ctor1("Enumeration already finished.");
                        }
                    }
                    return this._currentElement;
                }
            },
            System$Collections$IEnumerator$Current: {
                get: function () {
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
            $ctor1: function (q) {
                this.$initialize();
                this._q = q;
                this._version = this._q._version;
                this._index = -1;
                this._currentElement = Bridge.getDefaultValue(T);
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            Dispose: function () {
                this._index = -2;
                this._currentElement = Bridge.getDefaultValue(T);
            },
            moveNext: function () {
                if (this._version !== this._q._version) {
                    throw new System.InvalidOperationException.$ctor1("Collection was modified; enumeration operation may not execute.");
                }

                if (this._index === -2) {
                    return false;
                }

                this._index = (this._index + 1) | 0;

                if (this._index === this._q._size) {
                    this._index = -2;
                    this._currentElement = Bridge.getDefaultValue(T);
                    return false;
                }

                this._currentElement = this._q.GetElement(this._index);
                return true;
            },
            System$Collections$IEnumerator$reset: function () {
                if (this._version !== this._q._version) {
                    throw new System.InvalidOperationException.$ctor1("Collection was modified; enumeration operation may not execute.");
                }
                this._index = -1;
                this._currentElement = Bridge.getDefaultValue(T);
            },
            getHashCode: function () {
                var h = Bridge.addHash([3788985113, this._q, this._index, this._version, this._currentElement]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Collections.Generic.Queue$1.Enumerator(T))) {
                    return false;
                }
                return Bridge.equals(this._q, o._q) && Bridge.equals(this._index, o._index) && Bridge.equals(this._version, o._version) && Bridge.equals(this._currentElement, o._currentElement);
            },
            $clone: function (to) {
                var s = to || new (System.Collections.Generic.Queue$1.Enumerator(T))();
                s._q = this._q;
                s._index = this._index;
                s._version = this._version;
                s._currentElement = this._currentElement;
                return s;
            }
        }
    }; });
