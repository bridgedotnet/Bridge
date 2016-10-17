Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

define("MyModule", ["bridge"], function (_) {
    var exports = { };
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
                 * @this TestProject2.TestClassB
                 * @memberof TestProject2.TestClassB
                 * @function getValue1
                 * @return  {number}
                 */
                /**
                 * @instance
                 * @public
                 * @this TestProject2.TestClassB
                 * @memberof TestProject2.TestClassB
                 * @function setValue1
                 * @param   {number}    value
                 * @return  {void}
                 */
                Value1: 0
            }
        }
    });
    return exports;
});

});
