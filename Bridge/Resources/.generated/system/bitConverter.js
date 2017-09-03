    Bridge.define("System.BitConverter", {
        statics: {
            fields: {
                isLittleEndian: false,
                arg_ArrayPlusOffTooSmall: null
            },
            ctors: {
                init: function () {
                    this.isLittleEndian = System.BitConverter.getIsLittleEndian();
                    this.arg_ArrayPlusOffTooSmall = "Destination array is not long enough to copy all the items in the collection. Check array index and length.";
                }
            },
            methods: {
                getBytes: function (value) {
                    return value ? System.Array.init([1], System.Byte) : System.Array.init([0], System.Byte);
                },
                getBytes$1: function (value) {
                    return System.BitConverter.getBytes$3(Bridge.Int.sxs(value & 65535));
                },
                getBytes$3: function (value) {
                    var view = System.BitConverter.view(2);
                    view.setInt16(0, value);

                    return System.BitConverter.getViewBytes(view);
                },
                getBytes$4: function (value) {
                    var view = System.BitConverter.view(4);
                    view.setInt32(0, value);

                    return System.BitConverter.getViewBytes(view);
                },
                getBytes$5: function (value) {
                    var view = System.BitConverter.getView(value);

                    return System.BitConverter.getViewBytes(view);
                },
                getBytes$7: function (value) {
                    var view = System.BitConverter.view(2);
                    view.setUint16(0, value);

                    return System.BitConverter.getViewBytes(view);
                },
                getBytes$8: function (value) {
                    var view = System.BitConverter.view(4);
                    view.setUint32(0, value);

                    return System.BitConverter.getViewBytes(view);
                },
                getBytes$9: function (value) {
                    var view = System.BitConverter.getView(System.Int64.clip64(value));

                    return System.BitConverter.getViewBytes(view);
                },
                getBytes$6: function (value) {
                    var view = System.BitConverter.view(4);
                    view.setFloat32(0, value);

                    return System.BitConverter.getViewBytes(view);
                },
                getBytes$2: function (value) {
                    if (isNaN(value)) {
                        if (System.BitConverter.isLittleEndian) {
                            return System.Array.init([0, 0, 0, 0, 0, 0, 248, 255], System.Byte);
                        } else {
                            return System.Array.init([255, 248, 0, 0, 0, 0, 0, 0], System.Byte);
                        }
                    }

                    var view = System.BitConverter.view(8);
                    view.setFloat64(0, value);

                    return System.BitConverter.getViewBytes(view);
                },
                toChar: function (value, startIndex) {
                    return ((System.BitConverter.toInt16(value, startIndex)) & 65535);
                },
                toInt16: function (value, startIndex) {
                    System.BitConverter.checkArguments(value, startIndex, 2);

                    var view = System.BitConverter.view(2);

                    System.BitConverter.setViewBytes(view, value, -1, startIndex);

                    return view.getInt16(0);
                },
                toInt32: function (value, startIndex) {
                    System.BitConverter.checkArguments(value, startIndex, 4);

                    var view = System.BitConverter.view(4);

                    System.BitConverter.setViewBytes(view, value, -1, startIndex);

                    return view.getInt32(0);
                },
                toInt64: function (value, startIndex) {
                    System.BitConverter.checkArguments(value, startIndex, 8);

                    var low = System.BitConverter.toInt32(value, startIndex);
                    var high = System.BitConverter.toInt32(value, ((startIndex + 4) | 0));

                    if (System.BitConverter.isLittleEndian) {
                        return System.Int64([low, high]);
                    }

                    return System.Int64([high, low]);
                },
                toUInt16: function (value, startIndex) {
                    return ((System.BitConverter.toInt16(value, startIndex)) & 65535);
                },
                toUInt32: function (value, startIndex) {
                    return ((System.BitConverter.toInt32(value, startIndex)) >>> 0);
                },
                toUInt64: function (value, startIndex) {
                    var l = System.BitConverter.toInt64(value, startIndex);

                    return System.UInt64([l.value.low, l.value.high]);
                },
                toSingle: function (value, startIndex) {
                    System.BitConverter.checkArguments(value, startIndex, 4);

                    var view = System.BitConverter.view(4);

                    System.BitConverter.setViewBytes(view, value, -1, startIndex);

                    return view.getFloat32(0);
                },
                toDouble: function (value, startIndex) {
                    System.BitConverter.checkArguments(value, startIndex, 8);

                    var view = System.BitConverter.view(8);

                    System.BitConverter.setViewBytes(view, value, -1, startIndex);

                    return view.getFloat64(0);
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

                    var chArrayLength = Bridge.Int.mul(length, 3);

                    var chArray = System.Array.init(chArrayLength, 0, System.Char);
                    var i = 0;
                    var index = startIndex;
                    for (i = 0; i < chArrayLength; i = (i + 3) | 0) {
                        var b = value[System.Array.index(Bridge.identity(index, (index = (index + 1) | 0)), value)];
                        chArray[System.Array.index(i, chArray)] = System.BitConverter.getHexValue(((Bridge.Int.div(b, 16)) | 0));
                        chArray[System.Array.index(((i + 1) | 0), chArray)] = System.BitConverter.getHexValue(b % 16);
                        chArray[System.Array.index(((i + 2) | 0), chArray)] = 45;
                    }

                    // We don't need the last '-' character
                    return System.String.fromCharArray(chArray, 0, ((chArray.length - 1) | 0));
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
                    System.BitConverter.checkArguments(value, startIndex, 1);

                    return (value[System.Array.index(startIndex, value)] === 0) ? false : true;
                },
                doubleToInt64Bits: function (value) {
                    var view = System.BitConverter.view(8);
                    view.setFloat64(0, value);

                    return System.Int64([view.getInt32(4), view.getInt32(0)]);
                },
                int64BitsToDouble: function (value) {
                    var view = System.BitConverter.getView(value);

                    return view.getFloat64(0);
                },
                getHexValue: function (i) {
                    if (i < 10) {
                        return ((((i + 48) | 0)) & 65535);
                    }

                    return ((((((i - 10) | 0) + 65) | 0)) & 65535);
                },
                getViewBytes: function (view, count, startIndex) {
                    if (count === void 0) { count = -1; }
                    if (startIndex === void 0) { startIndex = 0; }
                    if (count === -1) {
                        count = view.byteLength;
                    }

                    var r = System.Array.init(count, 0, System.Byte);

                    if (System.BitConverter.isLittleEndian) {
                        for (var i = (count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                            r[System.Array.index(i, r)] = view.getUint8(Bridge.identity(startIndex, (startIndex = (startIndex + 1) | 0)));
                        }
                    } else {
                        for (var i1 = 0; i1 < count; i1 = (i1 + 1) | 0) {
                            r[System.Array.index(i1, r)] = view.getUint8(Bridge.identity(startIndex, (startIndex = (startIndex + 1) | 0)));
                        }
                    }

                    return r;
                },
                setViewBytes: function (view, value, count, startIndex) {
                    if (count === void 0) { count = -1; }
                    if (startIndex === void 0) { startIndex = 0; }
                    if (count === -1) {
                        count = view.byteLength;
                    }

                    if (System.BitConverter.isLittleEndian) {
                        for (var i = (count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                            view.setUint8(i, value[System.Array.index(Bridge.identity(startIndex, (startIndex = (startIndex + 1) | 0)), value)]);
                        }
                    } else {
                        for (var i1 = 0; i1 < count; i1 = (i1 + 1) | 0) {
                            view.setUint8(i1, value[System.Array.index(Bridge.identity(startIndex, (startIndex = (startIndex + 1) | 0)), value)]);
                        }
                    }
                },
                view: function (length) {
                    var buffer = new ArrayBuffer(length);
                    var view = new DataView(buffer);

                    return view;
                },
                getView: function (value) {
                    var view = System.BitConverter.view(8);

                    view.setInt32(4, value.value.low);
                    view.setInt32(0, value.value.high);

                    return view;
                },
                getIsLittleEndian: function () {
                    var view = System.BitConverter.view(2);

                    view.setUint8(0, 170);
                    view.setUint8(1, 187);

                    if (view.getUint16(0) === 43707) {
                        return true;
                    }

                    return false;
                },
                checkArguments: function (value, startIndex, size) {
                    if (value == null) {
                        throw new System.ArgumentNullException("null");
                    }

                    if (System.Int64((startIndex >>> 0)).gte(System.Int64(value.length))) {
                        throw new System.ArgumentOutOfRangeException("startIndex");
                    }

                    if (startIndex > ((value.length - size) | 0)) {
                        throw new System.ArgumentException(System.BitConverter.arg_ArrayPlusOffTooSmall);
                    }
                }
            }
        }
    });
