    var base = {
        cache: {},

        _initialize: function () {
            if (this.$initialized) {
                return;
            }

            this.$initialized = Bridge.emptyFn;

            if (this.$staticInit) {
                this.$staticInit();
            }

            if (this.$initMembers) {
                this.$initMembers();
            }
        },

        initConfig: function (extend, base, config, statics, scope, prototype) {
            var initFn,
                name;

            if (config.fields) {
                for (name in config.fields) {
                    scope[name] = config.fields[name];
                }
            }

            if (config.properties) {
                for (name in config.properties) {
                    Bridge.property(scope, name, config.properties[name], statics);
                }
            }

            if (config.events) {
                for (name in config.events) {
                    Bridge.event(scope, name, config.events[name], statics);
                }
            }

            if (config.alias) {
                for (var i = 0; i < config.alias.length; i++) {
                    var m = scope[config.alias[i]];

                    if (m === undefined && prototype) {
                        m = prototype[config.alias[i]];
                    }

                    scope[config.alias[i + 1]] = m;
                    i++;
                }
            }

            if (config.init) {
                initFn = config.init;
            }

            if (initFn || (extend && !statics && base.$initMembers)) {
                scope.$initMembers = function () {
                    if (extend && !statics && base.$initMembers) {
                        base.$initMembers.call(this);
                    }

                    if (initFn) {
                        initFn.call(this);
                    }
                };
            }
        },

        definei: function (className, gscope, prop) {
            var c = Bridge.define(className, gscope, prop);
            c.$kind = "interface";

            return c;
        },

        // Create a new Class that inherits from this class
        define: function (className, gscope, prop, gCfg) {
            var isGenericInstance = false;

            if (prop === true) {
                isGenericInstance = true;
                prop = gscope;
                gscope = Bridge.global;
            } else if (!prop) {
                prop = gscope;
                gscope = Bridge.global;
            }

            var fn;

            if (Bridge.isFunction(prop)) {
                fn = function () {
                    var args = Array.prototype.slice.call(arguments),
                        name,
                        obj,
                        c;

                    name = Bridge.Class.genericName(className, args);
                    c = Bridge.Class.cache[name];

                    if (c) {
                        return c;
                    }

                    obj = prop.apply(null, args);
                    obj.$cacheName = name;
                    c = Bridge.define(name, obj, true, { fn: fn, args: args });

                    if (!Bridge.Class.staticInitAllow) {
                        Bridge.Class.$queue.push(c);
                    }

                    return Bridge.get(c);
                };

                return Bridge.Class.generic(className, gscope, fn, prop.length);
            }

            if (!isGenericInstance) {
                Bridge.Class.staticInitAllow = false;
            }

            prop = prop || {};

            var extend = prop.$inherits || prop.inherits,
                statics = prop.$statics || prop.statics,
                isEntryPoint = prop.$entryPoint,
                base,
                cacheName = prop.$cacheName,
                prototype,
                scope = prop.$scope || gscope || Bridge.global,
                i,
                v,
                isCtor,
                ctorName,
                name;

            prop.$kind = prop.$kind || "class";

            if (prop.$inherits) {
                delete prop.$inherits;
            } else {
                delete prop.inherits;
            }

            if (isEntryPoint) {
                delete prop.$entryPoint;
            }

            if (Bridge.isFunction(statics)) {
                statics = null;
            } else if (prop.$statics) {
                delete prop.$statics;
            } else {
                delete prop.statics;
            }

            if (prop.$cacheName) {
                delete prop.$cacheName;
            }

            var Class,
                cls = prop.hasOwnProperty("constructor") && prop.constructor || prop.$constructor;

            if (!cls) {
                Class = function () {
                    this.$initialize();
                    if (Class.$base) {
                        Class.$base.$constructor.call(this);
                    }
                };
                prop.constructor = Class;
            } else {
                Class = cls;
            }

            scope = Bridge.Class.set(scope, className, Class);

            if (cacheName) {
                Bridge.Class.cache[cacheName] = Class;
            }

            Class.$$name = className;
            Class.$kind = prop.$kind;

            if (gCfg && isGenericInstance) {
                Class.$genericTypeDefinition = gCfg.fn;
                Class.$typeArguments = gCfg.args;
                Class.$assembly = gCfg.fn.$assembly || Bridge.$currentAssembly;

                var result = Bridge.Reflection.getTypeFullName(gCfg.fn);
                for (i = 0; i < gCfg.args.length; i++) {
                    result += (i === 0 ? '[' : ',') + '[' + Bridge.Reflection.getTypeQName(gCfg.args[i]) + ']';
                }

                result += ']';

                Class.$$fullname = result;
            }

            if (extend && Bridge.isFunction(extend)) {
                extend = extend();
            }

            var interfaces = [];
            var baseInterfaces = [];
            if (extend) {
                for (var j = 0; j < extend.length; j++) {
                    var baseType = extend[j];
                    var baseI = (baseType.$interfaces || []).concat(baseType.$baseInterfaces || []);
                    if (baseI.length > 0) {
                        for (var k = 0; k < baseI.length; k++) {
                            if (baseInterfaces.indexOf(baseI[k]) < 0) {
                                baseInterfaces.push(baseI[k]);
                            }
                        }
                    }

                    if (extend[j].$kind === "interface") {
                        interfaces.push(extend[j]);
                    }
                }
            }

            Class.$baseInterfaces = baseInterfaces;
            Class.$interfaces = interfaces;
            var noBase = extend ? extend[0].$kind === "interface" : true;

            if (noBase) {
                extend = null;
            }

            base = extend ? extend[0].prototype : this.prototype;
            Class.$base = base;
            prototype = extend ? (extend[0].$$initCtor ? new extend[0].$$initCtor() : new extend[0]()) : new Object();

            Class.$$initCtor = function () {};
            Class.$$initCtor.prototype = prototype;
            Class.$$initCtor.prototype.constructor = Class;

            if (Class.$$fullname) {
                Class.$$initCtor.prototype.$$fullname = Class.$$fullname;
            }

            if (statics) {
                var staticsConfig = statics.$config || statics.config;

                if (staticsConfig && !Bridge.isFunction(staticsConfig)) {
                    Bridge.Class.initConfig(extend, base, staticsConfig, true, Class);

                    if (statics.$config) {
                        delete statics.$config;
                    } else {
                        delete statics.config;
                    }
                }
            }

            var instanceConfig = prop.$config || prop.config;

            if (instanceConfig && !Bridge.isFunction(instanceConfig)) {
                Bridge.Class.initConfig(extend, base, instanceConfig, false, prop, prototype);

                if (prop.$config) {
                    delete prop.$config;
                } else {
                    delete prop.config;
                }
            } else if (extend && base.$initMembers) {
                prop.$initMembers = function () {
                    base.$initMembers.call(this);
                };
            }

            prop.$initialize = Bridge.Class._initialize;

            var keys = [];

            for (name in prop) {
                keys.push(name);
            }

            for (i = 0; i < keys.length; i++) {
                name = keys[i];

                v = prop[name];
                isCtor = name === "constructor";
                ctorName = isCtor ? "$constructor" : name;

                if (Bridge.isFunction(v) && (isCtor || name.match("^\\$constructor") !== null)) {
                    isCtor = true;
                }

                if (isCtor) {
                    Class[ctorName] = prop[name];
                    Class[ctorName].prototype = prototype;
                    Class[ctorName].prototype.constructor = Class;
                    prototype[ctorName] = prop[name];
                } else {
                    prototype[ctorName] = prop[name];
                }
            }

            prototype.$$name = className;

            if (statics) {
                for (name in statics) {
                    Class[name] = statics[name];
                }
            }

            if (!extend) {
                extend = [Object].concat(interfaces);
            }

            Class.$$inherits = extend;

            for (i = 0; i < extend.length; i++) {
                scope = extend[i];

                if (!scope.$$inheritors) {
                    scope.$$inheritors = [];
                }

                scope.$$inheritors.push(Class);
            }

            fn = function () {
                if (Bridge.Class.staticInitAllow) {
                    Class.$staticInit = null;

                    if (Class.$initMembers) {
                        Class.$initMembers();
                    }

                    if (Class.constructor) {
                        Class.constructor();
                    }
                }
            };

            if (isEntryPoint) {
                Bridge.Class.$queueEntry.push(Class);
            }

            Class.$staticInit = fn;
            if (!isGenericInstance) {
                Bridge.Class.registerType(className, Class);
            }

            if (Bridge.Reflection) {
                Class.$getMetadata = Bridge.Reflection.getMetadata;
            }

            if (Class.$kind === "enum") {
                Class.instanceOf = function (instance) {
                     var utype = Class.prototype.$utype;
                     if (utype === System.String) {
                         return typeof (instance) == "string";
                     }

                     if (utype && utype.instanceOf) {
                         return utype.instanceOf(instance);
                     }

                     return typeof (instance) == "number";
                };
            }

            if (Class.$kind === "interface" && Class.prototype.$variance) {
                Class.isAssignableFrom = Bridge.Class.varianceAssignable;
            }

            return Class;
        },

        varianceAssignable: function (source) {
            var check = function (target, type) {
                if (type.$genericTypeDefinition === target.$genericTypeDefinition && type.$typeArguments.length === target.$typeArguments.length) {
                    for (var i = 0; i < target.$typeArguments.length; i++) {
                        var v = target.prototype.$variance[i], t = target.$typeArguments[i], s = type.$typeArguments[i];
                        switch (v) {
                            case 1: if (!Bridge.Reflection.isAssignableFrom(t, s)) return false; break;
                            case 2: if (!Bridge.Reflection.isAssignableFrom(s, t)) return false; break;
                            default: if (s !== t) return false;
                        }
                    }
                    return true;
                }
                return false;
            };

            if (source.$kind === "interface" && check(this, source)) {
                return true;
            }

            var ifs = Bridge.Reflection.getInterfaces(source);
            for (var i = 0; i < ifs.length; i++) {
                if (ifs[i] === this || check(this, ifs[i])) {
                    return true;
                }
            }
            return false;
        },

        registerType : function (className, cls) {
            if (Bridge.$currentAssembly) {
                Bridge.$currentAssembly.$types[className] = cls;
                cls.$assembly = Bridge.$currentAssembly;
            }
        },

        addExtend: function (cls, extend) {
            var i,
                scope;

            Array.prototype.push.apply(cls.$$inherits, extend);

            for (i = 0; i < extend.length; i++) {
                scope = extend[i];

                if (!scope.$$inheritors) {
                    scope.$$inheritors = [];
                }

                scope.$$inheritors.push(cls);
            }
        },

        set: function (scope, className, cls, noDefineProp) {
            var nameParts = className.split("."),
                name,
                key,
                exists,
                i;

            for (i = 0; i < (nameParts.length - 1); i++) {
                if (typeof scope[nameParts[i]] == "undefined") {
                    scope[nameParts[i]] = {};
                }

                scope = scope[nameParts[i]];
            }

            name = nameParts[nameParts.length - 1];
            exists = scope[name];

            if (exists) {
                if (exists.$$name === className) {
                    throw "Class '" + className + "' is already defined";
                }

                for (key in exists) {
                    var o = exists[key];

                    if (typeof o === "function" && o.$$name) {
                        (function (cls, key, o) {
                            Object.defineProperty(cls, key, {
                                get: function () {
                                    if (Bridge.Class.staticInitAllow) {
                                        if (o.$staticInit) {
                                            o.$staticInit();
                                        }

                                        Bridge.Class.defineProperty(cls, key, o);
                                    }

                                    return o;
                                },
                                set: function (newValue) {
                                    o = newValue;
                                },
                                enumerable: true,
                                configurable: true
                            });
                        })(cls, key, o);
                    }
                }
            }

            if (noDefineProp !== true) {
                (function (scope, name, cls) {
                    Object.defineProperty(scope, name, {
                        get: function () {
                            if (Bridge.Class.staticInitAllow) {
                                if (cls.$staticInit) {
                                    cls.$staticInit();
                                }

                                Bridge.Class.defineProperty(scope, name, cls);
                            }

                            return cls;
                        },
                        set: function (newValue) {
                            cls = newValue;
                        },
                        enumerable: true,
                        configurable: true
                    });
                })(scope, name, cls);
            } else {
                scope[name] = cls;
            }

            return scope;
        },

        defineProperty: function (scope, name, cls) {
            Object.defineProperty(scope, name, {
                value: cls,
                enumerable: true,
                configurable: true
            });
        },

        genericName: function (name, typeArguments) {
            var gName = name;
            for (var i = 0; i < typeArguments.length; i++) {
                var ta = typeArguments[i];
                gName += "$" + (ta.$$name || Bridge.getTypeName(ta));
            }

            return gName;
        },

        generic: function (className, scope, fn, length) {
            fn.$$name = className;
            fn.$kind = "class";

            Bridge.Class.set(scope, className, fn, true);
            Bridge.Class.registerType(className, fn);

            fn.$typeArgumentCount = length;
            fn.$isGenericTypeDefinition = true;
            fn.$getMetadata = Bridge.Reflection.getMetadata;

            return fn;
        },

        init: function (fn) {
            Bridge.Class.staticInitAllow = true;
            var queue = Bridge.Class.$queue.concat(Bridge.Class.$queueEntry);
            for (var i = 0; i < queue.length; i++) {
                var t = queue[i];

                if (t.$staticInit) {
                    t.$staticInit();
                }
            }
            Bridge.Class.$queue.length = 0;
            Bridge.Class.$queueEntry.length = 0;

            if (fn) {
                fn();
            }
        }
    };

    Bridge.Class = base;
    Bridge.Class.$queue = [];
    Bridge.Class.$queueEntry = [];
    Bridge.define = Bridge.Class.define;
    Bridge.definei = Bridge.Class.definei;
    Bridge.init = Bridge.Class.init;
