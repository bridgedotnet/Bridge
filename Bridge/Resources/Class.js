    // @source Class.js

    var initializing = false;

    // The base Class implementation
    var base = {
        cache: { },

        initCtor: function () {
            var value = arguments[0];

            if (this.$multipleCtors && arguments.length > 0 && typeof value == "string") {
                value = value === "constructor" ? "$constructor" : value;

                if ((value === "$constructor" || Bridge.String.startsWith(value, "constructor$")) && Bridge.isFunction(this[value])) {
                    this[value].apply(this, Array.prototype.slice.call(arguments, 1));

                    return;
                }
            }

            if (this.$constructor) {
                this.$constructor.apply(this, arguments);
            }
        },

        initConfig: function (extend, base, cfg, statics, scope) {
            var initFn,
                isFn = Bridge.isFunction(cfg),
                fn = function () {
                    var name,
                        config;

                    config = Bridge.isFunction(cfg) ? cfg() : cfg;

                    if (config.fields) {
                        for (name in config.fields) {
                            this[name] = config.fields[name];
                        }
                    }

                    if (config.properties) {
                        for (name in config.properties) {
                            Bridge.property(this, name, config.properties[name]);
                        }
                    }

                    if (config.events) {
                        for (name in config.events) {
                            Bridge.event(this, name, config.events[name]);
                        }
                    }
                    if (config.alias) {
                        for (name in config.alias) {
                            if (this[name]) {
                                this[name] = this[config.alias[name]];
                            }
                        }
                    }

                    if (config.init) {
                        initFn = config.init;
                    }
                };

            if (!isFn) {
                fn.apply(scope);
            }

            scope.$initMembers = function () {
                if (extend && !statics && base.$initMembers) {
                    base.$initMembers.apply(this, arguments);
                }

                if (isFn) {
                    fn.apply(this);
                }

                if (initFn) {
                    initFn.apply(this, arguments);
                }
            };
        },

        // Create a new Class that inherits from this class
        define: function (className, gscope, prop) {
            if (!prop) {
                prop = gscope;
                gscope = Bridge.global;
            }

            if (Bridge.isFunction(prop)) {
                fn = function () {
                    var args = Array.prototype.slice.call(arguments),
                        name,
                        obj,
                        c;

                    args.unshift(className);
                    name = Bridge.Class.genericName.apply(null, args),
                        c = Bridge.Class.cache[name];

                    if (c) {
                        return c;
                    }

                    obj = prop.apply(null, args.slice(1));
                    obj.$cacheName = name;
                    c = Bridge.define(name, obj);

                    return  c;
                };

                return Bridge.Class.generic(className, gscope, fn);
            }

            prop = prop || {};

            var extend = prop.$inherits || prop.inherits,
                statics = prop.$statics || prop.statics,
                base,
                cacheName = prop.$cacheName,
                prototype,
                scope = prop.$scope || Bridge.global,
                i,
                v,
                ctorCounter,
                isCtor,
                ctorName,
                name,
                fn;

            if (prop.$inherits) {
                delete prop.$inherits;
            } else {
                delete prop.inherits;
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

            // The dummy class constructor
            function Class() {
                if (!(this instanceof Class)) {
                    var args = Array.prototype.slice.call(arguments, 0),
                        object = Object.create(Class.prototype),
                        result = Class.apply(object, args);

                    return typeof result === "object" ? result : object;
                }

                // All construction is actually done in the init method
                if (!initializing) {
                    if (this.$staticInit) {
                        this.$staticInit();
                    }

                    if (this.$initMembers) {
                        this.$initMembers.apply(this, arguments);
                    }

                    this.$$initCtor.apply(this, arguments);
                }
            };

            scope = Bridge.Class.set(scope, className, Class);

            if (cacheName) {
                Bridge.Class.cache[cacheName] = Class;
            }

            Class.$$name = className;

            if (extend && Bridge.isFunction(extend)) {
                extend = extend();
            }

            base = extend ? extend[0].prototype : this.prototype;

            // Instantiate a base class (but only create the instance,
            // don't run the init constructor)
            initializing = true;
            prototype = extend ? new extend[0]() : new Object();
            initializing = false;

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
                Bridge.Class.initConfig(extend, base, instanceConfig, false, prop);                

                if (prop.$config) {
                    delete prop.$config;
                } else {
                    delete prop.config;
                }
            } else {
                prop.$initMembers = extend ? function () {
                    base.$initMembers.apply(this, arguments);
                } : function () { };
            }

            prop.$$initCtor = Bridge.Class.initCtor;

            // Copy the properties over onto the new prototype
            ctorCounter = 0;

            var keys = [];

            for (name in prop) {
                keys.push(name);
            }

            if (Bridge.Browser.isIE8) {
                if (prop.hasOwnProperty("constructor") && keys.indexOf("constructor") < 0) {
                    keys.push("constructor");
                }
            }            

            for (var i = 0; i < keys.length; i++) {
                name = keys[i];

                v = prop[name];
                isCtor = name === "constructor";
                ctorName = isCtor ? "$constructor" : name;

                if (Bridge.isFunction(v) && (isCtor || Bridge.String.startsWith(name, "constructor$"))) {
                    ctorCounter++;
                    isCtor = true;
                }

                prototype[ctorName] = prop[name];

                if (isCtor) {
                    (function (ctorName) {
                        Class[ctorName] = function () {
                            var args = Array.prototype.slice.call(arguments);

                            if (this.$initMembers) {
                                this.$initMembers.apply(this, args);
                            }

                            args.unshift(ctorName);
                            this.$$initCtor.apply(this, args);
                        };
                    })(ctorName);

                    Class[ctorName].prototype = prototype;
                    Class[ctorName].prototype.constructor = Class;
                }
            }

            if (ctorCounter === 0) {
                prototype.$constructor = extend ? function () {
                    base.$constructor.apply(this, arguments);
                } : function () { };
            }

            if (ctorCounter > 1) {
                prototype.$multipleCtors = true;
            }

            prototype.$$name = className;

            // Populate our constructed prototype object
            Class.prototype = prototype;

            // Enforce the constructor to be what we expect
            Class.prototype.constructor = Class;

            if (statics) {
                for (name in statics) {
                    Class[name] = statics[name];
                }
            }

            if (!extend) {
                extend = [Object];
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
                Class.$staticInit = null;

                if (Class.$initMembers) {
                    Class.$initMembers.call(Class);
                }

                if (Class.constructor) {
                    Class.constructor.call(Class);
                }
            };

            Bridge.Class.$queue.push(Class);
            Class.$staticInit = fn;

            return Class;
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

        set: function (scope, className, cls) {
            var nameParts = className.split("."),
                name,
                key,
                exists,
                i;

            for (i = 0; i < (nameParts.length - 1) ; i++) {
                if (typeof scope[nameParts[i]] == "undefined") {
                    scope[nameParts[i]] = { };
                }

                scope = scope[nameParts[i]];
            }

            name = nameParts[nameParts.length - 1];
            exists = scope[name];

            if (exists) {
                for (key in exists) {
                    if (key.indexOf("$", key.length - 1) !== -1) {
                        var key1 = key.slice(0, -1);
                        if (typeof exists[key1] === "function" && exists[key1].$$name) {
                            cls[key] = exists[key];
                        }
                    }
                    else if (typeof exists[key] === "function" && exists[key].$$name) {
                        cls[key] = exists[key];
                    }
                }
            }            

            scope[name] = cls;

            return scope;
        },

        genericName: function () {
            var name = arguments[0];

            for (var i = 1; i < arguments.length; i++) {
                name += "$" + Bridge.getTypeName(arguments[i]);
            }

            return name;
        },

        generic: function (className, scope, fn) {
            if (!fn) {
                fn = scope;
                scope = Bridge.global;
            }
            fn.$$name = className;
            Bridge.Class.set(scope, className, fn);

            return fn;
        },

        init: function (fn) {
            for (var i = 0; i < Bridge.Class.$queue.length; i++) {
                var t = Bridge.Class.$queue[i];

                if (t.$staticInit) {
                    t.$staticInit();
                }
            }
            Bridge.Class.$queue.length = 0;

            if (fn) {
                fn();
            }
        }
    };

    Bridge.Class = base;
    Bridge.Class.$queue = [];
    Bridge.define = Bridge.Class.define;
    Bridge.init = Bridge.Class.init;
