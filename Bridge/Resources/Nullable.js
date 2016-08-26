    var nullable = {
        hasValue: function (obj) {
            return (obj !== null) && (obj !== undefined);
        },

        getValue: function (obj) {
            if (!System.Nullable.hasValue(obj)) {
                throw new System.InvalidOperationException("Nullable instance doesn't have a value.");
            }

            return obj;
        },

        getValueOrDefault: function (obj, defValue) {
            return System.Nullable.hasValue(obj) ? obj : defValue;
        },

        add: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a + b : null;
        },

        band: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a & b : null;
        },

        bor: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a | b : null;
        },

        and: function (a, b) {
            if (a === true && b === true) {
                return true;
            } else if (a === false || b === false) {
                return false;
            }

            return null;
        },

        or: function (a, b) {
            if (a === true || b === true) {
                return true;
            } else if (a === false && b === false) {
                return false;
            }

            return null;
        },

        div: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a / b : null;
        },

        eq: function (a, b) {
            return !Bridge.hasValue(a) ? !Bridge.hasValue(b) : (a === b);
        },

        equals: function (a, b, fn) {
            return !Bridge.hasValue(a) ? !Bridge.hasValue(b) : (fn ? fn(a, b) : Bridge.equals(a, b));
        },

        toString: function (a, fn) {
            return !Bridge.hasValue(a) ? "" : (fn ? fn(a) : a.toString());
        },

        getHashCode: function (a, fn) {
            return !Bridge.hasValue(a) ? 0 : (fn ? fn(a) : Bridge.getHashCode(a));
        },

        xor: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a ^ b : null;
        },

        gt: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) && a > b;
        },

        gte: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) && a >= b;
        },

        neq: function (a, b) {
            return !Bridge.hasValue(a) ? Bridge.hasValue(b) : (a !== b);
        },

        lt: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) && a < b;
        },

        lte: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) && a <= b;
        },

        mod: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a % b : null;
        },

        mul: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a * b : null;
        },

        sl: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a << b : null;
        },

        sr: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a >> b : null;
        },

        srr: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a >>> b : null;
        },

        sub: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a - b : null;
        },

        bnot: function (a) {
            return Bridge.hasValue(a) ? ~a : null;
        },

        neg: function (a) {
            return Bridge.hasValue(a) ? -a : null;
        },

        not: function (a) {
            return Bridge.hasValue(a) ? !a : null;
        },

        pos: function (a) {
            return Bridge.hasValue(a) ? +a : null;
        },

        lift: function () {
            for (var i = 1; i < arguments.length; i++) {
                if (!Bridge.hasValue(arguments[i])) {
                    return null;
                }
            }

            if (arguments[0] == null) {
                return null;
            }

            if (arguments[0].apply == undefined) {
                return arguments[0];
            }

            return arguments[0].apply(null, Array.prototype.slice.call(arguments, 1));
        },

        lift1: function (f, o) {
            return Bridge.hasValue(o) ? (typeof f === "function" ? f.apply(null, Array.prototype.slice.call(arguments, 1)) : o[f].apply(o, Array.prototype.slice.call(arguments, 2))) : null;
        },

        lift2: function (f, a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? (typeof f === "function" ? f.apply(null, Array.prototype.slice.call(arguments, 1)) : a[f].apply(a, Array.prototype.slice.call(arguments, 2))) : null;
        },

        liftcmp: function (f, a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? (typeof f === "function" ? f.apply(null, Array.prototype.slice.call(arguments, 1)) : a[f].apply(a, Array.prototype.slice.call(arguments, 2))) : false;
        },

        lifteq: function (f, a, b) {
            var va = Bridge.hasValue(a),
                vb = Bridge.hasValue(b);

            return (!va && !vb) || (va && vb && (typeof f === "function" ? f.apply(null, Array.prototype.slice.call(arguments, 1)) : a[f].apply(a, Array.prototype.slice.call(arguments, 2))));
        },

        liftne: function (f, a, b) {
            var va = Bridge.hasValue(a),
                vb = Bridge.hasValue(b);

            return (va !== vb) || (va && (typeof f === "function" ? f.apply(null, Array.prototype.slice.call(arguments, 1)) : a[f].apply(a, Array.prototype.slice.call(arguments, 2))));
        }
    };

    System.Nullable = nullable;
    Bridge.hasValue = System.Nullable.hasValue;
