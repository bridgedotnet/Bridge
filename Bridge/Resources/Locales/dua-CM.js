Bridge.merge(new System.Globalization.CultureInfo("dua-CM", true), {
    englishName: "Duala (Cameroon)",
    nativeName: "duálá (Cameroun)",

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
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "FCFA",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 0,
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
        abbreviatedDayNames: ["ét","mɔ́s","kwa","muk","ŋgi","ɗón","esa"],
        abbreviatedMonthGenitiveNames: ["di","ŋgɔn","sɔŋ","diɓ","emi","esɔ","mad","diŋ","nyɛt","may","tin","elá",""],
        abbreviatedMonthNames: ["di","ŋgɔn","sɔŋ","diɓ","emi","esɔ","mad","diŋ","nyɛt","may","tin","elá",""],
        amDesignator: "idiɓa",
        dateSeparator: "/",
        dayNames: ["éti","mɔ́sú","kwasú","mukɔ́sú","ŋgisú","ɗónɛsú","esaɓasú"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["dimɔ́di","ŋgɔndɛ","sɔŋɛ","diɓáɓá","emiasele","esɔpɛsɔpɛ","madiɓɛ́díɓɛ́","diŋgindi","nyɛtɛki","mayésɛ́","tiníní","eláŋgɛ́",""],
        monthNames: ["dimɔ́di","ŋgɔndɛ","sɔŋɛ","diɓáɓá","emiasele","esɔpɛsɔpɛ","madiɓɛ́díɓɛ́","diŋgindi","nyɛtɛki","mayésɛ́","tiníní","eláŋgɛ́",""],
        pmDesignator: "ebyámu",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/M/yyyy",
        shortestDayNames: ["ét","mɔ́s","kwa","muk","ŋgi","ɗón","esa"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 0,
        CultureName: "dua-CM",
        EBCDICCodePage: 500,
        IsReadOnly: false,
        IsRightToLeft: false,
        LCID: 4096,
        MacCodePage: 2,
        OEMCodePage: 1
    })
});
