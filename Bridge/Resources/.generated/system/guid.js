    Bridge.define("System.Guid", {
        inherits: function () { return [System.IEquatable$1(System.Guid),System.IComparable$1(System.Guid),System.IFormattable]; },
        $kind: "struct",
        statics: {
            error1: "Byte array for GUID must be exactly {0} bytes long",
            valid: null,
            split: null,
            nonFormat: null,
            replace: null,
            rnd: null,
            config: {
                init: function () {
                    this.valid = new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$", "i");
                    this.split = new RegExp("^(.{8})(.{4})(.{4})(.{4})(.{12})$");
                    this.nonFormat = new RegExp("^[{(]?([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})[)}]?$", "i");
                    this.replace = new RegExp("-", "g");
                    this.rnd = new System.Random.ctor();
                    this.empty = new System.Guid.ctor();
                }
            },
            parse: function (input) {
                return System.Guid.parseExact(input, null);
            },
            parseExact: function (input, format) {
                var r = new System.Guid.ctor();
                r.parseInternal(input, format, true);
                return r;
            },
            tryParse: function (input, result) {
                return System.Guid.tryParseExact(input, null, result);
            },
            tryParseExact: function (input, format, result) {
                result.v = new System.Guid.ctor();
                return result.v.parseInternal(input, format, false);
            },
            newGuid: function () {
                var a = System.Array.init(16, 0);

                System.Guid.rnd.nextBytes(a);

                a[7] = ((a[7] & 15 | 64)) & 255;
                a[8] = ((a[8] & 191 | 128)) & 255;

                return new System.Guid.$ctor1(a);
            },
            makeBinary: function (x) {
                return System.Int32.format((x & 255), "x2");
            },
            op_Equality: function (a, b) {
                if (Bridge.referenceEquals(a, null)) {
                    return Bridge.referenceEquals(b, null);
                }

                return a.equalsT(b);
            },
            op_Inequality: function (a, b) {
                return !(System.Guid.op_Equality(a, b));
            },
            getDefaultValue: function () { return new System.Guid(); }
        },
        _a: 0,
        _b: 0,
        _c: 0,
        _d: 0,
        _e: 0,
        _f: 0,
        _g: 0,
        _h: 0,
        _i: 0,
        _j: 0,
        _k: 0,
        config: {
            alias: [
            "equalsT", "System$IEquatable$1$System$Guid$equalsT",
            "compareTo", "System$IComparable$1$System$Guid$compareTo",
            "format", "System$IFormattable$format"
            ]
        },
        $ctor4: function (uuid) {
            this.$initialize();
            (new System.Guid.ctor()).$clone(this);

            var s = this.parseInternal(uuid, null, true);
        },
        $ctor1: function (b) {
            this.$initialize();
            if (b == null) {
                throw new System.ArgumentNullException("b");
            }

            if (b.length !== 16) {
                throw new System.ArgumentException(System.String.format(System.Guid.error1, 16));
            }

            this._a = (b[3] << 24) | (b[2] << 16) | (b[1] << 8) | b[0];
            this._b = Bridge.Int.sxs((((b[5] << 8) | b[4])) & 65535);
            this._c = Bridge.Int.sxs((((b[7] << 8) | b[6])) & 65535);
            this._d = b[8];
            this._e = b[9];
            this._f = b[10];
            this._g = b[11];
            this._h = b[12];
            this._i = b[13];
            this._j = b[14];
            this._k = b[15];
        },
        $ctor5: function (a, b, c, d, e, f, g, h, i, j, k) {
            this.$initialize();
            this._a = a | 0;
            this._b = Bridge.Int.sxs(b & 65535);
            this._c = Bridge.Int.sxs(c & 65535);
            this._d = d;
            this._e = e;
            this._f = f;
            this._g = g;
            this._h = h;
            this._i = i;
            this._j = j;
            this._k = k;
        },
        $ctor3: function (a, b, c, d) {
            this.$initialize();
            if (d == null) {
                throw new System.ArgumentNullException("d");
            }

            if (d.length !== 8) {
                throw new System.ArgumentException(System.String.format(System.Guid.error1, 8));
            }

            this._a = a;
            this._b = b;
            this._c = c;
            this._d = d[0];
            this._e = d[1];
            this._f = d[2];
            this._g = d[3];
            this._h = d[4];
            this._i = d[5];
            this._j = d[6];
            this._k = d[7];
        },
        $ctor2: function (a, b, c, d, e, f, g, h, i, j, k) {
            this.$initialize();
            this._a = a;
            this._b = b;
            this._c = c;
            this._d = d;
            this._e = e;
            this._f = f;
            this._g = g;
            this._h = h;
            this._i = i;
            this._j = j;
            this._k = k;
        },
        ctor: function () {
            this.$initialize();
        },
        equalsT: function (o) {
            if (System.Nullable.lifteq(System.Guid.op_Equality, o, null)) {
                return false;
            }

            if ((this._a !== o._a) || (this._b !== o._b) || (this._c !== o._c) || (this._d !== o._d) || (this._e !== o._e) || (this._f !== o._f) || (this._g !== o._g) || (this._h !== o._h) || (this._i !== o._i) || (this._j !== o._j) || (this._k !== o._k)) {
                return false;
            }

            return true;
        },
        compareTo: function (value) {
            if (System.Nullable.lifteq(System.Guid.op_Equality, value, null)) {
                return 1;
            }

            return System.String.compare(this.toString(), value.toString());
        },
        toString: function () {
            return this.format$1(null);
        },
        toString$1: function (format) {
            return this.format$1(format);
        },
        format: function (format, formatProvider) {
            return this.format$1(format);
        },
        toByteArray: function () {
            var g = System.Array.init(16, 0);

            g[0] = (this._a) & 255;
            g[1] = ((this._a >> 8)) & 255;
            g[2] = ((this._a >> 16)) & 255;
            g[3] = ((this._a >> 24)) & 255;
            g[4] = (this._b) & 255;
            g[5] = ((this._b >> 8)) & 255;
            g[6] = (this._c) & 255;
            g[7] = ((this._c >> 8)) & 255;
            g[8] = this._d;
            g[9] = this._e;
            g[10] = this._f;
            g[11] = this._g;
            g[12] = this._h;
            g[13] = this._i;
            g[14] = this._j;
            g[15] = this._k;

            return g;
        },
        parseInternal: function (input, format, check) {
            var r = null;

            if (System.String.isNullOrEmpty(input)) {
                throw new System.ArgumentNullException("input");
            }

            if (System.String.isNullOrEmpty(format)) {
                var m = System.Guid.nonFormat.exec(input);

                if (m != null) {
                    r = m.slice(1).join("-").toLowerCase();
                }
            } else {
                format = format.toUpperCase();

                var p = false;

                if (Bridge.referenceEquals(format, "N")) {
                    var m1 = System.Guid.split.exec(input);

                    if (m1 != null) {
                        p = true;
                        input = m1.slice(1).join("-");
                    }
                } else if (Bridge.referenceEquals(format, "B") || Bridge.referenceEquals(format, "P")) {
                    var b = Bridge.referenceEquals(format, "B") ? [123, 125] : [40, 41];

                    if ((input.charCodeAt(0) === b[0]) && (input.charCodeAt(((input.length - 1) | 0)) === b[1])) {
                        p = true;
                        input = input.substr(1, ((input.length - 2) | 0));
                    }
                } else {
                    p = true;
                }

                if (p && input.match(System.Guid.valid) != null) {
                    r = input.toLowerCase();
                }
            }

            if (r != null) {
                this.fromString(r);
                return true;
            }

            if (check) {
                throw new System.FormatException("input is not in a recognized format");
            }

            return false;
        },
        format$1: function (format) {
            var s = System.String.concat(System.String.concat(System.UInt32.format((this._a >>> 0), "x8"), System.UInt16.format((this._b & 65535), "x4")), System.UInt16.format((this._c & 65535), "x4"));
            s = System.String.concat(s, ([this._d, this._e, this._f, this._g, this._h, this._i, this._j, this._k]).map(System.Guid.makeBinary).join(""));

            s = System.Guid.split.exec(s).slice(1).join("-");

            switch (format) {
                case "n": 
                case "N": 
                    return s.replace(System.Guid.replace, "");
                case "b": 
                case "B": 
                    return System.String.concat(System.String.concat(String.fromCharCode(123), s), String.fromCharCode(125));
                case "p": 
                case "P": 
                    return System.String.concat(System.String.concat(String.fromCharCode(40), s), String.fromCharCode(41));
                default: 
                    return s;
            }
        },
        fromString: function (s) {
            if (System.String.isNullOrEmpty(s)) {
                return;
            }

            s = s.replace(System.Guid.replace, "");

            var r = System.Array.init(8, 0);

            this._a = (System.UInt32.parse(s.substr(0, 8), 16)) | 0;
            this._b = Bridge.Int.sxs((System.UInt16.parse(s.substr(8, 4), 16)) & 65535);
            this._c = Bridge.Int.sxs((System.UInt16.parse(s.substr(12, 4), 16)) & 65535);
            for (var i = 8; i < 16; i = (i + 1) | 0) {
                r[((i - 8) | 0)] = System.Byte.parse(s.substr(((i * 2) | 0), 2), 16);
            }

            this._d = r[0];
            this._e = r[1];
            this._f = r[2];
            this._g = r[3];
            this._h = r[4];
            this._i = r[5];
            this._j = r[6];
            this._k = r[7];
        },
        getHashCode: function () {
            var h = Bridge.addHash([1684632903, this._a, this._b, this._c, this._d, this._e, this._f, this._g, this._h, this._i, this._j, this._k]);
            return h;
        },
        $clone: function (to) { return this; }
    });
