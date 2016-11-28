Bridge.assembly("TestProject", function ($asm, globals) {
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
});
