Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N534.Bridge534", {
        statics: {
            fields: {
                IntValue1: 0,
                IntValue2: 0,
                StringValue1: null,
                StringValue2: null,
                DecimalValue1: System.Decimal(0.0),
                DecimalValue2: System.Decimal(0.0)
            },
            ctors: {
                init: function () {
                    this.IntValue1 = 1;
                    this.IntValue2 = 2;
                    this.StringValue1 = "3";
                    this.StringValue2 = "34";
                    this.DecimalValue1 = System.Decimal(5.0);
                    this.DecimalValue2 = System.Decimal(11.0);
                }
            }
        }
    });
});
