/**
 * @compiler Bridge.NET 17.1.2
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N059.Class59", {
        $metadata : function () { return {"nested":[Test.BridgeIssues.N059.Class59.Aux1],"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Method1","is":true,"t":8,"sn":"Method1","rt":System.Void},{"a":2,"n":"Method1","t":8,"pi":[{"n":"d","pt":Test.BridgeIssues.N059.Class59.Aux1,"ps":0}],"sn":"Method1","rt":System.Void,"p":[Test.BridgeIssues.N059.Class59.Aux1]}]}; },
        statics: {
            methods: {
                Method1: function () { }
            }
        },
        methods: {
            Method1: function (d) { }
        }
    });

    Bridge.define("Test.BridgeIssues.N059.Class59.Aux1", {
        $kind: "nested class",
        $metadata : function () { return {"td":Test.BridgeIssues.N059.Class59,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });
});
