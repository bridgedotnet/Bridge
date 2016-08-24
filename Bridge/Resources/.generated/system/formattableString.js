    Bridge.define('System.FormattableString', {
        inherits: [System.IFormattable],
        statics: {
            invariant: function (formattable) {
                return formattable.toString$1(System.Globalization.CultureInfo.invariantCulture);
            }
        },
        toString: function () {
            return this.toString$1(System.Globalization.CultureInfo.getCurrentCulture());
        },
        System$IFormattable$format: function (format, formatProvider) {
            return this.toString$1(formatProvider);
        }
    });
