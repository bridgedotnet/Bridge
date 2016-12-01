Bridge.merge(new System.Globalization.CultureInfo("sw", true), {
    englishName: "Kiswahili",
    nativeName: "Kiswahili",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "NaN",
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
        currencySymbol: "KSh",
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
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Jumap.","Jumat.","Juman.","Jumat.","Alh.","Iju.","Jumam."],
        abbreviatedMonthGenitiveNames: ["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ago","Sep","Okt","Nov","Dec",""],
        abbreviatedMonthNames: ["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ago","Sep","Okt","Nov","Dec",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["Jumapili","Jumatatu","Jumanne","Jumatano","Alhamisi","Ijumaa","Jumamosi"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dddd, MMMM dd, yyyy h:mm:ss tt",
        longDatePattern: "dddd, MMMM dd, yyyy",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "MMMM dd",
        monthGenitiveNames: ["Januari","Februari","Machi","Aprili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Desemba",""],
        monthNames: ["Januari","Februari","Machi","Aprili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Desemba",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "M/d/yyyy",
        shortestDayNames: ["P","T","N","T","A","I","M"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
