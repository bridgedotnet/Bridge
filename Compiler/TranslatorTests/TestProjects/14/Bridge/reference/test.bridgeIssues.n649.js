Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N649.TestClassA', {
        DoSomething: function (i) {
            //It should not change case of Console.WriteLine
            System.Console.log("Say something");
        }
    });

    Bridge.init();
});
