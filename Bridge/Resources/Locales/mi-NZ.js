Bridge.merge(new System.Globalization.CultureInfo("mi-NZ", true), {
    englishName: "Maori (New Zealand)",
    nativeName: "Reo Māori (Aotearoa)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinity",
        positiveInfinitySymbol: "Infinity",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 2,
        percentNegativePattern: 2,
        currencySymbol: "$",
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
        abbreviatedDayNames: ["Ta","Hi","Tū","Apa","Pa","Me","Ho"],
        abbreviatedMonthGenitiveNames: ["Kohi","Hui","Pou","Pae","Hara","Pipi","Hōngo","Here","Mahu","Nuku","Rangi","Haki",""],
        abbreviatedMonthNames: ["Kohi","Hui","Pou","Pae","Hara","Pipi","Hōngo","Here","Mahu","Nuku","Rangi","Haki",""],
        amDesignator: "a.m.",
        dateSeparator: "/",
        dayNames: ["Rātapu","Rāhina","Rātū","Rāapa","Rāpare","Rāmere","Rāhoroi"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, dd MMMM, yyyy h:mm:ss tt",
        longDatePattern: "dddd, dd MMMM, yyyy",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["Kohitātea","Huitanguru","Poutūterangi","Paengawhāwhā","Haratua","Pipiri","Hōngongoi","Hereturikōkā","Mahuru","Whiringa ā-nuku","Whiringa ā-rangi","Hakihea",""],
        monthNames: ["Kohitātea","Huitanguru","Poutūterangi","Paengawhāwhā","Haratua","Pipiri","Hōngongoi","Hereturikōkā","Mahuru","Whiringa ā-nuku","Whiringa ā-rangi","Hakihea",""],
        pmDesignator: "p.m.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["Ta","Hi","Tū","Aa","Pa","Me","Ho"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 0,
        CultureName: "mi-NZ",
        EBCDICCodePage: 500,
        IsRightToLeft: false,
        LCID: 1153,
        listSeparator: ",",
        MacCodePage: 2,
        OEMCodePage: 1,
        IsReadOnly: true
    })
});
