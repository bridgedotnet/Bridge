Bridge.merge(new System.Globalization.CultureInfo("it-CH", true), {
    englishName: "Italian (Switzerland)",
    nativeName: "italiano (Svizzera)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: "'",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "CHF",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: "'",
        currencyNegativePattern: 2,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: "'",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["dom","lun","mar","mer","gio","ven","sab"],
        abbreviatedMonthGenitiveNames: ["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic",""],
        abbreviatedMonthNames: ["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic",""],
        amDesignator: "AM",
        dateSeparator: ".",
        dayNames: ["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd, d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre",""],
        monthNames: ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd.MM.yyyy",
        shortestDayNames: ["dom","lun","mar","mer","gio","ven","sab"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 1252,
        CultureName: "it-CH",
        EBCDICCodePage: 500,
        IsReadOnly: false,
        IsRightToLeft: false,
        LCID: 2064,
        MacCodePage: 10000,
        OEMCodePage: 850
    })
});
