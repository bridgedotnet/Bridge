    Bridge.define("System.Runtime.Serialization.SerializationInfoEnumerator", {
        inherits: [System.Collections.IEnumerator],
        fields: {
            _members: null,
            _data: null,
            _types: null,
            _numItems: 0,
            _currItem: 0,
            _current: false
        },
        props: {
            System$Collections$IEnumerator$Current: {
                get: function () {
                    return this.Current.$clone();
                }
            },
            Current: {
                get: function () {
                    if (this._current === false) {
                        throw new System.InvalidOperationException.$ctor1("Enumeration has either not started or has already finished.");
                    }
                    return new System.Runtime.Serialization.SerializationEntry.$ctor1(this._members[System.Array.index(this._currItem, this._members)], this._data[System.Array.index(this._currItem, this._data)], this._types[System.Array.index(this._currItem, this._types)]);
                }
            },
            Name: {
                get: function () {
                    if (this._current === false) {
                        throw new System.InvalidOperationException.$ctor1("Enumeration has either not started or has already finished.");
                    }
                    return this._members[System.Array.index(this._currItem, this._members)];
                }
            },
            Value: {
                get: function () {
                    if (this._current === false) {
                        throw new System.InvalidOperationException.$ctor1("Enumeration has either not started or has already finished.");
                    }
                    return this._data[System.Array.index(this._currItem, this._data)];
                }
            },
            ObjectType: {
                get: function () {
                    if (this._current === false) {
                        throw new System.InvalidOperationException.$ctor1("Enumeration has either not started or has already finished.");
                    }
                    return this._types[System.Array.index(this._currItem, this._types)];
                }
            }
        },
        alias: [
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "reset", "System$Collections$IEnumerator$reset"
        ],
        ctors: {
            ctor: function (members, info, types, numItems) {
                this.$initialize();

                this._members = members;
                this._data = info;
                this._types = types;

                this._numItems = (numItems - 1) | 0;
                this._currItem = -1;
                this._current = false;
            }
        },
        methods: {
            moveNext: function () {
                if (this._currItem < this._numItems) {
                    this._currItem = (this._currItem + 1) | 0;
                    this._current = true;
                } else {
                    this._current = false;
                }

                return this._current;
            },
            reset: function () {
                this._currItem = -1;
                this._current = false;
            }
        }
    });
