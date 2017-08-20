Bridge.merge(new System.Globalization.CultureInfo("oc-FR", true), {
    englishName: "Occitan (France)",
    nativeName: "Occitan (França)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "Micca numericu",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinit",
        positiveInfinitySymbol: "+Infinit",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "€",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["dg.","dl.","dma.","dmc.","dj.","dv.","ds."],
        abbreviatedMonthGenitiveNames: ["gen.","feb.","març","abr.","mai","junh","julh","ag.","set.","oct.","nov.","dec.",""],
        abbreviatedMonthNames: ["gen.","feb.","març","abr.","mai","junh","julh","ag.","set.","oct.","nov.","dec.",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["dimenge","diluns","dimarts","dimècres","dijòus","divendres","dissabte"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM' de 'yyyy HH.mm.ss",
        longDatePattern: "dddd d MMMM' de 'yyyy",
        longTimePattern: "HH.mm.ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["de genièr","de febrièr","de març","d'abril","de mai","de junh","de julhet","d'agost","de setembre","d'octobre","de novembre","de decembre",""],
        monthNames: ["genièr","febrièr","març","abril","mai","junh","julhet","agost","setembre","octobre","novembre","decembre",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["dg","dl","da","dc","dj","dv","ds"],
        shortTimePattern: "HH' h 'mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ".",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM' de 'yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 1252,
        CultureName: "oc-FR",
        EBCDICCodePage: 20297,
        IsReadOnly: false,
        IsRightToLeft: false,
        LCID: 1154,
        MacCodePage: 10000,
        OEMCodePage: 850
    })
});
