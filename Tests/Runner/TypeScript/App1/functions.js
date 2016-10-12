Bridge.assembly({
        name: "TypeScriptTest",
        version: "15.2.0",
        compiler: "15.2.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Functions.DelegateClass", {
            methodVoidDelegate: null,
            methodStringDelegate: null,
            methodStringDelegateIntResult: null
        });

        Bridge.define("Functions.DelegateInterface", {
            $kind: "interface"
        });

        Bridge.define("Functions.Delegates");

        Bridge.define("Functions.Parameters", {
            getSomething: function (i) {
                if (i === void 0) { i = 5; }
                return i;
            },
            join: function (numbers) {
                if (numbers === void 0) { numbers = []; }
                var s = "";
                for (var i = 0; i < numbers.length; i = (i + 1) | 0) {
                    s = System.String.concat(s, numbers[i]);
                }

                return s;
            }
        });
    }
);
