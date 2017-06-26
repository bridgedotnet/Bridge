    Bridge.define("IAsyncResult", {
        $kind: "interface"
    });

    Bridge.define("SeekOrigin", {
        $kind: "enum",
        statics: {
            fields: {
                Begin: 0,
                Current: 1,
                End: 2
            }
        }
    });

    Bridge.define("System.IO.BinaryReader", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                MaxCharBytesSize: 0
            },
            ctors: {
                init: function () {
                    this.MaxCharBytesSize = 128;
                }
            }
        },
        fields: {
            m_stream: null,
            m_buffer: null,
            m_isMemoryStream: false
        },
        props: {
            BaseStream: {
                get: function () {
                    return this.m_stream;
                }
            }
        },
        alias: ["dispose", "System$IDisposable$dispose"],
        ctors: {
            ctor: function (input) {
                this.$initialize();
                if (input == null) {
                    throw new System.ArgumentNullException("input");
                }
                if (!input.CanRead) {
                    throw new System.ArgumentException();
                }
                this.m_stream = input;
                //this.m_decoder = encoding.GetDecoder();
                //this.m_maxCharsSize = encoding.GetMaxCharCount(128);
                //int maxByteCount = encoding.GetMaxByteCount(1);
                //if (maxByteCount < 16)
                //{
                //    maxByteCount = 16;
                //}
                this.m_buffer = System.Array.init(8, 0, System.Byte);
                //this.m_2BytesPerChar = encoding is UnicodeEncoding;
                this.m_isMemoryStream = Bridge.referenceEquals(Bridge.getType(this.m_stream), System.IO.MemoryStream);
                //this.m_leaveOpen = leaveOpen;
            }
        },
        methods: {
            close: function () {
                this.dispose$1(true);
            },
            dispose$1: function (disposing) {
                if (disposing) {
                    var mStream = this.m_stream;
                    this.m_stream = null;
                    if (mStream != null) {
                        mStream.close();
                    }
                }
                this.m_stream = null;
                this.m_buffer = null;
                //this.m_decoder = null;
                //this.m_charBytes = null;
                //this.m_singleChar = null;
                //this.m_charBuffer = null;
            },
            dispose: function () {
                this.dispose$1(true);
            },
            fillBuffer: function (numBytes) {
                if (this.m_buffer != null && (numBytes < 0 || numBytes > this.m_buffer.length)) {
                    throw new System.ArgumentOutOfRangeException("numBytes");
                }
                var num = 0;
                var num1 = 0;
                if (this.m_stream == null) {
                    throw new System.Exception();
                }
                if (numBytes === 1) {
                    num1 = this.m_stream.readByte();
                    if (num1 === -1) {
                        throw new System.Exception();
                    }
                    this.m_buffer[System.Array.index(0, this.m_buffer)] = num1 & 255;
                    return;
                }
                do {
                    num1 = this.m_stream.read(this.m_buffer, num, ((numBytes - num) | 0));
                    if (num1 === 0) {
                        throw new System.Exception();
                    }
                    num = (num + num1) | 0;
                } while (num < numBytes);
            },
            read: function (buffer, index, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer");
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }
                if (((buffer.length - index) | 0) < count) {
                    throw new System.ArgumentException();
                }
                if (this.m_stream == null) {
                    throw new System.Exception();
                }
                return this.m_stream.read(buffer, index, count);
            },
            read7BitEncodedInt: function () {
                var num;
                var num1 = 0;
                var num2 = 0;
                do {
                    if (num2 === 35) {
                        throw new System.FormatException();
                    }
                    num = this.readByte();
                    num1 = num1 | (num & 127) << (num2 & 31);
                    num2 = (num2 + 7) | 0;
                } while ((num & 128) !== 0);
                return num1;
            },
            readBoolean: function () {
                this.fillBuffer(1);
                return this.m_buffer[System.Array.index(0, this.m_buffer)] !== 0;
            },
            readByte: function () {
                if (this.m_stream == null) {
                    throw new System.Exception();
                }
                var num = this.m_stream.readByte();
                if (num === -1) {
                    throw new System.Exception();
                }
                return (num & 255);
            },
            readBytes: function (count) {
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }
                if (this.m_stream == null) {
                    throw new System.Exception();
                }
                if (count === 0) {
                    return System.Array.init([], System.Byte);
                }
                var numArray = System.Array.init(count, 0, System.Byte);
                var num = 0;
                do {
                    var num1 = this.m_stream.read(numArray, num, count);
                    if (num1 === 0) {
                        break;
                    }
                    num = (num + num1) | 0;
                    count = (count - num1) | 0;
                } while (count > 0);
                if (num !== numArray.length) {
                    var numArray1 = System.Array.init(num, 0, System.Byte);
                    System.Array.copy(numArray, 0, numArray1, 0, num);
                    numArray = numArray1;
                }
                return numArray;
            },
            readDouble: function () {
                this.fillBuffer(8);
                var mBuffer = (this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(2, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(3, this.m_buffer)] << 24) >>> 0;
                var num = (this.m_buffer[System.Array.index(4, this.m_buffer)] | this.m_buffer[System.Array.index(5, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(6, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(7, this.m_buffer)] << 24) >>> 0;
                return System.BitConverter.int64BitsToDouble(System.Int64.clip64(System.UInt64(num).shl(32).or(System.UInt64(mBuffer))));
            },
            readInt16: function () {
                this.fillBuffer(2);
                return Bridge.Int.sxs((this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8) & 65535);
            },
            readInt32: function () {
                if (this.m_isMemoryStream) {
                    if (this.m_stream == null) {
                        throw new System.Exception();
                    }
                    return (Bridge.as(this.m_stream, System.IO.MemoryStream)).internalReadInt32();
                }
                this.fillBuffer(4);
                return this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(2, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(3, this.m_buffer)] << 24;
            },
            readInt64: function () {
                this.fillBuffer(8);
                var mBuffer = (this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(2, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(3, this.m_buffer)] << 24) >>> 0;
                var num = (this.m_buffer[System.Array.index(4, this.m_buffer)] | this.m_buffer[System.Array.index(5, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(6, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(7, this.m_buffer)] << 24) >>> 0;
                return System.Int64.clip64(System.UInt64(num).shl(32).or(System.UInt64(mBuffer)));
            },
            readSByte: function () {
                this.fillBuffer(1);
                return Bridge.Int.sxb((this.m_buffer[System.Array.index(0, this.m_buffer)]) & 255);
            },
            readSingle: function () {
                //unsafe
                //{
                this.fillBuffer(4);
                var mBuffer = (this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(2, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(3, this.m_buffer)] << 24) >>> 0;
                return System.BitConverter.toSingle(System.BitConverter.getBytes$8(mBuffer), 0);
                //}
            },
            readUInt16: function () {
                this.fillBuffer(2);
                return ((this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8) & 65535);
            },
            readUInt32: function () {
                this.fillBuffer(4);
                return ((this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(2, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(3, this.m_buffer)] << 24) >>> 0);
            },
            readUInt64: function () {
                this.fillBuffer(8);
                var mBuffer = (this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(2, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(3, this.m_buffer)] << 24) >>> 0;
                var num = (this.m_buffer[System.Array.index(4, this.m_buffer)] | this.m_buffer[System.Array.index(5, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(6, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(7, this.m_buffer)] << 24) >>> 0;
                return System.UInt64(num).shl(32).or(System.UInt64(mBuffer));
            }
        }
    });

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
        alias: ["dispose", "System$IDisposable$dispose"],
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

    Bridge.define("System.IO.Stream", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                null: null,
                _DefaultCopyBufferSize: 0
            },
            ctors: {
                init: function () {
                    this.null = new System.IO.Stream.NullStream();
                    this._DefaultCopyBufferSize = 81920;
                }
            },
            methods: {
                synchronized: function (stream) {
                    if (stream == null) {
                        throw new System.ArgumentNullException("stream");
                    }
                    if (Bridge.is(stream, System.IO.Stream.SyncStream)) {
                        return stream;
                    }

                    return new System.IO.Stream.SyncStream(stream);
                },
                blockingEndRead: function (asyncResult) {

                    return System.IO.Stream.SynchronousAsyncResult.endRead(asyncResult);
                },
                blockingEndWrite: function (asyncResult) {
                    System.IO.Stream.SynchronousAsyncResult.endWrite(asyncResult);
                }
            }
        },
        props: {
            CanTimeout: {
                get: function () {
                    return false;
                }
            },
            ReadTimeout: {
                get: function () {
                    throw new System.InvalidOperationException();
                },
                set: function (value) {
                    throw new System.InvalidOperationException();
                }
            },
            WriteTimeout: {
                get: function () {
                    throw new System.InvalidOperationException();
                },
                set: function (value) {
                    throw new System.InvalidOperationException();
                }
            }
        },
        alias: ["dispose", "System$IDisposable$dispose"],
        methods: {
            copyTo: function (destination) {
                if (destination == null) {
                    throw new System.ArgumentNullException("destination");
                }
                if (!this.CanRead && !this.CanWrite) {
                    throw new System.Exception();
                }
                if (!destination.CanRead && !destination.CanWrite) {
                    throw new System.Exception();
                }
                if (!this.CanRead) {
                    throw new System.NotSupportedException();
                }
                if (!destination.CanWrite) {
                    throw new System.NotSupportedException();
                }

                this.internalCopyTo(destination, System.IO.Stream._DefaultCopyBufferSize);
            },
            copyTo$1: function (destination, bufferSize) {
                if (destination == null) {
                    throw new System.ArgumentNullException("destination");
                }
                if (bufferSize <= 0) {
                    throw new System.ArgumentOutOfRangeException("bufferSize");
                }
                if (!this.CanRead && !this.CanWrite) {
                    throw new System.Exception();
                }
                if (!destination.CanRead && !destination.CanWrite) {
                    throw new System.Exception();
                }
                if (!this.CanRead) {
                    throw new System.NotSupportedException();
                }
                if (!destination.CanWrite) {
                    throw new System.NotSupportedException();
                }

                this.internalCopyTo(destination, bufferSize);
            },
            internalCopyTo: function (destination, bufferSize) {

                var buffer = System.Array.init(bufferSize, 0, System.Byte);
                var read;
                while (((read = this.read(buffer, 0, buffer.length))) !== 0) {
                    destination.write(buffer, 0, read);
                }
            },
            close: function () {
                /* These are correct, but we'd have to fix PipeStream & NetworkStream very carefully.
                Contract.Ensures(CanRead == false);
                Contract.Ensures(CanWrite == false);
                Contract.Ensures(CanSeek == false);
                */

                this.dispose$1(true);
                //GC.SuppressFinalize(this);
            },
            dispose: function () {
                /* These are correct, but we'd have to fix PipeStream & NetworkStream very carefully.
                Contract.Ensures(CanRead == false);
                Contract.Ensures(CanWrite == false);
                Contract.Ensures(CanSeek == false);
                */

                this.close();
            },
            dispose$1: function (disposing) {
                // Note: Never change this to call other virtual methods on Stream
                // like Write, since the state on subclasses has already been 
                // torn down.  This is the last code to run on cleanup for a stream.
            },
            beginRead: function (buffer, offset, count, callback, state) {
                return this.beginReadInternal(buffer, offset, count, callback, state, false);
            },
            beginReadInternal: function (buffer, offset, count, callback, state, serializeAsynchronously) {
                if (!this.CanRead) {
                    throw new System.NotSupportedException();
                }

                return this.blockingBeginRead(buffer, offset, count, callback, state);
            },
            endRead: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                return System.IO.Stream.blockingEndRead(asyncResult);
            },
            beginWrite: function (buffer, offset, count, callback, state) {
                return this.beginWriteInternal(buffer, offset, count, callback, state, false);
            },
            beginWriteInternal: function (buffer, offset, count, callback, state, serializeAsynchronously) {
                if (!this.CanWrite) {
                    throw new System.NotSupportedException();
                }
                return this.blockingBeginWrite(buffer, offset, count, callback, state);
            },
            endWrite: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                System.IO.Stream.blockingEndWrite(asyncResult);
            },
            readByte: function () {

                var oneByteArray = System.Array.init(1, 0, System.Byte);
                var r = this.read(oneByteArray, 0, 1);
                if (r === 0) {
                    return -1;
                }
                return oneByteArray[System.Array.index(0, oneByteArray)];
            },
            writeByte: function (value) {
                var oneByteArray = System.Array.init(1, 0, System.Byte);
                oneByteArray[System.Array.index(0, oneByteArray)] = value;
                this.write(oneByteArray, 0, 1);
            },
            objectInvariant: function () { },
            blockingBeginRead: function (buffer, offset, count, callback, state) {

                // To avoid a race with a stream's position pointer & generating ---- 
                // conditions with internal buffer indexes in our own streams that 
                // don't natively support async IO operations when there are multiple 
                // async requests outstanding, we will block the application's main
                // thread and do the IO synchronously.  
                // This can't perform well - use a different approach.
                var asyncResult;
                try {
                    var numRead = this.read(buffer, offset, count);
                    asyncResult = new System.IO.Stream.SynchronousAsyncResult.$ctor1(numRead, state);
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    var ex;
                    if (Bridge.is($e1, System.IO.IOException)) {
                        ex = $e1;
                        asyncResult = new System.IO.Stream.SynchronousAsyncResult.ctor(ex, state, false);
                    } else {
                        throw $e1;
                    }
                }

                if (!Bridge.staticEquals(callback, null)) {
                    callback(asyncResult);
                }

                return asyncResult;
            },
            blockingBeginWrite: function (buffer, offset, count, callback, state) {

                // To avoid a race with a stream's position pointer & generating ---- 
                // conditions with internal buffer indexes in our own streams that 
                // don't natively support async IO operations when there are multiple 
                // async requests outstanding, we will block the application's main
                // thread and do the IO synchronously.  
                // This can't perform well - use a different approach.
                var asyncResult;
                try {
                    this.write(buffer, offset, count);
                    asyncResult = new System.IO.Stream.SynchronousAsyncResult.$ctor2(state);
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    var ex;
                    if (Bridge.is($e1, System.IO.IOException)) {
                        ex = $e1;
                        asyncResult = new System.IO.Stream.SynchronousAsyncResult.ctor(ex, state, true);
                    } else {
                        throw $e1;
                    }
                }

                if (!Bridge.staticEquals(callback, null)) {
                    callback(asyncResult);
                }

                return asyncResult;
            }
        }
    });

    Bridge.define("System.IO.IOException", {
        inherits: [System.Exception],
        fields: {
            _maybeFullPath: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Exception.ctor.call(this);
                //base.SetErrorCode(-2146232800);
            },
            $ctor1: function (message) {
                this.$initialize();
                System.Exception.ctor.call(this);
                //base.SetErrorCode(-2146232800);
            },
            $ctor3: function (message, hresult) {
                this.$initialize();
                System.Exception.ctor.call(this, message);
                //base.SetErrorCode(hresult);
            },
            $ctor4: function (message, hresult, maybeFullPath) {
                this.$initialize();
                System.Exception.ctor.call(this, message);
                //base.SetErrorCode(hresult);
                this._maybeFullPath = maybeFullPath;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.Exception.ctor.call(this, message, innerException);
                //base.SetErrorCode(-2146232800);
            }
        }
    });

    Bridge.define("System.IO.FileStream", {
        inherits: [System.IO.Stream],
        fields: {
            _buffer: null
        },
        props: {
            CanRead: {
                get: function () {
                    return true;
                }
            },
            CanSeek: {
                get: function () {
                    return false;
                }
            },
            CanWrite: {
                get: function () {
                    return false;
                }
            },
            Length: {
                get: function () {
                    return System.Int64(this._buffer.byteLength);
                }
            },
            Position: System.Int64(0)
        },
        ctors: {
            ctor: function (path, mode) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
                if (Bridge.isNode) {
                    var fs = require("fs");
                    this._buffer = fs.readFileSync(path);
                } else {
                    var request = new XMLHttpRequest();
                    request.open("GET", path, false);
                    request.send(null);
                    request.responseType = "ArrayBuffer";
                    this._buffer = request.response;
                }
            }
        },
        methods: {
            flush: function () { },
            read: function (buffer, offset, count) {
                
            if (buffer == null)
            {
                throw new System.ArgumentNullException("buffer");
            }
            if (offset < 0)
            {
                throw new System.ArgumentOutOfRangeException("offset");
            }
            if (count < 0)
            {
                throw new System.ArgumentOutOfRangeException("count");
            }
            if (this.Length.sub(System.Int64(offset)).lt(System.Int64(count)))
            {
                throw new System.ArgumentException();
            }
            if (!this._isOpen)
            {
                throw new System.Exception();
            }
            var num = this.Length.sub(this.Position);
            if (num.gt(System.Int64(count)))
            {
                num = System.Int64(count);
            }
            if (num.lte(System.Int64(0)))
            {
                return 0;
            }
            if (num.gt(System.Int64(8)))
            {
                for (var n = 0; System.Int64(n).lt(num); n = (n + 1) | 0)
                {
                    buffer[System.Array.index(((n + offset) | 0), buffer)] = this._buffer[System.Array.index(System.Int64.toNumber(this.Position.add(System.Int64(n))), this._buffer)];
                }
            }
            else
            {
                var num1 = num;
                while (true)
                {
                    var num2 = num1.sub(System.Int64(1));
                    num1 = num2;
                    if (num2.lt(System.Int64(0)))
                    {
                        break;
                    }
                    buffer[System.Array.index(System.Int64.toNumber(System.Int64(offset).add(num1)), buffer)] = this._buffer[System.Array.index(System.Int64.toNumber(this.Position.add(num1)), this._buffer)];
                }
            }
            this.Position = this.Position.add(num);
            return System.Int64.clip32(num);
            },
            seek: function (offset, origin) {
                throw new System.NotImplementedException();
            },
            setLength: function (value) {
                throw new System.NotImplementedException();
            },
            write: function (buffer, offset, count) {
                throw new System.NotImplementedException();
            }
        }
    });

    Bridge.define("System.IO.MemoryStream", {
        inherits: [System.IO.Stream],
        statics: {
            fields: {
                MemStreamMaxLength: 0
            },
            ctors: {
                init: function () {
                    this.MemStreamMaxLength = 2147483647;
                }
            }
        },
        fields: {
            _buffer: null,
            _origin: 0,
            _position: 0,
            _length: 0,
            _capacity: 0,
            _expandable: false,
            _writable: false,
            _exposable: false,
            _isOpen: false
        },
        props: {
            CanRead: {
                get: function () {
                    return this._isOpen;
                }
            },
            CanSeek: {
                get: function () {
                    return this._isOpen;
                }
            },
            CanWrite: {
                get: function () {
                    return this._writable;
                }
            },
            Capacity: {
                get: function () {
                    if (!this._isOpen) {
                        throw new System.Exception();
                    }
                    return ((this._capacity - this._origin) | 0);
                },
                set: function (value) {
                    if (System.Int64(value).lt(this.Length)) {
                        throw new System.ArgumentOutOfRangeException("value");
                    }
                    if (!this._isOpen) {
                        throw new System.Exception();
                    }
                    if (!this._expandable && value !== this.Capacity) {
                        throw new System.NotSupportedException();
                    }
                    if (this._expandable && value !== this._capacity) {
                        if (value <= 0) {
                            this._buffer = null;
                        } else {
                            var numArray = System.Array.init(value, 0, System.Byte);
                            if (this._length > 0) {
                                System.Array.copy(this._buffer, 0, numArray, 0, this._length);
                            }
                            this._buffer = numArray;
                        }
                        this._capacity = value;
                    }
                }
            },
            Length: {
                get: function () {
                    if (!this._isOpen) {
                        throw new System.Exception();
                    }
                    return System.Int64(((this._length - this._origin) | 0));
                }
            },
            Position: {
                get: function () {
                    if (!this._isOpen) {
                        throw new System.Exception();
                    }
                    return System.Int64(((this._position - this._origin) | 0));
                },
                set: function (value) {
                    if (value.lt(System.Int64(0))) {
                        throw new System.ArgumentOutOfRangeException("value");
                    }
                    if (!this._isOpen) {
                        throw new System.Exception();
                    }
                    if (value.gt(System.Int64(2147483647))) {
                        throw new System.ArgumentOutOfRangeException("value");
                    }
                    this._position = (this._origin + System.Int64.clip32(value)) | 0;
                }
            }
        },
        ctors: {
            ctor: function () {
                System.IO.MemoryStream.$ctor6.call(this, 0);
            },
            $ctor6: function (capacity) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
                if (capacity < 0) {
                    throw new System.ArgumentOutOfRangeException("capacity");
                }
                this._buffer = System.Array.init(capacity, 0, System.Byte);
                this._capacity = capacity;
                this._expandable = true;
                this._writable = true;
                this._exposable = true;
                this._origin = 0;
                this._isOpen = true;
            },
            $ctor1: function (buffer) {
                System.IO.MemoryStream.$ctor2.call(this, buffer, true);
            },
            $ctor2: function (buffer, writable) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer");
                }
                this._buffer = buffer;
                var length = buffer.length;
                var num = length;
                this._capacity = length;
                this._length = num;
                this._writable = writable;
                this._exposable = false;
                this._origin = 0;
                this._isOpen = true;
            },
            $ctor3: function (buffer, index, count) {
                System.IO.MemoryStream.$ctor5.call(this, buffer, index, count, true, false);
            },
            $ctor4: function (buffer, index, count, writable) {
                System.IO.MemoryStream.$ctor5.call(this, buffer, index, count, writable, false);
            },
            $ctor5: function (buffer, index, count, writable, publiclyVisible) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer");
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }
                if (((buffer.length - index) | 0) < count) {
                    throw new System.ArgumentException();
                }
                this._buffer = buffer;
                var num = index;
                var num1 = num;
                this._position = num;
                this._origin = num1;
                var num2 = (index + count) | 0;
                num1 = num2;
                this._capacity = num2;
                this._length = num1;
                this._writable = writable;
                this._exposable = publiclyVisible;
                this._expandable = false;
                this._isOpen = true;
            }
        },
        methods: {
            dispose$1: function (disposing) {
                try {
                    if (disposing) {
                        this._isOpen = false;
                        this._writable = false;
                        this._expandable = false;
                        //this._lastReadTask = null;
                    }
                }
                finally {
                    System.IO.Stream.prototype.dispose$1.call(this, disposing);
                }
            },
            ensureCapacity: function (value) {
                if (value < 0) {
                    throw new System.IO.IOException.ctor();
                }
                if (value <= this._capacity) {
                    return false;
                }
                var num = value;
                if (num < 256) {
                    num = 256;
                }
                if (num < ((this._capacity * 2) | 0)) {
                    num = (this._capacity * 2) | 0;
                }
                if (((this._capacity * 2) | 0) > 2147483591) {
                    num = (value > 2147483591 ? value : 2147483591);
                }
                this.Capacity = num;
                return true;
            },
            ensureWriteable: function () {
                if (!this.CanWrite) {
                    throw new System.NotSupportedException();
                }
            },
            flush: function () { },
            getBuffer: function () {
                if (!this._exposable) {
                    throw new System.Exception();
                }
                return this._buffer;
            },
            internalEmulateRead: function (count) {
                if (!this._isOpen) {
                    throw new System.Exception();
                }
                var num = (this._length - this._position) | 0;
                if (num > count) {
                    num = count;
                }
                if (num < 0) {
                    num = 0;
                }
                this._position = (this._position + num) | 0;
                return num;
            },
            internalGetBuffer: function () {
                return this._buffer;
            },
            internalGetOriginAndLength: function (origin, length) {
                if (!this._isOpen) {
                    throw new System.Exception();
                }
                origin.v = this._origin;
                length.v = this._length;
            },
            internalGetPosition: function () {
                if (!this._isOpen) {
                    throw new System.Exception();
                }
                return this._position;
            },
            internalReadInt32: function () {
                if (!this._isOpen) {
                    throw new System.Exception();
                }
                var num = (this._position + 4) | 0;
                var num1 = num;
                this._position = num;
                var num2 = num1;
                if (num2 > this._length) {
                    this._position = this._length;
                    throw new System.IO.IOException.ctor();
                }
                return this._buffer[System.Array.index(((num2 - 4) | 0), this._buffer)] | this._buffer[System.Array.index(((num2 - 3) | 0), this._buffer)] << 8 | this._buffer[System.Array.index(((num2 - 2) | 0), this._buffer)] << 16 | this._buffer[System.Array.index(((num2 - 1) | 0), this._buffer)] << 24;
            },
            read: function (buffer, offset, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer");
                }
                if (offset < 0) {
                    throw new System.ArgumentOutOfRangeException("offset");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }
                if (((buffer.length - offset) | 0) < count) {
                    throw new System.ArgumentException();
                }
                if (!this._isOpen) {
                    throw new System.Exception();
                }
                var num = (this._length - this._position) | 0;
                if (num > count) {
                    num = count;
                }
                if (num <= 0) {
                    return 0;
                }
                if (num > 8) {
                    System.Array.copy(this._buffer, this._position, buffer, offset, num);
                } else {
                    var num1 = num;
                    while (true) {
                        var num2 = (num1 - 1) | 0;
                        num1 = num2;
                        if (num2 < 0) {
                            break;
                        }
                        buffer[System.Array.index(((offset + num1) | 0), buffer)] = this._buffer[System.Array.index(((this._position + num1) | 0), this._buffer)];
                    }
                }
                this._position = (this._position + num) | 0;
                return num;
            },
            readByte: function () {
                if (!this._isOpen) {
                    throw new System.Exception();
                }
                if (this._position >= this._length) {
                    return -1;
                }
                var numArray = this._buffer;
                var num = this._position;
                this._position = (num + 1) | 0;
                return numArray[System.Array.index(num, numArray)];
            },
            seek: function (offset, loc) {
                if (!this._isOpen) {
                    throw new System.Exception();
                }
                if (offset.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException("offset");
                }
                switch (loc) {
                    case SeekOrigin.Begin: 
                        {
                            var num = (this._origin + System.Int64.clip32(offset)) | 0;
                            if (offset.lt(System.Int64(0)) || num < this._origin) {
                                throw new System.IO.IOException.ctor();
                            }
                            this._position = num;
                            break;
                        }
                    case SeekOrigin.Current: 
                        {
                            var num1 = (this._position + System.Int64.clip32(offset)) | 0;
                            if (System.Int64(this._position).add(offset).lt(System.Int64(this._origin)) || num1 < this._origin) {
                                throw new System.IO.IOException.ctor();
                            }
                            this._position = num1;
                            break;
                        }
                    case SeekOrigin.End: 
                        {
                            var num2 = (this._length + System.Int64.clip32(offset)) | 0;
                            if (System.Int64(this._length).add(offset).lt(System.Int64(this._origin)) || num2 < this._origin) {
                                throw new System.IO.IOException.ctor();
                            }
                            this._position = num2;
                            break;
                        }
                    default: 
                        {
                            throw new System.ArgumentException();
                        }
                }
                return System.Int64(this._position);
            },
            setLength: function (value) {
                if (value.lt(System.Int64(0)) || value.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException("value");
                }
                this.ensureWriteable();
                if (value.gt(System.Int64((((2147483647 - this._origin) | 0))))) {
                    throw new System.ArgumentOutOfRangeException("value");
                }
                var num = (this._origin + System.Int64.clip32(value)) | 0;
                if (!this.ensureCapacity(num) && num > this._length) {
                    System.Array.fill(this._buffer, 0, this._length, ((num - this._length) | 0));
                }
                this._length = num;
                if (this._position > num) {
                    this._position = num;
                }
            },
            toArray: function () {
                var numArray = System.Array.init(((this._length - this._origin) | 0), 0, System.Byte);
                System.Array.copy(this._buffer, this._origin, numArray, 0, ((this._length - this._origin) | 0));
                return numArray;
            },
            tryGetBuffer: function (buffer) {
                if (!this._exposable) {
                    buffer.v = new System.ArraySegment();
                    return false;
                }
                buffer.v = new System.ArraySegment(this._buffer, this._origin, ((this._length - this._origin) | 0));
                return true;
            },
            write: function (buffer, offset, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer");
                }
                if (offset < 0) {
                    throw new System.ArgumentOutOfRangeException("offset");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }
                if (((buffer.length - offset) | 0) < count) {
                    throw new System.ArgumentException();
                }
                if (!this._isOpen) {
                    throw new System.Exception();
                }
                this.ensureWriteable();
                var num = (this._position + count) | 0;
                if (num < 0) {
                    throw new System.IO.IOException.ctor();
                }
                if (num > this._length) {
                    var flag = this._position > this._length;
                    if (num > this._capacity && this.ensureCapacity(num)) {
                        flag = false;
                    }
                    if (flag) {
                        System.Array.fill(this._buffer, 0, this._length, ((num - this._length) | 0));
                    }
                    this._length = num;
                }
                if (count > 8 || Bridge.referenceEquals(buffer, this._buffer)) {
                    System.Array.copy(buffer, offset, this._buffer, this._position, count);
                } else {
                    var num1 = count;
                    while (true) {
                        var num2 = (num1 - 1) | 0;
                        num1 = num2;
                        if (num2 < 0) {
                            break;
                        }
                        this._buffer[System.Array.index(((this._position + num1) | 0), this._buffer)] = buffer[System.Array.index(((offset + num1) | 0), buffer)];
                    }
                }
                this._position = num;
            },
            writeByte: function (value) {
                if (!this._isOpen) {
                    throw new System.Exception();
                }
                this.ensureWriteable();
                if (this._position >= this._length) {
                    var num = (this._position + 1) | 0;
                    var flag = this._position > this._length;
                    if (num >= this._capacity && this.ensureCapacity(num)) {
                        flag = false;
                    }
                    if (flag) {
                        System.Array.fill(this._buffer, 0, this._length, ((this._position - this._length) | 0));
                    }
                    this._length = num;
                }
                var numArray = this._buffer;
                var num1 = this._position;
                this._position = (num1 + 1) | 0;
                numArray[System.Array.index(num1, numArray)] = value;
            },
            writeTo: function (stream) {
                if (stream == null) {
                    throw new System.ArgumentNullException("stream");
                }
                if (!this._isOpen) {
                    throw new System.Exception();
                }
                stream.write(this._buffer, this._origin, ((this._length - this._origin) | 0));
            }
        }
    });

    Bridge.define("System.IO.Stream.NullStream", {
        inherits: [System.IO.Stream],
        props: {
            CanRead: {
                get: function () {
                    return true;
                }
            },
            CanWrite: {
                get: function () {
                    return true;
                }
            },
            CanSeek: {
                get: function () {
                    return true;
                }
            },
            Length: {
                get: function () {
                    return System.Int64(0);
                }
            },
            Position: {
                get: function () {
                    return System.Int64(0);
                },
                set: function (value) { }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
            }
        },
        methods: {
            dispose$1: function (disposing) {
                // Do nothing - we don't want NullStream singleton (static) to be closable
            },
            flush: function () { },
            beginRead: function (buffer, offset, count, callback, state) {
                if (!this.CanRead) {
                    throw new System.NotSupportedException();
                }

                return this.blockingBeginRead(buffer, offset, count, callback, state);
            },
            endRead: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                return System.IO.Stream.blockingEndRead(asyncResult);
            },
            beginWrite: function (buffer, offset, count, callback, state) {
                if (!this.CanWrite) {
                    throw new System.NotSupportedException();
                }

                return this.blockingBeginWrite(buffer, offset, count, callback, state);
            },
            endWrite: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                System.IO.Stream.blockingEndWrite(asyncResult);
            },
            read: function (buffer, offset, count) {
                return 0;
            },
            readByte: function () {
                return -1;
            },
            write: function (buffer, offset, count) { },
            writeByte: function (value) { },
            seek: function (offset, origin) {
                return System.Int64(0);
            },
            setLength: function (length) { }
        }
    });

    Bridge.define("System.IO.Stream.SynchronousAsyncResult", {
        inherits: [IAsyncResult],
        statics: {
            methods: {
                endRead: function (asyncResult) {

                    var ar = Bridge.as(asyncResult, System.IO.Stream.SynchronousAsyncResult);
                    if (ar == null || ar._isWrite) {
                        throw new System.ArgumentException();
                    }

                    if (ar._endXxxCalled) {
                        throw new System.ArgumentException();
                    }

                    ar._endXxxCalled = true;

                    ar.throwIfError();
                    return ar._bytesRead;
                },
                endWrite: function (asyncResult) {

                    var ar = Bridge.as(asyncResult, System.IO.Stream.SynchronousAsyncResult);
                    if (ar == null || !ar._isWrite) {
                        throw new System.ArgumentException();
                    }

                    if (ar._endXxxCalled) {
                        throw new System.ArgumentException();
                    }

                    ar._endXxxCalled = true;

                    ar.throwIfError();
                }
            }
        },
        fields: {
            _stateObject: null,
            _isWrite: false,
            _endXxxCalled: false,
            _bytesRead: 0
        },
        props: {
            IsCompleted: {
                get: function () {
                    return true;
                }
            },
            AsyncState: {
                get: function () {
                    return this._stateObject;
                }
            },
            CompletedSynchronously: {
                get: function () {
                    return true;
                }
            }
        },
        alias: [
            "IsCompleted", "IAsyncResult$IsCompleted",
            "AsyncState", "IAsyncResult$AsyncState",
            "CompletedSynchronously", "IAsyncResult$CompletedSynchronously"
        ],
        ctors: {
            $ctor1: function (bytesRead, asyncStateObject) {
                this.$initialize();
                this._bytesRead = bytesRead;
                this._stateObject = asyncStateObject;
                //_isWrite = false;
            },
            $ctor2: function (asyncStateObject) {
                this.$initialize();
                this._stateObject = asyncStateObject;
                this._isWrite = true;
            },
            ctor: function (ex, asyncStateObject, isWrite) {
                this.$initialize();
                //_exceptionInfo = ExceptionDispatchInfo.Capture(ex);
                this._stateObject = asyncStateObject;
                this._isWrite = isWrite;
            }
        },
        methods: {
            throwIfError: function () {
                //if (_exceptionInfo != null)
                //    _exceptionInfo.Throw();
            }
        }
    });

    Bridge.define("System.IO.Stream.SyncStream", {
        inherits: [System.IO.Stream,System.IDisposable],
        statics: {
            methods: {
                overridesBeginMethod: function (stream, methodName) {
                    var $t;

                    // Get all of the methods on the underlying stream
                    var methods = Bridge.Reflection.getMembers(Bridge.getType(stream), 8, 20);

                    // If any of the methods have the desired name and are defined on the base Stream
                    // Type, then the method was not overridden.  If none of them were defined on the
                    // base Stream, then it must have been overridden.
                    $t = Bridge.getEnumerator(methods);
                    try {
                        while ($t.moveNext()) {
                            var method = $t.Current;
                            if (Bridge.referenceEquals(method.td, System.IO.Stream) && Bridge.referenceEquals(method.n, methodName)) {
                                return false;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }return true;
                }
            }
        },
        fields: {
            _stream: null,
            _overridesBeginRead: null,
            _overridesBeginWrite: null
        },
        props: {
            CanRead: {
                get: function () {
                    return this._stream.CanRead;
                }
            },
            CanWrite: {
                get: function () {
                    return this._stream.CanWrite;
                }
            },
            CanSeek: {
                get: function () {
                    return this._stream.CanSeek;
                }
            },
            CanTimeout: {
                get: function () {
                    return this._stream.CanTimeout;
                }
            },
            Length: {
                get: function () {
                    this._stream;
                    {
                        return this._stream.Length;
                    }
                }
            },
            Position: {
                get: function () {
                    this._stream;
                    {
                        return this._stream.Position;
                    }
                },
                set: function (value) {
                    this._stream;
                    {
                        this._stream.Position = value;
                    }
                }
            },
            ReadTimeout: {
                get: function () {
                    return this._stream.ReadTimeout;
                },
                set: function (value) {
                    this._stream.ReadTimeout = value;
                }
            },
            WriteTimeout: {
                get: function () {
                    return this._stream.WriteTimeout;
                },
                set: function (value) {
                    this._stream.WriteTimeout = value;
                }
            }
        },
        ctors: {
            ctor: function (stream) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
                if (stream == null) {
                    throw new System.ArgumentNullException("stream");
                }
                this._stream = stream;
            }
        },
        methods: {
            close: function () {
                this._stream;
                {
                    try {
                        this._stream.close();
                    }
                    finally {
                        System.IO.Stream.prototype.dispose$1.call(this, true);
                    }
                }
            },
            dispose$1: function (disposing) {
                this._stream;
                {
                    try {
                        // Explicitly pick up a potentially methodimpl'ed Dispose
                        if (disposing) {
                            Bridge.cast(this._stream, System.IDisposable).System$IDisposable$dispose();
                        }
                    }
                    finally {
                        System.IO.Stream.prototype.dispose$1.call(this, disposing);
                    }
                }
            },
            flush: function () {
                this._stream;
                this._stream.flush();
            },
            read: function (bytes, offset, count) {
                this._stream;
                return this._stream.read(bytes, offset, count);
            },
            readByte: function () {
                this._stream;
                return this._stream.readByte();
            },
            beginRead: function (buffer, offset, count, callback, state) {
                // Lazily-initialize whether the wrapped stream overrides BeginRead
                if (this._overridesBeginRead == null) {
                    this._overridesBeginRead = System.IO.Stream.SyncStream.overridesBeginMethod(this._stream, "BeginRead");
                }

                this._stream;
                {
                    // If the Stream does have its own BeginRead implementation, then we must use that override.
                    // If it doesn't, then we'll use the base implementation, but we'll make sure that the logic
                    // which ensures only one asynchronous operation does so with an asynchronous wait rather
                    // than a synchronous wait.  A synchronous wait will result in a deadlock condition, because
                    // the EndXx method for the outstanding async operation won't be able to acquire the lock on
                    // _stream due to this call blocked while holding the lock.
                    return System.Nullable.getValue(this._overridesBeginRead) ? this._stream.beginRead(buffer, offset, count, callback, state) : this._stream.beginReadInternal(buffer, offset, count, callback, state, true);
                }
            },
            endRead: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                this._stream;
                return this._stream.endRead(asyncResult);
            },
            seek: function (offset, origin) {
                this._stream;
                return this._stream.seek(offset, origin);
            },
            setLength: function (length) {
                this._stream;
                this._stream.setLength(length);
            },
            write: function (bytes, offset, count) {
                this._stream;
                this._stream.write(bytes, offset, count);
            },
            writeByte: function (b) {
                this._stream;
                this._stream.writeByte(b);
            },
            beginWrite: function (buffer, offset, count, callback, state) {
                // Lazily-initialize whether the wrapped stream overrides BeginWrite
                if (this._overridesBeginWrite == null) {
                    this._overridesBeginWrite = System.IO.Stream.SyncStream.overridesBeginMethod(this._stream, "BeginWrite");
                }

                this._stream;
                {
                    // If the Stream does have its own BeginWrite implementation, then we must use that override.
                    // If it doesn't, then we'll use the base implementation, but we'll make sure that the logic
                    // which ensures only one asynchronous operation does so with an asynchronous wait rather
                    // than a synchronous wait.  A synchronous wait will result in a deadlock condition, because
                    // the EndXx method for the outstanding async operation won't be able to acquire the lock on
                    // _stream due to this call blocked while holding the lock.
                    return System.Nullable.getValue(this._overridesBeginWrite) ? this._stream.beginWrite(buffer, offset, count, callback, state) : this._stream.beginWriteInternal(buffer, offset, count, callback, state, true);
                }
            },
            endWrite: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                this._stream;
                this._stream.endWrite(asyncResult);
            }
        }
    });

    var $box_ = {};

    Bridge.ns("System.Boolean", $box_);

    Bridge.apply($box_.System.Boolean, {
        toString: function (obj) { return System.Boolean.toString(obj); }
    });
