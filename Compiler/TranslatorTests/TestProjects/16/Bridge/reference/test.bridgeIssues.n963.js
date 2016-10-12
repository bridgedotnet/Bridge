Bridge.assembly({
        name: "TestProject",
        version: "0.0.0.0",
        compiler: "15.2.0"
    },
    function ($asm, globals) {
        "use strict";

        (function(){
            // One line above the method
            var before = 5;
            before = (before + 1) | 0;
            // One line below the method
        })();

        Bridge.define("Test.BridgeIssues.N963.Class963", {
            statics: {
                main1: function () {
                    var i = 5;
                    i = (i + 1) | 0;
                }
            }
        });
    }
);
