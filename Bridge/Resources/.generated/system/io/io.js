    Bridge.define("System.IO.__Error", {
        statics: {
            methods: {
                EndOfFile: function () {
                    throw new System.IO.EndOfStreamException.$ctor1("IO.EOF_ReadBeyondEOF");
                },
                FileNotOpen: function () {
                    throw new System.Exception("ObjectDisposed_FileClosed");
                },
                StreamIsClosed: function () {
                    throw new System.Exception("ObjectDisposed_StreamClosed");
                },
                MemoryStreamNotExpandable: function () {
                    throw new System.NotSupportedException("NotSupported_MemStreamNotExpandable");
                },
                ReaderClosed: function () {
                    throw new System.Exception("ObjectDisposed_ReaderClosed");
                },
                ReadNotSupported: function () {
                    throw new System.NotSupportedException("NotSupported_UnreadableStream");
                },
                SeekNotSupported: function () {
                    throw new System.NotSupportedException("NotSupported_UnseekableStream");
                },
                WrongAsyncResult: function () {
                    throw new System.ArgumentException("Arg_WrongAsyncResult");
                },
                EndReadCalledTwice: function () {
                    // Should ideally be InvalidOperationExc but we can't maitain parity with Stream and FileStream without some work
                    throw new System.ArgumentException("InvalidOperation_EndReadCalledMultiple");
                },
                EndWriteCalledTwice: function () {
                    // Should ideally be InvalidOperationExc but we can't maintain parity with Stream and FileStream without some work
                    throw new System.ArgumentException("InvalidOperation_EndWriteCalledMultiple");
                },
                WriteNotSupported: function () {
                    throw new System.NotSupportedException("NotSupported_UnwritableStream");
                },
                WriterClosed: function () {
                    throw new System.Exception("ObjectDisposed_WriterClosed");
                }
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
            m_encoding: null,
            m_charBytes: null,
            m_singleChar: null,
            m_charBuffer: null,
            m_maxCharsSize: 0,
            m_2BytesPerChar: false,
            m_isMemoryStream: false,
            m_leaveOpen: false,
            lastCharsRead: 0
        },
        props: {
            BaseStream: {
                get: function () {
                    return this.m_stream;
                }
            }
        },
        alias: ["Dispose", "System$IDisposable$dispose"],
        ctors: {
            init: function () {
                this.lastCharsRead = 0;
            },
            ctor: function (input) {
                System.IO.BinaryReader.$ctor2.call(this, input, new System.Text.UTF8Encoding.ctor(), false);
            },
            $ctor1: function (input, encoding) {
                System.IO.BinaryReader.$ctor2.call(this, input, encoding, false);
            },
            $ctor2: function (input, encoding, leaveOpen) {
                this.$initialize();
                if (input == null) {
                    throw new System.ArgumentNullException("input");
                }
                if (encoding == null) {
                    throw new System.ArgumentNullException("encoding");
                }
                if (!input.CanRead) {
                    throw new System.ArgumentException("Argument_StreamNotReadable");
                }
                this.m_stream = input;
                this.m_encoding = encoding;
                this.m_maxCharsSize = encoding.GetMaxCharCount(System.IO.BinaryReader.MaxCharBytesSize);
                var minBufferSize = encoding.GetMaxByteCount(1); // max bytes per one char
                if (minBufferSize < 23) {
                    minBufferSize = 23;
                }
                this.m_buffer = System.Array.init(minBufferSize, 0, System.Byte);
                // m_charBuffer and m_charBytes will be left null.

                // For Encodings that always use 2 bytes per char (or more),
                // special case them here to make Read() & Peek() faster.
                this.m_2BytesPerChar = Bridge.is(encoding, System.Text.UnicodeEncoding);
                // check if BinaryReader is based on MemoryStream, and keep this for it's life
                // we cannot use "as" operator, since derived classes are not allowed
                this.m_isMemoryStream = (Bridge.referenceEquals(Bridge.getType(this.m_stream), System.IO.MemoryStream));
                this.m_leaveOpen = leaveOpen;

            }
        },
        methods: {
            Close: function () {
                this.Dispose$1(true);
            },
            Dispose$1: function (disposing) {
                if (disposing) {
                    var copyOfStream = this.m_stream;
                    this.m_stream = null;
                    if (copyOfStream != null && !this.m_leaveOpen) {
                        copyOfStream.Close();
                    }
                }
                this.m_stream = null;
                this.m_buffer = null;
                this.m_encoding = null;
                this.m_charBytes = null;
                this.m_singleChar = null;
                this.m_charBuffer = null;
            },
            Dispose: function () {
                this.Dispose$1(true);
            },
            PeekChar: function () {

                if (this.m_stream == null) {
                    System.IO.__Error.FileNotOpen();
                }

                if (!this.m_stream.CanSeek) {
                    return -1;
                }
                var origPos = this.m_stream.Position;
                var ch = this.Read();
                this.m_stream.Position = origPos;
                return ch;
            },
            Read: function () {

                if (this.m_stream == null) {
                    System.IO.__Error.FileNotOpen();
                }
                return this.InternalReadOneChar();
            },
            Read$2: function (buffer, index, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer", "ArgumentNull_Buffer");
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException("index", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (((buffer.length - index) | 0) < count) {
                    throw new System.ArgumentException("Argument_InvalidOffLen");
                }

                if (this.m_stream == null) {
                    System.IO.__Error.FileNotOpen();
                }

                // SafeCritical: index and count have already been verified to be a valid range for the buffer
                return this.InternalReadChars(buffer, index, count);
            },
            Read$1: function (buffer, index, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer", "ArgumentNull_Buffer");
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException("index", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (((buffer.length - index) | 0) < count) {
                    throw new System.ArgumentException("Argument_InvalidOffLen");
                }

                if (this.m_stream == null) {
                    System.IO.__Error.FileNotOpen();
                }
                return this.m_stream.Read(buffer, index, count);
            },
            ReadBoolean: function () {
                this.FillBuffer(1);
                return (this.m_buffer[System.Array.index(0, this.m_buffer)] !== 0);
            },
            ReadByte: function () {
                // Inlined to avoid some method call overhead with FillBuffer.
                if (this.m_stream == null) {
                    System.IO.__Error.FileNotOpen();
                }

                var b = this.m_stream.ReadByte();
                if (b === -1) {
                    System.IO.__Error.EndOfFile();
                }
                return (b & 255);
            },
            ReadSByte: function () {
                this.FillBuffer(1);
                return Bridge.Int.sxb((this.m_buffer[System.Array.index(0, this.m_buffer)]) & 255);
            },
            ReadChar: function () {
                var value = this.Read();
                if (value === -1) {
                    System.IO.__Error.EndOfFile();
                }
                return (value & 65535);
            },
            ReadInt16: function () {
                this.FillBuffer(2);
                return Bridge.Int.sxs((this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8) & 65535);
            },
            ReadUInt16: function () {
                this.FillBuffer(2);
                return ((this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8) & 65535);
            },
            ReadInt32: function () {
                if (this.m_isMemoryStream) {
                    if (this.m_stream == null) {
                        System.IO.__Error.FileNotOpen();
                    }
                    // read directly from MemoryStream buffer
                    var mStream = Bridge.as(this.m_stream, System.IO.MemoryStream);

                    return mStream.InternalReadInt32();
                } else {
                    this.FillBuffer(4);
                    return this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(2, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(3, this.m_buffer)] << 24;
                }
            },
            ReadUInt32: function () {
                this.FillBuffer(4);
                return ((this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(2, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(3, this.m_buffer)] << 24) >>> 0);
            },
            ReadInt64: function () {
                this.FillBuffer(8);
                var lo = (this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(2, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(3, this.m_buffer)] << 24) >>> 0;
                var hi = (this.m_buffer[System.Array.index(4, this.m_buffer)] | this.m_buffer[System.Array.index(5, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(6, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(7, this.m_buffer)] << 24) >>> 0;
                return System.Int64.clip64(System.UInt64(hi)).shl(32).or(System.Int64(lo));
            },
            ReadUInt64: function () {
                this.FillBuffer(8);
                var lo = (this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(2, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(3, this.m_buffer)] << 24) >>> 0;
                var hi = (this.m_buffer[System.Array.index(4, this.m_buffer)] | this.m_buffer[System.Array.index(5, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(6, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(7, this.m_buffer)] << 24) >>> 0;
                return System.UInt64(hi).shl(32).or(System.UInt64(lo));
            },
            ReadSingle: function () {
                this.FillBuffer(4);
                var tmpBuffer = (this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(2, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(3, this.m_buffer)] << 24) >>> 0;
                return System.BitConverter.toSingle(System.BitConverter.getBytes$8(tmpBuffer), 0);
            },
            ReadDouble: function () {
                this.FillBuffer(8);
                var lo = (this.m_buffer[System.Array.index(0, this.m_buffer)] | this.m_buffer[System.Array.index(1, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(2, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(3, this.m_buffer)] << 24) >>> 0;
                var hi = (this.m_buffer[System.Array.index(4, this.m_buffer)] | this.m_buffer[System.Array.index(5, this.m_buffer)] << 8 | this.m_buffer[System.Array.index(6, this.m_buffer)] << 16 | this.m_buffer[System.Array.index(7, this.m_buffer)] << 24) >>> 0;

                var tmpBuffer = System.UInt64(hi).shl(32).or(System.UInt64(lo));
                return System.BitConverter.toDouble(System.BitConverter.getBytes$9(tmpBuffer), 0);
            },
            ReadDecimal: function () {
                this.FillBuffer(23);
                try {
                    return System.Decimal.fromBytes(this.m_buffer);
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    var e;
                    if (Bridge.is($e1, System.ArgumentException)) {
                        e = $e1;
                        // ReadDecimal cannot leak out ArgumentException
                        throw new System.IO.IOException.$ctor2("Arg_DecBitCtor", e);
                    } else {
                        throw $e1;
                    }
                }
            },
            ReadString: function () {

                if (this.m_stream == null) {
                    System.IO.__Error.FileNotOpen();
                }

                var currPos = 0;
                var n;
                var stringLength;
                var readLength;
                var charsRead;

                // Length of the string in bytes, not chars
                stringLength = this.Read7BitEncodedInt();
                if (stringLength < 0) {
                    throw new System.IO.IOException.$ctor1("IO.IO_InvalidStringLen_Len");
                }

                if (stringLength === 0) {
                    return "";
                }

                if (this.m_charBytes == null) {
                    this.m_charBytes = System.Array.init(System.IO.BinaryReader.MaxCharBytesSize, 0, System.Byte);
                }

                if (this.m_charBuffer == null) {
                    this.m_charBuffer = System.Array.init(this.m_maxCharsSize, 0, System.Char);
                }

                var sb = null;
                do {
                    readLength = ((((stringLength - currPos) | 0)) > System.IO.BinaryReader.MaxCharBytesSize) ? System.IO.BinaryReader.MaxCharBytesSize : (((stringLength - currPos) | 0));

                    n = this.m_stream.Read(this.m_charBytes, 0, readLength);
                    if (n === 0) {
                        System.IO.__Error.EndOfFile();
                    }

                    charsRead = this.m_encoding.GetChars$2(this.m_charBytes, 0, n, this.m_charBuffer, 0);

                    if (currPos === 0 && n === stringLength) {
                        return System.String.fromCharArray(this.m_charBuffer, 0, charsRead);
                    }

                    if (sb == null) {
                        sb = new System.Text.StringBuilder("", stringLength);
                    }

                    for (var i = 0; i < charsRead; i = (i + 1) | 0) {
                        sb.append(String.fromCharCode(this.m_charBuffer[System.Array.index(i, this.m_charBuffer)]));
                    }

                    currPos = (currPos + n) | 0;

                } while (currPos < stringLength);

                return sb.toString();
            },
            InternalReadChars: function (buffer, index, count) {

                var charsRemaining = count;

                if (this.m_charBytes == null) {
                    this.m_charBytes = System.Array.init(System.IO.BinaryReader.MaxCharBytesSize, 0, System.Byte);
                }

                if (index < 0 || charsRemaining < 0 || ((index + charsRemaining) | 0) > buffer.length) {
                    throw new System.ArgumentOutOfRangeException("charsRemaining");
                }

                while (charsRemaining > 0) {

                    var ch = this.InternalReadOneChar(true);

                    if (ch === -1) {
                        break;
                    }

                    buffer[System.Array.index(index, buffer)] = ch & 65535;

                    if (this.lastCharsRead === 2) {
                        buffer[System.Array.index(((index = (index + 1) | 0)), buffer)] = this.m_singleChar[System.Array.index(1, this.m_singleChar)];
                        charsRemaining = (charsRemaining - 1) | 0;
                    }

                    charsRemaining = (charsRemaining - 1) | 0;
                    index = (index + 1) | 0;
                }

                // this should never fail

                // we may have read fewer than the number of characters requested if end of stream reached
                // or if the encoding makes the char count too big for the buffer (e.g. fallback sequence)
                return (((count - charsRemaining) | 0));
            },
            InternalReadOneChar: function (allowSurrogate) {
                if (allowSurrogate === void 0) { allowSurrogate = false; }
                // I know having a separate InternalReadOneChar method seems a little
                // redundant, but this makes a scenario like the security parser code
                // 20% faster, in addition to the optimizations for UnicodeEncoding I
                // put in InternalReadChars.
                var charsRead = 0;
                var numBytes = 0;
                var posSav = System.Int64(0);

                if (this.m_stream.CanSeek) {
                    posSav = this.m_stream.Position;
                }

                if (this.m_charBytes == null) {
                    this.m_charBytes = System.Array.init(System.IO.BinaryReader.MaxCharBytesSize, 0, System.Byte); //
                }
                if (this.m_singleChar == null) {
                    this.m_singleChar = System.Array.init(2, 0, System.Char);
                }

                var addByte = false;
                var internalPos = 0;
                while (charsRead === 0) {
                    numBytes = this.m_2BytesPerChar ? 2 : 1;

                    if (Bridge.is(this.m_encoding, System.Text.UTF32Encoding)) {
                        numBytes = 4;
                    }

                    if (addByte) {
                        var r = this.m_stream.ReadByte();
                        this.m_charBytes[System.Array.index(((internalPos = (internalPos + 1) | 0)), this.m_charBytes)] = r & 255;
                        if (r === -1) {
                            numBytes = 0;
                        }

                        if (numBytes === 2) {
                            r = this.m_stream.ReadByte();
                            this.m_charBytes[System.Array.index(((internalPos = (internalPos + 1) | 0)), this.m_charBytes)] = r & 255;
                            if (r === -1) {
                                numBytes = 1;
                            }
                        }
                    } else {
                        var r1 = this.m_stream.ReadByte();
                        this.m_charBytes[System.Array.index(0, this.m_charBytes)] = r1 & 255;
                        internalPos = 0;
                        if (r1 === -1) {
                            numBytes = 0;
                        }

                        if (numBytes === 2) {
                            r1 = this.m_stream.ReadByte();
                            this.m_charBytes[System.Array.index(1, this.m_charBytes)] = r1 & 255;
                            if (r1 === -1) {
                                numBytes = 1;
                            }
                            internalPos = 1;
                        } else if (numBytes === 4) {
                            r1 = this.m_stream.ReadByte();
                            this.m_charBytes[System.Array.index(1, this.m_charBytes)] = r1 & 255;
                            if (r1 === -1) {
                                return -1;
                            }

                            r1 = this.m_stream.ReadByte();
                            this.m_charBytes[System.Array.index(2, this.m_charBytes)] = r1 & 255;
                            if (r1 === -1) {
                                return -1;
                            }

                            r1 = this.m_stream.ReadByte();
                            this.m_charBytes[System.Array.index(3, this.m_charBytes)] = r1 & 255;
                            if (r1 === -1) {
                                return -1;
                            }

                            internalPos = 3;
                        }
                    }


                    if (numBytes === 0) {
                        return -1;
                    }

                    addByte = false;
                    try {
                        charsRead = this.m_encoding.GetChars$2(this.m_charBytes, 0, ((internalPos + 1) | 0), this.m_singleChar, 0);

                        if (!allowSurrogate && charsRead === 2) {
                            throw new System.ArgumentException();
                        }
                    }
                    catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        // Handle surrogate char

                        if (this.m_stream.CanSeek) {
                            this.m_stream.Seek((posSav.sub(this.m_stream.Position)), System.IO.SeekOrigin.Current);
                        }
                        // else - we can't do much here

                        throw $e1;
                    }

                    if (this.m_encoding._hasError) {
                        charsRead = 0;
                        addByte = true;
                    }

                    if (!allowSurrogate) {
                    }
                }

                this.lastCharsRead = charsRead;

                if (charsRead === 0) {
                    return -1;
                }

                return this.m_singleChar[System.Array.index(0, this.m_singleChar)];
            },
            ReadChars: function (count) {
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (this.m_stream == null) {
                    System.IO.__Error.FileNotOpen();
                }

                if (count === 0) {
                    return System.Array.init(0, 0, System.Char);
                }

                // SafeCritical: we own the chars buffer, and therefore can guarantee that the index and count are valid
                var chars = System.Array.init(count, 0, System.Char);
                var n = this.InternalReadChars(chars, 0, count);
                if (n !== count) {
                    var copy = System.Array.init(n, 0, System.Char);
                    System.Array.copy(chars, 0, copy, 0, Bridge.Int.mul(2, n)); // sizeof(char)
                    chars = copy;
                }

                return chars;
            },
            ReadBytes: function (count) {
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (this.m_stream == null) {
                    System.IO.__Error.FileNotOpen();
                }

                if (count === 0) {
                    return System.Array.init(0, 0, System.Byte);
                }

                var result = System.Array.init(count, 0, System.Byte);

                var numRead = 0;
                do {
                    var n = this.m_stream.Read(result, numRead, count);
                    if (n === 0) {
                        break;
                    }
                    numRead = (numRead + n) | 0;
                    count = (count - n) | 0;
                } while (count > 0);

                if (numRead !== result.length) {
                    // Trim array.  This should happen on EOF & possibly net streams.
                    var copy = System.Array.init(numRead, 0, System.Byte);
                    System.Array.copy(result, 0, copy, 0, numRead);
                    result = copy;
                }

                return result;
            },
            FillBuffer: function (numBytes) {
                if (this.m_buffer != null && (numBytes < 0 || numBytes > this.m_buffer.length)) {
                    throw new System.ArgumentOutOfRangeException("numBytes", "ArgumentOutOfRange_BinaryReaderFillBuffer");
                }
                var bytesRead = 0;
                var n = 0;

                if (this.m_stream == null) {
                    System.IO.__Error.FileNotOpen();
                }

                // Need to find a good threshold for calling ReadByte() repeatedly
                // vs. calling Read(byte[], int, int) for both buffered & unbuffered
                // streams.
                if (numBytes === 1) {
                    n = this.m_stream.ReadByte();
                    if (n === -1) {
                        System.IO.__Error.EndOfFile();
                    }
                    this.m_buffer[System.Array.index(0, this.m_buffer)] = n & 255;
                    return;
                }

                do {
                    n = this.m_stream.Read(this.m_buffer, bytesRead, ((numBytes - bytesRead) | 0));
                    if (n === 0) {
                        System.IO.__Error.EndOfFile();
                    }
                    bytesRead = (bytesRead + n) | 0;
                } while (bytesRead < numBytes);
            },
            Read7BitEncodedInt: function () {
                // Read out an Int32 7 bits at a time.  The high bit
                // of the byte when on means to continue reading more bytes.
                var count = 0;
                var shift = 0;
                var b;
                do {
                    // Check for a corrupted stream.  Read a max of 5 bytes.
                    // In a future version, add a DataFormatException.
                    if (shift === 35) {
                        throw new System.FormatException("Format_Bad7BitInt32");
                    }

                    // ReadByte handles end of stream cases for us.
                    b = this.ReadByte();
                    count = count | ((b & 127) << shift);
                    shift = (shift + 7) | 0;
                } while ((b & 128) !== 0);
                return count;
            }
        }
    });

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
        alias: ["Dispose", "System$IDisposable$dispose"],
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
                    throw new System.ArgumentNullException("output");
                }
                if (encoding == null) {
                    throw new System.ArgumentNullException("encoding");
                }
                if (!output.CanWrite) {
                    throw new System.ArgumentException("Argument_StreamNotWritable");
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
                    throw new System.ArgumentNullException("buffer");
                }
                this.OutStream.Write(buffer, 0, buffer.length);
            },
            Write$3: function (buffer, index, count) {
                this.OutStream.Write(buffer, index, count);
            },
            Write$4: function (ch) {
                if (System.Char.isSurrogate(ch)) {
                    throw new System.ArgumentException("Arg_SurrogatesNotAllowedAsSingleChar");
                }

                var numBytes = 0;
                numBytes = this._encoding.GetBytes$3(System.Array.init([ch], System.Char), 0, 1, this._buffer, 0);

                this.OutStream.Write(this._buffer, 0, numBytes);
            },
            Write$5: function (chars) {
                if (chars == null) {
                    throw new System.ArgumentNullException("chars");
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
                    throw new System.ArgumentNullException("value");
                }

                var buffer = this._encoding.GetBytes$2(value);
                var len = buffer.length;
                this.Write7BitEncodedInt(len);
                this.OutStream.Write(buffer, 0, len);
            },
            Write7BitEncodedInt: function (value) {
                // Write out an int 7 bits at a time.  The high bit of the byte,
                // when on, tells reader to continue reading more bytes.
                var v = value >>> 0; // support negative numbers
                while (v >= 128) {
                    this.Write$1(((((v | 128) >>> 0)) & 255));
                    v = v >>> 7;
                }
                this.Write$1((v & 255));
            }
        }
    });

    Bridge.define("System.IO.Stream", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                Null: null,
                _DefaultCopyBufferSize: 0
            },
            ctors: {
                init: function () {
                    this.Null = new System.IO.Stream.NullStream();
                    this._DefaultCopyBufferSize = 81920;
                }
            },
            methods: {
                Synchronized: function (stream) {
                    if (stream == null) {
                        throw new System.ArgumentNullException("stream");
                    }

                    return stream;
                },
                BlockingEndRead: function (asyncResult) {

                    return System.IO.Stream.SynchronousAsyncResult.EndRead(asyncResult);
                },
                BlockingEndWrite: function (asyncResult) {
                    System.IO.Stream.SynchronousAsyncResult.EndWrite(asyncResult);
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
        alias: ["Dispose", "System$IDisposable$dispose"],
        methods: {
            CopyTo: function (destination) {
                if (destination == null) {
                    throw new System.ArgumentNullException("destination");
                }
                if (!this.CanRead && !this.CanWrite) {
                    throw new System.Exception();
                }
                if (!destination.CanRead && !destination.CanWrite) {
                    throw new System.Exception("destination");
                }
                if (!this.CanRead) {
                    throw new System.NotSupportedException();
                }
                if (!destination.CanWrite) {
                    throw new System.NotSupportedException();
                }

                this.InternalCopyTo(destination, System.IO.Stream._DefaultCopyBufferSize);
            },
            CopyTo$1: function (destination, bufferSize) {
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
                    throw new System.Exception("destination");
                }
                if (!this.CanRead) {
                    throw new System.NotSupportedException();
                }
                if (!destination.CanWrite) {
                    throw new System.NotSupportedException();
                }

                this.InternalCopyTo(destination, bufferSize);
            },
            InternalCopyTo: function (destination, bufferSize) {

                var buffer = System.Array.init(bufferSize, 0, System.Byte);
                var read;
                while (((read = this.Read(buffer, 0, buffer.length))) !== 0) {
                    destination.Write(buffer, 0, read);
                }
            },
            Close: function () {
                /* These are correct, but we'd have to fix PipeStream & NetworkStream very carefully.
                Contract.Ensures(CanRead == false);
                Contract.Ensures(CanWrite == false);
                Contract.Ensures(CanSeek == false);
                */

                this.Dispose$1(true);
            },
            Dispose: function () {
                /* These are correct, but we'd have to fix PipeStream & NetworkStream very carefully.
                Contract.Ensures(CanRead == false);
                Contract.Ensures(CanWrite == false);
                Contract.Ensures(CanSeek == false);
                */

                this.Close();
            },
            Dispose$1: function (disposing) {
                // Note: Never change this to call other virtual methods on Stream
                // like Write, since the state on subclasses has already been
                // torn down.  This is the last code to run on cleanup for a stream.
            },
            BeginRead: function (buffer, offset, count, callback, state) {
                return this.BeginReadInternal(buffer, offset, count, callback, state, false);
            },
            BeginReadInternal: function (buffer, offset, count, callback, state, serializeAsynchronously) {
                if (!this.CanRead) {
                    System.IO.__Error.ReadNotSupported();
                }

                return this.BlockingBeginRead(buffer, offset, count, callback, state);
            },
            EndRead: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                return System.IO.Stream.BlockingEndRead(asyncResult);
            },
            BeginWrite: function (buffer, offset, count, callback, state) {
                return this.BeginWriteInternal(buffer, offset, count, callback, state, false);
            },
            BeginWriteInternal: function (buffer, offset, count, callback, state, serializeAsynchronously) {
                if (!this.CanWrite) {
                    System.IO.__Error.WriteNotSupported();
                }
                return this.BlockingBeginWrite(buffer, offset, count, callback, state);
            },
            EndWrite: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                System.IO.Stream.BlockingEndWrite(asyncResult);
            },
            ReadByte: function () {

                var oneByteArray = System.Array.init(1, 0, System.Byte);
                var r = this.Read(oneByteArray, 0, 1);
                if (r === 0) {
                    return -1;
                }
                return oneByteArray[System.Array.index(0, oneByteArray)];
            },
            WriteByte: function (value) {
                var oneByteArray = System.Array.init(1, 0, System.Byte);
                oneByteArray[System.Array.index(0, oneByteArray)] = value;
                this.Write(oneByteArray, 0, 1);
            },
            BlockingBeginRead: function (buffer, offset, count, callback, state) {

                // To avoid a race with a stream's position pointer & generating ----
                // conditions with internal buffer indexes in our own streams that
                // don't natively support async IO operations when there are multiple
                // async requests outstanding, we will block the application's main
                // thread and do the IO synchronously.
                // This can't perform well - use a different approach.
                var asyncResult;
                try {
                    var numRead = this.Read(buffer, offset, count);
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
            BlockingBeginWrite: function (buffer, offset, count, callback, state) {

                // To avoid a race with a stream's position pointer & generating ----
                // conditions with internal buffer indexes in our own streams that
                // don't natively support async IO operations when there are multiple
                // async requests outstanding, we will block the application's main
                // thread and do the IO synchronously.
                // This can't perform well - use a different approach.
                var asyncResult;
                try {
                    this.Write(buffer, offset, count);
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
                System.Exception.ctor.call(this, "Arg_IOException");
            },
            $ctor1: function (message) {
                this.$initialize();
                System.Exception.ctor.call(this, message);
            },
            $ctor3: function (message, hresult) {
                this.$initialize();
                System.Exception.ctor.call(this, message);
            },
            $ctor4: function (message, hresult, maybeFullPath) {
                this.$initialize();
                System.Exception.ctor.call(this, message);
                this._maybeFullPath = maybeFullPath;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.Exception.ctor.call(this, message, innerException);
            }
        }
    });

    Bridge.define("System.IO.File", {
        statics: {
            methods: {
                OpenText: function (path) {
                    if (path == null) {
                        throw new System.ArgumentNullException("path");
                    }
                    return new System.IO.StreamReader.$ctor7(path);
                },
                OpenRead: function (path) {
                    return new System.IO.FileStream.$ctor1(path, System.IO.FileMode.Open);
                },
                ReadAllText: function (path) {
                    if (path == null) {
                        throw new System.ArgumentNullException("path");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException("Argument_EmptyPath");
                    }

                    return System.IO.File.InternalReadAllText(path, System.Text.Encoding.UTF8, true);
                },
                ReadAllText$1: function (path, encoding) {
                    if (path == null) {
                        throw new System.ArgumentNullException("path");
                    }
                    if (encoding == null) {
                        throw new System.ArgumentNullException("encoding");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException("Argument_EmptyPath");
                    }

                    return System.IO.File.InternalReadAllText(path, encoding, true);
                },
                InternalReadAllText: function (path, encoding, checkHost) {

                    var sr = new System.IO.StreamReader.$ctor12(path, encoding, true, System.IO.StreamReader.DefaultBufferSize, checkHost);
                    try {
                        return sr.ReadToEnd();
                    }
                    finally {
                        if (Bridge.hasValue(sr)) {
                            sr.System$IDisposable$dispose();
                        }
                    }
                },
                ReadAllBytes: function (path) {
                    return System.IO.File.InternalReadAllBytes(path, true);
                },
                InternalReadAllBytes: function (path, checkHost) {
                    var bytes;
                    var fs = new System.IO.FileStream.$ctor1(path, System.IO.FileMode.Open);
                    try {
                        // Do a blocking read
                        var index = 0;
                        var fileLength = fs.Length;
                        if (fileLength.gt(System.Int64(2147483647))) {
                            throw new System.IO.IOException.$ctor1("IO.IO_FileTooLong2GB");
                        }
                        var count = System.Int64.clip32(fileLength);
                        bytes = System.Array.init(count, 0, System.Byte);
                        while (count > 0) {
                            var n = fs.Read(bytes, index, count);
                            if (n === 0) {
                                System.IO.__Error.EndOfFile();
                            }
                            index = (index + n) | 0;
                            count = (count - n) | 0;
                        }
                    }
                    finally {
                        if (Bridge.hasValue(fs)) {
                            fs.System$IDisposable$dispose();
                        }
                    }
                    return bytes;
                },
                ReadAllLines: function (path) {
                    if (path == null) {
                        throw new System.ArgumentNullException("path");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException("Argument_EmptyPath");
                    }

                    return System.IO.File.InternalReadAllLines(path, System.Text.Encoding.UTF8);
                },
                ReadAllLines$1: function (path, encoding) {
                    if (path == null) {
                        throw new System.ArgumentNullException("path");
                    }
                    if (encoding == null) {
                        throw new System.ArgumentNullException("encoding");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException("Argument_EmptyPath");
                    }

                    return System.IO.File.InternalReadAllLines(path, encoding);
                },
                InternalReadAllLines: function (path, encoding) {

                    var line;
                    var lines = new (System.Collections.Generic.List$1(System.String)).ctor();

                    var sr = new System.IO.StreamReader.$ctor9(path, encoding);
                    try {
                        while (((line = sr.ReadLine())) != null) {
                            lines.add(line);
                        }
                    }
                    finally {
                        if (Bridge.hasValue(sr)) {
                            sr.System$IDisposable$dispose();
                        }
                    }

                    return lines.toArray();
                },
                ReadLines: function (path) {
                    if (path == null) {
                        throw new System.ArgumentNullException("path");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException("Argument_EmptyPath", "path");
                    }

                    return System.IO.ReadLinesIterator.CreateIterator(path, System.Text.Encoding.UTF8);
                },
                ReadLines$1: function (path, encoding) {
                    if (path == null) {
                        throw new System.ArgumentNullException("path");
                    }
                    if (encoding == null) {
                        throw new System.ArgumentNullException("encoding");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException("Argument_EmptyPath", "path");
                    }

                    return System.IO.ReadLinesIterator.CreateIterator(path, encoding);
                }
            }
        }
    });

    Bridge.define("System.IO.FileMode", {
        $kind: "enum",
        statics: {
            fields: {
                CreateNew: 1,
                Create: 2,
                Open: 3,
                OpenOrCreate: 4,
                Truncate: 5,
                Append: 6
            }
        }
    });

    Bridge.define("System.IO.Iterator$1", function (TSource) { return {
        inherits: [System.Collections.Generic.IEnumerable$1(TSource),System.Collections.Generic.IEnumerator$1(TSource)],
        fields: {
            state: 0,
            current: Bridge.getDefaultValue(TSource)
        },
        props: {
            Current: {
                get: function () {
                    return this.current;
                }
            },
            System$Collections$IEnumerator$Current: {
                get: function () {
                    return this.Current;
                }
            }
        },
        alias: [
            "Current", ["System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(TSource) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1"],
            "Dispose", "System$IDisposable$dispose",
            "GetEnumerator", ["System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(TSource) + "$getEnumerator", "System$Collections$Generic$IEnumerable$1$getEnumerator"]
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            Dispose: function () {
                this.Dispose$1(true);
            },
            Dispose$1: function (disposing) {
                this.current = Bridge.getDefaultValue(TSource);
                this.state = -1;
            },
            GetEnumerator: function () {
                if (this.state === 0) {
                    this.state = 1;
                    return this;
                }

                var duplicate = this.Clone();
                duplicate.state = 1;
                return duplicate;
            },
            System$Collections$IEnumerable$getEnumerator: function () {
                return this.GetEnumerator();
            },
            System$Collections$IEnumerator$reset: function () {
                throw new System.NotSupportedException();
            }
        }
    }; });

    Bridge.define("System.IO.SeekOrigin", {
        $kind: "enum",
        statics: {
            fields: {
                Begin: 0,
                Current: 1,
                End: 2
            }
        }
    });

    Bridge.define("System.IO.Stream.SynchronousAsyncResult", {
        inherits: [System.IAsyncResult],
        statics: {
            methods: {
                EndRead: function (asyncResult) {

                    var ar = Bridge.as(asyncResult, System.IO.Stream.SynchronousAsyncResult);
                    if (ar == null || ar._isWrite) {
                        System.IO.__Error.WrongAsyncResult();
                    }

                    if (ar._endXxxCalled) {
                        System.IO.__Error.EndReadCalledTwice();
                    }

                    ar._endXxxCalled = true;

                    ar.ThrowIfError();
                    return ar._bytesRead;
                },
                EndWrite: function (asyncResult) {

                    var ar = Bridge.as(asyncResult, System.IO.Stream.SynchronousAsyncResult);
                    if (ar == null || !ar._isWrite) {
                        System.IO.__Error.WrongAsyncResult();
                    }

                    if (ar._endXxxCalled) {
                        System.IO.__Error.EndWriteCalledTwice();
                    }

                    ar._endXxxCalled = true;

                    ar.ThrowIfError();
                }
            }
        },
        fields: {
            _stateObject: null,
            _isWrite: false,
            _exceptionInfo: null,
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
            "IsCompleted", "System$IAsyncResult$IsCompleted",
            "AsyncState", "System$IAsyncResult$AsyncState",
            "CompletedSynchronously", "System$IAsyncResult$CompletedSynchronously"
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
                this._exceptionInfo = ex;
                this._stateObject = asyncStateObject;
                this._isWrite = isWrite;
            }
        },
        methods: {
            ThrowIfError: function () {
                if (this._exceptionInfo != null) {
                    throw this._exceptionInfo;
                }
            }
        }
    });

    Bridge.define("System.IO.TextReader", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                Null: null
            },
            ctors: {
                init: function () {
                    this.Null = new System.IO.TextReader.NullTextReader();
                }
            },
            methods: {
                Synchronized: function (reader) {
                    if (reader == null) {
                        throw new System.ArgumentNullException("reader");
                    }

                    return reader;
                }
            }
        },
        alias: ["Dispose", "System$IDisposable$dispose"],
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            Close: function () {
                this.Dispose$1(true);
            },
            Dispose: function () {
                this.Dispose$1(true);
            },
            Dispose$1: function (disposing) { },
            Peek: function () {

                return -1;
            },
            Read: function () {
                return -1;
            },
            Read$1: function (buffer, index, count) {
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

                var n = 0;
                do {
                    var ch = this.Read();
                    if (ch === -1) {
                        break;
                    }
                    buffer[System.Array.index(((index + Bridge.identity(n, (n = (n + 1) | 0))) | 0), buffer)] = ch & 65535;
                } while (n < count);
                return n;
            },
            ReadToEnd: function () {

                var chars = System.Array.init(4096, 0, System.Char);
                var len;
                var sb = new System.Text.StringBuilder("", 4096);
                while (((len = this.Read$1(chars, 0, chars.length))) !== 0) {
                    sb.append(System.String.fromCharArray(chars, 0, len));
                }
                return sb.toString();
            },
            ReadBlock: function (buffer, index, count) {

                var i, n = 0;
                do {
                    n = (n + ((i = this.Read$1(buffer, ((index + n) | 0), ((count - n) | 0))))) | 0;
                } while (i > 0 && n < count);
                return n;
            },
            ReadLine: function () {
                var sb = new System.Text.StringBuilder();
                while (true) {
                    var ch = this.Read();
                    if (ch === -1) {
                        break;
                    }
                    if (ch === 13 || ch === 10) {
                        if (ch === 13 && this.Peek() === 10) {
                            this.Read();
                        }
                        return sb.toString();
                    }
                    sb.append(String.fromCharCode((ch & 65535)));
                }
                if (sb.getLength() > 0) {
                    return sb.toString();
                }
                return null;
            }
        }
    });

    Bridge.define("System.IO.TextWriter", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                Null: null,
                InitialNewLine: null
            },
            ctors: {
                init: function () {
                    this.Null = new System.IO.TextWriter.NullTextWriter();
                    this.InitialNewLine = "\r\n";
                }
            },
            methods: {
                Synchronized: function (writer) {
                    if (writer == null) {
                        throw new System.ArgumentNullException("writer");
                    }

                    return writer;
                }
            }
        },
        fields: {
            CoreNewLine: null,
            InternalFormatProvider: null
        },
        props: {
            FormatProvider: {
                get: function () {
                    if (this.InternalFormatProvider == null) {
                        return System.Globalization.CultureInfo.getCurrentCulture();
                    } else {
                        return this.InternalFormatProvider;
                    }
                }
            },
            NewLine: {
                get: function () {
                    return System.String.fromCharArray(this.CoreNewLine);
                },
                set: function (value) {
                    if (value == null) {
                        value = System.IO.TextWriter.InitialNewLine;
                    }
                    this.CoreNewLine = System.String.toCharArray(value, 0, value.length);
                }
            }
        },
        alias: ["Dispose", "System$IDisposable$dispose"],
        ctors: {
            init: function () {
                this.CoreNewLine = System.Array.init([13, 10], System.Char);
            },
            ctor: function () {
                this.$initialize();
                this.InternalFormatProvider = null; // Ask for CurrentCulture all the time.
            },
            $ctor1: function (formatProvider) {
                this.$initialize();
                this.InternalFormatProvider = formatProvider;
            }
        },
        methods: {
            Close: function () {
                this.Dispose$1(true);
            },
            Dispose$1: function (disposing) { },
            Dispose: function () {
                this.Dispose$1(true);
            },
            Flush: function () { },
            Write$1: function (value) { },
            Write$2: function (buffer) {
                if (buffer != null) {
                    this.Write$3(buffer, 0, buffer.length);
                }
            },
            Write$3: function (buffer, index, count) {
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

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    this.Write$1(buffer[System.Array.index(((index + i) | 0), buffer)]);
                }
            },
            Write: function (value) {
                this.Write$10(value ? System.Boolean.trueString : System.Boolean.falseString);
            },
            Write$6: function (value) {
                this.Write$10(System.Int32.format(value, "G", this.FormatProvider));
            },
            Write$15: function (value) {
                this.Write$10(System.UInt32.format(value, "G", this.FormatProvider));
            },
            Write$7: function (value) {
                this.Write$10(value.format("G", this.FormatProvider));
            },
            Write$16: function (value) {
                this.Write$10(value.format("G", this.FormatProvider));
            },
            Write$9: function (value) {
                this.Write$10(System.Single.format(value, "G", this.FormatProvider));
            },
            Write$5: function (value) {
                this.Write$10(System.Double.format(value, "G", this.FormatProvider));
            },
            Write$4: function (value) {
                this.Write$10(Bridge.Int.format(value, "G", this.FormatProvider));
            },
            Write$10: function (value) {
                if (value != null) {
                    this.Write$2(System.String.toCharArray(value, 0, value.length));
                }
            },
            Write$8: function (value) {
                if (value != null) {
                    var f = Bridge.as(value, System.IFormattable);
                    if (f != null) {
                        this.Write$10(Bridge.format(f, null, this.FormatProvider));
                    } else {
                        this.Write$10(value.toString());
                    }
                }
            },
            Write$11: function (format, arg0) {
                this.Write$10(System.String.formatProvider(this.FormatProvider, format, arg0));
            },
            Write$12: function (format, arg0, arg1) {
                this.Write$10(System.String.formatProvider(this.FormatProvider, format, arg0, arg1));
            },
            Write$13: function (format, arg0, arg1, arg2) {
                this.Write$10(System.String.formatProvider(this.FormatProvider, format, arg0, arg1, arg2));
            },
            Write$14: function (format, arg) {
                if (arg === void 0) { arg = []; }
                this.Write$10(System.String.formatProvider.apply(System.String, [this.FormatProvider, format].concat(arg)));
            },
            WriteLine: function () {
                this.Write$2(this.CoreNewLine);
            },
            WriteLine$2: function (value) {
                this.Write$1(value);
                this.WriteLine();
            },
            WriteLine$3: function (buffer) {
                this.Write$2(buffer);
                this.WriteLine();
            },
            WriteLine$4: function (buffer, index, count) {
                this.Write$3(buffer, index, count);
                this.WriteLine();
            },
            WriteLine$1: function (value) {
                this.Write(value);
                this.WriteLine();
            },
            WriteLine$7: function (value) {
                this.Write$6(value);
                this.WriteLine();
            },
            WriteLine$16: function (value) {
                this.Write$15(value);
                this.WriteLine();
            },
            WriteLine$8: function (value) {
                this.Write$7(value);
                this.WriteLine();
            },
            WriteLine$17: function (value) {
                this.Write$16(value);
                this.WriteLine();
            },
            WriteLine$10: function (value) {
                this.Write$9(value);
                this.WriteLine();
            },
            WriteLine$6: function (value) {
                this.Write$5(value);
                this.WriteLine();
            },
            WriteLine$5: function (value) {
                this.Write$4(value);
                this.WriteLine();
            },
            WriteLine$11: function (value) {

                if (value == null) {
                    this.WriteLine();
                } else {
                    // We'd ideally like WriteLine to be atomic, in that one call
                    // to WriteLine equals one call to the OS (ie, so writing to
                    // console while simultaneously calling printf will guarantee we
                    // write out a string and new line chars, without any interference).
                    // Additionally, we need to call ToCharArray on Strings anyways,
                    // so allocating a char[] here isn't any worse than what we were
                    // doing anyways.  We do reduce the number of calls to the
                    // backing store this way, potentially.
                    var vLen = value.length;
                    var nlLen = this.CoreNewLine.length;
                    var chars = System.Array.init(((vLen + nlLen) | 0), 0, System.Char);
                    System.String.copyTo(value, 0, chars, 0, vLen);
                    // CoreNewLine will almost always be 2 chars, and possibly 1.
                    if (nlLen === 2) {
                        chars[System.Array.index(vLen, chars)] = this.CoreNewLine[System.Array.index(0, this.CoreNewLine)];
                        chars[System.Array.index(((vLen + 1) | 0), chars)] = this.CoreNewLine[System.Array.index(1, this.CoreNewLine)];
                    } else if (nlLen === 1) {
                        chars[System.Array.index(vLen, chars)] = this.CoreNewLine[System.Array.index(0, this.CoreNewLine)];
                    } else {
                        System.Array.copy(this.CoreNewLine, 0, chars, Bridge.Int.mul(vLen, 2), Bridge.Int.mul(nlLen, 2));
                    }
                    this.Write$3(chars, 0, ((vLen + nlLen) | 0));
                }
                /* 
                Write(value);  // We could call Write(String) on StreamWriter...
                WriteLine();
                */
            },
            WriteLine$9: function (value) {
                if (value == null) {
                    this.WriteLine();
                } else {
                    // Call WriteLine(value.ToString), not Write(Object), WriteLine().
                    // This makes calls to WriteLine(Object) atomic.
                    var f = Bridge.as(value, System.IFormattable);
                    if (f != null) {
                        this.WriteLine$11(Bridge.format(f, null, this.FormatProvider));
                    } else {
                        this.WriteLine$11(value.toString());
                    }
                }
            },
            WriteLine$12: function (format, arg0) {
                this.WriteLine$11(System.String.formatProvider(this.FormatProvider, format, arg0));
            },
            WriteLine$13: function (format, arg0, arg1) {
                this.WriteLine$11(System.String.formatProvider(this.FormatProvider, format, arg0, arg1));
            },
            WriteLine$14: function (format, arg0, arg1, arg2) {
                this.WriteLine$11(System.String.formatProvider(this.FormatProvider, format, arg0, arg1, arg2));
            },
            WriteLine$15: function (format, arg) {
                if (arg === void 0) { arg = []; }
                this.WriteLine$11(System.String.formatProvider.apply(System.String, [this.FormatProvider, format].concat(arg)));
            }
        }
    });

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
                        throw new System.ArgumentOutOfRangeException("value");
                    }

                    this.EnsureNotClosed();
                    this.EnsureCanSeek();

                    if (this._writePos > 0) {
                        this.FlushWrite();
                    }

                    this._readPos = 0;
                    this._readLen = 0;
                    this._stream.Seek(value, System.IO.SeekOrigin.Begin);
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
                    throw new System.ArgumentNullException("stream");
                }

                if (bufferSize <= 0) {
                    throw new System.ArgumentOutOfRangeException("bufferSize");
                }

                this._stream = stream;
                this._bufferSize = bufferSize;

                // Allocate _buffer on its first use - it will not be used if all reads
                // & writes are greater than or equal to buffer size.

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


                // Already have shadow buffer?
                if (this._buffer.length !== this._bufferSize || this._bufferSize >= System.IO.BufferedStream.MaxShadowBufferSize) {
                    return;
                }

                var shadowBuffer = System.Array.init(Math.min(((this._bufferSize + this._bufferSize) | 0), System.IO.BufferedStream.MaxShadowBufferSize), 0, System.Byte);
                System.Array.copy(this._buffer, 0, shadowBuffer, 0, this._writePos);
                this._buffer = shadowBuffer;
            },
            EnsureBufferAllocated: function () {


                // BufferedStream is not intended for multi-threaded use, so no worries about the get/set ---- on _buffer.
                if (this._buffer == null) {
                    this._buffer = System.Array.init(this._bufferSize, 0, System.Byte);
                }
            },
            Dispose$1: function (disposing) {

                try {
                    if (disposing && this._stream != null) {
                        try {
                            this.Flush();
                        }
                        finally {
                            this._stream.Close();
                        }
                    }
                }
                finally {
                    this._stream = null;
                    this._buffer = null;

                    // Call base.Dispose(bool) to cleanup async IO resources
                    System.IO.Stream.prototype.Dispose$1.call(this, disposing);
                }
            },
            Flush: function () {

                this.EnsureNotClosed();

                // Has WRITE data in the buffer:
                if (this._writePos > 0) {

                    this.FlushWrite();
                    return;
                }

                // Has READ data in the buffer:
                if (this._readPos < this._readLen) {

                    // If the underlying stream is not seekable AND we have something in the read buffer, then FlushRead would throw.
                    // We can either throw away the buffer resulting in data loss (!) or ignore the Flush.
                    // (We cannot throw becasue it would be a breaking change.) We opt into ignoring the Flush in that situation.
                    if (!this._stream.CanSeek) {
                        return;
                    }

                    this.FlushRead();

                    // User streams may have opted to throw from Flush if CanWrite is false (although the abstract Stream does not do so).
                    // However, if we do not forward the Flush to the underlying stream, we may have problems when chaining several streams.
                    // Let us make a best effort attempt:
                    if (this._stream.CanWrite || Bridge.is(this._stream, System.IO.BufferedStream)) {
                        this._stream.Flush();
                    }

                    return;
                }

                // We had no data in the buffer, but we still need to tell the underlying stream to flush.
                if (this._stream.CanWrite || Bridge.is(this._stream, System.IO.BufferedStream)) {
                    this._stream.Flush();
                }

                this._writePos = (this._readPos = (this._readLen = 0));
            },
            FlushRead: function () {


                if (((this._readPos - this._readLen) | 0) !== 0) {
                    this._stream.Seek(System.Int64(this._readPos - this._readLen), System.IO.SeekOrigin.Current);
                }

                this._readPos = 0;
                this._readLen = 0;
            },
            ClearReadBufferBeforeWrite: function () {

                // This is called by write methods to clear the read buffer.


                // No READ data in the buffer:
                if (this._readPos === this._readLen) {

                    this._readPos = (this._readLen = 0);
                    return;
                }

                // Must have READ data.

                // If the underlying stream cannot seek, FlushRead would end up throwing NotSupported.
                // However, since the user did not call a method that is intuitively expected to seek, a better message is in order.
                // Ideally, we would throw an InvalidOperation here, but for backward compat we have to stick with NotSupported.
                if (!this._stream.CanSeek) {
                    throw new System.NotSupportedException();
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

                }
                catch (ex) {
                    ex = System.Exception.create(ex);
                    error.v = ex;
                    return 0;
                }
            },
            Read: function (array, offset, count) {

                if (array == null) {
                    throw new System.ArgumentNullException("array");
                }
                if (offset < 0) {
                    throw new System.ArgumentOutOfRangeException("offset");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }
                if (((array.length - offset) | 0) < count) {
                    throw new System.ArgumentException();
                }

                this.EnsureNotClosed();
                this.EnsureCanRead();

                var bytesFromBuffer = this.ReadFromBuffer(array, offset, count);

                // We may have read less than the number of bytes the user asked for, but that is part of the Stream contract.

                // Reading again for more data may cause us to block if we're using a device with no clear end of file,
                // such as a serial port or pipe. If we blocked here and this code was used with redirected pipes for a
                // process's standard output, this can lead to deadlocks involving two processes.
                // BUT - this is a breaking change.
                // So: If we could not read all bytes the user asked for from the buffer, we will try once from the underlying
                // stream thus ensuring the same blocking behaviour as if the underlying stream was not wrapped in this BufferedStream.
                if (bytesFromBuffer === count) {
                    return bytesFromBuffer;
                }

                var alreadySatisfied = bytesFromBuffer;
                if (bytesFromBuffer > 0) {
                    count = (count - bytesFromBuffer) | 0;
                    offset = (offset + bytesFromBuffer) | 0;
                }

                // So the READ buffer is empty.
                this._readPos = (this._readLen = 0);

                // If there was anything in the WRITE buffer, clear it.
                if (this._writePos > 0) {
                    this.FlushWrite();
                }

                // If the requested read is larger than buffer size, avoid the buffer and still use a single read:
                if (count >= this._bufferSize) {

                    return ((this._stream.Read(array, offset, count) + alreadySatisfied) | 0);
                }

                // Ok. We can fill the buffer:
                this.EnsureBufferAllocated();
                this._readLen = this._stream.Read(this._buffer, 0, this._bufferSize);

                bytesFromBuffer = this.ReadFromBuffer(array, offset, count);

                // We may have read less than the number of bytes the user asked for, but that is part of the Stream contract.
                // Reading again for more data may cause us to block if we're using a device with no clear end of stream,
                // such as a serial port or pipe.  If we blocked here & this code was used with redirected pipes for a process's
                // standard output, this can lead to deadlocks involving two processes. Additionally, translating one read on the
                // BufferedStream to more than one read on the underlying Stream may defeat the whole purpose of buffering of the
                // underlying reads are significantly more expensive.

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

                }
                catch (ex) {
                    ex = System.Exception.create(ex);
                    error.v = ex;
                }
            },
            Write: function (array, offset, count) {
                offset = {v:offset};
                count = {v:count};

                if (array == null) {
                    throw new System.ArgumentNullException("array");
                }
                if (offset.v < 0) {
                    throw new System.ArgumentOutOfRangeException("offset");
                }
                if (count.v < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }
                if (((array.length - offset.v) | 0) < count.v) {
                    throw new System.ArgumentException();
                }

                this.EnsureNotClosed();
                this.EnsureCanWrite();

                if (this._writePos === 0) {
                    this.ClearReadBufferBeforeWrite();
                }

                // We need to use the buffer, while avoiding unnecessary buffer usage / memory copies.
                // We ASSUME that memory copies are much cheaper than writes to the underlying stream, so if an extra copy is
                // guaranteed to reduce the number of writes, we prefer it.
                // We pick a simple strategy that makes degenerate cases rare if our assumptions are right.
                //
                // For ever write, we use a simple heuristic (below) to decide whether to use the buffer.
                // The heuristic has the desirable property (*) that if the specified user data can fit into the currently available
                // buffer space without filling it up completely, the heuristic will always tell us to use the buffer. It will also
                // tell us to use the buffer in cases where the current write would fill the buffer, but the remaining data is small
                // enough such that subsequent operations can use the buffer again.
                //
                // Algorithm:
                // Determine whether or not to buffer according to the heuristic (below).
                // If we decided to use the buffer:
                //     Copy as much user data as we can into the buffer.
                //     If we consumed all data: We are finished.
                //     Otherwise, write the buffer out.
                //     Copy the rest of user data into the now cleared buffer (no need to write out the buffer again as the heuristic
                //     will prevent it from being filled twice).
                // If we decided not to use the buffer:
                //     Can the data already in the buffer and current user data be combines to a single write
                //     by allocating a "shadow" buffer of up to twice the size of _bufferSize (up to a limit to avoid LOH)?
                //     Yes, it can:
                //         Allocate a larger "shadow" buffer and ensure the buffered  data is moved there.
                //         Copy user data to the shadow buffer.
                //         Write shadow buffer to the underlying stream in a single operation.
                //     No, it cannot (amount of data is still too large):
                //         Write out any data possibly in the buffer.
                //         Write out user data directly.
                //
                // Heuristic:
                // If the subsequent write operation that follows the current write operation will result in a write to the
                // underlying stream in case that we use the buffer in the current write, while it would not have if we avoided
                // using the buffer in the current write (by writing current user data to the underlying stream directly), then we
                // prefer to avoid using the buffer since the corresponding memory copy is wasted (it will not reduce the number
                // of writes to the underlying stream, which is what we are optimising for).
                // ASSUME that the next write will be for the same amount of bytes as the current write (most common case) and
                // determine if it will cause a write to the underlying stream. If the next write is actually larger, our heuristic
                // still yields the right behaviour, if the next write is actually smaller, we may making an unnecessary write to
                // the underlying stream. However, this can only occur if the current write is larger than half the buffer size and
                // we will recover after one iteration.
                // We have:
                //     useBuffer = (_writePos + count + count < _bufferSize + _bufferSize)
                //
                // Example with _bufferSize = 20, _writePos = 6, count = 10:
                //
                //     +---------------------------------------+---------------------------------------+
                //     |             current buffer            | next iteration's "future" buffer      |
                //     +---------------------------------------+---------------------------------------+
                //     |0| | | | | | | | | |1| | | | | | | | | |2| | | | | | | | | |3| | | | | | | | | |
                //     |0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|
                //     +-----------+-------------------+-------------------+---------------------------+
                //     | _writePos |  current count    | assumed next count|avail buff after next write|
                //     +-----------+-------------------+-------------------+---------------------------+
                //
                // A nice property (*) of this heuristic is that it will always succeed if the user data completely fits into the
                // available buffer, i.e. if count < (_bufferSize - _writePos).


                var totalUserBytes;
                var useBuffer; // We do not expect buffer sizes big enough for an overflow, but if it happens, lets fail early:
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


                } else { // if (!useBuffer)

                    // Write out the buffer if necessary.
                    if (this._writePos > 0) {


                        // Try avoiding extra write to underlying stream by combining previously buffered data with current user data:
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

                    // Write out user data.
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

                // We should not be flushing here, but only writing to the underlying stream, but previous version flushed, so we keep this.
                if (this._writePos >= ((this._bufferSize - 1) | 0)) {
                    this.FlushWrite();
                }

                this._buffer[System.Array.index(Bridge.identity(this._writePos, (this._writePos = (this._writePos + 1) | 0)), this._buffer)] = value;

            },
            Seek: function (offset, origin) {

                this.EnsureNotClosed();
                this.EnsureCanSeek();

                // If we have bytes in the WRITE buffer, flush them out, seek and be done.
                if (this._writePos > 0) {

                    // We should be only writing the buffer and not flushing,
                    // but the previous version did flush and we stick to it for back-compat reasons.
                    this.FlushWrite();
                    return this._stream.Seek(offset, origin);
                }

                // The buffer is either empty or we have a buffered READ.

                if (((this._readLen - this._readPos) | 0) > 0 && origin === System.IO.SeekOrigin.Current) {

                    // If we have bytes in the READ buffer, adjust the seek offset to account for the resulting difference
                    // between this stream's position and the underlying stream's position.
                    offset = offset.sub(System.Int64((((this._readLen - this._readPos) | 0))));
                }

                var oldPos = this.Position;

                var newPos = this._stream.Seek(offset, origin);

                // If the seek destination is still within the data currently in the buffer, we want to keep the buffer data and continue using it.
                // Otherwise we will throw away the buffer. This can only happen on READ, as we flushed WRITE data above.

                // The offset of the new/updated seek pointer within _buffer:
                this._readPos = System.Int64.clip32(newPos.sub((oldPos.sub(System.Int64(this._readPos)))));

                // If the offset of the updated seek pointer in the buffer is still legal, then we can keep using the buffer:
                if (0 <= this._readPos && this._readPos < this._readLen) {

                    // Adjust the seek pointer of the underlying stream to reflect the amount of useful bytes in the read buffer:
                    this._stream.Seek(System.Int64(this._readLen - this._readPos), System.IO.SeekOrigin.Current);

                } else { // The offset of the updated seek pointer is not a legal offset. Loose the buffer.

                    this._readPos = (this._readLen = 0);
                }

                return newPos;
            },
            SetLength: function (value) {

                if (value.lt(System.Int64(0))) {
                    throw new System.ArgumentOutOfRangeException("value");
                }

                this.EnsureNotClosed();
                this.EnsureCanSeek();
                this.EnsureCanWrite();

                this.Flush();
                this._stream.SetLength(value);
            }
        }
    });

    Bridge.define("System.IO.EndOfStreamException", {
        inherits: [System.IO.IOException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.IOException.$ctor1.call(this, "Arg_EndOfStreamException");
            },
            $ctor1: function (message) {
                this.$initialize();
                System.IO.IOException.$ctor1.call(this, message);
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.IO.IOException.$ctor2.call(this, message, innerException);
            }
        }
    });

    Bridge.define("System.IO.FileStream", {
        inherits: [System.IO.Stream],
        statics: {
            methods: {
                FromFile: function (file) {
                    var completer = new System.Threading.Tasks.TaskCompletionSource();
                    var fileReader = new FileReader();
                    fileReader.onload = function () {
                        completer.setResult(new System.IO.FileStream.ctor(fileReader.result, file.name));
                    };
                    fileReader.onerror = function (e) {
                        completer.setException(new Bridge.ErrorException(Bridge.unbox(e).target.error.As()));
                    };
                    fileReader.readAsArrayBuffer(file);

                    return completer.task;
                },
                ReadBytes: function (path) {
                    if (Bridge.isNode) {
                        var fs = require("fs");
                        return Bridge.cast(fs.readFileSync(path), ArrayBuffer);
                    } else {
                        var req = new XMLHttpRequest();
                        req.open("GET", path, false);
                        req.overrideMimeType("text/plain; charset=binary-data");
                        req.send(null);
                        if (req.status !== 200) {
                            throw new System.IO.IOException.$ctor1(System.String.format("Status of request to {0} returned status: {1}", path, Bridge.box(req.status, System.UInt16)));
                        }
                        var text = req.responseText;
                        var resultArray = new Uint8Array(text.length);
                        System.String.toCharArray(text, 0, text.length).forEach(function (v, index, array) {
                                var $t;
                                return ($t = (v & 255) & 255, resultArray[index] = $t, $t);
                            });
                        return resultArray.buffer;
                    }
                }
            }
        },
        fields: {
            name: null,
            _buffer: null
        },
        props: {
            CanRead: {
                get: function () {
                    return true;
                }
            },
            CanWrite: {
                get: function () {
                    return false;
                }
            },
            CanSeek: {
                get: function () {
                    return false;
                }
            },
            IsAsync: {
                get: function () {
                    return false;
                }
            },
            Name: {
                get: function () {
                    return this.name;
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
            $ctor1: function (path, mode) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
                this._buffer = System.IO.FileStream.ReadBytes(path);
                this.name = path;
            },
            ctor: function (buffer, name) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
                this._buffer = buffer;
                this.name = name;
            }
        },
        methods: {
            Flush: function () { },
            Seek: function (offset, origin) {
                throw new System.NotImplementedException();
            },
            SetLength: function (value) {
                throw new System.NotImplementedException();
            },
            Write: function (buffer, offset, count) {
                throw new System.NotImplementedException();
            },
            Read: function (buffer, offset, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer");
                }

                if (offset < 0) {
                    throw new System.ArgumentOutOfRangeException("offset");
                }

                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }

                if ((this.Length.sub(System.Int64(offset))).lt(System.Int64(count))) {
                    throw new System.ArgumentException();
                }

                var num = this.Length.sub(this.Position);
                if (num.gt(System.Int64(count))) {
                    num = System.Int64(count);
                }

                if (num.lte(System.Int64(0))) {
                    return 0;
                }

                var byteBuffer = new Uint8Array(this._buffer);
                if (num.gt(System.Int64(8))) {
                    for (var n = 0; System.Int64(n).lt(num); n = (n + 1) | 0) {
                        buffer[System.Array.index(((n + offset) | 0), buffer)] = byteBuffer[this.Position.add(System.Int64(n))];
                    }
                } else {
                    var num1 = num;
                    while (true) {
                        var num2 = num1.sub(System.Int64(1));
                        num1 = num2;
                        if (num2.lt(System.Int64(0))) {
                            break;
                        }
                        buffer[System.Array.index(System.Int64.toNumber(System.Int64(offset).add(num1)), buffer)] = byteBuffer[this.Position.add(num1)];
                    }
                }
                this.Position = this.Position.add(num);
                return System.Int64.clip32(num);
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
                        System.IO.__Error.StreamIsClosed();
                    }
                    return ((this._capacity - this._origin) | 0);
                },
                set: function (value) {
                    // Only update the capacity if the MS is expandable and the value is different than the current capacity.
                    // Special behavior if the MS isn't expandable: we don't throw if value is the same as the current capacity
                    if (System.Int64(value).lt(this.Length)) {
                        throw new System.ArgumentOutOfRangeException("value", "ArgumentOutOfRange_SmallCapacity");
                    }

                    if (!this._isOpen) {
                        System.IO.__Error.StreamIsClosed();
                    }
                    if (!this._expandable && (value !== this.Capacity)) {
                        System.IO.__Error.MemoryStreamNotExpandable();
                    }

                    // MemoryStream has this invariant: _origin > 0 => !expandable (see ctors)
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
                        throw new System.ArgumentOutOfRangeException("value", "ArgumentOutOfRange_NeedNonNegNum");
                    }

                    if (!this._isOpen) {
                        System.IO.__Error.StreamIsClosed();
                    }

                    if (value.gt(System.Int64(System.IO.MemoryStream.MemStreamMaxLength))) {
                        throw new System.ArgumentOutOfRangeException("value", "ArgumentOutOfRange_StreamLength");
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
                    throw new System.ArgumentOutOfRangeException("capacity", "ArgumentOutOfRange_NegativeCapacity");
                }

                this._buffer = System.Array.init(capacity, 0, System.Byte);
                this._capacity = capacity;
                this._expandable = true;
                this._writable = true;
                this._exposable = true;
                this._origin = 0; // Must be 0 for byte[]'s created by MemoryStream
                this._isOpen = true;
            },
            $ctor1: function (buffer) {
                System.IO.MemoryStream.$ctor2.call(this, buffer, true);
            },
            $ctor2: function (buffer, writable) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer", "ArgumentNull_Buffer");
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
                    throw new System.ArgumentNullException("buffer", "ArgumentNull_Buffer");
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException("index", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (((buffer.length - index) | 0) < count) {
                    throw new System.ArgumentException("Argument_InvalidOffLen");
                }

                this._buffer = buffer;
                this._origin = (this._position = index);
                this._length = (this._capacity = (index + count) | 0);
                this._writable = writable;
                this._exposable = publiclyVisible; // Can TryGetBuffer/GetBuffer return the array?
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
                }
                finally {
                    // Call base.Close() to cleanup async IO resources
                    System.IO.Stream.prototype.Dispose$1.call(this, disposing);
                }
            },
            EnsureCapacity: function (value) {
                // Check for overflow
                if (value < 0) {
                    throw new System.IO.IOException.$ctor1("IO.IO_StreamTooLong");
                }
                if (value > this._capacity) {
                    var newCapacity = value;
                    if (newCapacity < 256) {
                        newCapacity = 256;
                    }
                    // We are ok with this overflowing since the next statement will deal
                    // with the cases where _capacity*2 overflows.
                    if (newCapacity < Bridge.Int.mul(this._capacity, 2)) {
                        newCapacity = Bridge.Int.mul(this._capacity, 2);
                    }
                    // We want to expand the array up to Array.MaxArrayLengthOneDimensional
                    // And we want to give the user the value that they asked for
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

                var pos = ((this._position = (this._position + 4) | 0)); // use temp to avoid ----
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
                } // len is less than 2^31 -1.
                this._position = (this._position + n) | 0;
                return n;
            },
            Read: function (buffer, offset, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer", "ArgumentNull_Buffer");
                }
                if (offset < 0) {
                    throw new System.ArgumentOutOfRangeException("offset", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (((buffer.length - offset) | 0) < count) {
                    throw new System.ArgumentException("Argument_InvalidOffLen");
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
                } // len is less than 2^31 -1.

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
                    throw new System.ArgumentOutOfRangeException("offset", "ArgumentOutOfRange_StreamLength");
                }
                switch (loc) {
                    case System.IO.SeekOrigin.Begin: 
                        {
                            var tempPosition = ((this._origin + System.Int64.clip32(offset)) | 0);
                            if (offset.lt(System.Int64(0)) || tempPosition < this._origin) {
                                throw new System.IO.IOException.$ctor1("IO.IO_SeekBeforeBegin");
                            }
                            this._position = tempPosition;
                            break;
                        }
                    case System.IO.SeekOrigin.Current: 
                        {
                            var tempPosition1 = ((this._position + System.Int64.clip32(offset)) | 0);
                            if (System.Int64(this._position).add(offset).lt(System.Int64(this._origin)) || tempPosition1 < this._origin) {
                                throw new System.IO.IOException.$ctor1("IO.IO_SeekBeforeBegin");
                            }
                            this._position = tempPosition1;
                            break;
                        }
                    case System.IO.SeekOrigin.End: 
                        {
                            var tempPosition2 = ((this._length + System.Int64.clip32(offset)) | 0);
                            if (System.Int64(this._length).add(offset).lt(System.Int64(this._origin)) || tempPosition2 < this._origin) {
                                throw new System.IO.IOException.$ctor1("IO.IO_SeekBeforeBegin");
                            }
                            this._position = tempPosition2;
                            break;
                        }
                    default: 
                        throw new System.ArgumentException("Argument_InvalidSeekOrigin");
                }

                return System.Int64(this._position);
            },
            SetLength: function (value) {
                if (value.lt(System.Int64(0)) || value.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException("value", "ArgumentOutOfRange_StreamLength");
                }
                this.EnsureWriteable();

                // Origin wasn't publicly exposed above. // Check parameter validation logic in this method if this fails.
                if (value.gt(System.Int64((((2147483647 - this._origin) | 0))))) {
                    throw new System.ArgumentOutOfRangeException("value", "ArgumentOutOfRange_StreamLength");
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
                    throw new System.ArgumentNullException("buffer", "ArgumentNull_Buffer");
                }
                if (offset < 0) {
                    throw new System.ArgumentOutOfRangeException("offset", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (((buffer.length - offset) | 0) < count) {
                    throw new System.ArgumentException("Argument_InvalidOffLen");
                }

                if (!this._isOpen) {
                    System.IO.__Error.StreamIsClosed();
                }
                this.EnsureWriteable();

                var i = (this._position + count) | 0;
                // Check for overflow
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
                    throw new System.ArgumentNullException("stream", "ArgumentNull_Stream");
                }

                if (!this._isOpen) {
                    System.IO.__Error.StreamIsClosed();
                }
                stream.Write(this._buffer, this._origin, ((this._length - this._origin) | 0));
            }
        }
    });

    Bridge.define("System.IO.ReadLinesIterator", {
        inherits: [System.IO.Iterator$1(System.String)],
        statics: {
            methods: {
                CreateIterator: function (path, encoding) {
                    return System.IO.ReadLinesIterator.CreateIterator$1(path, encoding, null);
                },
                CreateIterator$1: function (path, encoding, reader) {
                    return new System.IO.ReadLinesIterator(path, encoding, reader || new System.IO.StreamReader.$ctor9(path, encoding));
                }
            }
        },
        fields: {
            _path: null,
            _encoding: null,
            _reader: null
        },
        alias: ["MoveNext", "System$Collections$IEnumerator$moveNext"],
        ctors: {
            ctor: function (path, encoding, reader) {
                this.$initialize();
                System.IO.Iterator$1(System.String).ctor.call(this);

                this._path = path;
                this._encoding = encoding;
                this._reader = reader;
            }
        },
        methods: {
            MoveNext: function () {
                if (this._reader != null) {
                    this.current = this._reader.ReadLine();
                    if (this.current != null) {
                        return true;
                    }

                    // To maintain 4.0 behavior we Dispose
                    // after reading to the end of the reader.
                    this.Dispose();
                }

                return false;
            },
            Clone: function () {
                // NOTE: To maintain the same behavior with the previous yield-based
                // iterator in 4.0, we have all the IEnumerator<T> instances share the same
                // underlying reader. If we have already been disposed, _reader will be null,
                // which will cause CreateIterator to simply new up a new instance to start up
                // a new iteration. Dev10 Bugs 904764 has been filed to fix this in next side-
                // by-side release.
                return System.IO.ReadLinesIterator.CreateIterator$1(this._path, this._encoding, this._reader);
            },
            Dispose$1: function (disposing) {
                try {
                    if (disposing) {
                        if (this._reader != null) {
                            this._reader.Dispose();
                        }
                    }
                }
                finally {
                    this._reader = null;
                    System.IO.Iterator$1(System.String).prototype.Dispose$1.call(this, disposing);
                }
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
            Dispose$1: function (disposing) {
                // Do nothing - we don't want NullStream singleton (static) to be closable
            },
            Flush: function () { },
            BeginRead: function (buffer, offset, count, callback, state) {
                if (!this.CanRead) {
                    System.IO.__Error.ReadNotSupported();
                }

                return this.BlockingBeginRead(buffer, offset, count, callback, state);
            },
            EndRead: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                return System.IO.Stream.BlockingEndRead(asyncResult);
            },
            BeginWrite: function (buffer, offset, count, callback, state) {
                if (!this.CanWrite) {
                    System.IO.__Error.WriteNotSupported();
                }

                return this.BlockingBeginWrite(buffer, offset, count, callback, state);
            },
            EndWrite: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                System.IO.Stream.BlockingEndWrite(asyncResult);
            },
            Read: function (buffer, offset, count) {
                return 0;
            },
            ReadByte: function () {
                return -1;
            },
            Write: function (buffer, offset, count) { },
            WriteByte: function (value) { },
            Seek: function (offset, origin) {
                return System.Int64(0);
            },
            SetLength: function (length) { }
        }
    });

    Bridge.define("System.IO.StreamReader", {
        inherits: [System.IO.TextReader],
        statics: {
            fields: {
                Null: null,
                DefaultFileStreamBufferSize: 0,
                MinBufferSize: 0
            },
            props: {
                DefaultBufferSize: {
                    get: function () {
                        return 1024;
                    }
                }
            },
            ctors: {
                init: function () {
                    this.Null = new System.IO.StreamReader.NullStreamReader();
                    this.DefaultFileStreamBufferSize = 4096;
                    this.MinBufferSize = 128;
                }
            }
        },
        fields: {
            stream: null,
            encoding: null,
            byteBuffer: null,
            charBuffer: null,
            charPos: 0,
            charLen: 0,
            byteLen: 0,
            bytePos: 0,
            _maxCharsPerBuffer: 0,
            _detectEncoding: false,
            _isBlocked: false,
            _closable: false
        },
        props: {
            CurrentEncoding: {
                get: function () {
                    return this.encoding;
                }
            },
            BaseStream: {
                get: function () {
                    return this.stream;
                }
            },
            LeaveOpen: {
                get: function () {
                    return !this._closable;
                }
            },
            EndOfStream: {
                get: function () {
                    if (this.stream == null) {
                        System.IO.__Error.ReaderClosed();
                    }


                    if (this.charPos < this.charLen) {
                        return false;
                    }

                    // This may block on pipes!
                    var numRead = this.ReadBuffer();
                    return numRead === 0;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.TextReader.ctor.call(this);
            },
            $ctor1: function (stream) {
                System.IO.StreamReader.$ctor2.call(this, stream, true);
            },
            $ctor2: function (stream, detectEncodingFromByteOrderMarks) {
                System.IO.StreamReader.$ctor6.call(this, stream, System.Text.Encoding.UTF8, detectEncodingFromByteOrderMarks, System.IO.StreamReader.DefaultBufferSize, false);
            },
            $ctor3: function (stream, encoding) {
                System.IO.StreamReader.$ctor6.call(this, stream, encoding, true, System.IO.StreamReader.DefaultBufferSize, false);
            },
            $ctor4: function (stream, encoding, detectEncodingFromByteOrderMarks) {
                System.IO.StreamReader.$ctor6.call(this, stream, encoding, detectEncodingFromByteOrderMarks, System.IO.StreamReader.DefaultBufferSize, false);
            },
            $ctor5: function (stream, encoding, detectEncodingFromByteOrderMarks, bufferSize) {
                System.IO.StreamReader.$ctor6.call(this, stream, encoding, detectEncodingFromByteOrderMarks, bufferSize, false);
            },
            $ctor6: function (stream, encoding, detectEncodingFromByteOrderMarks, bufferSize, leaveOpen) {
                this.$initialize();
                System.IO.TextReader.ctor.call(this);
                if (stream == null || encoding == null) {
                    throw new System.ArgumentNullException((stream == null ? "stream" : "encoding"));
                }
                if (!stream.CanRead) {
                    throw new System.ArgumentException();
                }
                if (bufferSize <= 0) {
                    throw new System.ArgumentOutOfRangeException("bufferSize");
                }

                this.Init$1(stream, encoding, detectEncodingFromByteOrderMarks, bufferSize, leaveOpen);
            },
            $ctor7: function (path) {
                System.IO.StreamReader.$ctor8.call(this, path, true);
            },
            $ctor8: function (path, detectEncodingFromByteOrderMarks) {
                System.IO.StreamReader.$ctor11.call(this, path, System.Text.Encoding.UTF8, detectEncodingFromByteOrderMarks, System.IO.StreamReader.DefaultBufferSize);
            },
            $ctor9: function (path, encoding) {
                System.IO.StreamReader.$ctor11.call(this, path, encoding, true, System.IO.StreamReader.DefaultBufferSize);
            },
            $ctor10: function (path, encoding, detectEncodingFromByteOrderMarks) {
                System.IO.StreamReader.$ctor11.call(this, path, encoding, detectEncodingFromByteOrderMarks, System.IO.StreamReader.DefaultBufferSize);
            },
            $ctor11: function (path, encoding, detectEncodingFromByteOrderMarks, bufferSize) {
                System.IO.StreamReader.$ctor12.call(this, path, encoding, detectEncodingFromByteOrderMarks, bufferSize, true);
            },
            $ctor12: function (path, encoding, detectEncodingFromByteOrderMarks, bufferSize, checkHost) {
                this.$initialize();
                System.IO.TextReader.ctor.call(this);
                // Don't open a Stream before checking for invalid arguments,
                // or we'll create a FileStream on disk and we won't close it until
                // the finalizer runs, causing problems for applications.
                if (path == null || encoding == null) {
                    throw new System.ArgumentNullException((path == null ? "path" : "encoding"));
                }
                if (path.length === 0) {
                    throw new System.ArgumentException();
                }
                if (bufferSize <= 0) {
                    throw new System.ArgumentOutOfRangeException("bufferSize");
                }

                var stream = new System.IO.FileStream.$ctor1(path, System.IO.FileMode.Open);
                this.Init$1(stream, encoding, detectEncodingFromByteOrderMarks, bufferSize, false);
            }
        },
        methods: {
            Init$1: function (stream, encoding, detectEncodingFromByteOrderMarks, bufferSize, leaveOpen) {
                this.stream = stream;
                this.encoding = encoding;
                if (bufferSize < System.IO.StreamReader.MinBufferSize) {
                    bufferSize = System.IO.StreamReader.MinBufferSize;
                }
                this.byteBuffer = System.Array.init(bufferSize, 0, System.Byte);
                this._maxCharsPerBuffer = encoding.GetMaxCharCount(bufferSize);
                this.charBuffer = System.Array.init(this._maxCharsPerBuffer, 0, System.Char);
                this.byteLen = 0;
                this.bytePos = 0;
                this._detectEncoding = detectEncodingFromByteOrderMarks;
                this._isBlocked = false;
                this._closable = !leaveOpen;
            },
            Init: function (stream) {
                this.stream = stream;
                this._closable = true;
            },
            Close: function () {
                this.Dispose$1(true);
            },
            Dispose$1: function (disposing) {
                // Dispose of our resources if this StreamReader is closable.
                // Note that Console.In should be left open.
                try {
                    // Note that Stream.Close() can potentially throw here. So we need to
                    // ensure cleaning up internal resources, inside the finally block.
                    if (!this.LeaveOpen && disposing && (this.stream != null)) {
                        this.stream.Close();
                    }
                }
                finally {
                    if (!this.LeaveOpen && (this.stream != null)) {
                        this.stream = null;
                        this.encoding = null;
                        this.byteBuffer = null;
                        this.charBuffer = null;
                        this.charPos = 0;
                        this.charLen = 0;
                        System.IO.TextReader.prototype.Dispose$1.call(this, disposing);
                    }
                }
            },
            DiscardBufferedData: function () {

                this.byteLen = 0;
                this.charLen = 0;
                this.charPos = 0;
                this._isBlocked = false;
            },
            Peek: function () {
                if (this.stream == null) {
                    System.IO.__Error.ReaderClosed();
                }

                if (this.charPos === this.charLen) {
                    if (this._isBlocked || this.ReadBuffer() === 0) {
                        return -1;
                    }
                }
                return this.charBuffer[System.Array.index(this.charPos, this.charBuffer)];
            },
            Read: function () {
                if (this.stream == null) {
                    System.IO.__Error.ReaderClosed();
                }


                if (this.charPos === this.charLen) {
                    if (this.ReadBuffer() === 0) {
                        return -1;
                    }
                }
                var result = this.charBuffer[System.Array.index(this.charPos, this.charBuffer)];
                this.charPos = (this.charPos + 1) | 0;
                return result;
            },
            Read$1: function (buffer, index, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer");
                }
                if (index < 0 || count < 0) {
                    throw new System.ArgumentOutOfRangeException((index < 0 ? "index" : "count"));
                }
                if (((buffer.length - index) | 0) < count) {
                    throw new System.ArgumentException();
                }

                if (this.stream == null) {
                    System.IO.__Error.ReaderClosed();
                }


                var charsRead = 0;
                // As a perf optimization, if we had exactly one buffer's worth of
                // data read in, let's try writing directly to the user's buffer.
                var readToUserBuffer = { v : false };
                while (count > 0) {
                    var n = (this.charLen - this.charPos) | 0;
                    if (n === 0) {
                        n = this.ReadBuffer$1(buffer, ((index + charsRead) | 0), count, readToUserBuffer);
                    }
                    if (n === 0) {
                        break;
                    } // We're at EOF
                    if (n > count) {
                        n = count;
                    }
                    if (!readToUserBuffer.v) {
                        System.Array.copy(this.charBuffer, this.charPos, buffer, (((index + charsRead) | 0)), n);
                        this.charPos = (this.charPos + n) | 0;
                    }
                    charsRead = (charsRead + n) | 0;
                    count = (count - n) | 0;
                    // This function shouldn't block for an indefinite amount of time,
                    // or reading from a network stream won't work right.  If we got
                    // fewer bytes than we requested, then we want to break right here.
                    if (this._isBlocked) {
                        break;
                    }
                }

                return charsRead;
            },
            ReadToEnd: function () {
                if (this.stream == null) {
                    System.IO.__Error.ReaderClosed();
                }

                // Call ReadBuffer, then pull data out of charBuffer.
                var sb = new System.Text.StringBuilder("", ((this.charLen - this.charPos) | 0));
                do {
                    sb.append(System.String.fromCharArray(this.charBuffer, this.charPos, ((this.charLen - this.charPos) | 0)));
                    this.charPos = this.charLen; // Note we consumed these characters
                    this.ReadBuffer();
                } while (this.charLen > 0);
                return sb.toString();
            },
            ReadBlock: function (buffer, index, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer");
                }
                if (index < 0 || count < 0) {
                    throw new System.ArgumentOutOfRangeException((index < 0 ? "index" : "count"));
                }
                if (((buffer.length - index) | 0) < count) {
                    throw new System.ArgumentException();
                }

                if (this.stream == null) {
                    System.IO.__Error.ReaderClosed();
                }

                return System.IO.TextReader.prototype.ReadBlock.call(this, buffer, index, count);
            },
            CompressBuffer: function (n) {
                System.Array.copy(this.byteBuffer, n, this.byteBuffer, 0, ((this.byteLen - n) | 0));
                this.byteLen = (this.byteLen - n) | 0;
            },
            DetectEncoding: function () {
                if (this.byteLen < 2) {
                    return;
                }
                this._detectEncoding = false;
                var changedEncoding = false;
                if (this.byteBuffer[System.Array.index(0, this.byteBuffer)] === 254 && this.byteBuffer[System.Array.index(1, this.byteBuffer)] === 255) {
                    // Big Endian Unicode

                    this.encoding = new System.Text.UnicodeEncoding.$ctor1(true, true);
                    this.CompressBuffer(2);
                    changedEncoding = true;
                } else if (this.byteBuffer[System.Array.index(0, this.byteBuffer)] === 255 && this.byteBuffer[System.Array.index(1, this.byteBuffer)] === 254) {
                    // Little Endian Unicode, or possibly little endian UTF32
                    if (this.byteLen < 4 || this.byteBuffer[System.Array.index(2, this.byteBuffer)] !== 0 || this.byteBuffer[System.Array.index(3, this.byteBuffer)] !== 0) {
                        this.encoding = new System.Text.UnicodeEncoding.$ctor1(false, true);
                        this.CompressBuffer(2);
                        changedEncoding = true;
                    } else {
                        this.encoding = new System.Text.UTF32Encoding.$ctor1(false, true);
                        this.CompressBuffer(4);
                        changedEncoding = true;
                    }
                } else if (this.byteLen >= 3 && this.byteBuffer[System.Array.index(0, this.byteBuffer)] === 239 && this.byteBuffer[System.Array.index(1, this.byteBuffer)] === 187 && this.byteBuffer[System.Array.index(2, this.byteBuffer)] === 191) {
                    // UTF-8
                    this.encoding = System.Text.Encoding.UTF8;
                    this.CompressBuffer(3);
                    changedEncoding = true;
                } else if (this.byteLen >= 4 && this.byteBuffer[System.Array.index(0, this.byteBuffer)] === 0 && this.byteBuffer[System.Array.index(1, this.byteBuffer)] === 0 && this.byteBuffer[System.Array.index(2, this.byteBuffer)] === 254 && this.byteBuffer[System.Array.index(3, this.byteBuffer)] === 255) {
                    // Big Endian UTF32
                    this.encoding = new System.Text.UTF32Encoding.$ctor1(true, true);
                    this.CompressBuffer(4);
                    changedEncoding = true;
                } else if (this.byteLen === 2) {
                    this._detectEncoding = true;
                }
                // Note: in the future, if we change this algorithm significantly,
                // we can support checking for the preamble of the given encoding.

                if (changedEncoding) {
                    this._maxCharsPerBuffer = this.encoding.GetMaxCharCount(this.byteBuffer.length);
                    this.charBuffer = System.Array.init(this._maxCharsPerBuffer, 0, System.Char);
                }
            },
            IsPreamble: function () {
                return false;
            },
            ReadBuffer: function () {
                this.charLen = 0;
                this.charPos = 0;

                this.byteLen = 0;
                do {
                    this.byteLen = this.stream.Read(this.byteBuffer, 0, this.byteBuffer.length);

                    if (this.byteLen === 0) {
                        return this.charLen;
                    }

                    // _isBlocked == whether we read fewer bytes than we asked for.
                    // Note we must check it here because CompressBuffer or
                    // DetectEncoding will change byteLen.
                    this._isBlocked = (this.byteLen < this.byteBuffer.length);

                    // Check for preamble before detect encoding. This is not to override the
                    // user suppplied Encoding for the one we implicitly detect. The user could
                    // customize the encoding which we will loose, such as ThrowOnError on UTF8
                    if (this.IsPreamble()) {
                        continue;
                    }

                    // If we're supposed to detect the encoding and haven't done so yet,
                    // do it.  Note this may need to be called more than once.
                    if (this._detectEncoding && this.byteLen >= 2) {
                        this.DetectEncoding();
                    }

                    this.charLen = (this.charLen + (this.encoding.GetChars$2(this.byteBuffer, 0, this.byteLen, this.charBuffer, this.charLen))) | 0;
                } while (this.charLen === 0);
                //Console.WriteLine("ReadBuffer called.  chars: "+charLen);
                return this.charLen;
            },
            ReadBuffer$1: function (userBuffer, userOffset, desiredChars, readToUserBuffer) {
                this.charLen = 0;
                this.charPos = 0;

                this.byteLen = 0;

                var charsRead = 0;

                // As a perf optimization, we can decode characters DIRECTLY into a
                // user's char[].  We absolutely must not write more characters
                // into the user's buffer than they asked for.  Calculating
                // encoding.GetMaxCharCount(byteLen) each time is potentially very
                // expensive - instead, cache the number of chars a full buffer's
                // worth of data may produce.  Yes, this makes the perf optimization
                // less aggressive, in that all reads that asked for fewer than AND
                // returned fewer than _maxCharsPerBuffer chars won't get the user
                // buffer optimization.  This affects reads where the end of the
                // Stream comes in the middle somewhere, and when you ask for
                // fewer chars than your buffer could produce.
                readToUserBuffer.v = desiredChars >= this._maxCharsPerBuffer;

                do {


                    this.byteLen = this.stream.Read(this.byteBuffer, 0, this.byteBuffer.length);


                    if (this.byteLen === 0) {
                        break;
                    }

                    // _isBlocked == whether we read fewer bytes than we asked for.
                    // Note we must check it here because CompressBuffer or
                    // DetectEncoding will change byteLen.
                    this._isBlocked = (this.byteLen < this.byteBuffer.length);

                    // Check for preamble before detect encoding. This is not to override the
                    // user suppplied Encoding for the one we implicitly detect. The user could
                    // customize the encoding which we will loose, such as ThrowOnError on UTF8
                    // Note: we don't need to recompute readToUserBuffer optimization as IsPreamble
                    // doesn't change the encoding or affect _maxCharsPerBuffer
                    if (this.IsPreamble()) {
                        continue;
                    }

                    // On the first call to ReadBuffer, if we're supposed to detect the encoding, do it.
                    if (this._detectEncoding && this.byteLen >= 2) {
                        this.DetectEncoding();
                        // DetectEncoding changes some buffer state.  Recompute this.
                        readToUserBuffer.v = desiredChars >= this._maxCharsPerBuffer;
                    }

                    this.charPos = 0;
                    if (readToUserBuffer.v) {
                        charsRead = (charsRead + (this.encoding.GetChars$2(this.byteBuffer, 0, this.byteLen, userBuffer, ((userOffset + charsRead) | 0)))) | 0;
                        this.charLen = 0; // StreamReader's buffer is empty.
                    } else {
                        charsRead = this.encoding.GetChars$2(this.byteBuffer, 0, this.byteLen, this.charBuffer, charsRead);
                        this.charLen = (this.charLen + charsRead) | 0; // Number of chars in StreamReader's buffer.
                    }
                } while (charsRead === 0);

                this._isBlocked = !!(this._isBlocked & charsRead < desiredChars);

                //Console.WriteLine("ReadBuffer: charsRead: "+charsRead+"  readToUserBuffer: "+readToUserBuffer);
                return charsRead;
            },
            ReadLine: function () {
                if (this.stream == null) {
                    System.IO.__Error.ReaderClosed();
                }

                if (this.charPos === this.charLen) {
                    if (this.ReadBuffer() === 0) {
                        return null;
                    }
                }

                var sb = null;
                do {
                    var i = this.charPos;
                    do {
                        var ch = this.charBuffer[System.Array.index(i, this.charBuffer)];
                        // Note the following common line feed chars:
                        // \n - UNIX   \r\n - DOS   \r - Mac
                        if (ch === 13 || ch === 10) {
                            var s;
                            if (sb != null) {
                                sb.append(System.String.fromCharArray(this.charBuffer, this.charPos, ((i - this.charPos) | 0)));
                                s = sb.toString();
                            } else {
                                s = System.String.fromCharArray(this.charBuffer, this.charPos, ((i - this.charPos) | 0));
                            }
                            this.charPos = (i + 1) | 0;
                            if (ch === 13 && (this.charPos < this.charLen || this.ReadBuffer() > 0)) {
                                if (this.charBuffer[System.Array.index(this.charPos, this.charBuffer)] === 10) {
                                    this.charPos = (this.charPos + 1) | 0;
                                }
                            }
                            return s;
                        }
                        i = (i + 1) | 0;
                    } while (i < this.charLen);
                    i = (this.charLen - this.charPos) | 0;
                    if (sb == null) {
                        sb = new System.Text.StringBuilder("", ((i + 80) | 0));
                    }
                    sb.append(System.String.fromCharArray(this.charBuffer, this.charPos, i));
                } while (this.ReadBuffer() > 0);
                return sb.toString();
            }
        }
    });

    Bridge.define("System.IO.StreamWriter", {
        inherits: [System.IO.TextWriter],
        statics: {
            fields: {
                DefaultBufferSize: 0,
                DefaultFileStreamBufferSize: 0,
                MinBufferSize: 0,
                Null: null,
                _UTF8NoBOM: null
            },
            props: {
                UTF8NoBOM: {
                    get: function () {
                        if (System.IO.StreamWriter._UTF8NoBOM == null) {
                            // No need for double lock - we just want to avoid extra
                            // allocations in the common case.
                            var noBOM = new System.Text.UTF8Encoding.$ctor2(false, true);
                            System.IO.StreamWriter._UTF8NoBOM = noBOM;
                        }
                        return System.IO.StreamWriter._UTF8NoBOM;
                    }
                }
            },
            ctors: {
                init: function () {
                    this.DefaultBufferSize = 1024;
                    this.DefaultFileStreamBufferSize = 4096;
                    this.MinBufferSize = 128;
                    this.Null = new System.IO.StreamWriter.$ctor4(System.IO.Stream.Null, new System.Text.UTF8Encoding.$ctor2(false, true), System.IO.StreamWriter.MinBufferSize, true);
                }
            }
        },
        fields: {
            stream: null,
            encoding: null,
            byteBuffer: null,
            charBuffer: null,
            charPos: 0,
            charLen: 0,
            autoFlush: false,
            haveWrittenPreamble: false,
            closable: false
        },
        props: {
            AutoFlush: {
                get: function () {
                    return this.autoFlush;
                },
                set: function (value) {
                    this.autoFlush = value;
                    if (value) {
                        this.Flush$1(true, false);
                    }
                }
            },
            BaseStream: {
                get: function () {
                    return this.stream;
                }
            },
            LeaveOpen: {
                get: function () {
                    return !this.closable;
                }
            },
            HaveWrittenPreamble: {
                set: function (value) {
                    this.haveWrittenPreamble = value;
                }
            },
            Encoding: {
                get: function () {
                    return this.encoding;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.TextWriter.$ctor1.call(this, null); // Ask for CurrentCulture all the time
            },
            $ctor1: function (stream) {
                System.IO.StreamWriter.$ctor4.call(this, stream, System.IO.StreamWriter.UTF8NoBOM, System.IO.StreamWriter.DefaultBufferSize, false);
            },
            $ctor2: function (stream, encoding) {
                System.IO.StreamWriter.$ctor4.call(this, stream, encoding, System.IO.StreamWriter.DefaultBufferSize, false);
            },
            $ctor3: function (stream, encoding, bufferSize) {
                System.IO.StreamWriter.$ctor4.call(this, stream, encoding, bufferSize, false);
            },
            $ctor4: function (stream, encoding, bufferSize, leaveOpen) {
                this.$initialize();
                System.IO.TextWriter.$ctor1.call(this, null);
                if (stream == null || encoding == null) {
                    throw new System.ArgumentNullException((stream == null ? "stream" : "encoding"));
                }
                if (!stream.CanWrite) {
                    throw new System.ArgumentException("Argument_StreamNotWritable");
                }
                if (bufferSize <= 0) {
                    throw new System.ArgumentOutOfRangeException("bufferSize", "ArgumentOutOfRange_NeedPosNum");
                }

                this.Init(stream, encoding, bufferSize, leaveOpen);
            },
            $ctor5: function (path) {
                System.IO.StreamWriter.$ctor8.call(this, path, false, System.IO.StreamWriter.UTF8NoBOM, System.IO.StreamWriter.DefaultBufferSize);
            },
            $ctor6: function (path, append) {
                System.IO.StreamWriter.$ctor8.call(this, path, append, System.IO.StreamWriter.UTF8NoBOM, System.IO.StreamWriter.DefaultBufferSize);
            },
            $ctor7: function (path, append, encoding) {
                System.IO.StreamWriter.$ctor8.call(this, path, append, encoding, System.IO.StreamWriter.DefaultBufferSize);
            },
            $ctor8: function (path, append, encoding, bufferSize) {
                System.IO.StreamWriter.$ctor9.call(this, path, append, encoding, bufferSize, true);
            },
            $ctor9: function (path, append, encoding, bufferSize, checkHost) {
                this.$initialize();
                System.IO.TextWriter.$ctor1.call(this, null);
                throw new System.NotSupportedException();
            }
        },
        methods: {
            Init: function (streamArg, encodingArg, bufferSize, shouldLeaveOpen) {
                this.stream = streamArg;
                this.encoding = encodingArg;
                if (bufferSize < System.IO.StreamWriter.MinBufferSize) {
                    bufferSize = System.IO.StreamWriter.MinBufferSize;
                }
                this.charBuffer = System.Array.init(bufferSize, 0, System.Char);
                this.byteBuffer = System.Array.init(this.encoding.GetMaxByteCount(bufferSize), 0, System.Byte);
                this.charLen = bufferSize;
                // If we're appending to a Stream that already has data, don't write
                // the preamble.
                if (this.stream.CanSeek && this.stream.Position.gt(System.Int64(0))) {
                    this.haveWrittenPreamble = true;
                }
                this.closable = !shouldLeaveOpen;
            },
            Close: function () {
                this.Dispose$1(true);
            },
            Dispose$1: function (disposing) {
                try {
                    // We need to flush any buffered data if we are being closed/disposed.
                    // Also, we never close the handles for stdout & friends.  So we can safely
                    // write any buffered data to those streams even during finalization, which
                    // is generally the right thing to do.
                    if (this.stream != null) {
                        // Note: flush on the underlying stream can throw (ex., low disk space)
                        if (disposing) {
                            this.Flush$1(true, true);
                        }
                    }
                }
                finally {
                    // Dispose of our resources if this StreamWriter is closable.
                    // Note: Console.Out and other such non closable streamwriters should be left alone
                    if (!this.LeaveOpen && this.stream != null) {
                        try {
                            // Attempt to close the stream even if there was an IO error from Flushing.
                            // Note that Stream.Close() can potentially throw here (may or may not be
                            // due to the same Flush error). In this case, we still need to ensure
                            // cleaning up internal resources, hence the finally block.
                            if (disposing) {
                                this.stream.Close();
                            }
                        }
                        finally {
                            this.stream = null;
                            this.byteBuffer = null;
                            this.charBuffer = null;
                            this.encoding = null;
                            this.charLen = 0;
                            System.IO.TextWriter.prototype.Dispose$1.call(this, disposing);
                        }
                    }
                }
            },
            Flush: function () {
                this.Flush$1(true, true);
            },
            Flush$1: function (flushStream, flushEncoder) {
                // flushEncoder should be true at the end of the file and if
                // the user explicitly calls Flush (though not if AutoFlush is true).
                // This is required to flush any dangling characters from our UTF-7
                // and UTF-8 encoders.
                if (this.stream == null) {
                    System.IO.__Error.WriterClosed();
                }

                // Perf boost for Flush on non-dirty writers.
                if (this.charPos === 0 && (!flushStream && !flushEncoder)) {
                    return;
                }

                /* if (!haveWrittenPreamble) {
                   haveWrittenPreamble = true;
                   byte[] preamble = encoding.GetPreamble();
                   if (preamble.Length > 0)
                       stream.Write(preamble, 0, preamble.Length);
                }*/

                var count = this.encoding.GetBytes$3(this.charBuffer, 0, this.charPos, this.byteBuffer, 0);
                this.charPos = 0;
                if (count > 0) {
                    this.stream.Write(this.byteBuffer, 0, count);
                }
                // By definition, calling Flush should flush the stream, but this is
                // only necessary if we passed in true for flushStream.  The Web
                // Services guys have some perf tests where flushing needlessly hurts.
                if (flushStream) {
                    this.stream.Flush();
                }
            },
            Write$1: function (value) {
                if (this.charPos === this.charLen) {
                    this.Flush$1(false, false);
                }
                this.charBuffer[System.Array.index(this.charPos, this.charBuffer)] = value;
                this.charPos = (this.charPos + 1) | 0;
                if (this.autoFlush) {
                    this.Flush$1(true, false);
                }
            },
            Write$2: function (buffer) {
                // This may be faster than the one with the index & count since it
                // has to do less argument checking.
                if (buffer == null) {
                    return;
                }

                var index = 0;
                var count = buffer.length;
                while (count > 0) {
                    if (this.charPos === this.charLen) {
                        this.Flush$1(false, false);
                    }
                    var n = (this.charLen - this.charPos) | 0;
                    if (n > count) {
                        n = count;
                    }
                    System.Array.copy(buffer, index, this.charBuffer, this.charPos, n);
                    this.charPos = (this.charPos + n) | 0;
                    index = (index + n) | 0;
                    count = (count - n) | 0;
                }
                if (this.autoFlush) {
                    this.Flush$1(true, false);
                }
            },
            Write$3: function (buffer, index, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer", "ArgumentNull_Buffer");
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException("index", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (((buffer.length - index) | 0) < count) {
                    throw new System.ArgumentException("Argument_InvalidOffLen");
                }

                while (count > 0) {
                    if (this.charPos === this.charLen) {
                        this.Flush$1(false, false);
                    }
                    var n = (this.charLen - this.charPos) | 0;
                    if (n > count) {
                        n = count;
                    }
                    System.Array.copy(buffer, index, this.charBuffer, this.charPos, n);
                    this.charPos = (this.charPos + n) | 0;
                    index = (index + n) | 0;
                    count = (count - n) | 0;
                }
                if (this.autoFlush) {
                    this.Flush$1(true, false);
                }
            },
            Write$10: function (value) {
                if (value != null) {
                    var count = value.length;
                    var index = 0;
                    while (count > 0) {
                        if (this.charPos === this.charLen) {
                            this.Flush$1(false, false);
                        }
                        var n = (this.charLen - this.charPos) | 0;
                        if (n > count) {
                            n = count;
                        }
                        System.String.copyTo(value, index, this.charBuffer, this.charPos, n);
                        this.charPos = (this.charPos + n) | 0;
                        index = (index + n) | 0;
                        count = (count - n) | 0;
                    }
                    if (this.autoFlush) {
                        this.Flush$1(true, false);
                    }
                }
            }
        }
    });

    Bridge.define("System.IO.StringReader", {
        inherits: [System.IO.TextReader],
        fields: {
            _s: null,
            _pos: 0,
            _length: 0
        },
        ctors: {
            ctor: function (s) {
                this.$initialize();
                System.IO.TextReader.ctor.call(this);
                if (s == null) {
                    throw new System.ArgumentNullException("s");
                }
                this._s = s;
                this._length = s == null ? 0 : s.length;
            }
        },
        methods: {
            Close: function () {
                this.Dispose$1(true);
            },
            Dispose$1: function (disposing) {
                this._s = null;
                this._pos = 0;
                this._length = 0;
                System.IO.TextReader.prototype.Dispose$1.call(this, disposing);
            },
            Peek: function () {
                if (this._s == null) {
                    System.IO.__Error.ReaderClosed();
                }
                if (this._pos === this._length) {
                    return -1;
                }
                return this._s.charCodeAt(this._pos);
            },
            Read: function () {
                if (this._s == null) {
                    System.IO.__Error.ReaderClosed();
                }
                if (this._pos === this._length) {
                    return -1;
                }
                return this._s.charCodeAt(Bridge.identity(this._pos, (this._pos = (this._pos + 1) | 0)));
            },
            Read$1: function (buffer, index, count) {
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
                if (this._s == null) {
                    System.IO.__Error.ReaderClosed();
                }

                var n = (this._length - this._pos) | 0;
                if (n > 0) {
                    if (n > count) {
                        n = count;
                    }
                    System.String.copyTo(this._s, this._pos, buffer, index, n);
                    this._pos = (this._pos + n) | 0;
                }
                return n;
            },
            ReadToEnd: function () {
                if (this._s == null) {
                    System.IO.__Error.ReaderClosed();
                }
                var s;
                if (this._pos === 0) {
                    s = this._s;
                } else {
                    s = this._s.substr(this._pos, ((this._length - this._pos) | 0));
                }
                this._pos = this._length;
                return s;
            },
            ReadLine: function () {
                if (this._s == null) {
                    System.IO.__Error.ReaderClosed();
                }
                var i = this._pos;
                while (i < this._length) {
                    var ch = this._s.charCodeAt(i);
                    if (ch === 13 || ch === 10) {
                        var result = this._s.substr(this._pos, ((i - this._pos) | 0));
                        this._pos = (i + 1) | 0;
                        if (ch === 13 && this._pos < this._length && this._s.charCodeAt(this._pos) === 10) {
                            this._pos = (this._pos + 1) | 0;
                        }
                        return result;
                    }
                    i = (i + 1) | 0;
                }
                if (i > this._pos) {
                    var result1 = this._s.substr(this._pos, ((i - this._pos) | 0));
                    this._pos = i;
                    return result1;
                }
                return null;
            }
        }
    });

    Bridge.define("System.IO.StringWriter", {
        inherits: [System.IO.TextWriter],
        statics: {
            fields: {
                m_encoding: null
            }
        },
        fields: {
            _sb: null,
            _isOpen: false
        },
        props: {
            Encoding: {
                get: function () {
                    if (System.IO.StringWriter.m_encoding == null) {
                        System.IO.StringWriter.m_encoding = new System.Text.UnicodeEncoding.$ctor1(false, false);
                    }
                    return System.IO.StringWriter.m_encoding;
                }
            }
        },
        ctors: {
            ctor: function () {
                System.IO.StringWriter.$ctor3.call(this, new System.Text.StringBuilder(), System.Globalization.CultureInfo.getCurrentCulture());
            },
            $ctor1: function (formatProvider) {
                System.IO.StringWriter.$ctor3.call(this, new System.Text.StringBuilder(), formatProvider);
            },
            $ctor2: function (sb) {
                System.IO.StringWriter.$ctor3.call(this, sb, System.Globalization.CultureInfo.getCurrentCulture());
            },
            $ctor3: function (sb, formatProvider) {
                this.$initialize();
                System.IO.TextWriter.$ctor1.call(this, formatProvider);
                if (sb == null) {
                    throw new System.ArgumentNullException("sb");
                }
                this._sb = sb;
                this._isOpen = true;
            }
        },
        methods: {
            Close: function () {
                this.Dispose$1(true);
            },
            Dispose$1: function (disposing) {
                // Do not destroy _sb, so that we can extract this after we are
                // done writing (similar to MemoryStream's GetBuffer & ToArray methods)
                this._isOpen = false;
                System.IO.TextWriter.prototype.Dispose$1.call(this, disposing);
            },
            GetStringBuilder: function () {
                return this._sb;
            },
            Write$1: function (value) {
                if (!this._isOpen) {
                    System.IO.__Error.WriterClosed();
                }
                this._sb.append(String.fromCharCode(value));
            },
            Write$3: function (buffer, index, count) {
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

                if (!this._isOpen) {
                    System.IO.__Error.WriterClosed();
                }

                this._sb.append(System.String.fromCharArray(buffer, index, count));
            },
            Write$10: function (value) {
                if (!this._isOpen) {
                    System.IO.__Error.WriterClosed();
                }
                if (value != null) {
                    this._sb.append(value);
                }
            },
            toString: function () {
                return this._sb.toString();
            }
        }
    });

    Bridge.define("System.IO.TextReader.NullTextReader", {
        inherits: [System.IO.TextReader],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.TextReader.ctor.call(this);
            }
        },
        methods: {
            Read$1: function (buffer, index, count) {
                return 0;
            },
            ReadLine: function () {
                return null;
            }
        }
    });

    Bridge.define("System.IO.TextWriter.NullTextWriter", {
        inherits: [System.IO.TextWriter],
        props: {
            Encoding: {
                get: function () {
                    return System.Text.Encoding.Default;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.TextWriter.$ctor1.call(this, System.Globalization.CultureInfo.invariantCulture);
            }
        },
        methods: {
            Write$3: function (buffer, index, count) { },
            Write$10: function (value) { },
            WriteLine: function () { },
            WriteLine$11: function (value) { },
            WriteLine$9: function (value) { }
        }
    });

    Bridge.define("System.IO.StreamReader.NullStreamReader", {
        inherits: [System.IO.StreamReader],
        props: {
            BaseStream: {
                get: function () {
                    return System.IO.Stream.Null;
                }
            },
            CurrentEncoding: {
                get: function () {
                    return System.Text.Encoding.Unicode;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.StreamReader.ctor.call(this);
                this.Init(System.IO.Stream.Null);
            }
        },
        methods: {
            Dispose$1: function (disposing) {
                // Do nothing - this is essentially unclosable.
            },
            Peek: function () {
                return -1;
            },
            Read: function () {
                return -1;
            },
            Read$1: function (buffer, index, count) {
                return 0;
            },
            ReadLine: function () {
                return null;
            },
            ReadToEnd: function () {
                return "";
            },
            ReadBuffer: function () {
                return 0;
            }
        }
    });
