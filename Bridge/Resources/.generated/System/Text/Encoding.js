    Bridge.define("System.Text.Encoding", {
        statics: {
            fields: {
                _encodings: null
            },
            props: {
                Default: null,
                Unicode: null,
                ASCII: null,
                BigEndianUnicode: null,
                UTF7: null,
                UTF8: null,
                UTF32: null
            },
            ctors: {
                init: function () {
                    this.Default = new System.Text.UnicodeEncoding.$ctor1(false, true);
                    this.Unicode = new System.Text.UnicodeEncoding.$ctor1(false, true);
                    this.ASCII = new System.Text.ASCIIEncoding();
                    this.BigEndianUnicode = new System.Text.UnicodeEncoding.$ctor1(true, true);
                    this.UTF7 = new System.Text.UTF7Encoding.ctor();
                    this.UTF8 = new System.Text.UTF8Encoding.ctor();
                    this.UTF32 = new System.Text.UTF32Encoding.$ctor1(false, true);
                }
            },
            methods: {
                Convert: function (srcEncoding, dstEncoding, bytes) {
                    return System.Text.Encoding.Convert$1(srcEncoding, dstEncoding, bytes, 0, bytes.length);
                },
                Convert$1: function (srcEncoding, dstEncoding, bytes, index, count) {
                    if (srcEncoding == null || dstEncoding == null) {
                        throw new System.ArgumentNullException.$ctor1(srcEncoding == null ? "srcEncoding" : "dstEncoding");
                    }

                    if (bytes == null) {
                        throw new System.ArgumentNullException.$ctor1("bytes");
                    }

                    return dstEncoding.GetBytes(srcEncoding.GetChars$1(bytes, index, count));
                },
                GetEncoding: function (codepage) {
                    switch (codepage) {
                        case 1200: 
                            return System.Text.Encoding.Unicode;
                        case 20127: 
                            return System.Text.Encoding.ASCII;
                        case 1201: 
                            return System.Text.Encoding.BigEndianUnicode;
                        case 65000: 
                            return System.Text.Encoding.UTF7;
                        case 65001: 
                            return System.Text.Encoding.UTF8;
                        case 12000: 
                            return System.Text.Encoding.UTF32;
                    }
                    throw new System.NotSupportedException.ctor();
                },
                GetEncoding$1: function (codepage) {
                    switch (codepage) {
                        case "utf-16": 
                            return System.Text.Encoding.Unicode;
                        case "us-ascii": 
                            return System.Text.Encoding.ASCII;
                        case "utf-16BE": 
                            return System.Text.Encoding.BigEndianUnicode;
                        case "utf-7": 
                            return System.Text.Encoding.UTF7;
                        case "utf-8": 
                            return System.Text.Encoding.UTF8;
                        case "utf-32": 
                            return System.Text.Encoding.UTF32;
                    }
                    throw new System.NotSupportedException.ctor();
                },
                GetEncodings: function () {
                    if (System.Text.Encoding._encodings != null) {
                        return System.Text.Encoding._encodings;
                    }
                    System.Text.Encoding._encodings = System.Array.init(6, null, System.Text.EncodingInfo);
                    var result = System.Text.Encoding._encodings;

                    result[System.Array.index(0, result)] = new System.Text.EncodingInfo(20127, "us-ascii", "US-ASCII");
                    result[System.Array.index(1, result)] = new System.Text.EncodingInfo(1200, "utf-16", "Unicode");
                    result[System.Array.index(2, result)] = new System.Text.EncodingInfo(1201, "utf-16BE", "Unicode (Big-Endian)");
                    result[System.Array.index(3, result)] = new System.Text.EncodingInfo(65000, "utf-7", "Unicode (UTF-7)");
                    result[System.Array.index(4, result)] = new System.Text.EncodingInfo(65001, "utf-8", "Unicode (UTF-8)");
                    result[System.Array.index(5, result)] = new System.Text.EncodingInfo(1200, "utf-32", "Unicode (UTF-32)");
                    return result;
                }
            }
        },
        fields: {
            _hasError: false,
            fallbackCharacter: 0
        },
        props: {
            CodePage: {
                get: function () {
                    return 0;
                }
            },
            EncodingName: {
                get: function () {
                    return null;
                }
            }
        },
        ctors: {
            init: function () {
                this.fallbackCharacter = 63;
            }
        },
        methods: {
            Encode$1: function (chars, index, count) {
                var writtenCount = { };
                return this.Encode$3(System.String.fromCharArray(chars, index, count), null, 0, writtenCount);
            },
            Encode$5: function (s, index, count, outputBytes, outputIndex) {
                var writtenBytes = { };
                this.Encode$3(s.substr(index, count), outputBytes, outputIndex, writtenBytes);
                return writtenBytes.v;
            },
            Encode$4: function (chars, index, count, outputBytes, outputIndex) {
                var writtenBytes = { };
                this.Encode$3(System.String.fromCharArray(chars, index, count), outputBytes, outputIndex, writtenBytes);
                return writtenBytes.v;
            },
            Encode: function (chars) {
                var count = { };
                return this.Encode$3(System.String.fromCharArray(chars), null, 0, count);
            },
            Encode$2: function (str) {
                var count = { };
                return this.Encode$3(str, null, 0, count);
            },
            Decode$1: function (bytes, index, count) {
                return this.Decode$2(bytes, index, count, null, 0);
            },
            Decode: function (bytes) {
                return this.Decode$2(bytes, 0, bytes.length, null, 0);
            },
            GetByteCount: function (chars) {
                return this.GetByteCount$1(chars, 0, chars.length);
            },
            GetByteCount$2: function (s) {
                return this.Encode$2(s).length;
            },
            GetByteCount$1: function (chars, index, count) {
                return this.Encode$1(chars, index, count).length;
            },
            GetBytes: function (chars) {
                return this.GetBytes$1(chars, 0, chars.length);
            },
            GetBytes$1: function (chars, index, count) {
                return this.Encode$2(System.String.fromCharArray(chars, index, count));
            },
            GetBytes$3: function (chars, charIndex, charCount, bytes, byteIndex) {
                return this.Encode$4(chars, charIndex, charCount, bytes, byteIndex);
            },
            GetBytes$2: function (s) {
                return this.Encode$2(s);
            },
            GetBytes$4: function (s, charIndex, charCount, bytes, byteIndex) {
                return this.Encode$5(s, charIndex, charCount, bytes, byteIndex);
            },
            GetCharCount: function (bytes) {
                return this.Decode(bytes).length;
            },
            GetCharCount$1: function (bytes, index, count) {
                return this.Decode$1(bytes, index, count).length;
            },
            GetChars: function (bytes) {
                var $t;
                return ($t = this.Decode(bytes), System.String.toCharArray($t, 0, $t.length));
            },
            GetChars$1: function (bytes, index, count) {
                var $t;
                return ($t = this.Decode$1(bytes, index, count), System.String.toCharArray($t, 0, $t.length));
            },
            GetChars$2: function (bytes, byteIndex, byteCount, chars, charIndex) {
                var s = this.Decode$1(bytes, byteIndex, byteCount);
                var arr = System.String.toCharArray(s, 0, s.length);

                if (chars.length < (((arr.length + charIndex) | 0))) {
                    throw new System.ArgumentException.$ctor3(null, "chars");
                }

                for (var i = 0; i < arr.length; i = (i + 1) | 0) {
                    chars[System.Array.index(((charIndex + i) | 0), chars)] = arr[System.Array.index(i, arr)];
                }

                return arr.length;
            },
            GetString: function (bytes) {
                return this.Decode(bytes);
            },
            GetString$1: function (bytes, index, count) {
                return this.Decode$1(bytes, index, count);
            }
        }
    });
