Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define("Bridge528_A", ["bridge","dep1"], function (_, dep1) {
        var exports = { };
        Bridge.define("Test.BridgeIssues.N528.Bridge528_A", {
            $scope: exports
        });
        return exports;
    });

    define("Bridge528_B", ["bridge","dep2"], function (_, dep2) {
        var exports = { };
        Bridge.define("Test.BridgeIssues.N528.Bridge528_B", {
            $scope: exports
        });
        return exports;
    });

    define("Bridge528_C", ["bridge","dep1"], function (_, dep1) {
        var exports = { };
        Bridge.define("Test.BridgeIssues.N528.Bridge528_C", {
            $scope: exports
        });
        return exports;
    });

});
