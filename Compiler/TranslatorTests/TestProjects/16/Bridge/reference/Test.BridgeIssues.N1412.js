Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1412.SimpleTimeScaleController", {
        methods: {
            GetComponent: function (T) {
                return null;
            },
            UpdateInternal: function () {
                var $t;
                // There should be a teml JS variavble generated with no comma
                var animationComp = this.GetComponent(System.String);

                if (animationComp != null) {
                    $t = Bridge.getEnumerator(animationComp);
                    try {
                        while ($t.moveNext()) {
                            var state = $t.Current;

                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }}
            }
        }
    });
});
