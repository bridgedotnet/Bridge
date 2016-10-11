Bridge.assembly({ name: "TestProject", version: "0.0.0.0", compiler: "15.2.0" }, function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N883.IInterface", {
        $kind: "interface"
    });

    Bridge.define("Test.BridgeIssues.N883.Class2", {
        inherits: [Test.BridgeIssues.N883.IInterface]
    });

    Bridge.define("Test.BridgeIssues.N883.Class1", {
        inherits: [Test.BridgeIssues.N883.Class2]
    });
});
