Bridge.merge(new System.Globalization.CultureInfo("bg", true), {
    englishName: "Bulgarian",
    nativeName: "български",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "- безкрайност",
        positiveInfinitySymbol: "+ безкрайност",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "лв.",
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
        abbreviatedDayNames: ["нед","пон","вт","ср","четв","пет","съб"],
        abbreviatedMonthGenitiveNames: ["яну","фев","мар","апр","май","юни","юли","авг","сеп","окт","ное","дек",""],
        abbreviatedMonthNames: ["яну","фев","мар","апр","май","юни","юли","авг","сеп","окт","ное","дек",""],
        amDesignator: "",
        dateSeparator: ".",
        dayNames: ["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dd MMMM yyyy 'г.' H:mm:ss",
        longDatePattern: "dd MMMM yyyy 'г.'",
        longTimePattern: "H:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември",""],
        monthNames: ["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d.M.yyyy 'г.'",
        shortestDayNames: ["нд","пн","вт","ср","чт","пт","сб"],
        shortTimePattern: "H:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy 'г.'",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
