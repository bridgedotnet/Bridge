    Bridge.define("TestIssue1230.Issue1230", {
        statics: {
            testLong: function () {
                // Conversions should not have duplicated Bridge.Long: Bridge.Long(Bridge.Long(v))
                var v = 7;
                var l = System.Int64(v);
                l = System.Int64(v);

                Bridge.Console.log(System.Int64(v).toString());
                Bridge.Console.log(System.Int64((v)).toString());
                Bridge.Console.log(System.Int64(2).toString());
                Bridge.Console.log(System.Int64(2).toString());
                Bridge.Console.log(System.Int64(7).toString());
                TestIssue1230.Issue1230.methodLong(System.Int64(v));
                TestIssue1230.Issue1230.methodLong(System.Int64(v));
            },
            methodLong: function (l) {
            },
            methodDecimal: function (l) {
            },
            methodInt: function (l) {
            },
            testDecimal: function () {
                // Conversions should not have duplicated Bridge.Decimal: Bridge.Decimal(Bridge.Decimal(v))
                var v = 7;
                var l = System.Decimal(v);
                l = System.Decimal(v);

                Bridge.Console.log(System.Decimal(v).toString());
                Bridge.Console.log(System.Decimal((v)).toString());
                Bridge.Console.log(System.Decimal(2.0).toString());
                Bridge.Console.log(System.Decimal(2.0).toString());
                Bridge.Console.log(System.Decimal(7.0).toString());
                TestIssue1230.Issue1230.methodDecimal(System.Decimal(v));
                TestIssue1230.Issue1230.methodDecimal(System.Decimal(v));
            },
            testInt: function () {
                var v = 7;
                var l = v;
                l = v;

                Bridge.Console.log(v);
                Bridge.Console.log((v));
                Bridge.Console.log(2);
                Bridge.Console.log(2);
                Bridge.Console.log(7);
                TestIssue1230.Issue1230.methodInt(v);
                TestIssue1230.Issue1230.methodInt(v);
            }
        }
    });
