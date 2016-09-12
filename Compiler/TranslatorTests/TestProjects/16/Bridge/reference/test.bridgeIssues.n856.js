Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    
    Bridge.define('Test.BridgeIssues.N856.Bridge856', {
        statics: {
        
            test1: function () {
            }
        },
        config: {
            properties: {
            
            
                TestProperty: 0
            }
        },
    
        test2: function (a) {
            if (a === void 0) { a = null; }

        }
    });

});
