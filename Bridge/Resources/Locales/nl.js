Bridge.merge(new System.Globalization.CultureInfo("nl", true), {
    englishName: "Dutch",
    nativeName: "Nederlands",

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
        currencyNegativePattern: 12,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: ".",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["zo","ma","di","wo","do","vr","za"],
        abbreviatedMonthGenitiveNames: ["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec",""],
        abbreviatedMonthNames: ["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec",""],
        amDesignator: "",
        dateSeparator: "-",
        dayNames: ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december",""],
        monthNames: ["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d-M-yyyy",
        shortestDayNames: ["zo","ma","di","wo","do","vr","za"],
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
        CultureName: "nl-NL",
        EBCDICCodePage: 500,
        IsRightToLeft: false,
        LCID: 1043,
        listSeparator: ";",
        MacCodePage: 10000,
        OEMCodePage: 850,
        IsReadOnly: true
    })
});
