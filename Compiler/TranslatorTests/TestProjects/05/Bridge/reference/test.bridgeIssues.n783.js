(function (globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N783.Base');
    
    Bridge.define('Test.BridgeIssues.N783.DontIgnore', {
        inherits: [Test.BridgeIssues.N783.Base]
    });
    
    Bridge.define('Test.BridgeIssues.N783.Ignore', {
        inherits: [Test.BridgeIssues.N783.Base]
    });
    
    Bridge.define('Test.BridgeIssues.N783.App', {
        statics: {
            main: function () {
                var base1 = new Test.BridgeIssues.N783.Base();
                var base2 = new Test.BridgeIssues.N783.Base();
    
                // Casting will be ignored
                var ignore = base1;
    
                // Default casting operation
                var dontIgnore = Bridge.cast(base2, Test.BridgeIssues.N783.DontIgnore);
            }
        }
    });
    
    Bridge.init();
})(this);
