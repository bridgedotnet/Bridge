Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1499.App", {
        Main: function () {
            var app = null;
            // When option "useTypedArrays": false, the code below should use || - System.Console.log(app || new Demo.App());
            System.Console.WriteLine(app || new Test.BridgeIssues.N1499.App());
        }
    });
});
