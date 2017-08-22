Bridge.merge(new System.Globalization.CultureInfo("nds-DE", true), {
    englishName: "Low German (Germany)",
    nativeName: "Neddersass’sch (Düütschland)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
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
        abbreviatedDayNames: ["Sü.","Ma.","Di.","Mi.","Du.","Fr.","Sa."],
        abbreviatedMonthGenitiveNames: ["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez.",""],
        abbreviatedMonthNames: ["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez.",""],
        amDesignator: "vm",
        dateSeparator: ".",
        dayNames: ["Sünndag","Maandag","Dingsdag","Middeweken","Dunnersdag","Freedag","Sünnavend"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, 'de' d. MMMM yyyy 'Klock' H.mm:ss",
        longDatePattern: "dddd, 'de' d. MMMM yyyy",
        longTimePattern: "'Klock' H.mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Januaar","Februaar","März","April","Mai","Juni","Juli","August","September","Oktover","November","Dezember",""],
        monthNames: ["Januaar","Februaar","März","April","Mai","Juni","Juli","August","September","Oktover","November","Dezember",""],
        pmDesignator: "nm",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d.MM.yyyy",
        shortestDayNames: ["Sü.","Ma.","Di.","Mi.","Du.","Fr.","Sa."],
        shortTimePattern: "'Kl'. H.mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ".",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 0,
        CultureName: "nds-DE",
        EBCDICCodePage: 500,
        IsRightToLeft: false,
        LCID: 4096,
        listSeparator: ";",
        MacCodePage: 2,
        OEMCodePage: 1,
        IsReadOnly: true
    })
});
