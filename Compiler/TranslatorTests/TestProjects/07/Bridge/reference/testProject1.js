Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define(function () {
        var MyModule = { };
    /** @namespace TestProject1 */

    /**
     * @class TestProject1.TestClassA
     */
    Bridge.define("TestProject1.TestClassA", {
        properties: {
            /**
             * Some property
             *
             * @instance
             * @public
             * @memberof TestProject1.TestClassA
             * @function Value1
             * @type number
             */
            Value1: 0
        },
        methods: {
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
            GetMyValue: function (i) {
                return "";
            }
        }
    });
        return MyModule;
    });

});
