Bridge.assembly({
        name: "TestProject",
        version: "0.0.0.0",
        compiler: "15.2.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Test.BridgeIssues.N065.Class65_1");

        Bridge.define("Test.BridgeIssues.N065.Class65_1.Nested");

        Bridge.define("Test.BridgeIssues.N065.Class65_2", {
            inherits: [Test.BridgeIssues.N065.Class65_1.Nested]
        });
    }
);
