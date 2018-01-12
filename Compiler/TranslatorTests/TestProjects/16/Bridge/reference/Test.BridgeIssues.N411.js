Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N411.App", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"TestFillText","t":8,"sn":"TestFillText","rt":System.Void}]}; },
        methods: {
            TestFillText: function () {
                var canvas = document.getElementById("mycanvas");
                var ctx = canvas.getContext("2d");
                ctx.fillText("text", 50, 50);
            }
        }
    });
});
