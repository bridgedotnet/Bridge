    Bridge.define("System.IO.BinaryWriter", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                null: null,
                LargeByteBufferSize: 0
            },
            ctors: {
                init: function () {
                    this.null = new System.IO.BinaryWriter.ctor();
                    this.LargeByteBufferSize = 256;
                }
            }
        },
        fields: {
            outStream: null,
            _buffer: null,
            _leaveOpen: false,
            _tmpOneCharBuffer: null
        },
        props: {
            BaseStream: {
                get: function () {
                    this.flush();
                    return this.outStream;
                }
            }
        },
        alias: [
            "dispose", "System$IDisposable$dispose"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                this.outStream = System.IO.Stream.null;
                this._buffer = System.Array.init(16, 0, System.Byte);
                //_encoding = new UTF8Encoding(false, true);
                //_encoder = _encoding.GetEncoder();
            },
            $ctor1: function (output) {
                System.IO.BinaryWriter.$ctor2.call(this, output, false);
            },
            $ctor2: function (output, leaveOpen) {
                this.$initialize();
                if (output == null) {
                    throw new System.ArgumentNullException("output");
                }
                //if (encoding == null)
                //    throw new ArgumentNullException("encoding");
                if (!output.CanWrite) {
                    throw new System.ArgumentException();
                }

                this.outStream = output;
                this._buffer = System.Array.init(16, 0, System.Byte);
                //_encoding = encoding;
                //_encoder = _encoding.GetEncoder();
                this._leaveOpen = leaveOpen;
            }
        },
        methods: {
            close: function () {
                this.dispose$1(true);
            },
            dispose$1: function (disposing) {
                if (disposing) {
                    if (this._leaveOpen) {
                        this.outStream.flush();
                    } else {
                        this.outStream.close();
                    }
                }
            },
            dispose: function () {
                this.dispose$1(true);
            },
            flush: function () {
                this.outStream.flush();
            },
            seek: function (offset, origin) {
                return this.outStream.seek(System.Int64(offset), origin);
            },
            write: function (value) {
                this._buffer[System.Array.index(0, this._buffer)] = (value ? 1 : 0) & 255;
                this.outStream.write(this._buffer, 0, 1);
            },
            write$1: function (value) {
                this.outStream.writeByte(value);
            },
            write$8: function (value) {
                this.outStream.writeByte((value & 255));
            },
            write$2: function (buffer) {
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer");
                }
                this.outStream.write(buffer, 0, buffer.length);
            },
            write$3: function (buffer, index, count) {
                this.outStream.write(buffer, index, count);
            },
            write$4: function (value) {
                var TmpValue = System.Int64.clipu64(System.BitConverter.doubleToInt64Bits(value));
                this._buffer[System.Array.index(0, this._buffer)] = System.Int64.clipu8(TmpValue);
                this._buffer[System.Array.index(1, this._buffer)] = System.Int64.clipu8(TmpValue.shru(8));
                this._buffer[System.Array.index(2, this._buffer)] = System.Int64.clipu8(TmpValue.shru(16));
                this._buffer[System.Array.index(3, this._buffer)] = System.Int64.clipu8(TmpValue.shru(24));
                this._buffer[System.Array.index(4, this._buffer)] = System.Int64.clipu8(TmpValue.shru(32));
                this._buffer[System.Array.index(5, this._buffer)] = System.Int64.clipu8(TmpValue.shru(40));
                this._buffer[System.Array.index(6, this._buffer)] = System.Int64.clipu8(TmpValue.shru(48));
                this._buffer[System.Array.index(7, this._buffer)] = System.Int64.clipu8(TmpValue.shru(56));
                this.outStream.write(this._buffer, 0, 8);
            },
            write$5: function (value) {
                this._buffer[System.Array.index(0, this._buffer)] = value & 255;
                this._buffer[System.Array.index(1, this._buffer)] = (value >> 8) & 255;
                this.outStream.write(this._buffer, 0, 2);
            },
            write$10: function (value) {
                this._buffer[System.Array.index(0, this._buffer)] = value & 255;
                this._buffer[System.Array.index(1, this._buffer)] = (value >> 8) & 255;
                this.outStream.write(this._buffer, 0, 2);
            },
            write$6: function (value) {
                this._buffer[System.Array.index(0, this._buffer)] = value & 255;
                this._buffer[System.Array.index(1, this._buffer)] = (value >> 8) & 255;
                this._buffer[System.Array.index(2, this._buffer)] = (value >> 16) & 255;
                this._buffer[System.Array.index(3, this._buffer)] = (value >> 24) & 255;
                this.outStream.write(this._buffer, 0, 4);
            },
            write$11: function (value) {
                this._buffer[System.Array.index(0, this._buffer)] = value & 255;
                this._buffer[System.Array.index(1, this._buffer)] = (value >>> 8) & 255;
                this._buffer[System.Array.index(2, this._buffer)] = (value >>> 16) & 255;
                this._buffer[System.Array.index(3, this._buffer)] = (value >>> 24) & 255;
                this.outStream.write(this._buffer, 0, 4);
            },
            write$7: function (value) {
                this._buffer[System.Array.index(0, this._buffer)] = System.Int64.clipu8(value);
                this._buffer[System.Array.index(1, this._buffer)] = System.Int64.clipu8(value.shr(8));
                this._buffer[System.Array.index(2, this._buffer)] = System.Int64.clipu8(value.shr(16));
                this._buffer[System.Array.index(3, this._buffer)] = System.Int64.clipu8(value.shr(24));
                this._buffer[System.Array.index(4, this._buffer)] = System.Int64.clipu8(value.shr(32));
                this._buffer[System.Array.index(5, this._buffer)] = System.Int64.clipu8(value.shr(40));
                this._buffer[System.Array.index(6, this._buffer)] = System.Int64.clipu8(value.shr(48));
                this._buffer[System.Array.index(7, this._buffer)] = System.Int64.clipu8(value.shr(56));
                this.outStream.write(this._buffer, 0, 8);
            },
            write$12: function (value) {
                this._buffer[System.Array.index(0, this._buffer)] = System.Int64.clipu8(value);
                this._buffer[System.Array.index(1, this._buffer)] = System.Int64.clipu8(value.shru(8));
                this._buffer[System.Array.index(2, this._buffer)] = System.Int64.clipu8(value.shru(16));
                this._buffer[System.Array.index(3, this._buffer)] = System.Int64.clipu8(value.shru(24));
                this._buffer[System.Array.index(4, this._buffer)] = System.Int64.clipu8(value.shru(32));
                this._buffer[System.Array.index(5, this._buffer)] = System.Int64.clipu8(value.shru(40));
                this._buffer[System.Array.index(6, this._buffer)] = System.Int64.clipu8(value.shru(48));
                this._buffer[System.Array.index(7, this._buffer)] = System.Int64.clipu8(value.shru(56));
                this.outStream.write(this._buffer, 0, 8);
            },
            write$9: function (value) {
                var TmpValue = System.BitConverter.toUInt32(System.BitConverter.getBytes$6(value), 0);
                this._buffer[System.Array.index(0, this._buffer)] = TmpValue & 255;
                this._buffer[System.Array.index(1, this._buffer)] = (TmpValue >>> 8) & 255;
                this._buffer[System.Array.index(2, this._buffer)] = (TmpValue >>> 16) & 255;
                this._buffer[System.Array.index(3, this._buffer)] = (TmpValue >>> 24) & 255;
                this.outStream.write(this._buffer, 0, 4);
            },
            write7BitEncodedInt: function (value) {
                // Write out an int 7 bits at a time.  The high bit of the byte,
                // when on, tells reader to continue reading more bytes.
                var v = value >>> 0; // support negative numbers
                while (v >= 128) {
                    this.write$1(((((v | 128) >>> 0)) & 255));
                    v = v >>> 7;
                }
                this.write$1((v & 255));
            }
        }
    });
