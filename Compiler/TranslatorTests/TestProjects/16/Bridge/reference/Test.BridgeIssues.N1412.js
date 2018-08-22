Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1412.SimpleTimeScaleController", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetComponent","t":8,"tpc":1,"tprm":["T"],"sn":"GetComponent","rt":System.Collections.Generic.List$1(System.String)},{"a":1,"n":"UpdateInternal","t":8,"sn":"UpdateInternal","rt":System.Void}]}; },
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
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            }
        }
    });
});
