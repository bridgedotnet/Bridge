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
            }
        });

        Bridge.init(function () { Module1.TestProject.Issues.N2198.N2198.Main(); });
        return Module1;
    });

});
