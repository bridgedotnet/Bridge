Bridge.assembly({
        name: "TestProject",
        compiler: "15.3.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Test.BridgeIssues.N391.Class391", {
            statics: {
                main1: function () {
                    var $t, $t1, $t2, $t3;
                    var TestArray1 = ["TestA", "TestB", "TestC"];
                    var TestArray2 = ["TestA", "TestB", "TestC"];

                    var doSomething = false;
                    $t = Bridge.getEnumerator(TestArray1);
                    while ($t.moveNext()) {
                        var x = $t.getCurrent();
                        $t1 = Bridge.getEnumerator(TestArray2);
                        while ($t1.moveNext()) {
                            var y = $t1.getCurrent();
                            doSomething = System.String.equals(x, y);
                        }
                    }

                    $t2 = Bridge.getEnumerator(TestArray1);
                    while ($t2.moveNext()) {
                        var x1 = $t2.getCurrent();
                        $t3 = Bridge.getEnumerator(TestArray2);
                        while ($t3.moveNext()) {
                            var y1 = $t3.getCurrent();
                            doSomething = System.String.equals(x1, y1);
                        }
                    }
                }
            }
        });
    }
);
