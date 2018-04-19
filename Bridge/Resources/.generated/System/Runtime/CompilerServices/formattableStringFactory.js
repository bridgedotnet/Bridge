    Bridge.define("System.Runtime.CompilerServices.FormattableStringFactory", {
        statics: {
            methods: {
                Create: function (format, $arguments) {
                    if ($arguments === void 0) { $arguments = []; }
                    if (format == null) {
                        throw new System.ArgumentNullException.$ctor1("format");
                    }

                    if ($arguments == null) {
                        throw new System.ArgumentNullException.$ctor1("arguments");
                    }

                    return new System.Runtime.CompilerServices.FormattableStringFactory.ConcreteFormattableString(format, $arguments);
                }
            }
        }
    });
