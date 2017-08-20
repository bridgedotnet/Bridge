Bridge.merge(new System.Globalization.CultureInfo("kl", true), {
    englishName: "Greenlandic",
    nativeName: "kalaallisut",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "¤¤¤",
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
        currencySymbol: "kr.",
        currencyGroupSizes: [3,0],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: ".",
        currencyNegativePattern: 12,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: ".",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["sap.","at.","marl.","ping.","sis.","tall.","arf."],
        abbreviatedMonthGenitiveNames: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","dec",""],
        abbreviatedMonthNames: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","dec",""],
        amDesignator: "",
        dateSeparator: "-",
        dayNames: ["sapaat","ataasinngorneq","marlunngorneq","pingasunngorneq","sisamanngorneq","tallimanngorneq","arfininngorneq"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "MMMM d'.-at, 'yyyy HH:mm:ss",
        longDatePattern: "MMMM d'.-at, 'yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d'.-at'",
        monthGenitiveNames: ["januaarip","februaarip","marsip","apriilip","maajip","juunip","juulip","aggustip","septembarip","oktobarip","novembarip","decembarip",""],
        monthNames: ["januaari","februaari","marsi","apriili","maaji","juuni","juuli","aggusti","septembari","oktobari","novembari","decembari",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd-MM-yyyy",
        shortestDayNames: ["sa","at","ma","pi","si","ta","ar"],
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
        CultureName: "kl-GL",
        EBCDICCodePage: 20277,
        IsReadOnly: false,
        IsRightToLeft: false,
        LCID: 1135,
        MacCodePage: 10000,
        OEMCodePage: 850
    })
});
