Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N064.Class64', {
        constructor: function () {
            this.$initialize();
        },
        $constructor1: function (related) {
            this.$initialize();
        },
        test: function () {
            var aux = new Test.BridgeIssues.N064.Class64.Aux1();
            new Test.BridgeIssues.N064.Class64.$constructor1(aux);
        }
    });

    Bridge.define('Test.BridgeIssues.N064.Class64.Aux1');

    Bridge.init();
});
