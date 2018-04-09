Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("TestProject.Issues.N2262.CI2262", {
        inherits: [TestProject.Issues.N2262.I2262],
        $kind: "nested class",
        props: {
            Count: 0
        },
        alias: ["Count", "TestProject$Issues$N2262$I2262$Count"]
    });
});
