    Bridge.define("System.SR", {
        statics: {
            fields: {
                ArgumentException_ValueTupleIncorrectType: null,
                ArgumentException_ValueTupleLastArgumentNotAValueTuple: null,
                _lock: null
            },
            props: {
                ResourceManager: null
            },
            ctors: {
                init: function () {
                    this.ArgumentException_ValueTupleIncorrectType = "Argument must be of type {0}.";
                    this.ArgumentException_ValueTupleLastArgumentNotAValueTuple = "The last element of an eight element ValueTuple must be a ValueTuple.";
                    this._lock = { };
                }
            },
            methods: {
                UsingResourceKeys: function () {
                    return false;
                },
                GetResourceString: function (resourceKey) {
                    return System.SR.GetResourceString$1(resourceKey, "");
                },
                GetResourceString$1: function (resourceKey, defaultString) {
                    var resourceString = null;
                    try {
                        resourceString = System.SR.InternalGetResourceString(resourceKey);
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        if (Bridge.is($e1, System.Resources.MissingManifestResourceException)) {
                        } else {
                            throw $e1;
                        }
                    }

                    if (defaultString != null && System.String.equals(resourceKey, resourceString, 4)) {
                        return defaultString;
                    }

                    return resourceString;
                },
                InternalGetResourceString: function (key) {
                    if (key == null || key.length === 0) {
                        return key;
                    }

                    return key;










                },
                Format$3: function (resourceFormat, args) {
                    if (args === void 0) { args = []; }
                    if (args != null) {
                        if (System.SR.UsingResourceKeys()) {
                            return (resourceFormat || "") + (args.join(", ") || "");
                        }

                        return System.String.format.apply(System.String, [resourceFormat].concat(args));
                    }

                    return resourceFormat;
                },
                Format: function (resourceFormat, p1) {
                    if (System.SR.UsingResourceKeys()) {
                        return [resourceFormat, p1].join(", ");
                    }

                    return System.String.format(resourceFormat, [p1]);
                },
                Format$1: function (resourceFormat, p1, p2) {
                    if (System.SR.UsingResourceKeys()) {
                        return [resourceFormat, p1, p2].join(", ");
                    }

                    return System.String.format(resourceFormat, p1, p2);
                },
                Format$2: function (resourceFormat, p1, p2, p3) {
                    if (System.SR.UsingResourceKeys()) {
                        return [resourceFormat, p1, p2, p3].join(", ");
                    }
                    return System.String.format(resourceFormat, p1, p2, p3);
                }
            }
        }
    });
