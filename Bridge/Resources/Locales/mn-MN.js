Bridge.merge(new System.Globalization.CultureInfo("mn-MN", true), {
    englishName: "Mongolian (Mongolia)",
    nativeName: "монгол (Монгол)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
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
        currencySymbol: "₮",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 0,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 9,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Ня","Да","Мя","Лх","Пү","Ба","Бя"],
        abbreviatedMonthGenitiveNames: ["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар",""],
        abbreviatedMonthNames: ["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар",""],
        amDesignator: "ҮӨ",
        dateSeparator: "-",
        dayNames: ["ням","даваа","мягмар","лхагва","пүрэв","баасан","бямба"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, yyyy 'оны' MM 'сарын' d HH:mm:ss",
        longDatePattern: "dddd, yyyy 'оны' MM 'сарын' d",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Нэгдүгээр сар","Хоёрдугаар сар","Гуравдугаар сар","Дөрөвдүгээр сар","Тавдугаар сар","Зургадугаар сар","Долдугаар сар","Наймдугаар сар","Есдүгээр сар","Аравдугаар сар","Арван нэгдүгээр сар","Арван хоёрдугаар сар",""],
        monthNames: ["Нэгдүгээр сар","Хоёрдугаар сар","Гуравдугаар сар","Дөрөвдүгээр сар","Тавдугаар сар","Зургадугаар сар","Долдугаар сар","Наймдугаар сар","Есдүгээр сар","Аравдугаар сар","Арван нэгдүгээр сар","Арван хоёрдугаар сар",""],
        pmDesignator: "ҮХ",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["Ня","Да","Мя","Лх","Пү","Ба","Бя"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 1251,
        CultureName: "mn-MN",
        EBCDICCodePage: 20880,
        IsReadOnly: false,
        IsRightToLeft: false,
        LCID: 1104,
        MacCodePage: 10007,
        OEMCodePage: 866
    })
});
