Bridge.initAssembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    Bridge.define('Misc.A.Class1', {
        getInt: function (i) {
            return i;
        }
    });

    Bridge.define('Misc.A.EnumTest', {
        doSomething: function (m) {
            return m;
        }
    });

    Bridge.define('Misc.A.EnumTest.EnumA', {
        $kind: "enum",
        statics: {
            M1: 0,
            M2: 1
        }
    });

});
