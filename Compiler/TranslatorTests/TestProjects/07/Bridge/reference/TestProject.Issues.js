/**
 * @compiler Bridge.NET 16.8.0
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define("MyModule", function () {
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
         * @class MyModule.TestProject.Issues.N2007
         */
        Bridge.define("TestProject.Issues.N2007", {
            $metadata : function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnConnected","t":2,"ad":{"a":2,"n":"add_OnConnected","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnConnected","rt":System.Void,"p":[Function]},"r":{"a":2,"n":"remove_OnConnected","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnConnected","rt":System.Void,"p":[Function]}},{"a":2,"n":"OnDisconnected","t":2,"ad":{"a":2,"n":"add_OnDisconnected","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnDisconnected","rt":System.Void,"p":[Function]},"r":{"a":2,"n":"remove_OnDisconnected","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnDisconnected","rt":System.Void,"p":[Function]}}]}; },
            $scope: MyModule,
            events: {
                /**
                 * Event for OnConnected
                 *
                 * @instance
                 * @public
                 * @this MyModule.TestProject.Issues.N2007
                 * @memberof MyModule.TestProject.Issues.N2007
                 * @function addOnConnected
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * Event for OnConnected
                 *
                 * @instance
                 * @public
                 * @this MyModule.TestProject.Issues.N2007
                 * @memberof MyModule.TestProject.Issues.N2007
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
                 * @this MyModule.TestProject.Issues.N2007
                 * @memberof MyModule.TestProject.Issues.N2007
                 * @function addOnDisconnected
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * Event for OnDisconnected
                 *
                 * @instance
                 * @public
                 * @this MyModule.TestProject.Issues.N2007
                 * @memberof MyModule.TestProject.Issues.N2007
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
