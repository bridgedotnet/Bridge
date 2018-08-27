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
                        System.IO.__Error.StreamIsClosed();
                    }
                    return ((this._capacity - this._origin) | 0);
                },
                set: function (value) {
                    if (System.Int64(value).lt(this.Length)) {
                        throw new System.ArgumentOutOfRangeException.$ctor4("value", "ArgumentOutOfRange_SmallCapacity");
                    }

                    if (!this._isOpen) {
                        System.IO.__Error.StreamIsClosed();
                    }
                    if (!this._expandable && (value !== this.Capacity)) {
                        System.IO.__Error.MemoryStreamNotExpandable();
                    }

                    if (this._expandable && value !== this._capacity) {
                        if (value > 0) {
                            var newBuffer = System.Array.init(value, 0, System.Byte);
                            if (this._length > 0) {
                                System.Array.copy(this._buffer, 0, newBuffer, 0, this._length);
                            }
                            this._buffer = newBuffer;
                        } else {
                            this._buffer = null;
                        }
                        this._capacity = value;
                    }
                }
            },
            Length: {
                get: function () {
                    if (!this._isOpen) {
                        System.IO.__Error.StreamIsClosed();
                    }
                    return System.Int64(this._length - this._origin);
                }
            },
            Position: {
                get: function () {
                    if (!this._isOpen) {
                        System.IO.__Error.StreamIsClosed();
                    }
                    return System.Int64(this._position - this._origin);
                },
                set: function (value) {
                    if (value.lt(System.Int64(0))) {
                        throw new System.ArgumentOutOfRangeException.$ctor4("value", "ArgumentOutOfRange_NeedNonNegNum");
                    }

                    if (!this._isOpen) {
                        System.IO.__Error.StreamIsClosed();
                    }

                    if (value.gt(System.Int64(System.IO.MemoryStream.MemStreamMaxLength))) {
                        throw new System.ArgumentOutOfRangeException.$ctor4("value", "ArgumentOutOfRange_StreamLength");
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
                    throw new System.ArgumentOutOfRangeException.$ctor4("capacity", "ArgumentOutOfRange_NegativeCapacity");
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
                    throw new System.ArgumentNullException.$ctor3("buffer", "ArgumentNull_Buffer");
                }
                this._buffer = buffer;
                this._length = (this._capacity = buffer.length);
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
                    throw new System.ArgumentNullException.$ctor3("buffer", "ArgumentNull_Buffer");
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("count", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (((buffer.length - index) | 0) < count) {
                    throw new System.ArgumentException.$ctor1("Argument_InvalidOffLen");
                }

                this._buffer = buffer;
                this._origin = (this._position = index);
                this._length = (this._capacity = (index + count) | 0);
                this._writable = writable;
                this._exposable = publiclyVisible;
                this._expandable = false;
                this._isOpen = true;
            }
        },
        methods: {
            EnsureWriteable: function () {
                if (!this.CanWrite) {
                    System.IO.__Error.WriteNotSupported();
                }
            },
            Dispose$1: function (disposing) {
                try {
                    if (disposing) {
                        this._isOpen = false;
                        this._writable = false;
                        this._expandable = false;
                    }
                } finally {
                    System.IO.Stream.prototype.Dispose$1.call(this, disposing);
                }
            },
            EnsureCapacity: function (value) {
                if (value < 0) {
                    throw new System.IO.IOException.$ctor1("IO.IO_StreamTooLong");
                }
                if (value > this._capacity) {
                    var newCapacity = value;
                    if (newCapacity < 256) {
                        newCapacity = 256;
                    }
                    if (newCapacity < Bridge.Int.mul(this._capacity, 2)) {
                        newCapacity = Bridge.Int.mul(this._capacity, 2);
                    }
                    if ((((Bridge.Int.mul(this._capacity, 2))) >>> 0) > 2147483591) {
                        newCapacity = value > 2147483591 ? value : 2147483591;
                    }

                    this.Capacity = newCapacity;
                    return true;
                }
                return false;
            },
            Flush: function () { },
            GetBuffer: function () {
                if (!this._exposable) {
                    throw new System.Exception("UnauthorizedAccess_MemStreamBuffer");
                }
                return this._buffer;
            },
            TryGetBuffer: function (buffer) {
                if (!this._exposable) {
                    buffer.v = Bridge.getDefaultValue(System.ArraySegment);
                    return false;
                }

                buffer.v = new System.ArraySegment(this._buffer, this._origin, (((this._length - this._origin) | 0)));
                return true;
            },
            InternalGetBuffer: function () {
                return this._buffer;
            },
            InternalGetPosition: function () {
                if (!this._isOpen) {
                    System.IO.__Error.StreamIsClosed();
                }
                return this._position;
            },
            InternalReadInt32: function () {
                if (!this._isOpen) {
                    System.IO.__Error.StreamIsClosed();
                }

                var pos = ((this._position = (this._position + 4) | 0));
                if (pos > this._length) {
                    this._position = this._length;
                    System.IO.__Error.EndOfFile();
                }
                return this._buffer[System.Array.index(((pos - 4) | 0), this._buffer)] | this._buffer[System.Array.index(((pos - 3) | 0), this._buffer)] << 8 | this._buffer[System.Array.index(((pos - 2) | 0), this._buffer)] << 16 | this._buffer[System.Array.index(((pos - 1) | 0), this._buffer)] << 24;
            },
            InternalEmulateRead: function (count) {
                if (!this._isOpen) {
                    System.IO.__Error.StreamIsClosed();
                }

                var n = (this._length - this._position) | 0;
                if (n > count) {
                    n = count;
                }
                if (n < 0) {
                    n = 0;
                }

                this._position = (this._position + n) | 0;
                return n;
            },
            Read: function (buffer, offset, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException.$ctor3("buffer", "ArgumentNull_Buffer");
                }
                if (offset < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("offset", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("count", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (((buffer.length - offset) | 0) < count) {
                    throw new System.ArgumentException.$ctor1("Argument_InvalidOffLen");
                }

                if (!this._isOpen) {
                    System.IO.__Error.StreamIsClosed();
                }

                var n = (this._length - this._position) | 0;
                if (n > count) {
                    n = count;
                }
                if (n <= 0) {
                    return 0;
                }


                if (n <= 8) {
                    var byteCount = n;
                    while (((byteCount = (byteCount - 1) | 0)) >= 0) {
                        buffer[System.Array.index(((offset + byteCount) | 0), buffer)] = this._buffer[System.Array.index(((this._position + byteCount) | 0), this._buffer)];
                    }
                } else {
                    System.Array.copy(this._buffer, this._position, buffer, offset, n);
                }
                this._position = (this._position + n) | 0;

                return n;
            },
            ReadByte: function () {
                if (!this._isOpen) {
                    System.IO.__Error.StreamIsClosed();
                }

                if (this._position >= this._length) {
                    return -1;
                }

                return this._buffer[System.Array.index(Bridge.identity(this._position, (this._position = (this._position + 1) | 0)), this._buffer)];
            },
            Seek: function (offset, loc) {
                if (!this._isOpen) {
                    System.IO.__Error.StreamIsClosed();
                }

                if (offset.gt(System.Int64(System.IO.MemoryStream.MemStreamMaxLength))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("offset", "ArgumentOutOfRange_StreamLength");
                }
                switch (loc) {
                    case 0: 
                        {
                            var tempPosition = ((this._origin + System.Int64.clip32(offset)) | 0);
                            if (offset.lt(System.Int64(0)) || tempPosition < this._origin) {
                                throw new System.IO.IOException.$ctor1("IO.IO_SeekBeforeBegin");
                            }
                            this._position = tempPosition;
                            break;
                        }
                    case 1: 
                        {
                            var tempPosition1 = ((this._position + System.Int64.clip32(offset)) | 0);
                            if (System.Int64(this._position).add(offset).lt(System.Int64(this._origin)) || tempPosition1 < this._origin) {
                                throw new System.IO.IOException.$ctor1("IO.IO_SeekBeforeBegin");
                            }
                            this._position = tempPosition1;
                            break;
                        }
                    case 2: 
                        {
                            var tempPosition2 = ((this._length + System.Int64.clip32(offset)) | 0);
                            if (System.Int64(this._length).add(offset).lt(System.Int64(this._origin)) || tempPosition2 < this._origin) {
                                throw new System.IO.IOException.$ctor1("IO.IO_SeekBeforeBegin");
                            }
                            this._position = tempPosition2;
                            break;
                        }
                    default: 
                        throw new System.ArgumentException.$ctor1("Argument_InvalidSeekOrigin");
                }

                return System.Int64(this._position);
            },
            SetLength: function (value) {
                if (value.lt(System.Int64(0)) || value.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("value", "ArgumentOutOfRange_StreamLength");
                }
                this.EnsureWriteable();

                if (value.gt(System.Int64((((2147483647 - this._origin) | 0))))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("value", "ArgumentOutOfRange_StreamLength");
                }

                var newLength = (this._origin + System.Int64.clip32(value)) | 0;
                var allocatedNewArray = this.EnsureCapacity(newLength);
                if (!allocatedNewArray && newLength > this._length) {
                    System.Array.fill(this._buffer, 0, this._length, ((newLength - this._length) | 0));
                }
                this._length = newLength;
                if (this._position > newLength) {
                    this._position = newLength;
                }

            },
            ToArray: function () {
                var copy = System.Array.init(((this._length - this._origin) | 0), 0, System.Byte);
                System.Array.copy(this._buffer, this._origin, copy, 0, ((this._length - this._origin) | 0));
                return copy;
            },
            Write: function (buffer, offset, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException.$ctor3("buffer", "ArgumentNull_Buffer");
                }
                if (offset < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("offset", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("count", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (((buffer.length - offset) | 0) < count) {
                    throw new System.ArgumentException.$ctor1("Argument_InvalidOffLen");
                }

                if (!this._isOpen) {
                    System.IO.__Error.StreamIsClosed();
                }
                this.EnsureWriteable();

                var i = (this._position + count) | 0;
                if (i < 0) {
                    throw new System.IO.IOException.$ctor1("IO.IO_StreamTooLong");
                }

                if (i > this._length) {
                    var mustZero = this._position > this._length;
                    if (i > this._capacity) {
                        var allocatedNewArray = this.EnsureCapacity(i);
                        if (allocatedNewArray) {
                            mustZero = false;
                        }
                    }
                    if (mustZero) {
                        System.Array.fill(this._buffer, 0, this._length, ((i - this._length) | 0));
                    }
                    this._length = i;
                }
                if ((count <= 8) && (!Bridge.referenceEquals(buffer, this._buffer))) {
                    var byteCount = count;
                    while (((byteCount = (byteCount - 1) | 0)) >= 0) {
                        this._buffer[System.Array.index(((this._position + byteCount) | 0), this._buffer)] = buffer[System.Array.index(((offset + byteCount) | 0), buffer)];
                    }
                } else {
                    System.Array.copy(buffer, offset, this._buffer, this._position, count);
                }
                this._position = i;

            },
            WriteByte: function (value) {
                if (!this._isOpen) {
                    System.IO.__Error.StreamIsClosed();
                }
                this.EnsureWriteable();

                if (this._position >= this._length) {
                    var newLength = (this._position + 1) | 0;
                    var mustZero = this._position > this._length;
                    if (newLength >= this._capacity) {
                        var allocatedNewArray = this.EnsureCapacity(newLength);
                        if (allocatedNewArray) {
                            mustZero = false;
                        }
                    }
                    if (mustZero) {
                        System.Array.fill(this._buffer, 0, this._length, ((this._position - this._length) | 0));
                    }
                    this._length = newLength;
                }
                this._buffer[System.Array.index(Bridge.identity(this._position, (this._position = (this._position + 1) | 0)), this._buffer)] = value;

            },
            WriteTo: function (stream) {
                if (stream == null) {
                    throw new System.ArgumentNullException.$ctor3("stream", "ArgumentNull_Stream");
                }

                if (!this._isOpen) {
                    System.IO.__Error.StreamIsClosed();
                }
                stream.Write(this._buffer, this._origin, ((this._length - this._origin) | 0));
            }
        }
    });
