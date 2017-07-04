/**
 * @compiler Bridge.NET 16.0.0-beta4
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Operation", {
        methods: {
            Add: function (a, b) {
                return ((a + b) | 0);
            }
        }
    });

    Bridge.define("o2", {
        methods: {
            Add: function (a, b) {
                return ((a + b) | 0);
            }
        }
    });
});
