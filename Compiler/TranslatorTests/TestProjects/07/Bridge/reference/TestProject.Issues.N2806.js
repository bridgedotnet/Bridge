Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define("$module2", function () {
        var $module2 = { };
        /** @namespace TestProject.Issues.N2806 */

        /**
         * @public
         * @class Module2806.TestProject.Issues.N2806.N2806
         */
        Bridge.define("TestProject.Issues.N2806.N2806", {
            $scope: $module2,
            methods: {
                /**
                 * @instance
                 * @public
                 * @this Module2806.TestProject.Issues.N2806.N2806
                 * @memberof Module2806.TestProject.Issues.N2806.N2806
                 * @return  {number}
                 */
                GetNumber: function () {
                    return 1;
                }
            }
        });
        return $module2;
    });

});
