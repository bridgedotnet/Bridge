/**
 * @compiler Bridge.NET 16.0.0-beta2
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
    });
        return MyModule;
    });

});
