Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N557.Bridge557", {
        statics: {
            methods: {
                Test1: function () {
                    var text = document.createTextNode("");
                },
                Test2: function () {
                    var text = document.createTextNode("Some text");
                }
            }
        }
    });
});
