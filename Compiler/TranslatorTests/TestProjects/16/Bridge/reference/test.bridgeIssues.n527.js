Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    define("Bridge527_A", ["bridge","Bridge527_B"], function (_, Bridge527_B) {
        var exports = { };
        Bridge.define('Test.BridgeIssues.N527.Bridge527_A', {
            $scope: exports,
            getName: function () {
                var c = new Bridge527_B.Test.BridgeIssues.N527.Bridge527_B();
                return "Test";
            }
        });
        return exports;
    });

    define("Bridge527_B", ["bridge"], function (_) {
        var exports = { };
        Bridge.define('Test.BridgeIssues.N527.Bridge527_B', {
            $scope: exports
        });
        return exports;
    });


});
