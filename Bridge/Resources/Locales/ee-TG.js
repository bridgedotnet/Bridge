Bridge.merge(new System.Globalization.CultureInfo("ee-TG", true), {
    englishName: "Ewe (Togo)",
    nativeName: "Eʋegbe (Togo nutome)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "mnn",
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
        currencySymbol: "CFA",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 0,
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
        abbreviatedDayNames: ["kɔs","dzo","bla","kuɖ","yaw","fiɖ","mem"],
        abbreviatedMonthGenitiveNames: ["dzv","dzd","ted","afɔ","dam","mas","sia","dea","any","kel","ade","dzm",""],
        abbreviatedMonthNames: ["dzv","dzd","ted","afɔ","dam","mas","sia","dea","any","kel","ade","dzm",""],
        amDesignator: "ŋdi",
        dateSeparator: "/",
        dayNames: ["kɔsiɖa","dzoɖa","blaɖa","kuɖa","yawoɖa","fiɖa","memleɖa"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, MMMM d 'lia' yyyy HH:mm:ss",
        longDatePattern: "dddd, MMMM d 'lia' yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d 'lia'",
        monthGenitiveNames: ["dzove","dzodze","tedoxe","afɔfĩe","dama","masa","siamlɔm","deasiamime","anyɔnyɔ","kele","adeɛmekpɔxe","dzome",""],
        monthNames: ["dzove","dzodze","tedoxe","afɔfĩe","dama","masa","siamlɔm","deasiamime","anyɔnyɔ","kele","adeɛmekpɔxe","dzome",""],
        pmDesignator: "ɣetrɔ",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "M/d/yyyy",
        shortestDayNames: ["kɔs","dzo","bla","kuɖ","yaw","fiɖ","mem"],
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
        CultureName: "ee-TG",
        EBCDICCodePage: 500,
        IsReadOnly: false,
        IsRightToLeft: false,
        LCID: 4096,
        MacCodePage: 2,
        OEMCodePage: 1
    })
});
