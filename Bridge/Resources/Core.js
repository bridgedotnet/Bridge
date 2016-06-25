    // @source Core.js
    var core = {
        global: globals,

        emptyFn: function () {},

        identity: function (x) {
            return x;
        },

        geti: function (scope, name1, name2) {
            if (Bridge.hasValue(scope[name1])) {
                return name1;
            }

            return name2;
        },

        isPlainObject: function (obj) {
            if (typeof obj == 'object' && obj !== null) {
                if (typeof Object.getPrototypeOf == 'function') {
                    var proto = Object.getPrototypeOf(obj);
                    return proto === Object.prototype || proto === null;
                }

                return Object.prototype.toString.call(obj) === '[object Object]';
            }

            return false;
        },

        toPlain: function (o) {
            if (!o || Bridge.isPlainObject(o) || typeof o != "object") {
                return o;
            }

            if (typeof o.toJSON == 'function') {
                return o.toJSON();
            }

            if (Bridge.isArray(o)) {
                var arr = [];
                for (var i = 0; i < o.length; i++) {
                    arr.push(Bridge.toPlain(o[i]));
                }
                return arr;
            }

            var newo = {},
                m;

            for (var key in o) {
                m = o[key];
                if (!Bridge.isFunction(m)) {
                    newo[key] = m;
                }
            }

            return newo;
        },

        ref: function (o, n) {
            if (Bridge.isArray(n)) {
                n = System.Array.toIndex(o, n);
            }

            var proxy = {};

            Object.defineProperty(proxy, "v", {
                get: function () {
                    return o[n];
                },

                set: function (value) {
                    o[n] = value;
                }
            });

            return proxy;
        },

        property: function (scope, name, v) {
            scope[name] = v;

            var rs = name.charAt(0) === "$",
                cap = rs ? name.slice(1) : name,
                getName = "get" + cap,
                setName = "set" + cap,
                lastSep = name.lastIndexOf("$"),
                endsNum = lastSep > 0 && ((name.length - lastSep - 1) > 0) && !isNaN(parseInt(name.substr(lastSep + 1)));

            if (endsNum) {
                lastSep = name.substring(0, lastSep - 1).lastIndexOf("$");
            }

            if (lastSep > 0 && lastSep !== (name.length - 1)) {
                getName = name.substring(0, lastSep) + "get" + name.substr(lastSep + 1);
                setName = name.substring(0, lastSep) + "set" + name.substr(lastSep + 1);
            }

            scope[getName] = (function (name) {
                return function () {
                    return this[name];
                };
            })(name);

            scope[setName] = (function (name) {
                return function (value) {
                    this[name] = value;
                };
            })(name);
        },

        event: function (scope, name, v) {
            scope[name] = v;

            var rs = name.charAt(0) === "$",
                cap = rs ? name.slice(1) : name,
                addName = "add" + cap,
                removeName = "remove" + cap,
                lastSep = name.lastIndexOf("$"),
                endsNum = lastSep > 0 && ((name.length - lastSep - 1) > 0) && !isNaN(parseInt(name.substr(lastSep + 1)));

            if (endsNum) {
                lastSep = name.substring(0, lastSep - 1).lastIndexOf("$");
            }

            if (lastSep > 0 && lastSep !== (name.length - 1)) {
                addName = name.substring(0, lastSep) + "add" + name.substr(lastSep + 1);
                removeName = name.substring(0, lastSep) + "remove" + name.substr(lastSep + 1);
            }

            scope[addName] = (function (name) {
                return function (value) {
                    this[name] = Bridge.fn.combine(this[name], value);
                };
            })(name);

            scope[removeName] = (function (name) {
                return function (value) {
                    this[name] = Bridge.fn.remove(this[name], value);
                };
            })(name);
        },

        createInstance: function (type) {
            if (type === System.Decimal) {
                return System.Decimal.Zero;
            }

            if (type === System.Int64) {
                return System.Int64.Zero;
            }

            if (type === System.UInt64) {
                return System.UInt64.Zero;
            }

            if (type === System.Double ||
                type === System.Single ||
                type === System.Byte ||
                type === System.SByte ||
                type === System.Int16 ||
                type === System.UInt16 ||
                type === System.Int32 ||
                type === System.UInt32 ||
                type === Bridge.Int) {
                return 0;
            }

            if (typeof (type.getDefaultValue) === 'function') {
                return type.getDefaultValue();
            } else if (type === Boolean) {
                return false;
            } else if (type === Date) {
                return new Date(0);
            } else if (type === Number) {
                return 0;
            } else if (type === String) {
                return '';
            } else {
                return new type();
            }
        },

        clone: function (obj) {
            if (Bridge.isArray(obj)) {
                return System.Array.clone(obj);
            }

            var name;
            if (Bridge.isFunction(obj[name = "System$ICloneable$clone"])) {
                return obj[name]();
            }

            if (Bridge.is(obj, System.ICloneable)) {
                return obj.clone();
            }

            return null;
        },

        copy: function (to, from, keys, toIf) {
            if (typeof keys === "string") {
                keys = keys.split(/[,;\s]+/);
            }

            for (var name, i = 0, n = keys ? keys.length : 0; i < n; i++) {
                name = keys[i];

                if (toIf !== true || to[name] == undefined) {
                    if (Bridge.is(from[name], System.ICloneable)) {
                        to[name] = Bridge.clone(from[name]);
                    } else {
                        to[name] = from[name];
                    }
                }
            }

            return to;
        },

        get: function (t) {
            if (t && t.$staticInit !== null) {
                t.$staticInit();
            }

            return t;
        },

        ns: function (ns, scope) {
            var nsParts = ns.split("."),
                i = 0;

            if (!scope) {
                scope = Bridge.global;
            }

            for (i = 0; i < nsParts.length; i++) {
                if (typeof scope[nsParts[i]] === "undefined") {
                    scope[nsParts[i]] = {};
                }

                scope = scope[nsParts[i]];
            }

            return scope;
        },

        ready: function (fn, scope) {
            var delayfn = function () {
                if (scope) {
                    fn.apply(scope);
                } else {
                    fn();
                }
            };

            if (typeof Bridge.global.jQuery !== "undefined") {
                Bridge.global.jQuery(delayfn);
            } else {
                if (typeof Bridge.global.document === "undefined" || Bridge.global.document.readyState === "complete" || Bridge.global.document.readyState === "loaded") {
                    delayfn();
                } else {
                    Bridge.on("DOMContentLoaded", Bridge.global.document, delayfn);
                }
            }
        },

        on: function (event, elem, fn, scope) {
            var listenHandler = function (e) {
                var ret = fn.apply(scope || this, arguments);

                if (ret === false) {
                    e.stopPropagation();
                    e.preventDefault();
                }

                return (ret);
            };

            var attachHandler = function () {
                var ret = fn.call(scope || elem, Bridge.global.event);

                if (ret === false) {
                    Bridge.global.event.returnValue = false;
                    Bridge.global.event.cancelBubble = true;
                }

                return (ret);
            };

            if (elem.addEventListener) {
                elem.addEventListener(event, listenHandler, false);
            } else {
                elem.attachEvent("on" + event, attachHandler);
            }
        },

        getHashCode: function (value, safe) {
            // In CLR: mutable object should keep on returning same value
            // Bridge.NET goals: make it deterministic (to make testing easier) without breaking CLR contracts
            //     for value types it returns deterministic values (f.e. for int 3 it returns 3) 
            //     for reference types it returns random value

            if (Bridge.isEmpty(value, true)) {
                if (safe) {
                    return 0;
                }

                throw new System.InvalidOperationException("HashCode cannot be calculated for empty value");
            }

            if (value.getHashCode && Bridge.isFunction(value.getHashCode) && !value.__insideHashCode && value.getHashCode.length === 0) {
                value.__insideHashCode = true;
                var r = value.getHashCode();
                delete value.__insideHashCode;

                return r;
            }

            if (Bridge.isBoolean(value)) {
                return value ? 1 : 0;
            }

            if (Bridge.isDate(value)) {
                return value.valueOf() & 0xFFFFFFFF;
            }

            if (Bridge.isNumber(value)) {
                value = value.toExponential();

                return parseInt(value.substr(0, value.indexOf("e")).replace(".", ""), 10) & 0xFFFFFFFF;
            }

            if (Bridge.isString(value)) {
                var hash = 0,
                    i;

                for (i = 0; i < value.length; i++) {
                    hash = (((hash << 5) - hash) + value.charCodeAt(i)) & 0xFFFFFFFF;
                }

                return hash;
            }

            if (value.$$hashCode) {
                return value.$$hashCode;
            }

            value.$$hashCode = (Math.random() * 0x100000000) | 0;

            return value.$$hashCode;
        },

        getDefaultValue: function (type) {
            if ((type.getDefaultValue) && type.getDefaultValue.length === 0) {
                return type.getDefaultValue();
            } else if (type === Boolean) {
                return false;
            } else if (type === Date) {
                return new Date(-864e13);
            } else if (type === Number) {
                return 0;
            }

            return null;
        },

        getTypeAlias: function (obj) {
            var name = Bridge.getTypeName(obj);
            return name.replace(/[\.\(\)\,]/g, "$");
        },

        getTypeName: function (obj) {
            var str;

            if (obj.$$name) {
                return obj.$$name;
            }

            if ((obj).constructor === Function) {
                str = (obj).toString();
            } else {
                str = (obj).constructor.toString();
            }

            var results = (/function (.{1,})\(/).exec(str);

            return (results && results.length > 1) ? results[1] : "Object";
        },

        getBaseType: function (obj) {
            if (obj == null) {
                throw new System.NullReferenceException();
            }

            if (obj.$interface) {
                return null;
            }

            if (obj.$$inherits) {
                return obj.$$inherits[0].$interface ? Object : obj.$$inherits[0];
            } else {
                return obj.$$name ? Object : null;
            }
        },

        isAssignableFrom: function (baseType, type) {
            if (baseType === null) {
                throw new System.NullReferenceException();
            }

            if (type === null) {
                return false;
            }

            if (baseType == type || baseType == Object) {
                return true;
            }

            var inheritors = type.$$inherits,
                i,
                r;

            if (inheritors) {
                for (i = 0; i < inheritors.length; i++) {
                    r = Bridge.isAssignableFrom(baseType, inheritors[i]);

                    if (r) {
                        return true;
                    }
                }
            }

            return false;
        },

        is: function (obj, type, ignoreFn, allowNull) {
            if (typeof type === "string") {
                type = Bridge.unroll(type);
            }

            if (obj == null) {
                return !!allowNull;
            }

            if (ignoreFn !== true) {
                if (Bridge.isFunction(type.$is)) {
                    return type.$is(obj);
                }

                if (Bridge.isFunction(type.instanceOf)) {
                    return type.instanceOf(obj);
                }
            }

            if ((obj.constructor === type) || (obj instanceof type)) {
                return true;
            }

            if (Bridge.isArray(obj) || obj instanceof Bridge.ArrayEnumerator) {
                return System.Array.is(obj, type);
            }

            if (Bridge.isString(obj)) {
                return System.String.is(obj, type);
            }

            if (Bridge.isBoolean(obj)) {
                return System.Boolean.is(obj, type);
            }

            if (!type.$$inheritors) {
                return false;
            }

            var inheritors = type.$$inheritors,
                i;

            for (i = 0; i < inheritors.length; i++) {
                if (Bridge.is(obj, inheritors[i])) {
                    return true;
                }
            }

            return false;
        },

        as: function (obj, type, allowNull) {
            return Bridge.is(obj, type, false, allowNull) ? obj : null;
        },

        cast: function (obj, type, allowNull) {
            if (obj === null) {
                return null;
            }

            var result = Bridge.as(obj, type, allowNull);

            if (result === null) {
                throw new System.InvalidCastException("Unable to cast type " + (obj ? Bridge.getTypeName(obj) : "'null'") + " to type " + Bridge.getTypeName(type));
            }

            return result;
        },

        apply: function (obj, values) {
            var names = Bridge.getPropertyNames(values, true),
                i;

            for (i = 0; i < names.length; i++) {
                var name = names[i];

                if (typeof obj[name] === "function" && typeof values[name] !== "function") {
                    obj[name](values[name]);
                } else {
                    obj[name] = values[name];
                }
            }

            return obj;
        },

        merge: function (to, from, elemFactory) {
            // Maps instance of plain JS value or Object into Bridge object. 
            // Used for deserialization. Proper deserialization requires reflection that is currently not supported in Bridge. 
            // It currently is only capable to deserialize:
            // -instance of single class or primitive
            // -array of primitives 
            // -array of single class            
            if (to instanceof System.Decimal && Bridge.isNumber(from)) {
                return new System.Decimal(from);
            }

            if (to instanceof System.Int64 && Bridge.isNumber(from)) {
                return new System.Int64(from);
            }

            if (to instanceof System.UInt64 && Bridge.isNumber(from)) {
                return new System.UInt64(from);
            }

            if (to instanceof Boolean ||
                to instanceof Number ||
                to instanceof String ||
                to instanceof Function ||
                to instanceof Date ||
                to instanceof System.Double ||
                to instanceof System.Single ||
                to instanceof System.Byte ||
                to instanceof System.SByte ||
                to instanceof System.Int16 ||
                to instanceof System.UInt16 ||
                to instanceof System.Int32 ||
                to instanceof System.UInt32 ||
                to instanceof Bridge.Int ||
                to instanceof System.Decimal) {
                return from;
            }

            var key,
                i,
                value,
                toValue,
                fn;

            if (Bridge.isArray(from) && Bridge.isFunction(to.add || to.push)) {
                fn = Bridge.isArray(to) ? to.push : to.add;

                for (i = 0; i < from.length; i++) {
                    var item = from[i];

                    if (!Bridge.isArray(item)) {
                        item = [typeof elemFactory === 'undefined' ? item : Bridge.merge(elemFactory(), item)];
                    }

                    fn.apply(to, item);
                }
            } else {
                for (key in from) {
                    value = from[key];

                    if (typeof to[key] === "function") {
                        if (key.match(/^\s*get[A-Z]/)) {
                            Bridge.merge(to[key](), value);
                        } else {
                            to[key](value);
                        }
                    } else {
                        var setter = "set" + key.charAt(0).toUpperCase() + key.slice(1);

                        if (typeof to[setter] === "function" && typeof value !== "function") {
                            to[setter](value);
                        } else if (value && value.constructor === Object && to[key]) {
                            toValue = to[key];
                            Bridge.merge(toValue, value);
                        } else {
                            to[key] = value;
                        }
                    }
                }
            }

            return to;
        },

        getEnumerator: function (obj, suffix, T) {
            if (typeof obj === "string") {
                obj = System.String.toCharArray(obj);
            }

            if (suffix && obj && obj["getEnumerator" + suffix]) {
                return obj["getEnumerator" + suffix].call(obj);
            }

            if (obj && obj.getEnumerator) {
                return obj.getEnumerator();
            }

            var name;
            if (T && Bridge.isFunction(obj[name = "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator"])) {
                return obj[name]();
            }

            if (Bridge.isFunction(obj[name = "System$Collections$IEnumerable$getEnumerator"])) {
                return obj[name]();
            }

            if ((Object.prototype.toString.call(obj) === "[object Array]") ||
                (obj && Bridge.isDefined(obj.length))) {
                return new Bridge.ArrayEnumerator(obj, T);
            }

            throw new System.InvalidOperationException("Cannot create enumerator");
        },

        getPropertyNames: function (obj, includeFunctions) {
            var names = [],
                name;

            for (name in obj) {
                if (includeFunctions || typeof obj[name] !== "function") {
                    names.push(name);
                }
            }

            return names;
        },

        isDefined: function (value, noNull) {
            return typeof value !== "undefined" && (noNull ? value !== null : true);
        },

        isEmpty: function (value, allowEmpty) {
            return (typeof value === "undefined" || value === null) || (!allowEmpty ? value === "" : false) || ((!allowEmpty && Bridge.isArray(value)) ? value.length === 0 : false);
        },

        toArray: function (ienumerable) {
            var i,
                item,
                len,
                result = [];

            if (Bridge.isArray(ienumerable)) {
                for (i = 0, len = ienumerable.length; i < len; ++i) {
                    result.push(ienumerable[i]);
                }
            } else {
                i = Bridge.getEnumerator(ienumerable);

                while (i.moveNext()) {
                    item = i.getCurrent();
                    result.push(item);
                }
            }

            return result;
        },

        isArray: function (obj) {
            return Object.prototype.toString.call(obj) in {
                "[object Array]": 1,
                "[object Uint8Array]": 1,
                "[object Int8Array]": 1,
                "[object Int16Array]": 1,
                "[object Uint16Array]": 1,
                "[object Int32Array]": 1,
                "[object Uint32Array]": 1,
                "[object Float32Array]": 1,
                "[object Float64Array]": 1
            };
        },

        isFunction: function (obj) {
            return typeof (obj) === "function";
        },

        isDate: function (obj) {
            return Object.prototype.toString.call(obj) === "[object Date]";
        },

        isNull: function (value) {
            return (value === null) || (value === undefined);
        },

        isBoolean: function (value) {
            return typeof value === "boolean";
        },

        isNumber: function (value) {
            return typeof value === "number" && isFinite(value);
        },

        isString: function (value) {
            return typeof value === "string";
        },

        unroll: function (value) {
            var d = value.split("."),
                o = Bridge.global[d[0]],
                i = 1;

            for (i; i < d.length; i++) {
                if (!o) {
                    return null;
                }

                o = o[d[i]];
            }

            return o;
        },

        referenceEquals: function (a, b) {
            return Bridge.hasValue(a) ? a === b : !Bridge.hasValue(b);
        },

        staticEquals: function (a, b) {
            if (!Bridge.hasValue(a)) {
                return !Bridge.hasValue(b);
            }

            return Bridge.hasValue(b) ? Bridge.equals(a, b) : false;
        },

        equals: function (a, b) {
            if (a == null && b == null) {
                return true;
            }

            if (a && Bridge.isFunction(a.equals) && a.equals.length === 1) {
                return a.equals(b);
            }

            if (b && Bridge.isFunction(b.equals) && b.equals.length === 1) {
                return b.equals(a);
            } else if (Bridge.isDate(a) && Bridge.isDate(b)) {
                return a.valueOf() === b.valueOf();
            } else if (Bridge.isNull(a) && Bridge.isNull(b)) {
                return true;
            } else if (Bridge.isNull(a) !== Bridge.isNull(b)) {
                return false;
            }

            var eq = a === b;

            if (!eq && typeof a === "object" && typeof b === "object" && a !== null && b !== null && a.$struct && b.$struct && a.$$name === b.$$name) {
                return Bridge.getHashCode(a) === Bridge.getHashCode(b) && Bridge.objectEquals(a, b);
            }

            return eq;
        },

        objectEquals: function (a, b) {
            Bridge.$$leftChain = [];
            Bridge.$$rightChain = [];

            var result = Bridge.deepEquals(a, b);

            delete Bridge.$$leftChain;
            delete Bridge.$$rightChain;

            return result;
        },

        deepEquals: function (a, b) {
            if (typeof a === "object" && typeof b === "object") {
                if (a === b) {
                    return true;
                }

                if (Bridge.$$leftChain.indexOf(a) > -1 || Bridge.$$rightChain.indexOf(b) > -1) {
                    return false;
                }

                var p;

                for (p in b) {
                    if (b.hasOwnProperty(p) !== a.hasOwnProperty(p)) {
                        return false;
                    } else if (typeof b[p] !== typeof a[p]) {
                        return false;
                    }
                }

                for (p in a) {
                    if (b.hasOwnProperty(p) !== a.hasOwnProperty(p)) {
                        return false;
                    } else if (typeof a[p] !== typeof b[p]) {
                        return false;
                    }

                    if (a[p] === b[p]) {
                        continue;
                    } else if (typeof (a[p]) === "object") {
                        Bridge.$$leftChain.push(a);
                        Bridge.$$rightChain.push(b);

                        if (!Bridge.deepEquals(a[p], b[p])) {
                            return false;
                        }

                        Bridge.$$leftChain.pop();
                        Bridge.$$rightChain.pop();
                    } else {
                        if (!Bridge.equals(a[p], b[p])) {
                            return false;
                        }
                    }
                }

                return true;
            } else {
                return Bridge.equals(a, b);
            }
        },

        compare: function (a, b, safe, T) {
            if (!Bridge.isDefined(a, true)) {
                if (safe) {
                    return 0;
                }

                throw new System.NullReferenceException();
            } else if (Bridge.isNumber(a) || Bridge.isString(a) || Bridge.isBoolean(a)) {
                if (Bridge.isString(a) && !Bridge.hasValue(b)) {
                    return 1;
                }

                return a < b ? -1 : (a > b ? 1 : 0);
            } else if (Bridge.isDate(a)) {
                return Bridge.compare(a.valueOf(), b.valueOf());
            }

            var name;
            if (T && Bridge.isFunction(a[name = "System$IComparable$1$" + Bridge.getTypeAlias(T) + "$compareTo"])) {
                return a[name](b);
            }

            if (Bridge.isFunction(a[name = "System$IComparable$compareTo"])) {
                return a[name](b);
            }

            if (Bridge.isFunction(a.compareTo)) {
                return a.compareTo(b);
            }

            if (T && Bridge.isFunction(b[name = "System$IComparable$1$" + Bridge.getTypeAlias(T) + "$compareTo"])) {
                return -b[name](a);
            }

            if (Bridge.isFunction(b[name = "System$IComparable$compareTo"])) {
                return -b[name](a);
            }

            if (Bridge.isFunction(b.compareTo)) {
                return -b.compareTo(a);
            }

            if (safe) {
                return 0;
            }

            throw new System.Exception("Cannot compare items");
        },

        equalsT: function (a, b, T) {
            if (!Bridge.isDefined(a, true)) {
                throw new System.NullReferenceException();
            } else if (Bridge.isNumber(a) || Bridge.isString(a) || Bridge.isBoolean(a)) {
                return a === b;
            } else if (Bridge.isDate(a)) {
                return a.valueOf() === b.valueOf();
            }

            var name;
            if (T && a != null && Bridge.isFunction(a[name = "System$IEquatable$1$" + Bridge.getTypeAlias(T) + "$equalsT"])) {
                return a[name](b);
            }

            if (T && b != null && Bridge.isFunction(b[name = "System$IEquatable$1$" + Bridge.getTypeAlias(T) + "$equalsT"])) {
                return b[name](a);
            }

            return a.equalsT ? a.equalsT(b) : b.equalsT(a);
        },

        format: function (obj, formatString, provider) {
            if (Bridge.isNumber(obj)) {
                return Bridge.Int.format(obj, formatString, provider);
            } else if (Bridge.isDate(obj)) {
                return Bridge.Date.format(obj, formatString, provider);
            }

            var name;
            if (Bridge.isFunction(obj[name = "System$IFormattable$format"])) {
                return obj[name](formatString, provider);
            }

            return obj.format(formatString, provider);
        },

        getType: function (instance) {
            if (!Bridge.isDefined(instance, true)) {
                throw new System.NullReferenceException("instance is null");
            }

            if (typeof (instance) === "number") {
                if (Math.floor(instance, 0) === instance) {
                    return System.Int32;
                } else {
                    return System.Double;
                }
            }

            try {
                return instance.constructor;
            } catch (ex) {
                return Object;
            }
        },

        isLower: function isLower(c) {
            var s = String.fromCharCode(c);

            return s === s.toLowerCase() && s !== s.toUpperCase();
        },

        isUpper: function isUpper(c) {
            var s = String.fromCharCode(c);

            return s !== s.toLowerCase() && s === s.toUpperCase();
        },

        coalesce: function (a, b) {
            return Bridge.hasValue(a) ? a : b;
        },

        fn: {
            equals: function (fn) {
                if (this === fn) {
                    return true;
                }

                if (fn == null || (this.constructor !== fn.constructor)) {
                    return false;
                }

                return this.equals === fn.equals && this.$method === fn.$method && this.$scope === fn.$scope;
            },

            call: function (obj, fnName) {
                var args = Array.prototype.slice.call(arguments, 2);

                obj = obj || Bridge.global;

                return obj[fnName].apply(obj, args);
            },

            makeFn: function (fn, length) {
                switch (length) {
                case 0:
                    return function () {
                        return fn.apply(this, arguments);
                    };
                case 1:
                    return function (a) {
                        return fn.apply(this, arguments);
                    };
                case 2:
                    return function (a, b) {
                        return fn.apply(this, arguments);
                    };
                case 3:
                    return function (a, b, c) {
                        return fn.apply(this, arguments);
                    };
                case 4:
                    return function (a, b, c, d) {
                        return fn.apply(this, arguments);
                    };
                case 5:
                    return function (a, b, c, d, e) {
                        return fn.apply(this, arguments);
                    };
                case 6:
                    return function (a, b, c, d, e, f) {
                        return fn.apply(this, arguments);
                    };
                case 7:
                    return function (a, b, c, d, e, f, g) {
                        return fn.apply(this, arguments);
                    };
                case 8:
                    return function (a, b, c, d, e, f, g, h) {
                        return fn.apply(this, arguments);
                    };
                case 9:
                    return function (a, b, c, d, e, f, g, h, i) {
                        return fn.apply(this, arguments);
                    };
                case 10:
                    return function (a, b, c, d, e, f, g, h, i, j) {
                        return fn.apply(this, arguments);
                    };
                case 11:
                    return function (a, b, c, d, e, f, g, h, i, j, k) {
                        return fn.apply(this, arguments);
                    };
                case 12:
                    return function (a, b, c, d, e, f, g, h, i, j, k, l) {
                        return fn.apply(this, arguments);
                    };
                case 13:
                    return function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
                        return fn.apply(this, arguments);
                    };
                case 14:
                    return function (a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
                        return fn.apply(this, arguments);
                    };
                case 15:
                    return function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                        return fn.apply(this, arguments);
                    };
                case 16:
                    return function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
                        return fn.apply(this, arguments);
                    };
                case 17:
                    return function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
                        return fn.apply(this, arguments);
                    };
                case 18:
                    return function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
                        return fn.apply(this, arguments);
                    };
                case 19:
                    return function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
                        return fn.apply(this, arguments);
                    };
                default:
                    return function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
                        return fn.apply(this, arguments);
                    };
                }
            },

            bind: function (obj, method, args, appendArgs) {
                if (method && method.$method === method && method.$scope === obj) {
                    return method;
                }

                var fn;

                if (arguments.length === 2) {
                    fn = Bridge.fn.makeFn(function () {
                        Bridge.caller.unshift(this);
                        var result = method.apply(obj, arguments);
                        Bridge.caller.shift(this);

                        return result;
                    }, method.length);
                } else {
                    fn = Bridge.fn.makeFn(function () {
                        var callArgs = args || arguments;

                        if (appendArgs === true) {
                            callArgs = Array.prototype.slice.call(arguments, 0);
                            callArgs = callArgs.concat(args);
                        } else if (typeof appendArgs === "number") {
                            callArgs = Array.prototype.slice.call(arguments, 0);

                            if (appendArgs === 0) {
                                callArgs.unshift.apply(callArgs, args);
                            } else if (appendArgs < callArgs.length) {
                                callArgs.splice.apply(callArgs, [appendArgs, 0].concat(args));
                            } else {
                                callArgs.push.apply(callArgs, args);
                            }
                        }
                        Bridge.caller.unshift(this);
                        var result = method.apply(obj, callArgs);
                        Bridge.caller.shift(this);

                        return result;
                    }, method.length);
                }

                fn.$method = method;
                fn.$scope = obj;
                fn.equals = Bridge.fn.equals;

                return fn;
            },

            bindScope: function (obj, method) {
                var fn = Bridge.fn.makeFn(function () {
                    var callArgs = Array.prototype.slice.call(arguments, 0);

                    callArgs.unshift.apply(callArgs, [obj]);

                    Bridge.caller.unshift(this);
                    var result = method.apply(obj, callArgs);
                    Bridge.caller.shift(this);

                    return result;
                }, method.length);

                fn.$method = method;
                fn.$scope = obj;
                fn.equals = Bridge.fn.equals;

                return fn;
            },

            $build: function (handlers) {
                var fn = function () {
                    var list = fn.$invocationList,
                        result = null,
                        i,
                        handler;

                    for (i = 0; i < list.length; i++) {
                        handler = list[i];
                        result = handler.apply(null, arguments);
                    }

                    return result;
                };

                fn.$invocationList = handlers ? Array.prototype.slice.call(handlers, 0) : [];

                if (fn.$invocationList.length === 0) {
                    return null;
                }

                return fn;
            },

            combine: function (fn1, fn2) {
                if (!fn1 || !fn2) {
                    return fn1 || fn2;
                }

                var list1 = fn1.$invocationList ? fn1.$invocationList : [fn1],
                    list2 = fn2.$invocationList ? fn2.$invocationList : [fn2];

                return Bridge.fn.$build(list1.concat(list2));
            },

            getInvocationList: function () {

            },

            remove: function (fn1, fn2) {
                if (!fn1 || !fn2) {
                    return fn1 || null;
                }

                var list1 = fn1.$invocationList ? fn1.$invocationList : [fn1],
                    list2 = fn2.$invocationList ? fn2.$invocationList : [fn2],
                    result = [],
                    exclude,
                    i, j;

                for (i = list1.length - 1; i >= 0; i--) {
                    exclude = false;

                    for (j = 0; j < list2.length; j++) {
                        if (list1[i] === list2[j] ||
                            ((list1[i].$method && (list1[i].$method === list2[j].$method)) && (list1[i].$scope && (list1[i].$scope === list2[j].$scope)))) {
                            exclude = true;

                            break;
                        }
                    }

                    if (!exclude) {
                        result.push(list1[i]);
                    }
                }

                result.reverse();

                return Bridge.fn.$build(result);
            }
        },

        sleep: function (ms, timeout) {
            if (Bridge.hasValue(timeout)) {
                ms = timeout.getTotalMilliseconds();
            }

            if (isNaN(ms) || ms < -1 || ms > 2147483647) {
                throw new System.ArgumentOutOfRangeException("timeout", "Number must be either non-negative and less than or equal to Int32.MaxValue or -1");
            }

            if (ms == -1) {
                ms = 2147483647;
            }

            var start = new Date().getTime();

            while ((new Date().getTime() - start) < ms) {
                if ((new Date().getTime() - start) > 2147483647) {
                    break;
                }
            }
        }
    };

    globals.Bridge = core;
    globals.Bridge.caller = [];

    globals.System = {};
    globals.System.Diagnostics = {};
    globals.System.Diagnostics.Contracts = {};
    globals.System.Threading = {};