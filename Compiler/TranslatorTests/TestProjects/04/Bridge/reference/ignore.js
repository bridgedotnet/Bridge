Bridge.assembly({
        name: "TestProject",
        compiler: "15.3.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Test.BridgeIssues.N783.Ignore", {
            inherits: [Test.BridgeIssues.N783.Base]
        });
    }
);
