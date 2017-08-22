    Bridge.define("System.IFormattable", {
        $kind: "interface",
        statics: {
            $is: function (obj) {
                if (Bridge.isNumber(obj) || Bridge.isDate(obj)) {
                    return true;
                }

                return Bridge.is(obj, System.IFormattable, true);
            }
        }
    });

    Bridge.define("System.IComparable", {
        $kind: "interface",

        statics: {
            $is: function (obj) {
                if (Bridge.isNumber(obj) || Bridge.isDate(obj) || Bridge.isBoolean(obj) || Bridge.isString(obj)) {
                    return true;
                }

                return Bridge.is(obj, System.IComparable, true);
            }
        }
    });

    Bridge.define("System.IFormatProvider", {
        $kind: "interface"
    });

    Bridge.define("System.ICloneable", {
        $kind: "interface"
    });

    Bridge.define('System.IComparable$1', function (T) {
        return {
            $kind: "interface",

            statics: {
                $is: function (obj) {
                    if (Bridge.isNumber(obj) && T.$number && T.$is(obj) || Bridge.isDate(obj) && (T === Date || T === System.DateTime) || Bridge.isBoolean(obj) && (T === Boolean || T === System.Boolean) || Bridge.isString(obj) && (T === String || T === System.String)) {
                        return true;
                    }

                    return Bridge.is(obj, System.IComparable$1(T), true);
                },

                isAssignableFrom: function (type) {
                    if (type === System.DateTime && T === Date) {
                        return true;
                    }

                    return Bridge.Reflection.getInterfaces(type).indexOf(System.IComparable$1(T)) >= 0;
                }
            }
        };
    });

    Bridge.define('System.IEquatable$1', function (T) {
        return {
            $kind: "interface",

            statics: {
                $is: function (obj) {
                    if (Bridge.isNumber(obj) && T.$number && T.$is(obj) || Bridge.isDate(obj) && (T === Date || T === System.DateTime) || Bridge.isBoolean(obj) && (T === Boolean || T === System.Boolean) || Bridge.isString(obj) && (T === String || T === System.String)) {
                        return true;
                    }

                    return Bridge.is(obj, System.IEquatable$1(T), true);
                },

                isAssignableFrom: function (type) {
                    if (type === System.DateTime && T === Date) {
                        return true;
                    }

                    return Bridge.Reflection.getInterfaces(type).indexOf(System.IEquatable$1(T)) >= 0;
                }
            }
        };
    });

    Bridge.define("Bridge.IPromise", {
        $kind: "interface"
    });

    Bridge.define("System.IDisposable", {
        $kind: "interface"
    });

    Bridge.define("System.IAsyncResult", {
        $kind: "interface"
    });
