Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1215.TestExtraBrackets", {
        TestDouble: function () {
            var v = 0;
            v = --v;
            v = ++v;
        },
        TestDecimal: function () {
            var v = System.Decimal(0);
            v = (v = v.dec());
            v = (v = v.inc());
        },
        TestSingle: function () {
            var v = 0;
            v = --v;
            v = ++v;
        },
        TestLong: function () {
            var v = System.Int64(0);
            v = (v = v.dec());
            v = (v = v.inc());
        }
    });
});
