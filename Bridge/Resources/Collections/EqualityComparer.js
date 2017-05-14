    Bridge.define('System.Collections.Generic.EqualityComparer$1', function (T) {
        return {
            inherits: [System.Collections.Generic.IEqualityComparer$1(T)],

            statics: {
                config: {
                    init: function () {
                        this.def = new (System.Collections.Generic.EqualityComparer$1(T))();
                    }
                }
            },

            config: {
                alias: [
                    "equals2", ["System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(T) + "$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2"],
                    "getHashCode2", ["System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(T) + "$getHashCode2", "System$Collections$Generic$IEqualityComparer$1$getHashCode2"]
                ]
            },

            equals2: function (x, y) {
                if (!Bridge.isDefined(x, true)) {
                    return !Bridge.isDefined(y, true);
                } else if (Bridge.isDefined(y, true)) {
                    var isBridge = x && x.$$name;

                    if (Bridge.isFunction(x) && Bridge.isFunction(y)) {
                        return Bridge.fn.equals.call(x, y);
                    }
                    else if (!isBridge || x && x.$boxed || y && y.$boxed) {
                        return Bridge.equals(x, y);
                    }
                    else if (Bridge.isFunction(x.equalsT)) {
                        return Bridge.equalsT(x, y);
                    }
                    else if (Bridge.isFunction(x.equals)) {
                        return Bridge.equals(x, y);
                    }

                    return x === y;
                }

                return false;
            },

            getHashCode2: function (obj) {
                return Bridge.isDefined(obj, true) ? Bridge.getHashCode(obj) : 0;
            }
        };
    });

    System.Collections.Generic.EqualityComparer$1.$default = new (System.Collections.Generic.EqualityComparer$1(System.Object))();
