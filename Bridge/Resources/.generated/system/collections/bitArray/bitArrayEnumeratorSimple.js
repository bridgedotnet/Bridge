    Bridge.define("System.Collections.BitArray.BitArrayEnumeratorSimple", {
        inherits: [System.Collections.IEnumerator],
        fields: {
            bitarray: null,
            index: 0,
            version: 0,
            currentElement: false
        },
        props: {
            Current: {
                get: function () {
                    if (this.index === -1) {
                        throw new System.InvalidOperationException("Enumeration has not started. Call MoveNext.");
                    }
                    if (this.index >= this.bitarray.Count) {
                        throw new System.InvalidOperationException("Enumeration already finished.");
                    }
                    return Bridge.box(this.currentElement, System.Boolean, System.Boolean.toString);
                }
            }
        },
        alias: [
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "Current", "System$Collections$IEnumerator$Current",
            "reset", "System$Collections$IEnumerator$reset"
        ],
        ctors: {
            ctor: function (bitarray) {
                this.$initialize();
                this.bitarray = bitarray;
                this.index = -1;
                this.version = bitarray._version;
            }
        },
        methods: {
            moveNext: function () {
                if (this.version !== this.bitarray._version) {
                    throw new System.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
                }
                if (this.index < (((this.bitarray.Count - 1) | 0))) {
                    this.index = (this.index + 1) | 0;
                    this.currentElement = this.bitarray.get(this.index);
                    return true;
                } else {
                    this.index = this.bitarray.Count;
                }

                return false;
            },
            reset: function () {
                if (this.version !== this.bitarray._version) {
                    throw new System.InvalidOperationException("Collection was modified; enumeration operation may not execute.");
                }
                this.index = -1;
            }
        }
    });
