Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    
    Bridge.define("Test.BridgeIssues.N856.Bridge856", {
        statics: {
            methods: {
                
                Test1: function () { }
            }
        },
        props: {
            
            TestProperty: 0
        },
        methods: {
            
            Test2: function (a) {
                if (a === void 0) { a = null; }

            }
        }
    });
});
