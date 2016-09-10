Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    (function(){
        // One line above the method
        var before = 5;
        before = (before + 1) | 0;
        // One line below the method
    })();

    Bridge.define('Test.BridgeIssues.N963.Class963', {
        statics: {
            main1: function () {
                var i = 5;
                i = (i + 1) | 0;
            }
        }
    });

});
