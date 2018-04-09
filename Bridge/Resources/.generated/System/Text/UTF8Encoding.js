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
            Encode$3: function (s, outputBytes, outputIndex, writtenBytes) {
                var hasBuffer = outputBytes != null;
                var record = 0;

                var write = function (args) {
                    var len = args.length;
                    for (var j = 0; j < len; j = (j + 1) | 0) {
                        var code = args[System.Array.index(j, args)];
                        if (hasBuffer) {
                            if (outputIndex >= outputBytes.length) {
                                throw new System.ArgumentException.$ctor1("bytes");
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

                return outputBytes;
            },
            Decode$2: function (bytes, index, count, chars, charIndex) {
                this._hasError = false;
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

                        result = (result || "") + String.fromCharCode(this.fallbackCharacter);
                        this._hasError = true;
                    } else if (surrogate1 === 0) {
                        result = (result || "") + (characters || "");
                    }
                }

                if (surrogate1 > 0 || addFallback) {
                    if (this.throwOnInvalid) {
                        throw new System.Exception("Invalid character in UTF8 text");
                    }

                    if (result.length > 0 && result.charCodeAt(((result.length - 1) | 0)) === this.fallbackCharacter) {
                        result = (result || "") + String.fromCharCode(this.fallbackCharacter);
                    } else {
                        result = (result || "") + (((this.fallbackCharacter + this.fallbackCharacter) | 0));
                    }

                    this._hasError = true;
                }

                return result;
            },
            GetMaxByteCount: function (charCount) {
                if (charCount < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("charCount");
                }


                var byteCount = System.Int64(charCount).add(System.Int64(1));
                byteCount = byteCount.mul(System.Int64(3));

                if (byteCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("charCount");
                }

                return System.Int64.clip32(byteCount);
            },
            GetMaxCharCount: function (byteCount) {
                if (byteCount < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("byteCount");
                }

                var charCount = System.Int64(byteCount).add(System.Int64(1));

                if (charCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("byteCount");
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
