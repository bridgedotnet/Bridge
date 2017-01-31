Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("TestProject.Issues.N2262", {
        doSomething: function () {
            var i = new TestProject.Issues.N2262.CI2262();

            // [ExternalInterface(true)] should be applied on Assembly level
            i.TestProject$Issues$N2262$I2262$setCount(1);
        }
    });
});
