Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define("Bridge528_A", ["dep1"], function (dep1) {
        var Bridge528_A = { };
        Bridge.define("Test.BridgeIssues.N528.Bridge528_A", {
            $scope: Bridge528_A
        });
        return Bridge528_A;
    });

    define("Bridge528_B", ["dep2"], function (dep2) {
        var Bridge528_B = { };
        Bridge.define("Test.BridgeIssues.N528.Bridge528_B", {
            $scope: Bridge528_B
        });
        return Bridge528_B;
    });

    define("Bridge528_C", ["dep1"], function (dep1) {
        var Bridge528_C = { };
        Bridge.define("Test.BridgeIssues.N528.Bridge528_C", {
            $scope: Bridge528_C
        });
        return Bridge528_C;
    });

});
