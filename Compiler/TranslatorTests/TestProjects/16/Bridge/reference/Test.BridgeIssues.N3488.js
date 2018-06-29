Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    require(["Test", "Test", "Test"], function (Test, lib2, lib3) {
        /** @namespace Test.BridgeIssues.N3488 */
    
        /**
         * The output here must be something like:
         require(["Test", "Test", "Test"], function (Test, lib2, lib3) {
         not this:
         require(["Test"], function (Test) {
         In othre words, should require the same name three times, and
         for each, include the respective namespace as one of the
         function's parameters.
         *
         * @public
         * @class Test.BridgeIssues.N3488.N3488
         */
        Bridge.define("Test.BridgeIssues.N3488.N3488", {
            $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":System.Void}]}; },
            main: function Main () {
                var a = new Test.Library1.TestModule.A();
                var aa = new Test.Library1.TestModule.AA();
                var b = new lib2.Library2.TestModule.B();
                var c = new lib3.Library3.TestModule.C();
            }
        });
        Bridge.init();
    });
});
