(function (globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N066.Rectangle66', {
        constructor$1: function (x1) {
            (new Test.BridgeIssues.N066.Rectangle66("constructor")).$clone(this);
        },
        constructor$2: function (x1, x2) {
        },
        constructor: function () {
        },
        $clone: function (to) { return this; },
        statics: {
            getDefaultValue: function () { return new Test.BridgeIssues.N066.Rectangle66(); }
        }
    });
    
    
    
    Bridge.init();
})(this);
