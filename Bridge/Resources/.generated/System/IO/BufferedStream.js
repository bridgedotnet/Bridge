    Bridge.define("System.IO.BufferedStream", {
        inherits: [System.IO.Stream],
        statics: {
            fields: {
                _DefaultBufferSize: 0,
                MaxShadowBufferSize: 0
            },
            ctors: {
                init: function () {
                    this._DefaultBufferSize = 4096;
                    this.MaxShadowBufferSize = 81920;
                }
            }
        },
        fields: {
            _stream: null,
            _buffer: null,
            _bufferSize: 0,
            _readPos: 0,
            _readLen: 0,
            _writePos: 0
        },
        props: {
            UnderlyingStream: {
                get: function () {
                    return this._stream;
                }
            },
            BufferSize: {
                get: function () {
                    return this._bufferSize;
                }
            },
            CanRead: {
                get: function () {
                    return this._stream != null && this._stream.CanRead;
                }
            },
            CanWrite: {
                get: function () {
                    return this._stream != null && this._stream.CanWrite;
                }
            },
            CanSeek: {
                get: function () {
                    return this._stream != null && this._stream.CanSeek;
                }
            },
            Length: {
                get: function () {
                    this.EnsureNotClosed();

                    if (this._writePos > 0) {
                        this.FlushWrite();
                    }

                    return this._stream.Length;
                }
            },
            Position: {
                get: function () {
                    this.EnsureNotClosed();
                    this.EnsureCanSeek();

                    return this._stream.Position.add(System.Int64((((((this._readPos - this._readLen) | 0) + this._writePos) | 0))));
                },
                set: function (value) {
                    if (value.lt(System.Int64(0))) {
                        throw new System.ArgumentOutOfRangeException.$ctor1("value");
                    }

                    this.EnsureNotClosed();
                    this.EnsureCanSeek();

                    if (this._writePos > 0) {
                        this.FlushWrite();
                    }

                    this._readPos = 0;
                    this._readLen = 0;
                    this._stream.Seek(value, 0);
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
            },
            $ctor1: function (stream) {
                System.IO.BufferedStream.$ctor2.call(this, stream, System.IO.BufferedStream._DefaultBufferSize);
            },
            $ctor2: function (stream, bufferSize) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);

                if (stream == null) {
                    throw new System.ArgumentNullException.$ctor1("stream");
                }

                if (bufferSize <= 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("bufferSize");
                }

                this._stream = stream;
                this._bufferSize = bufferSize;


                if (!this._stream.CanRead && !this._stream.CanWrite) {
                    System.IO.__Error.StreamIsClosed();
                }
            }
        },
        methods: {
            EnsureNotClosed: function () {

                if (this._stream == null) {
                    System.IO.__Error.StreamIsClosed();
                }
            },
            EnsureCanSeek: function () {


                if (!this._stream.CanSeek) {
                    System.IO.__Error.SeekNotSupported();
                }
            },
            EnsureCanRead: function () {


                if (!this._stream.CanRead) {
                    System.IO.__Error.ReadNotSupported();
                }
            },
            EnsureCanWrite: function () {


                if (!this._stream.CanWrite) {
                    System.IO.__Error.WriteNotSupported();
                }
            },
            EnsureShadowBufferAllocated: function () {


                if (this._buffer.length !== this._bufferSize || this._bufferSize >= System.IO.BufferedStream.MaxShadowBufferSize) {
                    return;
                }

                var shadowBuffer = System.Array.init(Math.min(((this._bufferSize + this._bufferSize) | 0), System.IO.BufferedStream.MaxShadowBufferSize), 0, System.Byte);
                System.Array.copy(this._buffer, 0, shadowBuffer, 0, this._writePos);
                this._buffer = shadowBuffer;
            },
            EnsureBufferAllocated: function () {


                if (this._buffer == null) {
                    this._buffer = System.Array.init(this._bufferSize, 0, System.Byte);
                }
            },
            Dispose$1: function (disposing) {

                try {
                    if (disposing && this._stream != null) {
                        try {
                            this.Flush();
                        } finally {
                            this._stream.Close();
                        }
                    }
                } finally {
                    this._stream = null;
                    this._buffer = null;

                    System.IO.Stream.prototype.Dispose$1.call(this, disposing);
                }
            },
            Flush: function () {

                this.EnsureNotClosed();

                if (this._writePos > 0) {

                    this.FlushWrite();
                    return;
                }

                if (this._readPos < this._readLen) {

                    if (!this._stream.CanSeek) {
                        return;
                    }

                    this.FlushRead();

                    if (this._stream.CanWrite || Bridge.is(this._stream, System.IO.BufferedStream)) {
                        this._stream.Flush();
                    }

                    return;
                }

                if (this._stream.CanWrite || Bridge.is(this._stream, System.IO.BufferedStream)) {
                    this._stream.Flush();
                }

                this._writePos = (this._readPos = (this._readLen = 0));
            },
            FlushRead: function () {


                if (((this._readPos - this._readLen) | 0) !== 0) {
                    this._stream.Seek(System.Int64(this._readPos - this._readLen), 1);
                }

                this._readPos = 0;
                this._readLen = 0;
            },
            ClearReadBufferBeforeWrite: function () {



                if (this._readPos === this._readLen) {

                    this._readPos = (this._readLen = 0);
                    return;
                }


                if (!this._stream.CanSeek) {
                    throw new System.NotSupportedException.ctor();
                }

                this.FlushRead();
            },
            FlushWrite: function () {


                this._stream.Write(this._buffer, 0, this._writePos);
                this._writePos = 0;
                this._stream.Flush();
            },
            ReadFromBuffer: function (array, offset, count) {

                var readBytes = (this._readLen - this._readPos) | 0;

                if (readBytes === 0) {
                    return 0;
                }


                if (readBytes > count) {
                    readBytes = count;
                }

                System.Array.copy(this._buffer, this._readPos, array, offset, readBytes);
                this._readPos = (this._readPos + readBytes) | 0;

                return readBytes;
            },
            ReadFromBuffer$1: function (array, offset, count, error) {

                try {

                    error.v = null;
                    return this.ReadFromBuffer(array, offset, count);

                } catch (ex) {
                    ex = System.Exception.create(ex);
                    error.v = ex;
                    return 0;
                }
            },
            Read: function (array, offset, count) {

                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }
                if (offset < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("offset");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }
                if (((array.length - offset) | 0) < count) {
                    throw new System.ArgumentException.ctor();
                }

                this.EnsureNotClosed();
                this.EnsureCanRead();

                var bytesFromBuffer = this.ReadFromBuffer(array, offset, count);


                if (bytesFromBuffer === count) {
                    return bytesFromBuffer;
                }

                var alreadySatisfied = bytesFromBuffer;
                if (bytesFromBuffer > 0) {
                    count = (count - bytesFromBuffer) | 0;
                    offset = (offset + bytesFromBuffer) | 0;
                }

                this._readPos = (this._readLen = 0);

                if (this._writePos > 0) {
                    this.FlushWrite();
                }

                if (count >= this._bufferSize) {

                    return ((this._stream.Read(array, offset, count) + alreadySatisfied) | 0);
                }

                this.EnsureBufferAllocated();
                this._readLen = this._stream.Read(this._buffer, 0, this._bufferSize);

                bytesFromBuffer = this.ReadFromBuffer(array, offset, count);


                return ((bytesFromBuffer + alreadySatisfied) | 0);
            },
            ReadByte: function () {

                this.EnsureNotClosed();
                this.EnsureCanRead();

                if (this._readPos === this._readLen) {

                    if (this._writePos > 0) {
                        this.FlushWrite();
                    }

                    this.EnsureBufferAllocated();
                    this._readLen = this._stream.Read(this._buffer, 0, this._bufferSize);
                    this._readPos = 0;
                }

                if (this._readPos === this._readLen) {
                    return -1;
                }

                var b = this._buffer[System.Array.index(Bridge.identity(this._readPos, (this._readPos = (this._readPos + 1) | 0)), this._buffer)];
                return b;
            },
            WriteToBuffer: function (array, offset, count) {

                var bytesToWrite = Math.min(((this._bufferSize - this._writePos) | 0), count.v);

                if (bytesToWrite <= 0) {
                    return;
                }

                this.EnsureBufferAllocated();
                System.Array.copy(array, offset.v, this._buffer, this._writePos, bytesToWrite);

                this._writePos = (this._writePos + bytesToWrite) | 0;
                count.v = (count.v - bytesToWrite) | 0;
                offset.v = (offset.v + bytesToWrite) | 0;
            },
            WriteToBuffer$1: function (array, offset, count, error) {

                try {

                    error.v = null;
                    this.WriteToBuffer(array, offset, count);

                } catch (ex) {
                    ex = System.Exception.create(ex);
                    error.v = ex;
                }
            },
            Write: function (array, offset, count) {
                offset = {v:offset};
                count = {v:count};

                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }
                if (offset.v < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("offset");
                }
                if (count.v < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }
                if (((array.length - offset.v) | 0) < count.v) {
                    throw new System.ArgumentException.ctor();
                }

                this.EnsureNotClosed();
                this.EnsureCanWrite();

                if (this._writePos === 0) {
                    this.ClearReadBufferBeforeWrite();
                }



                var totalUserBytes;
                var useBuffer;
                totalUserBytes = Bridge.Int.check(this._writePos + count.v, System.Int32);
                useBuffer = (Bridge.Int.check(totalUserBytes + count.v, System.Int32) < (Bridge.Int.check(this._bufferSize + this._bufferSize, System.Int32)));

                if (useBuffer) {

                    this.WriteToBuffer(array, offset, count);

                    if (this._writePos < this._bufferSize) {

                        return;
                    }


                    this._stream.Write(this._buffer, 0, this._writePos);
                    this._writePos = 0;

                    this.WriteToBuffer(array, offset, count);


                } else {

                    if (this._writePos > 0) {


                        if (totalUserBytes <= (((this._bufferSize + this._bufferSize) | 0)) && totalUserBytes <= System.IO.BufferedStream.MaxShadowBufferSize) {

                            this.EnsureShadowBufferAllocated();
                            System.Array.copy(array, offset.v, this._buffer, this._writePos, count.v);
                            this._stream.Write(this._buffer, 0, totalUserBytes);
                            this._writePos = 0;
                            return;
                        }

                        this._stream.Write(this._buffer, 0, this._writePos);
                        this._writePos = 0;
                    }

                    this._stream.Write(array, offset.v, count.v);
                }
            },
            WriteByte: function (value) {

                this.EnsureNotClosed();

                if (this._writePos === 0) {

                    this.EnsureCanWrite();
                    this.ClearReadBufferBeforeWrite();
                    this.EnsureBufferAllocated();
                }

                if (this._writePos >= ((this._bufferSize - 1) | 0)) {
                    this.FlushWrite();
                }

                this._buffer[System.Array.index(Bridge.identity(this._writePos, (this._writePos = (this._writePos + 1) | 0)), this._buffer)] = value;

            },
            Seek: function (offset, origin) {

                this.EnsureNotClosed();
                this.EnsureCanSeek();

                if (this._writePos > 0) {

                    this.FlushWrite();
                    return this._stream.Seek(offset, origin);
                }


                if (((this._readLen - this._readPos) | 0) > 0 && origin === 1) {

                    offset = offset.sub(System.Int64((((this._readLen - this._readPos) | 0))));
                }

                var oldPos = this.Position;

                var newPos = this._stream.Seek(offset, origin);


                this._readPos = System.Int64.clip32(newPos.sub((oldPos.sub(System.Int64(this._readPos)))));

                if (0 <= this._readPos && this._readPos < this._readLen) {

                    this._stream.Seek(System.Int64(this._readLen - this._readPos), 1);

                } else {

                    this._readPos = (this._readLen = 0);
                }

                return newPos;
            },
            SetLength: function (value) {

                if (value.lt(System.Int64(0))) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("value");
                }

                this.EnsureNotClosed();
                this.EnsureCanSeek();
                this.EnsureCanWrite();

                this.Flush();
                this._stream.SetLength(value);
            }
        }
    });
