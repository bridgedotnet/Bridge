Bridge.assembly({ name: "TestProject", version: "0.0.0.0", compiler: "15.2.0" }, function ($asm, globals) {
    "use strict";

    Bridge.define("TestProject2.TestClassB", {
        config: {
            properties: {
                Value1: 0
            }
        }
    });
});
