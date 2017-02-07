Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N391.Class391", {
        statics: {
            main1: function () {
                var $t, $t1, $t2, $t3;
                var TestArray1 = System.Array.init(["TestA", "TestB", "TestC"], System.String);
                var TestArray2 = System.Array.init(["TestA", "TestB", "TestC"], System.String);

                var doSomething = false;
                $t = Bridge.getEnumerator(TestArray1);
                try {
                    while ($t.moveNext()) {
                        var x = $t.getCurrent();
                        $t1 = Bridge.getEnumerator(TestArray2);
                        try {
                            while ($t1.moveNext()) {
                                var y = $t1.getCurrent();
                                doSomething = System.String.equals(x, y);
                            }
                        }finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$dispose();
                            }
                        }
                    }
                }finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }
                $t2 = Bridge.getEnumerator(TestArray1);
                try {
                    while ($t2.moveNext()) {
                        var x1 = $t2.getCurrent();
                        $t3 = Bridge.getEnumerator(TestArray2);
                        try {
                            while ($t3.moveNext()) {
                                var y1 = $t3.getCurrent();
                                doSomething = System.String.equals(x1, y1);
                            }
                        }finally {
                            if (Bridge.is($t3, System.IDisposable)) {
                                $t3.System$IDisposable$dispose();
                            }
                        }
                    }
                }finally {
                    if (Bridge.is($t2, System.IDisposable)) {
                        $t2.System$IDisposable$dispose();
                    }
                }}
        }
    });
});
