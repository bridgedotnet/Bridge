Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define("Bridge527_A", ["Bridge527_B"], function (Bridge527_B) {
        var Bridge527_A = { };
        Bridge.define("Test.BridgeIssues.N527.Bridge527_A", {
            $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetName","t":8,"sn":"GetName","rt":System.String}]}; },
            $scope: Bridge527_A,
            methods: {
                GetName: function () {
                    var c = new Bridge527_B.Test.BridgeIssues.N527.Bridge527_B();
                    return "Test";
                }
            }
        });
        return Bridge527_A;
    });

    define("Bridge527_B", function () {
        var Bridge527_B = { };
        Bridge.define("Test.BridgeIssues.N527.Bridge527_B", {
            $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; },
            $scope: Bridge527_B
        });
        return Bridge527_B;
    });

});
