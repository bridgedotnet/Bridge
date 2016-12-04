Bridge.merge(new System.Globalization.CultureInfo("eu-ES", true), {
    englishName: "Basque (Basque)",
    nativeName: "euskara (euskara)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "EdZ",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinitu",
        positiveInfinitySymbol: "Infinitu",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: ".",
        percentPositivePattern: 3,
        percentNegativePattern: 10,
        currencySymbol: "€",
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
        abbreviatedDayNames: ["ig.","al.","as.","az.","og.","or.","lr."],
        abbreviatedMonthGenitiveNames: ["urt.","ots.","mar.","api.","mai.","eka.","uzt.","abu.","ira.","urr.","aza.","abe.",""],
        abbreviatedMonthNames: ["urt.","ots.","mar.","api.","mai.","eka.","uzt.","abu.","ira.","urr.","aza.","abe.",""],
        amDesignator: "",
        dateSeparator: "/",
        dayNames: ["igandea","astelehena","asteartea","asteazkena","osteguna","ostirala","larunbata"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, yyyy'(e)ko' MMMM'ren' d'a' H:mm:ss",
        longDatePattern: "dddd, yyyy'(e)ko' MMMM'ren' d'a'",
        longTimePattern: "H:mm:ss",
        monthDayPattern: "MMMM'ren' d'a'",
        monthGenitiveNames: ["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua",""],
        monthNames: ["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy/MM/dd",
        shortestDayNames: ["ig","al","as","az","og","or","lr"],
        shortTimePattern: "H:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy'(e)ko' MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
