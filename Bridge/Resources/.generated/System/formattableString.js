    Bridge.define("System.FormattableString", {
        inherits: [System.IFormattable],
        statics: {
            methods: {
                Invariant: function (formattable) {
                    if (formattable == null) {
                        throw new System.ArgumentNullException.$ctor1("formattable");
                    }

                    return formattable.ToString(System.Globalization.CultureInfo.invariantCulture);
                }
            }
        },
        methods: {
            System$IFormattable$format: function (ignored, formatProvider) {
                return this.ToString(formatProvider);
            },
            toString: function () {
                return this.ToString(System.Globalization.CultureInfo.getCurrentCulture());
            }
        }
    });
