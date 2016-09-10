Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N1412.SimpleTimeScaleController', {
        getComponent: function (T) {
            return null;
        },
        updateInternal: function () {
            var $t;
            // There should be a teml JS variavble generated with no comma
            var animationComp = this.getComponent(String);

            if (animationComp != null) {
                $t = Bridge.getEnumerator(animationComp);
                while ($t.moveNext()) {
                    var state = $t.getCurrent();

                }
            }
        }
    });

});
