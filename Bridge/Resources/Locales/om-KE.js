Bridge.merge(new System.Globalization.CultureInfo("om-KE", true), {
    englishName: "Oromo (Kenya)",
    nativeName: "Oromoo (Keeniyaa)",

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
        currencySymbol: "Ksh",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
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
        abbreviatedDayNames: ["Dil","Wix","Qib","Rob","Kam","Jim","San"],
        abbreviatedMonthGenitiveNames: ["Ama","Gur","Bit","Elb","Cam","Wax","Ado","Hag","Ful","Onk","Sad","Mud",""],
        abbreviatedMonthNames: ["Ama","Gur","Bit","Elb","Cam","Wax","Ado","Hag","Ful","Onk","Sad","Mud",""],
        amDesignator: "WD",
        dateSeparator: "/",
        dayNames: ["Dilbata","Wiixata","Qibxata","Roobii","Kamiisa","Jimaata","Sanbata"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dddd, MMMM d, yyyy HH:mm:ss",
        longDatePattern: "dddd, MMMM d, yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Amajjii","Guraandhala","Bitooteessa","Elba","Caamsa","Waxabajjii","Adooleessa","Hagayya","Fuulbana","Onkololeessa","Sadaasa","Muddee",""],
        monthNames: ["Amajjii","Guraandhala","Bitooteessa","Elba","Caamsa","Waxabajjii","Adooleessa","Hagayya","Fuulbana","Onkololeessa","Sadaasa","Muddee",""],
        pmDesignator: "WB",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["Dil","Wix","Qib","Rob","Kam","Jim","San"],
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
        CultureName: "om-KE",
        EBCDICCodePage: 500,
        IsReadOnly: false,
        IsRightToLeft: false,
        LCID: 4096,
        MacCodePage: 2,
        OEMCodePage: 1
    })
});
