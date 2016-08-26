
    Bridge.define('LinkedFiles.Issue531Link1');

    Bridge.define('LinkedFiles.Issue531Link2');

    Bridge.define('LinkedFiles.Issue531Link3');

    Bridge.define('LinkedFiles.Issue531Link4');

    Bridge.define('TestIssue379.Tests', {
        testDataIgnore: function () {
            var d1 = {  };
            var d2 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d3 = { mode: 0 };
            var d4 = { mode: 0, int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d5 = { mode: 2, int1: 0, int2: 2, str3: null, str4: "Str4", intNull5: null, intNull6: 6, decimal7: System.Decimal(0.0), decimal8: System.Decimal(8) };
            var d6 = { mode: 2, int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d7 = { mode: 1, int2: 2, str4: "Str4", intNull6: 6, decimal8: System.Decimal(8) };
            var d8 = { mode: 1, int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };
        },
        testDataDefaultValue: function () {
            var d1 = { int1: 0, int2: 2, str3: null, str4: "Str4", intNull5: null, intNull6: 6, decimal7: System.Decimal(0.0), decimal8: System.Decimal(8) };
            var d2 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d3 = { mode: 0 };
            var d4 = { mode: 0, int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d5 = { mode: 2, int1: 0, int2: 2, str3: null, str4: "Str4", intNull5: null, intNull6: 6, decimal7: System.Decimal(0.0), decimal8: System.Decimal(8) };
            var d6 = { mode: 2, int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d7 = { mode: 1, int2: 2, str4: "Str4", intNull6: 6, decimal8: System.Decimal(8) };
            var d8 = { mode: 1, int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };
        },
        testDataInitializer: function () {
            var d1 = { int2: 2, str4: "Str4", intNull6: 6, decimal8: System.Decimal(8) };
            var d2 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d3 = { mode: 0 };
            var d4 = { mode: 0, int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d5 = { mode: 2, int1: 0, int2: 2, str3: null, str4: "Str4", intNull5: null, intNull6: 6, decimal7: System.Decimal(0.0), decimal8: System.Decimal(8) };
            var d6 = { mode: 2, int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d7 = { mode: 1, int2: 2, str4: "Str4", intNull6: 6, decimal8: System.Decimal(8) };
            var d8 = { mode: 1, int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };
        }
    });
