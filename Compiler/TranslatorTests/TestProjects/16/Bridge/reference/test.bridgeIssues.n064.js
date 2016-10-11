Bridge.assembly({ name: "TestProject", version: "0.0.0.0", compiler: "15.2.0" }, function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N064.Class64", {
        ctor: function () {
            this.$initialize();
        },
        $ctor1: function (related) {
            this.$initialize();
        },
        test: function () {
            var aux = new Test.BridgeIssues.N064.Class64.Aux1();
            new Test.BridgeIssues.N064.Class64.$ctor1(aux);
        }
    });

    Bridge.define("Test.BridgeIssues.N064.Class64.Aux1");
});
