/**
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("TestMethodsWithNameAttributes.Example", {
        statics: {
            GetName: function GetName () {
                return "Test";
            }
        },
        GetInstanceName: function GetInstanceName () {
            return "Test";
        }
    });
});
