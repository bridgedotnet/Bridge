    Bridge.define("System.BitConverter", {
        statics: {
            isLittleEndian: true,
            arg_ArrayPlusOffTooSmall: "Destination array is not long enough to copy all the items in the collection. Check array index and length.",
            getBytes: function (value) {
                return value ? System.Array.init([1], System.Byte) : System.Array.init([0], System.Byte);
            },
            getBytes$1: function (value) {
                return System.BitConverter.getBytes$3(Bridge.Int.sxs(value & 65535));
            },
            getBytes$3: function (value) {
                return System.Array.init([(value & 255), ((value >> 8) & 255)], System.Byte);
            },
            getBytes$4: function (value) {
                return System.Array.init([(value & 255), ((value >> 8) & 255), ((value >> 16) & 255), ((value >> 24) & 255)], System.Byte);
            },
            getBytes$5: function (value) {
                return System.Array.init([(value.shr(0 * 8).value.low & 255), (value.shr(1 * 8).value.low & 255), (value.shr(2 * 8).value.low & 255), (value.shr(3 * 8).value.low & 255), (value.shr(4 * 8).value.low & 255), (value.shr(5 * 8).value.low & 255), (value.shr(6 * 8).value.low & 255), (value.shr(7 * 8).value.low & 255)], System.Byte);
            },
            getBytes$7: function (value) {
                return System.Array.init([(value & 255), ((value >> 8) & 255)], System.Byte);
            },
            getBytes$8: function (value) {
                return System.Array.init([(value & 255), ((value >>> 8) & 255), ((value >>> 16) & 255), ((value >>> 24) & 255)], System.Byte);
            },
            getBytes$9: function (value) {
                return System.Array.init([(value.shr(0 * 8).value.low & 255), (value.shr(1 * 8).value.low & 255), (value.shr(2 * 8).value.low & 255), (value.shr(3 * 8).value.low & 255), (value.shr(4 * 8).value.low & 255), (value.shr(5 * 8).value.low & 255), (value.shr(6 * 8).value.low & 255), (value.shr(7 * 8).value.low & 255)], System.Byte);
            },
            getBytes$6: function (value) {
                var buffer = new ArrayBuffer(8);
                var view = new DataView(buffer);
                view.setFloat32(0, value);

                return System.Array.init([view.getUint8(3), view.getUint8(2), view.getUint8(1), view.getUint8(0)], System.Byte);
            },
            getBytes$2: function (value) {
                var buffer = new ArrayBuffer(8);
                var view = new DataView(buffer);
                view.setFloat64(0, value);

                return System.Array.init([view.getUint8(7), view.getUint8(6), view.getUint8(5), view.getUint8(4), view.getUint8(3), view.getUint8(2), view.getUint8(1), view.getUint8(0)], System.Byte);
            },
            toChar: function (value, startIndex) {
                if (value == null) {
                    throw new System.ArgumentNullException("null");
                }

                if (System.Int64((startIndex >>> 0)).gte(System.Int64(value.length))) {
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }

                if (startIndex > ((value.length - 2) | 0)) {
                    throw new System.ArgumentException(System.BitConverter.arg_ArrayPlusOffTooSmall);
                }

                return ((System.BitConverter.toInt16(value, startIndex)) & 65535);
            },
            toInt16: function (value, startIndex) {
                if (value == null) {
                    throw new System.ArgumentNullException("null");
                }

                if (System.Int64((startIndex >>> 0)).gte(System.Int64(value.length))) {
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }

                if (startIndex > ((value.length - 2) | 0)) {
                    throw new System.ArgumentException(System.BitConverter.arg_ArrayPlusOffTooSmall);
                }

                //if (startIndex % 2 == 0)
                //{
                //    // data is aligned
                //    return *((short*)pbyte);
                //}
                //else
                //{
                //    if (IsLittleEndian)
                //    {
                //        return (short)((*pbyte) | (*(pbyte + 1) << 8));
                //    }
                //    else
                //    {
                //        return (short)((*pbyte << 8) | (*(pbyte + 1)));
                //    }
                //}


                return ((value[startIndex]) + ((value[(startIndex + 1)] << 8)));
            },
            toInt32: function (value, startIndex) {
                if (value == null) {
                    throw new System.ArgumentNullException("null");
                }

                if (System.Int64((startIndex >>> 0)).gte(System.Int64(value.length))) {
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }

                if (startIndex > ((value.length - 4) | 0)) {
                    throw new System.ArgumentException(System.BitConverter.arg_ArrayPlusOffTooSmall);
                }

                //if (startIndex % 4 == 0)
                //{ // data is aligned
                //    return *((int*)pbyte);
                //}
                //else
                //{
                //    if (IsLittleEndian)
                //    {
                //        return (*pbyte) | (*(pbyte + 1) << 8) | (*(pbyte + 2) << 16) | (*(pbyte + 3) << 24);
                //    }
                //    else
                //    {
                //        return (*pbyte << 24) | (*(pbyte + 1) << 16) | (*(pbyte + 2) << 8) | (*(pbyte + 3));
                //    }
                //}

                return (value[startIndex] + (value[(startIndex + 1)] << 8) + (value[(startIndex + 2)] << 16) + (value[(startIndex + 3)] << 24));
            },
            toInt64: function (value, startIndex) {
                if (value == null) {
                    throw new System.ArgumentNullException("null");
                }

                if (System.Int64((startIndex >>> 0)).gte(System.Int64(value.length))) {
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }

                if (startIndex > ((value.length - 8) | 0)) {
                    throw new System.ArgumentException(System.BitConverter.arg_ArrayPlusOffTooSmall);
                }

                //if (startIndex % 8 == 0)
                //{ // data is aligned
                //    return *((long*)pbyte);
                //}
                //else
                //{
                //    if (IsLittleEndian)
                //    {
                //        int i1 = (*pbyte) | (*(pbyte + 1) << 8) | (*(pbyte + 2) << 16) | (*(pbyte + 3) << 24);
                //        int i2 = (*(pbyte + 4)) | (*(pbyte + 5) << 8) | (*(pbyte + 6) << 16) | (*(pbyte + 7) << 24);
                //        return (uint)i1 | ((long)i2 << 32);
                //    }
                //    else
                //    {
                //        int i1 = (*pbyte << 24) | (*(pbyte + 1) << 16) | (*(pbyte + 2) << 8) | (*(pbyte + 3));
                //        int i2 = (*(pbyte + 4) << 24) | (*(pbyte + 5) << 16) | (*(pbyte + 6) << 8) | (*(pbyte + 7));
                //        return (uint)i2 | ((long)i1 << 32);
                //    }
                //}

                return System.Int64(value[startIndex]).add((System.Int64(value[(startIndex + 1)]).shl(8))).add((System.Int64(value[(startIndex + 2)]).shl(16))).add((System.Int64(value[(startIndex + 3)]).shl(24))).add((System.Int64(value[(startIndex + 4)]).shl(32))).add((System.Int64(value[(startIndex + 5)]).shl(40))).add((System.Int64(value[(startIndex + 6)]).shl(48))).add((System.Int64(value[(startIndex + 7)]).shl(56)));
            },
            toUInt16: function (value, startIndex) {
                if (value == null) {
                    throw new System.ArgumentNullException("null");
                }

                if (System.Int64((startIndex >>> 0)).gte(System.Int64(value.length))) {
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }

                if (startIndex > ((value.length - 2) | 0)) {
                    throw new System.ArgumentException(System.BitConverter.arg_ArrayPlusOffTooSmall);
                }

                //return (ushort)ToInt16(value, startIndex);
                return ((value[startIndex]) + ((value[(startIndex + 1)] << 8)));
            },
            toUInt32: function (value, startIndex) {
                if (value == null) {
                    throw new System.ArgumentNullException("null");
                }

                if (System.Int64((startIndex >>> 0)).gte(System.Int64(value.length))) {
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }

                if (startIndex > ((value.length - 4) | 0)) {
                    throw new System.ArgumentException(System.BitConverter.arg_ArrayPlusOffTooSmall);
                }

                //return (uint)ToInt32(value, startIndex);
                return (value[startIndex] + (value[(startIndex + 1)] << 8) + (value[(startIndex + 2)] << 16) + (value[(startIndex + 3)] << 24));
            },
            toUInt64: function (value, startIndex) {
                if (value == null) {
                    throw new System.ArgumentNullException("null");
                }

                if (System.Int64((startIndex >>> 0)).gte(System.Int64(value.length))) {
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }

                if (startIndex > ((value.length - 8) | 0)) {
                    throw new System.ArgumentException(System.BitConverter.arg_ArrayPlusOffTooSmall);
                }

                return System.UInt64(value[startIndex]).add((System.UInt64(value[(startIndex + 1)]).shl(8))).add((System.UInt64(value[(startIndex + 2)]).shl(16))).add((System.UInt64(value[(startIndex + 3)]).shl(24))).add((System.UInt64(value[(startIndex + 4)]).shl(32))).add((System.UInt64(value[(startIndex + 5)]).shl(40))).add((System.UInt64(value[(startIndex + 6)]).shl(48))).add((System.UInt64(value[(startIndex + 7)]).shl(56)));
            },
            toSingle: function (value, startIndex) {
                if (value == null) {
                    throw new System.ArgumentNullException("null");
                }

                if (System.Int64((startIndex >>> 0)).gte(System.Int64(value.length))) {
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }

                if (startIndex > ((value.length - 4) | 0)) {
                    throw new System.ArgumentException(System.BitConverter.arg_ArrayPlusOffTooSmall);
                }

                var buffer = new ArrayBuffer(4);
                var view = new DataView(buffer);
                view.setUint8(0, value[((startIndex + 3) | 0)]);
                view.setUint8(1, value[((startIndex + 2) | 0)]);
                view.setUint8(2, value[((startIndex + 1) | 0)]);
                view.setUint8(3, value[((startIndex + 0) | 0)]);

                return view.getFloat32(0);
            },
            toDouble: function (value, startIndex) {
                if (value == null) {
                    throw new System.ArgumentNullException("value");
                }

                if (System.Int64((startIndex >>> 0)).gte(System.Int64(value.length))) {
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }

                if (startIndex > ((value.length - 8) | 0)) {
                    throw new System.ArgumentException(System.BitConverter.arg_ArrayPlusOffTooSmall);
                }

                var buffer = new ArrayBuffer(8);
                var view = new DataView(buffer);
                view.setUint8(0, value[((startIndex + 7) | 0)]);
                view.setUint8(1, value[((startIndex + 6) | 0)]);
                view.setUint8(2, value[((startIndex + 5) | 0)]);
                view.setUint8(3, value[((startIndex + 4) | 0)]);
                view.setUint8(4, value[((startIndex + 3) | 0)]);
                view.setUint8(5, value[((startIndex + 2) | 0)]);
                view.setUint8(6, value[((startIndex + 1) | 0)]);
                view.setUint8(7, value[((startIndex + 0) | 0)]);

                return view.getFloat64(0);
            },
            getHexValue: function (i) {
                if (i < 10) {
                    return ((((i + 48) | 0)) & 65535);
                }

                return ((((((i - 10) | 0) + 65) | 0)) & 65535);
            },
            toString$2: function (value, startIndex, length) {
                if (value == null) {
                    throw new System.ArgumentNullException("value");
                }

                if (startIndex < 0 || startIndex >= value.length && startIndex > 0) { // Don't throw for a 0 length array.
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }

                if (length < 0) {
                    throw new System.ArgumentOutOfRangeException("length");
                }

                if (startIndex > ((value.length - length) | 0)) {
                    throw new System.ArgumentException(System.BitConverter.arg_ArrayPlusOffTooSmall);
                }

                if (length === 0) {
                    return "";
                }

                if (length > (715827882)) {
                    // (Int32.MaxValue / 3) == 715,827,882 Bytes == 699 MB
                    throw new System.ArgumentOutOfRangeException("length", (715827882).toString());
                }

                var chArrayLength = (length * 3) | 0;

                var chArray = System.Array.init(chArrayLength, 0, System.Char);
                var i = 0;
                var index = startIndex;
                for (i = 0; i < chArrayLength; i = (i + 3) | 0) {
                    var b = value[Bridge.identity(index, (index = (index + 1) | 0))];
                    chArray[i] = System.BitConverter.getHexValue(((Bridge.Int.div(b, 16)) | 0));
                    chArray[((i + 1) | 0)] = System.BitConverter.getHexValue(b % 16);
                    chArray[((i + 2) | 0)] = 45;
                }

                // We don't need the last '-' character
                return String.fromCharCode.apply(null, chArray.slice(0, 0 + ((chArray.length - 1) | 0)));
            },
            toString: function (value) {
                if (value == null) {
                    throw new System.ArgumentNullException("value");
                }

                return System.BitConverter.toString$2(value, 0, value.length);
            },
            toString$1: function (value, startIndex) {
                if (value == null) {
                    throw new System.ArgumentNullException("value");
                }

                return System.BitConverter.toString$2(value, startIndex, ((value.length - startIndex) | 0));
            },
            toBoolean: function (value, startIndex) {
                if (value == null) {
                    throw new System.ArgumentNullException("value");
                }

                if (startIndex < 0) {
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }

                if (startIndex > ((value.length - 1) | 0)) {
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }

                return (value[startIndex] === 0) ? false : true;
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
            }
        }
    });
