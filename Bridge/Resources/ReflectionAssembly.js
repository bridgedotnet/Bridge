    Bridge.assembly = function (props, res, callback) {
        if (!callback) {
            callback = res;
            res = {};
        }

        props = props ? (props.name ? props : { name: props }) : { name: "Bridge.$Unknown" };

        var asm = System.Reflection.Assembly.assemblies[props.name];

        if (!asm) {
            asm = new System.Reflection.Assembly(props, res);
        } else {
            Bridge.apply(asm.res, res || {});
        }

        Bridge.$currentAssembly = asm;

        if (callback) {
            callback.call(Bridge.global, asm, Bridge.global);
        }

        Bridge.init();
    };

    Bridge.define("System.Reflection.Assembly", {
        statics: {
            assemblies: {}
        },

        ctor: function (props, res) {
            this.$initialize();
            this.name = props.name ? props.name : props;
            this.defVer("version",  props.version || "0.0.0.0");
            this.defVer("compiler", props.compiler || "0.0.0.0");
            this.res = res || {};
            this.$types = {}

            System.Reflection.Assembly.assemblies[this.name] = this;
        },

        defVer: function(key, o) {
            Object.defineProperty(this, key, {
                get: function () {
                    o = new System.Version.$ctor4(o);
                    Bridge.Class.defineProperty(this, key, o);
                    return o;
                },

                set: function (newValue) {
                    o = newValue;
                },

                enumerable: true,

                configurable: true
            });
        },

        getFullName: function () {
            return this.name + ", Version=" + this.version.toString();
        },

        toString: function () {
            return this.getFullName();
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
