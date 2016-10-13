Bridge.assembly({
        name: "TestProject",
        compiler: "15.2.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Test.BridgeIssues.N1424.A");

        Bridge.define("Test.BridgeIssues.N1424.Alpha", {
            data: 0
        });

        Bridge.define("Test.BridgeIssues.N1424.B");
    }
);
