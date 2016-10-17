Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N557.Bridge557", {
        statics: {
            test1: function () {
                var text = document.createTextNode('');
            },
            test2: function () {
                var text = document.createTextNode("Some text");
            }
        }
    });
    }
);
