Bridge.merge(new System.Globalization.CultureInfo("sl", true), {
    englishName: "Slovenian",
    nativeName: "slovenščina",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-neskončnost",
        positiveInfinitySymbol: "neskončnost",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: ".",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "€",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: ".",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: ".",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["ned","pon","tor","sre","čet","pet","sob"],
        abbreviatedMonthGenitiveNames: ["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""],
        abbreviatedMonthNames: ["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""],
        amDesignator: "",
        dateSeparator: ".",
        dayNames: ["nedelja","ponedeljek","torek","sreda","četrtek","petek","sobota"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "d. MMMM yyyy H:mm:ss",
        longDatePattern: "d. MMMM yyyy",
        longTimePattern: "H:mm:ss",
        monthDayPattern: "d. MMMM",
        monthGenitiveNames: ["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december",""],
        monthNames: ["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d.M.yyyy",
        shortestDayNames: ["ne","po","to","sr","če","pe","so"],
        shortTimePattern: "H:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
