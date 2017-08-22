Bridge.merge(new System.Globalization.CultureInfo("dz-BT", true), {
    englishName: "Dzongkha (Bhutan)",
    nativeName: "རྫོང་ཁ (འབྲུག)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3,2],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "Nu.",
        currencyGroupSizes: [3,2],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3,2],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["ཟླ་","མིར་","ལྷག་","ཕུར་","སངས་","སྤེན་","ཉི་"],
        abbreviatedMonthGenitiveNames: ["༡","༢","༣","༤","༥","༦","༧","༨","༩","༡༠","༡༡","12",""],
        abbreviatedMonthNames: ["ཟླ་༡","ཟླ་༢","ཟླ་༣","ཟླ་༤","ཟླ་༥","ཟླ་༦","ཟླ་༧","ཟླ་༨","ཟླ་༩","ཟླ་༡༠","ཟླ་༡༡","ཟླ་༡༢",""],
        amDesignator: "སྔ་ཆ་",
        dateSeparator: "-",
        dayNames: ["གཟའ་ཟླ་བ་","གཟའ་མིག་དམར་","གཟའ་ལྷག་པ་","གཟའ་ཕུར་བུ་","གཟའ་པ་སངས་","གཟའ་སྤེན་པ་","གཟའ་ཉི་མ་"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dddd, སྤྱི་ལོ་yyyy MMMM ཚེས་dd ཆུ་ཚོད་h:mm:ss tt",
        longDatePattern: "dddd, སྤྱི་ལོ་yyyy MMMM ཚེས་dd",
        longTimePattern: "ཆུ་ཚོད་h:mm:ss tt",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["ཟླ་དངཔ་","ཟླ་གཉིས་པ་","ཟླ་གསུམ་པ་","ཟླ་བཞི་པ་","ཟླ་ལྔ་པ་","ཟླ་དྲུག་པ","ཟླ་བདུན་པ་","ཟླ་བརྒྱད་པ་","ཟླ་དགུ་པ་","ཟླ་བཅུ་པ་","ཟླ་བཅུ་གཅིག་པ་","ཟླ་བཅུ་གཉིས་པ་",""],
        monthNames: ["སྤྱི་ཟླ་དངཔ་","སྤྱི་ཟླ་གཉིས་པ་","སྤྱི་ཟླ་གསུམ་པ་","སྤྱི་ཟླ་བཞི་པ","སྤྱི་ཟླ་ལྔ་པ་","སྤྱི་ཟླ་དྲུག་པ","སྤྱི་ཟླ་བདུན་པ་","སྤྱི་ཟླ་བརྒྱད་པ་","སྤྱི་ཟླ་དགུ་པ་","སྤྱི་ཟླ་བཅུ་པ་","སྤྱི་ཟླ་བཅུ་གཅིག་པ་","སྤྱི་ཟླ་བཅུ་གཉིས་པ་",""],
        pmDesignator: "ཕྱི་ཆ་",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["ཟླ་","མིར་","ལྷག་","ཕུར་","སངས་","སྤེན་","ཉི་"],
        shortTimePattern: "ཆུ་ཚོད་ h སྐར་མ་ mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 0,
        CultureName: "dz-BT",
        EBCDICCodePage: 500,
        IsRightToLeft: false,
        LCID: 3153,
        listSeparator: ";",
        MacCodePage: 2,
        OEMCodePage: 1,
        IsReadOnly: true
    })
});
