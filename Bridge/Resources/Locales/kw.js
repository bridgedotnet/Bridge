Bridge.merge(new System.Globalization.CultureInfo("kw", true), {
    englishName: "Cornish",
    nativeName: "kernewek",

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
        currencySymbol: "£",
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
        abbreviatedDayNames: ["Sul","Lun","Mth","Mhr","Yow","Gwe","Sad"],
        abbreviatedMonthGenitiveNames: ["Gen","Hwe","Meu","Ebr","Me","Met","Gor","Est","Gwn","Hed","Du","Kev",""],
        abbreviatedMonthNames: ["Gen","Hwe","Meu","Ebr","Me","Met","Gor","Est","Gwn","Hed","Du","Kev",""],
        amDesignator: "a.m.",
        dateSeparator: "/",
        dayNames: ["dy Sul","dy Lun","dy Meurth","dy Merher","dy Yow","dy Gwener","dy Sadorn"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["mis Genver","mis Hwevrer","mis Meurth","mis Ebrel","mis Me","mis Metheven","mis Gortheren","mis Est","mis Gwynngala","mis Hedra","mis Du","mis Kevardhu",""],
        monthNames: ["mis Genver","mis Hwevrer","mis Meurth","mis Ebrel","mis Me","mis Metheven","mis Gortheren","mis Est","mis Gwynngala","mis Hedra","mis Du","mis Kevardhu",""],
        pmDesignator: "p.m.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["Sul","Lun","Mth","Mhr","Yow","Gwe","Sad"],
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
        CultureName: "kw-GB",
        EBCDICCodePage: 500,
        IsReadOnly: false,
        IsRightToLeft: false,
        LCID: 4096,
        MacCodePage: 2,
        OEMCodePage: 1
    })
});
