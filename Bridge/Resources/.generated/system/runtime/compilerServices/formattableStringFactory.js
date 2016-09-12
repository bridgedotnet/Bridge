    Bridge.define("System.Runtime.CompilerServices.FormattableStringFactory", {
        statics: {
            create: function (format, args) {
                if (args === void 0) { args = []; }
                return new System.FormattableStringImpl(format, args);
            }
        }
    });
