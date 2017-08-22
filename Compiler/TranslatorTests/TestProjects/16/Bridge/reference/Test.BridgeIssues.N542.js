Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N542.Bridge542", {
        statics: {
            methods: {
                Test1: function () {
                    var blable = "";
                    /* 
                       vBoubli (@"/faaa");
                    */

                    return blable;
                },
                Test2: function () {
                    var blable = "";
                    vBoubli (@"/faaa");

                    return blable;
                }
            }
        }
    });
});
