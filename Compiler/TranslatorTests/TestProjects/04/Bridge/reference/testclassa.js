Bridge.assembly({
        name: "TestProject",
        compiler: "15.2.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("TestProject1.TestClassA", {
            config: {
                properties: {
                    Value1: 0
                }
            }
        });
    }
);
