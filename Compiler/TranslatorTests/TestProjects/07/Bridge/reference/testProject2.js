Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define(function () {
        var MyModule = { };
    /** @namespace TestProject2 */

    /**
     * @class TestProject2.TestClassB
     */
    Bridge.define("TestProject2.TestClassB", {
        config: {
            properties: {
                /**
                 * @instance
                 * @public
                 * @memberof TestProject2.TestClassB
                 * @function Value1
                 * @type number
                 */
                Value1: 0
            }
        }
    });
        return MyModule;
    });

});
