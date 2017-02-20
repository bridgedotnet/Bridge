Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1412.SimpleTimeScaleController", {
        getComponent: function (T) {
            return null;
        },
        updateInternal: function () {
            var $t;
            // There should be a teml JS variavble generated with no comma
            var animationComp = this.getComponent(System.String);

            if (animationComp != null) {
                $t = Bridge.getEnumerator(animationComp);
                try {
                    while ($t.moveNext()) {
                        var state = $t.getCurrent();

                    }
                }finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }}
        }
    });
});
