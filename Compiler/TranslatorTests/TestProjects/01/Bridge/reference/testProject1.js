Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define('TestProject1.TestClassA', {
        config: {
            properties: {
                Value1: 0
            }
        }
    });

    Bridge.init();
});
