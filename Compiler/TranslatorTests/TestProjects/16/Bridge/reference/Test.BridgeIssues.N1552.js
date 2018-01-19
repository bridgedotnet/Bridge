Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1552.App", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","t":8,"sn":"Main","rt":System.Void}]}; },
        methods: {
            Main: function () {
                // Should have initialized like pointer = {v:3}
                var pointer = {v:3};
                // Should be referencing pointer like pointer.v
                var pointerValue = pointer.v;
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N1552.Pointer$1", function (T) { return {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":1,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"op_Implicit","is":true,"t":8,"pi":[{"n":"value","pt":T,"ps":0}],"tpc":0,"def":function (value) { return {v:value}; },"rt":Test.BridgeIssues.N1552.Pointer$1(T),"p":[T]},{"a":2,"n":"op_Implicit","is":true,"t":8,"pi":[{"n":"value","pt":Test.BridgeIssues.N1552.Pointer$1(T),"ps":0}],"tpc":0,"def":function (value) { return value.v; },"rt":T,"p":[Test.BridgeIssues.N1552.Pointer$1(T)]}]}; }
    }; });
});
