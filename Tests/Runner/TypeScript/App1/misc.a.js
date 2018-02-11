Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    Bridge.define("Misc.A.Class1", {
        methods: {
            GetInt: function (i) {
                return i;
            }
        }
    });

    Bridge.define("Misc.A.EnumTest", {
        methods: {
            DoSomething: function (m) {
                return m;
            }
        }
    });

    Bridge.define("Misc.A.EnumTest.EnumA", {
        $kind: "nested enum",
        statics: {
            fields: {
                M1: 0,
                M2: 1
            }
        }
    });
});
