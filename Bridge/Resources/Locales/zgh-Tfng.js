Bridge.merge(new System.Globalization.CultureInfo("zgh-Tfng", true), {
    englishName: "Standard Morrocan Tamazight (Tifinagh)",
    nativeName: "ⵜⴰⵎⴰⵣⵉⵖⵜ",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "ⵡⴰⵔ ⴰⵎⴹⴰⵏ",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "+∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "ⴷⵔⵎ",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["ⵙⵎⵙ","ⵢⵏⵙ","ⵙⵏⵙ","ⴽⵕⵙ","ⴽⵡⵙ","ⵙⵎⵡ","ⵙⴹⵙ"],
        abbreviatedMonthGenitiveNames: ["ⵏⵢⵔ","ⴱⵕⵢ","ⵎⵕⵚ","ⴱⵔⵔ","ⵎⵢⵢ","ⵢⵏⵢ","ⵢⵍⵢ","ⵖⵛⵜ","ⵛⵜⵏ","ⴽⵜⴱ","ⵏⵡⴱ","ⴷⵊⵏ",""],
        abbreviatedMonthNames: ["ⵏⵢⵔ","ⴱⵕⵢ","ⵎⵕⵚ","ⴱⵔⵔ","ⵎⵢⵢ","ⵢⵏⵢ","ⵢⵍⵢ","ⵖⵛⵜ","ⵛⵜⵏ","ⴽⵜⴱ","ⵏⵡⴱ","ⴷⵊⵏ",""],
        amDesignator: "",
        dateSeparator: "-",
        dayNames: ["ⴰⵙⴰⵎⴰⵙ","ⴰⵢⵏⴰⵙ","ⴰⵙⵉⵏⴰⵙ","ⴰⴽⵕⴰⵙ","ⴰⴽⵡⴰⵙ","ⴰⵙⵉⵎⵡⴰⵙ","ⴰⵙⵉⴹⵢⴰⵙ"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, dd MMMM, yyyy HH.mm.ss",
        longDatePattern: "dddd, dd MMMM, yyyy",
        longTimePattern: "HH.mm.ss",
        monthDayPattern: "dd MMMM",
        monthGenitiveNames: ["ⵉⵏⵏⴰⵢⵔ","ⴱⵕⴰⵢⵕ","ⵎⴰⵕⵚ","ⵉⴱⵔⵉⵔ","ⵎⴰⵢⵢⵓ","ⵢⵓⵏⵢⵓ","ⵢⵓⵍⵢⵓⵣ","ⵖⵓⵛⵜ","ⵛⵓⵜⴰⵏⴱⵉⵔ","ⴽⵜⵓⴱⵕ","ⵏⵓⵡⴰⵏⴱⵉⵔ","ⴷⵓⵊⴰⵏⴱⵉⵔ",""],
        monthNames: ["ⵉⵏⵏⴰⵢⵔ","ⴱⵕⴰⵢⵕ","ⵎⴰⵕⵚ","ⵉⴱⵔⵉⵔ","ⵎⴰⵢⵢⵓ","ⵢⵓⵏⵢⵓ","ⵢⵓⵍⵢⵓⵣ","ⵖⵓⵛⵜ","ⵛⵓⵜⴰⵏⴱⵉⵔ","ⴽⵜⵓⴱⵕ","ⵏⵓⵡⴰⵏⴱⵉⵔ","ⴷⵓⵊⴰⵏⴱⵉⵔ",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd-MM-yyyy",
        shortestDayNames: ["ⵙⵎ","ⵢⵏ","ⵙⵏ","ⴽⵕ","ⴽⵡ","ⵙⵡ","ⵚⴹ"],
        shortTimePattern: "HH.mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ".",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
