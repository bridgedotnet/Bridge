    var core = {
        global: globals,

        emptyFn: function () { },

        identity: function (x) {
            return x;
        },

        geti: function (scope, name1, name2) {
            if (Bridge.hasValue(scope[name1])) {
                return name1;
            }

            if (name2 && Bridge.hasValue(scope[name2])) {
                return name2;
            }

            var name = name2 || name1;
            var idx = name.lastIndexOf("$");

            if (/\$\d+$/g.test(name)) {
                idx = name.lastIndexOf("$", idx - 1);
            }

            return name.substr(idx + 1);
        },

        box: function (v, T, toStr, hashCode) {
            if (v && v.$boxed) {
                return v;
            }

            if (v == null) {
                return v;
            }

            if (v.$clone) {
                v = v.$clone();
            }

            return {
                $boxed: true,
                fn: {
                    toString: toStr,
                    getHashCode: hashCode
                },
                v: v,
                type: T,
                constructor: T,
                getHashCode: function() {
                    return this.fn.getHashCode ? this.fn.getHashCode(this.v) : Bridge.getHashCode(this.v);
                },
                equals: function (o) {
                    var eq = this.equals;
                    this.equals = null;
                    var r = Bridge.equals(this.v, o);
                    this.equals = eq;
                    return r;
                },
                valueOf: function() {
                    return this.v;
                },
                toString: function () {
                    return this.fn.toString ? this.fn.toString(this.v) : this.v.toString();
                }
            };
        },

        unbox: function (o, noclone) {
            if (o && o.$boxed) {
                var v = o.v;
                if (!noclone && v && v.$clone) {
                    v = v.$clone();
                }

                return v;
            }

            if (Bridge.isArray(o)) {
                var arr = [];
                for (var i = 0; i < o.length; i++) {
                    var item = o[i];

                    if (item && item.$boxed) {
                        item = item.v;

                        if (item.$clone) {
                            item = item.$clone();
                        }
                    }
                    else if (!noclone && item && item.$clone) {
                        item = item.$clone();
                    }

                    arr[i] = item;
                }
                o = arr;
            }

            if (o && !noclone && o.$clone) {
                o = o.$clone();
            }

            return o;
        },

        virtualc: function (name) {
            return Bridge.virtual(name, true);
        },

        virtual: function (name, isClass) {
            var type = Bridge.unroll(name);

            if (!type) {
                var old = Bridge.Class.staticInitAllow;
                type = isClass ? Bridge.define(name) : Bridge.definei(name);
                Bridge.Class.staticInitAllow = true;
                if (type.$staticInit) {
                    type.$staticInit();
                }
                Bridge.Class.staticInitAllow = old;
            }

            return type;
        },

        safe: function (fn) {
            try {
                return fn();
            } catch (ex) {
            }

            return false;
        },

        literal: function (type, obj) {
            obj.$getType = function () { return type };
            return obj;
        },

        isJSObject: function(value) {
            return Object.prototype.toString.call(value) === '[object Object]';
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

        ensureBaseProperty: function (scope, name) {
            var scopeType = Bridge.getType(scope),
                descriptors = scopeType.$descriptors || [];

            descriptors.$propMap = descriptors.$propMap || {};

            if (descriptors.$propMap[name]) {
                return scope;
            }

            for (var j = 0; j < descriptors.length; j++) {
                var d = descriptors[j];
                if (d.name === name) {
                    var aliasCfg = {},
                        aliasName = "$" + Bridge.getTypeAlias(d.cls) + "$" + name;

                    if (d.get) {
                        aliasCfg.get = d.get;
                    }

                    if (d.set) {
                        aliasCfg.set = d.set;
                    }
                    Bridge.property(scope, aliasName, aliasCfg, false, scopeType, true);
                }
            }

            descriptors.$propMap[name] = true;

            return scope;
        },

        property: function (scope, name, v, statics, cls, alias) {
            var cfg = {
                enumerable: alias ? false : true,
                configurable: true
            };

            if (v && v.get) {
                cfg.get = v.get;
            }

            if (v && v.set) {
                cfg.set = v.set;
            }

            if (!v || !(v.get || v.set)) {
                var backingField = Bridge.getTypeAlias(cls) + "$" + name;

                cls.$init = cls.$init || {};
                if (statics) {
                    cls.$init[backingField] = v;
                }

                (function (cfg, scope, backingField, v) {
                    cfg.get = function () {
                        var o = this.$init[backingField];
                        return o === undefined ? v : o;
                    };

                    cfg.set = function (value) {
                        this.$init[backingField] = value;
                    };
                })(cfg, scope, backingField, v);
            }

            Object.defineProperty(scope, name, cfg);

            return cfg;
        },

        event: function (scope, name, v, statics) {
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

            scope[addName] = (function (name, scope, statics) {
                return statics ? function (value) {
                    scope[name] = Bridge.fn.combine(scope[name], value);
                } : function (value) {
                    this[name] = Bridge.fn.combine(this[name], value);
                };
            })(name, scope, statics);

            scope[removeName] = (function (name, scope, statics) {
                return statics ? function (value) {
                    scope[name] = Bridge.fn.remove(scope[name], value);
                } : function (value) {
                    this[name] = Bridge.fn.remove(this[name], value);
                };
            })(name, scope, statics);
        },

        createInstance: function (type, args) {
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

            if (typeof (type.createInstance) === 'function') {
                return type.createInstance();
            } else if (typeof (type.getDefaultValue) === 'function') {
                return type.getDefaultValue();
            } else if (type === Boolean || type === System.Boolean) {
                return false;
            } else if (type === System.DateTime) {
                return System.DateTime.getDefaultValue();
            } else if (type === Date) {
                return new Date();
            } else if (type === Number) {
                return 0;
            } else if (type === String || type === System.String) {
                return '';
            } else if (type && type.$literal) {
                return type.ctor();
            } else if (args && args.length > 0) {
                return Bridge.Reflection.applyConstructor(type, args);
            } else {
                return new type();
            }
        },

        clone: function (obj) {
            if (obj == null) {
                return obj;
            }

            if (Bridge.isArray(obj)) {
                return System.Array.clone(obj);
            }

            if (Bridge.isString(obj)) {
                return obj;
            }

            var name;

            if (Bridge.isFunction(obj[name = "System$ICloneable$clone"])) {
                return obj[name]();
            }

            if (Bridge.is(obj, System.ICloneable)) {
                return obj.clone();
            }

            if (Bridge.isFunction(obj.$clone)) {
                return obj.$clone();
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

        addHash: function (v, r, m) {
            if (isNaN(r)) {
                r = 17;
            }

            if (isNaN(m)) {
                m = 23;
            }

            if (Bridge.isArray(v)) {
                for (var i = 0; i < v.length; i++) {
                    r = r + ((r * m | 0) + (v[i] == null ? 0 : Bridge.getHashCode(v[i]))) | 0;
                }

                return r;
            }

            return r = r + ((r * m | 0) + (v == null ? 0 : Bridge.getHashCode(v))) | 0;
        },

        getHashCode: function (value, safe, deep) {
            // In CLR: mutable object should keep on returning same value
            // Bridge.NET goals: make it deterministic (to make testing easier) without breaking CLR contracts
            //     for value types it returns deterministic values (f.e. for int 3 it returns 3)
            //     for reference types it returns random value

            if (value && value.$boxed && value.type.getHashCode) {
                return value.type.getHashCode(Bridge.unbox(value, true));
            }

            value = Bridge.unbox(value, true);

            if (Bridge.isEmpty(value, true)) {
                if (safe) {
                    return 0;
                }

                throw new System.InvalidOperationException("HashCode cannot be calculated for empty value");
            }

            if (deep !== false && value.hasOwnProperty("item1") && Bridge.isPlainObject(value)) {
                deep = true;
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

            if (value === Number.POSITIVE_INFINITY) {
                return 0x7FF00000;
            }

            if (value === Number.NEGATIVE_INFINITY) {
                return 0xFFF00000;
            }

            if (Bridge.isNumber(value)) {
                if (Math.floor(value) === value) {
                    return value;
                }

                value = value.toExponential();
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

            if (deep && typeof value == "object") {
                var result = 0,
                    temp;

                for (var property in value) {
                    if (value.hasOwnProperty(property)) {
                        temp = Bridge.isEmpty(value[property], true) ? 0 : Bridge.getHashCode(value[property]);
                        result = 29 * result + temp;
                    }
                }

                if (result !== 0) {
                    value.$$hashCode = result;

                    return result;
                }
            }

            value.$$hashCode = (Math.random() * 0x100000000) | 0;

            return value.$$hashCode;
        },

        getDefaultValue: function (type) {
            if (type == null) {
                throw new System.ArgumentNullException("type");
            } else if ((type.getDefaultValue) && type.getDefaultValue.length === 0) {
                return type.getDefaultValue();
            } else if (Bridge.Reflection.isEnum(type)) {
                return System.Enum.parse(type, 0);
            } else if (type === Boolean || type === System.Boolean) {
                return false;
            } else if (type === System.DateTime) {
                return System.DateTime.getDefaultValue();
            } else if (type === Date) {
                return new Date();
            } else if (type === Number) {
                return 0;
            }

            return null;
        },

        $$aliasCache: [],

        getTypeAlias: function (obj) {
            if (obj.$$alias) {
                return obj.$$alias;
            }

            var type = (obj.$$name || typeof obj === "function") ? obj : Bridge.getType(obj),
                alias;

            if (type.$$alias) {
                return type.$$alias;
            }

            alias = Bridge.$$aliasCache[type];
            if (alias) {
                return alias;
            }

            if (type.$isArray) {
                var elementName = Bridge.getTypeAlias(type.$elementType);
                alias = elementName + "$Array" + (type.$rank > 1 ? ("$" + type.$rank) : "");
                if (type.$$name) {
                    type.$$alias = alias;
                } else {
                    Bridge.$$aliasCache[type] = alias;
                }
                return alias;
            }

            var name = obj.$$name || Bridge.getTypeName(obj);

            alias = name.replace(/[\.\(\)\,]/g, "$");
            if (type.$$name) {
                type.$$alias = alias;
            } else {
                Bridge.$$aliasCache[type] = alias;
            }
            return alias;
        },

        getTypeName: function (obj) {
            return Bridge.Reflection.getTypeFullName(obj);
        },

        hasValue: function (obj) {
            return Bridge.unbox(obj, true) != null;
        },

        hasValue$1: function () {
            if (arguments.length === 0) {
                return false;
            }

            var i = 0;

            for (i; i < arguments.length; i++) {
                if (Bridge.unbox(arguments[i], true) == null) {
                    return false;
                }
            }

            return true;
        },

        isObject: function(type) {
            return type === Object || type === System.Object;
        },

        is: function (obj, type, ignoreFn, allowNull) {
            if (obj == null) {
                return !!allowNull;
            }

            if (type === System.Object) {
                type = Object;
            }

            var tt = typeof type;

            if (tt === "boolean") {
                return type;
            }

            if (obj.$boxed) {
                if (obj.type.$kind === "enum" && (obj.type.prototype.$utype === type || type === System.Enum || type === System.IFormattable || type === System.IComparable)) {
                    return true;
                }
                else if (type.$kind !== "interface" && !type.$nullable) {
                    return obj.type === type || Bridge.isObject(type);
                }

                if (ignoreFn !== true && type.$is) {
                    return type.$is(Bridge.unbox(obj, true));
                }

                if (Bridge.Reflection.isAssignableFrom(type, obj.type)) {
                    return true;
                }

                obj = Bridge.unbox(obj, true);
            }

            var ctor = obj.constructor;
            if (type.constructor === Function && obj instanceof type || ctor === type) {
                return true;
            }

            var hasObjKind = ctor.$kind || ctor.$$inherits,
                hasTypeKind = type.$kind;
            if (hasObjKind || hasTypeKind) {
                var isInterface = type.$isInterface;

                if (isInterface) {
                    if (hasObjKind) {
                        if (ctor.$isArrayEnumerator) {
                            return System.Array.is(obj, type);
                        }

                        return type.isAssignableFrom ? type.isAssignableFrom(ctor) : Bridge.Reflection.getInterfaces(ctor).indexOf(type) >= 0;
                    }

                    if (Bridge.isArray(obj, ctor)) {
                        return System.Array.is(obj, type);
                    }
                }

                if (ignoreFn !== true && type.$is) {
                    return type.$is(obj);
                }

                if (type.$literal) {
                    if (Bridge.isPlainObject(obj)) {
                        if (obj.$getType) {
                            return Bridge.Reflection.isAssignableFrom(type, obj.$getType());
                        }

                        return true;
                    }
                }

                return false;
            }

            if (tt === "string") {
                type = Bridge.unroll(type);
            }

            if (tt === "function" && (Bridge.getType(obj).prototype instanceof type)) {
                return true;
            }

            if (ignoreFn !== true) {
                if (typeof (type.$is) === "function") {
                    return type.$is(obj);
                }

                if (typeof (type.isAssignableFrom) === "function") {
                    return type.isAssignableFrom(Bridge.getType(obj));
                }
            }

            if (Bridge.isArray(obj)) {
                return System.Array.is(obj, type);
            }

            return tt === "object" && ((ctor === type) || (obj instanceof type));
        },

        as: function (obj, type, allowNull) {
            if (Bridge.is(obj, type, false, allowNull)) {
                return obj.$boxed && type !== Object && type !== System.Object ? obj.v : obj;
            }
            return null;
        },

        cast: function (obj, type, allowNull) {
            if (obj == null) {
                return obj;
            }

            var result = Bridge.is(obj, type, false, allowNull) ? obj : null;

            if (result === null) {
                throw new System.InvalidCastException("Unable to cast type " + (obj ? Bridge.getTypeName(obj) : "'null'") + " to type " + Bridge.getTypeName(type));
            }

            if (obj.$boxed && type !== Object && type !== System.Object) {
                return obj.v;
            }

            return result;
        },

        apply: function (obj, values, callback) {
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

            if (callback) {
                callback.call(obj, obj);
            }

            return obj;
        },

        merge: function (to, from, callback, elemFactory) {
            if (to == null) {
                return from;
            }

            // Maps instance of plain JS value or Object into Bridge object.
            // Used for deserialization. Proper deserialization requires reflection that is currently not supported in Bridge.
            // It currently is only capable to deserialize:
            // -instance of single class or primitive
            // -array of primitives
            // -array of single class
            if (to instanceof System.Decimal && typeof from === "number") {
                return new System.Decimal(from);
            }

            if (to instanceof System.Int64 && Bridge.isNumber(from)) {
                return new System.Int64(from);
            }

            if (to instanceof System.UInt64 && Bridge.isNumber(from)) {
                return new System.UInt64(from);
            }

            if (to instanceof Boolean || Bridge.isBoolean(to) ||
                typeof to === "number" ||
                to instanceof String || Bridge.isString(to) ||
                to instanceof Function || Bridge.isFunction(to) ||
                to instanceof Date || Bridge.isDate(to) ||
                Bridge.getType(to).$number) {
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
                var t = Bridge.getType(to),
					descriptors = t && t.$descriptors;

                if (from) {
                    for (key in from) {
                        value = from[key];

                        var descriptor = null;
                        if (descriptors) {
                            for (var i = descriptors.length - 1; i >= 0; i--) {
                                if (descriptors[i].name === key) {
                                    descriptor = descriptors[i];
                                    break;
                                }
                            }
                        }

                        if (descriptor != null) {
                            if (descriptor.set) {
                                to[key] = Bridge.merge(to[key], value);
                            } else {
                                Bridge.merge(to[key], value);
                            }
                        } else if (typeof to[key] === "function") {
                            if (key.match(/^\s*get[A-Z]/)) {
                                Bridge.merge(to[key](), value);
                            } else {
                                to[key](value);
                            }
                        } else {
                            var setter1 = "set" + key.charAt(0).toUpperCase() + key.slice(1),
                                setter2 = "set" + key,
                                getter;

                            if (typeof to[setter1] === "function" && typeof value !== "function") {
                                getter = "g" + setter1.slice(1);
                                if (typeof to[getter] === "function") {
                                    to[setter1](Bridge.merge(to[getter](), value));
                                } else {
                                    to[setter1](value);
                                }
                            } else if (typeof to[setter2] === "function" && typeof value !== "function") {
                                getter = "g" + setter2.slice(1);
                                if (typeof to[getter] === "function") {
                                    to[setter2](Bridge.merge(to[getter](), value));
                                } else {
                                    to[setter2](value);
                                }
                            } else if (value && value.constructor === Object && to[key]) {
                                toValue = to[key];
                                Bridge.merge(toValue, value);
                            } else {
                                var isNumber = Bridge.isNumber(from);

                                if (to[key] instanceof System.Decimal && isNumber) {
                                    return new System.Decimal(from);
                                }

                                if (to[key] instanceof System.Int64 && isNumber) {
                                    return new System.Int64(from);
                                }

                                if (to[key] instanceof System.UInt64 && isNumber) {
                                    return new System.UInt64(from);
                                }

                                to[key] = value;
                            }
                        }
                    }
                } else {
                    if (callback) {
                        callback.call(to, to);
                    }
                    return from;
                }
            }

            if (callback) {
                callback.call(to, to);
            }

            return to;
        },

        getEnumerator: function (obj, fnName, T) {
            if (typeof obj === "string") {
                obj = System.String.toCharArray(obj);
            }

            if (arguments.length === 2 && Bridge.isFunction(fnName)) {
                T = fnName;
                fnName = null;
            }

            if (fnName && obj && obj[fnName]) {
                return obj[fnName].call(obj);
            }

            if (!T && obj && obj.getEnumerator) {
                return obj.getEnumerator();
            }

            var name;

            if (T && Bridge.isFunction(obj[name = "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator"])) {
                return obj[name]();
            }

            if (T && Bridge.isFunction(obj[name = "System$Collections$Generic$IEnumerable$1$getEnumerator"])) {
                return obj[name]();
            }

            if (Bridge.isFunction(obj[name = "System$Collections$IEnumerable$getEnumerator"])) {
                return obj[name]();
            }

            if (T && obj && obj.getEnumerator) {
                return obj.getEnumerator();
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
                    item = i.Current;
                    result.push(item);
                }
            }

            return result;
        },

        toList: function (ienumerable, T) {
            return new (System.Collections.Generic.List$1(T || System.Object))(ienumerable);
        },

        arrayTypes: [globals.Array, globals.Uint8Array, globals.Int8Array, globals.Int16Array, globals.Uint16Array, globals.Int32Array, globals.Uint32Array, globals.Float32Array, globals.Float64Array, globals.Uint8ClampedArray],

        isArray: function (obj, ctor) {
            var c = ctor || (obj != null ? obj.constructor : null);

            if (!c) {
                return false;
            }

            return Bridge.arrayTypes.indexOf(c) >= 0 || c.$isArray || Array.isArray(obj);
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

            if (a && a.$boxed && a.type.equals && a.type.equals.length === 2) {
                return a.type.equals(a, b);
            }

            if (b && b.$boxed && b.type.equals && b.type.equals.length === 2) {
                return b.type.equals(b, a);
            }

            if (a && Bridge.isFunction(a.equals) && a.equals.length === 1) {
                return a.equals(b);
            }

            if (b && Bridge.isFunction(b.equals) && b.equals.length === 1) {
                return b.equals(a);
            } if (Bridge.isFunction(a) && Bridge.isFunction(b)) {
                return Bridge.fn.equals.call(a, b);
            } else if (Bridge.isDate(a) && Bridge.isDate(b)) {
                return a.valueOf() === b.valueOf();
            } else if (Bridge.isNull(a) && Bridge.isNull(b)) {
                return true;
            } else if (Bridge.isNull(a) !== Bridge.isNull(b)) {
                return false;
            }

            var eq = a === b;

            if (!eq && typeof a === "object" && typeof b === "object" && a !== null && b !== null && a.$kind === "struct" && b.$kind === "struct" && a.$$name === b.$$name) {
                return Bridge.getHashCode(a) === Bridge.getHashCode(b) && Bridge.objectEquals(a, b);
            }

            if (!eq && a && b && a.hasOwnProperty("item1") && Bridge.isPlainObject(a) && b.hasOwnProperty("item1") && Bridge.isPlainObject(b)) {
                return Bridge.objectEquals(a, b);
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

        numberCompare : function (a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            if (a == b) {
                return 0;
            }
            if (!isNaN(a)) {
                return 1;
            }
            if (!isNaN(b)) {
                return -1;
            }
            return 0;
        },

        compare: function (a, b, safe, T) {
            if (a && a.$boxed) {
                a = Bridge.unbox(a, true);
            }

            if (b && b.$boxed) {
                b = Bridge.unbox(b, true);
            }

            if (typeof a === "number" && typeof b === "number") {
                return Bridge.numberCompare(a, b);
            }

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

            if (T && Bridge.isFunction(a[name = "System$IComparable$1$compareTo"])) {
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

            if (T && Bridge.isFunction(b[name = "System$IComparable$1$compareTo"])) {
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
            if (a && a.$boxed && a.type.equalsT && a.type.equalsT.length === 2) {
                return a.type.equalsT(a, b);
            }

            if (b && b.$boxed && b.type.equalsT && b.type.equalsT.length === 2) {
                return b.type.equalsT(b, a);
            }

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

            if (Bridge.isFunction(a) && Bridge.isFunction(b)) {
                return Bridge.fn.equals.call(a, b);
            }

            return a.equalsT ? a.equalsT(b) : b.equalsT(a);
        },

        format: function (obj, formatString, provider) {
            if (obj && obj.$boxed) {
                if (obj.type.$kind === "enum") {
                    return System.Enum.format(obj.type, obj.v, formatString);
                } else if (obj.type === System.Char) {
                    return System.Char.format(Bridge.unbox(obj, true), formatString, provider);
                } else if (obj.type.format) {
                    return obj.type.format(Bridge.unbox(obj, true), formatString, provider);
                }
            }

            if (Bridge.isNumber(obj)) {
                return Bridge.Int.format(obj, formatString, provider);
            } else if (Bridge.isDate(obj)) {
                return System.DateTime.format(obj, formatString, provider);
            }

            var name;

            if (Bridge.isFunction(obj[name = "System$IFormattable$format"])) {
                return obj[name](formatString, provider);
            }

            return obj.format(formatString, provider);
        },

        getType: function (instance, T) {
            if (instance && instance.$boxed) {
                return instance.type;
            }

            if (instance == null) {
                throw new System.NullReferenceException("instance is null");
            }

            if (T) {
                var type = Bridge.getType(instance);
                return Bridge.Reflection.isAssignableFrom(T, type) ? type : T;
            }

            if (typeof (instance) === "number") {
                if (!isNaN(instance) && isFinite(instance) && Math.floor(instance, 0) === instance) {
                    return System.Int32;
                } else {
                    return System.Double;
                }
            }

            if (instance.$type) {
                return instance.$type;
            }

            if (instance.$getType) {
                return instance.$getType();
            }

            var result = null;
            try {
                result = instance.constructor;
            } catch (ex) {
                result = Object;
            }

            return Bridge.Reflection.convertType(result);
        },

        isLower: function (c) {
            var s = String.fromCharCode(c);

            return s === s.toLowerCase() && s !== s.toUpperCase();
        },

        isUpper: function (c) {
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

                return this.equals && (this.equals === fn.equals) && this.$method && (this.$method === fn.$method) && this.$scope && (this.$scope === fn.$scope);
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

            cacheBind: function (obj, method, args, appendArgs) {
                return Bridge.fn.bind(obj, method, args, appendArgs, true);
            },

            bind: function (obj, method, args, appendArgs, cache) {
                if (method && method.$method === method && method.$scope === obj) {
                    return method;
                }

                if (obj && cache && obj.$$bind) {
                    for (var i = 0; i < obj.$$bind.length; i++) {
                        if (obj.$$bind[i].$method === method) {
                            return obj.$$bind[i];
                        }
                    }
                }

                var fn;

                if (arguments.length === 2) {
                    fn = Bridge.fn.makeFn(function () {
                        Bridge.caller.unshift(this);

                        var result = null;
                        try {
                            result = method.apply(obj, arguments);
                        } finally {
                            Bridge.caller.shift(this);
                        }

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

                        var result = null;
                        try {
                            result = method.apply(obj, callArgs);
                        } finally {
                            Bridge.caller.shift(this);
                        }

                        return result;
                    }, method.length);
                }

                if (obj && cache) {
                    obj.$$bind = obj.$$bind || [];
                    obj.$$bind.push(fn);
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

                    var result = null;
                    try {
                        result = method.apply(obj, callArgs);
                    } finally {
                        Bridge.caller.shift(this);
                    }

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
        },

        getMetadata: function (t) {
            var m = t.$getMetadata ? t.$getMetadata() : t.$metadata;

            return m;
        },

        loadModule: function (config, callback) {
            var amd = config.amd,
                cjs = config.cjs,
                fnName = config.fn;

            var tcs = new System.Threading.Tasks.TaskCompletionSource(),
                fn = Bridge.global[fnName || "require"];

            if (amd && amd.length > 0) {
                fn(amd, function() {
                    var loads = Array.prototype.slice.call(arguments, 0);
                    if (cjs && cjs.length > 0) {
                        for (var i = 0; i < cjs.length; i++) {
                            loads.push(fn(cjs[i]));
                        }
                    }

                    callback.apply(Bridge.global, loads);
                    tcs.setResult();
                });
            } else if (cjs && cjs.length > 0) {
                var t = new System.Threading.Tasks.Task();
                t.status = System.Threading.Tasks.TaskStatus.ranToCompletion;

                var loads = [];
                for (var j = 0; j < cjs.length; j++) {
                    loads.push(fn(cjs[j]));
                }

                callback.apply(Bridge.global, loads);
                return t;
            } else {
                var t = new System.Threading.Tasks.Task();
                t.status = System.Threading.Tasks.TaskStatus.ranToCompletion;
                return t;
            }

            return tcs.task;
        }
    };

    globals.Bridge = core;
    globals.Bridge.caller = [];

    if (globals.console) {
        globals.Bridge.Console = globals.console;
    }

    globals.System = {};
    globals.System.Diagnostics = {};
    globals.System.Diagnostics.Contracts = {};
    globals.System.Threading = {};
