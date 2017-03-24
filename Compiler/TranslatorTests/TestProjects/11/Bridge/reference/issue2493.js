Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Issue2493.Operation3", {
        add: function (a, b) {
            return ((a + b) | 0);
        }
    });
});
