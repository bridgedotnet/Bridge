Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1552.App", {
        methods: {
            Main: function () {
                // Should have initialized like pointer = {v:3}
                var pointer = {v:3};
                // Should be referencing pointer like pointer.v
                var pointerValue = pointer.v;
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N1552.Pointer$1", function (T) { return {

    }; });
});
