﻿Bridge.assembly({
        name: "TestProject",
        compiler: "15.3.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Test.BridgeIssues.N084.Class84", {
            test1: function () {
                try {
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            }
        });
    }
);
