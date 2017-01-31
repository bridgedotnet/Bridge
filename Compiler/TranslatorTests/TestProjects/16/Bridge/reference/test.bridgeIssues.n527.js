Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define("Bridge527_A", ["Bridge527_B"], function (Bridge527_B) {
        var Bridge527_A = { };
        Bridge.define("Test.BridgeIssues.N527.Bridge527_A", {
            $scope: Bridge527_A,
            getName: function () {
                var c = new Bridge527_B.Test.BridgeIssues.N527.Bridge527_B();
                return "Test";
            }
        });
        return Bridge527_A;
    });

    define("Bridge527_B", function () {
        var Bridge527_B = { };
        Bridge.define("Test.BridgeIssues.N527.Bridge527_B", {
            $scope: Bridge527_B
        });
        return Bridge527_B;
    });

});
