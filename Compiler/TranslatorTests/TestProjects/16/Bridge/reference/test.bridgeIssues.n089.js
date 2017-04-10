Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N089.Class89", {
        Test: function (p) {
            if (p === void 0) { p = []; }
            var i = p[System.Array.index(0, p)];
        }
    });
});
