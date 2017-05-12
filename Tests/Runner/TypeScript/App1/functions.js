Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    Bridge.define("Functions.DelegateClass", {
        fields: {
            MethodVoidDelegate: null,
            MethodStringDelegate: null,
            MethodStringDelegateIntResult: null
        }
    });

    Bridge.define("Functions.DelegateInterface", {
        $kind: "interface"
    });

    Bridge.define("Functions.Delegates");

    Bridge.define("Functions.MiddleBit", {
        fields: {
            fn: null
        }
    });

    Bridge.define("Functions.Parameters", {
        methods: {
            GetSomething: function (i) {
                if (i === void 0) { i = 5; }
                return i;
            },
            Join: function (numbers) {
                if (numbers === void 0) { numbers = []; }
                var s = "";
                for (var i = 0; i < numbers.length; i = (i + 1) | 0) {
                    s = System.String.concat(s, numbers[System.Array.index(i, numbers)]);
                }

                return s;
            }
        }
    });
});
