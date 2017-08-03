    Bridge.assembly = function (assemblyName, res, callback) {
        if (!callback) {
            callback = res;
            res = {};
        }

        assemblyName = assemblyName || "Bridge.$Unknown";

        var asm = System.Reflection.Assembly.assemblies[assemblyName];

        if (!asm) {
            asm = new System.Reflection.Assembly(assemblyName, res);
        } else {
            Bridge.apply(asm.res, res || {});
        }

        Bridge.$currentAssembly = asm;

        if (callback) {
            var old = Bridge.Class.staticInitAllow;
            Bridge.Class.staticInitAllow = false;

            callback.call(Bridge.global, asm, Bridge.global);

            Bridge.Class.staticInitAllow = old;
        }

        Bridge.init();
    };

    Bridge.define("System.Reflection.Assembly", {
        statics: {
            assemblies: {}
        },

        ctor: function (name, res) {
            this.$initialize();
            this.name = name;
            this.res = res || {};
            this.$types = {};
            this.$ = {};

            System.Reflection.Assembly.assemblies[name] = this;
        },

        toString: function () {
            return this.name;
        },

        getManifestResourceNames: function () {
            return Object.keys(this.res);
        },

        getManifestResourceDataAsBase64: function (type, name) {
            if (arguments.length === 1) {
                name = type;
                type = null;
            }

            if (type) {
                name = Bridge.Reflection.getTypeNamespace(type) + "." + name;
            }

            return this.res[name] || null;
        },

        getManifestResourceData: function (type, name) {
            if (arguments.length === 1) {
                name = type;
                type = null;
            }

            if (type) {
                name = Bridge.Reflection.getTypeNamespace(type) + '.' + name;
            }

            var r = this.res[name];

            return r ? System.Convert.fromBase64String(r) : null;
        },

        getCustomAttributes: function (attributeType) {
            if (attributeType && !Bridge.isBoolean(attributeType)) {
                return this.attr.filter(function (a) {
                    return Bridge.is(a, attributeType);
                });
            }

            return this.attr;
        }
    });

    Bridge.$currentAssembly = new System.Reflection.Assembly("mscorlib");
    Bridge.SystemAssembly = Bridge.$currentAssembly;
    Bridge.SystemAssembly.$types["System.Reflection.Assembly"] = System.Reflection.Assembly;
    System.Reflection.Assembly.$assembly = Bridge.SystemAssembly;
    var $asm = Bridge.$currentAssembly;
