Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.init(function () {
        // One line above the method
        var before = 5;
        before = (before + 1) | 0;
        // One line below the method
    });

    Bridge.define("Test.BridgeIssues.N963.Class963", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Before","is":true,"t":8,"sn":"Before","rt":System.Void},{"a":2,"n":"Main1","is":true,"t":8,"sn":"Main1","rt":System.Void}]}; },
        statics: {
            methods: {
                Main1: function () {
                    var i = 5;
                    i = (i + 1) | 0;
                }
            }
        }
    });
});
