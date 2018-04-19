    Bridge.define("System.Collections.Generic.BitHelper", {
        statics: {
            fields: {
                MarkedBitFlag: 0,
                IntSize: 0
            },
            ctors: {
                init: function () {
                    this.MarkedBitFlag = 1;
                    this.IntSize = 32;
                }
            },
            methods: {
                ToIntArrayLength: function (n) {
                    return n > 0 ? (((((Bridge.Int.div((((n - 1) | 0)), System.Collections.Generic.BitHelper.IntSize)) | 0) + 1) | 0)) : 0;
                }
            }
        },
        fields: {
            _length: 0,
            _array: null
        },
        ctors: {
            ctor: function (bitArray, length) {
                this.$initialize();
                this._array = bitArray;
                this._length = length;
            }
        },
        methods: {
            MarkBit: function (bitPosition) {
                var bitArrayIndex = (Bridge.Int.div(bitPosition, System.Collections.Generic.BitHelper.IntSize)) | 0;
                if (bitArrayIndex < this._length && bitArrayIndex >= 0) {
                    var flag = (System.Collections.Generic.BitHelper.MarkedBitFlag << (bitPosition % System.Collections.Generic.BitHelper.IntSize));
                    this._array[System.Array.index(bitArrayIndex, this._array)] = this._array[System.Array.index(bitArrayIndex, this._array)] | flag;
                }
            },
            IsMarked: function (bitPosition) {
                var bitArrayIndex = (Bridge.Int.div(bitPosition, System.Collections.Generic.BitHelper.IntSize)) | 0;
                if (bitArrayIndex < this._length && bitArrayIndex >= 0) {
                    var flag = (System.Collections.Generic.BitHelper.MarkedBitFlag << (bitPosition % System.Collections.Generic.BitHelper.IntSize));
                    return ((this._array[System.Array.index(bitArrayIndex, this._array)] & flag) !== 0);
                }
                return false;
            }
        }
    });
