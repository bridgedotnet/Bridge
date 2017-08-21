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
                convert: function (srcEncoding, dstEncoding, bytes) {
                    return System.Text.Encoding.convert$1(srcEncoding, dstEncoding, bytes, 0, bytes.length);
                },
                convert$1: function (srcEncoding, dstEncoding, bytes, index, count) {
                    if (srcEncoding == null || dstEncoding == null) {
                        throw new System.ArgumentNullException(srcEncoding == null ? "srcEncoding" : "dstEncoding");
                    }

                    if (bytes == null) {
                        throw new System.ArgumentNullException("bytes");
                    }

                    return dstEncoding.getBytes(srcEncoding.getChars$1(bytes, index, count));
                },
                getEncoding: function (codepage) {
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
                    throw new System.NotSupportedException();
                },
                getEncoding$1: function (codepage) {
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
                    throw new System.NotSupportedException();
                },
                getEncodings: function () {
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
            encode$1: function (chars, index, count) {
                var writtenCount = { };
                return this.encode$3(System.String.fromCharArray(chars, index, count), null, 0, writtenCount);
            },
            encode$5: function (s, index, count, outputBytes, outputIndex) {
                var writtenBytes = { };
                this.encode$3(s.substr(index, count), outputBytes, outputIndex, writtenBytes);
                return writtenBytes.v;
            },
            encode$4: function (chars, index, count, outputBytes, outputIndex) {
                var writtenBytes = { };
                this.encode$3(System.String.fromCharArray(chars, index, count), outputBytes, outputIndex, writtenBytes);
                return writtenBytes.v;
            },
            encode: function (chars) {
                var count = { };
                return this.encode$3(System.String.fromCharArray(chars), null, 0, count);
            },
            encode$2: function (str) {
                var count = { };
                return this.encode$3(str, null, 0, count);
            },
            decode$1: function (bytes, index, count) {
                return this.decode$2(bytes, index, count, null, 0);
            },
            decode: function (bytes) {
                return this.decode$2(bytes, 0, bytes.length, null, 0);
            },
            getByteCount: function (chars) {
                return this.getByteCount$1(chars, 0, chars.length);
            },
            getByteCount$2: function (s) {
                return this.encode$2(s).length;
            },
            getByteCount$1: function (chars, index, count) {
                return this.encode$1(chars, index, count).length;
            },
            getBytes: function (chars) {
                return this.getBytes$1(chars, 0, chars.length);
            },
            getBytes$1: function (chars, index, count) {
                return this.encode$2(System.String.fromCharArray(chars, index, count));
            },
            getBytes$3: function (chars, charIndex, charCount, bytes, byteIndex) {
                return this.encode$4(chars, charIndex, charCount, bytes, byteIndex);
            },
            getBytes$2: function (s) {
                return this.encode$2(s);
            },
            getBytes$4: function (s, charIndex, charCount, bytes, byteIndex) {
                return this.encode$5(s, charIndex, charCount, bytes, byteIndex);
            },
            getCharCount: function (bytes) {
                return this.decode(bytes).length;
            },
            getCharCount$1: function (bytes, index, count) {
                return this.decode$1(bytes, index, count).length;
            },
            getChars: function (bytes) {
                var $t;
                return ($t = this.decode(bytes), System.String.toCharArray($t, 0, $t.length));
            },
            getChars$1: function (bytes, index, count) {
                var $t;
                return ($t = this.decode$1(bytes, index, count), System.String.toCharArray($t, 0, $t.length));
            },
            getChars$2: function (bytes, byteIndex, byteCount, chars, charIndex) {
                var s = this.decode$1(bytes, byteIndex, byteCount);
                var arr = System.String.toCharArray(s, 0, s.length);

                if (chars.length < (((arr.length + charIndex) | 0))) {
                    throw new System.ArgumentException(null, "chars");
                }

                for (var i = 0; i < arr.length; i = (i + 1) | 0) {
                    chars[System.Array.index(((charIndex + i) | 0), chars)] = arr[System.Array.index(i, arr)];
                }

                return arr.length;
            },
            getString: function (bytes) {
                return this.decode(bytes);
            },
            getString$1: function (bytes, index, count) {
                return this.decode$1(bytes, index, count);
            }
        }
    });

    Bridge.define("System.Text.EncodingInfo", {
        props: {
            CodePage: 0,
            Name: null,
            DisplayName: null
        },
        ctors: {
            ctor: function (codePage, name, displayName) {
                this.$initialize();                var $t;

                this.CodePage = codePage;
                this.Name = name;
                this.DisplayName = ($t = displayName, $t != null ? $t : name);
        }
    },
    methods: {
        getEncoding: function () {
            return System.Text.Encoding.getEncoding(this.CodePage);
        },
        getHashCode: function () {
            return this.CodePage;
        },
        equals: function (o) {
            var that = Bridge.as(o, System.Text.EncodingInfo);
            return System.Nullable.eq(this.CodePage, (that != null ? that.CodePage : null));
        }
    }
    });

    Bridge.define("System.Text.ASCIIEncoding", {
        inherits: [System.Text.Encoding],
        props: {
            CodePage: {
                get: function () {
                    return 20127;
                }
            },
            EncodingName: {
                get: function () {
                    return "US-ASCII";
                }
            }
        },
        methods: {
            encode$3: function (s, outputBytes, outputIndex, writtenBytes) {
                var hasBuffer = outputBytes != null;

                if (!hasBuffer) {
                    outputBytes = System.Array.init(0, 0, System.Byte);
                }

                var recorded = 0;
                for (var i = 0; i < s.length; i = (i + 1) | 0) {
                    var ch = s.charCodeAt(i);
                    var byteCode = (ch <= 127 ? ch : this.fallbackCharacter) & 255;

                    if (hasBuffer) {
                        if ((((i + outputIndex) | 0)) >= outputBytes.length) {
                            throw new System.ArgumentException("bytes");
                        }
                        outputBytes[System.Array.index(((i + outputIndex) | 0), outputBytes)] = byteCode;
                    } else {
                        outputBytes.push(byteCode);
                    }
                    recorded = (recorded + 1) | 0;
                }

                writtenBytes.v = recorded;

                if (hasBuffer) {
                    return null;
                }

                return new Uint8Array(outputBytes);
            },
            decode$2: function (bytes, index, count, chars, charIndex) {
                var position = index;
                var result = "";
                var endpoint = (position + count) | 0;

                for (; position < endpoint; position = (position + 1) | 0) {
                    var byteCode = bytes[System.Array.index(position, bytes)];

                    if (byteCode > 127) {
                        result = System.String.concat(result, String.fromCharCode(this.fallbackCharacter));
                    } else {
                        result = System.String.concat(result, (String.fromCharCode(byteCode)));
                    }
                }

                return result;
            },
            getMaxByteCount: function (charCount) {
                if (charCount < 0) {
                    throw new System.ArgumentOutOfRangeException("charCount");
                }

                var byteCount = System.Int64(charCount).add(System.Int64(1));

                if (byteCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException("charCount");
                }

                return System.Int64.clip32(byteCount);
            },
            getMaxCharCount: function (byteCount) {
                if (byteCount < 0) {
                    throw new System.ArgumentOutOfRangeException("byteCount");
                }

                var charCount = System.Int64(byteCount);

                if (charCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException("byteCount");
                }

                return System.Int64.clip32(charCount);
            }
        }
    });

    Bridge.define("System.Text.UnicodeEncoding", {
        inherits: [System.Text.Encoding],
        fields: {
            bigEndian: false,
            byteOrderMark: false,
            throwOnInvalid: false
        },
        props: {
            CodePage: {
                get: function () {
                    return this.bigEndian ? 1201 : 1200;
                }
            },
            EncodingName: {
                get: function () {
                    return this.bigEndian ? "Unicode (Big-Endian)" : "Unicode";
                }
            }
        },
        ctors: {
            ctor: function () {
                System.Text.UnicodeEncoding.$ctor1.call(this, false, true);
            },
            $ctor1: function (bigEndian, byteOrderMark) {
                System.Text.UnicodeEncoding.$ctor2.call(this, bigEndian, byteOrderMark, false);
            },
            $ctor2: function (bigEndian, byteOrderMark, throwOnInvalidBytes) {
                this.$initialize();
                System.Text.Encoding.ctor.call(this);
                this.bigEndian = bigEndian;
                this.byteOrderMark = byteOrderMark;
                this.throwOnInvalid = throwOnInvalidBytes;
                this.fallbackCharacter = 65533;
            }
        },
        methods: {
            encode$3: function (s, outputBytes, outputIndex, writtenBytes) {
                var hasBuffer = outputBytes != null;
                var recorded = 0;
                var surrogate_1st = 0;
                var fallbackCharacterCode = this.fallbackCharacter;

                var write = function (ch) {
                    if (hasBuffer) {
                        if (outputIndex >= outputBytes.length) {
                            throw new System.ArgumentException("bytes");
                        }

                        outputBytes[System.Array.index(Bridge.identity(outputIndex, (outputIndex = (outputIndex + 1) | 0)), outputBytes)] = ch;
                    } else {
                        outputBytes.push(ch);
                    }
                    recorded = (recorded + 1) | 0;
                };

                var writePair = function (a, b) {
                    write(a);
                    write(b);
                };

                var swap = $asm.$.System.Text.UnicodeEncoding.f1;

                var fallback = Bridge.fn.bind(this, function () {
                    if (this.throwOnInvalid) {
                        throw new System.Exception("Invalid character in UTF16 text");
                    }

                    writePair((fallbackCharacterCode & 255), ((fallbackCharacterCode >> 8) & 255));
                });

                if (!hasBuffer) {
                    outputBytes = System.Array.init(0, 0, System.Byte);
                }

                if (this.bigEndian) {
                    fallbackCharacterCode = swap(fallbackCharacterCode);
                }

                for (var i = 0; i < s.length; i = (i + 1) | 0) {
                    var ch = s.charCodeAt(i);

                    if (surrogate_1st !== 0) {
                        if (ch >= 56320 && ch <= 57343) {
                            if (this.bigEndian) {
                                surrogate_1st = swap(surrogate_1st);
                                ch = swap(ch);
                            }
                            writePair((surrogate_1st & 255), ((surrogate_1st >> 8) & 255));
                            writePair((ch & 255), ((ch >> 8) & 255));
                            surrogate_1st = 0;
                            continue;
                        }
                        fallback();
                        surrogate_1st = 0;
                    }

                    if (55296 <= ch && ch <= 56319) {
                        surrogate_1st = ch;
                        continue;
                    } else if (56320 <= ch && ch <= 57343) {
                        fallback();
                        surrogate_1st = 0;
                        continue;
                    }

                    if (ch < 65536) {
                        if (this.bigEndian) {
                            ch = swap(ch);
                        }
                        writePair((ch & 255), ((ch >> 8) & 255));
                    } else if (ch <= 1114111) {
                        ch = ch - 0x10000; //?????

                        var lowBits = ((ch & 1023) | 56320) & 65535;
                        var highBits = (((ch >> 10) & 1023) | 55296) & 65535;

                        if (this.bigEndian) {
                            highBits = swap(highBits);
                            lowBits = swap(lowBits);
                        }
                        writePair((highBits & 255), ((highBits >> 8) & 255));
                        writePair((lowBits & 255), ((lowBits >> 8) & 255));
                    } else {
                        fallback();
                    }
                }

                if (surrogate_1st !== 0) {
                    fallback();
                }

                writtenBytes.v = recorded;

                if (hasBuffer) {
                    return null;
                }

                return new Uint8Array(outputBytes);
            },
            decode$2: function (bytes, index, count, chars, charIndex) {
                var position = index;
                var result = "";
                var endpoint = (position + count) | 0;

                var fallback = Bridge.fn.bind(this, function () {
                    if (this.throwOnInvalid) {
                        throw new System.Exception("Invalid character in UTF16 text");
                    }

                    result = System.String.concat(result, String.fromCharCode(this.fallbackCharacter));
                });

                var swap = $asm.$.System.Text.UnicodeEncoding.f2;

                var readPair = Bridge.fn.bind(this, function () {
                    if ((((position + 2) | 0)) > endpoint) {
                        position = (position + 2) | 0;
                        return null;
                    }

                    var a = bytes[System.Array.index(Bridge.identity(position, (position = (position + 1) | 0)), bytes)];
                    var b = bytes[System.Array.index(Bridge.identity(position, (position = (position + 1) | 0)), bytes)];

                    var point = ((a << 8) | b) & 65535;
                    if (!this.bigEndian) {
                        point = swap(point);
                    }

                    return point;
                });

                while (position < endpoint) {
                    var firstWord = readPair();

                    if (!System.Nullable.hasValue(firstWord)) {
                        fallback();
                    } else if ((System.Nullable.lt(firstWord, 55296)) || (System.Nullable.gt(firstWord, 57343))) {
                        result = System.String.concat(result, (System.String.fromCharCode(System.Nullable.getValue(firstWord))));
                    } else if ((System.Nullable.gte(firstWord, 55296)) && (System.Nullable.lte(firstWord, 56319))) {
                        var end = position >= endpoint;
                        var secondWord = readPair();
                        if (end) {
                            fallback();
                        } else if (!System.Nullable.hasValue(secondWord)) {
                            fallback();
                            fallback();
                        } else if ((System.Nullable.gte(secondWord, 56320)) && (System.Nullable.lte(secondWord, 57343))) {
                            var highBits = System.Nullable.band(firstWord, 1023);
                            var lowBits = System.Nullable.band(secondWord, 1023);

                            var charCode = Bridge.Int.clip32(System.Nullable.add((System.Nullable.bor((System.Nullable.sl(highBits, 10)), lowBits)), 65536));

                            result = System.String.concat(result, (System.String.fromCharCode(System.Nullable.getValue(charCode))));
                        } else {
                            fallback();
                            position = (position - 2) | 0;
                        }
                    } else {
                        fallback();
                    }
                }

                return result;
            },
            getMaxByteCount: function (charCount) {
                if (charCount < 0) {
                    throw new System.ArgumentOutOfRangeException("charCount");
                }

                var byteCount = System.Int64(charCount).add(System.Int64(1));
                byteCount = byteCount.shl(1);

                if (byteCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException("charCount");
                }

                return System.Int64.clip32(byteCount);
            },
            getMaxCharCount: function (byteCount) {
                if (byteCount < 0) {
                    throw new System.ArgumentOutOfRangeException("byteCount");
                }

                var charCount = System.Int64((byteCount >> 1)).add(System.Int64((byteCount & 1))).add(System.Int64(1));

                if (charCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException("byteCount");
                }

                return System.Int64.clip32(charCount);
            }
        }
    });

    Bridge.ns("System.Text.UnicodeEncoding", $asm.$);

    Bridge.apply($asm.$.System.Text.UnicodeEncoding, {
        f1: function (ch) {
            return ((((ch & 255) << 8) | ((ch >> 8) & 255)) & 65535);
        },
        f2: function (ch) {
            return ((((ch & 255) << 8) | (((ch >> 8)) & 255)) & 65535);
        }
    });

    Bridge.define("System.Text.UTF32Encoding", {
        inherits: [System.Text.Encoding],
        fields: {
            bigEndian: false,
            byteOrderMark: false,
            throwOnInvalid: false
        },
        props: {
            CodePage: {
                get: function () {
                    return this.bigEndian ? 1201 : 1200;
                }
            },
            EncodingName: {
                get: function () {
                    return this.bigEndian ? "Unicode (UTF-32 Big-Endian)" : "Unicode (UTF-32)";
                }
            }
        },
        ctors: {
            ctor: function () {
                System.Text.UTF32Encoding.$ctor2.call(this, false, true, false);
            },
            $ctor1: function (bigEndian, byteOrderMark) {
                System.Text.UTF32Encoding.$ctor2.call(this, bigEndian, byteOrderMark, false);
            },
            $ctor2: function (bigEndian, byteOrderMark, throwOnInvalidBytes) {
                this.$initialize();
                System.Text.Encoding.ctor.call(this);
                this.bigEndian = bigEndian;
                this.byteOrderMark = byteOrderMark;
                this.throwOnInvalid = throwOnInvalidBytes;
                this.fallbackCharacter = 65533;
            }
        },
        methods: {
            toCodePoints: function (str) {
                var surrogate_1st = 0;
                var unicode_codes = System.Array.init(0, 0, System.Char);
                var fallback = Bridge.fn.bind(this, function () {
                    if (this.throwOnInvalid) {
                        throw new System.Exception("Invalid character in UTF32 text");
                    }
                    unicode_codes.push(this.fallbackCharacter);
                });

                for (var i = 0; i < str.length; i = (i + 1) | 0) {
                    var utf16_code = str.charCodeAt(i);

                    if (surrogate_1st !== 0) {
                        if (utf16_code >= 56320 && utf16_code <= 57343) {
                            var surrogate_2nd = utf16_code;
                            var unicode_code = (((Bridge.Int.mul((((surrogate_1st - 55296) | 0)), (1024)) + (65536)) | 0) + (((surrogate_2nd - 56320) | 0))) | 0;
                            unicode_codes.push(unicode_code);
                        } else {
                            fallback();
                            i = (i - 1) | 0;
                        }
                        surrogate_1st = 0;
                    } else if (utf16_code >= 55296 && utf16_code <= 56319) {
                        surrogate_1st = utf16_code;
                    } else if ((utf16_code >= 56320) && (utf16_code <= 57343)) {
                        fallback();
                    } else {
                        unicode_codes.push(utf16_code);
                    }
                }

                if (surrogate_1st !== 0) {
                    fallback();
                }

                return unicode_codes;
            },
            encode$3: function (s, outputBytes, outputIndex, writtenBytes) {
                var hasBuffer = outputBytes != null;
                var recorded = 0;

                var write = function (ch) {
                    if (hasBuffer) {
                        if (outputIndex >= outputBytes.length) {
                            throw new System.ArgumentException("bytes");
                        }

                        outputBytes[System.Array.index(Bridge.identity(outputIndex, (outputIndex = (outputIndex + 1) | 0)), outputBytes)] = ch;
                    } else {
                        outputBytes.push(ch);
                    }
                    recorded = (recorded + 1) | 0;
                };

                var write32 = Bridge.fn.bind(this, function (a) {
                    var r = System.Array.init(4, 0, System.Byte);
                    r[System.Array.index(0, r)] = (((a & 255) >>> 0));
                    r[System.Array.index(1, r)] = ((((a & 65280) >>> 0)) >>> 8);
                    r[System.Array.index(2, r)] = ((((a & 16711680) >>> 0)) >>> 16);
                    r[System.Array.index(3, r)] = ((((a & 4278190080) >>> 0)) >>> 24);

                    if (this.bigEndian) {
                        r.reverse();
                    }

                    write(r[System.Array.index(0, r)]);
                    write(r[System.Array.index(1, r)]);
                    write(r[System.Array.index(2, r)]);
                    write(r[System.Array.index(3, r)]);
                });

                if (!hasBuffer) {
                    outputBytes = System.Array.init(0, 0, System.Byte);
                }

                var unicode_codes = this.toCodePoints(s);
                for (var i = 0; i < unicode_codes.length; i = (i + 1) | 0) {
                    write32(unicode_codes[System.Array.index(i, unicode_codes)]);
                }

                writtenBytes.v = recorded;

                if (hasBuffer) {
                    return null;
                }

                return new Uint8Array(outputBytes);
            },
            decode$2: function (bytes, index, count, chars, charIndex) {
                var position = index;
                var result = "";
                var endpoint = (position + count) | 0;

                var fallback = Bridge.fn.bind(this, function () {
                    if (this.throwOnInvalid) {
                        throw new System.Exception("Invalid character in UTF32 text");
                    }

                    result = System.String.concat(result, (String.fromCharCode(this.fallbackCharacter)));
                });

                var read32 = Bridge.fn.bind(this, function () {
                    if ((((position + 4) | 0)) > endpoint) {
                        position = (position + 4) | 0;
                        return null;
                    }

                    var a = bytes[System.Array.index(Bridge.identity(position, (position = (position + 1) | 0)), bytes)];
                    var b = bytes[System.Array.index(Bridge.identity(position, (position = (position + 1) | 0)), bytes)];
                    var c = bytes[System.Array.index(Bridge.identity(position, (position = (position + 1) | 0)), bytes)];
                    var d = bytes[System.Array.index(Bridge.identity(position, (position = (position + 1) | 0)), bytes)];

                    if (this.bigEndian) {
                        var tmp = b;
                        b = c;
                        c = tmp;

                        tmp = a;
                        a = d;
                        d = tmp;
                    }

                    return ((d << 24) | (c << 16) | (b << 8) | a);
                });

                while (position < endpoint) {
                    var unicode_code = read32();

                    if (unicode_code == null) {
                        fallback();
                        continue;
                    }

                    if (System.Nullable.lt(unicode_code, 65536) || System.Nullable.gt(unicode_code, 1114111)) {
                        if (System.Nullable.lt(unicode_code, 0) || System.Nullable.gt(unicode_code, 1114111) || (System.Nullable.gte(unicode_code, 55296) && System.Nullable.lte(unicode_code, 57343))) {
                            fallback();
                        } else {
                            result = System.String.concat(result, (String.fromCharCode(unicode_code)));
                        }
                    } else {
                        result = System.String.concat(result, (String.fromCharCode((Bridge.Int.clipu32(System.Nullable.add((Bridge.Int.clipu32(Bridge.Int.div((Bridge.Int.clipu32(System.Nullable.sub(unicode_code, (65536)))), (1024)))), 55296))))));
                        result = System.String.concat(result, (String.fromCharCode((Bridge.Int.clipu32(System.Nullable.add((System.Nullable.mod(unicode_code, (1024))), 56320))))));
                    }
                }

                return result;
            },
            getMaxByteCount: function (charCount) {
                if (charCount < 0) {
                    throw new System.ArgumentOutOfRangeException("charCount");
                }

                var byteCount = System.Int64(charCount).add(System.Int64(1));
                byteCount = byteCount.mul(System.Int64(4));

                if (byteCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException("charCount");
                }

                return System.Int64.clip32(byteCount);
            },
            getMaxCharCount: function (byteCount) {
                if (byteCount < 0) {
                    throw new System.ArgumentOutOfRangeException("byteCount");
                }

                var charCount = (((Bridge.Int.div(byteCount, 2)) | 0) + 2) | 0;

                if (charCount > 2147483647) {
                    throw new System.ArgumentOutOfRangeException("byteCount");
                }

                return charCount;
            }
        }
    });

    Bridge.define("System.Text.UTF7Encoding", {
        inherits: [System.Text.Encoding],
        statics: {
            methods: {
                escape: function (chars) {
                    return chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
                }
            }
        },
        fields: {
            allowOptionals: false
        },
        props: {
            CodePage: {
                get: function () {
                    return 65000;
                }
            },
            EncodingName: {
                get: function () {
                    return "Unicode (UTF-7)";
                }
            }
        },
        ctors: {
            ctor: function () {
                System.Text.UTF7Encoding.$ctor1.call(this, false);
            },
            $ctor1: function (allowOptionals) {
                this.$initialize();
                System.Text.Encoding.ctor.call(this);
                this.allowOptionals = allowOptionals;
                this.fallbackCharacter = 65533;
            }
        },
        methods: {
            encode$3: function (s, outputBytes, outputIndex, writtenBytes) {
                var setD = System.String.concat("A-Za-z0-9", System.Text.UTF7Encoding.escape("'(),-./:?"));

                var encode = $asm.$.System.Text.UTF7Encoding.f1;

                var setO = System.Text.UTF7Encoding.escape("!\"#$%&*;<=>@[]^_`{|}");
                var setW = System.Text.UTF7Encoding.escape(" \r\n\t");

                s = s.replace(new RegExp("[^" + setW + setD + (this.allowOptionals ? setO : "") + "]+", 'g'), function(chunk) {return '+' + (chunk === '+' ? '' : encode(chunk)) + '-';});

                var arr = System.String.toCharArray(s, 0, s.length);

                if (outputBytes != null) {
                    var recorded = 0;

                    if (arr.length > (((outputBytes.length - outputIndex) | 0))) {
                        throw new System.ArgumentException("bytes");
                    }

                    for (var j = 0; j < arr.length; j = (j + 1) | 0) {
                        outputBytes[System.Array.index(((j + outputIndex) | 0), outputBytes)] = arr[System.Array.index(j, arr)];
                        recorded = (recorded + 1) | 0;
                    }

                    writtenBytes.v = recorded;
                    return null;
                }

                writtenBytes.v = arr.length;

                return new Uint8Array(arr);
            },
            decode$2: function (bytes, index, count, chars, charIndex) {
                var _base64ToArrayBuffer = $asm.$.System.Text.UTF7Encoding.f2;

                var decode = function (s) {
                    var b = _base64ToArrayBuffer(s);
                    var r = System.Array.init(0, 0, System.Char);
                    for (var i = 0; i < b.length; ) {
                        r.push(((b[System.Array.index(Bridge.identity(i, (i = (i + 1) | 0)), b)] << 8 | b[System.Array.index(Bridge.identity(i, (i = (i + 1) | 0)), b)]) & 65535));
                    }
                    return System.String.fromCharArray(r);
                };

                var str = System.String.fromCharArray(bytes, index, count);
                return str.replace(/\+([A-Za-z0-9\/]*)-?/gi, function (_, chunk) {if (chunk === '') {return _ == '+-' ? '+' : '';}return decode(chunk);});
            },
            getMaxByteCount: function (charCount) {
                if (charCount < 0) {
                    throw new System.ArgumentOutOfRangeException("charCount");
                }

                var byteCount = System.Int64(charCount).mul(System.Int64(3)).add(System.Int64(2));

                if (byteCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException("charCount");
                }

                return System.Int64.clip32(byteCount);
            },
            getMaxCharCount: function (byteCount) {
                if (byteCount < 0) {
                    throw new System.ArgumentOutOfRangeException("byteCount");
                }

                var charCount = byteCount;
                if (charCount === 0) {
                    charCount = 1;
                }

                return charCount | 0;
            }
        }
    });

    Bridge.ns("System.Text.UTF7Encoding", $asm.$);

    Bridge.apply($asm.$.System.Text.UTF7Encoding, {
        f1: function (str) {
            var b = System.Array.init(Bridge.Int.mul(str.length, 2), 0, System.Byte);
            var bi = 0;
            for (var i = 0; i < str.length; i = (i + 1) | 0) {
                var c = str.charCodeAt(i);
                b[System.Array.index(Bridge.identity(bi, (bi = (bi + 1) | 0)), b)] = (c >> 8);
                b[System.Array.index(Bridge.identity(bi, (bi = (bi + 1) | 0)), b)] = (c & 255);
            }
            var base64Str = System.Convert.toBase64String(b, null, null, null);
            return base64Str.replace(/=+$/, '');
        },
        f2: function (base64) {
            try {
                var binary_string = window.atob(base64);
                var len = binary_string.length;
                var arr = System.Array.init(len, 0, System.Char);

                if (len === 1 && binary_string.charCodeAt(0) === 0) {
                    return System.Array.init(0, 0, System.Char);
                }

                for (var i = 0; i < len; i = (i + 1) | 0) {
                    arr[System.Array.index(i, arr)] = binary_string.charCodeAt(i);
                }
                return arr;
            }
            catch ($e1) {
                $e1 = System.Exception.create($e1);
                return System.Array.init(0, 0, System.Char);
            }
        }
    });

    Bridge.define("System.Text.UTF8Encoding", {
        inherits: [System.Text.Encoding],
        fields: {
            encoderShouldEmitUTF8Identifier: false,
            throwOnInvalid: false
        },
        props: {
            CodePage: {
                get: function () {
                    return 65001;
                }
            },
            EncodingName: {
                get: function () {
                    return "Unicode (UTF-8)";
                }
            }
        },
        ctors: {
            ctor: function () {
                System.Text.UTF8Encoding.$ctor1.call(this, false);
            },
            $ctor1: function (encoderShouldEmitUTF8Identifier) {
                System.Text.UTF8Encoding.$ctor2.call(this, encoderShouldEmitUTF8Identifier, false);
            },
            $ctor2: function (encoderShouldEmitUTF8Identifier, throwOnInvalidBytes) {
                this.$initialize();
                System.Text.Encoding.ctor.call(this);
                this.encoderShouldEmitUTF8Identifier = encoderShouldEmitUTF8Identifier;
                this.throwOnInvalid = throwOnInvalidBytes;
                this.fallbackCharacter = 65533;
            }
        },
        methods: {
            encode$3: function (s, outputBytes, outputIndex, writtenBytes) {
                var hasBuffer = outputBytes != null;
                var record = 0;

                var write = function (args) {
                    var len = args.length;
                    for (var j = 0; j < len; j = (j + 1) | 0) {
                        var code = args[System.Array.index(j, args)];
                        if (hasBuffer) {
                            if (outputIndex >= outputBytes.length) {
                                throw new System.ArgumentException("bytes");
                            }

                            outputBytes[System.Array.index(Bridge.identity(outputIndex, (outputIndex = (outputIndex + 1) | 0)), outputBytes)] = code;
                        } else {
                            outputBytes.push(code);
                        }
                        record = (record + 1) | 0;
                    }
                };

                var fallback = Bridge.fn.bind(this, $asm.$.System.Text.UTF8Encoding.f1);

                if (!hasBuffer) {
                    outputBytes = System.Array.init(0, 0, System.Byte);
                }

                for (var i = 0; i < s.length; i = (i + 1) | 0) {
                    var charcode = s.charCodeAt(i);

                    if ((charcode >= 55296) && (charcode <= 56319)) {
                        var next = s.charCodeAt(((i + 1) | 0));
                        if (!((next >= 56320) && (next <= 57343))) {
                            charcode = fallback();
                        }
                    } else if ((charcode >= 56320) && (charcode <= 57343)) {
                        charcode = fallback();
                    }

                    if (charcode < 128) {
                        write(System.Array.init([charcode], System.Byte));
                    } else if (charcode < 2048) {
                        write(System.Array.init([(192 | (charcode >> 6)), (128 | (charcode & 63))], System.Byte));
                    } else if (charcode < 55296 || charcode >= 57344) {
                        write(System.Array.init([(224 | (charcode >> 12)), (128 | ((charcode >> 6) & 63)), (128 | (charcode & 63))], System.Byte));
                    } else {
                        i = (i + 1) | 0;
                        var code = (65536 + (((charcode & 1023) << 10) | (s.charCodeAt(i) & 1023))) | 0;
                        write(System.Array.init([(240 | (code >> 18)), (128 | ((code >> 12) & 63)), (128 | ((code >> 6) & 63)), (128 | (code & 63))], System.Byte));
                    }
                }

                writtenBytes.v = record;

                if (hasBuffer) {
                    return null;
                }

                return new Uint8Array(outputBytes);
            },
            decode$2: function (bytes, index, count, chars, charIndex) {
                var position = index;
                var result = "";
                var surrogate1 = 0;
                var addFallback = false;
                var endpoint = (position + count) | 0;

                for (; position < endpoint; position = (position + 1) | 0) {
                    var accumulator = 0;
                    var extraBytes = 0;
                    var hasError = false;
                    var firstByte = bytes[System.Array.index(position, bytes)];

                    if (firstByte <= 127) {
                        accumulator = firstByte;
                    } else if ((firstByte & 64) === 0) {
                        hasError = true;
                    } else if ((firstByte & 224) === 192) {
                        accumulator = firstByte & 31;
                        extraBytes = 1;
                    } else if ((firstByte & 240) === 224) {
                        accumulator = firstByte & 15;
                        extraBytes = 2;
                    } else if ((firstByte & 248) === 240) {
                        accumulator = firstByte & 7;
                        extraBytes = 3;
                    } else if ((firstByte & 252) === 248) {
                        accumulator = firstByte & 3;
                        extraBytes = 4;
                        hasError = true;
                    } else if ((firstByte & 254) === 252) {
                        accumulator = firstByte & 3;
                        extraBytes = 5;
                        hasError = true;
                    } else {
                        accumulator = firstByte;
                        hasError = false;
                    }

                    while (extraBytes > 0) {
                        position = (position + 1) | 0;

                        if (position >= endpoint) {
                            hasError = true;
                            break;
                        }

                        var extraByte = bytes[System.Array.index(position, bytes)];
                        extraBytes = (extraBytes - 1) | 0;

                        if ((extraByte & 192) !== 128) {
                            position = (position - 1) | 0;
                            hasError = true;
                            break;
                        }

                        accumulator = (accumulator << 6) | (extraByte & 63);
                    }

                    /* if ((accumulator == 0xFFFE) || (accumulator == 0xFFFF)) {
                       hasError = true;
                    }*/

                    var characters = null;
                    addFallback = false;
                    if (!hasError) {
                        if (surrogate1 > 0 && !((accumulator >= 56320) && (accumulator <= 57343))) {
                            hasError = true;
                            surrogate1 = 0;
                        } else if ((accumulator >= 55296) && (accumulator <= 56319)) {
                            surrogate1 = accumulator & 65535;
                        } else if ((accumulator >= 56320) && (accumulator <= 57343)) {
                            hasError = true;
                            addFallback = true;
                            surrogate1 = 0;
                        } else {
                            characters = System.String.fromCharCode(accumulator);
                            surrogate1 = 0;
                        }
                    }

                    if (hasError) {
                        if (this.throwOnInvalid) {
                            throw new System.Exception("Invalid character in UTF8 text");
                        }

                        result = System.String.concat(result, String.fromCharCode(this.fallbackCharacter));
                    } else if (surrogate1 === 0) {
                        result = System.String.concat(result, characters);
                    }
                }

                if (surrogate1 > 0 || addFallback) {
                    if (this.throwOnInvalid) {
                        throw new System.Exception("Invalid character in UTF8 text");
                    }

                    if (result.length > 0 && result.charCodeAt(((result.length - 1) | 0)) === this.fallbackCharacter) {
                        result = System.String.concat(result, String.fromCharCode(this.fallbackCharacter));
                    } else {
                        result = System.String.concat(result, (((this.fallbackCharacter + this.fallbackCharacter) | 0)));
                    }
                }

                return result;
            },
            getMaxByteCount: function (charCount) {
                if (charCount < 0) {
                    throw new System.ArgumentOutOfRangeException("charCount");
                }


                var byteCount = System.Int64(charCount).add(System.Int64(1));
                byteCount = byteCount.mul(System.Int64(3));

                if (byteCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException("charCount");
                }

                return System.Int64.clip32(byteCount);
            },
            getMaxCharCount: function (byteCount) {
                if (byteCount < 0) {
                    throw new System.ArgumentOutOfRangeException("byteCount");
                }

                var charCount = System.Int64(byteCount).add(System.Int64(1));

                if (charCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException("byteCount");
                }

                return System.Int64.clip32(charCount);
            }
        }
    });

    Bridge.ns("System.Text.UTF8Encoding", $asm.$);

    Bridge.apply($asm.$.System.Text.UTF8Encoding, {
        f1: function () {
            if (this.throwOnInvalid) {
                throw new System.Exception("Invalid character in UTF8 text");
            }

            return this.fallbackCharacter;
        }
    });
