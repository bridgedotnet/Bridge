Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N089.Class89", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Test","t":8,"pi":[{"n":"p","ip":true,"pt":System.Array.type(System.Object),"ps":0}],"sn":"Test","rt":System.Void,"p":[System.Array.type(System.Object)]}]}; },
        methods: {
            Test: function (p) {
                if (p === void 0) { p = []; }
                var i = p[System.Array.index(0, p)];
            }
        }
    });
});
