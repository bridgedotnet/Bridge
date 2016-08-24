Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define('TestIssue1230.Issue1230', {
        statics: {
            testLong: function () {
                // Conversions should not have duplicated Bridge.Long: Bridge.Long(Bridge.Long(v))
                var v = 7;
                var l = System.Int64(v);
                l = System.Int64(v);

                System.Console.log(System.Int64(v).toString());
                System.Console.log(System.Int64((v)).toString());
                System.Console.log(System.Int64(2).toString());
                System.Console.log(System.Int64(2).toString());
                System.Console.log(System.Int64(7).toString());
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

                System.Console.log(System.Decimal(v).toString());
                System.Console.log(System.Decimal((v)).toString());
                System.Console.log(System.Decimal(2.0).toString());
                System.Console.log(System.Decimal(2.0).toString());
                System.Console.log(System.Decimal(7.0).toString());
                TestIssue1230.Issue1230.methodDecimal(System.Decimal(v));
                TestIssue1230.Issue1230.methodDecimal(System.Decimal(v));
            },
            testInt: function () {
                var v = 7;
                var l = v;
                l = v;

                System.Console.log(v);
                System.Console.log((v));
                System.Console.log(2);
                System.Console.log(2);
                System.Console.log(7);
                TestIssue1230.Issue1230.methodInt(v);
                TestIssue1230.Issue1230.methodInt(v);
            }
        }
    });

    Bridge.init();
});
