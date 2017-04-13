Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    
    Bridge.define("Test.BridgeIssues.N856.Bridge856", {
        statics: {
            
            Test1: function () {
            }
        },
        config: {
            properties: {
                
                TestProperty: 0
            }
        },
        
        Test2: function (a) {
            if (a === void 0) { a = null; }

        }
    });
});
