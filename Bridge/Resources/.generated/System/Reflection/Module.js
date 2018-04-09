    Bridge.define("System.Reflection.Module", {
        inherits: [System.Reflection.ICustomAttributeProvider,System.Runtime.Serialization.ISerializable],
        statics: {
            fields: {
                FilterTypeName: null,
                FilterTypeNameIgnoreCase: null,
                DefaultLookup: 0
            },
            ctors: {
                init: function () {
                    this.FilterTypeName = System.Reflection.Module.FilterTypeNameImpl;
                    this.FilterTypeNameIgnoreCase = System.Reflection.Module.FilterTypeNameIgnoreCaseImpl;
                    this.DefaultLookup = 28;
                }
            },
            methods: {
                FilterTypeNameImpl: function (cls, filterCriteria) {
                    if (filterCriteria == null || !(Bridge.is(filterCriteria, System.String))) {
                        throw new System.Reflection.InvalidFilterCriteriaException.$ctor1("A String must be provided for the filter criteria.");
                    }

                    var str = Bridge.cast(filterCriteria, System.String);

                    if (str.length > 0 && str.charCodeAt(((str.length - 1) | 0)) === 42) {
                        str = str.substr(0, ((str.length - 1) | 0));
                        return System.String.startsWith(Bridge.Reflection.getTypeName(cls), str, 4);
                    }

                    return System.String.equals(Bridge.Reflection.getTypeName(cls), str);
                },
                FilterTypeNameIgnoreCaseImpl: function (cls, filterCriteria) {
                    var $t;
                    if (filterCriteria == null || !(Bridge.is(filterCriteria, System.String))) {
                        throw new System.Reflection.InvalidFilterCriteriaException.$ctor1("A String must be provided for the filter criteria.");
                    }

                    var str = Bridge.cast(filterCriteria, System.String);

                    if (str.length > 0 && str.charCodeAt(((str.length - 1) | 0)) === 42) {
                        str = str.substr(0, ((str.length - 1) | 0));
                        var name = Bridge.Reflection.getTypeName(cls);
                        if (name.length >= str.length) {
                            return (($t = str.length, System.String.compare(name.substr(0, $t), str.substr(0, $t), 5)) === 0);
                        } else {
                            return false;
                        }
                    }
                    return (System.String.compare(str, Bridge.Reflection.getTypeName(cls), 5) === 0);
                },
                op_Equality: function (left, right) {
                    if (Bridge.referenceEquals(left, right)) {
                        return true;
                    }

                    if (left == null || right == null) {
                        return false;
                    }

                    return left.equals(right);
                },
                op_Inequality: function (left, right) {
                    return !(System.Reflection.Module.op_Equality(left, right));
                }
            }
        },
        props: {
            Assembly: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            },
            FullyQualifiedName: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            },
            Name: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            },
            MDStreamVersion: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            },
            ModuleVersionId: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            },
            ScopeName: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            },
            MetadataToken: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            }
        },
        alias: [
            "IsDefined", "System$Reflection$ICustomAttributeProvider$IsDefined",
            "GetCustomAttributes", "System$Reflection$ICustomAttributeProvider$GetCustomAttributes",
            "GetCustomAttributes$1", "System$Reflection$ICustomAttributeProvider$GetCustomAttributes$1"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            IsResource: function () {
                throw System.NotImplemented.ByDesign;
            },
            IsDefined: function (attributeType, inherit) {
                throw System.NotImplemented.ByDesign;
            },
            GetCustomAttributes: function (inherit) {
                throw System.NotImplemented.ByDesign;
            },
            GetCustomAttributes$1: function (attributeType, inherit) {
                throw System.NotImplemented.ByDesign;
            },
            GetMethod: function (name) {
                if (name == null) {
                    throw new System.ArgumentNullException.$ctor1("name");
                }

                return this.GetMethodImpl(name, System.Reflection.Module.DefaultLookup, null, 3, null, null);
            },
            GetMethod$2: function (name, types) {
                return this.GetMethod$1(name, System.Reflection.Module.DefaultLookup, null, 3, types, null);
            },
            GetMethod$1: function (name, bindingAttr, binder, callConvention, types, modifiers) {
                if (name == null) {
                    throw new System.ArgumentNullException.$ctor1("name");
                }
                if (types == null) {
                    throw new System.ArgumentNullException.$ctor1("types");
                }
                for (var i = 0; i < types.length; i = (i + 1) | 0) {
                    if (types[System.Array.index(i, types)] == null) {
                        throw new System.ArgumentNullException.$ctor1("types");
                    }
                }
                return this.GetMethodImpl(name, bindingAttr, binder, callConvention, types, modifiers);
            },
            GetMethodImpl: function (name, bindingAttr, binder, callConvention, types, modifiers) {
                throw System.NotImplemented.ByDesign;
            },
            GetMethods: function () {
                return this.GetMethods$1(System.Reflection.Module.DefaultLookup);
            },
            GetMethods$1: function (bindingFlags) {
                throw System.NotImplemented.ByDesign;
            },
            GetField: function (name) {
                return this.GetField$1(name, System.Reflection.Module.DefaultLookup);
            },
            GetField$1: function (name, bindingAttr) {
                throw System.NotImplemented.ByDesign;
            },
            GetFields: function () {
                return this.GetFields$1(System.Reflection.Module.DefaultLookup);
            },
            GetFields$1: function (bindingFlags) {
                throw System.NotImplemented.ByDesign;
            },
            GetTypes: function () {
                throw System.NotImplemented.ByDesign;
            },
            GetType: function (className) {
                return this.GetType$2(className, false, false);
            },
            GetType$1: function (className, ignoreCase) {
                return this.GetType$2(className, false, ignoreCase);
            },
            GetType$2: function (className, throwOnError, ignoreCase) {
                throw System.NotImplemented.ByDesign;
            },
            FindTypes: function (filter, filterCriteria) {
                var c = this.GetTypes();
                var cnt = 0;
                for (var i = 0; i < c.length; i = (i + 1) | 0) {
                    if (!Bridge.staticEquals(filter, null) && !filter(c[System.Array.index(i, c)], filterCriteria)) {
                        c[System.Array.index(i, c)] = null;
                    } else {
                        cnt = (cnt + 1) | 0;
                    }
                }
                if (cnt === c.length) {
                    return c;
                }

                var ret = System.Array.init(cnt, null, Function);
                cnt = 0;
                for (var i1 = 0; i1 < c.length; i1 = (i1 + 1) | 0) {
                    if (c[System.Array.index(i1, c)] != null) {
                        ret[System.Array.index(Bridge.identity(cnt, (cnt = (cnt + 1) | 0)), ret)] = c[System.Array.index(i1, c)];
                    }
                }
                return ret;
            },
            ResolveField: function (metadataToken) {
                return this.ResolveField$1(metadataToken, null, null);
            },
            ResolveField$1: function (metadataToken, genericTypeArguments, genericMethodArguments) {
                throw System.NotImplemented.ByDesign;
            },
            ResolveMember: function (metadataToken) {
                return this.ResolveMember$1(metadataToken, null, null);
            },
            ResolveMember$1: function (metadataToken, genericTypeArguments, genericMethodArguments) {
                throw System.NotImplemented.ByDesign;
            },
            ResolveMethod: function (metadataToken) {
                return this.ResolveMethod$1(metadataToken, null, null);
            },
            ResolveMethod$1: function (metadataToken, genericTypeArguments, genericMethodArguments) {
                throw System.NotImplemented.ByDesign;
            },
            ResolveSignature: function (metadataToken) {
                throw System.NotImplemented.ByDesign;
            },
            ResolveString: function (metadataToken) {
                throw System.NotImplemented.ByDesign;
            },
            ResolveType: function (metadataToken) {
                return this.ResolveType$1(metadataToken, null, null);
            },
            ResolveType$1: function (metadataToken, genericTypeArguments, genericMethodArguments) {
                throw System.NotImplemented.ByDesign;
            },
            equals: function (o) {
                return Bridge.equals(this, o);
            },
            getHashCode: function () {
                return Bridge.getHashCode(this);
            },
            toString: function () {
                return this.ScopeName;
            }
        }
    });
