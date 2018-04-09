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
                    throw new System.ArgumentNullException.$ctor1((stream == null ? "stream" : "encoding"));
                }
                if (!stream.CanRead) {
                    throw new System.ArgumentException.ctor();
                }
                if (bufferSize <= 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("bufferSize");
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
                if (path == null || encoding == null) {
                    throw new System.ArgumentNullException.$ctor1((path == null ? "path" : "encoding"));
                }
                if (path.length === 0) {
                    throw new System.ArgumentException.ctor();
                }
                if (bufferSize <= 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("bufferSize");
                }

                var stream = new System.IO.FileStream.$ctor1(path, 3);
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
                try {
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
                    throw new System.ArgumentNullException.$ctor1("buffer");
                }
                if (index < 0 || count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1((index < 0 ? "index" : "count"));
                }
                if (((buffer.length - index) | 0) < count) {
                    throw new System.ArgumentException.ctor();
                }

                if (this.stream == null) {
                    System.IO.__Error.ReaderClosed();
                }


                var charsRead = 0;
                var readToUserBuffer = { v : false };
                while (count > 0) {
                    var n = (this.charLen - this.charPos) | 0;
                    if (n === 0) {
                        n = this.ReadBuffer$1(buffer, ((index + charsRead) | 0), count, readToUserBuffer);
                    }
                    if (n === 0) {
                        break;
                    }
                    if (n > count) {
                        n = count;
                    }
                    if (!readToUserBuffer.v) {
                        System.Array.copy(this.charBuffer, this.charPos, buffer, (((index + charsRead) | 0)), n);
                        this.charPos = (this.charPos + n) | 0;
                    }
                    charsRead = (charsRead + n) | 0;
                    count = (count - n) | 0;
                    if (this._isBlocked) {
                        break;
                    }
                }

                return charsRead;
            },
            ReadToEndAsync: function () {
                var $step = 0,
                    $task1, 
                    $task2, 
                    $taskResult2, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4], $step);
                                switch ($step) {
                                    case 0: {
                                        if (Bridge.is(this.stream, System.IO.FileStream)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = this.stream.EnsureBufferAsync();
                                        $step = 2;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $task1.getAwaitedResult();
                                        $step = 3;
                                        continue;
                                    }
                                    case 3: {
                                        $task2 = System.IO.TextReader.prototype.ReadToEndAsync.call(this);
                                        $step = 4;
                                        $task2.continueWith($asyncBody);
                                        return;
                                    }
                                    case 4: {
                                        $taskResult2 = $task2.getAwaitedResult();
                                        $tcs.setResult($taskResult2);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            ReadToEnd: function () {
                if (this.stream == null) {
                    System.IO.__Error.ReaderClosed();
                }

                var sb = new System.Text.StringBuilder("", ((this.charLen - this.charPos) | 0));
                do {
                    sb.append(System.String.fromCharArray(this.charBuffer, this.charPos, ((this.charLen - this.charPos) | 0)));
                    this.charPos = this.charLen;
                    this.ReadBuffer();
                } while (this.charLen > 0);
                return sb.toString();
            },
            ReadBlock: function (buffer, index, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException.$ctor1("buffer");
                }
                if (index < 0 || count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1((index < 0 ? "index" : "count"));
                }
                if (((buffer.length - index) | 0) < count) {
                    throw new System.ArgumentException.ctor();
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

                    this.encoding = new System.Text.UnicodeEncoding.$ctor1(true, true);
                    this.CompressBuffer(2);
                    changedEncoding = true;
                } else if (this.byteBuffer[System.Array.index(0, this.byteBuffer)] === 255 && this.byteBuffer[System.Array.index(1, this.byteBuffer)] === 254) {
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
                    this.encoding = System.Text.Encoding.UTF8;
                    this.CompressBuffer(3);
                    changedEncoding = true;
                } else if (this.byteLen >= 4 && this.byteBuffer[System.Array.index(0, this.byteBuffer)] === 0 && this.byteBuffer[System.Array.index(1, this.byteBuffer)] === 0 && this.byteBuffer[System.Array.index(2, this.byteBuffer)] === 254 && this.byteBuffer[System.Array.index(3, this.byteBuffer)] === 255) {
                    this.encoding = new System.Text.UTF32Encoding.$ctor1(true, true);
                    this.CompressBuffer(4);
                    changedEncoding = true;
                } else if (this.byteLen === 2) {
                    this._detectEncoding = true;
                }

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

                    this._isBlocked = (this.byteLen < this.byteBuffer.length);

                    if (this.IsPreamble()) {
                        continue;
                    }

                    if (this._detectEncoding && this.byteLen >= 2) {
                        this.DetectEncoding();
                    }

                    this.charLen = (this.charLen + (this.encoding.GetChars$2(this.byteBuffer, 0, this.byteLen, this.charBuffer, this.charLen))) | 0;
                } while (this.charLen === 0);
                return this.charLen;
            },
            ReadBuffer$1: function (userBuffer, userOffset, desiredChars, readToUserBuffer) {
                this.charLen = 0;
                this.charPos = 0;

                this.byteLen = 0;

                var charsRead = 0;

                readToUserBuffer.v = desiredChars >= this._maxCharsPerBuffer;

                do {


                    this.byteLen = this.stream.Read(this.byteBuffer, 0, this.byteBuffer.length);


                    if (this.byteLen === 0) {
                        break;
                    }

                    this._isBlocked = (this.byteLen < this.byteBuffer.length);

                    if (this.IsPreamble()) {
                        continue;
                    }

                    if (this._detectEncoding && this.byteLen >= 2) {
                        this.DetectEncoding();
                        readToUserBuffer.v = desiredChars >= this._maxCharsPerBuffer;
                    }

                    this.charPos = 0;
                    if (readToUserBuffer.v) {
                        charsRead = (charsRead + (this.encoding.GetChars$2(this.byteBuffer, 0, this.byteLen, userBuffer, ((userOffset + charsRead) | 0)))) | 0;
                        this.charLen = 0;
                    } else {
                        charsRead = this.encoding.GetChars$2(this.byteBuffer, 0, this.byteLen, this.charBuffer, charsRead);
                        this.charLen = (this.charLen + charsRead) | 0;
                    }
                } while (charsRead === 0);

                this._isBlocked = !!(this._isBlocked & charsRead < desiredChars);

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
