/**
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("TestProject1.TestClassA", {
        config: {
            properties: {
                /**
                 * Some property
                 *
                 * @instance
                 * @public
                 * @this TestProject1.TestClassA
                 * @memberof TestProject1.TestClassA
                 * @function Value1
                 * @return  {number}
                 */
                /**
                 * Some property
                 *
                 * @instance
                 * @public
                 * @this TestProject1.TestClassA
                 * @memberof TestProject1.TestClassA
                 * @function Value1
                 * @param   {number}    value
                 * @return  {void}
                 */
                Value1: 0
            }
        },
        /**
         * GetMyValue method
         *
         * @instance
         * @public
         * @this TestProject1.TestClassA
         * @memberof TestProject1.TestClassA
         * @param   {number}    i    Number of somethng
         * @return  {string}         A good string
         */
        getMyValue: function (i) {
            return "";
        }
    });
});
