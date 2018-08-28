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
        alias: ["Dispose", "System$IDisposable$Dispose"],
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
                    throw new System.ArgumentNullException.$ctor1("input");
                }
                if (encoding == null) {
                    throw new System.ArgumentNullException.$ctor1("encoding");
                }
                if (!input.CanRead) {
                    throw new System.ArgumentException.$ctor1("Argument_StreamNotReadable");
                }
                this.m_stream = input;
                this.m_encoding = encoding;
                this.m_maxCharsSize = encoding.GetMaxCharCount(System.IO.BinaryReader.MaxCharBytesSize);
                var minBufferSize = encoding.GetMaxByteCount(1);
                if (minBufferSize < 23) {
                    minBufferSize = 23;
                }
                this.m_buffer = System.Array.init(minBufferSize, 0, System.Byte);

                this.m_2BytesPerChar = Bridge.is(encoding, System.Text.UnicodeEncoding);
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

                if (this.m_stream == null) {
                    System.IO.__Error.FileNotOpen();
                }

                return this.InternalReadChars(buffer, index, count);
            },
            Read$1: function (buffer, index, count) {
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
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    var e;
                    if (Bridge.is($e1, System.ArgumentException)) {
                        e = $e1;
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
                    throw new System.ArgumentOutOfRangeException.$ctor1("charsRemaining");
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


                return (((count - charsRemaining) | 0));
            },
            InternalReadOneChar: function (allowSurrogate) {
                if (allowSurrogate === void 0) { allowSurrogate = false; }
                var charsRead = 0;
                var numBytes = 0;
                var posSav = System.Int64(0);

                if (this.m_stream.CanSeek) {
                    posSav = this.m_stream.Position;
                }

                if (this.m_charBytes == null) {
                    this.m_charBytes = System.Array.init(System.IO.BinaryReader.MaxCharBytesSize, 0, System.Byte);
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
                            throw new System.ArgumentException.ctor();
                        }
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);

                        if (this.m_stream.CanSeek) {
                            this.m_stream.Seek((posSav.sub(this.m_stream.Position)), 1);
                        }

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
                    throw new System.ArgumentOutOfRangeException.$ctor4("count", "ArgumentOutOfRange_NeedNonNegNum");
                }
                if (this.m_stream == null) {
                    System.IO.__Error.FileNotOpen();
                }

                if (count === 0) {
                    return System.Array.init(0, 0, System.Char);
                }

                var chars = System.Array.init(count, 0, System.Char);
                var n = this.InternalReadChars(chars, 0, count);
                if (n !== count) {
                    var copy = System.Array.init(n, 0, System.Char);
                    System.Array.copy(chars, 0, copy, 0, Bridge.Int.mul(2, n));
                    chars = copy;
                }

                return chars;
            },
            ReadBytes: function (count) {
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("count", "ArgumentOutOfRange_NeedNonNegNum");
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
                    var copy = System.Array.init(numRead, 0, System.Byte);
                    System.Array.copy(result, 0, copy, 0, numRead);
                    result = copy;
                }

                return result;
            },
            FillBuffer: function (numBytes) {
                if (this.m_buffer != null && (numBytes < 0 || numBytes > this.m_buffer.length)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("numBytes", "ArgumentOutOfRange_BinaryReaderFillBuffer");
                }
                var bytesRead = 0;
                var n = 0;

                if (this.m_stream == null) {
                    System.IO.__Error.FileNotOpen();
                }

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
                var count = 0;
                var shift = 0;
                var b;
                do {
                    if (shift === 35) {
                        throw new System.FormatException.$ctor1("Format_Bad7BitInt32");
                    }

                    b = this.ReadByte();
                    count = count | ((b & 127) << shift);
                    shift = (shift + 7) | 0;
                } while ((b & 128) !== 0);
                return count;
            }
        }
    });
