Bridge.merge(new System.Globalization.CultureInfo("ru-UA", true), {
    englishName: "Russian (Ukraine)",
    nativeName: "русский (Украина)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "не число",
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
        currencySymbol: "₴",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
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
        abbreviatedDayNames: ["вс","пн","вт","ср","чт","пт","сб"],
        abbreviatedMonthGenitiveNames: ["янв.","февр.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек.",""],
        abbreviatedMonthNames: ["янв.","февр.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек.",""],
        amDesignator: "AM",
        dateSeparator: ".",
        dayNames: ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, d MMMM yyyy 'г'. HH:mm:ss",
        longDatePattern: "dddd, d MMMM yyyy 'г'.",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря",""],
        monthNames: ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd.MM.yyyy",
        shortestDayNames: ["вс","пн","вт","ср","чт","пт","сб"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy 'г'.",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 1251,
        CultureName: "ru-UA",
        EBCDICCodePage: 500,
        IsRightToLeft: false,
        LCID: 4096,
        listSeparator: ";",
        MacCodePage: 2,
        OEMCodePage: 866,
        IsReadOnly: true
    })
});
