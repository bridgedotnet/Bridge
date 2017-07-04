/**
 * @version   : 16.0.0-beta4 - Bridge.NET
 * @author    : Object.NET, Inc. http://bridge.net/
 * @date      : 2017-06-27
 * @copyright : Copyright 2008-2017 Object.NET, Inc. http://object.net/
 * @license   : See license.txt and https://github.com/bridgedotnet/Bridge/blob/master/LICENSE.md
 */

Here and below the content marker (see // @!!! etc) will be skipped for comparing
The text after the content marked will be compared

// @!!! Content begin mark. This is required to mark beginning of the file part to compare to the reference without bridge.js content
// This is resource from referenced project A for testing issue #2717
// --- A ---
// This is resource from referenced project B for testing issue #2717
// --- B depends on A
// This is resource from referenced project C for testing issue #2717
// --- C depends on B
Bridge.merge(new System.Globalization.CultureInfo("en-US", true), {
    englishName: "English (United States)",
    nativeName: "English (United States)",

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
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "$",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 0,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
        abbreviatedMonthGenitiveNames: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],
        abbreviatedMonthNames: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dddd, MMMM d, yyyy h:mm:ss tt",
        longDatePattern: "dddd, MMMM d, yyyy",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["January","February","March","April","May","June","July","August","September","October","November","December",""],
        monthNames: ["January","February","March","April","May","June","July","August","September","October","November","December",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "M/d/yyyy",
        shortestDayNames: ["Su","Mo","Tu","We","Th","Fr","Sa"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});

// Should be at the top (issue 1193). Beginning of Test 02 project output itself (after referenced resources)

/**
 * Bridge Test library.
 * @version 1.0.0.0
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2015 Object.NET, Inc.
 * @compiler Bridge.NET 16.0.0-beta4
 */
Bridge.assembly("TestProject.I2096", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1193.TopShouldbBOverAssemblyDescription");

    Bridge.define("Test.BridgeIssues.N1424.A");

    Bridge.define("Test.BridgeIssues.N1424.Alpha", {
        props: {
            Data: 0
        }
    });

    Bridge.define("Test.BridgeIssues.N1424.B");

    Bridge.define("Test.BridgeIssues.N2717.N2717", {
        methods: {
            UseReferencedProjects: function () {
                // This is to force C# compiler to use references to projects A, B and C
                var a = new Object();
                var b = new Object();
                var c = new Object();
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N770.IBase", {
        $kind: "interface"
    });

    Bridge.define("TestProject1.TestClassA", {
        props: {
            Value1: 0
        }
    });

    Bridge.define("TestProject2.TestClassB", {
        props: {
            Value1: 0
        }
    });

    Bridge.define("Test.BridgeIssues.N770.Impl", {
        inherits: [Test.BridgeIssues.N770.IBase],
        props: {
            Prop: 0
        },
        alias: ["Prop", "Test$BridgeIssues$N770$IBase$Prop"]
    });
});

Bridge.assembly("TestProject.I2096", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System,Test.BridgeIssues.N2717,Test.BridgeIssues.N1424,Test.BridgeIssues.N1193,Test.BridgeIssues.N770,TestProject2,TestProject1];
    $m($n[1].N2717, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"UseReferencedProjects","t":8,"sn":"UseReferencedProjects","rt":$n[0].Void}]}; });
    $m($n[2].Alpha, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Data","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Data","t":8,"rt":$n[0].Int32,"fg":"Data"},"s":{"a":2,"n":"set_Data","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Data"},"fn":"Data"}]}; });
    $m($n[2].A, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Data","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Data","t":8,"rt":$n[0].Int32,"fg":"Data"},"s":{"a":2,"n":"set_Data","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Data"},"fn":"Data"}]}; });
    $m($n[2].B, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Data","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Data","t":8,"tpc":0,"def":function () { return Q; },"rt":$n[0].Int32},"s":{"a":2,"n":"set_Data","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"tpc":0,"def":function (value) { return W; },"rt":$n[0].Void,"p":[$n[0].Int32]}}]}; });
    $m($n[3].TopShouldbBOverAssemblyDescription, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Top","is":true,"t":8,"sn":"Top","rt":$n[0].Void}]}; });
    $m($n[4].IBase, function () { return {"att":161,"a":2,"m":[{"ab":true,"a":2,"n":"Prop","t":16,"rt":$n[0].Single,"g":{"ab":true,"a":2,"n":"get_Prop","t":8,"rt":$n[0].Single,"fg":"Test$BridgeIssues$N770$IBase$Prop"},"s":{"ab":true,"a":2,"n":"set_Prop","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"Test$BridgeIssues$N770$IBase$Prop"},"fn":"Test$BridgeIssues$N770$IBase$Prop"}]}; });
    $m($n[4].Impl, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Prop","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Prop","t":8,"rt":$n[0].Single,"fg":"Prop"},"s":{"a":2,"n":"set_Prop","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"Prop"},"fn":"Prop"}]}; });
    $m($n[5].TestClassB, function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Value1","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Value1","t":8,"rt":$n[0].Int32,"fg":"Value1"},"s":{"a":2,"n":"set_Value1","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Value1"},"fn":"Value1"}]}; });
    $m($n[6].TestClassA, function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Value1","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Value1","t":8,"rt":$n[0].Int32,"fg":"Value1"},"s":{"a":2,"n":"set_Value1","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Value1"},"fn":"Value1"}]}; });
});
