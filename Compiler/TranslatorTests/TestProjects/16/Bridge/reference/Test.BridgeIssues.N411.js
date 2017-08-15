Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N411.App", {
        methods: {
            TestFillText: function () {
                var canvas = document.getElementById("mycanvas");
                var ctx = canvas.getContext("2d");
                ctx.fillText("text", 50, 50);
            }
        }
    });
});
