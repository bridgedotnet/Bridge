Bridge.merge(new System.Globalization.CultureInfo("sr-Latn-BA", true), {
    englishName: "Serbian (Latin, Bosnia and Herzegovina)",
    nativeName: "srpski (Bosna i Hercegovina)",

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
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "KM",
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
        abbreviatedDayNames: ["ned.","pon.","ut.","sr.","čet.","pet.","sub."],
        abbreviatedMonthGenitiveNames: ["jan.","feb.","mart","apr.","maj","jun","jul","avg.","sept.","okt.","nov.","dec.",""],
        abbreviatedMonthNames: ["jan.","feb.","mart","apr.","maj","jun","jul","avg.","sept.","okt.","nov.","dec.",""],
        amDesignator: "prije podne",
        dateSeparator: ".",
        dayNames: ["nedjelja","ponedeljak","utorak","srijeda","četvrtak","petak","subota"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, dd. MMMM yyyy. HH:mm:ss",
        longDatePattern: "dddd, dd. MMMM yyyy.",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d. MMMM",
        monthGenitiveNames: ["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar",""],
        monthNames: ["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar",""],
        pmDesignator: "po podne",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d.M.yyyy.",
        shortestDayNames: ["ne","po","ut","sr","če","pe","su"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy.",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 1250,
        CultureName: "sr-Latn-BA",
        EBCDICCodePage: 870,
        IsReadOnly: false,
        IsRightToLeft: false,
        LCID: 6170,
        MacCodePage: 10082,
        OEMCodePage: 852
    })
});
