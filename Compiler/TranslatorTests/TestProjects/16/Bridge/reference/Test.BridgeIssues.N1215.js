Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1215.TestExtraBrackets", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"TestDecimal","t":8,"sn":"TestDecimal","rt":System.Void},{"a":2,"n":"TestDouble","t":8,"sn":"TestDouble","rt":System.Void},{"a":2,"n":"TestLong","t":8,"sn":"TestLong","rt":System.Void},{"a":2,"n":"TestSingle","t":8,"sn":"TestSingle","rt":System.Void}]}; },
        methods: {
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
        }
    });
});
