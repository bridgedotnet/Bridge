Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N064.Class64", {
        $metadata : function () { return {"nested":[Test.BridgeIssues.N064.Class64.Aux1],"att":1048576,"a":4,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[Test.BridgeIssues.N064.Class64.Aux1],"pi":[{"n":"related","pt":Test.BridgeIssues.N064.Class64.Aux1,"ps":0}],"sn":"$ctor1"},{"a":2,"n":"Test","t":8,"sn":"Test","rt":System.Void}]}; },
        ctors: {
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (related) {
                this.$initialize();
            }
        },
        methods: {
            Test: function () {
                var aux = new Test.BridgeIssues.N064.Class64.Aux1();
                new Test.BridgeIssues.N064.Class64.$ctor1(aux);
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N064.Class64.Aux1", {
        $kind: "nested class",
        $metadata : function () { return {"td":Test.BridgeIssues.N064.Class64,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });
});
