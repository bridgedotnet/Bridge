Bridge.assembly({
        name: "TestProject",
        version: "0.0.0.0",
        compiler: "15.2.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Test.BridgeIssues.N089.Class89", {
            test: function (p) {
                if (p === void 0) { p = []; }
                var i = p[0];
            }
        });
    }
);
