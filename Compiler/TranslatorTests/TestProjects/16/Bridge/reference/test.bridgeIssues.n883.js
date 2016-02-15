(function (globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N883.IInterface');
    
    Bridge.define('Test.BridgeIssues.N883.Class2', {
        inherits: [Test.BridgeIssues.N883.IInterface]
    });
    
    Bridge.define('Test.BridgeIssues.N883.Class1', {
        inherits: [Test.BridgeIssues.N883.Class2]
    });
    
    Bridge.init();
})(this);
