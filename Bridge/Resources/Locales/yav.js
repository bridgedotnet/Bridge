Bridge.merge(new System.Globalization.CultureInfo("yav", true), {
    englishName: "Yangben",
    nativeName: "nuasue",

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
        abbreviatedDayNames: ["sd","md","mw","et","kl","fl","ss"],
        abbreviatedMonthGenitiveNames: ["o.1","o.2","o.3","o.4","o.5","o.6","o.7","o.8","o.9","o.10","o.11","o.12",""],
        abbreviatedMonthNames: ["o.1","o.2","o.3","o.4","o.5","o.6","o.7","o.8","o.9","o.10","o.11","o.12",""],
        amDesignator: "kiɛmɛ́ɛm",
        dateSeparator: "/",
        dayNames: ["sɔ́ndiɛ","móndie","muányáŋmóndie","metúkpíápɛ","kúpélimetúkpiapɛ","feléte","séselé"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["pikítíkítie, oólí ú kutúan","siɛyɛ́, oóli ú kándíɛ","ɔnsúmbɔl, oóli ú kátátúɛ","mesiŋ, oóli ú kénie","ensil, oóli ú kátánuɛ","ɔsɔn","efute","pisuyú","imɛŋ i puɔs","imɛŋ i putúk,oóli ú kátíɛ","makandikɛ","pilɔndɔ́",""],
        monthNames: ["pikítíkítie, oólí ú kutúan","siɛyɛ́, oóli ú kándíɛ","ɔnsúmbɔl, oóli ú kátátúɛ","mesiŋ, oóli ú kénie","ensil, oóli ú kátánuɛ","ɔsɔn","efute","pisuyú","imɛŋ i puɔs","imɛŋ i putúk,oóli ú kátíɛ","makandikɛ","pilɔndɔ́",""],
        pmDesignator: "kisɛ́ndɛ",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/M/yyyy",
        shortestDayNames: ["sd","md","mw","et","kl","fl","ss"],
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
        CultureName: "yav-CM",
        EBCDICCodePage: 500,
        IsRightToLeft: false,
        LCID: 4096,
        listSeparator: ";",
        MacCodePage: 2,
        OEMCodePage: 1,
        IsReadOnly: true
    })
});
