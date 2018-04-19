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
            ToCodePoints: function (str) {
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
            Encode$3: function (s, outputBytes, outputIndex, writtenBytes) {
                var hasBuffer = outputBytes != null;
                var recorded = 0;

                var write = function (ch) {
                    if (hasBuffer) {
                        if (outputIndex >= outputBytes.length) {
                            throw new System.ArgumentException.$ctor1("bytes");
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

                var unicode_codes = this.ToCodePoints(s);
                for (var i = 0; i < unicode_codes.length; i = (i + 1) | 0) {
                    write32(unicode_codes[System.Array.index(i, unicode_codes)]);
                }

                writtenBytes.v = recorded;

                if (hasBuffer) {
                    return null;
                }

                return outputBytes;
            },
            Decode$2: function (bytes, index, count, chars, charIndex) {
                var position = index;
                var result = "";
                var endpoint = (position + count) | 0;
                this._hasError = false;

                var fallback = Bridge.fn.bind(this, function () {
                    if (this.throwOnInvalid) {
                        throw new System.Exception("Invalid character in UTF32 text");
                    }

                    result = (result || "") + ((String.fromCharCode(this.fallbackCharacter)) || "");
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
                        this._hasError = true;
                        continue;
                    }

                    if (System.Nullable.lt(unicode_code, 65536) || System.Nullable.gt(unicode_code, 1114111)) {
                        if (System.Nullable.lt(unicode_code, 0) || System.Nullable.gt(unicode_code, 1114111) || (System.Nullable.gte(unicode_code, 55296) && System.Nullable.lte(unicode_code, 57343))) {
                            fallback();
                        } else {
                            result = (result || "") + ((String.fromCharCode(unicode_code)) || "");
                        }
                    } else {
                        result = (result || "") + ((String.fromCharCode((Bridge.Int.clipu32(System.Nullable.add((Bridge.Int.clipu32(Bridge.Int.div((Bridge.Int.clipu32(System.Nullable.sub(unicode_code, (65536)))), (1024)))), 55296))))) || "");
                        result = (result || "") + ((String.fromCharCode((Bridge.Int.clipu32(System.Nullable.add((System.Nullable.mod(unicode_code, (1024))), 56320))))) || "");
                    }
                }

                return result;
            },
            GetMaxByteCount: function (charCount) {
                if (charCount < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("charCount");
                }

                var byteCount = System.Int64(charCount).add(System.Int64(1));
                byteCount = byteCount.mul(System.Int64(4));

                if (byteCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("charCount");
                }

                return System.Int64.clip32(byteCount);
            },
            GetMaxCharCount: function (byteCount) {
                if (byteCount < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("byteCount");
                }

                var charCount = (((Bridge.Int.div(byteCount, 2)) | 0) + 2) | 0;

                if (charCount > 2147483647) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("byteCount");
                }

                return charCount;
            }
        }
    });
