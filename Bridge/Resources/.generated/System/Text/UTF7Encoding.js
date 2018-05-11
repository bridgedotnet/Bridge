    Bridge.define("System.Text.UTF7Encoding", {
        inherits: [System.Text.Encoding],
        statics: {
            methods: {
                Escape: function (chars) {
                    return chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
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
            Encode$3: function (s, outputBytes, outputIndex, writtenBytes) {
                var setD = "A-Za-z0-9" + (System.Text.UTF7Encoding.Escape("'(),-./:?") || "");

                var encode = $asm.$.System.Text.UTF7Encoding.f1;

                var setO = System.Text.UTF7Encoding.Escape("!\"#$%&*;<=>@[]^_`{|}");
                var setW = System.Text.UTF7Encoding.Escape(" \r\n\t");

                s = s.replace(new RegExp("[^" + setW + setD + (this.allowOptionals ? setO : "") + "]+", "g"), function (chunk) { return "+" + (chunk === "+" ? "" : encode(chunk)) + "-"; });

                var arr = System.String.toCharArray(s, 0, s.length);

                if (outputBytes != null) {
                    var recorded = 0;

                    if (arr.length > (((outputBytes.length - outputIndex) | 0))) {
                        throw new System.ArgumentException.$ctor1("bytes");
                    }

                    for (var j = 0; j < arr.length; j = (j + 1) | 0) {
                        outputBytes[System.Array.index(((j + outputIndex) | 0), outputBytes)] = arr[System.Array.index(j, arr)];
                        recorded = (recorded + 1) | 0;
                    }

                    writtenBytes.v = recorded;
                    return null;
                }

                writtenBytes.v = arr.length;

                return arr;
            },
            Decode$2: function (bytes, index, count, chars, charIndex) {
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
                return str.replace(/\+([A-Za-z0-9\/]*)-?/gi, function (_, chunk) { if (chunk === "") { return _ == "+-" ? "+" : ""; } return decode(chunk); });
            },
            GetMaxByteCount: function (charCount) {
                if (charCount < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("charCount");
                }

                var byteCount = System.Int64(charCount).mul(System.Int64(3)).add(System.Int64(2));

                if (byteCount.gt(System.Int64(2147483647))) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("charCount");
                }

                return System.Int64.clip32(byteCount);
            },
            GetMaxCharCount: function (byteCount) {
                if (byteCount < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("byteCount");
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
            return base64Str.replace(/=+$/, "");
        },
        f2: function (base64) {
            try {
                if (typeof window !== "undefined") { throw new System.Exception(); };
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
