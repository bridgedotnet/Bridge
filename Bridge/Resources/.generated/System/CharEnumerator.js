    Bridge.define("System.CharEnumerator", {
        inherits: [System.Collections.IEnumerator,System.Collections.Generic.IEnumerator$1(System.Char),System.IDisposable,System.ICloneable],
        fields: {
            _str: null,
            _index: 0,
            _currentElement: 0
        },
        props: {
            System$Collections$IEnumerator$Current: {
                get: function () {
                    return Bridge.box(this.Current, System.Char, String.fromCharCode, System.Char.getHashCode);
                }
            },
            Current: {
                get: function () {
                    if (this._index === -1) {
                        throw new System.InvalidOperationException.$ctor1("Enumeration has not started. Call MoveNext.");
                    }
                    if (this._index >= this._str.length) {
                        throw new System.InvalidOperationException.$ctor1("Enumeration already finished.");
                    }
                    return this._currentElement;
                }
            }
        },
        alias: [
            "clone", "System$ICloneable$clone",
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "Dispose", "System$IDisposable$Dispose",
            "Current", ["System$Collections$Generic$IEnumerator$1$System$Char$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1"],
            "reset", "System$Collections$IEnumerator$reset"
        ],
        ctors: {
            ctor: function (str) {
                this.$initialize();
                this._str = str;
                this._index = -1;
            }
        },
        methods: {
            clone: function () {
                return Bridge.clone(this);
            },
            moveNext: function () {
                if (this._index < (((this._str.length - 1) | 0))) {
                    this._index = (this._index + 1) | 0;
                    this._currentElement = this._str.charCodeAt(this._index);
                    return true;
                } else {
                    this._index = this._str.length;
                }
                return false;
            },
            Dispose: function () {
                if (this._str != null) {
                    this._index = this._str.length;
                }
                this._str = null;
            },
            reset: function () {
                this._currentElement = 0;
                this._index = -1;
            }
        }
    });
