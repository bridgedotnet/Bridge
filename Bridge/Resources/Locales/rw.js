Bridge.merge(new System.Globalization.CultureInfo("rw", true), {
    englishName: "Kinyarwanda",
    nativeName: "Kinyarwanda",

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
        currencySymbol: "RF",
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
        abbreviatedDayNames: ["cyu.","mbe.","kab.","gtu.","kan.","gnu.","gnd."],
        abbreviatedMonthGenitiveNames: ["mut.","gas.","wer.","mat.","gic.","kam.","nya.","kan.","nze.","ukw.","ugu.","uku.",""],
        abbreviatedMonthNames: ["mut.","gas.","wer.","mat.","gic.","kam.","nya.","kan.","nze.","ukw.","ugu.","uku.",""],
        amDesignator: "AM",
        dateSeparator: "-",
        dayNames: ["Ku cyumweru","Kuwa mbere","Kuwa kabiri","Kuwa gatatu","Kuwa kane","Kuwa gatanu","Kuwa gatandatu"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "yyyy MMMM d, dddd HH:mm:ss",
        longDatePattern: "yyyy MMMM d, dddd",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Mutarama","Gashyantare","Werurwe","Mata","Gicuransi","Kamena","Nyakanga","Kanama","Nzeli","Ukwakira","Ugushyingo","Ukuboza",""],
        monthNames: ["Mutarama","Gashyantare","Werurwe","Mata","Gicuransi","Kamena","Nyakanga","Kanama","Nzeli","Ukwakira","Ugushyingo","Ukuboza",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["cyu.","mbe.","kab.","gtu.","kan.","gnu.","gnd."],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 1252,
        CultureName: "rw-RW",
        EBCDICCodePage: 37,
        IsRightToLeft: false,
        LCID: 1159,
        listSeparator: ";",
        MacCodePage: 10000,
        OEMCodePage: 437,
        IsReadOnly: true
    })
});
