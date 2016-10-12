Bridge.assembly({
        name: "TestProject",
        version: "0.0.0.0",
        compiler: "15.2.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Test.BridgeIssues.N542.Bridge542", {
            statics: {
                test1: function () {
                    var blable = "";
                    /* 
                vBoubli (@"/faaa");
            */

                    return blable;
                },
                test2: function () {
                    var blable = "";
                    
                vBoubli (@"/faaa");
            

                    return blable;
                }
            }
        });
    }
);
