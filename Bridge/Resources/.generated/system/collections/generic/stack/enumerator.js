    Bridge.define("System.Collections.Generic.Stack$1.Enumerator", function (T) { return {
        inherits: [System.Collections.Generic.IEnumerator$1(T),System.Collections.IEnumerator],
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new (System.Collections.Generic.Stack$1.Enumerator(T))(); }
            }
        },
        fields: {
            _stack: null,
            _index: 0,
            _version: 0,
            _currentElement: Bridge.getDefaultValue(T)
        },
        props: {
            Current: {
                get: function () {
                    if (this._index === -2) {
                        throw new System.InvalidOperationException("Enumeration has not started. Call MoveNext.");
                    }
                    if (this._index === -1) {
                        throw new System.InvalidOperationException("Enumeration already finished.");
                    }
                    return this._currentElement;
                }
            },
            System$Collections$IEnumerator$Current: {
                get: function () {
                    if (this._index === -2) {
                        throw new System.InvalidOperationException("Enumeration has not started. Call MoveNext.");
                    }
                    if (this._index === -1) {
                        throw new System.InvalidOperationException("Enumeration already finished.");
                    }
                    return this._currentElement;
                }
            }
        },
        alias: [
            "dispose", "System$IDisposable$dispose",
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "Current", ["System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1"]
        ],
        ctors: {
            $ctor1: function (stack) {
                this.$initialize();
                this._stack = stack;
                this._version = this._stack._version;
                this._index = -2;
                this._currentElement = Bridge.getDefaultValue(T);
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            dispose: function () {
                this._index = -1;
            },
            moveNext: function () {
                var $t, $t1;
                var retval;
                if (this._version !== this._stack._version) {
                    throw new System.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
                }
                if (this._index === -2) { // First call to enumerator.
                    this._index = (this._stack._size - 1) | 0;
                    retval = (this._index >= 0);
                    if (retval) {
                        this._currentElement = ($t = this._stack._array)[System.Array.index(this._index, $t)];
                    }
                    return retval;
                }
                if (this._index === -1) { // End of enumeration.
                    return false;
                }

                retval = (((this._index = (this._index - 1) | 0)) >= 0);
                if (retval) {
                    this._currentElement = ($t1 = this._stack._array)[System.Array.index(this._index, $t1)];
                } else {
                    this._currentElement = Bridge.getDefaultValue(T);
                }
                return retval;
            },
            System$Collections$IEnumerator$reset: function () {
                if (this._version !== this._stack._version) {
                    throw new System.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
                }
                this._index = -2;
                this._currentElement = Bridge.getDefaultValue(T);
            },
            getHashCode: function () {
                var h = Bridge.addHash([3788985113, this._stack, this._index, this._version, this._currentElement]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Collections.Generic.Stack$1.Enumerator(T))) {
                    return false;
                }
                return Bridge.equals(this._stack, o._stack) && Bridge.equals(this._index, o._index) && Bridge.equals(this._version, o._version) && Bridge.equals(this._currentElement, o._currentElement);
            },
            $clone: function (to) {
                var s = to || new (System.Collections.Generic.Stack$1.Enumerator(T))();
                s._stack = this._stack;
                s._index = this._index;
                s._version = this._version;
                s._currentElement = this._currentElement;
                return s;
            }
        }
    }; });
