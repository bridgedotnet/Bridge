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
            statics: {
                methods: {
                    $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetNumber","t":8,"sn":"GetNumber","rt":System.Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }
                }
            },
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
