Bridge.merge(new System.Globalization.CultureInfo("mn-Cyrl", true), {
    englishName: "Mongolian (Cyrillic)",
    nativeName: "Монгол хэл",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinity",
        positiveInfinitySymbol: "Infinity",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "₮",
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
        abbreviatedDayNames: ["Ня","Да","Мя","Лха","Пү","Ба","Бя"],
        abbreviatedMonthGenitiveNames: ["1-р сарын","2-р сарын","3-р сарын","4-р сарын","5-р сарын","6-р сарын","7-р сарын","8-р сарын","9-р сарын","10-р сарын","11-р сарын","12-р сарын",""],
        abbreviatedMonthNames: ["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар",""],
        amDesignator: "",
        dateSeparator: "-",
        dayNames: ["Ням","Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "yyyy 'оны' M'-р сарын' d. dddd 'гариг'. HH:mm:ss",
        longDatePattern: "yyyy 'оны' M'-р сарын' d. dddd 'гариг'.",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d.",
        monthGenitiveNames: ["1 дүгээр сарын","2 дугаар сарын","3 дугаар сарын","4 дүгээр сарын","5 дугаар сарын","6 дугаар сарын","7 дугаар сарын","8 дугаар сарын","9 дүгээр сарын","10 дугаар сарын","11 дүгээр сарын","12 дугаар сарын",""],
        monthNames: ["1 дүгээр сар","2 дугаар сар","3 дугаар сар","4 дүгээр сар","5 дугаар сар","6 дугаар сар","7 дугаар сар","8 дугаар сар","9 дүгээр сар","10 дугаар сар","11 дүгээр сар","12 дугаар сар",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["Ня","Да","Мя","Лх","Пү","Ба","Бя"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy 'оны' MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
