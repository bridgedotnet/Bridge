Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N2143.Level1$1", {
        doSomething1: function (p) {
            // Should not contain generic parameter in function
        }
    });

    Bridge.define("Test.BridgeIssues.N2143.Level1$1.Level2", {
        getValue: function () {
            // Should not contain generic parameter in function
            return Bridge.getDefaultValue(System.Object);
        }
    });

    Bridge.define("Test.BridgeIssues.N2143.Level1$1.Level2.Level3", {
        getValue: function () {
            // Should not contain generic parameter in function
            return Bridge.getDefaultValue(System.Object);
        }
    });
});
