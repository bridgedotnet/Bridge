    Bridge.define("System.Text.EncodingInfo", {
        props: {
            CodePage: 0,
            Name: null,
            DisplayName: null
        },
        ctors: {
            ctor: function (codePage, name, displayName) {
                this.$initialize();
                this.CodePage = codePage;
                this.Name = name;
                this.DisplayName = displayName || name;
            }
        },
        methods: {
            getEncoding: function () {
                return System.Text.Encoding.GetEncoding(this.CodePage);
            },

            equals: function (value) {
                var that = Bridge.as(value, System.Text.EncodingInfo);
                if (that != null) {
                    return (this.CodePage === that.CodePage);
                }
                return false;
            },
            getHashCode: function () {
                return this.CodePage;
            }
        }
    });

    Bridge.define("System.Text.Encoding",
    {
        statics: {
            properties: {
                Default: null,
                Unicode: null,
                ASCII: null,
                BigEndianUnicode: null,
                UTF7: null,
                UTF8: null
            },
            ctors: {
                init: function () {
                    this.Default = new System.Text.UnicodeEncoding(false, true);
                    this.Unicode = new System.Text.UnicodeEncoding(false, true);
                    this.ASCII = new System.Text.ASCIIEncoding();
                    this.BigEndianUnicode = new System.Text.UnicodeEncoding(true, true);
                    this.UTF7 = new System.Text.UTF7Encoding();
                    this.UTF8 = new System.Text.UTF8Encoding();
                    this.UTF32 = new System.Text.UTF32Encoding(false, true);
                }
            },
            methods: {
                convert: function (srcEncoding, dstEncoding, bytes, index, count) {
                    if (srcEncoding == null || dstEncoding == null) {
                        throw new System.ArgumentNullException(srcEncoding == null ? "srcEncoding" : "dstEncoding");
                    }

                    if (bytes == null) {
                        throw new System.ArgumentNullException("bytes");
                    }
                        
                    if (index == null) {
                        index = 0;
                        count = bytes.length;
                    }
            
                    return dstEncoding.getBytes(srcEncoding.GetChars(bytes, index, count));
                },

                getEncoding: function (codePage) {
                    switch (codePage) {
                        case "utf-16":
                        case 1200:
                            return System.Text.Encoding.Unicode;
                        case "us-ascii":
                        case 20127:
                            return System.Text.Encoding.ASCII;
                        case "utf-16BE":
                        case 1201:
                            return System.Text.Encoding.BigEndianUnicode;
                        case "utf-7":
                        case 65000:
                            return System.Text.Encoding.UTF7;
                        case "utf-8":
                        case 65001:
                            return System.Text.Encoding.UTF8;
                        case "utf-32":
                            return System.Text.Encoding.UTF32;
                    
                    }
                    throw new NotSupportedException();
                },

                getEncodings: function () {
                    if (System.Text.Encoding.$encodings) {
                        return System.Text.Encoding.$encodings;
                    }
                    var result = System.Text.Encoding.$encodings = [];
                    result.push(new System.Text.EncodingInfo(20127, "us-ascii", "US-ASCII"));
                    result.push(new System.Text.EncodingInfo(1200, "utf-16", "Unicode"));
                    result.push(new System.Text.EncodingInfo(1201, "utf-16BE", "Unicode (Big-Endian)"));
                    result.push(new System.Text.EncodingInfo(65000, "utf-7", "Unicode (UTF-7)"));
                    result.push(new System.Text.EncodingInfo(65001, "utf-8", "Unicode (UTF-8)"));
                    result.push(new System.Text.EncodingInfo(1200, "utf-32", "Unicode (UTF-32)"));
                    return result;
                }
            }
        },

        properties: {
            fallbackCharacter: "?",
            CodePage: 0,
            EncodingName: null
        },

        methods: {
            $encode: function (str, outputBytes, outputIndex) {
                throw new System.NotImplementedException();
            },

            $decode: function (bytes, index, count) {
                throw new System.NotImplementedException();
            },

            fromCharArray: function (chars, startIndex, length) {
                var result = "";

                startIndex = startIndex || 0;
                length = Bridge.isNumber(length) ? length : chars.length;

                for (var i = 0; i < length; i++) {
                    var ch = chars[i + startIndex] | 0;
                    result += String.fromCharCode(ch);
                }

                return result;
            },

            getByteCount: function (chars, index, count) {
                if (Bridge.is(chars, System.String)) {
                    return this.$encode(chars).length;
                }

                return this.$encode(this.fromCharArray(chars, index, count)).length;
            },

            getBytes: function (chars, charIndex, charCount, bytes, byteIndex) {
                if (Bridge.is(chars, System.String)) {
                    if (arguments.length == 1) {
                        return this.$encode(chars);
                    }
                    else {
                        return this.$encode(chars.substr(charIndex, charCount), bytes, byteIndex);
                    }
                } else {
                    if (arguments.length == 1 || arguments.length == 3) {
                        return this.$encode(this.fromCharArray(chars, charIndex, charCount));
                    }
                    else {
                        return this.$encode(this.fromCharArray(chars, charIndex, charCount), bytes, byteIndex);
                    }
                }
            },

            getCharCount: function (bytes, index, count) {
                return this.$decode(bytes, index, count).length;
            },

            getChars: function (bytes, byteIndex, byteCount, chars, charIndex) {
                var arr = this.$decode(bytes, byteIndex, byteCount);
                arr = System.String.toCharArray(arr, 0, arr.length);

                if (!chars) {
                    return arr;
                }

                charIndex = charIndex || 0;

                if (chars.length < (arr.length + charIndex)) {
                    throw new System.ArgumentException(null, "chars");
                }

                for (var i = 0; i < arr.length; i++) {
                    chars[charIndex + i] = arr[i];
                }

                return arr.length;
            },

            getString: function (bytes, index, count) {
                return this.$decode(bytes, index, count);
            }
        }
    });

    Bridge.define("System.Text.ASCIIEncoding", {
        inherits: [System.Text.Encoding],

        props: {
            EncodingName: "US-ASCII",
            CodePage: 20127
        },

        methods: {
            $encode: function (str, outputBytes, outputIndex) {
                var fallbackCharacter = this.fallbackCharacter.charCodeAt(0),
                    ch, i,
                    hasBuffer = Bridge.isArray(outputBytes);

                if (!hasBuffer) {
                    outputBytes = [];
                }

                var recorded = 0;
                outputIndex = outputIndex || 0;
                for (i = 0; i < str.length; i++) {
                    ch = str.charCodeAt(i);
                    ch = ch <= 127 ? ch : fallbackCharacter;

                    if (hasBuffer) {
                        if ((i + outputIndex) >= outputBytes.length) {
                            throw new System.ArgumentException("bytes");
                        }
                        outputBytes[i + outputIndex] = ch;
                    } else {
                        outputBytes.push(ch);
                    }
                    recorded++;
                }

                if (hasBuffer) {
                    return recorded;
                }

                if (typeof (Uint8Array) !== "undefined") {
                    return new Uint8Array(outputBytes);
                }

                return outputBytes;
            },

            $decode: function (bytes, index, count) {
                var position = index || 0,
                    endpoint, byte,
                    result = "";

                if (typeof (count) === "number") {
                    endpoint = position + count;
                } else {
                    endpoint = bytes.length - position;
                }

                for (; position < endpoint; position++) {
                    byte = bytes[position];

                    if (byte > 127) {
                        result += this.fallbackCharacter;
                    } else {
                        result += String.fromCharCode(byte);
                    }
                }

                return result;
            },

            getMaxByteCount: function(charCount) {
                if (charCount < 0)
                    throw new System.ArgumentOutOfRangeException("charCount");

                var byteCount = charCount + 1;

                if (byteCount > 0x7fffffff)
                    throw new System.ArgumentOutOfRangeException("charCount");
                return byteCount | 0;
            },

            getMaxCharCount: function (byteCount) {
                if (byteCount < 0)
                    throw new System.ArgumentOutOfRangeException("byteCount");

                if (byteCount > 0x7fffffff)
                    throw new System.ArgumentOutOfRangeException("byteCount", Environment.GetResourceString("ArgumentOutOfRange_GetCharCountOverflow"));

                return byteCount;
            }
        }
    });
    
    Bridge.define("System.Text.UnicodeEncoding", {
        inherits: [System.Text.Encoding],

        props: {
            EncodingName: "Unicode",
            CodePage: 1200
        },

        ctors: {
            ctor: function (bigEndian, byteOrderMark, throwOnInvalidBytes) {
                this.$initialize();

                this.bigEndian = bigEndian;
                this.byteOrderMark = byteOrderMark;
                this.throwOnInvalid = throwOnInvalidBytes;
                this.fallbackCharacter = String.fromCharCode(0xFFFD);
            }
        },

        methods: {
            charCodeAt: function (str, idx) {
                idx = idx || 0;
                var code = str.charCodeAt(idx),
                    hi,
                    low;

                if (0xD800 <= code && code <= 0xDBFF) {
                    hi = code;
                    low = str.charCodeAt(idx + 1);
                    if (isNaN(low)) {
                        throw new System.Exception("High surrogate not followed by low surrogate");
                    }

                    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
                }

                if (0xDC00 <= code && code <= 0xDFFF) {
                    return false;
                }

                return code;
            },

            $encode: function (str, outputBytes, outputIndex) {
                var me = this,
                    ch, i, lowBits, highBits,
                    hasBuffer = Bridge.isArray(outputBytes),
                    hasError = false,
                    fallbackCharacterCode = this.fallbackCharacter.charCodeAt(0),
                    write = function(ch) {
                        if (hasBuffer) {
                            if (outputIndex >= outputBytes.length) {
                                throw new System.ArgumentException("bytes");
                            }

                            outputBytes[outputIndex++] = ch;
                        } else {
                            outputBytes.push(ch);
                        }
                        recorded++;
                    },
                    writePair = function(a, b) {
                        write(a);
                        write(b);
                    },
                    swap = function(ch) {
                        return ((ch & 0xFF) << 8) | ((ch >> 8) & 0xFF);
                    },
                    fallback = function() {
                        if (me.throwOnInvalid) {
                            throw new System.Exception("Invalid character in UTF16 text");
                        }

                        writePair(fallbackCharacterCode & 0xFF, (fallbackCharacterCode >> 8) & 0xFF);
                    };

                if (!hasBuffer) {
                    outputBytes = [];
                }

                if (this.bigEndian) {
                    fallbackCharacterCode = swap(fallbackCharacterCode);
                }

                var recorded = 0,
                    surrogate_1st = 0;
                outputIndex = outputIndex || 0;
                for (i = 0; i < str.length; i++) {
                    ch = str.charCodeAt(i);

                    if (surrogate_1st != 0) {
                        if (ch >= 0xDC00 && ch <= 0xDFFF) {
                            if (this.bigEndian) {
                                surrogate_1st = swap(surrogate_1st);
                                ch = swap(ch);
                            }
                            writePair(surrogate_1st & 0xFF, (surrogate_1st >> 8) & 0xFF);
                            writePair(ch & 0xFF, (ch >> 8) & 0xFF);
                            surrogate_1st = 0;
                            continue;
                        }
                        fallback();
                        surrogate_1st = 0;
                    }

                    if (0xD800 <= ch && ch <= 0xDBFF) {
                        surrogate_1st = ch;
                        continue;
                    } else if (0xDC00 <= ch && ch <= 0xDFFF) {
                        fallback();
                        surrogate_1st = 0;
                        continue;
                    }

                    if (ch < 0x10000) {
                        if (this.bigEndian) {
                            ch = swap(ch);
                        }
                        writePair(ch & 0xFF, (ch >> 8) & 0xFF);
                    } else if (ch <= 0x10FFFF) {
                        ch -= 0x10000;

                        lowBits = (ch & 0x3FF) | 0xDC00;
                        highBits = ((ch >> 10) & 0x3FF) | 0xD800;

                        if (this.bigEndian) {
                            highBits = swap(highBits);
                            lowBits = swap(lowBits);
                        }
                        writePair(highBits & 0xFF, (highBits >> 8) & 0xFF);
                        writePair(lowBits & 0xFF, (lowBits >> 8) & 0xFF);
                    } else {
                        fallback();
                    }
                }

                if (surrogate_1st != 0) {
                    fallback();
                }

                if (hasBuffer) {
                    return recorded;
                }

                if (typeof (Uint8Array) !== "undefined") {
                    return new Uint8Array(outputBytes);
                }

                return outputBytes;
            },

            $decode: function (bytes, index, count) {
                var me = this,
                    position = index || 0,
                    endpoint,
                    firstWord,
                    secondWord,
                    charCode,
                    result = "",
                    fallback = function() {
                        if (me.throwOnInvalid) {
                            throw new System.Exception("Invalid character in UTF16 text");
                        }

                        result += me.fallbackCharacter;
                    },
                    swap = function (ch) {
                        return ((ch & 0xFF) << 8) | ((ch >> 8) & 0xFF);
                    },
                    readPair = function () {
                        var a = bytes[position++],
                            b = bytes[position++];

                        if (position > endpoint) {
                            return false;
                        }

                        var point = (a << 8) | b;
                        if (!me.bigEndian) {
                            point = swap(point);
                        }

                        return point;
                    };

                if (typeof (count) === "number") {
                    endpoint = position + count;
                } else {
                    endpoint = bytes.length - position;
                }

                while (position < endpoint) {
                    firstWord = readPair();

                    if (firstWord === false) {
                        fallback();
                    } else if ((firstWord < 0xD800) || (firstWord > 0xDFFF)) {
                        charCode = firstWord;
                        result += System.String.fromCharCode(charCode);
                    } else if ((firstWord >= 0xD800) && (firstWord <= 0xDBFF)) {
                        var end = position >= endpoint;
                        secondWord = readPair();
                        if (end) {
                            fallback();
                        } else if (secondWord === false) {
                            fallback();
                            fallback();
                        }
                        else if ((secondWord >= 0xDC00) && (secondWord <= 0xDFFF)) {
                            var highBits = firstWord & 0x3FF,
                                lowBits = secondWord & 0x3FF;
                            charCode = ((highBits << 10) | lowBits) + 0x10000;

                            result += System.String.fromCharCode(charCode);
                        }
                        else {
                            fallback();
                            position = position - 2;
                        }
                    } else {
                        fallback();
                    }
                }

                return result;
            },

            getMaxByteCount: function (charCount) {
                if (charCount < 0)
                    throw new System.ArgumentOutOfRangeException("charCount");

                var byteCount = charCount + 1;
                byteCount <<= 1;

                if (byteCount > 0x7fffffff)
                    throw new System.ArgumentOutOfRangeException("charCount");
                return byteCount | 0;
            },

            getMaxCharCount: function (byteCount) {
                if (byteCount < 0)
                    throw new System.ArgumentOutOfRangeException("byteCount");

                var charCount = (byteCount >> 1) + (byteCount & 1) + 1;

                if (charCount > 0x7fffffff)
                    throw new System.ArgumentOutOfRangeException("byteCount", Environment.GetResourceString("ArgumentOutOfRange_GetCharCountOverflow"));

                return charCount | 0;
            }
        }
    });

    Bridge.define("System.Text.UTF8Encoding", {
        inherits: [System.Text.Encoding],

        props: {
            EncodingName: "Unicode (UTF-8)",
            CodePage: 65001
        },

        ctors: {
            ctor: function (encoderShouldEmitUTF8Identifier, throwOnInvalidBytes) {
                this.$initialize();

                this.encoderShouldEmitUTF8Identifier = encoderShouldEmitUTF8Identifier;
                this.throwOnInvalid = throwOnInvalidBytes;
                this.fallbackCharacter = String.fromCharCode(0xFFFD);
            }
        },

        methods: {
            $encode: function (str, outputBytes, outputIndex) {
                var me = this,
                    ch, i,
                    hasBuffer = Bridge.isArray(outputBytes),
                    write = function () {
                        var len = arguments.length,
                            j, ch;
                        for (var j = 0; j < len; j++) {
                            ch = arguments[j];
                            if (hasBuffer) {
                                if (outputIndex >= outputBytes.length) {
                                    throw new System.ArgumentException("bytes");
                                }

                                outputBytes[outputIndex++] = ch;
                            } else {
                                outputBytes.push(ch);
                            }
                            record++;
                        }
                    },
                    fallback = function() {
                        if (me.throwOnInvalid) {
                            throw new System.Exception("Invalid character in UTF8 text");
                        }

                        return me.fallbackCharacter.charCodeAt(0);
                    };

                if (!hasBuffer) {
                    outputBytes = [];
                }

                var record = 0;
                outputIndex = outputIndex || 0;
                for (i = 0; i < str.length; i++) {
                    var charcode = str.charCodeAt(i);

                    if ((charcode >= 0xD800) && (charcode <= 0xDBFF)) {
                        var next = str.charCodeAt(i + 1);
                        if (!((next >= 0xDC00) && (next <= 0xDFFF))) {
                            charcode = fallback();
                        }
                    } else if ((charcode >= 0xDC00) && (charcode <= 0xDFFF)) {
                        charcode = fallback();
                    }

                    if (charcode < 0x80) {
                        write(charcode);
                    }
                    else if (charcode < 0x800) {
                        write(0xc0 | (charcode >> 6),
                                  0x80 | (charcode & 0x3f));
                    }
                    else if (charcode < 0xd800 || charcode >= 0xe000) {
                        write(0xe0 | (charcode >> 12),
                                  0x80 | ((charcode >> 6) & 0x3f),
                                  0x80 | (charcode & 0x3f));
                    }
                    else {
                        i++;
                        charcode = 0x10000 + (((charcode & 0x3ff) << 10)
                                  | (str.charCodeAt(i) & 0x3ff));
                        write(0xf0 | (charcode >> 18),
                                  0x80 | ((charcode >> 12) & 0x3f),
                                  0x80 | ((charcode >> 6) & 0x3f),
                                  0x80 | (charcode & 0x3f));
                    }
                }

                if (hasBuffer) {
                    return record;
                }

                if (typeof (Uint8Array) !== "undefined") {
                    return new Uint8Array(outputBytes);
                }

                return outputBytes;
            },

            $decode: function (bytes, index, count) {
                var position = index || 0,
                    endpoint,
                    result = "", 
                    surrogate1 = 0,
                    addFallback = false;

                if (typeof (count) === "number") {
                    endpoint = position + count;
                } else {
                    endpoint = bytes.length - position;
                }

                for (; position < endpoint; position++) {
                    var accumulator = 0,
                        extraBytes = 0,
                        hasError = false,
                        firstByte = bytes[position];

                    if (firstByte <= 0x7F) {
                        accumulator = firstByte;
                    } else if ((firstByte & 0x40) == 0) {
                        hasError = true;
                    } else if ((firstByte & 0xE0) === 0xC0) {
                        accumulator = firstByte & 31;
                        extraBytes = 1;
                    } else if ((firstByte & 0xF0) === 0xE0) {
                        accumulator = firstByte & 15;
                        extraBytes = 2;
                    } else if ((firstByte & 0xF8) === 0xF0) {
                        accumulator = firstByte & 7;
                        extraBytes = 3;
                    } else if ((firstByte & 0xFC) === 0xF8) {
                        accumulator = firstByte & 3;
                        extraBytes = 4;
                        hasError = true;
                    } else if ((firstByte & 0xFE) === 0xFC) {
                        accumulator = firstByte & 3;
                        extraBytes = 5;
                        hasError = true;
                    } else {
                        accumulator = firstByte;
                        hasError = false;
                    }

                    while (extraBytes > 0) {
                        position++;

                        if (position >= endpoint) {
                            hasError = true;
                            break;
                        }

                        var extraByte = bytes[position];
                        extraBytes--;

                        if ((extraByte & 0xC0) !== 0x80) {
                            position--;
                            hasError = true;
                            break;
                        }

                        accumulator = (accumulator << 6) | (extraByte & 0x3F);
                    }

                    /*if ((accumulator === 0xFFFE) || (accumulator === 0xFFFF)) {
                        hasError = true;
                    }*/

                    var characters;
                    addFallback = false;
                    if (!hasError) {
                        if (surrogate1 && !((accumulator >= 0xDC00) && (accumulator <= 0xDFFF))) {
                            hasError = true;
                            surrogate1 = 0;
                        } else if ((accumulator >= 0xD800) && (accumulator <= 0xDBFF)) {
                            surrogate1 = accumulator;
                        } else if ((accumulator >= 0xDC00) && (accumulator <= 0xDFFF)) {
                            hasError = true;
                            addFallback = true;
                            surrogate1 = 0;
                        } else {
                            characters = System.String.fromCharCode(accumulator);
                            surrogate1 = 0;
                        }
                    }

                    if (hasError || (characters === false)) {
                        if (this.throwOnInvalid) {
                            throw new System.Exception("Invalid character in UTF8 text");
                        }
                            
                        result += this.fallbackCharacter;
                    } else if (!surrogate1) {
                        result += characters;
                    }
                }

                if (surrogate1 || addFallback) {
                    if (this.throwOnInvalid) {
                        throw new System.Exception("Invalid character in UTF8 text");
                    }

                    if (result.length > 0 && result.charAt(result.length - 1) === this.fallbackCharacter) {
                        result += this.fallbackCharacter;
                    } else {
                        result += this.fallbackCharacter + this.fallbackCharacter;
                    }
                }

                return result;
            },

            getMaxByteCount: function (charCount) {
                if (charCount < 0)
                    throw new System.ArgumentOutOfRangeException("charCount");

                var byteCount = charCount + 1;
                byteCount *= 3;

                if (byteCount > 0x7fffffff)
                    throw new System.ArgumentOutOfRangeException("charCount");
                return byteCount | 0;
            },

            getMaxCharCount: function (byteCount) {
                if (byteCount < 0)
                    throw new System.ArgumentOutOfRangeException("byteCount");

                var charCount = byteCount + 1;

                if (charCount > 0x7fffffff)
                    throw new System.ArgumentOutOfRangeException("byteCount", Environment.GetResourceString("ArgumentOutOfRange_GetCharCountOverflow"));

                return charCount | 0;
            }
        }
    });

    Bridge.define("System.Text.UTF7Encoding", {
        inherits: [System.Text.Encoding],

        props: {
            EncodingName: "Unicode (UTF-7)",
            CodePage: 65000
        },

        ctors: {
            ctor: function (allowOptionals) {
                this.$initialize();

                this.allowOptionals = allowOptionals;
                this.fallbackCharacter = String.fromCharCode(0xFFFD);
            }
        },

        methods: {
            $escape: function (chars) {
                return chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            },

            $encode: function (str, outputBytes, outputIndex) {
                var regex,
                    setD = "A-Za-z0-9" + this.$escape("'(),-./:?");;

                var encode = function(str) {
                    var b = new Array(str.length * 2);
                    for (var i = 0, bi = 0; i < str.length; i++) {
                        var c = str.charCodeAt(i);
                        b[bi++] = c >> 8;
                        b[bi++] = c & 0xFF;
                    }
                    return System.Convert.toBase64String(b).replace(/=+$/, '');
                };

                var setO = this.$escape("!\"#$%&*;<=>@[]^_`{|}"),
                    setW = this.$escape(" \r\n\t");
                regex = new RegExp("[^" + setW + setD + (this.allowOptionals ? setO : "") + "]+", 'g');

                str = str.replace(regex, function (chunk) {
                    return '+' + (chunk === '+' ? '' : encode(chunk)) + '-';
                });

                var arr = System.String.toCharArray(str);

                if (outputBytes) {
                    outputIndex = outputIndex || 0;
                    var recorded = 0;

                    if (arr.length > (outputBytes.length - outputIndex)) {
                        throw new System.ArgumentException("bytes");
                    }

                    for (var j = 0; j < arr.length; j++) {
                        outputBytes[j + outputIndex] = arr[j];
                        recorded++;
                    }

                    return recorded;
                }

                if (typeof (Uint8Array) !== "undefined") {
                    return new Uint8Array(arr);
                }

                return arr;
            },

            $decode: function (bytes, index, count) {
                var _base64ToArrayBuffer = function (base64) {
                        try {
                            var binary_string = window.atob(base64),
                                len = binary_string.length,
                                bytes = [];

                            if (len == 1 && binary_string.charCodeAt(0) === 0) {
                                return "";
                            }

                            for (var i = 0; i < len; i++) {
                                bytes[i] = binary_string.charCodeAt(i);
                            }
                            return bytes;    
                        }
                        catch(e) {
                            return "";
                        }
                    },
                    decode = function(str) {
                        var b = _base64ToArrayBuffer(str);
                        var r = [];
                        for (var i = 0; i < b.length;) {
                            r.push(String.fromCharCode(b[i++] << 8 | b[i++]));
                        }
                        return r.join('');
                    };

                var str = index != null && count != null ? String.fromCharCode.apply(null, bytes.slice(index, index + count)) : String.fromCharCode.apply(null, bytes);
                return str.replace(/\+([A-Za-z0-9\/]*)-?/gi, function (_, chunk) {
                    if (chunk === '') {
                        return _ == "+-" ? '+' : "";
                    }
                    return decode(chunk);
                });
            },

            getMaxByteCount: function (charCount) {
                if (charCount < 0)
                    throw new System.ArgumentOutOfRangeException("charCount");

                var byteCount = charCount * 3 + 2;

                if (byteCount > 0x7fffffff)
                    throw new System.ArgumentOutOfRangeException("charCount");
                return byteCount | 0;
            },

            getMaxCharCount: function (byteCount) {
                if (byteCount < 0)
                    throw new System.ArgumentOutOfRangeException("byteCount");

                var charCount = byteCount;
                if (charCount == 0) charCount = 1;

                return charCount | 0;
            }
        }
    });

    Bridge.define("System.Text.UTF32Encoding", {
        inherits: [System.Text.Encoding],

        props: {
            EncodingName: "Unicode (UTF-32)",
            CodePage: 1200
        },

        ctors: {
            ctor: function (bigEndian, byteOrderMark, throwOnInvalidBytes) {
                this.$initialize();

                this.bigEndian = bigEndian;
                this.byteOrderMark = byteOrderMark;
                this.throwOnInvalid = throwOnInvalidBytes;
                this.fallbackCharacter = String.fromCharCode(0xFFFD);
            }
        },

        methods: {
            toCodePoints: function (str) {
                var me = this,
                    surrogate_1st = 0,
                    unicode_codes = [],
                    fallbackCharacterCode = this.fallbackCharacter.charCodeAt(0),
                    fallback = function() {
                        if (me.throwOnInvalid) {
                            throw new System.Exception("Invalid character in UTF32 text");
                        }
                        unicode_codes.push(fallbackCharacterCode);
                    };

                for (var i = 0; i < str.length; ++i) {
                    var utf16_code = str.charCodeAt(i);

                    if (surrogate_1st != 0) {
                        if (utf16_code >= 0xDC00 && utf16_code <= 0xDFFF) {
                            var surrogate_2nd = utf16_code;
                            var unicode_code = (surrogate_1st - 0xD800) * (1 << 10) + (1 << 16) +
                                               (surrogate_2nd - 0xDC00);
                            unicode_codes.push(unicode_code);
                        } else {
                            fallback();
                            i--;
                        }
                        surrogate_1st = 0;
                    } else if (utf16_code >= 0xD800 && utf16_code <= 0xDBFF) {
                        surrogate_1st = utf16_code;
                    } else if ((utf16_code >= 0xDC00) && (utf16_code <= 0xDFFF)) {
                        fallback();
                    } else {
                        unicode_codes.push(utf16_code);
                    }
                }

                if (surrogate_1st != 0) {
                    fallback();
                }

                return unicode_codes;
            },

            $encode: function (str, outputBytes, outputIndex) {
                var me = this,
                    unicode_codes,
                    hasBuffer = Bridge.isArray(outputBytes),
                    
                    write = function (ch) {
                        if (hasBuffer) {
                            if (outputIndex >= outputBytes.length) {
                                throw new System.ArgumentException("bytes");
                            }

                            outputBytes[outputIndex++] = ch;
                        } else {
                            outputBytes.push(ch);
                        }
                        recorded++;
                    },
                    write32 = function (a) {
                        var r = [];
                        r.push(a & 0xFF);
                        r.push((a & 0xFF00) >> 8);
                        r.push((a & 0xFF0000) >> 16);
                        r.push((a & 0xFF000000) >> 24);

                        if (me.bigEndian) {
                            r = r.reverse();
                        }

                        write(r[0]);
                        write(r[1]);
                        write(r[2]);
                        write(r[3]);
                    };

                if (!hasBuffer) {
                    outputBytes = [];
                }

                outputIndex = outputIndex || 0;

                var recorded = 0;
                unicode_codes = this.toCodePoints(str);
                for (var i = 0; i < unicode_codes.length; ++i) {
                    write32(unicode_codes[i]);
                }

                if (hasBuffer) {
                    return recorded;
                }

                if (typeof (Uint8Array) !== "undefined") {
                    return new Uint8Array(outputBytes);
                }

                return outputBytes;
            },

            $decode: function (bytes, index, count) {
                var me = this,
                    position = index || 0,
                    endpoint,
                    unicode_code,
                    result = "",
                    fallback = function () {
                        if (me.throwOnInvalid) {
                            throw new System.Exception("Invalid character in UTF32 text");
                        }

                        result += me.fallbackCharacter;
                    },
                    read32 = function () {
                        var a = bytes[position++],
                            b = bytes[position++],
                            c = bytes[position++],
                            d = bytes[position++];

                        if (position > endpoint) {
                            return false;
                        }

                        if (me.bigEndian) {
                            var tmp = b;
                            b = c;
                            c = tmp;

                            tmp = a;
                            a = d;
                            d = tmp;
                        }

                        return (d << 24) | (c << 16) | (b << 8) | a;
                    };

                if (typeof (count) === "number") {
                    endpoint = position + count;
                } else {
                    endpoint = bytes.length - position;
                }

                while (position < endpoint) {
                    unicode_code = read32();

                    if (unicode_code === false) {
                        fallback();
                        continue;
                    }

                    if (unicode_code < 0x10000 || unicode_code > 0x10FFFF) {
                        if (unicode_code < 0 || unicode_code > 0x10FFFF || (unicode_code >= 0xD800 && unicode_code <= 0xDFFF)) {
                            fallback();
                        } else {
                            result += String.fromCharCode(unicode_code);
                        }
                    } else {
                        result += String.fromCharCode(((unicode_code - (1 << 16)) / (1 << 10)) + 0xD800);
                        result += String.fromCharCode((unicode_code % (1 << 10)) + 0xDC00);
                    }
                }

                return result;
            },

            getMaxByteCount: function (charCount) {
                if (charCount < 0)
                    throw new System.ArgumentOutOfRangeException("charCount");

                var byteCount = charCount + 1;
                byteCount *= 4;

                if (byteCount > 0x7fffffff)
                    throw new System.ArgumentOutOfRangeException("charCount");
                return byteCount | 0;
            },

            getMaxCharCount: function (byteCount) {
                if (byteCount < 0)
                    throw new System.ArgumentOutOfRangeException("byteCount");

                var charCount = Bridge.Int.div(byteCount, 2) + 2;
                
                if (charCount > 0x7fffffff)
                    throw new System.ArgumentOutOfRangeException("byteCount");

                return charCount | 0;
            }
        }
    });
