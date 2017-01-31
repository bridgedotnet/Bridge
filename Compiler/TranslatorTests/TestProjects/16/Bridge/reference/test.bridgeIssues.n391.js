Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N391.Class391", {
        statics: {
            main1: function () {
                var $t, $t1, $t2, $t3;
                var TestArray1 = System.Array.init(["TestA", "TestB", "TestC"], String);
                var TestArray2 = System.Array.init(["TestA", "TestB", "TestC"], String);

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
});
