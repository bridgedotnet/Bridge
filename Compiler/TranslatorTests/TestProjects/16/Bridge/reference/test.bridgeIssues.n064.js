Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N064.Class64", {
        ctor: function () {
            this.$initialize();
        },
        $ctor1: function (related) {
            this.$initialize();
        },
        Test: function () {
            var aux = new Test.BridgeIssues.N064.Class64.Aux1();
            new Test.BridgeIssues.N064.Class64.$ctor1(aux);
        }
    });

    Bridge.define("Test.BridgeIssues.N064.Class64.Aux1");
});
