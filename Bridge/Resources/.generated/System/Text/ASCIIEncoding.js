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
            Encode$3: function (s, outputBytes, outputIndex, writtenBytes) {
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
                            throw new System.ArgumentException.$ctor1("bytes");
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

                return outputBytes;
            },
            Decode$2: function (bytes, index, count, chars, charIndex) {
                var position = index;
                var result = "";
                var endpoint = (position + count) | 0;

                for (; position < endpoint; position = (position + 1) | 0) {
                    var byteCode = bytes[System.Array.index(position, bytes)];

                    if (byteCode > 127) {
                        result = (result || "") + String.fromCharCode(this.fallbackCharacter);
                    } else {
                        result = (result || "") + ((String.fromCharCode(byteCode)) || "");
                    }
                }

                return result;
            },
            GetMaxByteCount: function (charCount) {
                if (charCount < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("charCount");
                }

                var byteCount = System.Int64(charCount).add(System.Int64(1));

                if (byteCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("charCount");
                }

                return System.Int64.clip32(byteCount);
            },
            GetMaxCharCount: function (byteCount) {
                if (byteCount < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("byteCount");
                }

                var charCount = System.Int64(byteCount);

                if (charCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("byteCount");
                }

                return System.Int64.clip32(charCount);
            }
        }
    });
