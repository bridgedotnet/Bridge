Bridge.merge(new System.Globalization.CultureInfo("fa", true), {
    englishName: "Persian",
    nativeName: "فارسى",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "ناعدد",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: "/",
        percentGroupSeparator: ",",
        percentPositivePattern: 0,
        percentNegativePattern: 11,
        currencySymbol: "ريال",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: "/",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 6,
        currencyPositivePattern: 1,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: "/",
        numberGroupSeparator: ",",
        numberNegativePattern: 3
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],
        abbreviatedMonthGenitiveNames: ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند",""],
        abbreviatedMonthNames: ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند",""],
        amDesignator: "ق.ظ",
        dateSeparator: "/",
        dayNames: ["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],
        firstDayOfWeek: 6,
        fullDateTimePattern: "dddd, d MMMM yyyy hh:mm:ss tt",
        longDatePattern: "dddd, d MMMM yyyy",
        longTimePattern: "hh:mm:ss tt",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند",""],
        monthNames: ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند",""],
        pmDesignator: "ب.ظ",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["ی","د","س","چ","پ","ج","ش"],
        shortTimePattern: "hh:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 1256,
        CultureName: "fa-IR",
        EBCDICCodePage: 20420,
        IsRightToLeft: true,
        LCID: 1065,
        listSeparator: "؛",
        MacCodePage: 10004,
        OEMCodePage: 720,
        IsReadOnly: true
    })
});
