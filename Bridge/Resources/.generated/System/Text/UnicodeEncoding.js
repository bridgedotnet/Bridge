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
            Encode$3: function (s, outputBytes, outputIndex, writtenBytes) {
                var hasBuffer = outputBytes != null;
                var recorded = 0;
                var surrogate_1st = 0;
                var fallbackCharacterCode = this.fallbackCharacter;

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
                        ch = ch - 0x10000;

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

                return outputBytes;
            },
            Decode$2: function (bytes, index, count, chars, charIndex) {
                var position = index;
                var result = "";
                var endpoint = (position + count) | 0;
                this._hasError = false;

                var fallback = Bridge.fn.bind(this, function () {
                    if (this.throwOnInvalid) {
                        throw new System.Exception("Invalid character in UTF16 text");
                    }

                    result = (result || "") + String.fromCharCode(this.fallbackCharacter);
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
                        this._hasError = true;
                    } else if ((System.Nullable.lt(firstWord, 55296)) || (System.Nullable.gt(firstWord, 57343))) {
                        result = (result || "") + ((System.String.fromCharCode(System.Nullable.getValue(firstWord))) || "");
                    } else if ((System.Nullable.gte(firstWord, 55296)) && (System.Nullable.lte(firstWord, 56319))) {
                        var end = position >= endpoint;
                        var secondWord = readPair();
                        if (end) {
                            fallback();
                            this._hasError = true;
                        } else if (!System.Nullable.hasValue(secondWord)) {
                            fallback();
                            fallback();
                        } else if ((System.Nullable.gte(secondWord, 56320)) && (System.Nullable.lte(secondWord, 57343))) {
                            var highBits = System.Nullable.band(firstWord, 1023);
                            var lowBits = System.Nullable.band(secondWord, 1023);

                            var charCode = Bridge.Int.clip32(System.Nullable.add((System.Nullable.bor((System.Nullable.sl(highBits, 10)), lowBits)), 65536));

                            result = (result || "") + ((System.String.fromCharCode(System.Nullable.getValue(charCode))) || "");
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
            GetMaxByteCount: function (charCount) {
                if (charCount < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("charCount");
                }

                var byteCount = System.Int64(charCount).add(System.Int64(1));
                byteCount = byteCount.shl(1);

                if (byteCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("charCount");
                }

                return System.Int64.clip32(byteCount);
            },
            GetMaxCharCount: function (byteCount) {
                if (byteCount < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("byteCount");
                }

                var charCount = System.Int64((byteCount >> 1)).add(System.Int64((byteCount & 1))).add(System.Int64(1));

                if (charCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("byteCount");
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
