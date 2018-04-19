    Bridge.define("System.Globalization.FORMATFLAGS", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                UseGenitiveMonth: 1,
                UseLeapYearMonth: 2,
                UseSpacesInMonthNames: 4,
                UseHebrewParsing: 8,
                UseSpacesInDayNames: 16,
                UseDigitPrefixInTokens: 32
            }
        }
    });
