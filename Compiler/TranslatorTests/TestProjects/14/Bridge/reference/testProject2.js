Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define('TestProject2.TestClassB', {
        config: {
            properties: {
                Value1: 0
            }
        },
        getYourValue: function (MyParameter) {
            return 0;
        }
    });

    Bridge.init();
});
