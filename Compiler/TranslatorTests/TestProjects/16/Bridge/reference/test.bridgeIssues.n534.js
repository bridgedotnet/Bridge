Bridge.assembly({
        name: "TestProject",
        version: "0.0.0.0",
        compiler: "15.2.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Test.BridgeIssues.N534.Bridge534", {
            statics: {
                IntValue1: 1,
                IntValue2: 2,
                StringValue1: "3",
                StringValue2: "34",
                DecimalValue1: System.Decimal(5.0),
                DecimalValue2: System.Decimal(11.0)
            }
        });
    }
);
