        var base = {
        _initialize: function () {
            if (this.$init) {
                return;
            }

            this.$init = {};

            if (this.$staticInit) {
                this.$staticInit();
            }

            if (this.$initMembers) {
                this.$initMembers();
            }
        },

        initConfig: function (extend, base, config, statics, scope, prototype) {
            var initFn,
                name,
                cls = (statics ? scope : scope.ctor),
                descriptors = cls.$descriptors,
                aliases = cls.$aliases;

            if (config.fields) {
                for (name in config.fields) {
                    scope[name] = config.fields[name];
                }
            }

            var props = config.properties;
            if (props) {
                for (name in props) {
                    var cfg = Bridge.property(statics ? scope : prototype, name, props[name], statics, cls);

                    cfg.name = name;
                    cfg.cls = cls;

                    descriptors.push(cfg);
                }
            }

            if (config.events) {
                for (name in config.events) {
                    Bridge.event(scope, name, config.events[name], statics);
                }
            }

            if (config.alias) {
                for (var i = 0; i < config.alias.length; i++) {
                    (function (obj, name, alias, cls) {
                        var descriptor = null;
                        for (var i = descriptors.length - 1; i >= 0; i--) {
                            if (descriptors[i].name === name) {
                                descriptor = descriptors[i];
                                break;
                            }
                        }

                        var arr = Array.isArray(alias) ? alias : [alias];
                        for (var j = 0; j < arr.length; j++) {
                            alias = arr[j];

                            if (descriptor != null) {
                                Object.defineProperty(obj, alias, descriptor);
                                aliases.push({ alias: alias, descriptor: descriptor });
                            } else {
                                var m = scope[name];

                                if (m === undefined && prototype) {
                                    m = prototype[name];
                                }

                                scope[alias] = m;
                                aliases.push({ fn: name, alias: alias });
                            }
                        }
                    })(statics ? scope : prototype, config.alias[i], config.alias[i + 1], cls);

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

        convertScheme: function(obj) {
            var result = {},
            copy = function (obj, to) {
                var reserved = ["fields", "methods", "events", "props", "properties", "alias", "ctors"],
                    keys = Object.keys(obj);

                for (var i = 0; i < keys.length; i++) {
                    var name = keys[i];
                    if (reserved.indexOf(name) === -1) {
                        to[name] = obj[name];
                    }
                }

                if (obj.fields) {
                    Bridge.apply(to, obj.fields);
                }

                if (obj.methods) {
                    Bridge.apply(to, obj.methods);
                }

                var config = {};
                if (obj.props) {
                    config.properties = obj.props;
                }
                else if (obj.properties) {
                    config.properties = obj.properties;
                }

                if (obj.events) {
                    config.events = obj.events;
                }

                if (obj.alias) {
                    config.alias = obj.alias;
                }

                if (obj.ctors) {
                    if (obj.ctors.init) {
                        config.init = obj.ctors.init;
                        delete obj.ctors.init;
                    }

                    Bridge.apply(to, obj.ctors);
                }

                to.$config = config;
            };

            if (obj.main) {
                result.$main = obj.main;
                delete obj.main;
            }

            copy(obj, result);

            if (obj.statics || obj.$statics) {
                result.$statics = {};
                copy(obj.statics || obj.$statics, result.$statics);
            }

            return result;
        },

        definei: function (className, gscope, prop) {
            if ((prop === true || !prop) && gscope) {
                gscope.$kind = "interface";
            } else if (prop) {
                prop.$kind = "interface";
            } else {
                gscope = { $kind: "interface" };
            }

            var c = Bridge.define(className, gscope, prop);

            c.$kind = "interface";
            c.$isInterface = true;

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
                    var args,
                        key,
                        obj,
                        c;

                    key = Bridge.Class.getCachedType(fn, arguments);

                    if (key) {
                        return key.type;
                    }

                    args = Array.prototype.slice.call(arguments);
                    obj = prop.apply(null, args);
                    c = Bridge.define(Bridge.Class.genericName(className, args), obj, true, { fn: fn, args: args });

                    if (!Bridge.Class.staticInitAllow) {
                        Bridge.Class.$queue.push(c);
                    }

                    return Bridge.get(c);
                };

                fn.$cache = [];

                return Bridge.Class.generic(className, gscope, fn, prop);
            }

            if (!isGenericInstance) {
                Bridge.Class.staticInitAllow = false;
            }

            prop = prop || {};

            if (prop.$kind === "enum" && !prop.inherits) {
                prop.inherits = [System.IComparable, System.IFormattable];
            }

            var rNames = ["fields", "events", "props", "ctors", "methods"],
                defaultScheme = Bridge.isFunction(prop.main) ? 0 : 1,
                check = function (scope) {
                    if (scope.config && Bridge.isPlainObject(scope.config) ||
                        scope.$main && Bridge.isFunction(scope.$main) ||
                        scope.hasOwnProperty("ctor") && Bridge.isFunction(scope.ctor)) {
                        defaultScheme = 1;
                        return false;
                    }

                    if (scope.alias && Bridge.isArray(scope.alias) && scope.alias.length > 0 && scope.alias.length % 2 === 0) {
                        return true;
                    }

                    for (var j = 0; j < rNames.length; j++) {
                        if (scope[rNames[j]] && Bridge.isPlainObject(scope[rNames[j]])) {
                            return true;
                        }
                    }
                    return false;
                },
                alternateScheme = check(prop);

            if (!alternateScheme && prop.statics) {
                alternateScheme = check(prop.statics);
            }

            if (!alternateScheme) {
                alternateScheme = defaultScheme == 0;
            }

            if (alternateScheme) {
                prop = Bridge.Class.convertScheme(prop);
            }

            var extend = prop.$inherits || prop.inherits,
                statics = prop.$statics || prop.statics,
                isEntryPoint = prop.$entryPoint,
                base,
                prototype,
                scope = prop.$scope || gscope || Bridge.global,
                objectType = Bridge.global.System && Bridge.global.System.Object || Object,
                i,
                v,
                isCtor,
                ctorName,
                name,
                registerT = true;

            prop.$kind = prop.$kind || "class";

            if (prop.$noRegister === true) {
                registerT = false;
                delete prop.$noRegister;
            }

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

            var Class,
                cls = prop.hasOwnProperty("ctor") && prop.ctor;

            if (!cls) {
                if (prop.$literal) {
                    Class = function (obj) {
                        obj = obj || {};
                        obj.$getType = function () { return Class };
                        return obj;
                    };
                } else {
                    Class = function () {
                        this.$initialize();
                        if (Class.$base) {
                            if (Class.$$inherits && Class.$$inherits.length > 0 && Class.$$inherits[0].$staticInit) {
                                Class.$$inherits[0].$staticInit();
                            }
                            Class.$base.ctor.call(this);
                        }
                    };
                }

                prop.ctor = Class;
            } else {
                Class = cls;
            }

            if (prop.$literal) {
                if ((!statics || !statics.getDefaultValue)) {
                    Class.getDefaultValue = function() {
                        var obj = {};
                        obj.$getType = function() { return Class };
                        return obj;
                    };
                }

                Class.$literal = true;
                delete prop.$literal;
            }

            if (!isGenericInstance && registerT) {
                scope = Bridge.Class.set(scope, className, Class);
            }

            if (gCfg) {
                gCfg.fn.$cache.push({ type: Class, args: gCfg.args });
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
            } else {
                Class.$$fullname = Class.$$name;
            }

            if (extend && Bridge.isFunction(extend)) {
                extend = extend();
            }

            Bridge.Class.createInheritors(Class, extend);

            var noBase = extend ? extend[0].$kind === "interface" : true;

            if (noBase) {
                extend = null;
            }

            base = extend ? extend[0].prototype : this.prototype;
            Class.$base = base;
            prototype = extend ? (extend[0].$$initCtor ? new extend[0].$$initCtor() : new extend[0]()) : (objectType.$$initCtor ? new objectType.$$initCtor() : new objectType());

            Class.$$initCtor = function () { };
            Class.$$initCtor.prototype = prototype;
            Class.$$initCtor.prototype.constructor = Class;
            Class.$$initCtor.prototype.$$fullname = gCfg && isGenericInstance ? Class.$$fullname : Class.$$name;

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
                isCtor = name === "ctor";
                ctorName = name;

                if (Bridge.isFunction(v) && (isCtor || name.match("^\\$ctor") !== null)) {
                    isCtor = true;
                }

                var member = prop[name];
                if (isCtor) {
                    Class[ctorName] = member;
                    Class[ctorName].prototype = prototype;
                    Class[ctorName].prototype.constructor = Class;
                    prototype[ctorName] = member;
                } else {
                    prototype[ctorName] = member;
                }
            }

            prototype.$$name = className;

            if (!prototype.toJSON) {
                prototype.toJSON = Bridge.Class.toJSON;
            }

            if (statics) {
                for (name in statics) {
                    var member = statics[name];
                    if (name === "ctor") {
                        Class["$ctor"] = member;
                    } else {
                        Class[name] = member;
                    }
                }
            }

            if (!extend) {
                extend = [objectType].concat(Class.$interfaces);
            }

            Bridge.Class.setInheritors(Class, extend);

            fn = function () {
                if (Bridge.Class.staticInitAllow) {
                    Class.$staticInit = null;

                    if (Class.$initMembers) {
                        Class.$initMembers();
                    }

                    if (Class.$ctor) {
                        Class.$ctor();
                    }
                }
            };

            if (isEntryPoint || Bridge.isFunction(prototype.$main)) {
                if (prototype.$main) {
                    var entryName = prototype.$main.name || "Main";
                    if (!Class[entryName]) {
                        Class[entryName] = prototype.$main;
                    }
                }

                Bridge.Class.$queueEntry.push(Class);
            }

            Class.$staticInit = fn;

            if (!isGenericInstance && registerT) {
                Bridge.Class.registerType(className, Class);
            }

            if (Bridge.Reflection) {
                Class.$getMetadata = Bridge.Reflection.getMetadata;
            }

            if (Class.$kind === "enum") {
                if (!Class.prototype.$utype) {
                    Class.prototype.$utype = System.Int32;
                }
                Class.$is = function (instance) {
                    var utype = Class.prototype.$utype;

                    if (utype === String) {
                        return typeof (instance) == "string";
                    }

                    if (utype && utype.$is) {
                        return utype.$is(instance);
                    }

                    return typeof (instance) == "number";
                };

                Class.getDefaultValue = function () {
                    var utype = Class.prototype.$utype;

                    if (utype === String || utype === System.String) {
                        return null;
                    }

                    return 0;
                };
            }

            if (Class.$kind === "interface") {
                if (Class.prototype.$variance) {
                    Class.isAssignableFrom = Bridge.Class.varianceAssignable;
                }

                Class.$isInterface = true;
            }

            return Class;
        },

        toCtorString: function() {
            return Bridge.Reflection.getTypeName(this);
        },

        createInheritors: function(cls, extend) {
            var interfaces = [],
                baseInterfaces = [],
                descriptors = [],
                aliases = [];

            if (extend) {
                for (var j = 0; j < extend.length; j++) {
                    var baseType = extend[j],
                        baseI = (baseType.$interfaces || []).concat(baseType.$baseInterfaces || []),
                        baseDescriptors = baseType.$descriptors,
                        baseAliases = baseType.$aliases;

                    if (baseDescriptors && baseDescriptors.length > 0) {
                        for (var d = 0; d < baseDescriptors.length; d++) {
                            descriptors.push(baseDescriptors[d]);
                        }
                    }

                    if (baseAliases && baseAliases.length > 0) {
                        for (var d = 0; d < baseAliases.length; d++) {
                            aliases.push(baseAliases[d]);
                        }
                    }

                    if (baseI.length > 0) {
                        for (var k = 0; k < baseI.length; k++) {
                            if (baseInterfaces.indexOf(baseI[k]) < 0) {
                                baseInterfaces.push(baseI[k]);
                            }
                        }
                    }

                    if (baseType.$kind === "interface") {
                        interfaces.push(baseType);
                    }
                }
            }

            cls.$descriptors = descriptors;
            cls.$aliases = aliases;
            cls.$baseInterfaces = baseInterfaces;
            cls.$interfaces = interfaces;
            cls.$allInterfaces = interfaces.concat(baseInterfaces);
        },

        toJSON: function () {
            var obj = {},
                t = Bridge.getType(this),
                descriptors = t.$descriptors || [];

            for (var key in this) {
                var own = this.hasOwnProperty(key),
                    descriptor = null;

                if (!own) {
                    for (var i = descriptors.length - 1; i >= 0; i--) {
                        if (descriptors[i].name === key) {
                            descriptor = descriptors[i];
                            break;
                        }
                    }    
                }

                var dcount = key.split("$").length;
                if ((own || descriptor != null) && (dcount === 1 || dcount === 2 && key.match("\$\d+$"))) {
                    obj[key] = this[key];
                }
            }

            return obj;
        },

        setInheritors: function(cls, extend) {
            cls.$$inherits = extend;

            for (var i = 0; i < extend.length; i++) {
                var scope = extend[i];

                if (!scope.$$inheritors) {
                    scope.$$inheritors = [];
                }

                scope.$$inheritors.push(cls);
            }
        },

        varianceAssignable: function (source) {
            var check = function (target, type) {
                if (type.$genericTypeDefinition === target.$genericTypeDefinition && type.$typeArguments.length === target.$typeArguments.length) {
                    for (var i = 0; i < target.$typeArguments.length; i++) {
                        var v = target.prototype.$variance[i], t = target.$typeArguments[i], s = type.$typeArguments[i];

                        switch (v) {
                            case 1: if (!Bridge.Reflection.isAssignableFrom(t, s))
                                return false;
                                break;
                            case 2: if (!Bridge.Reflection.isAssignableFrom(s, t))
                                return false;
                                break;
                            default: if (s !== t)
                                return false;
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

        registerType: function (className, cls) {
            if (Bridge.$currentAssembly) {
                Bridge.$currentAssembly.$types[className] = cls;
                cls.$assembly = Bridge.$currentAssembly;
            }
        },

        addExtend: function (cls, extend) {
            var i,
                scope;

            Array.prototype.push.apply(cls.$$inherits, extend);
            cls.$interfaces = cls.$interfaces || [];
            cls.$baseInterfaces = cls.$baseInterfaces || [];

            for (i = 0; i < extend.length; i++) {
                scope = extend[i];

                if (!scope.$$inheritors) {
                    scope.$$inheritors = [];
                }

                scope.$$inheritors.push(cls);

                var baseI = (scope.$interfaces || []).concat(scope.$baseInterfaces || []);

                if (baseI.length > 0) {
                    for (var k = 0; k < baseI.length; k++) {
                        if (cls.$baseInterfaces.indexOf(baseI[k]) < 0) {
                            cls.$baseInterfaces.push(baseI[k]);
                        }
                    }
                }

                if (scope.$kind === "interface") {
                    cls.$interfaces.push(scope);
                }
            }

            cls.$allInterfaces = cls.$interfaces.concat(cls.$baseInterfaces);
        },

        set: function (scope, className, cls, noDefineProp) {
            var nameParts = className.split("."),
                name,
                key,
                exists,
                i;

            for (i = 0; i < (nameParts.length - 1) ; i++) {
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

        getCachedType: function (fn, args) {
            var arr = fn.$cache,
                len = arr.length,
                key,
                found,
                i, g;

            for (i = 0; i < len; i++) {
                key = arr[i];

                if (key.args.length === args.length) {
                    found = true;

                    for (g = 0; g < key.args.length; g++) {
                        if (key.args[g] !== args[g]) {
                            found = false;

                            break;
                        }
                    }

                    if (found) {
                        return key;
                    }
                }
            }

            return null;
        },

        generic: function (className, scope, fn, prop) {
            fn.$$name = className;
            fn.$kind = "class";

            Bridge.Class.set(scope, className, fn, true);
            Bridge.Class.registerType(className, fn);

            fn.$typeArgumentCount = prop.length;
            fn.$isGenericTypeDefinition = true;
            fn.$getMetadata = Bridge.Reflection.getMetadata;

            fn.$staticInit = function() {
                fn.$typeArguments = Bridge.Reflection.createTypeParams(prop);

                var cfg = prop.apply(null, fn.$typeArguments),
                    extend = cfg.$inherits || cfg.inherits;

                if (extend && Bridge.isFunction(extend)) {
                    extend = extend();
                }

                Bridge.Class.createInheritors(fn, extend);
                var objectType = Bridge.global.System && Bridge.global.System.Object || Object;
                if (!extend) {
                    extend = [objectType].concat(fn.$interfaces);
                }

                Bridge.Class.setInheritors(fn, extend);

                var prototype = extend ? (extend[0].$$initCtor ? new extend[0].$$initCtor() : new extend[0]()) : new objectType();
                fn.prototype = prototype;
                fn.prototype.constructor = fn;
            };

            Bridge.Class.$queue.push(fn);

            return fn;
        },

        init: function (fn) {
            if (fn) {
                var old = Bridge.Class.staticInitAllow;
                Bridge.Class.staticInitAllow = true;
                fn();
                Bridge.Class.staticInitAllow = old;
                return;
            }

            Bridge.Class.staticInitAllow = true;

            var queue = Bridge.Class.$queue.concat(Bridge.Class.$queueEntry);
            Bridge.Class.$queue.length = 0;
            Bridge.Class.$queueEntry.length = 0;

            for (var i = 0; i < queue.length; i++) {
                var t = queue[i];

                if (t.$staticInit) {
                    t.$staticInit();
                }

                if (t.prototype.$main) {
                    (function(cls, name) {
                        Bridge.ready(function () {
                             cls[name]();
                        });
                    })(t, t.prototype.$main.name || "Main");
                    
                    t.prototype.$main = null;
                }
            }
        }
    };

    Bridge.Class = base;
    Bridge.Class.$queue = [];
    Bridge.Class.$queueEntry = [];
    Bridge.define = Bridge.Class.define;
    Bridge.definei = Bridge.Class.definei;
    Bridge.init = Bridge.Class.init;
