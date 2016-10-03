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
                    this.valid = new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$", "ig");
                    this.split = new RegExp("^(.{8})(.{4})(.{4})(.{4})(.{12})$");
                    this.nonFormat = new RegExp("^[{(]?([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})[)}]?$", "ig");
                    this.replace = new RegExp("-", "g");
                    this.rnd = new System.Random.ctor();
                    this.empty = System.Guid.empty;
                }
            },
            parse: function (input) {
                return System.Guid.parseExact(input, null);
            },
            parseExact: function (input, format) {
                var r = System.Guid.empty;
                r.parseInternal(input, format, true);
                return r.$clone();
            },
            tryParse: function (input, result) {
                return System.Guid.tryParseExact(input, null, result);
            },
            tryParseExact: function (input, format, result) {
                result.v = System.Guid.empty;
                return result.v.parseInternal(input, format, false);
            },
            newGuid: function () {
                var a = System.Array.init(16, 0);

                System.Guid.rnd.nextBytes(a);

                a[6] = ((a[6] & 15 | 64)) & 255;
                a[8] = ((a[8] & 191 | 128)) & 255;

                return System.Guid.parse(System.Guid.fromBytes(a));
            },
            fromBytes: function (b) {
                if (b == null || b.length !== 16) {
                    throw new System.ArgumentException(System.String.format(System.Guid.error1, 16));
                }

                var s = b.map(System.Guid.makeBinary).join("");

                return System.Guid.split.exec(s).slice(1).join("-");
            },
            makeBinary: function (x) {
                return System.Int32.format((x & 255), "x2");
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
            "format", "System$IFormattable$format"
            ]
        },
        $ctor4: function (uuid) {
            this.$initialize();
            (System.Guid.empty).$clone(this);

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

                if (Bridge.referenceEquals(format, "N")) {
                    var m1 = System.Guid.split.exec(input);

                    if (m1 != null) {
                        input = m1.slice(1).join("-");
                    }
                } else if (Bridge.referenceEquals(format, "B") || Bridge.referenceEquals(format, "P")) {
                    var b = Bridge.referenceEquals(format, "B") ? 123 : 40;

                    if ((input.charCodeAt(0) === b) && (input.charCodeAt(((input.length - 1) | 0)) === b)) {
                        input = input.substr(1, ((input.length - 2) | 0));
                    }
                }

                if (input.match(System.Guid.valid) != null) {
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
            var uuid = System.Guid.fromBytes(this.toByteArray());

            switch (format) {
                case "n": 
                case "N": 
                    return uuid.replace(System.Guid.replace, "");
                case "b": 
                case "B": 
                    return System.String.concat(System.String.concat(String.fromCharCode(123), uuid), String.fromCharCode(125));
                case "p": 
                case "P": 
                    return System.String.concat(System.String.concat(String.fromCharCode(40), uuid), String.fromCharCode(41));
                default: 
                    return uuid;
            }
        },
        fromString: function (s) {
            if (System.String.isNullOrEmpty(s)) {
                return;
            }

            s = s.replace(System.Guid.replace, "");

            var r = System.Array.init(16, 0);

            for (var i = 0; i < 16; i = (i + 1) | 0) {
                r[i] = System.Byte.parse(s.substr(((i * 2) | 0), 2), 16);
            }

            this._a = (r[3] << 24) | (r[2] << 16) | (r[1] << 8) | r[0];
            this._b = Bridge.Int.sxs((((r[5] << 8) | r[4])) & 65535);
            this._c = Bridge.Int.sxs((((r[7] << 8) | r[6])) & 65535);
            this._d = r[8];
            this._e = r[9];
            this._f = r[10];
            this._g = r[11];
            this._h = r[12];
            this._i = r[13];
            this._j = r[14];
            this._k = r[15];
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1684632903;
            hash = hash * 23 + (this._a == null ? 0 : Bridge.getHashCode(this._a));
            hash = hash * 23 + (this._b == null ? 0 : Bridge.getHashCode(this._b));
            hash = hash * 23 + (this._c == null ? 0 : Bridge.getHashCode(this._c));
            hash = hash * 23 + (this._d == null ? 0 : Bridge.getHashCode(this._d));
            hash = hash * 23 + (this._e == null ? 0 : Bridge.getHashCode(this._e));
            hash = hash * 23 + (this._f == null ? 0 : Bridge.getHashCode(this._f));
            hash = hash * 23 + (this._g == null ? 0 : Bridge.getHashCode(this._g));
            hash = hash * 23 + (this._h == null ? 0 : Bridge.getHashCode(this._h));
            hash = hash * 23 + (this._i == null ? 0 : Bridge.getHashCode(this._i));
            hash = hash * 23 + (this._j == null ? 0 : Bridge.getHashCode(this._j));
            hash = hash * 23 + (this._k == null ? 0 : Bridge.getHashCode(this._k));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, System.Guid)) {
                return false;
            }
            return Bridge.equals(this._a, o._a) && Bridge.equals(this._b, o._b) && Bridge.equals(this._c, o._c) && Bridge.equals(this._d, o._d) && Bridge.equals(this._e, o._e) && Bridge.equals(this._f, o._f) && Bridge.equals(this._g, o._g) && Bridge.equals(this._h, o._h) && Bridge.equals(this._i, o._i) && Bridge.equals(this._j, o._j) && Bridge.equals(this._k, o._k);
        },
        $clone: function (to) {
            var s = to || new System.Guid();
            s._a = this._a;
            s._b = this._b;
            s._c = this._c;
            s._d = this._d;
            s._e = this._e;
            s._f = this._f;
            s._g = this._g;
            s._h = this._h;
            s._i = this._i;
            s._j = this._j;
            s._k = this._k;
            return s;
        }
    });
