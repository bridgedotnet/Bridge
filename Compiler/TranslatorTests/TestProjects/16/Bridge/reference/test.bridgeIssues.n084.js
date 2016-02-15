(function (globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N084.Class84', {
        test1: function () {
            try {
            }
            catch ($e1) {
                $e1 = Bridge.Exception.create($e1);
            }
        }
    });
    
    
    
    Bridge.init();
})(this);
