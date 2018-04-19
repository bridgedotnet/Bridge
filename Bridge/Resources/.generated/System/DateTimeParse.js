    Bridge.define("System.DateTimeParse", {
        statics: {
            methods: {
                TryParseExact: function (s, format, dtfi, style, result) {
                    return System.DateTime.tryParseExact(s, format, null, result);

                },
                Parse: function (s, dtfi, styles) {
                    return System.DateTime.parse(s, dtfi);
                },
                Parse$1: function (s, dtfi, styles, offset) {
                    throw System.NotImplemented.ByDesign;

                },
                TryParse: function (s, dtfi, styles, result) {
                    return System.DateTime.tryParse(s, null, result);

                },
                TryParse$1: function (s, dtfi, styles, result, offset) {
                    throw System.NotImplemented.ByDesign;
                }
            }
        }
    });
