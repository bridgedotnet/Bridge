Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1508.App", {
        statics: {
            methods: {
                UpTo: function (value) {
                    return System.Array.init([value], System.Int32);
                },
                DoIt: function () {
                    var $t;
                    // Should create var $t, $t1, $t2;
                    for (var dimensionNActual = 0; dimensionNActual < 4; dimensionNActual = (dimensionNActual + 1) | 0) {
                        // $t should not be re-created with var
                        $t = Bridge.getEnumerator(Test.BridgeIssues.N1508.App.UpTo(dimensionNActual));
                        try {
                            while ($t.moveNext()) {
                                var dimensionN = $t.Current;
                                // $t2 should not be re-created with var
                                var action;
                                var xOut = { v : 0 };
                                action = (function ($me, xOut) {
                                    return function () {
                                        ((xOut.v = (xOut.v + 1) | 0));
                                    };
                                })(this, xOut);
                                return true;
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$dispose();
                            }
                        }}
                    return false;
                }
            }
        }
    });
});
