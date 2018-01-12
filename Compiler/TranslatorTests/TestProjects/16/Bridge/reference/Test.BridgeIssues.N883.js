Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N883.IInterface", {
        $kind: "interface",
        $metadata : function () { return {"att":161,"a":2}; }
    });

    Bridge.define("Test.BridgeIssues.N883.Class2", {
        inherits: [Test.BridgeIssues.N883.IInterface],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });

    Bridge.define("Test.BridgeIssues.N883.Class1", {
        inherits: [Test.BridgeIssues.N883.Class2],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });
});
