Bridge.assembly({
        name: "TestProject",
        version: "0.0.0.0",
        compiler: "15.2.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Test.BridgeIssues.N059.Class59", {
            statics: {
                method1: function () {
                }
            },
            method1: function (d) {
            }
        });

        Bridge.define("Test.BridgeIssues.N059.Class59.Aux1");
    }
);
