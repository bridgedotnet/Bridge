Bridge.merge(new System.Globalization.CultureInfo("jgo-CM", true), {
    englishName: "Ngomba (Cameroon)",
    nativeName: "Ndaꞌa (Kamɛlûn)",

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
        currencySymbol: "FCFA",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 0,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: ".",
        currencyNegativePattern: 9,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: ".",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Sɔ́ndi","Mɔ́ndi","Ápta Mɔ́ndi","Wɛ́nɛsɛdɛ","Tɔ́sɛdɛ","Fɛlâyɛdɛ","Sásidɛ"],
        abbreviatedMonthGenitiveNames: ["Nduŋmbi Saŋ","Pɛsaŋ Pɛ́pá","Pɛsaŋ Pɛ́tát","Pɛsaŋ Pɛ́nɛ́kwa","Pɛsaŋ Pataa","Pɛsaŋ Pɛ́nɛ́ntúkú","Pɛsaŋ Saambá","Pɛsaŋ Pɛ́nɛ́fɔm","Pɛsaŋ Pɛ́nɛ́pfúꞋú","Pɛsaŋ Nɛgɛ́m","Pɛsaŋ Ntsɔ̌pmɔ́","Pɛsaŋ Ntsɔ̌ppá",""],
        abbreviatedMonthNames: ["Nduŋmbi Saŋ","Pɛsaŋ Pɛ́pá","Pɛsaŋ Pɛ́tát","Pɛsaŋ Pɛ́nɛ́kwa","Pɛsaŋ Pataa","Pɛsaŋ Pɛ́nɛ́ntúkú","Pɛsaŋ Saambá","Pɛsaŋ Pɛ́nɛ́fɔm","Pɛsaŋ Pɛ́nɛ́pfúꞋú","Pɛsaŋ Nɛgɛ́m","Pɛsaŋ Ntsɔ̌pmɔ́","Pɛsaŋ Ntsɔ̌ppá",""],
        amDesignator: "mbaꞌmbaꞌ",
        dateSeparator: "-",
        dayNames: ["Sɔ́ndi","Mɔ́ndi","Ápta Mɔ́ndi","Wɛ́nɛsɛdɛ","Tɔ́sɛdɛ","Fɛlâyɛdɛ","Sásidɛ"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, yyyy MMMM dd HH:mm:ss",
        longDatePattern: "dddd, yyyy MMMM dd",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Nduŋmbi Saŋ","Pɛsaŋ Pɛ́pá","Pɛsaŋ Pɛ́tát","Pɛsaŋ Pɛ́nɛ́kwa","Pɛsaŋ Pataa","Pɛsaŋ Pɛ́nɛ́ntúkú","Pɛsaŋ Saambá","Pɛsaŋ Pɛ́nɛ́fɔm","Pɛsaŋ Pɛ́nɛ́pfúꞋú","Pɛsaŋ Nɛgɛ́m","Pɛsaŋ Ntsɔ̌pmɔ́","Pɛsaŋ Ntsɔ̌ppá",""],
        monthNames: ["Nduŋmbi Saŋ","Pɛsaŋ Pɛ́pá","Pɛsaŋ Pɛ́tát","Pɛsaŋ Pɛ́nɛ́kwa","Pɛsaŋ Pataa","Pɛsaŋ Pɛ́nɛ́ntúkú","Pɛsaŋ Saambá","Pɛsaŋ Pɛ́nɛ́fɔm","Pɛsaŋ Pɛ́nɛ́pfúꞋú","Pɛsaŋ Nɛgɛ́m","Pɛsaŋ Ntsɔ̌pmɔ́","Pɛsaŋ Ntsɔ̌ppá",""],
        pmDesignator: "ŋka mbɔ́t nji",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["Sɔ́ndi","Mɔ́ndi","Ápta Mɔ́ndi","Wɛ́nɛsɛdɛ","Tɔ́sɛdɛ","Fɛlâyɛdɛ","Sásidɛ"],
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
        CultureName: "jgo-CM",
        EBCDICCodePage: 500,
        IsReadOnly: false,
        IsRightToLeft: false,
        LCID: 4096,
        MacCodePage: 2,
        OEMCodePage: 1
    })
});
