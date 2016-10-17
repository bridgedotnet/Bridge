Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N384.N384");

    Bridge.define("Test.BridgeIssues.N384.N384.App", {
        statics: {
            main1: function () {
                var person = new Test.BridgeIssues.N384.Person();

                var msg1 = person.doSomething();
                var msg2 = person.doSomething();
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N384.Person");
});
