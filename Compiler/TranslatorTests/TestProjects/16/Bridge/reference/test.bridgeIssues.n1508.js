Bridge.assembly({
        name: "TestProject",
        version: "0.0.0.0",
        compiler: "15.2.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Test.BridgeIssues.N1508.App", {
            statics: {
                upTo: function (value) {
                    return [value];
                },
                doIt: function () {
                    var $t, $t1, $t2;
                    // Should create var $t, $t1, $t2;
                    for (var dimensionNActual = 0; dimensionNActual < 4; dimensionNActual = (dimensionNActual + 1) | 0) {
                        $t = (function () {
                            // $t should not be re-created with var
                            $t1 = Bridge.getEnumerator(Test.BridgeIssues.N1508.App.upTo(dimensionNActual));
                            while ($t1.moveNext()) {
                                $t2 = (function () {
                                    var dimensionN = $t1.getCurrent();
                                    // $t2 should not be re-created with var
                                    var action;
                                    var xOut = 0;
                                    action = function () {
                                        ((xOut = (xOut + 1) | 0));
                                    };
                                    return {jump: 3, v: true};
                                }).call(this) || {};
                                if($t2.jump == 3) return {jump: 3, v: $t2.v};
                            }
                        }).call(this) || {};
                        if($t.jump == 3) return $t.v;
                    }
                    return false;
                }
            }
        });
    }
);
