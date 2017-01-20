Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("TestProject.Issues.N2262.CI2262", {
        inherits: [TestProject.Issues.N2262.I2262],
        config: {
            properties: {
                Count: 0
            },
            alias: [
            "getCount", "TestProject$Issues$N2262$I2262$getCount",
            "setCount", "TestProject$Issues$N2262$I2262$setCount"
            ]
        }
    });
});
