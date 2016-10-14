Bridge.assembly({
        name: "TestProject",
        compiler: "15.3.0"
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
