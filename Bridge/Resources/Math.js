    Bridge.Math = {
        divRem: function (a, b, result) {
            var remainder = a % b;

            result.v = remainder;

            return (a - remainder) / b;
        },

        round: function (n, d, rounding) {
            var m = Math.pow(10, d || 0);

            n *= m;

            var sign = (n > 0) | -(n < 0);

            if (n % 1 === 0.5 * sign) {
                var f = Math.floor(n);

                return (f + (rounding === 4 ? (sign > 0) : (f % 2 * sign))) / m;
            }

            return Math.round(n) / m;
        },

        log10: Math.log10 || function (x) {
            return Math.log(x) / Math.LN10;
        },

        logWithBase: function (x, newBase) {
            if (isNaN(x)) {
                return x;
            }

            if (isNaN(newBase)) {
                return newBase;
            }

            if (newBase === 1) {
                return NaN
            }

            if (x !== 1 && (newBase === 0 || newBase === Number.POSITIVE_INFINITY)) {
                return NaN;
            }

            return Bridge.Math.log10(x) / Bridge.Math.log10(newBase);
        },

        log: function (x) {
            if (x === 0.0) {
                return Number.NEGATIVE_INFINITY;
            }

            if (x < 0.0 || isNaN(x)) {
                return NaN;
            }

            if (x === Number.POSITIVE_INFINITY) {
                return Number.POSITIVE_INFINITY;
            }

            if (x === Number.NEGATIVE_INFINITY) {
                return NaN;
            }

            return Math.log(x);
        },

        sinh: Math.sinh || function (x) {
            return (Math.exp(x) - Math.exp(-x)) / 2;
        },

        cosh: Math.cosh || function (x) {
            return (Math.exp(x) + Math.exp(-x)) / 2;
        },

        tanh: Math.tanh || function (x) {
            if (x === Infinity) {
                return 1;
            } else if (x === -Infinity) {
                return -1;
            } else {
                var y = Math.exp(2 * x);
                return (y - 1) / (y + 1);
            }
        }
    };
