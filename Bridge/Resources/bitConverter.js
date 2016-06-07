(function (globals) {
    "use strict";

    Bridge.define('System.BitConverter', {
        statics: {
            getBytes: function (value) {
                return value ? [1] : [0];
            },
            getBytes$1: function (value) {
                return System.BitConverter.getBytes$7(value);
            },
            getBytes$7: function (value) {
                return [(value & 255), (((value >> 8)) & 255)];
            },
            getBytes$3: function (value) {
                return [(value & 255), (((value >> 8)) & 255)];
            },
            getBytes$6: function (value) {
                var buffer = new ArrayBuffer(4);
                var intView = new Int32Array(buffer);
                var floatView = new Float32Array(buffer);
                floatView[0] = value;
                return System.BitConverter.getBytes$4(Bridge.cast(intView[0], System.Int32));
            },
            getBytes$2: function (value) {
                var buf = new ArrayBuffer(8);
                (new Float64Array(buf))[0] = value;
                var uintArray = new Uint32Array(buf);
                return System.BitConverter.getBytes$8(uintArray[0]).concat(System.BitConverter.getBytes$8(uintArray[1]));
            },
            getBytes$4: function (value) {
                return [(value & 255), (((value >> 8)) & 255), (((value >> 16)) & 255), (((value >> 24)) & 255)];
            },
            getBytes$8: function (value) {
                return [(value & 255), (((value >>> 8)) & 255), (((value >>> 16)) & 255), (((value >>> 24)) & 255)];
            },
            getBytes$5: function (value) {
                return [(value.shr(0 * 8).value.low & 255), (value.shr(1 * 8).value.low & 255), (value.shr(2 * 8).value.low & 255), (value.shr(3 * 8).value.low & 255), (value.shr(4 * 8).value.low & 255), (value.shr(5 * 8).value.low & 255), (value.shr(6 * 8).value.low & 255), (value.shr(7 * 8).value.low & 255)];
            },
            getBytes$9: function (value) {
                return [(value.shr(0 * 8).value.low & 255), (value.shr(1 * 8).value.low & 255), (value.shr(2 * 8).value.low & 255), (value.shr(3 * 8).value.low & 255), (value.shr(4 * 8).value.low & 255), (value.shr(5 * 8).value.low & 255), (value.shr(6 * 8).value.low & 255), (value.shr(7 * 8).value.low & 255)];
            },
            toBoolean: function (value, index) {
                return value[index] !== 0;
            },
            toDouble: function (value, index) {
                var buffer = new ArrayBuffer(8);
                var byteArray = new Uint8Array(buffer);
                var doubleView = new Float64Array(buffer);
                for (; index < value.length; index = (index + 1) | 0) {
                    byteArray[index] = value[index];
                }
                return doubleView[0];
            },
            toSingle: function (value, index) {
                var buffer = new ArrayBuffer(4);
                var byteArray = new Uint8Array(buffer);
                var floatView = new Float32Array(buffer);
                for (; index < value.length; index = (index + 1) | 0) {
                    byteArray[index] = value[index];
                }
                return floatView[0];
            },
            toString: function (value, startIndex, length) {
                if (startIndex === void 0) { startIndex = 0; }
                if (length === void 0) { length = -1; }
                length = length === -1 ? ((value.length - startIndex) | 0) : length;
                var result = "";
                while (true) {
                    var item = value[startIndex];
                    result += System.String.alignString(item.toString(16), 2, 48);
                    if (Bridge.identity(startIndex, (startIndex = (startIndex + 1) | 0)) > length) {
                        return result;
                    }
                    result += String.fromCharCode(45);
                }
            },
            doubleToInt64Bits: function (value) {
                var buf = new ArrayBuffer(8);
                (new Float64Array(buf))[0] = value;
                var uintArray = new Uint32Array(buf);
                return System.Int64([uintArray[0], uintArray[1]]);
            },
            int64BitsToDouble: function (value) {
                var buffer = new ArrayBuffer(8);
                var int32View = new Int32Array(buffer);
                var doubleView = new Float64Array(buffer);
                int32View[0] = value.value.low;
                int32View[1] = value.value.high;
                return doubleView[0];
            },
            toInt32: function (value, index) {
                return (value[index] + (value[(index + 1)] << 8) + (value[(index + 2)] << 16) + (value[(index + 3)] << 24));
            },
            toUInt32: function (value, index) {
                return (value[index] + (value[(index + 1)] << 8) + (value[(index + 2)] << 16) + (value[(index + 3)] << 24));
            },
            toInt64: function (value, index) {
                return System.Int64(value[index]).add((System.Int64(value[(index + 1)]).shl(8))).add((System.Int64(value[(index + 2)]).shl(16))).add((System.Int64(value[(index + 3)]).shl(24))).add((System.Int64(value[(index + 4)]).shl(32))).add((System.Int64(value[(index + 5)]).shl(40))).add((System.Int64(value[(index + 6)]).shl(48))).add((System.Int64(value[(index + 7)]).shl(56)));
            },
            toUInt64: function (value, index) {
                return System.UInt64(value[index]).add((System.UInt64(value[(index + 1)]).shl(8))).add((System.UInt64(value[(index + 2)]).shl(16))).add((System.UInt64(value[(index + 3)]).shl(24))).add((System.UInt64(value[(index + 4)]).shl(32))).add((System.UInt64(value[(index + 5)]).shl(40))).add((System.UInt64(value[(index + 6)]).shl(48))).add((System.UInt64(value[(index + 7)]).shl(56)));
            },
            toInt16: function (value, index) {
                return ((value[index]) + ((value[(index + 1)] << 8)));
            },
            toUInt16: function (value, index) {
                return ((value[index]) + ((value[(index + 1)] << 8)));
            },
            toChar: function (value, index) {
                return System.BitConverter.toUInt16(value, index);
            }
        }
    });
    
    
    
    Bridge.init();
})(this);
