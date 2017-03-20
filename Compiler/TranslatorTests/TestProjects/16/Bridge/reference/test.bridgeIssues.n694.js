Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N694.Bridge694", {
        statics: {
            test1: function () {
                var fruits = System.Array.init(3, null, System.Object);
                fruits[System.Array.index(0, fruits)] = "mango";
                fruits[System.Array.index(1, fruits)] = "apple";
                fruits[System.Array.index(2, fruits)] = "lemon";

                var list = System.Linq.Enumerable.from(fruits).select(function(x) { return Bridge.cast(x, System.String); }).orderBy($asm.$.Test.BridgeIssues.N694.Bridge694.f1).select($asm.$.Test.BridgeIssues.N694.Bridge694.f1).toList(System.String);
            }
        }
    });

    Bridge.ns("Test.BridgeIssues.N694.Bridge694", $asm.$);

    Bridge.apply($asm.$.Test.BridgeIssues.N694.Bridge694, {
        f1: function (fruit) {
            return fruit;
        }
    });
});
