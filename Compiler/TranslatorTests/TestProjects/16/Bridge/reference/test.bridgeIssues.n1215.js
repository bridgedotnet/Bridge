Bridge.assembly({
        name: "TestProject",
        compiler: "15.3.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Test.BridgeIssues.N1215.TestExtraBrackets", {
            testDouble: function () {
                var v = 0;
                v = --v;
                v = ++v;
            },
            testDecimal: function () {
                var v = System.Decimal(0);
                v = (v = v.dec());
                v = (v = v.inc());
            },
            testSingle: function () {
                var v = 0;
                v = --v;
                v = ++v;
            },
            testLong: function () {
                var v = System.Int64(0);
                v = (v = v.dec());
                v = (v = v.inc());
            }
        });
    }
);
