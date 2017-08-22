Bridge.merge(new System.Globalization.CultureInfo("ksf-CM", true), {
    englishName: "Bafia (Cameroon)",
    nativeName: "rikpa (kamɛrún)",

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
        percentPositivePattern: 1,
        percentNegativePattern: 1,
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
        abbreviatedDayNames: ["sɔ́n","lǝn","maa","mɛk","jǝǝ","júm","sam"],
        abbreviatedMonthGenitiveNames: ["ŋ1","ŋ2","ŋ3","ŋ4","ŋ5","ŋ6","ŋ7","ŋ8","ŋ9","ŋ10","ŋ11","ŋ12",""],
        abbreviatedMonthNames: ["ŋ1","ŋ2","ŋ3","ŋ4","ŋ5","ŋ6","ŋ7","ŋ8","ŋ9","ŋ10","ŋ11","ŋ12",""],
        amDesignator: "sárúwá",
        dateSeparator: "/",
        dayNames: ["sɔ́ndǝ","lǝndí","maadí","mɛkrɛdí","jǝǝdí","júmbá","samdí"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["ŋwíí a ntɔ́ntɔ","ŋwíí akǝ bɛ́ɛ","ŋwíí akǝ ráá","ŋwíí akǝ nin","ŋwíí akǝ táan","ŋwíí akǝ táafɔk","ŋwíí akǝ táabɛɛ","ŋwíí akǝ táaraa","ŋwíí akǝ táanin","ŋwíí akǝ ntɛk","ŋwíí akǝ ntɛk di bɔ́k","ŋwíí akǝ ntɛk di bɛ́ɛ",""],
        monthNames: ["ŋwíí a ntɔ́ntɔ","ŋwíí akǝ bɛ́ɛ","ŋwíí akǝ ráá","ŋwíí akǝ nin","ŋwíí akǝ táan","ŋwíí akǝ táafɔk","ŋwíí akǝ táabɛɛ","ŋwíí akǝ táaraa","ŋwíí akǝ táanin","ŋwíí akǝ ntɛk","ŋwíí akǝ ntɛk di bɔ́k","ŋwíí akǝ ntɛk di bɛ́ɛ",""],
        pmDesignator: "cɛɛ́nko",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/M/yyyy",
        shortestDayNames: ["sɔ́n","lǝn","maa","mɛk","jǝǝ","júm","sam"],
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
        CultureName: "ksf-CM",
        EBCDICCodePage: 500,
        IsRightToLeft: false,
        LCID: 4096,
        listSeparator: ";",
        MacCodePage: 2,
        OEMCodePage: 1,
        IsReadOnly: true
    })
});
