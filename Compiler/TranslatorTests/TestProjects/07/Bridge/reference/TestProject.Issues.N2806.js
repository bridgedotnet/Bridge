Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define("$module3", function () {
        var _module3 = { };
        /** @namespace TestProject.Issues.N2806 */

        /**
         * @public
         * @class _module3.TestProject.Issues.N2806.N2806
         */
        Bridge.define("TestProject.Issues.N2806.N2806", {
            $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetNumber","t":8,"sn":"GetNumber","rt":System.Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; },
            $scope: _module3,
            methods: {
                /**
                 * @instance
                 * @public
                 * @this _module3.TestProject.Issues.N2806.N2806
                 * @memberof _module3.TestProject.Issues.N2806.N2806
                 * @return  {number}
                 */
                GetNumber: function () {
                    return 1;
                }
            }
        });
        return _module3;
    });

});
