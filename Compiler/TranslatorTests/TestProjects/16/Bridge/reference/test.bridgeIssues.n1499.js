Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N1499.App', {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.main);
                }
            },
            main: function () {
                var app = null;
                // When option "useTypedArrays": false, the code below should use || - System.Console.log(app || new Demo.App());
                System.Console.log(app || new Test.BridgeIssues.N1499.App());
            }
        },
        $entryPoint: true
    });

    Bridge.init();
});
