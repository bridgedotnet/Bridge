/**
 * @compiler Bridge.NET 16.0.0-beta3
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N783.App", {
        statics: {
            methods: {
                Main1: function () {
                    var base1 = new Test.BridgeIssues.N783.Base();
                    var base2 = new Test.BridgeIssues.N783.Base();

                    // Casting will be ignored regardless of the bridge.json setting IgnoreCast
                    var ignore = base1;

                    // Default casting operation but it will be ignored due to the bridge.json setting IgnoreCast
                    var dontIgnore = base2;
                }
            }
        }
    });
});
