    Bridge.define("System.Globalization.DateTimeFormatInfo", {
        inherits: [System.IFormatProvider, System.ICloneable],

        config: {
            alias: [
                "getFormat", "System$IFormatProvider$getFormat"
            ]
        },

        statics: {
            $allStandardFormats: {
                "d": "shortDatePattern",
                "D": "longDatePattern",
                "f": "longDatePattern shortTimePattern",
                "F": "longDatePattern longTimePattern",
                "g": "shortDatePattern shortTimePattern",
                "G": "shortDatePattern longTimePattern",
                "m": "monthDayPattern",
                "M": "monthDayPattern",
                "o": "roundtripFormat",
                "O": "roundtripFormat",
                "r": "rfc1123",
                "R": "rfc1123",
                "s": "sortableDateTimePattern",
                "S": "sortableDateTimePattern1",
                "t": "shortTimePattern",
                "T": "longTimePattern",
                "u": "universalSortableDateTimePattern",
                "U": "longDatePattern longTimePattern",
                "y": "yearMonthPattern",
                "Y": "yearMonthPattern"
            },

            ctor: function () {
                this.invariantInfo = Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
                    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    abbreviatedMonthGenitiveNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
                    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
                    amDesignator: "AM",
                    dateSeparator: "/",
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    firstDayOfWeek: 0,
                    fullDateTimePattern: "dddd, dd MMMM yyyy HH:mm:ss",
                    longDatePattern: "dddd, dd MMMM yyyy",
                    longTimePattern: "HH:mm:ss",
                    monthDayPattern: "MMMM dd",
                    monthGenitiveNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                    pmDesignator: "PM",
                    rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
                    shortDatePattern: "MM/dd/yyyy",
                    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    shortTimePattern: "HH:mm",
                    sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    sortableDateTimePattern1: "yyyy'-'MM'-'dd",
                    timeSeparator: ":",
                    universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    yearMonthPattern: "yyyy MMMM",
                    roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
                });
            }
        },

        getFormat: function (type) {
            switch (type) {
                case System.Globalization.DateTimeFormatInfo:
                    return this;
                default:
                    return null;
            }
        },

        getAbbreviatedDayName: function (dayofweek) {
            if (dayofweek < 0 || dayofweek > 6) {
                throw new System.ArgumentOutOfRangeException("dayofweek");
            }

            return this.abbreviatedDayNames[dayofweek];
        },

        getAbbreviatedMonthName: function (month) {
            if (month < 1 || month > 13) {
                throw new System.ArgumentOutOfRangeException("month");
            }

            return this.abbreviatedMonthNames[month - 1];
        },

        getAllDateTimePatterns: function (format, returnNull) {
            var f = System.Globalization.DateTimeFormatInfo.$allStandardFormats,
                formats,
                names,
                pattern,
                i,
                result = [];

            if (format) {
                if (!f[format]) {
                    if (returnNull) {
                        return null;
                    }

                    throw new System.ArgumentException(null, "format");
                }

                formats = {};
                formats[format] = f[format];
            } else {
                formats = f;
            }

            for (f in formats) {
                names = formats[f].split(" ");
                pattern = "";

                for (i = 0; i < names.length; i++) {
                    pattern = (i === 0 ? "" : (pattern + " ")) + this[names[i]];
                }

                result.push(pattern);
            }

            return result;
        },

        getDayName: function (dayofweek) {
            if (dayofweek < 0 || dayofweek > 6) {
                throw new System.ArgumentOutOfRangeException("dayofweek");
            }

            return this.dayNames[dayofweek];
        },

        getMonthName: function (month) {
            if (month < 1 || month > 13) {
                throw new System.ArgumentOutOfRangeException("month");
            }

            return this.monthNames[month - 1];
        },

        getShortestDayName: function (dayOfWeek) {
            if (dayOfWeek < 0 || dayOfWeek > 6) {
                throw new System.ArgumentOutOfRangeException("dayOfWeek");
            }

            return this.shortestDayNames[dayOfWeek];
        },

        clone: function () {
            return Bridge.copy(new System.Globalization.DateTimeFormatInfo(), this, [
                "abbreviatedDayNames",
                "abbreviatedMonthGenitiveNames",
                "abbreviatedMonthNames",
                "amDesignator",
                "dateSeparator",
                "dayNames",
                "firstDayOfWeek",
                "fullDateTimePattern",
                "longDatePattern",
                "longTimePattern",
                "monthDayPattern",
                "monthGenitiveNames",
                "monthNames",
                "pmDesignator",
                "rfc1123",
                "shortDatePattern",
                "shortestDayNames",
                "shortTimePattern",
                "sortableDateTimePattern",
                "timeSeparator",
                "universalSortableDateTimePattern",
                "yearMonthPattern",
                "roundtripFormat"
            ]);
        }
    });

    Bridge.define("System.Globalization.NumberFormatInfo", {
        inherits: [System.IFormatProvider, System.ICloneable],

        config: {
            alias: [
                "getFormat", "System$IFormatProvider$getFormat"
            ]
        },

        statics: {
            ctor: function () {
                this.numberNegativePatterns = ["(n)", "-n", "- n", "n-", "n -"];
                this.currencyNegativePatterns = ["($n)", "-$n", "$-n", "$n-", "(n$)", "-n$", "n-$", "n$-", "-n $", "-$ n", "n $-", "$ n-", "$ -n", "n- $", "($ n)", "(n $)"];
                this.currencyPositivePatterns = ["$n", "n$", "$ n", "n $"];
                this.percentNegativePatterns = ["-n %", "-n%", "-%n", "%-n", "%n-", "n-%", "n%-", "-% n", "n %-", "% n-", "% -n", "n- %"];
                this.percentPositivePatterns = ["n %", "n%", "%n", "% n"];

                this.invariantInfo = Bridge.merge(new System.Globalization.NumberFormatInfo(), {
                    nanSymbol: "NaN",
                    negativeSign: "-",
                    positiveSign: "+",
                    negativeInfinitySymbol: "-Infinity",
                    positiveInfinitySymbol: "Infinity",

                    percentSymbol: "%",
                    percentGroupSizes: [3],
                    percentDecimalDigits: 2,
                    percentDecimalSeparator: ".",
                    percentGroupSeparator: ",",
                    percentPositivePattern: 0,
                    percentNegativePattern: 0,

                    currencySymbol: "¤",
                    currencyGroupSizes: [3],
                    currencyDecimalDigits: 2,
                    currencyDecimalSeparator: ".",
                    currencyGroupSeparator: ",",
                    currencyNegativePattern: 0,
                    currencyPositivePattern: 0,

                    numberGroupSizes: [3],
                    numberDecimalDigits: 2,
                    numberDecimalSeparator: ".",
                    numberGroupSeparator: ",",
                    numberNegativePattern: 1
                });
            }
        },

        getFormat: function (type) {
            switch (type) {
                case System.Globalization.NumberFormatInfo:
                    return this;
                default:
                    return null;
            }
        },

        clone: function () {
            return Bridge.copy(new System.Globalization.NumberFormatInfo(), this, [
                "nanSymbol",
                "negativeSign",
                "positiveSign",
                "negativeInfinitySymbol",
                "positiveInfinitySymbol",
                "percentSymbol",
                "percentGroupSizes",
                "percentDecimalDigits",
                "percentDecimalSeparator",
                "percentGroupSeparator",
                "percentPositivePattern",
                "percentNegativePattern",
                "currencySymbol",
                "currencyGroupSizes",
                "currencyDecimalDigits",
                "currencyDecimalSeparator",
                "currencyGroupSeparator",
                "currencyNegativePattern",
                "currencyPositivePattern",
                "numberGroupSizes",
                "numberDecimalDigits",
                "numberDecimalSeparator",
                "numberGroupSeparator",
                "numberNegativePattern"
            ]);
        }
    });

    Bridge.define("System.Globalization.CultureInfo", {
        inherits: [System.IFormatProvider, System.ICloneable],

        config: {
            alias: [
                "getFormat", "System$IFormatProvider$getFormat"
            ]
        },

        $entryPoint: true,

        statics: {
            ctor: function () {
                this.cultures = this.cultures || {};

                this.invariantCulture = Bridge.merge(new System.Globalization.CultureInfo("iv", true), {
                    englishName: "Invariant Language (Invariant Country)",
                    nativeName: "Invariant Language (Invariant Country)",
                    numberFormat: System.Globalization.NumberFormatInfo.invariantInfo,
                    dateTimeFormat: System.Globalization.DateTimeFormatInfo.invariantInfo
                });

                this.setCurrentCulture(System.Globalization.CultureInfo.invariantCulture);
            },

            getCurrentCulture: function () {
                return this.currentCulture;
            },

            setCurrentCulture: function (culture) {
                this.currentCulture = culture;

                System.Globalization.DateTimeFormatInfo.currentInfo = culture.dateTimeFormat;
                System.Globalization.NumberFormatInfo.currentInfo = culture.numberFormat;
            },

            getCultureInfo: function (name) {
                if (!name) {
                    throw new System.ArgumentNullException("name");
                }

                return this.cultures[name];
            },

            getCultures: function () {
                var names = Bridge.getPropertyNames(this.cultures),
                    result = [],
                    i;

                for (i = 0; i < names.length; i++) {
                    result.push(this.cultures[names[i]]);
                }

                return result;
            }
        },

        ctor: function (name, create) {
            this.$initialize();
            this.name = name;

            if (!System.Globalization.CultureInfo.cultures) {
                System.Globalization.CultureInfo.cultures = {};
            }

            if (System.Globalization.CultureInfo.cultures[name]) {
                Bridge.copy(this, System.Globalization.CultureInfo.cultures[name], [
                    "englishName",
                    "nativeName",
                    "numberFormat",
                    "dateTimeFormat"
                ]);
            } else {
                if (!create) {
                    throw new System.Globalization.CultureNotFoundException("name", name);
                }

                System.Globalization.CultureInfo.cultures[name] = this;
            }
        },

        getFormat: function (type) {
            switch (type) {
                case System.Globalization.NumberFormatInfo:
                    return this.numberFormat;
                case System.Globalization.DateTimeFormatInfo:
                    return this.dateTimeFormat;
                default:
                    return null;
            }
        },

        clone: function () {
            return new System.Globalization.CultureInfo(this.name);
        }
    });
