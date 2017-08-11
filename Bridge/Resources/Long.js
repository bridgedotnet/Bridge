/* long.js https://github.com/dcodeIO/long.js/blob/master/LICENSE */
(function (b) {
    function d(a, b, c) { this.low = a | 0; this.high = b | 0; this.unsigned = !!c } function g(a) { return !0 === (a && a.__isLong__) } function m(a, b) { var c, u; if (b) { a >>>= 0; if (u = 0 <= a && 256 > a) if (c = A[a]) return c; c = e(a, 0 > (a | 0) ? -1 : 0, !0); u && (A[a] = c) } else { a |= 0; if (u = -128 <= a && 128 > a) if (c = B[a]) return c; c = e(a, 0 > a ? -1 : 0, !1); u && (B[a] = c) } return c } function n(a, b) {
        if (isNaN(a) || !isFinite(a)) return b ? p : k; if (b) { if (0 > a) return p; if (a >= C) return D } else { if (a <= -E) return l; if (a + 1 >= E) return F } return 0 > a ? n(-a, b).neg() : e(a % 4294967296 | 0, a / 4294967296 |
        0, b)
    } function e(a, b, c) { return new d(a, b, c) } function y(a, b, c) {
        if (0 === a.length) throw Error("empty string"); if ("NaN" === a || "Infinity" === a || "+Infinity" === a || "-Infinity" === a) return k; "number" === typeof b ? (c = b, b = !1) : b = !!b; c = c || 10; if (2 > c || 36 < c) throw RangeError("radix"); var u; if (0 < (u = a.indexOf("-"))) throw Error("interior hyphen"); if (0 === u) return y(a.substring(1), b, c).neg(); u = n(w(c, 8)); for (var e = k, f = 0; f < a.length; f += 8) {
            var d = Math.min(8, a.length - f), g = parseInt(a.substring(f, f + d), c); 8 > d ? (d = n(w(c, d)), e = e.mul(d).add(n(g))) :
            (e = e.mul(u), e = e.add(n(g)))
        } e.unsigned = b; return e
    } function q(a) { return a instanceof d ? a : "number" === typeof a ? n(a) : "string" === typeof a ? y(a) : e(a.low, a.high, a.unsigned) } b.Bridge.$Long = d; d.__isLong__; Object.defineProperty(d.prototype, "__isLong__", { value: !0, enumerable: !1, configurable: !1 }); d.isLong = g; var B = {}, A = {}; d.fromInt = m; d.fromNumber = n; d.fromBits = e; var w = Math.pow; d.fromString = y; d.fromValue = q; var C = 4294967296 * 4294967296, E = C / 2, G = m(16777216), k = m(0); d.ZERO = k; var p = m(0, !0); d.UZERO = p; var r = m(1); d.ONE = r; var H =
    m(1, !0); d.UONE = H; var z = m(-1); d.NEG_ONE = z; var F = e(-1, 2147483647, !1); d.MAX_VALUE = F; var D = e(-1, -1, !0); d.MAX_UNSIGNED_VALUE = D; var l = e(0, -2147483648, !1); d.MIN_VALUE = l; b = d.prototype; b.toInt = function () { return this.unsigned ? this.low >>> 0 : this.low }; b.toNumber = function () { return this.unsigned ? 4294967296 * (this.high >>> 0) + (this.low >>> 0) : 4294967296 * this.high + (this.low >>> 0) }; b.toString = function (a) {
        a = a || 10; if (2 > a || 36 < a) throw RangeError("radix"); if (this.isZero()) return "0"; if (this.isNegative()) {
            if (this.eq(l)) {
                var b =
                n(a), c = this.div(b), b = c.mul(b).sub(this); return c.toString(a) + b.toInt().toString(a)
            } return ("undefined" === typeof a || 10 === a ? "-" : "") + this.neg().toString(a)
        } for (var c = n(w(a, 6), this.unsigned), b = this, e = ""; ;) { var d = b.div(c), f = (b.sub(d.mul(c)).toInt() >>> 0).toString(a), b = d; if (b.isZero()) return f + e; for (; 6 > f.length;) f = "0" + f; e = "" + f + e }
    }; b.getHighBits = function () { return this.high }; b.getHighBitsUnsigned = function () { return this.high >>> 0 }; b.getLowBits = function () { return this.low }; b.getLowBitsUnsigned = function () {
        return this.low >>>
        0
    }; b.getNumBitsAbs = function () { if (this.isNegative()) return this.eq(l) ? 64 : this.neg().getNumBitsAbs(); for (var a = 0 != this.high ? this.high : this.low, b = 31; 0 < b && 0 == (a & 1 << b) ; b--); return 0 != this.high ? b + 33 : b + 1 }; b.isZero = function () { return 0 === this.high && 0 === this.low }; b.isNegative = function () { return !this.unsigned && 0 > this.high }; b.isPositive = function () { return this.unsigned || 0 <= this.high }; b.isOdd = function () { return 1 === (this.low & 1) }; b.isEven = function () { return 0 === (this.low & 1) }; b.equals = function (a) {
        g(a) || (a = q(a)); return this.unsigned !==
        a.unsigned && 1 === this.high >>> 31 && 1 === a.high >>> 31 ? !1 : this.high === a.high && this.low === a.low
    }; b.eq = b.equals; b.notEquals = function (a) { return !this.eq(a) }; b.neq = b.notEquals; b.lessThan = function (a) { return 0 > this.comp(a) }; b.lt = b.lessThan; b.lessThanOrEqual = function (a) { return 0 >= this.comp(a) }; b.lte = b.lessThanOrEqual; b.greaterThan = function (a) { return 0 < this.comp(a) }; b.gt = b.greaterThan; b.greaterThanOrEqual = function (a) { return 0 <= this.comp(a) }; b.gte = b.greaterThanOrEqual; b.compare = function (a) {
        g(a) || (a = q(a)); if (this.eq(a)) return 0;
        var b = this.isNegative(), c = a.isNegative(); return b && !c ? -1 : !b && c ? 1 : this.unsigned ? a.high >>> 0 > this.high >>> 0 || a.high === this.high && a.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(a).isNegative() ? -1 : 1
    }; b.comp = b.compare; b.negate = function () { return !this.unsigned && this.eq(l) ? l : this.not().add(r) }; b.neg = b.negate; b.add = function (a) {
        g(a) || (a = q(a)); var b = this.high >>> 16, c = this.high & 65535, d = this.low >>> 16, l = a.high >>> 16, f = a.high & 65535, n = a.low >>> 16, k; k = 0 + ((this.low & 65535) + (a.low & 65535)); a = 0 + (k >>> 16); a += d + n; d = 0 + (a >>> 16); d += c + f; c =
        0 + (d >>> 16); c = c + (b + l) & 65535; return e((a & 65535) << 16 | k & 65535, c << 16 | d & 65535, this.unsigned)
    }; b.subtract = function (a) { g(a) || (a = q(a)); return this.add(a.neg()) }; b.sub = b.subtract; b.multiply = function (a) {
        if (this.isZero()) return k; g(a) || (a = q(a)); if (a.isZero()) return k; if (this.eq(l)) return a.isOdd() ? l : k; if (a.eq(l)) return this.isOdd() ? l : k; if (this.isNegative()) return a.isNegative() ? this.neg().mul(a.neg()) : this.neg().mul(a).neg(); if (a.isNegative()) return this.mul(a.neg()).neg(); if (this.lt(G) && a.lt(G)) return n(this.toNumber() *
        a.toNumber(), this.unsigned); var b = this.high >>> 16, c = this.high & 65535, d = this.low >>> 16, x = this.low & 65535, f = a.high >>> 16, m = a.high & 65535, p = a.low >>> 16; a = a.low & 65535; var v, h, t, r; r = 0 + x * a; t = 0 + (r >>> 16); t += d * a; h = 0 + (t >>> 16); t = (t & 65535) + x * p; h += t >>> 16; t &= 65535; h += c * a; v = 0 + (h >>> 16); h = (h & 65535) + d * p; v += h >>> 16; h &= 65535; h += x * m; v += h >>> 16; h &= 65535; v = v + (b * a + c * p + d * m + x * f) & 65535; return e(t << 16 | r & 65535, v << 16 | h, this.unsigned)
    }; b.mul = b.multiply; b.divide = function (a) {
        g(a) || (a = q(a)); if (a.isZero()) throw Error("division by zero"); if (this.isZero()) return this.unsigned ?
                p : k; var b, c, d; if (this.unsigned) a.unsigned || (a = a.toUnsigned()); else { if (this.eq(l)) { if (a.eq(r) || a.eq(z)) return l; if (a.eq(l)) return r; b = this.shr(1).div(a).shl(1); if (b.eq(k)) return a.isNegative() ? r : z; c = this.sub(a.mul(b)); return d = b.add(c.div(a)) } if (a.eq(l)) return this.unsigned ? p : k; if (this.isNegative()) return a.isNegative() ? this.neg().div(a.neg()) : this.neg().div(a).neg(); if (a.isNegative()) return this.div(a.neg()).neg() } if (this.unsigned) { if (a.gt(this)) return p; if (a.gt(this.shru(1))) return H; d = p } else d =
                k; for (c = this; c.gte(a) ;) { b = Math.max(1, Math.floor(c.toNumber() / a.toNumber())); for (var e = Math.ceil(Math.log(b) / Math.LN2), e = 48 >= e ? 1 : w(2, e - 48), f = n(b), m = f.mul(a) ; m.isNegative() || m.gt(c) ;) b -= e, f = n(b, this.unsigned), m = f.mul(a); f.isZero() && (f = r); d = d.add(f); c = c.sub(m) } return d
    }; b.div = b.divide; b.modulo = function (a) { g(a) || (a = q(a)); return this.sub(this.div(a).mul(a)) }; b.mod = b.modulo; b.not = function () { return e(~this.low, ~this.high, this.unsigned) }; b.and = function (a) {
        g(a) || (a = q(a)); return e(this.low & a.low, this.high &
        a.high, this.unsigned)
    }; b.or = function (a) { g(a) || (a = q(a)); return e(this.low | a.low, this.high | a.high, this.unsigned) }; b.xor = function (a) { g(a) || (a = q(a)); return e(this.low ^ a.low, this.high ^ a.high, this.unsigned) }; b.shiftLeft = function (a) { g(a) && (a = a.toInt()); return 0 === (a &= 63) ? this : 32 > a ? e(this.low << a, this.high << a | this.low >>> 32 - a, this.unsigned) : e(0, this.low << a - 32, this.unsigned) }; b.shl = b.shiftLeft; b.shiftRight = function (a) {
        g(a) && (a = a.toInt()); return 0 === (a &= 63) ? this : 32 > a ? e(this.low >>> a | this.high << 32 - a, this.high >>
        a, this.unsigned) : e(this.high >> a - 32, 0 <= this.high ? 0 : -1, this.unsigned)
    }; b.shr = b.shiftRight; b.shiftRightUnsigned = function (a) { g(a) && (a = a.toInt()); a &= 63; if (0 === a) return this; var b = this.high; return 32 > a ? e(this.low >>> a | b << 32 - a, b >>> a, this.unsigned) : 32 === a ? e(b, 0, this.unsigned) : e(b >>> a - 32, 0, this.unsigned) }; b.shru = b.shiftRightUnsigned; b.toSigned = function () { return this.unsigned ? e(this.low, this.high, !1) : this }; b.toUnsigned = function () { return this.unsigned ? this : e(this.low, this.high, !0) }
})(Bridge.global);

    System.Int64 = function (l) {
        if (this.constructor !== System.Int64) {
            return new System.Int64(l);
        }

        if (!Bridge.hasValue(l)) {
            l = 0;
        }

        this.T = System.Int64;
        this.unsigned = false;
        this.value = System.Int64.getValue(l);
    }

    System.Int64.$number = true;
    System.Int64.TWO_PWR_16_DBL = 1 << 16;
    System.Int64.TWO_PWR_32_DBL = System.Int64.TWO_PWR_16_DBL * System.Int64.TWO_PWR_16_DBL;
    System.Int64.TWO_PWR_64_DBL = System.Int64.TWO_PWR_32_DBL * System.Int64.TWO_PWR_32_DBL;
    System.Int64.TWO_PWR_63_DBL = System.Int64.TWO_PWR_64_DBL / 2;

    System.Int64.$$name = "System.Int64";
    System.Int64.prototype.$$name = "System.Int64";
    System.Int64.$kind = "struct";
    System.Int64.prototype.$kind = "struct";

    System.Int64.$$inherits = [];
    Bridge.Class.addExtend(System.Int64, [System.IComparable, System.IFormattable, System.IComparable$1(System.Int64), System.IEquatable$1(System.Int64)]);

    System.Int64.$is = function (instance) {
        return instance instanceof System.Int64;
    };

    System.Int64.is64Bit = function (instance) {
        return instance instanceof System.Int64 || instance instanceof System.UInt64;
    };

    System.Int64.is64BitType = function (type) {
        return type === System.Int64 || type === System.UInt64;
    };

    System.Int64.getDefaultValue = function () {
        return System.Int64.Zero;
    };

    System.Int64.getValue = function (l) {
        if (!Bridge.hasValue(l)) {
            return null;
        }

        if (l instanceof Bridge.$Long) {
            return l;
        }

        if (l instanceof System.Int64) {
            return l.value;
        }

        if (l instanceof System.UInt64) {
            return l.value.toSigned();
        }

        if (Bridge.isArray(l)) {
            return new Bridge.$Long(l[0], l[1]);
        }

        if (Bridge.isString(l)) {
            return Bridge.$Long.fromString(l);
        }

        if (Bridge.isNumber(l)) {
            if (l + 1 >= System.Int64.TWO_PWR_63_DBL) {
                return (new System.UInt64(l)).value.toSigned();
            }
            return Bridge.$Long.fromNumber(l);
        }

        if (l instanceof System.Decimal) {
            return Bridge.$Long.fromString(l.toString());
        }

        return Bridge.$Long.fromValue(l);
    };

    System.Int64.create = function (l) {
        if (!Bridge.hasValue(l)) {
            return null;
        }

        if (l instanceof System.Int64) {
            return l;
        }

        return new System.Int64(l);
    };

    System.Int64.lift = function (l) {
        if (!Bridge.hasValue(l)) {
            return null;
        }
        return System.Int64.create(l);
    };

    System.Int64.toNumber = function (value) {
        if (!value) {
            return null;
        }

        return value.toNumber();
    };

    System.Int64.prototype.toNumberDivided = function (divisor) {
        var integral = this.div(divisor),
            remainder = this.mod(divisor),
            scaledRemainder = remainder.toNumber() / divisor;

        return integral.toNumber() + scaledRemainder;
    };

    System.Int64.prototype.toJSON = function () {
        return this.toNumber();
    };

    System.Int64.prototype.toString = function (format, provider) {
        if (!format && !provider) {
            return this.value.toString();
        }

        if (Bridge.isNumber(format) && !provider) {
            return this.value.toString(format);
        }

        return Bridge.Int.format(this, format, provider);
    };

    System.Int64.prototype.format = function (format, provider) {
        return Bridge.Int.format(this, format, provider);
    };

    System.Int64.prototype.isNegative = function () {
        return this.value.isNegative();
    };

    System.Int64.prototype.abs = function () {
        if (this.T === System.Int64 && this.eq(System.Int64.MinValue)) {
            throw new System.OverflowException();
        }
        return new this.T(this.value.isNegative() ? this.value.neg() : this.value);
    };

    System.Int64.prototype.compareTo = function (l) {
        return this.value.compare(this.T.getValue(l));
    };

    System.Int64.prototype.add = function (l, overflow) {
        var addl = this.T.getValue(l),
            r = new this.T(this.value.add(addl));

        if (overflow) {
            var neg1 = this.value.isNegative(),
                neg2 = addl.isNegative(),
                rneg = r.value.isNegative();

            if ((neg1 && neg2 && !rneg) ||
                (!neg1 && !neg2 && rneg) ||
                (this.T === System.UInt64 && r.lt(System.UInt64.max(this, addl)))) {
                throw new System.OverflowException();
            }
        }

        return r;
    };

    System.Int64.prototype.sub = function (l, overflow) {
        var subl = this.T.getValue(l),
            r = new this.T(this.value.sub(subl));

        if (overflow) {
            var neg1 = this.value.isNegative(),
                neg2 = subl.isNegative(),
                rneg = r.value.isNegative();

            if ((neg1 && !neg2 && !rneg) ||
                (!neg1 && neg2 && rneg) ||
                (this.T === System.UInt64 && this.value.lt(subl))) {
                throw new System.OverflowException();
            }
        }

        return r;
    };

    System.Int64.prototype.isZero = function () {
        return this.value.isZero();
    };

    System.Int64.prototype.mul = function (l, overflow) {
        var arg = this.T.getValue(l),
            r = new this.T(this.value.mul(arg));

        if (overflow) {
            var s1 = this.sign(),
                s2 = arg.isZero() ? 0 : (arg.isNegative() ? -1 : 1),
                rs = r.sign();

            if (this.T === System.Int64) {
                if (this.eq(System.Int64.MinValue) || this.eq(System.Int64.MaxValue)) {
                    if (arg.neq(1) && arg.neq(0)) {
                        throw new System.OverflowException();
                    }

                    return r;
                }

                if (arg.eq(Bridge.$Long.MIN_VALUE) || arg.eq(Bridge.$Long.MAX_VALUE)) {
                    if (this.neq(1) && this.neq(0)) {
                        throw new System.OverflowException();
                    }

                    return r;
                }

                if ((s1 === -1 && s2 === -1 && rs !== 1) ||
                    (s1 === 1 && s2 === 1 && rs !== 1) ||
                    (s1 === -1 && s2 === 1 && rs !== -1) ||
                    (s1 === 1 && s2 === -1 && rs !== -1)) {
                    throw new System.OverflowException();
                }

                var r_abs = r.abs();

                if (r_abs.lt(this.abs()) || r_abs.lt(System.Int64(arg).abs())) {
                    throw new System.OverflowException();
                }
            } else {
                if (this.eq(System.UInt64.MaxValue)) {
                    if (arg.neq(1) && arg.neq(0)) {
                        throw new System.OverflowException();
                    }

                    return r;
                }

                if (arg.eq(Bridge.$Long.MAX_UNSIGNED_VALUE)) {
                    if (this.neq(1) && this.neq(0)) {
                        throw new System.OverflowException();
                    }

                    return r;
                }

                var r_abs = r.abs();

                if (r_abs.lt(this.abs()) || r_abs.lt(System.Int64(arg).abs())) {
                    throw new System.OverflowException();
                }
            }
        }

        return r;
    };

    System.Int64.prototype.div = function (l) {
        return new this.T(this.value.div(this.T.getValue(l)));
    };

    System.Int64.prototype.mod = function (l) {
        return new this.T(this.value.mod(this.T.getValue(l)));
    };

    System.Int64.prototype.neg = function (overflow) {
        if (overflow && this.T === System.Int64 && this.eq(System.Int64.MinValue)) {
            throw new System.OverflowException();
        }
        return new this.T(this.value.neg());
    };

    System.Int64.prototype.inc = function (overflow) {
        return this.add(1, overflow);
    };

    System.Int64.prototype.dec = function (overflow) {
        return this.sub(1, overflow);
    };

    System.Int64.prototype.sign = function () {
        return this.value.isZero() ? 0 : (this.value.isNegative() ? -1 : 1);
    };

    System.Int64.prototype.clone = function () {
        return new this.T(this);
    };

    System.Int64.prototype.ne = function (l) {
        return this.value.neq(this.T.getValue(l));
    };

    System.Int64.prototype.neq = function (l) {
        return this.value.neq(this.T.getValue(l));
    };

    System.Int64.prototype.eq = function (l) {
        return this.value.eq(this.T.getValue(l));
    };

    System.Int64.prototype.lt = function (l) {
        return this.value.lt(this.T.getValue(l));
    };

    System.Int64.prototype.lte = function (l) {
        return this.value.lte(this.T.getValue(l));
    };

    System.Int64.prototype.gt = function (l) {
        return this.value.gt(this.T.getValue(l));
    };

    System.Int64.prototype.gte = function (l) {
        return this.value.gte(this.T.getValue(l));
    };

    System.Int64.prototype.equals = function (l) {
        return this.value.eq(this.T.getValue(l));
    };

    System.Int64.prototype.equalsT = function (l) {
        return this.equals(l);
    };

    System.Int64.prototype.getHashCode = function () {
        var n = (this.sign() * 397 + this.value.high) | 0;
        n = (n * 397 + this.value.low) | 0;

        return n;
    };

    System.Int64.prototype.toNumber = function () {
        return this.value.toNumber();
    };

    System.Int64.parse = function (str) {
        if (str == null) {
            throw new System.ArgumentNullException("str");
        }

        if (!/^[+-]?[0-9]+$/.test(str)) {
            throw new System.FormatException("Input string was not in a correct format.");
        }

        var result = new System.Int64(str);

        if (System.String.trimStartZeros(str) !== result.toString()) {
            throw new System.OverflowException();
        }

        return result;
    };

    System.Int64.tryParse = function (str, v) {
        try {
            if (str == null || !/^[+-]?[0-9]+$/.test(str)) {
                v.v = System.Int64(Bridge.$Long.ZERO);
                return false;
            }

            v.v = new System.Int64(str);

            if (System.String.trimStartZeros(str) !== v.v.toString()) {
                v.v = System.Int64(Bridge.$Long.ZERO);
                return false;
            }

            return true;
        } catch (e) {
            v.v = System.Int64(Bridge.$Long.ZERO);
            return false;
        }
    };

    System.Int64.divRem = function (a, b, result) {
        a = System.Int64(a);
        b = System.Int64(b);
        var remainder = a.mod(b);
        result.v = remainder;
        return a.sub(remainder).div(b);
    };

    System.Int64.min = function () {
        var values = [],
            min, i, len;

        for (i = 0, len = arguments.length; i < len; i++) {
            values.push(System.Int64.getValue(arguments[i]));
        }

        i = 0;
        min = values[0];
        for (; ++i < values.length;) {
            if (values[i].lt(min)) {
                min = values[i];
            }
        }

        return new System.Int64(min);
    };

    System.Int64.max = function () {
        var values = [],
            max, i, len;

        for (i = 0, len = arguments.length; i < len; i++) {
            values.push(System.Int64.getValue(arguments[i]));
        }

        i = 0;
        max = values[0];
        for (; ++i < values.length;) {
            if (values[i].gt(max)) {
                max = values[i];
            }
        }

        return new System.Int64(max);
    };

    System.Int64.prototype.and = function (l) {
        return new this.T(this.value.and(this.T.getValue(l)));
    };

    System.Int64.prototype.not = function () {
        return new this.T(this.value.not());
    };

    System.Int64.prototype.or = function (l) {
        return new this.T(this.value.or(this.T.getValue(l)));
    };

    System.Int64.prototype.shl = function (l) {
        return new this.T(this.value.shl(l));
    };

    System.Int64.prototype.shr = function (l) {
        return new this.T(this.value.shr(l));
    };

    System.Int64.prototype.shru = function (l) {
        return new this.T(this.value.shru(l));
    };

    System.Int64.prototype.xor = function (l) {
        return new this.T(this.value.xor(this.T.getValue(l)));
    };

    System.Int64.check = function (v, tp) {
        if (Bridge.Int.isInfinite(v)) {
            if (tp === System.Int64 || tp === System.UInt64) {
                return tp.MinValue;
            }
            return tp.min;
        }

        if (!v) {
            return null;
        }

        var str, r;
        if (tp === System.Int64) {
            if (v instanceof System.Int64) {
                return v;
            }

            str = v.value.toString();
            r = new System.Int64(str);

            if (str !== r.value.toString()) {
                throw new System.OverflowException();
            }

            return r;
        }

        if (tp === System.UInt64) {
            if (v instanceof System.UInt64) {
                return v;
            }

            if (v.value.isNegative()) {
                throw new System.OverflowException();
            }
            str = v.value.toString();
            r = new System.UInt64(str);

            if (str !== r.value.toString()) {
                throw new System.OverflowException();
            }

            return r;
        }

        return Bridge.Int.check(v.toNumber(), tp);
    };

    System.Int64.clip8 = function (x) {
        return x ? Bridge.Int.sxb(x.value.low & 0xff) : (Bridge.Int.isInfinite(x) ? System.SByte.min : null);
    };

    System.Int64.clipu8 = function (x) {
        return x ? x.value.low & 0xff : (Bridge.Int.isInfinite(x) ? System.Byte.min : null);
    };

    System.Int64.clip16 = function (x) {
        return x ? Bridge.Int.sxs(x.value.low & 0xffff) : (Bridge.Int.isInfinite(x) ? System.Int16.min : null);
    };

    System.Int64.clipu16 = function (x) {
        return x ? x.value.low & 0xffff : (Bridge.Int.isInfinite(x) ? System.UInt16.min : null);
    };

    System.Int64.clip32 = function (x) {
        return x ? x.value.low | 0 : (Bridge.Int.isInfinite(x) ? System.Int32.min : null);
    };

    System.Int64.clipu32 = function (x) {
        return x ? x.value.low >>> 0 : (Bridge.Int.isInfinite(x) ? System.UInt32.min : null);
    };

    System.Int64.clip64 = function (x) {
        return x ? new System.Int64(x.value.toSigned()) : (Bridge.Int.isInfinite(x) ? System.Int64.MinValue : null);
    };

    System.Int64.clipu64 = function (x) {
        return x ? new System.UInt64(x.value.toUnsigned()) : (Bridge.Int.isInfinite(x) ? System.UInt64.MinValue : null);
    };

    System.Int64.Zero = System.Int64(Bridge.$Long.ZERO);
    System.Int64.MinValue = System.Int64(Bridge.$Long.MIN_VALUE);
    System.Int64.MaxValue = System.Int64(Bridge.$Long.MAX_VALUE);
    System.Int64.precision = 19;

    /* ULONG */

    System.UInt64 = function (l) {
        if (this.constructor !== System.UInt64) {
            return new System.UInt64(l);
        }

        if (!Bridge.hasValue(l)) {
            l = 0;
        }

        this.T = System.UInt64;
        this.unsigned = true;
        this.value = System.UInt64.getValue(l, true);
    }

    System.UInt64.$number = true;
    System.UInt64.$$name = "System.UInt64";
    System.UInt64.prototype.$$name = "System.UInt64";
    System.UInt64.$kind = "struct";
    System.UInt64.prototype.$kind = "struct";
    System.UInt64.$$inherits = [];
    Bridge.Class.addExtend(System.UInt64, [System.IComparable, System.IFormattable, System.IComparable$1(System.UInt64), System.IEquatable$1(System.UInt64)]);

    System.UInt64.$is = function (instance) {
        return instance instanceof System.UInt64;
    };

    System.UInt64.getDefaultValue = function () {
        return System.UInt64.Zero;
    };

    System.UInt64.getValue = function (l) {
        if (!Bridge.hasValue(l)) {
            return null;
        }

        if (l instanceof Bridge.$Long) {
            return l;
        }

        if (l instanceof System.UInt64) {
            return l.value;
        }

        if (l instanceof System.Int64) {
            return l.value.toUnsigned();
        }

        if (Bridge.isArray(l)) {
            return new Bridge.$Long(l[0], l[1], true);
        }

        if (Bridge.isString(l)) {
            return Bridge.$Long.fromString(l, true);
        }

        if (Bridge.isNumber(l)) {
            if (l < 0) {
                return (new System.Int64(l)).value.toUnsigned();
            }

            return Bridge.$Long.fromNumber(l, true);
        }

        if (l instanceof System.Decimal) {
            return Bridge.$Long.fromString(l.toString(), true);
        }

        return Bridge.$Long.fromValue(l);
    };

    System.UInt64.create = function (l) {
        if (!Bridge.hasValue(l)) {
            return null;
        }

        if (l instanceof System.UInt64) {
            return l;
        }

        return new System.UInt64(l);
    };

    System.UInt64.lift = function (l) {
        if (!Bridge.hasValue(l)) {
            return null;
        }
        return System.UInt64.create(l);
    };

    System.UInt64.prototype.toJSON = System.Int64.prototype.toJSON;
    System.UInt64.prototype.toString = System.Int64.prototype.toString;
    System.UInt64.prototype.format = System.Int64.prototype.format;
    System.UInt64.prototype.isNegative = System.Int64.prototype.isNegative;
    System.UInt64.prototype.abs = System.Int64.prototype.abs;
    System.UInt64.prototype.compareTo = System.Int64.prototype.compareTo;
    System.UInt64.prototype.add = System.Int64.prototype.add;
    System.UInt64.prototype.sub = System.Int64.prototype.sub;
    System.UInt64.prototype.isZero = System.Int64.prototype.isZero;
    System.UInt64.prototype.mul = System.Int64.prototype.mul;
    System.UInt64.prototype.div = System.Int64.prototype.div;
    System.UInt64.prototype.toNumberDivided = System.Int64.prototype.toNumberDivided;
    System.UInt64.prototype.mod = System.Int64.prototype.mod;
    System.UInt64.prototype.neg = System.Int64.prototype.neg;
    System.UInt64.prototype.inc = System.Int64.prototype.inc;
    System.UInt64.prototype.dec = System.Int64.prototype.dec;
    System.UInt64.prototype.sign = System.Int64.prototype.sign;
    System.UInt64.prototype.clone = System.Int64.prototype.clone;
    System.UInt64.prototype.ne = System.Int64.prototype.ne;
    System.UInt64.prototype.neq = System.Int64.prototype.neq;
    System.UInt64.prototype.eq = System.Int64.prototype.eq;
    System.UInt64.prototype.lt = System.Int64.prototype.lt;
    System.UInt64.prototype.lte = System.Int64.prototype.lte;
    System.UInt64.prototype.gt = System.Int64.prototype.gt;
    System.UInt64.prototype.gte = System.Int64.prototype.gte;
    System.UInt64.prototype.equals = System.Int64.prototype.equals;
    System.UInt64.prototype.equalsT = System.Int64.prototype.equalsT;
    System.UInt64.prototype.getHashCode = System.Int64.prototype.getHashCode;
    System.UInt64.prototype.toNumber = System.Int64.prototype.toNumber;

    System.UInt64.parse = function (str) {
        if (str == null) {
            throw new System.ArgumentNullException("str");
        }

        if (!/^[+-]?[0-9]+$/.test(str)) {
            throw new System.FormatException("Input string was not in a correct format.");
        }

        var result = new System.UInt64(str);

        if (result.value.isNegative()) {
            throw new System.OverflowException();
        }

        if (System.String.trimStartZeros(str) !== result.toString()) {
            throw new System.OverflowException();
        }

        return result;
    };

    System.UInt64.tryParse = function (str, v) {
        try {
            if (str == null || !/^[+-]?[0-9]+$/.test(str)) {
                v.v = System.UInt64(Bridge.$Long.UZERO);
                return false;
            }

            v.v = new System.UInt64(str);

            if (v.v.isNegative()) {
                v.v = System.UInt64(Bridge.$Long.UZERO);
                return false;
            }

            if (System.String.trimStartZeros(str) !== v.v.toString()) {
                v.v = System.UInt64(Bridge.$Long.UZERO);
                return false;
            }

            return true;
        } catch (e) {
            v.v = System.UInt64(Bridge.$Long.UZERO);
            return false;
        }
    };

    System.UInt64.min = function () {
        var values = [],
            min, i, len;

        for (i = 0, len = arguments.length; i < len; i++) {
            values.push(System.UInt64.getValue(arguments[i]));
        }

        i = 0;
        min = values[0];
        for (; ++i < values.length;) {
            if (values[i].lt(min)) {
                min = values[i];
            }
        }

        return new System.UInt64(min);
    };

    System.UInt64.max = function () {
        var values = [],
            max, i, len;

        for (i = 0, len = arguments.length; i < len; i++) {
            values.push(System.UInt64.getValue(arguments[i]));
        }

        i = 0;
        max = values[0];
        for (; ++i < values.length;) {
            if (values[i].gt(max)) {
                max = values[i];
            }
        }

        return new System.UInt64(max);
    };

    System.UInt64.divRem = function (a, b, result) {
        a = System.UInt64(a);
        b = System.UInt64(b);
        var remainder = a.mod(b);
        result.v = remainder;
        return a.sub(remainder).div(b);
    };

    System.UInt64.prototype.and = System.Int64.prototype.and;
    System.UInt64.prototype.not = System.Int64.prototype.not;
    System.UInt64.prototype.or = System.Int64.prototype.or;
    System.UInt64.prototype.shl = System.Int64.prototype.shl;
    System.UInt64.prototype.shr = System.Int64.prototype.shr;
    System.UInt64.prototype.shru = System.Int64.prototype.shru;
    System.UInt64.prototype.xor = System.Int64.prototype.xor;

    System.UInt64.Zero = System.UInt64(Bridge.$Long.UZERO);
    System.UInt64.MinValue = System.UInt64.Zero;
    System.UInt64.MaxValue = System.UInt64(Bridge.$Long.MAX_UNSIGNED_VALUE);
    System.UInt64.precision = 20;
