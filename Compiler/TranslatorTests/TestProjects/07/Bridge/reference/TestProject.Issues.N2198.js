Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define("Module1", function () {
        var Module1 = { };
        /** @namespace TestProject.Issues.N2198 */

        /**
         * @public
         * @class Module1.TestProject.Issues.N2198.N2198
         */
        Bridge.define("TestProject.Issues.N2198.N2198", {
            $scope: Module1,
            /**
             * @static
             * @public
             * @this Module1.TestProject.Issues.N2198.N2198
             * @memberof Module1.TestProject.Issues.N2198.N2198
             * @return  {void}
             */
            main: function Main () {
                System.Console.WriteLine("Hello World!");
            },
            statics: {
                methods: {
                    $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":System.Void}]}; }
                }
            }
        });

        Bridge.init(function () { Module1.TestProject.Issues.N2198.N2198.Main(); });
        return Module1;
    });

});
