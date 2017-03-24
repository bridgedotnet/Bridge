Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    Bridge.define("N2493Operation1", {
        add: function (n) {
            return ((n + 1) | 0);
        }
    });

    Bridge.define("Operation2", {
        add: function (n) {
            return ((n + 2) | 0);
        }
    });
});
