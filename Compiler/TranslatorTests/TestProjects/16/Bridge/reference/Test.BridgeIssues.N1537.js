Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1537.A", {
        props: {
            Property: {
                get: function () {
                    // Classes should be in the order A -> B -> C -> PlaceMeToTheEnd
                    return 1;
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N1537.B", {
        inherits: [Test.BridgeIssues.N1537.A]
    });

    Bridge.define("Test.BridgeIssues.N1537.C", {
        inherits: [Test.BridgeIssues.N1537.B]
    });

    Bridge.define("Test.BridgeIssues.N1537.PlaceMeToTheEnd");
});
