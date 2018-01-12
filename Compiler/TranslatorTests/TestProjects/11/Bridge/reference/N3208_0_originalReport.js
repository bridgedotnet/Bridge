Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define("N3208_originalReport_module", function () {
        var N3208_originalReport_module = { };
        /** @namespace N3208_0_originalReport */

        /**
         * This differs from the original report on the issue because this does
         not use an UMD module output (which is used in the next test case for
         this same issue. The only difference applied here is, the module name
         will be output between double quotes.
         *
         * @public
         * @class N3208_originalReport_module.N3208_0_originalReport.Program
         */
        Bridge.define("N3208_0_originalReport.Program", {
            $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":System.Void}]}; },
            $scope: N3208_originalReport_module,
            main: function Main () {
                var msg = "Hello, World!";

                System.Console.WriteLine(msg);
            }
        });
        return N3208_originalReport_module;
    });

});
