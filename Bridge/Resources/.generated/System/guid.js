    Bridge.define("System.Guid", {
        inherits: function () { return [System.IEquatable$1(System.Guid),System.IComparable$1(System.Guid),System.IFormattable]; },
        $kind: "struct",
        statics: {
            fields: {
                error1: null,
                Valid: null,
                Split: null,
                NonFormat: null,
                Replace: null,
                Rnd: null,
                Empty: null
            },
            ctors: {
                init: function () {
                    this.Empty = new System.Guid();
                    this.error1 = "Byte array for GUID must be exactly {0} bytes long";
                    this.Valid = new System.Text.RegularExpressions.Regex.ctor("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$", 1);
                    this.Split = new System.Text.RegularExpressions.Regex.ctor("^(.{8})(.{4})(.{4})(.{4})(.{12})$");
                    this.NonFormat = new System.Text.RegularExpressions.Regex.ctor("^[{(]?([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})[)}]?$", 1);
                    this.Replace = new System.Text.RegularExpressions.Regex.ctor("-");
                    this.Rnd = new System.Random.ctor();
                }
            },
            methods: {
                Parse: function (input) {
                    return System.Guid.ParseExact(input, null);
                },
                ParseExact: function (input, format) {
                    var r = new System.Guid.ctor();
                    r.ParseInternal(input, format, true);
                    return r;
                },
                TryParse: function (input, result) {
                    return System.Guid.TryParseExact(input, null, result);
                },
                TryParseExact: function (input, format, result) {
                    result.v = new System.Guid.ctor();
                    return result.v.ParseInternal(input, format, false);
                },
                NewGuid: function () {
                    var a = System.Array.init(16, 0, System.Byte);

                    System.Guid.Rnd.NextBytes(a);

                    a[System.Array.index(7, a)] = (a[System.Array.index(7, a)] & 15 | 64) & 255;
                    a[System.Array.index(8, a)] = (a[System.Array.index(8, a)] & 191 | 128) & 255;

                    return new System.Guid.$ctor1(a);
                },
                MakeBinary: function (x) {
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
            }
        },
        fields: {
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
            _k: 0
        },
        alias: [
            "equalsT", "System$IEquatable$1$System$Guid$equalsT",
            "compareTo", ["System$IComparable$1$System$Guid$compareTo", "System$IComparable$1$compareTo"],
            "format", "System$IFormattable$format"
        ],
        ctors: {
            $ctor4: function (uuid) {
                this.$initialize();
                (new System.Guid.ctor()).$clone(this);

                this.ParseInternal(uuid, null, true);
            },
            $ctor1: function (b) {
                this.$initialize();
                if (b == null) {
                    throw new System.ArgumentNullException.$ctor1("b");
                }

                if (b.length !== 16) {
                    throw new System.ArgumentException.$ctor1(System.String.format(System.Guid.error1, [Bridge.box(16, System.Int32)]));
                }

                this._a = (b[System.Array.index(3, b)] << 24) | (b[System.Array.index(2, b)] << 16) | (b[System.Array.index(1, b)] << 8) | b[System.Array.index(0, b)];
                this._b = Bridge.Int.sxs(((b[System.Array.index(5, b)] << 8) | b[System.Array.index(4, b)]) & 65535);
                this._c = Bridge.Int.sxs(((b[System.Array.index(7, b)] << 8) | b[System.Array.index(6, b)]) & 65535);
                this._d = b[System.Array.index(8, b)];
                this._e = b[System.Array.index(9, b)];
                this._f = b[System.Array.index(10, b)];
                this._g = b[System.Array.index(11, b)];
                this._h = b[System.Array.index(12, b)];
                this._i = b[System.Array.index(13, b)];
                this._j = b[System.Array.index(14, b)];
                this._k = b[System.Array.index(15, b)];
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
                    throw new System.ArgumentNullException.$ctor1("d");
                }

                if (d.length !== 8) {
                    throw new System.ArgumentException.$ctor1(System.String.format(System.Guid.error1, [Bridge.box(8, System.Int32)]));
                }

                this._a = a;
                this._b = b;
                this._c = c;
                this._d = d[System.Array.index(0, d)];
                this._e = d[System.Array.index(1, d)];
                this._f = d[System.Array.index(2, d)];
                this._g = d[System.Array.index(3, d)];
                this._h = d[System.Array.index(4, d)];
                this._i = d[System.Array.index(5, d)];
                this._j = d[System.Array.index(6, d)];
                this._k = d[System.Array.index(7, d)];
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
            }
        },
        methods: {
            getHashCode: function () {
                return this._a ^ ((this._b << 16) | (this._c & 65535)) ^ ((this._f << 24) | this._k);
            },
            equals: function (o) {
                if (!(Bridge.is(o, System.Guid))) {
                    return false;
                }

                return this.equalsT(System.Nullable.getValue(Bridge.cast(Bridge.unbox(o, System.Guid), System.Guid)));
            },
            equalsT: function (o) {
                if ((this._a !== o._a) || (this._b !== o._b) || (this._c !== o._c) || (this._d !== o._d) || (this._e !== o._e) || (this._f !== o._f) || (this._g !== o._g) || (this._h !== o._h) || (this._i !== o._i) || (this._j !== o._j) || (this._k !== o._k)) {
                    return false;
                }

                return true;
            },
            compareTo: function (value) {
                return System.String.compare(this.toString(), value.toString());
            },
            toString: function () {
                return this.Format(null);
            },
            ToString: function (format) {
                return this.Format(format);
            },
            format: function (format, formatProvider) {
                return this.Format(format);
            },
            ToByteArray: function () {
                var g = System.Array.init(16, 0, System.Byte);

                g[System.Array.index(0, g)] = this._a & 255;
                g[System.Array.index(1, g)] = (this._a >> 8) & 255;
                g[System.Array.index(2, g)] = (this._a >> 16) & 255;
                g[System.Array.index(3, g)] = (this._a >> 24) & 255;
                g[System.Array.index(4, g)] = this._b & 255;
                g[System.Array.index(5, g)] = (this._b >> 8) & 255;
                g[System.Array.index(6, g)] = this._c & 255;
                g[System.Array.index(7, g)] = (this._c >> 8) & 255;
                g[System.Array.index(8, g)] = this._d;
                g[System.Array.index(9, g)] = this._e;
                g[System.Array.index(10, g)] = this._f;
                g[System.Array.index(11, g)] = this._g;
                g[System.Array.index(12, g)] = this._h;
                g[System.Array.index(13, g)] = this._i;
                g[System.Array.index(14, g)] = this._j;
                g[System.Array.index(15, g)] = this._k;

                return g;
            },
            ParseInternal: function (input, format, check) {
                var r = null;

                if (System.String.isNullOrEmpty(input)) {
                    if (check) {
                        throw new System.ArgumentNullException.$ctor1("input");
                    }
                    return false;
                }

                if (System.String.isNullOrEmpty(format)) {
                    var m = System.Guid.NonFormat.match(input);

                    if (m.getSuccess()) {
                        var list = new (System.Collections.Generic.List$1(System.String)).ctor();
                        for (var i = 1; i <= m.getGroups().getCount(); i = (i + 1) | 0) {
                            if (m.getGroups().get(i).getSuccess()) {
                                list.add(m.getGroups().get(i).getValue());
                            }
                        }

                        r = list.ToArray().join("-").toLowerCase();
                    }
                } else {
                    format = format.toUpperCase();

                    var p = false;

                    if (Bridge.referenceEquals(format, "N")) {
                        var m1 = System.Guid.Split.match(input);

                        if (m1.getSuccess()) {
                            var list1 = new (System.Collections.Generic.List$1(System.String)).ctor();
                            for (var i1 = 1; i1 <= m1.getGroups().getCount(); i1 = (i1 + 1) | 0) {
                                if (m1.getGroups().get(i1).getSuccess()) {
                                    list1.add(m1.getGroups().get(i1).getValue());
                                }
                            }

                            p = true;
                            input = list1.ToArray().join("-");
                        }
                    } else if (Bridge.referenceEquals(format, "B") || Bridge.referenceEquals(format, "P")) {
                        var b = Bridge.referenceEquals(format, "B") ? System.Array.init([123, 125], System.Char) : System.Array.init([40, 41], System.Char);

                        if ((input.charCodeAt(0) === b[System.Array.index(0, b)]) && (input.charCodeAt(((input.length - 1) | 0)) === b[System.Array.index(1, b)])) {
                            p = true;
                            input = input.substr(1, ((input.length - 2) | 0));
                        }
                    } else {
                        p = true;
                    }

                    if (p && System.Guid.Valid.isMatch(input)) {
                        r = input.toLowerCase();
                    }
                }

                if (r != null) {
                    this.FromString(r);
                    return true;
                }

                if (check) {
                    throw new System.FormatException.$ctor1("input is not in a recognized format");
                }

                return false;
            },
            Format: function (format) {
                var s = (System.UInt32.format((this._a >>> 0), "x8") || "") + (System.UInt16.format((this._b & 65535), "x4") || "") + (System.UInt16.format((this._c & 65535), "x4") || "");
                s = (s || "") + ((System.Array.init([this._d, this._e, this._f, this._g, this._h, this._i, this._j, this._k], System.Byte)).map(System.Guid.MakeBinary).join("") || "");

                var m = System.Guid.Split.match(s);
                var list = new (System.Collections.Generic.List$1(System.String)).ctor();
                for (var i = 1; i <= m.getGroups().getCount(); i = (i + 1) | 0) {
                    if (m.getGroups().get(i).getSuccess()) {
                        list.add(m.getGroups().get(i).getValue());
                    }
                }
                s = list.ToArray().join("-");

                switch (format) {
                    case "n": 
                    case "N": 
                        return System.Guid.Replace.replace(s, "");
                    case "b": 
                    case "B": 
                        return String.fromCharCode(123) + (s || "") + String.fromCharCode(125);
                    case "p": 
                    case "P": 
                        return String.fromCharCode(40) + (s || "") + String.fromCharCode(41);
                    default: 
                        return s;
                }
            },
            FromString: function (s) {
                if (System.String.isNullOrEmpty(s)) {
                    return;
                }

                s = System.Guid.Replace.replace(s, "");

                var r = System.Array.init(8, 0, System.Byte);

                this._a = (System.UInt32.parse(s.substr(0, 8), 16)) | 0;
                this._b = Bridge.Int.sxs((System.UInt16.parse(s.substr(8, 4), 16)) & 65535);
                this._c = Bridge.Int.sxs((System.UInt16.parse(s.substr(12, 4), 16)) & 65535);
                for (var i = 8; i < 16; i = (i + 1) | 0) {
                    r[System.Array.index(((i - 8) | 0), r)] = System.Byte.parse(s.substr(Bridge.Int.mul(i, 2), 2), 16);
                }

                this._d = r[System.Array.index(0, r)];
                this._e = r[System.Array.index(1, r)];
                this._f = r[System.Array.index(2, r)];
                this._g = r[System.Array.index(3, r)];
                this._h = r[System.Array.index(4, r)];
                this._i = r[System.Array.index(5, r)];
                this._j = r[System.Array.index(6, r)];
                this._k = r[System.Array.index(7, r)];
            },
            toJSON: function () {
                return this.toString();
            },
            $clone: function (to) { return this; }
        }
    });
