Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N524.Bridge524", {
        $metadata : function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CallAsGetter","is":true,"t":8,"sn":"CallAsGetter","rt":System.Void}]}; },
        statics: {
            methods: {
                CallAsGetter: function () {
                    var list = new (Test.BridgeIssues.N524.Bridge524.ImmutableList$1(System.Int32))();
                    var firstValue = list[0];
                }
            }
        }
    });
});
