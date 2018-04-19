    Bridge.define("System.IO.BinaryWriter", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                Null: null,
                LargeByteBufferSize: 0
            },
            ctors: {
                init: function () {
                    this.Null = new System.IO.BinaryWriter.ctor();
                    this.LargeByteBufferSize = 256;
                }
            }
        },
        fields: {
            OutStream: null,
            _buffer: null,
            _encoding: null,
            _leaveOpen: false,
            _tmpOneCharBuffer: null
        },
        props: {
            BaseStream: {
                get: function () {
                    this.Flush();
                    return this.OutStream;
                }
            }
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this.OutStream = System.IO.Stream.Null;
                this._buffer = System.Array.init(16, 0, System.Byte);
                this._encoding = new System.Text.UTF8Encoding.$ctor2(false, true);
            },
            $ctor1: function (output) {
                System.IO.BinaryWriter.$ctor3.call(this, output, new System.Text.UTF8Encoding.$ctor2(false, true), false);
            },
            $ctor2: function (output, encoding) {
                System.IO.BinaryWriter.$ctor3.call(this, output, encoding, false);
            },
            $ctor3: function (output, encoding, leaveOpen) {
                this.$initialize();
                if (output == null) {
                    throw new System.ArgumentNullException.$ctor1("output");
                }
                if (encoding == null) {
                    throw new System.ArgumentNullException.$ctor1("encoding");
                }
                if (!output.CanWrite) {
                    throw new System.ArgumentException.$ctor1("Argument_StreamNotWritable");
                }

                this.OutStream = output;
                this._buffer = System.Array.init(16, 0, System.Byte);
                this._encoding = encoding;
                this._leaveOpen = leaveOpen;
            }
        },
        methods: {
            Close: function () {
                this.Dispose$1(true);
            },
            Dispose$1: function (disposing) {
                if (disposing) {
                    if (this._leaveOpen) {
                        this.OutStream.Flush();
                    } else {
                        this.OutStream.Close();
                    }
                }
            },
            Dispose: function () {
                this.Dispose$1(true);
            },
            Flush: function () {
                this.OutStream.Flush();
            },
            Seek: function (offset, origin) {
                return this.OutStream.Seek(System.Int64(offset), origin);
            },
            Write: function (value) {
                this._buffer[System.Array.index(0, this._buffer)] = (value ? 1 : 0) & 255;
                this.OutStream.Write(this._buffer, 0, 1);
            },
            Write$1: function (value) {
                this.OutStream.WriteByte(value);
            },
            Write$12: function (value) {
                this.OutStream.WriteByte((value & 255));
            },
            Write$2: function (buffer) {
                if (buffer == null) {
                    throw new System.ArgumentNullException.$ctor1("buffer");
                }
                this.OutStream.Write(buffer, 0, buffer.length);
            },
            Write$3: function (buffer, index, count) {
                this.OutStream.Write(buffer, index, count);
            },
            Write$4: function (ch) {
                if (System.Char.isSurrogate(ch)) {
                    throw new System.ArgumentException.$ctor1("Arg_SurrogatesNotAllowedAsSingleChar");
                }

                var numBytes = 0;
                numBytes = this._encoding.GetBytes$3(System.Array.init([ch], System.Char), 0, 1, this._buffer, 0);

                this.OutStream.Write(this._buffer, 0, numBytes);
            },
            Write$5: function (chars) {
                if (chars == null) {
                    throw new System.ArgumentNullException.$ctor1("chars");
                }

                var bytes = this._encoding.GetBytes$1(chars, 0, chars.length);
                this.OutStream.Write(bytes, 0, bytes.length);
            },
            Write$6: function (chars, index, count) {
                var bytes = this._encoding.GetBytes$1(chars, index, count);
                this.OutStream.Write(bytes, 0, bytes.length);
            },
            Write$8: function (value) {
                var TmpValue = System.Int64.clipu64(System.BitConverter.doubleToInt64Bits(value));
                this._buffer[System.Array.index(0, this._buffer)] = System.Int64.clipu8(TmpValue);
                this._buffer[System.Array.index(1, this._buffer)] = System.Int64.clipu8(TmpValue.shru(8));
                this._buffer[System.Array.index(2, this._buffer)] = System.Int64.clipu8(TmpValue.shru(16));
                this._buffer[System.Array.index(3, this._buffer)] = System.Int64.clipu8(TmpValue.shru(24));
                this._buffer[System.Array.index(4, this._buffer)] = System.Int64.clipu8(TmpValue.shru(32));
                this._buffer[System.Array.index(5, this._buffer)] = System.Int64.clipu8(TmpValue.shru(40));
                this._buffer[System.Array.index(6, this._buffer)] = System.Int64.clipu8(TmpValue.shru(48));
                this._buffer[System.Array.index(7, this._buffer)] = System.Int64.clipu8(TmpValue.shru(56));
                this.OutStream.Write(this._buffer, 0, 8);
            },
            Write$7: function (value) {
                var buf = value.getBytes();
                this.OutStream.Write(buf, 0, 23);
            },
            Write$9: function (value) {
                this._buffer[System.Array.index(0, this._buffer)] = value & 255;
                this._buffer[System.Array.index(1, this._buffer)] = (value >> 8) & 255;
                this.OutStream.Write(this._buffer, 0, 2);
            },
            Write$15: function (value) {
                this._buffer[System.Array.index(0, this._buffer)] = value & 255;
                this._buffer[System.Array.index(1, this._buffer)] = (value >> 8) & 255;
                this.OutStream.Write(this._buffer, 0, 2);
            },
            Write$10: function (value) {
                this._buffer[System.Array.index(0, this._buffer)] = value & 255;
                this._buffer[System.Array.index(1, this._buffer)] = (value >> 8) & 255;
                this._buffer[System.Array.index(2, this._buffer)] = (value >> 16) & 255;
                this._buffer[System.Array.index(3, this._buffer)] = (value >> 24) & 255;
                this.OutStream.Write(this._buffer, 0, 4);
            },
            Write$16: function (value) {
                this._buffer[System.Array.index(0, this._buffer)] = value & 255;
                this._buffer[System.Array.index(1, this._buffer)] = (value >>> 8) & 255;
                this._buffer[System.Array.index(2, this._buffer)] = (value >>> 16) & 255;
                this._buffer[System.Array.index(3, this._buffer)] = (value >>> 24) & 255;
                this.OutStream.Write(this._buffer, 0, 4);
            },
            Write$11: function (value) {
                this._buffer[System.Array.index(0, this._buffer)] = System.Int64.clipu8(value);
                this._buffer[System.Array.index(1, this._buffer)] = System.Int64.clipu8(value.shr(8));
                this._buffer[System.Array.index(2, this._buffer)] = System.Int64.clipu8(value.shr(16));
                this._buffer[System.Array.index(3, this._buffer)] = System.Int64.clipu8(value.shr(24));
                this._buffer[System.Array.index(4, this._buffer)] = System.Int64.clipu8(value.shr(32));
                this._buffer[System.Array.index(5, this._buffer)] = System.Int64.clipu8(value.shr(40));
                this._buffer[System.Array.index(6, this._buffer)] = System.Int64.clipu8(value.shr(48));
                this._buffer[System.Array.index(7, this._buffer)] = System.Int64.clipu8(value.shr(56));
                this.OutStream.Write(this._buffer, 0, 8);
            },
            Write$17: function (value) {
                this._buffer[System.Array.index(0, this._buffer)] = System.Int64.clipu8(value);
                this._buffer[System.Array.index(1, this._buffer)] = System.Int64.clipu8(value.shru(8));
                this._buffer[System.Array.index(2, this._buffer)] = System.Int64.clipu8(value.shru(16));
                this._buffer[System.Array.index(3, this._buffer)] = System.Int64.clipu8(value.shru(24));
                this._buffer[System.Array.index(4, this._buffer)] = System.Int64.clipu8(value.shru(32));
                this._buffer[System.Array.index(5, this._buffer)] = System.Int64.clipu8(value.shru(40));
                this._buffer[System.Array.index(6, this._buffer)] = System.Int64.clipu8(value.shru(48));
                this._buffer[System.Array.index(7, this._buffer)] = System.Int64.clipu8(value.shru(56));
                this.OutStream.Write(this._buffer, 0, 8);
            },
            Write$13: function (value) {
                var TmpValue = System.BitConverter.toUInt32(System.BitConverter.getBytes$6(value), 0);
                this._buffer[System.Array.index(0, this._buffer)] = TmpValue & 255;
                this._buffer[System.Array.index(1, this._buffer)] = (TmpValue >>> 8) & 255;
                this._buffer[System.Array.index(2, this._buffer)] = (TmpValue >>> 16) & 255;
                this._buffer[System.Array.index(3, this._buffer)] = (TmpValue >>> 24) & 255;
                this.OutStream.Write(this._buffer, 0, 4);
            },
            Write$14: function (value) {
                if (value == null) {
                    throw new System.ArgumentNullException.$ctor1("value");
                }

                var buffer = this._encoding.GetBytes$2(value);
                var len = buffer.length;
                this.Write7BitEncodedInt(len);
                this.OutStream.Write(buffer, 0, len);
            },
            Write7BitEncodedInt: function (value) {
                var v = value >>> 0;
                while (v >= 128) {
                    this.Write$1(((((v | 128) >>> 0)) & 255));
                    v = v >>> 7;
                }
                this.Write$1((v & 255));
            }
        }
    });
