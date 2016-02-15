(function (globals) {
    "use strict";

    
    Bridge.define('Test.BridgeIssues.N856.Bridge856', {
        config: {
            properties: {
                
                
                TestProperty: 0
            }
        },
        
        test2: function (a) {
            if (a === void 0) { a = null; }
    
        },
        statics: {
            
            test1: function () {
            }
        }
    });
    
    
    
    Bridge.init();
})(this);
