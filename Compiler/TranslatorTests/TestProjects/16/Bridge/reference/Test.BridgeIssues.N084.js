Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N084.Class84", {
        $metadata : function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Test1","t":8,"sn":"Test1","rt":System.Void}]}; },
        methods: {
            Test1: function () {
                try {
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            }
        }
    });
});
