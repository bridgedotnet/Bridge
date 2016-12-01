    Bridge.define("TestIssue379.DataDefaultValue", {
        $literal: true
    });

    Bridge.define("TestIssue379.DataIgnore", {
        $literal: true
    });

    Bridge.define("TestIssue379.DataInitializer", {
        $literal: true
    });

    Bridge.define("TestIssue379.Tests", {
        testDataIgnore: function () {
            var d1 = TestIssue379.DataIgnore.ctor({  });
            var d2 = TestIssue379.DataIgnore.ctor({ int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) });

            var d3 = TestIssue379.DataIgnore.ctor({  });
            var d4 = TestIssue379.DataIgnore.ctor({ int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) });

            var d5 = TestIssue379.DataIgnore.ctor({  });
            var d6 = TestIssue379.DataIgnore.ctor({ int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) });

            var d7 = TestIssue379.DataIgnore.ctor({  });
            var d8 = TestIssue379.DataIgnore.ctor({ int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) });
        },
        testDataDefaultValue: function () {
            var d1 = TestIssue379.DataDefaultValue.ctor({ int1: 0, int2: 2, str3: null, str4: "Str4", intNull5: null, intNull6: 6, decimal7: System.Decimal(0.0), decimal8: System.Decimal(8) });
            var d2 = TestIssue379.DataDefaultValue.ctor({ int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) });

            var d3 = TestIssue379.DataDefaultValue.ctor({  });
            var d4 = TestIssue379.DataDefaultValue.ctor({ int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) });

            var d5 = TestIssue379.DataDefaultValue.ctor({  });
            var d6 = TestIssue379.DataDefaultValue.ctor({ int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) });

            var d7 = TestIssue379.DataDefaultValue.ctor({  });
            var d8 = TestIssue379.DataDefaultValue.ctor({ int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) });
        },
        testDataInitializer: function () {
            var d1 = TestIssue379.DataInitializer.ctor({ int2: 2, str4: "Str4", intNull6: 6, decimal8: System.Decimal(8) });
            var d2 = TestIssue379.DataInitializer.ctor({ int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) });

            var d3 = TestIssue379.DataInitializer.ctor({  });
            var d4 = TestIssue379.DataInitializer.ctor({ int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) });

            var d5 = TestIssue379.DataInitializer.ctor({  });
            var d6 = TestIssue379.DataInitializer.ctor({ int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) });

            var d7 = TestIssue379.DataInitializer.ctor({  });
            var d8 = TestIssue379.DataInitializer.ctor({ int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) });
        }
    });
