Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    define("MyModule", ["bridge"], function (_) {
        var exports = { };
        Bridge.define('TestProject1.TestClassA', {
            config: {
                properties: {
                    Value1: 0
                }
            }
        });
        return exports;
    });


    Bridge.init();
});
