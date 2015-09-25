/* global Bridge */

"use strict";

Bridge.define('TestProject1.TestClassA', {
    config: {
        properties: {
            /**
             * Some property
             *
             * @instance
             * @public
             * @this TestProject1.TestClassA
             * @memberof TestProject1.TestClassA
             * @function getValue1
             * @return  {number}
             */
            /**
             * Some property
             *
             * @instance
             * @public
             * @this TestProject1.TestClassA
             * @memberof TestProject1.TestClassA
             * @function setValue1
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

Bridge.define('TestProject2.TestClassB', {
    config: {
        properties: {
            Value1: 0
        }
    },
    getYourValue: function (MyParameter) {
        return 0;
    }
});