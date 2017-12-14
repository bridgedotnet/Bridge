Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define("Bridge528_A", ["dep1"], function (dep1) {
        var Bridge528_A = { };
        Bridge.define("Test.BridgeIssues.N528.Bridge528_A", {
            $scope: Bridge528_A,
            statics: {
                methods: {
                    $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
                }
            }
        });
        return Bridge528_A;
    });

    define("Bridge528_B", ["dep2"], function (dep2) {
        var Bridge528_B = { };
        Bridge.define("Test.BridgeIssues.N528.Bridge528_B", {
            $scope: Bridge528_B,
            statics: {
                methods: {
                    $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
                }
            }
        });
        return Bridge528_B;
    });

    define("Bridge528_C", ["dep1"], function (dep1) {
        var Bridge528_C = { };
        Bridge.define("Test.BridgeIssues.N528.Bridge528_C", {
            $scope: Bridge528_C,
            statics: {
                methods: {
                    $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
                }
            }
        });
        return Bridge528_C;
    });

});
