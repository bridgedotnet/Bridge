    Bridge.define("TestIssue1230.Issue1230", {
        statics: {
            methods: {
                TestLong: function TestLong() {
                    // Conversions should not have duplicated Bridge.Long: Bridge.Long(Bridge.Long(v))
                    var v = 7;
                    var l = System.Int64(v);
                    l = System.Int64(v);

                    Bridge.Console.log(System.Int64(v).toString());
                    Bridge.Console.log(System.Int64(v).toString());
                    Bridge.Console.log(System.Int64(2).toString());
                    Bridge.Console.log(System.Int64(2).toString());
                    Bridge.Console.log(System.Int64(7).toString());
                    TestIssue1230.Issue1230.MethodLong(System.Int64(v));
                    TestIssue1230.Issue1230.MethodLong(System.Int64(v));
                },
                MethodLong: function MethodLong(l) {
                },
                MethodDecimal: function MethodDecimal(l) {
                },
                MethodInt: function MethodInt(l) {
                },
                TestDecimal: function TestDecimal() {
                    // Conversions should not have duplicated Bridge.Decimal: Bridge.Decimal(Bridge.Decimal(v))
                    var v = 7;
                    var l = System.Decimal(v);
                    l = System.Decimal(v);

                    Bridge.Console.log(System.Decimal(v).toString('G'));
                    Bridge.Console.log(System.Decimal(v).toString('G'));
                    Bridge.Console.log(System.Decimal(2.0).toString('G'));
                    Bridge.Console.log(System.Decimal(2.0).toString('G'));
                    Bridge.Console.log(System.Decimal(7.0).toString('G'));
                    TestIssue1230.Issue1230.MethodDecimal(System.Decimal(v));
                    TestIssue1230.Issue1230.MethodDecimal(System.Decimal(v));
                },
                TestInt: function TestInt() {
                    var v = 7;
                    var l = v;
                    l = v;

                    Bridge.Console.log(v);
                    Bridge.Console.log(v);
                    Bridge.Console.log(2);
                    Bridge.Console.log(2);
                    Bridge.Console.log(7);
                    TestIssue1230.Issue1230.MethodInt(v);
                    TestIssue1230.Issue1230.MethodInt(v);
                }
            }
        }
    });
