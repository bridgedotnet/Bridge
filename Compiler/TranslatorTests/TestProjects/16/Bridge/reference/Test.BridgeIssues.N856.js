Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    
    Bridge.define("Test.BridgeIssues.N856.Bridge856", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Test1","is":true,"t":8,"sn":"Test1","rt":System.Void},{"a":2,"n":"Test2","t":8,"pi":[{"n":"a","dv":null,"o":true,"pt":System.String,"ps":0}],"sn":"Test2","rt":System.Void,"p":[System.String]},{"a":2,"n":"TestProperty","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_TestProperty","t":8,"rt":System.Int32,"fg":"TestProperty","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_TestProperty","t":8,"p":[System.Int32],"rt":System.Void,"fs":"TestProperty"},"fn":"TestProperty"}]}; },
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
