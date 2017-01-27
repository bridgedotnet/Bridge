/**
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define(function () {
        var MyModule = { };
    /** @namespace System */

    /**
     * @memberof System
     * @callback System.Action
     * @param   {string}    arg
     * @return  {void}
     */

    /** @namespace TestProject.Issues */

    /**
     * @class TestProject.Issues.N2007
     */
    Bridge.define("TestProject.Issues.N2007", {
        config: {
            events: {
                /**
                 * Event for OnConnected
                 *
                 * @instance
                 * @public
                 * @this TestProject.Issues.N2007
                 * @memberof TestProject.Issues.N2007
                 * @function addOnConnected
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * Event for OnConnected
                 *
                 * @instance
                 * @public
                 * @this TestProject.Issues.N2007
                 * @memberof TestProject.Issues.N2007
                 * @function removeOnConnected
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                OnConnected: null,
                /**
                 * Event for OnDisconnected
                 *
                 * @instance
                 * @public
                 * @this TestProject.Issues.N2007
                 * @memberof TestProject.Issues.N2007
                 * @function addOnDisconnected
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * Event for OnDisconnected
                 *
                 * @instance
                 * @public
                 * @this TestProject.Issues.N2007
                 * @memberof TestProject.Issues.N2007
                 * @function removeOnDisconnected
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                OnDisconnected: null
            }
        }
    });

    /** @namespace TestProject1 */

    /**
     * @class TestProject1.TestClassA
     */
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
        return MyModule;
    });

    define("Module1", function () {
        var Module1 = { };
        /**
         * @public
         * @class Module1.TestProject.Issues.N2198
         */
        Bridge.define("TestProject.Issues.N2198", {
            $scope: Module1,
            /**
             * @static
             * @public
             * @this Module1.TestProject.Issues.N2198
             * @memberof Module1.TestProject.Issues.N2198
             * @return  {void}
             */
            $main: function () {
                Bridge.Console.log("Hello World!");
            }
        });

        Bridge.init(function() { Module1.TestProject.Issues.N2198.main(); });
        return Module1;
    });

});
