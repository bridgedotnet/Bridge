Bridge.merge(new System.Globalization.CultureInfo("dav", true), {
    englishName: "Taita",
    nativeName: "Kitaita",

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
        percentGroupSeparator: ",",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "Ksh",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Jum","Jim","Kaw","Kad","Kan","Kas","Ngu"],
        abbreviatedMonthGenitiveNames: ["Imb","Kaw","Kad","Kan","Kas","Kar","Mfu","Wun","Ike","Iku","Imw","Iwi",""],
        abbreviatedMonthNames: ["Imb","Kaw","Kad","Kan","Kas","Kar","Mfu","Wun","Ike","Iku","Imw","Iwi",""],
        amDesignator: "Luma lwa K",
        dateSeparator: "/",
        dayNames: ["Ituku ja jumwa","Kuramuka jimweri","Kuramuka kawi","Kuramuka kadadu","Kuramuka kana","Kuramuka kasanu","Kifula nguwo"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dddd, d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd, d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Mori ghwa imbiri","Mori ghwa kawi","Mori ghwa kadadu","Mori ghwa kana","Mori ghwa kasanu","Mori ghwa karandadu","Mori ghwa mfungade","Mori ghwa wunyanya","Mori ghwa ikenda","Mori ghwa ikumi","Mori ghwa ikumi na imweri","Mori ghwa ikumi na iwi",""],
        monthNames: ["Mori ghwa imbiri","Mori ghwa kawi","Mori ghwa kadadu","Mori ghwa kana","Mori ghwa kasanu","Mori ghwa karandadu","Mori ghwa mfungade","Mori ghwa wunyanya","Mori ghwa ikenda","Mori ghwa ikumi","Mori ghwa ikumi na imweri","Mori ghwa ikumi na iwi",""],
        pmDesignator: "luma lwa p",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["Jum","Jim","Kaw","Kad","Kan","Kas","Ngu"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 0,
        CultureName: "dav-KE",
        EBCDICCodePage: 500,
        IsReadOnly: false,
        IsRightToLeft: false,
        LCID: 4096,
        MacCodePage: 2,
        OEMCodePage: 1
    })
});
