    Bridge.define("System.Double", {
        inherits: [System.IComparable, System.IFormattable],
        statics: {
            min: -Number.MAX_VALUE,

            max: Number.MAX_VALUE,

            precision: 15,

            $number: true,

            $is: function (instance) {
                return typeof (instance) === "number";
            },

            getDefaultValue: function () {
                return 0;
            },

            parse: function (s, provider) {
                return Bridge.Int.parseFloat(s, provider);
            },

            tryParse: function (s, provider, result) {
                return Bridge.Int.tryParseFloat(s, provider, result);
            },

            format: function (number, format, provider) {
                return Bridge.Int.format(number, format || 'G', provider, System.Double);
            },

            equals: function (v1, v2) {
                if (Bridge.is(v1, System.Double) && Bridge.is(v2, System.Double)) {
                    return Bridge.unbox(v1, true) === Bridge.unbox(v2, true);
                }

                return false;
            },

            equalsT: function (v1, v2) {
                return Bridge.unbox(v1, true) === Bridge.unbox(v2, true);
            },

            getHashCode: function (v) {
                var value = Bridge.unbox(v, true);

                if (value === 0) {
                    return 0;
                }

                if (value === Number.POSITIVE_INFINITY) {
                    return 0x7FF00000;
                }

                if (value === Number.NEGATIVE_INFINITY) {
                    return 0xFFF00000;
                }
                return Bridge.getHashCode(value.toExponential());
            }
        }
    });

    System.Double.$kind = "";
    Bridge.Class.addExtend(System.Double, [System.IComparable$1(System.Double), System.IEquatable$1(System.Double)]);

    Bridge.define("System.Single", {
        inherits: [System.IComparable, System.IFormattable],
        statics: {
            min: -3.40282346638528859e+38,

            max: 3.40282346638528859e+38,

            precision: 7,

            $number: true,

            $is: System.Double.$is,

            getDefaultValue: System.Double.getDefaultValue,

            parse: System.Double.parse,

            tryParse: System.Double.tryParse,

            format: function (number, format, provider) {
                return Bridge.Int.format(number, format || 'G', provider, System.Single);
            },

            equals: function (v1, v2) {
                if (Bridge.is(v1, System.Single) && Bridge.is(v2, System.Single)) {
                    return Bridge.unbox(v1, true) === Bridge.unbox(v2, true);
                }

                return false;
            },

            equalsT: function (v1, v2) {
                return Bridge.unbox(v1, true) === Bridge.unbox(v2, true);
            },

            getHashCode: System.Double.getHashCode
        }
    });

    System.Single.$kind = "";
    Bridge.Class.addExtend(System.Single, [System.IComparable$1(System.Single), System.IEquatable$1(System.Single)]);
